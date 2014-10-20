$("#courseLoading").show();
var courseURL = '';

if (typeof courseType === 'undefined'){
courseURL = "/_resources/api/courselisting.php/" + courseCode;
} else {
courseURL = "/_resources/api/courselisting.php/" + courseCode + "/" + courseType;
}

$(document).ready(function(){
$.support.cors = true;
	$.ajax({
	type: "GET",
	url: courseURL,
	dataType: ($.browser.msie) ? "text" : "xml",
	crossDomain: true,
	contentType: "text/xml; charset=\"utf-8\"",
	success: function(xml) {
		var newXML = parseXml(xml);
		displayCourses(newXML);
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
	$("#courseLoading").hide();
	$("div#coursefeed").empty();
	var counter = 0;

	$(xml).find("course").each(function() {
		counter++;
		$("div#coursefeed").append('<p><strong>' + $(this).find("WSVCATG_COURSE_ID").text()  +  ' ' + $(this).find("WSVCATG_SHORT_TITLE").text()  + ' (' + $(this).find("WSVCATG_CREDITS").text()  + ' credits)</strong><br />' + $(this).find("WSVCATG_LONG_DESC").text() + '</p>');
	});
	if (counter = 0){
		$("div#coursefeed").append('<p>There are no courses for the selected subject. Course descriptions can be found on <a href="http://myweb.du.edu/mdb/bwlkffcs.p_disp_dyn_ctlg">myweb.du.edu</a>.</p>');
	}

};

