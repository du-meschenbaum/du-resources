	var slideCounter = 1;
	var slideTotal=0;
	var playing=true;
	var slideDuration=15000;
	
	function gallery(slideNum) {
		
		//if no IMGs have the show class, grab the first image
		if(!$('div.slides').hasClass('show')){
			var current = $('#gallery div.slides:first');
		}else{
			var current = $('#gallery div.slides.show');
		}
	
		//Get next image, if it reached the end of the slideshow, rotate it back to the first image
		if( typeof(slideNum)==="undefined" ){
			if(slideCounter>=slideTotal){
				var next=$('#gallery div.slides:first');
				slideCounter=1;
			}else{
				var next=current.next();
				slideCounter++;
			}
		}else{
			slideCounter=slideNum;
			var next=$('#slide'+slideCounter);
		}
		
		//Get next image caption
		var caption = next.find('div').html(); 
		
		//Hide the current image
		current.animate({opacity: 0.0}, 1000, function(){
			$(this).removeClass('show');
			//Set the fade in effect for the next image, show class has higher z-index
			next.css({opacity: 0.0})
				.addClass('show')
				.animate({opacity: 1.0}, 1000, function(){													
					$('.slideControl ul li').removeClass('slideSelected');
					$('.slideMarker'+slideCounter).addClass('slideSelected');
					//return false;
				});
		});
		
		//Set the opacity to 0 and height to 1px
		//$('#gallery .caption').animate({opacity: 0.0}, { queue:false, duration:0 }).animate({height: '1px'}, { queue:true, duration:300 });	
		
		//Animate the caption, opacity to 0.7 and heigth to 100px, a slide up effect
		//$('#gallery .caption').animate({opacity: 1.0},100 ).animate({height: '600px'},500 );
		
		//Display the content
		//$('#gallery .captionContent').html(caption);
		
	}
	
	function slideShow() {
		//Set the opacity of all images to 0
		$('#gallery div.slides').css({opacity: 0.0});
		
		//Get the first image and display it (set it to full opacity)
		$('#gallery div.slides:first').css({opacity: 1.0});
		
		//Set the caption background to semi-transparent
		//$('#gallery .caption').css({opacity: 1.0});
	
		//Get the caption of the first image and display it
		//$('#gallery .captionContent').html($('#gallery div.slides:first').find('div').html())
			//.animate({opacity: 1.0}, 400);
			
		var run = setInterval('gallery()',slideDuration);
		
		//stop button
		$('#btn-pause').click(function () {
			_gaq.push(['_trackEvent', 'Homepage Slideshow', 'Pause']);
			clearInterval(run);
			$(this).hide();
			$('#btn-play').show();
			playing=false;
			return false;
		});
		
		//play button
		$('#btn-play').click(function () {
			_gaq.push(['_trackEvent', 'Homepage Slideshow', 'Play']);
			gallery();
			run = setInterval('gallery()',slideDuration);
			$(this).hide();
			$('#btn-pause').show();
			playing=true;
			return false;
		});
		
		
		$('#gallery div.slideControl li').not('#playPause').click(function(){
			id=$(this).attr('id');
			_gaq.push(['_trackEvent', 'Homepage Slideshow', 'Jump To Slide: '+id]);
			
			//parseInt only works when strings begin with integers.  Since this would be an invalid id, we have to parse ints with regex
			var txt=id;
			var re1='.*?';	// Non-greedy match on filler
			var re2='(\\d+)';	// Integer Number 1
			var p = new RegExp(re1+re2,["i"]);
			var m = p.exec(txt);
			if (m != null){
			  id=m[1];
			} 
			
			
			if(!$('#slide'+id).hasClass('show')){
				if(playing===true){
					clearInterval(run);
					gallery(id);
					run = setInterval('gallery()',slideDuration);
				}else{ 
					gallery(id);
				}
			}
			return false;
		});
		
	}
	
	function getHeadlines(bucket) {
		try{
			var jsonCat, json, carouselBucket, carouselTime;
			switch(bucket){
				case 'headlines3':
					jsonCat='headlines-3';
					carouselBucket='carousel3';
					carouselTime=4000;
					break;
				case 'headlines2':
					jsonCat='headlines-2';
					carouselBucket='carousel2';
					carouselTime=3500;
					break;
				default:
					jsonCat='headlines-1';
					carouselBucket='carousel1';
					carouselTime=3000;
			}
			//Development json = "http://devmagazine.du.edu/api/get_category_posts?callback=?&custom_fields=1&slug="+jsonCat+"&custom_fields=HeadlinesFeedTitle,HeadlinesFeedCaption";
			json = "http://magazine.du.edu/api/get_category_posts?callback=?&custom_fields=1&slug="+jsonCat+"&custom_fields=HeadlinesFeedTitle,HeadlinesFeedCaption,HeadlinesFeedImage";
			$('#'+bucket).empty();

			$.getJSON(json, function(data) {
				$.each(data.posts, function(index, item) {
					var postURL, thumb, title, blurb, urlTitle, tmpItem;
					if(item.custom_fields && typeof(item.custom_fields.HeadlinesFeedImage) != 'undefined' && (item.custom_fields.HeadlinesFeedImage.length > 0 && item.custom_fields.HeadlinesFeedImage[0] != '') ){
						thumb = '<img src="'+item.custom_fields.HeadlinesFeedImage[0]+'" width="70" height="70" />';
					}else{thumb = '';}
					if(item.custom_fields && typeof(item.custom_fields.HeadlinesFeedTitle) != 'undefined' && (item.custom_fields.HeadlinesFeedTitle.length > 0 && item.custom_fields.HeadlinesFeedTitle[0] != '') ){
						title = item.custom_fields.HeadlinesFeedTitle[0];
						title = title.substr(0,23).replace(/"/g, "&quot;").replace(/'/g, "&#39;");
						title = title;//'<h1>'+title+'</h1>';
					}else{title = '';}
					if(item.custom_fields && typeof(item.custom_fields.HeadlinesFeedCaption) != 'undefined' && (item.custom_fields.HeadlinesFeedCaption.length > 0 && item.custom_fields.HeadlinesFeedCaption[0] != '') ){
						blurb = item.custom_fields.HeadlinesFeedCaption[0];
						urlTitle = blurb.replace(/"/g, "&quot;").replace(/'/g, "&#39;");
						blurb = blurb.substr(0,75).replace(/"/g, "&quot;").replace(/'/g, "&#39;");
						blurb = blurb;//'<p>'+blurb+'</p>';
					}else{blurb = '';}
					if(item.url){postURL = item.url;}else{postURL = '';}
					if(title != '' && blurb != ''){
						if(postURL != ''){tmpItem = '<li><a class="thumb" href="'+postURL+'" title="'+urlTitle+'">'+thumb+'</a><div><a class="title" href="'+postURL+'" title="'+urlTitle+'">'+title+'</a><a class="excerpt" href="'+postURL+'" title="'+urlTitle+'">'+blurb+'</a></div></li>';}else{tmpItem = '<li>'+thumb+'<h1>'+title+'</h1><p>'+blurb+'</p></li>';}
						$('#'+bucket).append(tmpItem);
					}
				});
				//Start Headlines carousels
				if(data.count > 1){
					$("#"+carouselBucket).jCarouselLite({auto: carouselTime, speed: 1500, visible: 1, vertical: true});
					return true;
				}else{return false;}
			});
		}catch(e){console.log(e);}
	}
	
	$(document).ready(function(){	
		getHeadlines('headlines1');
		
		$('div.slideControl').show();
		
		getHeadlines('headlines2');
		
		/*$('a.photoInfo').click(function () {
			_gaq.push(['_trackEvent', 'Homepage Slideshow', 'Photo Info']);
			var options = {direction:'right'};
			$(this).next('.homeSideExcerpt02').toggle('slide', options, '500');
			if($(this).hasClass('closePhotoInfo')){
				$(this).removeClass('closePhotoInfo');
			}else{
				$(this).addClass('closePhotoInfo');
			}
			return false;
		});*/
		
		getHeadlines('headlines3');
		
		$('div.slideControl li').hover(function(){
			$(this).addClass('hover');
			}, function(){
				$(this).removeClass('hover');
			});
			
		$('#gallery div.slides').each(function(i){
			slideTotal++;
			slideNum= 'slide'+(i+1);
			$(this).attr('id', slideNum);
		});
		
		$('#gallery div.slideControl li').not('#playPause').each(function(i){
			slideNum= 'control'+(i+1);
			$(this).attr('id', slideNum);
		});
	
		//Execute the slideShow
		slideShow();
		
		$('#btn-play').hide();
		
		$('#btn-pause').css('opacity',0.45);
		$('#btn-play').css('opacity',0.45);
				
		if ($.browser.msie && $.browser.version.substr(0,1)<8) {
		  // search for selectors you want to add hover behavior to
		  //$('#btn-play').css('left',10);
		}
	});
