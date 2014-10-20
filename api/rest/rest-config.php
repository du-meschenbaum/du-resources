<?php
/* Base configuration file for API */
defined('ENVIROMENT_DB_BANNER') or define("ENVIROMENT_DB_BANNER", "banner");
defined('ENVIROMENT_DB_MYSQL') or define("ENVIROMENT_DB_MYSQL", "prod_mysql");

/*debug*/
defined('API_DEBUG') or define('API_DEBUG', FALSE); //enable the reporting of notices during development - E_ALL
defined('API_DEBUG_DISPLAY') or define('API_DEBUG_DISPLAY', FALSE); //use the globally configured setting for display_errors and not force errors to be displayed
defined('API_DEBUG_LOG') or define('API_DEBUG_LOG', FALSE); //error logging to api/debug.log

/* Database info */
/* Banner */
defined('DB_BANNER_USER') or define("DB_BANNER_USER", "www_webtech");
defined('DB_BANNER_PASSWORD') or define("DB_BANNER_PASSWORD", "just4webgrp");
defined('DB_BANNER_CONNECTION_STRING') or define("DB_BANNER_CONNECTION_STRING", "//juno.sc.du.edu:51000/MDB");
defined('DB_BANNER_CONNECTION_STRING_BLUE') or define("DB_BANNER_CONNECTION_STRING_BLUE", "//atlas.sc.du.edu:51000/BLUE");
defined('DB_BANNER_CONNECTION_STRING_GOLD') or define("DB_BANNER_CONNECTION_STRING_GOLD", "//atlas.sc.du.edu:51000/GOLD");
defined('DB_BANNER_CONNECTION_STRING_GREEN') or define("DB_BANNER_CONNECTION_STRING_GREEN", "//atlas.sc.du.edu:51000/GREEN");

/* MySQL */
defined('DB_WEBTEAM_MYSQL_USER') or define("DB_WEBTEAM_MYSQL_USER", "marcomm_webteam");
defined('DB_WEBTEAM_MYSQL_PASSWORD') or define("DB_WEBTEAM_MYSQL_PASSWORD", "g3ts0m3");
defined('DB_WEBTEAM_MYSQL_HOST') or define("DB_WEBTEAM_MYSQL_HOST", "testmysql01.cair.du.edu");
defined('DB_WEBTEAM_MYSQL_DATABASE') or define("DB_WEBTEAM_MYSQL_DATABASE", "admission_scholarships");
	
defined('DB_WEBTEAM_MARCOMM_MYSQL_USER') or define("DB_WEBTEAM_MARCOMM_MYSQL_USER", "marcomm_webteam");
defined('DB_WEBTEAM_MARCOMM_MYSQL_PASSWORD') or define("DB_WEBTEAM_MARCOMM_MYSQL_PASSWORD", "g3ts0m3");
defined('DB_WEBTEAM_MARCOMM_MYSQL_HOST') or define("DB_WEBTEAM_MARCOMM_MYSQL_HOST", "testmysql01.cair.du.edu");
defined('DB_WEBTEAM_MARCOMM_MYSQL_DATABASE') or define("DB_WEBTEAM_MARCOMM_MYSQL_DATABASE", "marcomm_webteam");
	
defined('DB_MYSQL_USER') or define("DB_MYSQL_USER", "marcomm_webteam");
defined('DB_MYSQL_PASSWORD') or define("DB_MYSQL_PASSWORD", "ZdP9pkt7");
defined('DB_MYSQL_HOST') or define("DB_MYSQL_HOST", "mysql01.cair.du.edu");
defined('DB_MYSQL_DATABASE') or define("DB_MYSQL_DATABASE", "admission_scholarships_prod");

defined('DB_MYSQL_MOBILE_DEV_USER') or define("DB_MYSQL_MOBILE_DEV_USER", "marcomm_webteam");
defined('DB_MYSQL_MOBILE_DEV_PASSWORD') or define("DB_MYSQL_MOBILE_DEV_PASSWORD", "g3ts0m3");
defined('DB_MYSQL_MOBILE_DEV_HOST') or define("DB_MYSQL_MOBILE_DEV_HOST", "testmysql02.du.edu");
defined('DB_MYSQL_MOBILE_DEV_DATABASE') or define("DB_MYSQL_MOBILE_DEV_DATABASE", "web_mobile_dev");

defined('DB_MYSQL_MOBILE_USER') or define("DB_MYSQL_MOBILE_USER", "marcomm_webteam");
defined('DB_MYSQL_MOBILE_PASSWORD') or define("DB_MYSQL_MOBILE_PASSWORD", "g3ts0m3");
defined('DB_MYSQL_MOBILE_HOST') or define("DB_MYSQL_MOBILE_HOST", "mysql02.du.edu");
defined('DB_MYSQL_MOBILE_DATABASE') or define("DB_MYSQL_MOBILE_DATABASE", "web_mobile");

/* Crypt */
defined('CRYPTO_SALT') or define("CRYPTO_SALT", "gYy9+Uq/ttW6ZUfAjVV");
defined('CRYPTO_PASSWORD') or define("CRYPTO_PASSWORD", "yupwsC{G8b$rHdRCK7J");
/* DB connection class
class MyPDO extends PDO
{
    public function __construct($file = 'my_setting.ini')
    {
        if (!$settings = parse_ini_file($file, TRUE)) throw new exception('Unable to open ' . $file . '.');
        
        $dns = $settings['database']['driver'] .
        ':host=' . $settings['database']['host'] .
        ((!empty($settings['database']['port'])) ? (';port=' . $settings['database']['port']) : '') .
        ';dbname=' . $settings['database']['schema'];
        
        parent::__construct($dns, $settings['database']['username'], $settings['database']['password']);
    }
}
*/

// Encryption Functions
function api_encrypt($decrypted, $password=CRYPTO_PASSWORD, $salt=CRYPTY_SALT) {
	$key = hash('SHA256', $salt . $password, true);
	srand(); $iv = mcrypt_create_iv(mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC), MCRYPT_RAND);
	if (strlen($iv_base64 = rtrim(base64_encode($iv), '=')) != 22) return false;
	$encrypted = base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $key, $decrypted . md5($decrypted), MCRYPT_MODE_CBC, $iv));
	return $iv_base64 . $encrypted;
}

function api_decrypt($encrypted, $password=CRYPTO_PASSWORD, $salt=CRYPTY_SALT) {
	$key = hash('SHA256', $salt . $password, true);
	$iv = base64_decode(substr($encrypted, 0, 22) . '==');
	$encrypted = substr($encrypted, 22);
	$decrypted = rtrim(mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key, base64_decode($encrypted), MCRYPT_MODE_CBC, $iv), "\0\4");
	$hash = substr($decrypted, -32);
	$decrypted = substr($decrypted, 0, -32);
	if (md5($decrypted) != $hash) return false;
	return $decrypted;
}

Class SafePDO extends PDO {
 
	public static function exception_handler($exception) {
		// Output the exception details
		die('Uncaught exception: '. $exception->getMessage());
	}
	
	public function __construct($dsn, $username='', $password='', $driver_options=array()) {
		// Temporarily change the PHP exception handler while we . . .
		set_exception_handler(array(__CLASS__, 'exception_handler'));
		// . . . create a PDO object
		parent::__construct($dsn, $username, $password, $driver_options);
		// Change the exception handler back to whatever it was before
		restore_exception_handler();
	}

}
/* Create Database connection */
function init_database($type = 'banner') {
	switch($type){
		case 'webteam_mysql':
			try{
				$conn = new SafePDO('mysql:host='.DB_WEBTEAM_MYSQL_HOST.';dbname='.DB_WEBTEAM_MYSQL_DATABASE, DB_WEBTEAM_MYSQL_USER, DB_WEBTEAM_MYSQL_PASSWORD);
				if ( defined('API_DEBUG') && TRUE===API_DEBUG )
					$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
				return $conn;
			}catch(PDOException $e){
				RestUtils::sendResponse(500, 'DB Connection Error');
			}
		  break;
			
		case 'webteam_marcomm_mysql':
			try{
				$conn = new SafePDO('mysql:host='.DB_WEBTEAM_MARCOMM_MYSQL_HOST.';dbname='.DB_WEBTEAM_MARCOMM_MYSQL_DATABASE, DB_WEBTEAM_MARCOMM_MYSQL_USER, DB_WEBTEAM_MARCOMM_MYSQL_PASSWORD);
				if ( defined('API_DEBUG') && TRUE===API_DEBUG )
					$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
				return $conn;
			}catch(PDOException $e){
				RestUtils::sendResponse(500, 'DB Connection Error');
			}
		  break;
			
		case 'prod_mysql':
			try{
				$conn = new SafePDO('mysql:host='.DB_MYSQL_HOST.';dbname='.DB_MYSQL_DATABASE, DB_MYSQL_USER, DB_MYSQL_PASSWORD);
				if ( defined('API_DEBUG') && TRUE===API_DEBUG )
					$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
				return $conn;
			}catch(PDOException $e){
				RestUtils::sendResponse(500, 'DB Connection Error');
			}
		  break;
			
		case 'prod_mobile':
			try{
				$conn = new SafePDO('mysql:host='.DB_MYSQL_MOBILE_HOST.';dbname='.DB_MYSQL_MOBILE_DATABASE, DB_MYSQL_MOBILE_USER, DB_MYSQL_MOBILE_PASSWORD);
				if ( defined('API_DEBUG') && TRUE===API_DEBUG )
					$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
				return $conn;
			}catch(PDOException $e){
				RestUtils::sendResponse(500, 'DB Connection Error');
			}
		  break;
			
		case 'dev_mobile':
			try{
				$conn = new SafePDO('mysql:host='.DB_MYSQL_MOBILE_DEV_HOST.';dbname='.DB_MYSQL_MOBILE_DEV_DATABASE, DB_MYSQL_MOBILE_DEV_USER, DB_MYSQL_MOBILE_DEV_PASSWORD);
				if ( defined('API_DEBUG') && TRUE===API_DEBUG )
					$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
				return $conn;
			}catch(PDOException $e){
				RestUtils::sendResponse(500, 'DB Connection Error');
			}
		  break;
		
		case 'banner_blue':
			$conn = oci_connect(DB_BANNER_USER,DB_BANNER_PASSWORD,DB_BANNER_CONNECTION_STRING_BLUE);
			if (!$conn) {
				RestUtils::sendResponse(500, 'DB Connection Error');
				die;
			}else{
				return $conn;
			}
			break;

		case 'banner_gold':
			$conn = oci_connect(DB_BANNER_USER,DB_BANNER_PASSWORD,DB_BANNER_CONNECTION_STRING_GOLD);
			if (!$conn) {
				RestUtils::sendResponse(500, 'DB Connection Error');
				die;
			}else{
				return $conn;
			}
			break;

		case 'banner_green':
			$conn = oci_connect(DB_BANNER_USER,DB_BANNER_PASSWORD,DB_BANNER_CONNECTION_STRING_GREEN);
			if (!$conn) {
				RestUtils::sendResponse(500, 'DB Connection Error');
				die;
			}else{
				return $conn;
			}
			break;

		default:
			$conn = oci_connect(DB_BANNER_USER,DB_BANNER_PASSWORD,DB_BANNER_CONNECTION_STRING);
			if (!$conn) {
				RestUtils::sendResponse(500, 'DB Connection Error');
				die;
			}else{
				return $conn;
			}
			break;
	}
}
/* Define ABSPATH as this files directory */
defined('ABSPATH') or define('ABSPATH', dirname(__FILE__) . '/');
	
function api_debug_mode() {
	if ( defined('API_DEBUG') && TRUE===API_DEBUG ) {
		
		if ( defined( 'E_DEPRECATED' ) )
			error_reporting( E_ALL & ~E_DEPRECATED & ~E_STRICT );
		else
			error_reporting( E_ALL & E_STRICT);

		if ( TRUE===API_DEBUG_DISPLAY )
			ini_set( 'display_errors', 1 );

		if ( TRUE===API_DEBUG_LOG ) {
			ini_set( 'log_errors', 1 );
			ini_set( 'error_log', ABSPATH . 'api-debug.log' );
		}
	} else {
		if ( defined( 'E_RECOVERABLE_ERROR' ) )
			error_reporting( E_CORE_ERROR | E_CORE_WARNING | E_COMPILE_ERROR | E_ERROR | E_WARNING | E_PARSE | E_USER_ERROR | E_USER_WARNING | E_RECOVERABLE_ERROR );
		else
			error_reporting( E_CORE_ERROR | E_CORE_WARNING | E_COMPILE_ERROR | E_ERROR | E_WARNING | E_PARSE | E_USER_ERROR | E_USER_WARNING );
	}
}

function error_handler($level, $message, $file, $line, $context) {
	//Handle user errors, warnings, and notices ourself
	if($level === E_USER_ERROR || $level === E_USER_WARNING || $level === E_USER_NOTICE) {
		RestUtils::sendResponse(500, $message);
		//echo '<strong>Error:</strong> '.$message;
		return(true); //And prevent the PHP error handler from continuing
	}
	return(false); //Otherwise, use PHP's error handler
}

function trigger_api_error($message, $level, $kill = false) {
	//Get the caller of the calling function and details about it
	$callee = next(debug_backtrace());
	//Trigger appropriate error
	trigger_error($message.' in <strong>'.$callee['file'].'</strong> on line <strong>'.$callee['line'].'</strong>', $level);
	if($kill)
		die;
}

//Use our custom handler
//set_error_handler('error_handler');

// Check if we're in API_DEBUG mode.
api_debug_mode();
?>
