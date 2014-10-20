<?php
/*
Restful Web Service Name: Search
Description: Provide access to Google Search Appliance through parameterized uri string that will return valid xml or json
Version: .1
Author: Matt Eschenbaum

*/

try{
	
	$requestURL = 'http://search.du.edu/search?';
	if(stripos($_SERVER['HTTP_ACCEPT'], 'json')){
		$returnType='json';
	}else{
		$returnType='xml';
	}
	if(array_key_exists('requiredfields', $_GET)){
		if(count($_GET['requiredfields'])){
		$tmpField = rawurlencode(rawurlencode($_GET['requiredfields']));// needs to be double url encoded
		$tmpField = str_replace('%257C', '|', str_replace('%253A', ':',$tmpField));// replace : | back into string for google
		unset($_GET['requiredfields']);
		$requestURL .= http_build_query($_GET, '', '&') . '&requiredfields=' . $tmpField;
		}else{unset($_GET['requiredfields']);}
	}else{
	 $requestURL .= http_build_query($_GET, '', '&');
	}

	$request = new RestRequest($requestURL, 'GET', $acceptType='xml');  
	$request->execute();
	$requestInfo = $request->getResponseInfo();
	if($returnType == 'json'){
		$requestData = (array_key_exists('jsoncallback', $_GET))? $_GET['jsoncallback'].'('.RestUtils::xmlToJson($request->getResponseBody()).')':RestUtils::xmlToJson($request->getResponseBody());
	}elseif(array_key_exists('jsoncallback', $_GET)){
		$requestData = $_GET['jsoncallback'].'('.RestUtils::xmlToJson($request->getResponseBody()).')';
		$returnType='json';
	}else{
		$requestData = $request->getResponseBody();
	}
	RestUtils::sendResponse($requestInfo['http_code'], $requestData, $returnType);

}catch(Exception $e){
	if(TRUE===API_DEBUG){
		RestUtils::sendResponse(500, RestUtils::xmlToJson(htmlentities($e['message'], ENT_QUOTES)), $returnType);
	}else{
		RestUtils::sendResponse(500, '', $returnType);
	}
}
?>
