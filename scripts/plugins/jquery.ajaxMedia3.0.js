(function($) {

$.fn.ajaxMedia = function(options) {
	var defaults = {
		overlayPrepend:'body',
		overlayOpacity:'0.8',
		OSSInit:'.overlaySlideShow',
		ISSInit:'.inlineSlideShow',
		IISSInit:'.instantInlineSlideShow',
		OVInit:'.overlayVideo',
		IVInit:'.inlineVideo',
		OQTInit:'.overlayQuicktime',
		IAInit:'.inlineAudio',
		IIAInit:'.instantInlineAudio', /*"Instant" is lehman's for on page load. no clicking required*/
		ISWFInit:'.inlineSWF',
		IISWFInit:'.instantInlineSWF',
		OSWFInit:'.overlaySWF',
		OIMGInit:'.overlayIMG',
		close:'.close',
		next:'.next',
		previous:'.previous',
		first:'.first',
		last:'.last',
		archiveSelect:'.archiveSelect',
		rootPath:'http://www.du.edu',
		rootPathShort:'http://www.du.edu',
		expressInstallPath:'/_resources/scripts/flash/expressInstall.swf',
		playerPath:'/_resources/scripts/flash/players/StrobeMediaPlayback.swf',
		pluginGooglePath:'/_resources/scripts/flash/players/GTrackPlugin.swf',
		skinPath:'/_resources/scripts/flash/skins/du_player_skin.zip',
		flashPlayerVersion:'10',
		slideshowUL:'.overlay-slideshow',
		overlayWrapper:'.overlay-wrapper',
		inlineWrapper:'.inline',
		inlineSSControls:'.controls',
		inlineSSImgWrap:'.fullSize', /*Collage makes us wrap images in div since we can't add classes.*/
		inlineSSThumb:'.thumbnail img',
		thumbDirectory:'/thumbnails',
		slideCount:'.overlay-slideCount',
		slideNavBox:'.overlaySlideNav',
		mediaInfo:'.mediaInfo',
		mediaContainer:'.mediaContainer',
		resizePadding: '30px',/*Padding around something like a swf so that jquery can resize the width without losing padding*/
		altContentContainer:'altContent_',/*var for swf object NOT jquery. must be an id, without '#'. will tack on asset id*/
		timer:false
	}
	var options = $.extend(defaults, options);

	var overlay = $("<div id='overlay'><div id='loading'>&nbsp;</div></div>"); /*Loading included for loading gif*/
	var addMedia = $("<div id='addMedia'>&nbsp;</div>"); /*Appends to the body and holds all overlay content.  Inline objects obviously go where the link is placed.*/
	
	/*Collage makes for bad paths. These strip "WebSite" out of the paths of the swfs on deployed versions.  The IF statement determines they are in preview, because paths don't need to be fixed in preview.
	if(options.rootPathShort == options.rootPath){
		options.playerPath=options.playerPath.replace(/\/WebSite\//gi, "/");
		options.skinPath=options.skinPath.replace(/\/WebSite\//gi, "/");
		options.expressInstallPath=options.expressInstallPath.replace(/\/WebSite\//gi, "/");
	}*/
	
	/*Create overlay and addMedia container, place them, and set the overlay opacity*/
	$(options.overlayPrepend).prepend(overlay);
	$('#overlay').css('opacity', options.overlayOpacity);
	$('body').append(addMedia);
	
	// Slideshow hover
	var slide = 1;
	var slideTotal=0;
	var callers = new Array(); /*Callers holds variables for bound events. e.g. what kind of link was clicked*/
	var scrollPos = $(window).scrollTop() + 50;

	/*IE6 will probably be out of use by the next version of jquery when they trash the browser version determination for good*/
	if($.browser.msie && $.browser.version < 7.0) {
		$('#overlay').css('position', 'absolute');
		$("body","html").css({"height": "100%"});
		var windowHeight = $(document).height();
		var windowWidth = $(document).width();
		var marginLeft = (-(windowWidth-960)/2); /*Brings overlay to left side of browser*/
		if(windowWidth > 960){$('html').css('overflow-x','hidden')};
		$('#overlay').css({'height': windowHeight, 'width': windowWidth, 'margin-left':'0', 'margin-top':'0'});
	}
	
	/*Bind events.  Call init*/
	$(options.OSSInit).click(function(){
        $jqObj=$(this);
		obj=this;
        init('OSS', $jqObj, obj);
        return false;
    });
	
	$(options.ISSInit).click(function(){
        $jqObj=$(this);
		obj=this;
        init('ISS', $jqObj, obj);
        return false;
    });
	
	$(options.IISSInit).each(function(i){
        $jqObj=$(this);
		obj=this;
        init('ISS', $jqObj, obj);
        return false;
    });
	
	$(options.OVInit).click(function(){
        $jqObj=$(this);
		obj=this;
        init('OV', $jqObj, obj);
        return false;
    });
	
	$(options.IVInit).click(function(){
        $jqObj=$(this);
		obj=this;
        init('IV', $jqObj, obj);
        return false;
    });
	
	$(options.OQTInit).click(function(){
        $jqObj=$(this);
		obj=this;
        init('OQT', $jqObj, obj);
        return false;
    });
	
	$(options.IAInit).click(function(){
        $jqObj=$(this);
		obj=this;
        init('IA', $jqObj, obj);
        return false;
    });
	
	$(options.IIAInit).each(function(i){
        $jqObj=$(this);
		obj=this;
        init('IA', $jqObj, obj);
        return false;
    });
	
	$(options.OSWFInit).click(function(){
        $jqObj=$(this);
		obj=this;
        init('OSWF', $jqObj, obj);
        return false;
    });
	
	$(options.ISWFInit).click(function(){
        $jqObj=$(this);
		obj=this;
        init('ISWF', $jqObj, obj);
        return false;
    });
	
	$(options.IISWFInit).each(function(i){
        $jqObj=$(this);
		obj=this;
        init('ISWF', $jqObj, obj);
        return false;
    });
    
	$(options.OIMGInit).click(function(){
        $jqObj=$(this);
		obj=this;
        init('OIMG', $jqObj, obj);
        return false;
    });
	
	/*Init does the following:
		1. Check to see if the link media has been called before.  If it has, it tells functions to just show it.  If not:
		2. Set variables for functions and determine types.
		3. Call functions, pass vars */
	function init(type, $tempJqObj, tempObj){
        var clicked = tempObj;
        var check = false;
        var classy = $tempJqObj.attr('class');
        var href = $tempJqObj.attr('href');
        var arrayPos = 0;
        $.each(callers, function(i,n){
            if(callers[i][2]==href){ /*Check if this href is in the array*/
                check=true;
                arrayPos=i;
            }
        })
        if(check==true){
					switch(type){
						case 'OSS':
						overlaySlideshow(true, $tempJqObj, arrayPos);
						break;
						case 'OV':
						overlayVideo(true, $tempJqObj, arrayPos);
						break;
						case 'IV':
						inlineVideo($tempJqObj, arrayPos);
						break;
						case 'OQT':
						overlayQT(true, $tempJqObj, arrayPos);
						break;
						case 'OSWF':
						overlaySWF(true, $tempJqObj, arrayPos);
						break;
						case 'OIMG':
						overlayIMG(true, $tempJqObj, arrayPos);
						break;
						default:
					}
        }else{
					arrayPos=callers.length;
					callers[arrayPos] = new Array();
					callers[arrayPos][0] = clicked;
					callers[arrayPos][1] = classy;
					callers[arrayPos][2] = href;
			
					switch(type){
						case 'OSS':
						overlaySlideshow(false, $tempJqObj, arrayPos);
						break;
						case 'ISS':
						overlaySlideshow(false, $tempJqObj, arrayPos);
						break;
						case 'OV':
						overlayVideo(false, $tempJqObj, arrayPos);
						break;
						case 'IV':
						inlineVideo($tempJqObj, arrayPos);
						break;
						case 'OQT':
						overlayQT(false, $tempJqObj, arrayPos);
						break;				
						case 'IA':
						inlineAudio($tempJqObj, arrayPos);
						break;
						case 'OSWF':
						overlaySWF(false, $tempJqObj, arrayPos);
						break;
						case 'ISWF':
						inlineSWF($tempJqObj, arrayPos);
						break;
						case 'OIMG':
						overlayIMG(false, $tempJqObj, arrayPos);
						break;
						default: 
					}
        }
        return false;
    }

	function overlaySlideshow(loaded, $jqObj, index){
		var divId, inlineSS;
		if($jqObj.hasClass(options.ISSInit)){
			divId = ("inlineSlideshow-"+index); /*makes slideshows unique. just tacks on the number of the ajax media call.*/
			inlineSS=true;
		}else{
			divId = ("overlaySlideshow-"+index); 
			inlineSS=false;
			$("#overlay").fadeIn('fast'); 
			showLoading(true, $jqObj);/*fade in overlay and show loading gif while they wait*/
		}
		
		
		var slideNum = 1;
		if(loaded == true){
			reopen(); /*Slideshow already loaded, just need to show it again */
		}else{
			if(inlineSS===true){
				var wrapper = $('<div id="'+divId+'" class="inlineSS">&nbsp;</div>');
				if($jqObj.parent('p')){
					$jqObj.parent('p').replaceWith(wrapper);
				} else{
					$jqObj.replaceWith(wrapper);
				}
					
				$('#'+divId).load(callers[index][0].href + ' '+options.inlineWrapper+', '+options.inlineSSControls, function(){ /*ajax retrieves slideshow from slideshow doc*/
					initISS();
				});
			}else{
				var wrapper = $('<div id="'+divId+'">&nbsp;</div>');
				$('#addMedia').append(wrapper);
				$('#'+divId).load(callers[index][0].href + ' '+options.overlayWrapper, function(){ /*ajax retrieves slideshow div from slideshow doc*/
					initOSS();
				});
			};
		};
		
		function initOSS(){
			hideLoading(true, $jqObj);
			slideNum = 1;
			mediaPath=$('#'+divId+" .mediaPath").html(); /*slideshow path is written into to slideshow div. Collage puts out relative srcs for images. When pulled into another document, relative paths break. So we need to write them.*/
			if(options.rootPathShort == options.rootPath){ /*again, preview won't need a rewrite*/
				newMediaPath=mediaPath.replace(/\/WebSite\//gi, "/"); /*removes /WebSite/ from the path*/
			}else{newMediaPath=mediaPath};
			if(options.rootPathShort == options.rootPath){
				$('#'+divId+" "+options.slideshowUL+" li img").each(function(i){
					var regexp = /(\w|[-.])+$/;
					fname = regexp.exec($(this).attr('src')); /*RegEx retrieves the filename of the image*/
					$(this).attr('src', (newMediaPath + 'images/' + fname[0] )); /*Replace image src with new one.  Note: this requires images to be in a folder called "images" in the folder that the slideshow is in. */
				});
			}
			slideTotal=$('#'+divId+" "+options.slideshowUL+" li").siblings().length;
			$('#'+divId+" "+options.overlayWrapper).fadeIn('slow');
			$('#'+divId+" "+options.slideshowUL+" li:first").addClass('currentSlide').slideDown('slow'); /*Opening animation of slideshow.  Could be made into an option. */
			control();
			close(divId, 'OSS', index);
		}
		
		function reopen(){
			$('#'+divId+' '+options.overlayWrapper).fadeIn('fast');
			$('#'+divId+' '+options.overlayWrapper+' li.currentSlide').slideDown('slow');
		}
		
		function initISS(){
			mediaPath=$('#'+divId+" .mediaPath").html(); /*slideshow path is written into to slideshow div. Collage puts out relative srcs for images. When pulled into another document, relative paths break. So we need to write them.*/
			if(options.rootPathShort == options.rootPath){ /*again, preview won't need a rewrite*/
				newMediaPath=mediaPath.replace(/\/WebSite\//gi, "/"); /*removes /WebSite/ from the path*/
			}else{newMediaPath=mediaPath};
			if(options.rootPathShort == options.rootPath){
				$('#'+divId+" "+options.inlineWrapper+" li "+options.inlineSSImgWrap+" img").each(function(i){
					var regexp = /(\w|[-.])+$/;
					fname = regexp.exec($(this).attr('src')); /*RegEx retrieves the filename of the image*/
					$(this).attr('src', (newMediaPath + 'images/' + fname[0] )); /*Replace image src with new one.  Note: this requires images to be in a folder called "images" in the folder that the slideshow is in. */
				});
				$('#'+divId+" "+options.inlineWrapper+" li "+options.inlineSSThumb).each(function(i){
					var regexp = /(\w|[-.])+$/;
					fname = regexp.exec($(this).attr('src')); /*RegEx retrieves the filename of the image*/
					$(this).attr('src', (newMediaPath + 'images'+options.thumbDirectory + fname[0] )); /*Replace image src with new one.  Note: this requires images to be in a folder called "images" in the folder that the slideshow is in. */
				});
			}
			$('#'+divId+" "+options.inlineWrapper+" li:first").addClass('currentSlide').children(options.inlineSSImgWrap).fadeIn('slow');
			slideTotal=$('#'+divId+" "+options.inlineWrapper+" li").siblings().length;
			control();
		}
		
		/*Slideshow navigation controls*/
		function control(){
			indexSlides(divId);
			
			if(inlineSS===true){
				ssWrap=options.inlineWrapper;
			}else{
				ssWrap=options.slideshowUL;
			}
			$slide=$('#'+divId+" "+ssWrap+" li");
			$firstSlide=$('#'+divId+" "+ssWrap+" li:first");
			$lastSlide=$('#'+divId+" "+ssWrap+" li:last");
			
			$('#'+divId+" "+options.next).click(function(){next(); if(options.timer===true){pause(); return false;}});
			$('#'+divId+" "+options.previous).click(function(){ prev(); if(options.timer===true){pause();} return false;});
			$('#'+divId+" "+options.first).click(function(){ first(); if(options.timer===true){pause();} return false;});
			$('#'+divId+" "+options.last).click(function(){ last(); if(options.timer===true){pause();} return false;});
			$('#'+divId+" "+options.inlineSSThumb).click(function(){ var $newObj=$(this); thumbNav($newObj); if(options.timer===true){pause();} return false;});
			$('#'+divId+" "+options.inlineSSThumb).hover(function(){$(this).addClass('hover');}, function(){$(this).removeClass('hover');});
			
			function next(){
				var currentSlide = $('#'+divId+" "+ssWrap+" li.currentSlide");
				if(slideNum<slideTotal){
					if(inlineSS===true){
						$(currentSlide).removeClass('currentSlide').children(options.inlineSSImgWrap).fadeOut('slow');/*Since images are absolutely positioned, they can fade over eachother for crossfade.  If they aren't absolutely positioned, this should be changed to use a callback like the overlay*/
						$(currentSlide).next($slide).addClass('currentSlide').children(options.inlineSSImgWrap).fadeIn('slow');
					}else{
						$(currentSlide).removeClass('currentSlide').fadeOut('medium', function(){ /*These animations could be given an animation option in the future.  Daniels requires fades because of excessive borders and corners*/
						$(currentSlide).next($slide).addClass('currentSlide').fadeIn('medium');});
					}
					slideNum++;
					indexSlides(divId);
				}else{
					if(inlineSS===true){
						$(currentSlide).removeClass('currentSlide').children(options.inlineSSImgWrap).fadeOut('slow');
						$firstSlide.addClass('currentSlide').children(options.inlineSSImgWrap).fadeIn('slow');
					}else{
						$(currentSlide).removeClass('currentSlide').fadeOut('medium', function(){
						$firstSlide.addClass('currentSlide').fadeIn('medium');});
					}
					slideNum = 1;
					indexSlides(divId);
				}
			}
			
			function prev(){
				var currentSlide = $('#'+divId+" "+ssWrap+" li.currentSlide");
				if(slideNum>1){
					if(inlineSS===true){
						$(currentSlide).removeClass('currentSlide').children(options.inlineSSImgWrap).fadeOut('slow'); /*Since images are absolutely positioned, they can fade over eachother for crossfade.  If they aren't absolutely positioned, this should be changed to use a callback like the overlay*/
						$(currentSlide).prev($slide).addClass('currentSlide').children(options.inlineSSImgWrap).fadeIn('slow');
					}else{
						$(currentSlide).removeClass('currentSlide').fadeOut('medium', function(){ /*These animations could be given an animation option in the future.  Daniels requires fades because of excessive borders and corners*/
						$(currentSlide).prev($slide).addClass('currentSlide').fadeIn('medium');});
					}
					slideNum--;
					indexSlides(divId);
				}else{
					if(inlineSS===true){
						$(currentSlide).removeClass('currentSlide').children(options.inlineSSImgWrap).fadeOut('slow');
						$lastSlide.addClass('currentSlide').children(options.inlineSSImgWrap).fadeIn('slow');
					}else{
						$(currentSlide).removeClass('currentSlide').fadeOut('medium', function(){
						$lastSlide.addClass('currentSlide').fadeIn('medium');});
					}
					slideNum=slideTotal;
					indexSlides(divId);
				}
			}
			
			function first(){
				var currentSlide = $('#'+divId+" "+ssWrap+" li.currentSlide");
					$(currentSlide).removeClass('currentSlide').children(options.inlineSSImgWrap).fadeOut('slow');
					$firstSlide.addClass('currentSlide').children(options.inlineSSImgWrap).fadeIn('slow');
					slideNum=1;
					indexSlides();
			}
			
			function last(){
				var currentSlide = $('#'+divId+" "+ssWrap+" li.currentSlide");
					$(currentSlide).removeClass('currentSlide').children(options.inlineSSImgWrap).fadeOut('slow');
					$lastSlide.addClass('currentSlide').children(options.inlineSSImgWrap).fadeIn('slow');
					slideNum=slideTotal;
					indexSlides();
			}
			
			function thumbNav($thumb){
				var currentSlide = $('#'+divId+" "+ssWrap+" li.currentSlide");
					$thumb.parents('li').addClass('currentSlide');
					$(currentSlide).removeClass('currentSlide').children(options.inlineSSImgWrap).fadeOut('medium', function(){
					$thumb.parents('li').addClass('currentSlide').children(options.inlineSSImgWrap).fadeIn('medium');});
					$li=$thumb.parents('li');
					newIndex=$('#'+divId+" "+ssWrap+' li').index($li);
					slideNum=newIndex+1;
					indexSlides();
			}
			
			function count(){ if(counting==true){$('.next').fadeTo(5000, 1, function(){if(counting===true){next()}});} } /*Fade to avoids having to use set timout. Random object that will always be at full opacity fades to full opacity*/
			
			function play(){
				counting=true; 
				next();
				$('.playpause').html('pause');
			}
			
			function pause(){
				counting=false; 
				$('.playpause').html('play');
			}
			
			$('.playpause').click(function(){
				if(counting===true){
					pause();
				}else{
					play();
				}
			});
		
		function indexSlides(id){
			if (slideTotal == 0){ /*Removes navigation if there's only one slide.  Could allow for single photo viewing. */
				$(options.slideNavBox).css('display','none');
				$(options.mediaInfo).css('margin-top','-20px');
			}else{
			$("#"+id+" "+options.slideCount).html(slideNum + ' of ' + slideTotal);
			}
		}
	};/*END CONTROLS*/
		return false;
	}
	
	function overlayVideo(loaded, $jqObj, index){
		var divId = ("overlayVideo-"+index);
		$("#overlay").fadeIn('fast');
		if(loaded == true){
			$('#'+divId+' '+options.overlayWrapper).fadeIn('fast');
		}else{
			var wrapper = $('<div id="'+divId+'">&nbsp;</div>');
			$('#addMedia').append(wrapper);
			showLoading(true, $jqObj);
			$('#'+divId).load(callers[index][0].href + ' '+options.overlayWrapper, function(){ /*Ajax retrieves video page*/
				hideLoading(true, $jqObj);
				$('#'+divId+' '+options.overlayWrapper).fadeIn('fast');
				/*Determine vars for player and swfobject. These are written out as text in the pages due to cross site script blocking*/
				var vidAssetId  = $('#'+divId+' .mediaUID').html();
				var vidSrc      = $('#'+divId+' .uri').html();
				var vidWidth    = $('#'+divId+' .width').html();
				var vidHeight   = $('#'+divId+' .height').html();
				var vidTitle    = $('#'+divId+' .title').html();
				var poster      = $('#'+divId+' .poster').html();
				var altContentId = (options.altContentContainer+vidAssetId);
				var vidID = ('video_'+vidAssetId);
				var videoCaption = $('#'+divId+' .mediaInfo').html();
				var pluginGoogle = (options.rootPath+options.pluginGooglePath);
				
				if(videoCaption == ""){
					$('#'+divId+' '+options.overlayWrapper).addClass('noCaption'); resizeOverlay(vidWidth, divId);  
				}else{
					var captionWidth=$('.mediaInfo').width();
					var fullWidth=parseInt(vidWidth)+parseInt(captionWidth)+parseInt(options.resizePadding);
					resizeOverlay(fullWidth, divId); 
					$('#'+divId+' '+options.overlayWrapper).find(options.mediaContainer).css({'width': parseInt(vidWidth)+'px'}); /*Centers overlay on page*/
				}
					
				var params     = {'allowfullscreen': 'true', 'allowscriptaccess': 'always', 'wmode': 'transparent'};
				var flashvars  = {'src': encodeURI(vidSrc), 'poster': encodeURI(poster), 'scalemode': 'none'};/*, 'plugin_googleanalytics': encodeURI(pluginGoogle)*/
				var attributes = {'id': vidID, 'name': vidTitle};
				if(swfobject.hasFlashPlayerVersion("9.0.0")){ //if they don't have flash 6, embedswf doesn't work, so fall back to alt content
					swfobject.embedSWF((options.rootPath+options.playerPath), altContentId, vidWidth, vidHeight, options.flashPlayerVersion, (options.rootPath+options.expressInstallPath), flashvars, params, attributes);
					/*(Player path, container to overwrite (contains alternate content), width, height, minimum flash player version, express install path, flashvars - video vars for longtail player, params for flash, attributes that will be given to the end html object)*/
				}
				close(divId, 'OV', vidID);
			});
		};
	}
	
	/*Inline Video - same functionality as inline swf basically*/
	function inlineVideo($jqObj, index){
		var divId = ("inlineVideo-"+index);
		var swfFlashWarning = 'Please <a href="http://www.adobe.com/go/getflashplayer">download the free Adobe Flash Player</a> to view dynamic content.';
		var wrapper = $('<span class="inlineVideoWrapper"><span id="'+divId+'"></span></span>');
		$jqObj.after(wrapper);
		showLoading(false, $jqObj);
		if(swfobject.hasFlashPlayerVersion("9.0.0")){
			$('#'+divId).load(callers[index][0].href + ' .vars', function(){
				$jqObj.slideUp();
				hideLoading(false, $jqObj);
				
				var vidAssetId   = $('#'+divId+' .mediaUID').html();
				var vidSrc       = $('#'+divId+' .uri').html();
				var vidWidth     = $('#'+divId+' .width').html();
				var vidHeight    = $('#'+divId+' .height').html();
				var vidTitle     = $('#'+divId+' .title').html();
				var poster       = $('#'+divId+' .poster').html();
				var altContentId = (options.altContentContainer+vidAssetId);
				var vidID        = ('video_'+vidAssetId);
				var videoCaption = $('#'+divId+' .mediaInfo').html();
				var pluginGoogle = (options.rootPath+options.pluginGooglePath);
				var params       = {'allowfullscreen': 'true', 'allowscriptaccess': 'always', 'wmode': 'transparent'};
				var flashvars    = {'src': encodeURI(vidSrc), 'poster': encodeURI(poster), 'scalemode': 'none'};/*, 'plugin_googleanalytics': encodeURI(pluginGoogle)*/
				var attributes   = {'id': vidID, 'name': vidTitle};
				
				swfobject.embedSWF((options.rootPath+options.playerPath), divId, vidWidth, vidHeight, options.flashPlayerVersion, (options.rootPathShort+options.expressInstallPath), flashvars, params, attributes);
			});
		}else{$('#'+divId).append(swfFlashWarning);}
	}
	
	function inlineAudio($jqObj, index){
		var divId = ("inlineAudio-"+index);
		var audFlashWarning = '*To listen to audio clips, please <a href="http://www.adobe.com/go/getflashplayer">download the free Adobe Flash Player</a>.'; /*Skip express install because the allotted audio space is too small for it.*/
		var wrapper = $('<span class="inlineAudioWrapper"><span id="'+divId+'"></span></span>'); /*Need two layers because swfobject2 overwrites entire object. Can't style html objects, so we need a wrap*/
		$jqObj.after(wrapper); /*Goes right after the link*/
		showLoading(false, $jqObj);
		if(swfobject.hasFlashPlayerVersion(options.flashPlayerVersion)){
			$('#'+divId).load(callers[index][0].href + ' .vars', function(){
				$jqObj.slideUp(); /*Hide the original link*/
				hideLoading(false, $jqObj); /*Loading class is added to the original link so that users know something is happening. Styles can have bg image of a small loading icon on the left that replaces audio icon*/
				var audPath   = ($('#'+divId+' .uri').html());
				var audWidth     = $('#'+divId+' .width').html();
				var audTitle     = $('#'+divId+' .title').html();
				var audAssetId   = $('#'+divId+' .mediaUID').html();
				var autoStartVar = 'false';
				if(('.'+callers[index][1]) == options.IAInit){autoStartVar='true'};
				var poster       = $('#'+divId+' .poster').html();
				var pluginGoogle = (options.rootPath+options.pluginGooglePath);
				var params       = {'allowfullscreen': 'true', 'allowscriptaccess': 'always', 'wmode': 'transparent'};
				var flashvars    = {'src': encodeURI(audPath), 'poster': encodeURI(poster), 'scalemode': 'none'};/*, 'plugin_googleanalytics': encodeURI(pluginGoogle)*/
				var attributes   = {'id': vidID, 'name': vidTitle};

				swfobject.embedSWF((options.rootPath+options.playerPath), divId, audWidth, '30', options.flashPlayerVersion, (options.rootPath+options.expressInstallPath), flashvars, params, attributes);
				/*(Player path, container to overwrite (contains alternate content), width, height, minimum flash player version, express install path, flashvars - video vars for longtail player, params for flash, attributes that will be given to the end html object)*/
			});
		}else{$('#'+divId).append(audFlashWarning);} /*Let them know that they don't have flash and that they need to get with it*/
	}	
	
	/*Quicktime developed for Lamont. May need more tuning since it was made for a small 3D image and not video. Might look into Longtail's QT capability*/
	function overlayQT(loaded, $jqObj, index){
		var divId = ("overlayQT-"+index);
		$("#overlay").fadeIn('fast');
		if(loaded == true){
			$('#'+divId+' '+options.overlayWrapper).fadeIn('fast');
		}else{
			var wrapper = $('<div id="'+divId+'">&nbsp;</div>');
			$('#addMedia').append(wrapper);
			showLoading(true, $jqObj);
			$('#'+divId).load(callers[index][0].href + ' '+options.overlayWrapper, function(){ /*Ajax retrieves QT doc*/
				var src=$('#'+divId+' embed').attr('src');
				if(options.rootPathShort == options.rootPath){
					newSrc=src.replace(/\/WebSite\//gi, "/"); /*In case Collage publishes the path wrong, remove "/WebSite/" on deployed versions*/
				}else{newSrc=src};
				if(newSrc!=src){$('#'+divId+' embed').attr('src',(newSrc));}
				hideLoading(true, $jqObj);
				$('#'+divId+' '+options.overlayWrapper).fadeIn('fast');
				close(divId, 'OQT', index);
			});
		};
	}
	
	function overlaySWF(loaded, $jqObj, index){
		var divId = ("overlaySWF-"+index);
		$("#overlay").fadeIn('fast');
		if(loaded == true){
			$('#'+divId+' '+options.overlayWrapper).fadeIn('fast');
		}else{
			var wrapper = $('<div id="'+divId+'">&nbsp;</div>');
			$('#addMedia').append(wrapper);
			showLoading(true, $jqObj);
			$('#'+divId).load(callers[index][0].href + ' '+options.overlayWrapper, function(){  /*Ajax retrieves QT doc*/
				
				var swfPathTmp = ($('#'+divId+' .path').html());
				if(options.rootPathShort == options.rootPath){
					cleanSWFPath=swfPathTmp.replace(/\/WebSite\//gi, "/"); /*In case Collage publishes the path wrong, remove "/WebSite/" on deployed versions*/
				}else{cleanSWFPath=swfPathTmp};
				
				var swfWidth = $('#'+divId+' .width').html();
				var swfHeight = $('#'+divId+' .height').html();
				var swfTitle = $('#'+divId+' .title').html();
				var swfCaption = $('#'+divId+' .caption').html();
				if(swfTitle == ""){$('#'+divId+' '+options.overlayWrapper).addClass('plain'); }
				if(swfCaption == ""){$('#'+divId+' '+options.overlayWrapper).addClass('noCaption'); resizeOverlay(swfWidth, divId); }
				var swfAssetId = $('#'+divId+' .assetid').html();
				var swfId=(options.altContentContainer+swfAssetId);
				var attributes={id: "swf_"+swfAssetId};
				
				hideLoading(true, $jqObj);
				swfobject.embedSWF(cleanSWFPath, swfId, swfWidth, swfHeight, options.flashPlayerVersion, (options.rootPathShort+options.expressInstallPath), false, false, attributes, reveal);
				/*(swf path, html attribute to overwrite, width, height, flash version, express install path, flashvars, params, attributes that will be given to the end html object, callback function to ensure flash has loaded)*/
				function reveal(){$('#'+divId+' '+options.overlayWrapper).fadeIn('fast');}
				close(divId, 'OSWF', index);
			});
		};
	}
	
	/*Inline SWF - same functionality as inline audio basically*/
	function inlineSWF($jqObj, index){
		var divId = ("inlineAudio-"+index);
		var swfFlashWarning = 'Please <a href="http://www.adobe.com/go/getflashplayer">download the free Adobe Flash Player</a> to view dynamic content.';
		var wrapper = $('<span class="inlineAudioWrapper"><span id="'+divId+'"></span></span>');
		$jqObj.after(wrapper);
		showLoading(false, $jqObj);
		if(swfobject.hasFlashPlayerVersion("9.0.0")){
			$('#'+divId).load(callers[index][0].href + ' .vars', function(){
				$jqObj.slideUp();
				hideLoading(false, $jqObj);
				var swfPathTmp = ($('#'+divId+' .path').html());
				if(options.rootPathShort == options.rootPath){
					cleanSWFPath=swfPathTmp.replace(/\/WebSite\//gi, "/");
				}else{cleanSWFPath=swfPathTmp};
				
				var swfWidth = $('#'+divId+' .width').html();
				var swfHeight = $('#'+divId+' .height').html();
				var swfTitle = $('#'+divId+' .title').html();
				
				swfobject.embedSWF(cleanSWFPath, divId, swfWidth, swfHeight, options.flashPlayerVersion, (options.rootPathShort+options.expressInstallPath));
			});
		}else{$('#'+divId).append(swfFlashWarning);}
	}
	
	/*Overlay IMG - simple image overlay*/
	function overlayIMG(loaded, $jqObj, index){
		var divId = ("overlayIMG-"+index);
		$("#overlay").fadeIn('fast');
		if(loaded == true){
			$('#'+divId+' '+options.overlayWrapper).fadeIn('fast');
		}else{
			var wrapper = $('<div id="'+divId+'">&nbsp;</div>');
			$('#addMedia').append(wrapper);
			showLoading(true, $jqObj);
			var oImgWidth = $jqObj.attr("class").replace(/overlayIMG /gi, "");
			var oImg = $('<div id="overlay-wrapper_'+index+'" class="overlay-wrapper imageOverlay noCaption"><h1 class="overlayTitle imgOverlayTitle"><a class="close" title="Close" href="#">&nbsp;</a></h1><div class="overlayContent"><div class="mediaContainer"><img src="'+callers[index][0].href+'" border="0" /></div><div class="mediaInfo">&nbsp;</div><div class="clear">&nbsp;</div></div><div class="clear">&nbsp;</div><span class="topLeft">&nbsp;</span><span class="top">&nbsp;</span><span class="topRight">&nbsp;</span><span class="bottomLeft">&nbsp;</span><span class="bottom">&nbsp;</span><span class="bottomRight">&nbsp;</span></div>');
			$('#'+divId).html(oImg);
			hideLoading(true, $jqObj);
			resizeOverlay(oImgWidth, divId);
			$('#'+divId+' '+options.overlayWrapper).fadeIn('fast');
			close(divId, 'OIMG', index);
		};
	}
	
	/*GLOBALS*/
	function showLoading(overlay, $jqObj){
		if(overlay==true){
		$('#loading').fadeIn('fast');
		}else{ $jqObj.addClass('loading'); } /*Adds loading class to inline links*/
	}
	function hideLoading(overlay, $jqObj){
		if(overlay==true){
		$('#loading').fadeOut('fast');
		}else{ $jqObj.removeClass('loading');
		}
	}
	function resizeOverlay(width, id){ /*For swf overlays*/
		intWidth=parseInt(width)+parseInt(options.resizePadding); /*Receives width, adds padding*/
		$('#'+id+' '+options.overlayWrapper).css({'width': intWidth, 'margin-left': -(intWidth/2)}); /*Centers overlay on page*/
	}
	function close (id, type, playerID){
		$('#overlay, '+"#"+id+" "+options.close).click(function(){
			if(type=== "OV"){ /*Checks to see if it's a video and that flash is supported so that it can receive events*/
				/*if(swfobject.hasFlashPlayerVersion(options.flashPlayerVersion)){
					player=document.getElementById(playerID);
					var state = player.getState();
					if(state == "playing")
						player.pause();
				}*/
			}
			$('#'+id+' '+options.overlayWrapper).fadeOut('fast');
			$('#'+id+'.currentSlide').slideUp('slow');
			$('#overlay').fadeOut('fast');
			type="";
			return false;
		});
	}
			
	return false;
};
})(jQuery);
