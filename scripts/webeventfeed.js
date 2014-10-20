$("#feed_load").show();
var eventFeed = '';

eventFeed = "/_resources/api/webeventfeed.php?maxDays=" + maxDays + "&calID=" + calID;
//eventFeed = "http://ducal.du.edu/webevent/scripts/webevent.plx?cmd=rss_export;calID=272"
$(document).ready(function(){

$.support.cors = true;
	$.ajax({
	type: "GET",
	url: eventFeed,
	dataType: ($.browser.msie) ? "text" : "xml",
	crossDomain: true,
	contentType: "text/xml; charset=\"utf-8\"",
	success: function(xml) {
		var newXML = parseXml(xml);
		displayCourses(newXML);
	},
	error: function(xhr,ajaxOptions,thrownError) {
		alert(xhr.statusText + '<br/>' +xhr.status+'<br/>'+thrownError+'<br/>'+xhr.responseText);
	}
	});
});

function parseXml(xml) {
	if(jQuery.browser.msie) {
	
		var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.loadXML(xml);
		xml = xmlDoc;
	}
	return xml;

}

function displayCourses(xml){
	$("#feed_load").hide();
	$("div#feed_display").empty();
	var counter = 0;

	$(xml).find("item").each(function() {
		counter++;
		$("div#feed_display").append('<p><strong>' + $(this).find("title").text() + '</strong></p>');
	});
	if (counter == 0){
		$("div#feed_display").append('<p>There are no events listed on this calendar.</p>');
	}

};

