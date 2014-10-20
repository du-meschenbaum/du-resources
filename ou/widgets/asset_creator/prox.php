<?php
ini_set('display_errors', 'off');
	
try{
	if(isset($_POST['rss'])){
		$rss = htmlspecialchars_decode($_POST['rss']);
		$feed = simplexml_load_file($rss);
		$items = array();
		foreach ($feed->channel->item as $feeditem) {
			$item_date = strtotime($feeditem->pubDate);
			$items[$item_date]["debug"] = array();
			
			if((!isset($_POST["hideTitle"]) || $_POST["hideTitle"] == "false") && isset($feeditem->title)){
				$tmpTitle = (string)$feeditem->title;
				if(strlen($tmpTitle)>2){
					if(isset($_POST["rss_title"]) && (int)$_POST["rss_title"]>2  ){
						if(strlen($tmpTitle) < (int)$_POST["rss_title"]){
							$items[$item_date]["title"] = $tmpTitle;
						}else{
							$items[$item_date]["title"] = substr($tmpTitle,0,(int)$_POST['rss_title']) . "  ...";
						}
					}else{
						$items[$item_date]["title"] = $tmpTitle;
					}
				}
			}
			
			if(!isset($_POST["hideAuth"]) || $_POST["hideAuth"] == "false"){
				if(isset($feeditem->children('http://purl.org/dc/elements/1.1/')->creator)){
					$items[$item_date]["author"] = (string) $feeditem->children('http://purl.org/dc/elements/1.1/')->creator;
				}else if(isset($feeditem->author)){
					$items[$item_date]["author"] = (string) $feeditem->author;
				}
			}
			
			if(isset($feeditem->link)){
				$items[$item_date]["link"] = (string) $feeditem->link;
			}
			
			if((!isset($_POST["hideDesc"]) || $_POST["hideDesc"] == "false") && isset($feeditem->description) ){
				$tmpDesc = (string)$feeditem->description;
				if(strlen($tmpDesc)>2){
					if(isset($_POST["rss_desc"]) && (int)$_POST["rss_desc"]>2 ){
						if(strlen($tmpDesc) < (int)$_POST["rss_desc"]){
							$items[$item_date]["description"] = $tmpDesc;
						}else{
							$items[$item_date]["description"] = substr($tmpDesc,0,(int)$_POST['rss_desc']) . "  ...";
						}
					}else{
						$items[$item_date]["description"] = $tmpDesc;
					}
				}
			}
			
			if(!isset($_POST["hidePub"]) || $_POST["hidePub"] == "false" ){
				$items[$item_date]["date"] = date("F j, Y, g:i a",$item_date);
			}
			
			if(!isset($_POST["hideMedia"]) || $_POST["hideMedia"] == "false"){
				
				if(isset($_POST["media_minheight"]) && is_numeric($_POST["media_minheight"]))
					$items[$item_date]["mediaminh"] = (int) $_POST['media_minheight'];

				if($feeditem->children('http://search.yahoo.com/mrss/')->count()){
					$media = $feeditem->children('http://search.yahoo.com/mrss/');
					/*$items[$item_date]["debug"][] = $media;
					$items[$item_date]["debug"][] = $media->count();
					$items[$item_date]["debug"][] = isset($media->thumbnail);
					$items[$item_date]["debug"][] = isset($media->content);
					$items[$item_date]["debug"][] = isset($media->content[0]->thumbnail);
					$items[$item_date]["debug"][] = $media->content[0]->attributes();*/

					if(isset($media->thumbnail)){
						$tmpMediaUrl = $media->thumbnail[0]->attributes();
						$items[$item_date]["mediaurl"] = (string)$tmpMediaUrl['url'];
					}else if(isset($media->content)){
						if(isset($media->content[0]->thumbnail)){
							$tmpMediaUrl = $media->content[0]->thumbnail->attributes();
							$items[$item_date]["mediaurl"] = (string)$tmpMediaUrl['url'];
						}else{
							$tmpMediaUrl = $media->content[0]->attributes();
							$items[$item_date]["mediaurl"] = (string)$tmpMediaUrl['url'];
						}
					}
					
					if(!isset($_POST["hideMedia"]) || $_POST["hideMedia"] == "false"){
						if(isset($media[0]->content->title)){
							$items[$item_date]["mediatitle"] = (string)$media[0]->content->title;
						}else if(isset($media->title)){
							$items[$item_date]["mediatitle"] = (string)$media[0]->title;
						}
					}
					
					if(!isset($_POST["hideMediaDesc"]) || $_POST["hideMediaDesc"] == "false"){
						$tmpMediaDesc = '';
						if(isset($media[0]->content->description)){
							$tmpMediaDesc = (string)$media[0]->content->description;
						}else if(isset($media[0]->description)){
							$tmpMediaDesc = (string)$media[0]->description;
						}
						
						if(strlen($tmpMediaDesc)>2){
							if(isset($_POST["hideMediaDescNum"]) && (int)$_POST["hideMediaDescNum"]>2 ){
								if(strlen($tmpMediaDesc) < (int)$_POST["hideMediaDescNum"]){
									$items[$item_date]["mediadesc"] = $tmpMediaDesc;
								}else{
									$items[$item_date]["mediadesc"] = substr($tmpMediaDesc,0,(int)$_POST['hideMediaDescNum']) . "  ...";
								}
							}else{
								$items[$item_date]["mediadesc"] = $tmpMediaDesc;
							}
						}
					}
					
				}else if(isset($feeditem->enclosure)){
					$tmpMediaUrl = $feeditem->enclosure->attributes();
					$items[$item_date]["mediaurl"] = (string)$tmpMediaUrl['url'];
				}
				
			}
	
		}
		
		if(isset($_POST['order'])){
			if($_POST['order'] == "Ascending"){
				krsort($items);
			}else{
				ksort($items);
			}
		}
		if(isset($_POST['num']) && (int)$_POST['num'] != 0){
			$items = array_slice($items, 0, (int)$_POST['num']);
		}else{
			$items = array_slice($items, 0, 10);
		}
		echo json_encode($items);
	}
}catch(Exception $e){
	//$debug->debug($e->getMessage(), $e);
	echo($e->getMessage());
}
?>
