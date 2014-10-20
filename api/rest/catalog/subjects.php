<?php
/*
Restful Web Service Name: Subjects
Description: Provide access to catalog subjects through parameterized uri string that will return valid xml or json
Version: .1
Author: Matt Eschenbaum
*/

function getSubjectList($params){
	try{
		
		$q_college = ( is_array($params) && isset($params[3]) )? trim(urldecode($params[3])) : null;

		if($q_college != null){
			$q_string = "Select DISTINCT(WSVCATG_SUBJ_CODE), WSVCATG_SUBJ_CODE_DESC, WSVCATG_COLL_CODE from wsvcatg where WSVCATG_COLL_CODE = :collcode and WSVCATG_CRSE_NUMB <> '1XXX' and WSVCATG_CRSE_NUMB <> '2XXX' and WSVCATG_CRSE_NUMB <> '3XXX' and WSVCATG_CRSE_NUMB <> '4XXX' order by WSVCATG_SUBJ_CODE_DESC";
		}else{
			$q_string = "Select DISTINCT(WSVCATG_SUBJ_CODE), WSVCATG_SUBJ_CODE_DESC from wsvcatg where WSVCATG_CRSE_NUMB <> '1XXX' and WSVCATG_CRSE_NUMB <> '2XXX' and WSVCATG_CRSE_NUMB <> '3XXX' and WSVCATG_CRSE_NUMB <> '4XXX' order by WSVCATG_SUBJ_CODE_DESC";
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
			if($q_college != null)
				oci_bind_by_name($result, ':collcode', $q_college);
			$r = oci_execute($result);
			if (!$r) {
				if(API_DEBUG){
					$e = oci_error($result);  // For oci_execute errors pass the statement handle
					$tmpMsg = htmlentities($e['message'])."\n<pre>\n".htmlentities($e['sqltext']).printf("\n%".($e['offset']+1)."s", "^")."\n</pre>\n";
					throw new Exception($tmpMsg, '500');
				}else{
					throw new Exception('', 500);
					die;
				}
			}
			//return array
			$subjects = array();
			while (($subject = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS+OCI_RETURN_LOBS))) {
				$subjects[] = array('subject'=>$subject);
			}
			oci_free_statement($result);
			oci_close($conn);
			
			return $subjects;
		
		}else{throw new Exception('', 400);}
	
	}catch(Exception $e){RestUtils::sendResponse($e->getCode(), $e->getMessage());}
}

try{
	$data = RestUtils::processRequest();
	if(!isset($path_params))
		$path_params = ( $_SERVER['PATH_INFO'] != null )? explode("/", $_SERVER['PATH_INFO']) : null;
	
	switch($data->getMethod()){
		case 'get':
			$subjects = getSubjectList($path_params);
			if($data->getHttpAccept() == 'json'){
				RestUtils::sendResponse(200, json_encode($subjects), 'json');
			}	else{
				$s_body = "<subjects>";
				foreach($subjects as $index => $subject) {
					foreach($subject as $key => $value) {
						$s_body .= "<subject>";
						foreach($value as $tag => $val) {
							$s_body .= "<$tag><![CDATA[$val]]></$tag>";
						}
						$s_body .= "</subject>";
					}
				}
				$s_body .= "</subjects>";
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
