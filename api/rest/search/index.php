<?php
try{
	// Check for the path elements
	if(!isset($path_params))
			$path_params = ( $_SERVER['PATH_INFO'] != null )? explode("/", $_SERVER['PATH_INFO']) : null;
	//var_dump($path_params);exit;
	if($path_params != null){
		if($path_params[1] == 'search' && isset($path_params[2])){
			switch($path_params[2]){
				case 'query':
					require_once( 'query.php' );
					break;
					
				case 'feed':
					require_once( 'feed.php' );
					break;
				
				case 'build-feed':
					require_once( 'build-feed.php' );
					break;
					
				default:
					RestUtils::sendResponse(501);
			}
		}else{RestUtils::sendResponse(400);}
	}else{RestUtils::sendResponse(404);}
}catch(Exception $e) {
	RestUtils::sendResponse(500, $e->getMessage());
}
?>
