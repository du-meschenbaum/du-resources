(function($) {
	$.fn.navigationize = function(assetid) {
		// Gets node level
		function getlevel($element) {
			if($element.length != 0)
				return $element.attr('class').charAt(5);
			else
				return 1;
		}
		// Hides next nodes of higher level than active level
		function nukeNext($obj) {
			$obj.nextAll().each( function(){
				if ($(this).attr('class') > $obj.attr('class')) {
					$(this).hide();
				}
			});
		}
		// Hide previous nodes of higher level than active level
		function nukePrev($obj) {
			$obj.prevAll().each( function(){
				if ($(this).attr('class') > $obj.attr('class')) {
					$(this).hide();
				}
			});
		}
		
		if($(this).length == 0){
			$('#nav').show();
			$("#nav li").hide();
      $("#nav li.level1").show();
		}else{
			var $active = $(this),
				activelvl = getlevel($active),
				activeClass = $active.attr('class'),
				maxlvl = 'level1',
				lvl = 1;
				
			// set maxlvl (levelx) and lvl (x)
			$('#nav li').each( function() {
				if ($(this).attr('class') > maxlvl) {
					maxlvl = $(this).attr('class');
					lvl++;
				}
			});
			
			// Set active node with class
			$active.addClass('active');
			
			// Loop through the whole nav starting at level1 andgoing to max level
			for(i=0; i<=lvl; i++){
				$('li.level'+ i).each( function(){
					if ($(this).nextAll().hasClass('active')) {
						nukePrev($(this));
					}
					if ($(this).prevAll().hasClass('active')) {
						nukeNext($(this));
					}
					if ($(this).hasClass('active')) {
						nukePrev($(this));
					}
				});
			}
			for(i=activelvl; i>1; i--){
				currentLvl=('li.level'+(i-1)+':first');
				$active.prevAll(currentLvl).addClass('activeParent');
			}
			$('#nav').show();
		}
	}
})(jQuery);
