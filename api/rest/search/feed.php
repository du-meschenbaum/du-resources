<?php
/*
Restful Web Service Name: Feed
Description: Push Feed to Google Search Appliance
Version: 1
Author: Matt Eschenbaum

*/
/*
As of 10/30/2013, this DB and table only exist in the "webteam_marcomm_mysql" DB configuration.

Once DB is moved to a production environment we can switch the 'init_database' function back to using the "ENVIROMENT_DB_MYSQL" constant.
*/

function getFeeds($feedID){
	try{
		$rows = array();
		$conn = init_database("webteam_marcomm_mysql");
		if($feedID != null){
			$stmt = $conn->prepare("SELECT * FROM google_feeds WHERE f_id = :theid");
			$stmt->bindParam(':theid', $feedID, PDO::PARAM_INT);
		}else{
			$stmt = $conn->prepare("SELECT * FROM google_feeds");
		}
		$stmt->execute();
		$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
		$conn = null;
		return $rows;
	}catch(PDOException $e){
		throw $e;
	}catch (InvalidArgumentException $e) {
		throw $e;
	}catch (Exception $e) {
		throw $e;
	}
}

function updateFeed($feedID, $dateTime){
	try{
		$tmStmp = new DateTime($dateTime);
		$conn = init_database("webteam_marcomm_mysql");
		$stmt = $conn->prepare("UPDATE google_feeds SET f_lastrun = :justran WHERE f_id = :theid");
		$stmt->bindParam(':theid', $feedID, PDO::PARAM_INT);
		$stmt->bindParam(':justran', $tmStmp->format('Y-m-d H:i:s'));
		$stmt->execute();
		$conn = null;
	}catch(PDOException $e){
		throw $e;
	}catch (InvalidArgumentException $e) {
		throw $e;
	}catch (Exception $e) {
		throw $e;
	}
}

function sendToGSA($gsa = 'search.du.edu', $datasource = 'PrivateSecurityMonitor', $feedtype = 'metadata-and-url', $myXML = null){
	try{
		// form field separator
		$delimiter = '-------------' . uniqid();
		// file upload fields: name => array(type=>'mime/type',content=>'raw data')
		$fileFields = array(
				'data' => array('type' => 'application/xml', 'content' => $myXML)
		);
		// all other fields (not file upload): name => value
		$postFields = array(
				'datasource'   => $datasource,
				'feedtype'   => $feedtype
		);
		
		$data = '';
		
		// populate normal fields first (simpler)
		foreach ($postFields as $name => $content) {
			 $data .= "--" . $delimiter . "\r\n";
				$data .= 'Content-Disposition: form-data; name="' . $name . '"';
				// note: double endline
				$data .= "\r\n\r\n";
				$data .= $content."\r\n";
		}
		// populate file fields
		foreach ($fileFields as $name => $file) {
				$data .= "--" . $delimiter . "\r\n";
				// "filename" attribute is not essential; server-side scripts may use it
				$data .= 'Content-Disposition: form-data; name="' . $name . '";' .
								 ' filename="' . $name . '"' . "\r\n";
				// this is, again, informative only; good practice to include though
				$data .= 'Content-Type: ' . $file['type'] . "\r\n";
				// this endline must be here to indicate end of headers
				$data .= "\r\n";
				// the file itself (note: there's no encoding of any kind)
				$data .= $file['content'] . "\r\n";
		}
		// last delimiter
		$data .= "--" . $delimiter . "--\r\n";
		
		//Submit to GSA
		$gsaURL = 'http://'.$gsa.':19900/xmlfeed';
		$handle = curl_init($gsaURL);//'http://130.253.1.20:19900/xmlfeed');
		curl_setopt($handle, CURLOPT_POST, true);
		curl_setopt($handle, CURLOPT_HTTPHEADER , array(
				'Content-Type: multipart/form-data; boundary=' . $delimiter,
				'Content-Length: ' . strlen($data)));  
		curl_setopt($handle, CURLOPT_POSTFIELDS, $data);
		$resp['body'] = curl_exec($handle);
		$resp['info']	= curl_getinfo($handle);
		curl_close($handle);
		/*$curlOptions['CURLOPT_HTTPHEADER'] = array('Content-Type: multipart/form-data; boundary=' . $delimiter, 'Content-Length: ' . strlen($data));
		$curlOptions['CURLOPT_POSTFIELDS'] = $data;
		$request = new RestRequest('http://search.du.edu:19900/xmlfeed', 'POST', $curlOpt = $curlOptions);  
		$request->execute();
		$resp['info'] = $request->getResponseInfo();
		$resp['body'] = $request->getResponseBody();*/

		return $resp;
	}catch (InvalidArgumentException $e) {
		throw $e;
	}catch (Exception $e) {
		throw $e;
	}
}

try{
	if(!isset($path_params))
			$path_params = ( $_SERVER['PATH_INFO'] != null )? explode("/", $_SERVER['PATH_INFO']) : null;
	if($path_params != null){
		if($path_params[1] == 'search' && (isset($path_params[2]) && $path_params[2] == 'feed')){
			$feedID = (isset($path_params[3]) && is_numeric($path_params[3]))?$path_params[3]:null;
		}
	
		$tmStamp = date('n/j/Y g:i:s A');
		$a_feeds = getFeeds($feedID);
		$a_status = array();

		if(count($a_feeds)){
			foreach($a_feeds as $feed){
			 //using Function for build-feed.php => BuildGoogleFeed ($lastrun = null, $gsa = 'search.du.edu', $gsadtd = 'http://psm.du.edu/_resources/search_feeds/gsafeed.dtd', $datasource = 'PrivateSecurityMonitor', $feedtype = 'metadata-and-url', $feedpath = '/objects') {
				$urlParams = 'lastrun='.urlencode($feed['f_lastrun']).'&gsa='.urlencode($feed['f_gsa']).'&gsadtd='.urlencode($feed['f_gsadtd']).'&datasource='.urlencode($feed['f_datasource']).'&feedtype='.urlencode($feed['f_feedtype']).'&feedpath='.urlencode($feed['f_feedpath']);
				$requestURL = $feed['f_feedbuildservice'].'?'.$urlParams;
				$request = new RestRequest($requestURL, 'GET', 'xml', $requestBody = null);  
				$request->execute();
				$requestInfo = $request->getResponseInfo();
				$requestData = $request->getResponseBody();
				if($requestInfo['http_code'] == 200){
					$myPackage = sendToGSA($feed['f_gsa'], $feed['f_datasource'], $feed['f_feedtype'], $requestData);
					$a_status[$feed['f_name']]['CODE'] = $myPackage['info']['http_code'];

					if($myPackage['info']['http_code'] == 200){
						updateFeed($feed['f_id'], $tmStamp);
						$tmpLastrun = new DateTime($feed['f_lastrun']);
						$a_status[$feed['f_name']]['MESSAGE'] = "Objects published: ".$tmpLastrun->format('n/j/Y g:i:s A')." - ".$tmStamp;
					}else{
						$a_status[$feed['f_name']]['MESSAGE'] = $myPackage['body'];
					}
				}else{
					$a_status[$feed['f_name']]['CODE'] = $requestInfo['http_code'];
					$a_status[$feed['f_name']]['MESSAGE'] = $requestData;
				}
			}
		}else{
			//no feeds to update
			RestUtils::sendResponse(400, 'No feeds were found to update.', 'html');
		}
		//Send Response
		$respBody = "<p>Your request is complete.</p><h3>FEED STATUS:</h3><ul>";
		foreach($a_status as $key => $value){
			$respBody .= "<li>$key => CODE: ".$value['CODE'].",  MSG: ".$value['MESSAGE']."</li>";
		}
		$respBody .= "</ul>";
		RestUtils::sendResponse(200, $respBody, 'html');
	}else{RestUtils::sendResponse(404);}

}catch(Exception $e){
	if(TRUE===API_DEBUG){
		RestUtils::sendResponse(500, $e);
	}else{
		RestUtils::sendResponse(500);
	}
}
?>
