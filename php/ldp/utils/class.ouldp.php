<?php

class ouldp {

	public function send($method, $param){


                $result = array('active' => false, 'message' => '','data' => '');

                $request = xmlrpc_encode_request($method,$param);
    		$context = stream_context_create(array("http"=> array(
						'method' => "POST",
        					'header' => "Content-Type: text/xml",
                                                'content' => $request
						)));

		$port = $_ENV['ldp_config']['ssm_port'] ? ':'.$_ENV['ldp_config']['ssm_port'] : '';
		$path = $_ENV['ldp_config']['ssm_path'] ? $_ENV['ldp_config']['ssm_path'] : '';

                $url = $_ENV['ldp_config']['ssm_host'].$port.$path;

                $value = xmlrpc_decode(file_get_contents($url,false,$context));

                if (isset($value['faultCode'])) {
                    $result['message'] = "Faultcode : " . $value['faultCode'];
                    $result['data']    = $value['faultString'];
                }
                elseif (isset($value['success'])) {

                    if($value['success']  == true) {//POST: Form submisson correct
                        $result['active']  = $value['success'];
                        $result['message'] = $value['message'];
                    }
                    else { //POST: Submission is not active.
                        $result['active']  = $value['success'];
                        $result['message'] = $value['message'];
                        $result['data']    = $value['errors'];
                    }
                }
                elseif (isset($value['active'])) { //GET: Form is active.
                    //Active is true
                    if($value['active'] == true){
                        $result['active']  = true;
                        $result['message'] = "form ID";
                        $result['data']    = $value['formid'];
                    }
                    else {//GET: Form is inactive.
                        $result['message'] = $value['message'];
                    }
                }
                elseif (isset ($value['errors'])) { //POST: Incorrect data provided
                    $result['active']  = true;
                    $result['message'] = "errors";
                    $result['data']    = $value['errors'];
                }
                else { //Form encountered an error.
                    $result['message'] = "Faultcode : unknown";
                    $result['data']    = "An unknown error when contacting the server. Please Check the logs.";
                }

                return $result;
      }
}

?>
