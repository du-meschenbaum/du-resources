<?php	
		//cURL method
		$params = array(
			'api_key'	=> '8f9d4a750ef320e7c6daf57edd3eac35',
			'method'	=> 'flickr.photosets.getPhotos',
			'photoset_id'	=> '72157631084460666',
			'format'	=> 'php_serial',
        );
            $encoded_params = array();
            foreach ($params as $k => $v){ $encoded_params[] = urlencode($k).'='.urlencode($v); }

		$ch = curl_init();
            $timeout = 5; // set to zero for no timeout
            curl_setopt ($ch, CURLOPT_URL, 'http://api.flickr.com/services/rest/?'.implode('&', $encoded_params));
            curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
            $file_contents = curl_exec($ch);
            curl_close($ch);
            
        $rsp_obj = unserialize($file_contents);
		
		//create empty array to store values	
		$file_array = array ();
				$overlay_j = array ();
		
       	//check if string is true or false, if true continue processing string
		if ($rsp_obj['stat'] == 'ok'){
			//grab contents from each item in array
			foreach ($rsp_obj['photoset']['photo'] as $photo):
				$id = $photo['id'];
				$title = $photo['title'];
				$farmid = $photo['farm'];
				$serverid = $photo['server'];
				$secret = $photo['secret'];
				 
				$thumb_url = "http://farm{$farmid}.static.flickr.com/{$serverid}/{$id}_{$secret}_t.jpg";
				$img_url = "http://farm{$farmid}.static.flickr.com/{$serverid}/{$id}_{$secret}_c.jpg";
				$link = "http://www.flickr.com/photos/duinternalphotos/7776854674/in/set-72157631084460666/lightbox/";
				
				$image_html= "<a href='{$img_url}' class='various' alt=\"{$title}\" ><img alt=\"{$title}\" src='{$img_url}' class='main_img' width='711px' /></a><figcaption class='main_img_caption'>{$title}</figcaption>";
							$overlay_w = "href : '$img_url', title : '$title'";
							
							
                               	//fill arrays with content strings built from vars
							$file_array [] = $image_html;
							$overlay_j [] = $overlay_w;
							
							
			endforeach;
		//display random image each time page loads	 
		$total = count($file_array); 
		$random = (mt_rand()%$total); 
		$file = "$file_array[$random]"; 
		print("$file");
			
			print("
			<script>
			$('.various').click(function() {
				$.fancybox.open([");
		foreach ($overlay_j as $key => $field):
			echo "{ $field },";
		endforeach;	
		print("], {
					helpers        : {
					title    : { type : 'inside' },
					buttons    : {}
					}
				});	
				return false;
			});
			</script>
			");
		
       	//check if string is true or false, if false, display image from local server
		}else{
			echo "<img alt='The campus at sunrise, with downtown Denver in the background.' src='http://www.du.edu/media/images/home_main/error_image.jpg' class='main_img' width='711px' /><figcaption class='main_img_caption'>The campus at sunrise, with downtown Denver in the background.</figcaption>";
		}
?>