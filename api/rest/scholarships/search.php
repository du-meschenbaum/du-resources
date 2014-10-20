<?php
/*
Restful Web Service Name: Scholarships
Description: Query database of scholarships and return valid xml or json
Version: .1
Author: Matt Eschenbaum

*/

function getScholarships($page=0,$params){
	try{
	
		if(is_array($params) && count($params)){
			$str = 'SELECT scholar_title, scholar_award_amount, scholar_number_recipients, scholar_du_private, scholar_merit_need, scholar_gpa, scholar_resident_colorado, scholar_resident_international, scholar_date_open, scholar_date_deadline, scholar_url, scholar_description, scholar_academic_level, scholar_enrollment, scholar_under_represented, scholar_college, scholar_major, scholar_grad_undergrad FROM scholarships WHERE 1=1';
			$qArray = array();
			foreach($params as $key => $val){
				if(is_array($val) || strlen(ltrim(rtrim($val)))){
					switch($key){

						case 'classLevel':
							$str .= ' AND ( scholar_grad_undergrad = :classLevel OR scholar_grad_undergrad IS NULL )';
							$qArray[':classLevel'] = $val;
							break;

						case 'schoolCollege':
							$str .= ' AND ( scholar_college LIKE :schoolCollege OR scholar_college IS NULL )';
							$tmpStr = '%'.$val.'%';
							$qArray[':schoolCollege'] = $tmpStr;
							break;

						case 'major':
							$str .= ' AND ( scholar_major LIKE :major OR scholar_major IS NULL )';
							$tmpStr = '%'.$val.'%';
							$qArray[':major'] = $tmpStr;
							break;

						case 'gpa':
							$str .= ' AND (scholar_gpa <= :gpa OR scholar_gpa IS NULL)';
							$qArray[':gpa'] = $val;
							break;

						case 'resident':
							if($val == 'false'){
								$str .= ' AND scholar_resident_colorado = :resident';
								$qArray[':resident'] = $val;
							}
							break;

						case 'international':
							$str .= ' AND scholar_resident_international = :international';
					    $qArray[':international'] = $val;
							break;

						case 'scholarshiptype':
							if(is_array($val) && count($val)){
								$tmpMerit=array();$tmpDU=array();
								for($i=0,$cnt1=count($val);$i<$cnt1;$i++){
									if($val[$i] == 'merit' || $val[$i] == 'need')
										$tmpMerit[] = $val[$i];
									else
										$tmpDU[] = $val[$i];
								}
								
								if(count($tmpMerit) == 1){
									$str .= ' AND scholar_merit_need = :merit';
									$qArray[':merit'] = $tmpMerit[0];
								}
								if(count($tmpDU) == 1){
									$str .= ' AND scholar_du_private = :private';
									$qArray[':private'] = $tmpDU[0];
								}
							}
							break;

						case 'searchcriteria':
							if(is_array($val) && count($val)){
								if(count($val) > 1){
									$tmpCriteria=' AND ( ';
									for($j=0,$cnt2=count($val);$j<$cnt2;$j++){
										$tmpStr = '%'.$val[$j].'%';
										if($j != $cnt2-1)
											$tmpCriteria .= 'scholar_under_represented LIKE :searchcriteria'.$j.' OR ';
										else
											$tmpCriteria .= 'scholar_under_represented LIKE :searchcriteria'.$j.' ';
										$tmpKey = ':searchcriteria'.$j;
										$qArray[$tmpKey] = $tmpStr;
									}
									$str .= $tmpCriteria.')';
									
								}else{
									$str .= ' AND scholar_under_represented LIKE :searchcriteria';
									$tmpStr = '%'.$val[0].'%';
									$qArray[':searchcriteria'] = $tmpStr;
								}
							}
							break;
	
						case 'expired':
							if($val == 'false'){
								$dt = date("n/j/Y");
								$str .= ' AND (scholar_date_deadline < :expired OR scholar_date_deadline IS NULL)';
								$qArray[':expired'] = $dt;
							}
							break;

						case 'search_term':
							$tmpStr = '%'.$val.'%';
							$str .= ' AND scholar_description LIKE :search_term';
							$qArray[':search_term'] = $tmpStr;
							break;

					}
				}
			}
			/* Add Limit and Order */
			$qryLimit_strt = ($page == 0)?0:(10 * (int)$page);
			$qryLimit_end = ($page == 0)?11:(10 * (int)$page)+11;
			$str .= ' ORDER BY scholar_award_amount LIMIT '.$qryLimit_strt.', '.$qryLimit_end;

			$conn = init_database(ENVIROMENT_DB_MYSQL);
			$rows = array();
			$stmt =  $conn->prepare($str);
			$stmt->execute($qArray);
			$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
			$conn = null;
			return $rows;
			
		}else{
			return array();
		}

	}catch(Exception $e){RestUtils::sendResponse($e->getCode(), $e->getMessage());}
}

try{
	$data = RestUtils::processRequest();
	if(!isset($path_params))
		$path_params = ( $_SERVER['PATH_INFO'] != null )? explode("/", $_SERVER['PATH_INFO']) : null;
	
	$page = (isset($path_params[3]) && strlen($path_params[3]))?(int)$path_params[3]:0;
	switch($data->getMethod()){
		case 'get':
			$courses = getScholarships($page, $data->getRequestVars());
			
			if($data->getHttpAccept() == 'json'){
				RestUtils::sendResponse(200, json_encode($courses), 'json');
			}else{
				$s_body = "<scholarships>";
				foreach($courses as $key => $value) {
					$s_body .= "<scholarship>";
					foreach($value as $tag => $val) {
						$s_body .= "<$tag><![CDATA[$val]]></$tag>";
					}
					$s_body .= "</scholarship>";
				}
				$s_body .= "</scholarships>";
				RestUtils::sendResponse(200, $s_body, 'xml');
			}
			break;
	
		case 'post':
			RestUtils::sendResponse(501);
			break;
	
		case 'put':
			RestUtils::sendResponse(501);
			break;
	
		default:
			RestUtils::sendResponse(400);
	}
}catch(Exception $e){
	if(API_DEBUG){
		RestUtils::sendResponse(500, htmlentities($e['message'], ENT_QUOTES));
	}else{
		RestUtils::sendResponse(500);
	}
}
?>
