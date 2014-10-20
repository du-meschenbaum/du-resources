<?php
/*debug*/
defined('API_DEBUG') or define('API_DEBUG', FALSE);

require_once( dirname(__FILE__) . '/restutils.php' );

try{
	// Check for the path elements
	$path_params = ( $_SERVER['PATH_INFO'] != null )? explode("/", $_SERVER['PATH_INFO']) : null;
	if($path_params === null && ($_SERVER['QUERY_STRING'] != null && strlen($_SERVER['QUERY_STRING']))){
		$path_params = array_merge(array('bob'), explode("/", $_SERVER['QUERY_STRING']));
	}
	//var_dump($path_params);exit;
	if($path_params != null){
		switch($path_params[1]){
			case 'catalog':
				require_once( ABSPATH . 'catalog/index.php' );
				break;
				
			case 'search':
				require_once( ABSPATH . 'search/index.php' );
				break;
				
			case 'scholarships':
				require_once( ABSPATH . 'scholarships/index.php' );
				break;
			
			case 'directory':
				require_once( ABSPATH . 'directory/index.php' );
				break;
				
			default:
				RestUtils::sendResponse(501);
		}
	}else{RestUtils::sendResponse(404);}
}catch(Exception $e) {
	RestUtils::sendResponse(500, $e->getMessage());
}
?>
