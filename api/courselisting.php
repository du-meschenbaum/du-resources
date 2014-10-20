<?php
/*
Web Service Name: Courses
Description: Provide access to courses through parameterized uri string that will return valid xml
Version: .1
Author: Matt Eschenbaum
*/
/*debug*/
define('API_DEBUG', false);
define("DB_BANNER_USER", "www_webtech");
define("DB_BANNER_PASSWORD", "just4webgrp");
define("DB_BANNER_CONNECTION_STRING", "//juno.sc.du.edu:51000/MDB");

/* load api settings 
require_once( dirname(__FILE__) . '/api-load.php' );*/

define("ROOT_ELEMENT", "courses");
define("WRAPPER_ELEMENT", "course");
/* collage queries */
/* Structure: 
	[CATALOG] = 'standard'[SCHOOL][DEPARTMENT][UNDERGRAD/GRAD]
	[CATALOG] = 'summer'[CATALOG TYPE][COURSE TYPE][SCHOOL]
	
	Samples:
	URL: http://www.du.edu/_resources/api/courses.php/standard/ahss/anthropology
	XSL: 
		<!-- Parameters -->
		<xsl:param name="domain">www.du.edu</xsl:param>
		<xsl:param name="path">/_resources/api/courses.php/standard/ahss/anthropology</xsl:param>
		
		<h1>Course Descriptions</h1>
		<div id="courses">

			<!-- Test the document is available -->
			<xsl:choose>
				<xsl:when test="doc-available(concat('http://',$domain,$path))">
					
						<dl>
						
						<!-- Loop over courses -->
						<xsl:for-each select="document(concat('http://',$domain,$path))/courses/course">
							
							<dt><a name="{WSVCATG_CRSE_NUMB}"> <xsl:value-of select="WSVCATG_CRSE_NUMB"/> <xsl:value-of select="WSVCATG_SHORT_TITLE"/> (<xsl:value-of select="WSVCATG_CREDITS"/> credits)</a></dt>
							<dd><xsl:value-of select="WSVCATG_LONG_DESC"/></dd>
		
						</xsl:for-each>
						
						</dl>
					
				</xsl:when>
				<xsl:otherwise><p>Feed not available (<xsl:value-of select="concat('http://',$domain,$path)"/>).</p></xsl:otherwise>
			</xsl:choose>

		</div>
*/

function init_database() {
	$conn = oci_connect(DB_BANNER_USER,DB_BANNER_PASSWORD,DB_BANNER_CONNECTION_STRING);
	if (!$conn) {
		if(API_DEBUG){
			$e = oci_error();
			trigger_api_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR, true);
		}else{
			send_message('Error trying to connect', ROOT_ELEMENT, WRAPPER_ELEMENT);
			die;
		}
	}else{
		return $conn;
	}
}

function print_result($conn, $query, $root_element_name, $wrapper_element_name) {
	$result = oci_parse($conn, $query);
	if (!$result) {
		if(API_DEBUG){
			$e = oci_error();
			trigger_api_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR, true);
		}else{
			send_message('Error with query', ROOT_ELEMENT, WRAPPER_ELEMENT);
			die;
		}
	}
	$r = oci_execute($result);
	if (!$r) {
		if(API_DEBUG){
			$e = oci_error($result);  // For oci_execute errors pass the statement handle
			$tmpMsg = htmlentities($e['message'])."\n<pre>\n".htmlentities($e['sqltext']).printf("\n%".($e['offset']+1)."s", "^")."\n</pre>\n";
			trigger_api_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR, true);
		}else{
			send_message('Error with results', ROOT_ELEMENT, WRAPPER_ELEMENT);
			die;
		}
	}
	echo '<?xml version="1.0" encoding="UTF-8"?>';
	echo "<$root_element_name>";
	while ($row = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS+OCI_RETURN_LOBS)) {
		echo "<$wrapper_element_name>";
		foreach ($row as $key => $col_value) {
			echo "<$key><![CDATA[$row[$key]]]></$key>";
		}
		echo "</$wrapper_element_name>";
	}
	echo "</$root_element_name>";
	oci_free_statement($result);
	oci_close($conn);
}

function get_courses($conn, $query) {
	$query = $query;
	print_result($conn, $query, ROOT_ELEMENT, WRAPPER_ELEMENT);
}

function send_message($msg, $root_element_name, $wrapper_element_name){
	echo '<?xml version="1.0" encoding="UTF-8"?>';
	echo "<$root_element_name>";
	echo "<$wrapper_element_name>";
	echo "<message>$msg</message>";
	echo "</$wrapper_element_name>";
	echo "</$root_element_name>";
}

$database = init_database();

// Set the content type to text/xml
header("Content-Type: text/xml");

// Check for the path elements
$path = $_SERVER['PATH_INFO'];
if ($path != null) {
	$path_params = explode("/", $path);
}

$query = null;
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
	
	if ($path_params[1] == 'SLRN' || $path_params[1] == 'CCESL') {
		$query = "Select * from wsvcatg where WSVCATG_ATTR_CODE = 'SLRN' order by WSVCATG_COURSE_ID";
	} else {
		if(is_string($path_params[1]) && strlen($path_params[1]) <= 5){
			$query = "Select * from wsvcatg where WSVCATG_SUBJ_CODE = '".strtoupper($path_params[1])."' and WSVCATG_CRSE_NUMB NOT LIKE '%XXX%'";
			if(isset ($path_params[2]) && $path_params[2] == 'graduate') {
				$query = $query." and WSVCATG_CRSE_NUMB >= '4000 'and WSVCATG_CRSE_NUMB < '5000'";
			} elseif (isset ($path_params[2]) && $path_params[2] == 'undergraduate'){
				$query = $query." and WSVCATG_CRSE_NUMB < '4000'";
			} elseif (isset ($path_params[2]) && $path_params[2] == 'phd'){
				$query = $query." and WSVCATG_CRSE_NUMB >= '5000'";
			}	
			$query = $query." order by WSVCATG_CRSE_NUMB";
		}
	}
	if($query)
		get_courses($database, $query);
	else	
		send_message('Invalid Course Subject Code', ROOT_ELEMENT, WRAPPER_ELEMENT);
}
?>
