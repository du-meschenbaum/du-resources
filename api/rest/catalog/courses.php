<?php
/*
Restful Web Service Name: Courses
Description: Provide access to courses through parameterized uri string that will return valid xml or json
Version: .1
Author: Matt Eschenbaum

*/

function getCourseList($params){
	try{
		$numOfVals = sizeof($params);
		$q_coursesby = ( is_array($params) && isset($params[3]) )? $params[3] : null;
		$q_val = ( is_array($params) && isset($params[4]) )? $params[4] : null;
		$q_colval = ( is_array($params) && isset($params[5]) )? $params[5] : null;
		
		switch($q_coursesby){
			case 'college':
				if($q_val != null){
					$q_string = "Select * from wsvcatg where WSVCATG_COLL_CODE = :myVal and WSVCATG_CRSE_NUMB <> '1XXX' and WSVCATG_CRSE_NUMB <> '2XXX' and WSVCATG_CRSE_NUMB <> '3XXX' and WSVCATG_CRSE_NUMB <> '4XXX' and WSVCATG_CREDITS not like '_ to _' and WSVCATG_CREDITS not like '_ to __' order by WSVCATG_SUBJ_CODE,WSVCATG_CRSE_NUMB";
				}else{$q_string = null;}
				break;
			case 'subject':
				if($q_val != null){
					$q_string = "Select * from wsvcatg where WSVCATG_SUBJ_CODE = :myVal and WSVCATG_CRSE_NUMB <> '1XXX' and WSVCATG_CRSE_NUMB <> '2XXX' and WSVCATG_CRSE_NUMB <> '3XXX' and WSVCATG_CRSE_NUMB <> '4XXX' and WSVCATG_CREDITS not like '_ to _' and WSVCATG_CREDITS not like '_ to __' order by WSVCATG_SUBJ_CODE,WSVCATG_CRSE_NUMB";
				}else{$q_string = null;}
				break;
			case 'collegesubject':
				if($q_colval != null){
					$q_string = "Select * from wsvcatg where WSVCATG_COLL_CODE = :myColVal and WSVCATG_SUBJ_CODE = :myVal and WSVCATG_CRSE_NUMB <> '1XXX' and WSVCATG_CRSE_NUMB <> '2XXX' and WSVCATG_CRSE_NUMB <> '3XXX' and WSVCATG_CRSE_NUMB <> '4XXX' order by WSVCATG_SUBJ_CODE,WSVCATG_CRSE_NUMB";
				}else{$q_string = null;}
				break;
			case 'summer':
				if($q_val != null){
					$q_string = "SELECT CRS_TERM_CODE, CRS_CRN, CRS_SUBJ_CODE, CRSE_NUMBER, CRS_SECTION, CRS_TITLE, CRS_LONG_TITLE, CRS_SCHED_CODE, CRS_SCHED_DESC, CRS_START_DATE, CRS_END_DATE, CRS_MAX_ENRL, CRS_CATALOG_DESC FROM WSVSUMR WHERE ";
					if($numOfVals > 5){
						$q_string .= "CRS_COLL_CODE IN (";
						for($i=5;$i < $numOfVals;++$i){
							$q_string .= (($i+1) != $numOfVals)? ":myVal$i, " : ":myVal$i";
						}
						$q_string .= ")";
					}else{
						$q_string .= "CRS_COLL_CODE = :myVal";
					}
					$q_string .= " ORDER BY CRS_SUBJ_CODE, CRSE_NUMBER, CRS_SECTION";
				}else{$q_string = null;}
				break;
			default:
				$q_string = null;
		}
	
		if($q_string != null){
			$conn = init_database(ENVIROMENT_DB_BANNER);
			$result = oci_parse($conn, $q_string);
			if (!$result) {
				if(API_DEBUG){
					$e = oci_error();
					throw new Exception(htmlentities($e['message'], ENT_QUOTES), '500');
				}else{
					throw new Exception('', 500);
					die;
				}
			}
			oci_bind_by_name($result, ':myVal', $q_val);
			if($q_colval != null)
				oci_bind_by_name($result, ':myColVal', $q_colval);
			$r = oci_execute($result);
			if (!$r) {
				if(API_DEBUG){
					$e = oci_error($result);  // For oci_execute errors pass the statement handle
					$tmpMsg = htmlentities($e['message'])."\n<pre>\n".htmlentities($e['sqltext']).printf("\n%".($e['offset']+2)."s", "^")."\n</pre>\n";
					throw new Exception($tmpMsg, '500');
				}else{
					throw new Exception('', 500);
					die;
				}
			}
			//return array
			$courses = array();
			while (($course = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS+OCI_RETURN_LOBS))) {
				$courses[] = array('course'=>$course);
			}
			oci_free_statement($result);
			oci_close($conn);
			
			return $courses;
		
		}else{throw new Exception('', 400);}
	
	}catch(Exception $e){RestUtils::sendResponse($e->getCode(), $e->getMessage());}
}

try{
	$data = RestUtils::processRequest();
	if(!isset($path_params))
		$path_params = ( $_SERVER['PATH_INFO'] != null )? explode("/", $_SERVER['PATH_INFO']) : null;
	
	switch($data->getMethod()){
		case 'get':
			$courses = getCourseList($path_params);
			if($data->getHttpAccept() == 'json'){
				RestUtils::sendResponse(200, json_encode($courses), 'json');
			}	else{
				$s_body = "<courses>";
				foreach($courses as $index => $course) {
					foreach($course as $key => $value) {
						$s_body .= "<course>";
						foreach($value as $tag => $val) {
							$s_body .= "<$tag><![CDATA[$val]]></$tag>";
						}
						$s_body .= "</course>";
					}
				}
				$s_body .= "</courses>";
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
