function ouPreviewNav(ou_path) {
	var link_nav_difference = 9999;
	var nav_item_match = false;
	var request_url = ou_path;

	var current_overlap = '';
	var active_flag = true;
	$(".bannersNav ol li a").each(function(){
		if($(this).hasClass('active')){
			active_flag = false;	
		}
		var pathname = request_url; // standardize current href for comparison
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