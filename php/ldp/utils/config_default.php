<?php

/*
This file contains server defaults. DO NOT MODIFY THIS FILE DIRECTLY - 
IT *WILL* BE OVERWRITTEN IN FUTURE UPDATES! You can override these
values by placing a file named "config.php" in the root directory
of the LDP PHP connector.
*/

//Global
$_ENV['ldp_config']['ssm_host'] = "http://www.du.edu"; //SSM Host location 
$_ENV['ldp_config']['ssm_port'] = "7518";
$_ENV['ldp_config']['ssm_path'] = "";
$_ENV['ldp_config']['webroot'] = $_SERVER['DOCUMENT_ROOT'];

?>
