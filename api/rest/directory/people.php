<?php
/*
Restful Web Service Name: People
Description: Provide access to people info through parameterized uri string that will return valid xml or json
Version: .1
Author: Matt Eschenbaum

*/

function getPeople($params){
	try{
		//print(count($params));
		$searchString = ( is_array($params) && isset($params[3]) && strlen($params[3]) )? trim(urldecode($params[3])) : null;
		$sql = "";
		$sql_select = 'COALESCE(d1.ID, d5.ID, d4.ID) "ID", COALESCE(d1.NAME, d5.NAME, d4.NAME) "NAME", COALESCE(d1.FIRST_NAME, d5.FIRST_NAME, d4.FIRST_NAME) "FNAME", COALESCE(d1.LAST_NAME, d5.LAST_NAME, d4.LAST_NAME) "LNAME", COALESCE(d1.EMAIL, d5.EMAIL, d4.EMAIL) "EMAIL", COALESCE(d1.JOB_TITLE, d4.EMERITII_TITLE) "TITLE", COALESCE(d1.DEPT_NAME, d4.ACADEMIC_UNIT_NAME) "UNIT", d1.OFFICE_ADDRESS, d1.OFFICE_CITY_ST_ZIP, d1.OFFICE_PHONE';
		$sql_from = 'WPVDIR1 d1 FULL OUTER JOIN WPVDIR5 d5 ON d1.ID = d5.ID FULL OUTER JOIN WPVDIR4 d4 ON d5.ID = d4.ID';

		if (count($userID = explode('uid::', $searchString)) > 1) { // assume search by ID
				$sql = "SELECT $sql_select FROM $sql_from WHERE ( d1.ID = :mySearchString OR d5.ID = :mySearchString OR d4.ID = :mySearchString )";
				$searchString = api_decrypt($userID[1]);
		} elseif (empty($searchString)) {
				throw new Exception('', 400);die;
		} elseif (isValidEmail($searchString)) { // assume search by email
				$sql = "SELECT $sql_select FROM $sql_from WHERE ( UPPER(d1.EMAIL) LIKE :mySearchString OR UPPER(d5.EMAIL) LIKE :mySearchString OR UPPER(d4.EMAIL) LIKE :mySearchString )";
				$searchString = '%'.$searchString.'%';
		} elseif (strlen(trim($searchString)) < 3) { // assume exact match ** could be thrown away **
				$sql = "SELECT $sql_select FROM $sql_from WHERE ( d1.SEARCH_LAST_NAME LIKE :mySearchString OR d5.SEARCH_LAST_NAME LIKE :mySearchString OR d4.SEARCH_LAST_NAME LIKE :mySearchString ) OR ( d1.SEARCH_FIRST_NAME LIKE :mySearchString OR d5.SEARCH_FIRST_NAME LIKE :mySearchString OR d4.SEARCH_FIRST_NAME LIKE :mySearchString )";
				$searchString = strtoupper($searchString);
		} elseif (preg_match('/[A-Za-z]+/', $searchString)) { // assume search by name
				$sql = "SELECT $sql_select FROM $sql_from WHERE ( d1.SEARCH_LAST_NAME LIKE :mySearchString OR d5.SEARCH_LAST_NAME LIKE :mySearchString OR d4.SEARCH_LAST_NAME LIKE :mySearchString ) OR ( d1.SEARCH_FIRST_NAME LIKE :mySearchString OR d5.SEARCH_FIRST_NAME LIKE :mySearchString OR d4.SEARCH_FIRST_NAME LIKE :mySearchString )";
				$searchString = '%'.strtoupper($searchString).'%';		
		} elseif (preg_match('/^[0-9]+/', $searchString)) { // assume phone number ** this view has formatted phone number 'xxx-xxx-xxxx' so this won't work **
				$sql = "SELECT $sql_select FROM $sql_from WHERE ( d1.OFFICE_PHONE = :mySearchString )";
				$searchString = '%'.$searchString.'%';	
		} else {throw new Exception('', 400);die;}
	
			$conn = init_database(ENVIROMENT_DB_BANNER);
			$result = oci_parse($conn, $sql);
			if (!$result) {
				if(API_DEBUG){
					$e = oci_error();
					throw new Exception(htmlentities($e['message'], ENT_QUOTES), '500');
				}else{
					throw new Exception('', 500);
					die;
				}
			}
			
			oci_bind_by_name($result, ':mySearchString', $searchString);
				
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
			$people = array();
			while (($person = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS+OCI_RETURN_LOBS))) {
				$person['ID'] = 'uid::'.api_encrypt($person['ID']);
				$people[] = $person;
			}
			oci_free_statement($result);
			oci_close($conn);
			
			return $people;
		
	}catch(Exception $e){RestUtils::sendResponse($e->getCode(), $e->getMessage());}
}

function isValidEmail($value) 
{
		if (!is_string($value)) {
				return false;
		}
		$pattern = "/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";
		return preg_match($pattern, $value);
}

try{
	$data = RestUtils::processRequest();
	if(!isset($path_params))
		$path_params = ( $_SERVER['PATH_INFO'] != null )? explode("/", $_SERVER['PATH_INFO']) : null;
	
	switch($data->getMethod()){
		case 'get':
			$people = getPeople($path_params);
			if($data->getHttpAccept() == 'json'){
				$tmpData = array("data" => array("totalItems" => count($people), "people" => $people));
				RestUtils::sendResponse(200, json_encode($tmpData), 'json');
			}	else{
				$s_body = '<people records="'.count($people).'">';
				foreach($people as $key => $value) {
					$s_body .= "<person>";
					foreach($value as $tag => $val) {
						$s_body .= "<$tag><![CDATA[$val]]></$tag>";
					}
					$s_body .= "</person>";
				}
				$s_body .= "</people>";
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
