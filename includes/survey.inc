<script src="/_resources/scripts/plugins/jquery.cookie.js"><!--//--></script>

<script type="text/javascript">
 
function setCookie()
{
$.cookie('du_survey_cookie', 'du_survey', { expires: 7, path: '/', domain: 'du.edu' });
}
 
</script>

<script type="text/javascript">

$(document).ready(function(){
    $("#survey").hide();

    var autoTimer = null;
	
	if ($.cookie('du_survey_cookie')) {
	
	} else {

    autoTimer = setTimeout(function(){
        $("#survey").slideDown("slow");
    },3000);
    
	}
});

 
// When the DOM is ready, initialize the scripts.
jQuery(function( $ ){
 
// Get a reference to the container.
var container = $( "#survey" );
 
 
// Bind the link to toggle the slide.
$( "a.collapse" ).click(
	function( event ){
	// Prevent the default event.
	event.preventDefault();
 
	// Toggle the slide based on its current
	// visibility.
	if (container.is( ":visible" )){
 
	// Hide - slide up.
	container.slideUp( 1000 );
	 
	} else {
 
	// Show - slide down.
	container.slideDown( 1000 );
 
}
}
);
 
});
 
</script>

<link rel="stylesheet" type="text/css" href="/_resources/css/shadowbox.css">
<script type="text/javascript" src="/_resources/scripts/plugins/shadowbox.js"></script>
<script type="text/javascript">
Shadowbox.init();
</script>


<div id="survey">
Current student @ DU? Complete this quick survey for DU Debate 2012.
<br />
<br />
<a class="collapse button red top" style="bottom: 10px;" title="Take our Survey" href="https://docs.google.com/a/sites.pilot.du.edu/spreadsheet/viewform?hl=en_US&formkey=dE9Wam1vZnMtTmdQcFpRSV9JbktFR2c6MQ#gid=0" rel="shadowbox; width=800;" onClick="setCookie()";>Take the survey!</a>
<br />
<br />
<a id="nosurvey" class="collapse" onClick="setCookie()"; href="">No thanks</a>
</div>
