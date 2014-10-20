<?php
/*
Function for building a valid Google Search Appliance xml feed.
Description: Build Feed for Google Search Appliance
Version: .1
Author: Matt Eschenbaum
*/
if(!function_exists('glob_recursive')){
	function glob_recursive($pattern, $flags = 0){
		$files = glob($pattern, $flags);
		foreach (glob(dirname($pattern).'/*', GLOB_ONLYDIR|GLOB_NOSORT) as $dir){
			$files = array_merge($files, glob_recursive($dir.'/'.basename($pattern), $flags));
		}
		return $files;
	}
}

if(function_exists('glob_recursive')){
	function BuildGoogleFeed ($lastrun = null, $gsa = 'search.du.edu', $gsadtd = 'http://psm.du.edu/_resources/search_feeds/gsafeed.dtd', $datasource = 'PrivateSecurityMonitor', $feedtype = 'metadata-and-url', $feedpath = '/objects') {

		try{
			$_FEED['lastrun']		  = $lastrun;
			$_FEED['gsa']				  = $gsa;
			$_FEED['gsadtd']		  = $gsadtd;
			$_FEED['datasource']	= $datasource;
			$_FEED['feedtype']		= $feedtype;
			$_FEED['feedpath']		= $feedpath;
			$_FEED['pubDate']     = new DateTime;
	
			$tmpFeedPubDate = ($_FEED['lastrun'] === null)?new DateTime("Sun, 1 Jan 2012 01:00:00 MDT"):new DateTime(trim($_FEED['lastrun']));
			$tmpFiles = array();
			$tmpFeed = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE gsafeed PUBLIC \"-//Google//DTD GSA Feeds//EN\" \"".$_FEED['gsadtd']."\">\n";
			$tmpFeed .= "<gsafeed>\n<header>\n<datasource>".$_FEED['datasource']."</datasource>\n<feedtype>".$_FEED['feedtype']."</feedtype>\n</header>\n<group>\n";
			//get files
			$tmpFiles = glob_recursive($_SERVER['DOCUMENT_ROOT'].$_FEED['feedpath']."/*.xml");
			if(is_array($tmpFiles) && count($tmpFiles)){
				foreach($tmpFiles as $recordFile) {
					$tmpRecordFile = file_get_contents($recordFile, FILE_TEXT);
					$tmpRecord = new SimpleXMLElement($tmpRecordFile);
					$tmpRecordLastMod = (strlen(trim($tmpRecord['last-modified'])))?new DateTime(trim($tmpRecord['last-modified'])):new DateTime;
					$tmpPubDiff = $tmpFeedPubDate->diff($tmpRecordLastMod);
					// $tmpPubDiff->invert = 0 if record date is after feed's lastrun date
					if(!$tmpPubDiff->invert && $tmpRecord['active'] == 'true'){//added active check because of GSA issues with reading/applying actions to groups and individual records
						$tmpUrl = htmlspecialchars($tmpRecord['url'], ENT_QUOTES,"");
						$tmpFeed .= "<record url=\"".$tmpUrl."\"";
						if(strlen(trim($tmpRecord['displayurl']))){
							$tmpDspUrl = htmlspecialchars($tmpRecord['displayurl'], ENT_QUOTES,"");
							$tmpFeed .= " displayurl=\"".$tmpDspUrl."\"";
						}
						$tmpFeed .= " mimetype=\"".trim($tmpRecord['mimetype'])."\" last-modified=\"".$tmpRecordLastMod->format("D, j M Y H:i:s T")."\"";
						$tmpFeed .= " action=\"add\">\n";//Add back when GSA action issues are resolved  -  $tmpFeed .= ($tmpRecord['active'] == 'true')?" action=\"add\">\n":" action=\"delete\">\n";
						$tmpFeed .= '<metadata>';
						foreach($tmpRecord->metadata->meta as $tmpMetaTag){
							switch($tmpMetaTag['name']){
								case 'publish_year':
									$tmpMetaTag_PubY = (strlen(trim($tmpMetaTag['content'])))?$tmpMetaTag['content']:$_FEED['pubDate']->format("Y");
									break;
								case 'publish_month':
									$tmpMetaTag_PubM = (strlen(trim($tmpMetaTag['content'])))?$tmpMetaTag['content']:$_FEED['pubDate']->format("n");
									break;
								case 'publish_day':
									$tmpMetaTag_PubD = (strlen(trim($tmpMetaTag['content'])))?$tmpMetaTag['content']:$_FEED['pubDate']->format("j");
									break;
								default:
									if(strlen(trim($tmpMetaTag['content']))){
										$tmpContent = htmlspecialchars($tmpMetaTag['content'], ENT_QUOTES,"");
										$tmpFeed .= "<meta name=\"".$tmpMetaTag['name']."\" content=\"".$tmpContent."\"/>\n";
									}
									break;
							}
						}
						$tmpFeed .= "<meta name=\"publish_date\" content=\"".$tmpMetaTag_PubY."-".$tmpMetaTag_PubM."-".$tmpMetaTag_PubD."\"/>\n";
						if($tmpRecord->content){
							$tmpFeed .= "<meta name=\"dGVhc2Vy\" encoding=\"base64binary\" content=\"".base64_encode($tmpRecord->content)."\"/>\n";
						}
						if($tmpRecord->content2)
							$tmpFeed .= "<meta name=\"dGVhc2VyMg==\" encoding=\"base64binary\" content=\"".base64_encode($tmpRecord->content2)."\"/>\n";
						$tmpFeed .= "</metadata>\n";
						$tmpFeed .= "</record>\n";
					}
				}
			}
			$tmpFeed .= "</group>\n</gsafeed>";

			return $tmpFeed;
		
		}catch (InvalidArgumentException $e) {
			throw $e;
		}catch (Exception $e) {
			throw $e;
		}
	}
}

try{
	$data = RestUtils::processRequest();
	$myReqVars = $data->getRequestVars();
	$xmlBody = (empty($myReqVars))?BuildGoogleFeed():BuildGoogleFeed(urldecode($myReqVars['lastrun']), urldecode($myReqVars['gsa']), urldecode($myReqVars['gsadtd']), urldecode($myReqVars['datasource']), urldecode($myReqVars['feedtype']), urldecode($myReqVars['feedpath']));
	RestUtils::sendResponse(200, $xmlBody, 'xml', FALSE);
}catch(Exception $e){
	if(TRUE===API_DEBUG){
		RestUtils::sendResponse(500, $e);
	}else{
		RestUtils::sendResponse(500);
	}
}

?>
