$(document).ready(function(){
	
	/* Mega DropDown Navigation */	
	$('#menu').removeClass('noJS');//remove the class so JS click replaces CSS hover
	
	$('#menu > li:not(.contact) > a').click(function(){
		$activeParent=$(this).parent('li');
		$('#menu > li.active').not($activeParent).removeClass('active'); //hides others in case 1 second mouseoff hasn't expired
		megamenu($activeParent);
		
		return false;
	});	
		
	function megamenu($obj){
		var hide;
		$obj.addClass('active'); //active class sets display to block
		
		function hideMenus(){
			$obj.removeClass('active'); //hides menu
		}
		
		$obj.hover(function(){
			if(typeof hide!=""){ //checks for existence
				clearTimeout(hide); //user has hovered back over the li, so the timeout is reset
			}
		}, function(){
			hide=setTimeout(hideMenus, 1000); //countdown to hiding list item
		});
	}
	
	/* End DropDown */
	$.fn.setWebCamTimeStamp = function(){
		var myTime = new Date();
		return $(this).html(myTime.toDateString()+' '+myTime.toLocaleTimeString())
	}
	$("#capInnerWebCam").setWebCamTimeStamp();
	setInterval(function(){
		$("#imgWebCam").attr("src", "http://webcam.comm.du.edu:8888/axis-cgi/jpg/image.cgi?"+Math.random());
		$("#capInnerWebCam").setWebCamTimeStamp();
	}, 10000);
	
 
});

/*Events*/
google.load("feeds", "1");
function getEventFeed() {
	var startdate = new Date;
	var feed = new google.feeds.Feed("http://ducal.du.edu/webevent/scripts/webevent.plx?cmd=rss_export;calID=168;days=60;d="+startdate.getDate()+";m="+Math.abs(startdate.getMonth()+1)+";y="+startdate.getFullYear());
	var myDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	feed.setNumEntries(10);
	feed.load(function(result) {
		if (!result.error) {
			var container = document.getElementById("studentCalendar");
			var curdate = null;
			var grouping = new Array();
			var groupingIndexes = new Array();
			for (var i = 0; i < result.feed.entries.length; i++) {
				var entry = result.feed.entries[i];
				var daDate = entry.publishedDate;
				var aPubDate = daDate.split(" ");
				var itemDate = aPubDate[2]+' '+aPubDate[1]+' '+aPubDate[3];
				var tmp;

				if(curdate == null || curdate != itemDate){
					 curdate = itemDate;
					 grouping[curdate] = new Array();
					 tmp = groupingIndexes.push(curdate);
				}
				tmp = grouping[curdate].push(entry.link+'|-|'+entry.title);
			}

			if(groupingIndexes.length > 0){
				for (var j=0;j<groupingIndexes.length;j++){
					var tmpDate = new Date(groupingIndexes[j]);
					listItem = document.createElement('li')
					listItemTxt = document.createTextNode(myDays[tmpDate.getDay()]+' '+tmpDate.getDate());
					listItem.appendChild(listItemTxt);
					listItemChild = document.createElement('ul');
					listItem.appendChild(listItemChild);
					for(var g=0;g<grouping[groupingIndexes[j]].length;g++){
						var tmpLink = grouping[groupingIndexes[j]][g].split('|-|');
						listItemChildItem = document.createElement('li')
						listItemChildLink = document.createElement('a');
						listItemChildLink.href = tmpLink[0];
						listItemChildLink.innerHTML = tmpLink[1];
						listItemChildItem.appendChild(listItemChildLink);
						listItemChild.appendChild(listItemChildItem);
					}
					listItem.appendChild(listItemChild);
					container.appendChild(listItem);
				}
			}else{
				listItem = document.createElement('li');
				listItem.innerHTML = "No Upcoming Events";
				container.appendChild(listItem);
			}
			
		}
	});
}
google.setOnLoadCallback(getEventFeed);
