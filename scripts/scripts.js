try{
	$(document).ready(function(){	
		/* ajax loader */
		$("#ajaxLoader").bind("ajaxSend", function(){showLoader();}).bind("ajaxComplete", function(){showLoader();});
		
		$('.expandListItem h5').click(function () {
			$(this).toggleClass('expandSelected');
			$(this).next('div.expandListItemContent').slideToggle();
		});
		
		$('#tabsPanel #tabNav').find('a').bind('click', function(event){
			event.preventDefault(); //stop the link from going to href
			selectNav(this);
		});
	
		$('#tabsPanel .tabContent').hide();
		$('#tabsPanel .tabContent:first').show();
		$('.facultyStaffBookmark').jFav();
		
		//Active Classing (Matches Full Path to HREF)
		var path = location.pathname;
		if (path) {
			if ($('#nav li a[href$="' + path + '"]').length){
				$('#nav li a[href$="' + path + '"]').parent().attr('id','nav_bob');
			}else if( (path.indexOf('.html') == -1) && ($('#nav li a[href$="' + path + 'index.html"]').length) ){
				$('#nav li a[href$="' + path + 'index.html"]').parent().attr('id','nav_bob');
			}else if($('#nav li a[href$="' + path.substring(0,path.lastIndexOf('/')+1) + 'index.html"]').length){
				$('#nav li a[href$="' + path.substring(0,path.lastIndexOf('/')+1) + 'index.html"]').parent().attr('id','nav_bob');
			}
		}
		
		//Add analytics to downloads
		//05/30/2013: Removed by Matt for L3 analytics script
		/*$('a[href$=".pdf"]').click(function(){_gaq.push(['_trackEvent', 'Document Access', 'pdf', encodeURI($(this).attr("title"))]);});
		$('a[href$=".doc"]').click(function(){_gaq.push(['_trackEvent', 'Document Access', 'doc', encodeURI($(this).attr("title"))]);});
		$('a[href$=".xls"]').click(function(){_gaq.push(['_trackEvent', 'Document Access', 'xls', encodeURI($(this).attr("title"))]);});
		$('a[href^="mailto:"]').click(function(){_gaq.push(['_trackEvent', 'Email', 'mailto', encodeURI($(this).attr("title"))]);});
		*/
		
		
		/* Fancybox 2.0.6 */
    
		$("a.lightbox").fancybox({
			'openEffect'  : 'elastic',
			'closeEffect' : 'fade',
			'openSpeed'   : '500',
			'closeSpeed'   : '500',
			helpers : {
				title : { type : 'inside' }
			 }
		});
		  
		$(".vidclass").fancybox({
			'openEffect'  : 'elastic',
			'closeEffect' : 'fade',
			'openSpeed'   : '500',
			'closeSpeed'   : '500',
			helpers : {
			 title : { type : 'inside' }
			 }
		});
		
		$(".various").fancybox({
			maxWidth    : 800,
			maxHeight   : 600,
			fitToView   : false,
			autoSize    : false,
			closeClick  : false,
			openEffect  : 'none',
			closeEffect : 'none',
			helpers : {
			 title : { type : 'inside' }
			 }
    	});
	if(window.location.href.indexOf('du.edu')>0){bannersNavSetActive();} // apply "active" class to top nav if appropriate		
	});
} catch (e) {
	console.log(e.message);    //this executes if jQuery isn't loaded
}

function getContributionImgSrc(obj){
	if(obj.length > 0){
		tmpObj=obj.split('src="');
		if(tmpObj.length > 0){
			tmpObj1=tmpObj[1].split('"');
			return tmpObj1[0];
		}else{return '';}
	}else{return '';}
}

function selectNav(e) {
  $(e).parents('ul:first').find('a').removeClass('selected').end().end().addClass('selected');
	$('#tabsPanel .tabContent').hide();
	var linkHashId = e.hash.substr(1);
	$('#tabsPanel').removeClass().addClass(linkHashId);
	$('#' + linkHashId).show();
}	

function getUrlVars(){
	var vars = [], hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	for(var i = 0; i < hashes.length; i++){
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;
}

//05/30/2013: Removed by Matt for L3 analytics script
/*function recordOutboundLink(link, category, action, opt_label) {
	if(!opt_label) var opt_label='';
	_gaq.push(['_trackEvent', category, action, opt_label]);
	setTimeout('document.location = "' + link.href + '"', 100);
}*/

function showLoader() { 
	var scrolledX, scrolledY; 
	if( self.pageYOffset ) { 
		scrolledX = self.pageXOffset; 
		scrolledY = self.pageYOffset; 
	} else if( document.documentElement && document.documentElement.scrollTop ) { 
		scrolledX = document.documentElement.scrollLeft; 
		scrolledY = document.documentElement.scrollTop; 
	} else if( document.body ) { 
		scrolledX = document.body.scrollLeft; 
		scrolledY = document.body.scrollTop; 
	}
	
	var centerX, centerY; 
	if( self.innerHeight ) { 
		centerX = self.innerWidth; 
		centerY = self.innerHeight; 
	} else if( document.documentElement && document.documentElement.clientHeight ) { 
		centerX = document.documentElement.clientWidth; 
		centerY = document.documentElement.clientHeight; 
	} else if( document.body ) { 
		centerX = document.body.clientWidth; 
		centerY = document.body.clientHeight; 
	}
	
	$("#ajaxLoader").css({
		position: 'absolute',
		"z-index": 5000,
		width: function(){return $(this).children("img").width();},
		height: function(){return $(this).children("img").height();},
		top: function(){
			var topOffset = Math.round(scrolledY + (centerY - $(this).children("img").height()) / 2);
			return topOffset + 'px';
		},
		left: function(){
			var leftOffset = Math.round(scrolledX + (centerX - $(this).children("img").width()) / 2);
			return leftOffset + 'px';
		},
		"margin-top": function(){
			var topMarg = Math.round((-1 * $(this).children("img").height()) / 2);
			return topMarg + 'px';
		},
		"margin-left": function(){
			var leftMarg = Math.round((-1 * $(this).children("img").width()) / 2);
			return leftMarg + 'px';
		}
	}).toggle();
}

function bannersNavSetActive() {
	var link_nav_difference = 9999;
	var nav_item_match = false;
	var request_url = window.location.href;
	var current_overlap = '';
	var active_flag = true;
	$(".bannersNav ol li a").each(function(){
		if($(this).hasClass('active')){
			active_flag = false;	
		}
		var pathname = urlNormalize(window.location.href); // standardize current href for comparison
		var href_base = urlNormalize($(this).attr('href')); // standardize item href for comparison  		
    		if (pathname.indexOf(href_base) == 0)
        		{
            		// calculate difference between navigation path and file path 
           		current_overlap = pathname.replace(href_base,'').length;
			if (current_overlap < link_nav_difference) { // if link is shortest 
               		link_nav_difference = current_overlap;
                		nav_item_match = $(this);
            		}
        	}
	});
	if (nav_item_match !== false && active_flag !== false) {
		$(nav_item_match).addClass('active'); // apply "active" class to closest match
	}	
}

function urlNormalize(original_url) {
	var normalized_url;
	var url_segments;
	var regex = new RegExp(',','g');
	url_segments = original_url.split("/");
	if(url_segments[0].indexOf('http')!=-1) { // eliminate http/https references
		url_segments.splice(0,3);
		url_segments.unshift("/");
	}
	if(url_segments[url_segments.length-1].indexOf('html')!=-1) { //eliminate filename ref
		url_segments.pop();
	}
	normalized_url = url_segments.toString();
	normalized_url = (normalized_url.replace(regex,"/")+"/").replace("//","/"); // add "/", replace "//" if needed
	return normalized_url;
}
