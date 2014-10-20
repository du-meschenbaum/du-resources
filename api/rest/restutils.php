<?php
/** Define ABSPATH as this files directory */
defined('ABSPATH') or define( 'ABSPATH', dirname(__FILE__) . '/' );
/** Include RestRequest Class **/
include_once( ABSPATH . 'RestRequest.php' );

if ( defined('E_RECOVERABLE_ERROR') )
	error_reporting(E_CORE_ERROR | E_CORE_WARNING | E_COMPILE_ERROR | E_ERROR | E_WARNING | E_PARSE | E_USER_ERROR | E_USER_WARNING | E_RECOVERABLE_ERROR);
else
	error_reporting(E_CORE_ERROR | E_CORE_WARNING | E_COMPILE_ERROR | E_ERROR | E_WARNING | E_PARSE | E_USER_ERROR | E_USER_WARNING);

if ( file_exists( ABSPATH . 'rest-config.php') ) {
	/** The config file resides in ABSPATH */
	require_once( ABSPATH . 'rest-config.php' );
} else {
	// A config file doesn't exist
	RestUtils::sendResponse(500);
	//print("ERROR: Unable to load environment");
}

class RestUtils{
	public static function processRequest(){
		$request_method = strtolower($_SERVER['REQUEST_METHOD']);
		$return_obj		= new UtilsRestRequest();
		$data			= array();
		
		switch ($request_method){
			case 'get':
			$data = $_GET;
			break;
	
			case 'post':
			$data = $_POST;
			break;
	
			case 'put':
			break;
		}
		
		$return_obj->setMethod($request_method);
		$return_obj->setRequestVars($data);
		
		if(isset($data['data'])){
			$return_obj->setData(json_decode($data['data']));
		}
		return $return_obj;
	}

	public static function sendResponse($status = 200, $body = '', $content_type_request = 'html', $sendDebug = TRUE){
		$myResponse = new stdClass;
		$myResponse->status = $status;
		$myResponse->body = $body;
		$myResponse->content_type_request = $content_type_request;
		switch($content_type_request){
			case 'json':
				$myResponse->content_type = 'application/json';
				break;
			case 'xml':
				$myResponse->content_type = 'text/xml';
				break;
			
			default:
				$myResponse->content_type = 'text/html';
				break;
		}
		$myResponse->status_msg = RestUtils::getStatusCodeMessage($status);
		switch($status){
			case 400:
				$myResponse->status_msg_alt = 'Bad Request.';
				break;
			case 401:
				$myResponse->status_msg_alt = 'You must be authorized to view this page.';
				break;
			case 404:
				$myResponse->status_msg_alt = 'The requested URL ' . $_SERVER['REQUEST_URI'] . ' was not found.';
				break;
			case 500:
				$myResponse->status_msg_alt = 'The server encountered an error processing your request.';
				break;
			case 501:
				$myResponse->status_msg_alt = 'The requested method is not implemented.';
				break;
			default:
				$myResponse->status_msg_alt = '';
				break;
		}
		
		$myResponse->status_header = 'HTTP/1.1 ' . $myResponse->status . ' ' . $myResponse->status_msg;
		$myResponse->server_signature = ($_SERVER['SERVER_SIGNATURE'] == '') ? $_SERVER['SERVER_SOFTWARE'] . ' Server at ' . $_SERVER['SERVER_NAME'] . ' Port ' . $_SERVER['SERVER_PORT'] : $_SERVER['SERVER_SIGNATURE'];
	
		//for debug
		$myResponse->debug = '';
		if ( defined('API_DEBUG') && TRUE===API_DEBUG && $sendDebug == TRUE ){
			foreach($_SERVER as $key => $value){
				$myResponse->debug .= "$key:$value\n";
			}
		}
		
	
		if($body == '' || trim($body) == ''){
			switch($content_type_request){
				case 'json':
					$myResponse->body = json_encode($myResponse);
					break;
				case 'xml':
					$myResponse->body = "<?xml version='1.0' encoding='ISO-8859-1'?>
									<response>
										<status>{$myResponse->status}</status>
										<contenttyperequest>{$myResponse->content_type_request}</contenttyperequest>
										<contenttype>{$myResponse->content_type}</contenttype>
										<statusmsg><![CDATA[{$myResponse->status_msg}]]></statusmsg>
										<statusmsgalt><![CDATA[{$myResponse->status_msg_alt}]]></statusmsgalt>
										<statusheader><![CDATA[{$myResponse->status_header}]]></statusheader>
										<serversignature><![CDATA[{$myResponse->server_signature}]]></serversignature>
										<debug><![CDATA[{$myResponse->debug}]]></debug>
									</response>";
					break;
				
				default:
					//<a href="http://www.omniupdate.com/oucampus/de.jsp?user=Denver&amp;site=DU_Main&amp;path=%2F_resources%2Fapi%2Frest%2Frestutils.php"><img src="/_resources/images/icon_edit_lt.png" /></a>
					$myResponse->body = "<!DOCTYPE HTML>
										<html xmlns='http://www.w3.org/1999/xhtml' lang='en' dir='ltr' id='du-edu'>
										<head>
											<meta http-equiv='Content-Type' content='text/html; charset=utf-8'/>
											<title>{$myResponse->status} {$myResponse->status_msg}</title>
										</head>
										<body>
											<h1>{$myResponse->status_msg}</h1>
											<p>{$myResponse->status_msg_alt}</p>
											<hr />
											<address>{$myResponse->server_signature}</address>
											<![CDATA[{$myResponse->debug}]]>
										</body>
									</html>";
					break;
			}
		}else{
			$myResponse->body .= $myResponse->debug;
		}

		header($myResponse->status_header);
		header('Content-type: ' . $myResponse->content_type);
		echo $myResponse->body;
		exit;
	}

	public static function getStatusCodeMessage($status){
		$codes = Array(
		    100 => 'Continue',
		    101 => 'Switching Protocols',
		    200 => 'OK',
		    201 => 'Created',
		    202 => 'Accepted',
		    203 => 'Non-Authoritative Information',
		    204 => 'No Content',
		    205 => 'Reset Content',
		    206 => 'Partial Content',
		    300 => 'Multiple Choices',
		    301 => 'Moved Permanently',
		    302 => 'Found',
		    303 => 'See Other',
		    304 => 'Not Modified',
		    305 => 'Use Proxy',
		    306 => '(Unused)',
		    307 => 'Temporary Redirect',
		    400 => 'Bad Request',
		    401 => 'Unauthorized',
		    402 => 'Payment Required',
		    403 => 'Forbidden',
		    404 => 'Not Found',
		    405 => 'Method Not Allowed',
		    406 => 'Not Acceptable',
		    407 => 'Proxy Authentication Required',
		    408 => 'Request Timeout',
		    409 => 'Conflict',
		    410 => 'Gone',
		    411 => 'Length Required',
		    412 => 'Precondition Failed',
		    413 => 'Request Entity Too Large',
		    414 => 'Request-URI Too Long',
		    415 => 'Unsupported Media Type',
		    416 => 'Requested Range Not Satisfiable',
		    417 => 'Expectation Failed',
		    500 => 'Internal Server Error',
		    501 => 'Not Implemented',
		    502 => 'Bad Gateway',
		    503 => 'Service Unavailable',
		    504 => 'Gateway Timeout',
		    505 => 'HTTP Version Not Supported'
		);

		return (isset($codes[$status])) ? $codes[$status] : '';
	}
	
	// Changes XML to JSON
	public static function xmlToJson($xml) {
		return json_encode(new SimpleXMLElement($xml));
	}
}

class UtilsRestRequest{
	private $request_vars;
	private $data;
	private $http_accept;
	private $method;

	public function __construct()	{
		$this->request_vars		= array();
		$this->data				= '';
		$this->http_accept		= (strpos($_SERVER['HTTP_ACCEPT'], 'json')) ? 'json' : 'xml';
		$this->method			= 'get';
	}

	public function setData($data)	{
		$this->data = $data;
	}

	public function setMethod($method)	{
		$this->method = $method;
	}

	public function setRequestVars($request_vars)	{
		$this->request_vars = $request_vars;
	}

	public function getData()	{
		return $this->data;
	}

	public function getMethod()	{
		return $this->method;
	}

	public function getHttpAccept() {
		return $this->http_accept;
	}

	public function getRequestVars()	{
		return $this->request_vars;
	}
}

?>
