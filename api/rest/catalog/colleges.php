<?php
/*
Restful Web Service Name: Colleges
Description: Provide access to catalog colleges through parameterized uri string that will return valid xml or json
Version: .1
Author: Matt Eschenbaum
*/

function getCollegeList($params){
	try{
		
		$q_string = "Select DISTINCT(WSVCATG_COLL_CODE), WSVCATG_COLL_CODE_DESC from wsvcatg order by WSVCATG_COLL_CODE_DESC";
		
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
			$colleges = array();
			while (($college = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS+OCI_RETURN_LOBS))) {
				$colleges[] = array('college'=>$college);
			}
			oci_free_statement($result);
			oci_close($conn);
			
			return $colleges;
		
		}else{throw new Exception('', 504);}
	
	}catch(Exception $e){RestUtils::sendResponse($e->getCode(), $e->getMessage());}
}

try{
	$data = RestUtils::processRequest();
	if(!isset($path_params))
		$path_params = ( $_SERVER['PATH_INFO'] != null )? explode("/", $_SERVER['PATH_INFO']) : null;
	
	switch($data->getMethod()){
		case 'get':
		
			$colleges = getCollegeList($path_params);
			if($data->getHttpAccept() == 'json'){
				RestUtils::sendResponse(200, json_encode($colleges), 'json');
			}	else{
				$s_body = "<colleges>";
				foreach($colleges as $index => $college) {
					foreach($college as $key => $value) {
						$s_body .= "<college>";
						foreach($value as $tag => $val) {
							$s_body .= "<$tag><![CDATA[$val]]></$tag>";
						}
						$s_body .= "</college>";
					}
				}
				$s_body .= "</colleges>";
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
