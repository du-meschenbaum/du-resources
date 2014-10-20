<?php
/*
Restful Web Service Name: Departments
Description: Provide access to department info through parameterized uri string that will return valid xml or json
Version: .1
Author: Matt Eschenbaum

*/

function getDepartments($params){
	try{
		$q_search = ( is_array($params) && isset($params[3]) && strlen($params[3]) )? '%'.strtoupper(urldecode($params[3])).'%' : null;
		//$q_string = "SELECT d3.DEPT_CODE, d3.DEPT_NAME, d3.DEPT_TYPE, d3.DEPT_ADDRESS, d3.DEPT_CITY_ST_ZIP, d3.DEPT_PHONE, d3.DEPT_FAX, d3.DEPT_EMAIL, d3.DEPT_URL, d2.NAME, d2.JOB_TITLE, d2.OFFICE_PHONE, d2.EMAIL FROM WPVDIR3 d3 FULL OUTER JOIN WPVDIR2 d2 ON d3.DEPT_CODE = d2.DEPT_CODE";
		$q_string = "SELECT d3.DEPT_CODE, d3.DEPT_NAME, d3.DEPT_TYPE, d3.DEPT_ADDRESS, d3.DEPT_CITY_ST_ZIP, d3.DEPT_PHONE, d3.DEPT_FAX, d3.DEPT_EMAIL, d3.DEPT_URL FROM WPVDIR3 d3 ";
		
		if($q_search != null){
			$q_string .= " WHERE d3.DEPT_SEARCH_WORDS LIKE :myTerm ORDER BY d3.SORT_COLUMN";
		}else{$q_string = null;}
	
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
			
			oci_bind_by_name($result, ':myTerm', $q_search);
				
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
			$departments = array();
			while (($department = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS+OCI_RETURN_LOBS))) {
				$subdepts = array();
				$deptstaff = array();
				//get sub-departments
				if($department['DEPT_TYPE'] == 'Dept'){
					$q_stringSub = "SELECT d3.DEPT_NAME, d3.DEPT_PHONE, d3.DEPT_FAX FROM WPVDIR3 d3 WHERE d3.DEPT_CODE = :myDept AND d3.DEPT_TYPE = 'Sub-Dept' ORDER BY d3.SORT_COLUMN";
					$resultSub = oci_parse($conn, $q_stringSub);
					if (!$resultSub) {
						if(API_DEBUG){
							$e = oci_error();
							throw new Exception(htmlentities($e['message'], ENT_QUOTES), '500');
						}else{
							throw new Exception('', 500);
							die;
						}
					}
					
					oci_bind_by_name($resultSub, ':myDept', $department['DEPT_CODE']);
						
					$rSub = oci_execute($resultSub);
					if (!$rSub) {
						if(API_DEBUG){
							$e = oci_error($resultSub);  // For oci_execute errors pass the statement handle
							$tmpMsg = htmlentities($e['message'])."\n<pre>\n".htmlentities($e['sqltext']).printf("\n%".($e['offset']+2)."s", "^")."\n</pre>\n";
							throw new Exception($tmpMsg, '500');
						}else{
							throw new Exception('', 500);
							die;
						}
					}
					while (($subdept = oci_fetch_array($resultSub, OCI_ASSOC+OCI_RETURN_NULLS+OCI_RETURN_LOBS))) {
						$subdepts[] = $subdept;
					}
					oci_free_statement($resultSub);
				}

				//get staff
				$q_stringStaff = "SELECT d2.NAME, d2.JOB_TITLE, d2.OFFICE_PHONE, d2.EMAIL FROM WPVDIR2 d2 WHERE d2.DEPT_CODE = :myStaffDept ORDER BY d2.SORT_NAME";
				$resultStaff = oci_parse($conn, $q_stringStaff);
				if (!$resultStaff) {
					if(API_DEBUG){
						$e = oci_error();
						throw new Exception(htmlentities($e['message'], ENT_QUOTES), '500');
					}else{
						throw new Exception('', 500);
						die;
					}
				}
				
				oci_bind_by_name($resultStaff, ':myStaffDept', $department['DEPT_CODE']);
					
				$rStaff = oci_execute($resultStaff);
				if (!$rStaff) {
					if(API_DEBUG){
						$e = oci_error($resultStaff);  // For oci_execute errors pass the statement handle
						$tmpMsg = htmlentities($e['message'])."\n<pre>\n".htmlentities($e['sqltext']).printf("\n%".($e['offset']+2)."s", "^")."\n</pre>\n";
						throw new Exception($tmpMsg, '500');
					}else{
						throw new Exception('', 500);
						die;
					}
				}
				while (($deptperson = oci_fetch_array($resultStaff, OCI_ASSOC+OCI_RETURN_NULLS+OCI_RETURN_LOBS))) {
					$deptstaff[] = $deptperson;
				}
				oci_free_statement($resultStaff);
				
				$department['subdepts'] = $subdepts;
				$department['staff'] = $deptstaff;
				$departments[] = $department;
			}
			oci_free_statement($result);
			oci_close($conn);
			
			return $departments;
		
		}else{throw new Exception('', 400);}
	
	}catch(Exception $e){RestUtils::sendResponse($e->getCode(), $e->getMessage());}
}

try{
	$data = RestUtils::processRequest();
	if(!isset($path_params))
		$path_params = ( $_SERVER['PATH_INFO'] != null )? explode("/", $_SERVER['PATH_INFO']) : null;
	
	switch($data->getMethod()){
		case 'get':
			$departments = getDepartments($path_params);
			if($data->getHttpAccept() == 'json'){
				$tmpData = array("data" => array("totalItems" => count($departments), "departments" => $departments));
				RestUtils::sendResponse(200, json_encode($tmpData), 'json');
			}	else{
				$s_body = '<departments records="'.count($departments).'">';
				//foreach($departments as $index => $dept) {
					foreach($departments as $key => $value) {
						
						$s_body .= "<department>";
						foreach($value as $tag => $val) {
							if(is_array($val)){
	
								//sub-departments
								if($tag == 'subdepts'){
									$s_body .= "<subdepartments>";
									//foreach($val as $subindex => $subdept) {
										foreach($val as $subkey => $subvalue) {
											$s_body .= "<subdepartment>";
											foreach($subvalue as $subtag => $subval) {
												$s_body .= "<$subtag><![CDATA[$subval]]></$subtag>";
											}
											$s_body .= "</subdepartment>";
										}
									//}
									$s_body .= "</subdepartments>";
								}
								//staff
								if($tag == 'staff'){
									$s_body .= "<staff>";
									//foreach($val as $staffindex => $person) {
										foreach($val as $staffkey => $staffvalue) {
											$s_body .= "<person>";
											foreach($staffvalue as $stafftag => $staffval) {
												$s_body .= "<$stafftag><![CDATA[$staffval]]></$stafftag>";
											}
											$s_body .= "</person>";
										}
									//}
									$s_body .= "</staff>";
								}
								
							}else{
								$s_body .= "<$tag><![CDATA[$val]]></$tag>";
							}
						}
						$s_body .= "</department>";
					}
				//}
				$s_body .= "</departments>";
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
