function sliderControlPosition(){
var posControl = $('#gallery li:first').position();

	$('.slideControl').css({
		'position': 'absolute',
		'left': posControl.left + 0,
		'top': posControl.top
	});
	$('.slideControl2').css({
		'position': 'absolute',
		'left': posControl.left + 0,
		'top': posControl.top + 300
	});
}

var slideCounter = 1;
var slideTotal=0;
var playing=true;
var slideDuration=7000;

function gallery(slideNum) {
	
	//if no IMGs have the show class, grab the first image
	if(!$('#gallery li').hasClass('show')){
		var current = $('#gallery li:first');
	}else{
		var current = $('#gallery li.show');
	}

	//Get next image, if it reached the end of the slideshow, rotate it back to the first image
	if( typeof(slideNum)==="undefined" ){
		if(slideCounter>=slideTotal){
			var next=$('#gallery li:first');
			slideCounter=1;
		}else{
			var next=current.next();
			slideCounter++;
		}
	}else{
		slideCounter=slideNum;
		var next=$('#slide'+slideCounter);
	}
	
	//Set the fade in effect for the next image, show class has higher z-index
	next.css({opacity: 0.0})
		.addClass('show')
		.animate({opacity: 1.0}, 1000, function(){													
			$('.slideControl ul li').removeClass('slideSelected');
			$('.slideMarker'+slideCounter).addClass('slideSelected');
			return false;
		});

	//Hide the current image
	current.animate({opacity: 0.0}, 1000, function(){$(this).removeClass('show')});
}

function slideShow() {
	//Set the opacity of all images to 0
	$('#gallery li').css({opacity: 0.0});
	
	//Get the first image and display it (set it to full opacity)
	$('#gallery li:first').css({opacity: 1.0});
	
	var run = setInterval('gallery()',slideDuration);
	
	//stop button
	$('#btn-pause').click(function () {
		clearInterval(run);
		$(this).hide();
		$('#btn-play').show();
		playing=false;
		return false;
	});
	
	//play button
	$('#btn-play').click(function () {
		gallery();
		run = setInterval('gallery()',slideDuration);
		$(this).hide();
		$('#btn-pause').show();
		playing=true;
		return false;
	});
	
	$('#pageBanners .slideControl li').not('#playPause').click(function(){
		id=$(this).attr('id');
		
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

$(document).ready(function(){	
	$('.slideControl').show();
	
	sliderControlPosition();
	setTimeout(sliderControlPosition,2000);
			
	$(window).resize(function() {
		sliderControlPosition();
	});	
	
	$('.slideControl li').hover(function(){
		$(this).addClass('hover');
		}, function(){
			$(this).removeClass('hover');
		});
	
	$('#gallery li').each(function(i){
		slideTotal++;
		slideNum= 'slide'+(i+1);
		$(this).attr('id', slideNum);
	});
	
	$('#pageBanners .slideControl li').not('#playPause').each(function(i){
		slideNum= 'control'+(i+1);
		$(this).attr('id', slideNum);
	});

	//Execute the slideShow
	slideShow();
	
	$('#btn-play').hide();
	
	$('#btn-pause').css('opacity',0.45);
	$('#btn-play').css('opacity',0.45);
	});
