<?php
/**
 *This function will be called once per form.
 *
*/
// Include the main ldp.php file
header("access-control-allow-origin: *");
include ($_SERVER['DOCUMENT_ROOT']. "/_resources/php/ldp/ldp.php");
$form_uuid = $_POST['form_uuid'];
if(!count($_POST)) {

        $func = "ldp.form.enabled";
        $params = array($_ENV['ldp_config']['site_uuid'], $form_uuid);

        $sendForm = new ouldp();

        $result = $sendForm->send($func,$params);

        echo json_encode($result);

   }
   elseif(count($_POST)){

        $func = "ldp.form.submit";
	$params = array($_ENV['ldp_config']['site_uuid'], $form_uuid, $_REQUEST,
                  array('OXLDP_FORM_SERVER_NAME'     => $_SERVER['SERVER_NAME'],
                        'OXLDP_FORM_SERVER_IP'       => $_SERVER['SERVER_ADDR'],
                        'OXLDP_FORM_REQUEST_TIME'    => $_SERVER['REQUEST_TIME'],
                        'OXLDP_FORM_HTTP_HOST'       => $_SERVER['HTTP_HOST'],
                        'OXLDP_FORM_HTTP_REFERER'    => $_SERVER['HTTP_REFERER'],
                        'OXLDP_FORM_HTTP_USER_AGENT' => $_SERVER['HTTP_USER_AGENT'],
                        'OXLDP_FORM_REMOTE_IP'       => $_SERVER['REMOTE_ADDR'],
                        'OXLDP_FORM_SCRIPT_NAME'     => $_SERVER['SCRIPT_FILENAME'],
                        'OXLDP_FORM_REMOTE_PORT'     => $_SERVER['REMOTE_PORT']));

	$sendForm = new ouldp();
	$result = $sendForm->send($func,$params);
//convert result to json code
        echo json_encode($result);

   }
   

?>
