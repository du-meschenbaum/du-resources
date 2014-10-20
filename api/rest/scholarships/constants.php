<?php
/*
Restful Web Service Name: Scholarships constants
Description: Query database of scholarships and return valid xml or json
Version: .1
Author: Matt Eschenbaum

*/

function getColleges_Majors($params){
	try{
		$cur_undergrad=0;$cur_college='';
		$rows = array();
		$conn = init_database(ENVIROMENT_DB_MYSQL);
		foreach($conn->query('SELECT lkp_maj_col_undergrad,lkp_maj_col_college,lkp_maj_col_major FROM lkp_majors_colleges ORDER BY lkp_maj_col_undergrad,lkp_maj_col_college,lkp_maj_col_major') as $row){
			if($row['lkp_maj_col_undergrad'] != $cur_undergrad){
				$cur_undergrad = $row['lkp_maj_col_undergrad'];
				$cur_college = $row['lkp_maj_col_college'];
			}
			if($row['lkp_maj_col_college'] != $cur_college){
				$cur_college = $row['lkp_maj_col_college'];
			}
			$tmpUnderGrad = ($cur_undergrad)?'Undergraduate':'Graduate';
			$rows[$tmpUnderGrad][$cur_college][] = $row['lkp_maj_col_major'];
		}
		$conn = null;
		
		return $rows;
	}catch(Exception $e){RestUtils::sendResponse($e->getCode(), $e->getMessage());}
}

try{
	$data = RestUtils::processRequest();
	
	if(!isset($path_params))
		$path_params = ( $_SERVER['PATH_INFO'] != null )? explode("/", $_SERVER['PATH_INFO']) : null;
	if(sizeof($path_params) > 3){
		switch($data->getMethod()){
			case 'get':
				switch($path_params[3]){
					case 'colleges_majors':
						$myData = getColleges_Majors($path_params);
						break;
						
					default:
						RestUtils::sendResponse(501);
						break;
				}
				
				if($data->getHttpAccept() == 'json'){
					RestUtils::sendResponse(200, json_encode($myData), 'json');
				}else{
					RestUtils::sendResponse(200, print_r($myData), 'html');
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
	}else{
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
