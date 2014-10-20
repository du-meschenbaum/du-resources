$(document).ready(function(){
	  
	  $('#mapSideColToggle').hover(function(){
				$(this).addClass('on');
				$(this).removeClass('off');}, 
			function(){
				$(this).removeClass('on');
				$(this).addClass('off');
				}
			);
	  
	  $('#mapSideColToggle').toggle(function(e){
					$('#mapSideCol').animate({width:'hide'},'fast');
					$('#mapSideColToggle').animate({left:0}, 'fast');
					return false;
				}, function(){
					$('#mapSideCol').animate({width:'show'},'fast');
					$('#mapSideColToggle').animate({left:244}, 'fast');
					return false;
					}
			);
	  $('ul.tabsFlexible').click(function(){return false});
	});
