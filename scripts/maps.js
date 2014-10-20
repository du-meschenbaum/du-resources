//Maps javascript page
//global vars
var mapTab = 0;
var mapType = new Array('buildings.xml','parking.xml');
var rootpath = 'http://www.du.edu';
//Nav Vars
var mapTabs = new Array('mapTab-buildings','mapTab-transportation');
//Google Map Load
google.load("maps", "2.x");
google.setOnLoadCallback(init_map);
//general
function getElement(id){if(document.getElementById){getElement = function(id){ return document.getElementById(id); }}else if(document.all){getElement = function(id){ return document.all[id]; };}else if(document.layers){getElement = function(id){ return document.layers[id]; };}else{getElement = function() { return null; }}return getElement(id);}
//Array.indexOf() workaround for IE6
if (!Array.prototype.indexOf){
  Array.prototype.indexOf = function(elt /*, from*/){
    var len = this.length;
    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };}
	

var map = new Object();
var mt;
var gmarkers = [];
var gPolyLines = [];

//link to parse
function PageQuery(q) {
	if(q.length > 1)
		this.q = q.substring(1, q.length);
	else
		this.q = null;
	
	this.keyValuePairs = new Array();
	
	if(q) {
		for(var i=0; i < this.q.split("&").length; i++) {
			this.keyValuePairs[i] = this.q.split("&")[i];
		}
	}
	this.getKeyValuePairs = function() { return this.keyValuePairs; }
	this.getValue = function(s) {
		for(var j=0; j < this.keyValuePairs.length; j++) {
			if(this.keyValuePairs[j].split("=")[0] == s)
				return this.keyValuePairs[j].split("=")[1];
		}
		return false;
	}
	this.getParameters = function() {
		var a = new Array(this.getLength());
		for(var j=0; j < this.keyValuePairs.length; j++) {
			a[j] = this.keyValuePairs[j].split("=")[0];
		}
		return a;
	}
	this.getLength = function() { return this.keyValuePairs.length; }
}

function queryString(key){
	var page = new PageQuery(window.location.search);
	return unescape(page.getValue(key));
}

//init function
function init_map(){
	if(queryString('mpType')!='false'){
		mapTab=Number(queryString('mpType'));
		for(var i=0;i<mapTabs.length;i++){
			if((myNav = getElement(mapTabs[i])) != null){
				if(i != mapTab){
					myNav.className = 'mapTabOff';
				}else{
					myNav.className = 'mapTabOn';
				}
			}
		}//end for
	}
	if(queryString('mrkID')!='false')
		tmpMrk=Number(queryString('mrkID'));
	else
		tmpMrk=null;
		
	//load map
	returnDuMap(mapTab);
	// Read the data
	loadMapData(mapTab,tmpMrk);	
}

//Change maps 
function switchMaps(mapSelected,tabID){
	for(i=0;i<mapTabs.length;i++){
		if((myNav = getElement(mapTabs[i])) != null){
			if(mapTabs[i] != tabID){
				myNav.className = 'mapTabOff';
			}else{
				myNav.className = 'mapTabOn';
			}
		}
	}//end for
	gmarkers = [];
	gPolyLines = [];
	mapTab=mapSelected;
	//Unload map
	google.maps.Unload();
	//load map
	returnDuMap(mapSelected);
	// Read the data
	loadMapData(mapSelected,null);
}

//Map decision tree
function returnDuMap(intType){
	switch(intType){
		case 0://Buildings
			map_Buildings_main();
			break;
		case 1://Transportation
			map_Transportation_main();
			break;
		default://Default to Buildings
			map_Buildings_main();
			break;
	}//end switch
}

//Map Data loading function
function loadMapData(intMapTab,showPoint){
	var getURL = '/utilities/maps/'+'/'+mapType[intMapTab]+"?ienocache="+new Date().getMilliseconds();
	var request = google.maps.XmlHttp.create();
	request.open("GET", getURL, true);

	request.onreadystatechange = function() {
		if (request.readyState == 4) {

			var xmlDoc = request.responseXML;
			//Sidebar Clear/Setup
			var tgt1 = getElement('mapSubMenuItems');
			var tgt2 = getElement('mapSideCol');
			var tgtDown = getElement('mapSubMenuDocWrapper');
			//remove any existing objects
			while(tgt1.firstChild){tgt1.removeChild(tgt1.firstChild);}
			while(tgt2.firstChild){tgt2.removeChild(tgt2.firstChild);}
			while(tgtDown.firstChild){tgtDown.removeChild(tgtDown.firstChild);}
			
			//build side bar and load map points by tab
			switch(intMapTab){
				
				//buildings tab
				case 0:
					map_Buildings_display(xmlDoc,tgt1,tgt2,tgtDown,showPoint);
					break;//end case 0
					
				//Parking Tab
				case 1:
					map_Transportation_display(xmlDoc,tgt1,tgt2,tgtDown,showPoint);
					break;//end case 1
					
			}//end switch
		}//end if [readyState]
	}//end onreadystatechange
	request.send(null);
}

//Different Map Builds

//****************************************** Buildings *************************************************//
function map_Buildings_main(){
	map = new google.maps.Map2(getElement("mapContainer"));
	mt = map.getMapTypes();
	// Overwrite the getMinimumResolution() and getMaximumResolution() methods
	for (var b=0; b<mt.length; b++) {
		mt[b].getMinimumResolution = function() {return 4;}
		mt[b].getMaximumResolution = function() {return 17;}
	}
	map.setCenter(new google.maps.LatLng(39.6794479726438,-104.96217727661133), 16);//11);
	map.setMapType(G_NORMAL_MAP);
	map.addControl(new google.maps.LargeMapControl3D(), new google.maps.ControlPosition(G_ANCHOR_TOP_RIGHT, new google.maps.Size(4,6)));
	map.addControl(new ExtMapTypeControl({showTraffic: true, showTrafficKey: true}));
}

function map_Buildings_display(xmlDoc,tgt1,tgt2,tgtDown,shwPnt){
	var testCat=[];
	var arrayList=[];
	var tmpArrayList;
	
	//Add File Download Link
	var tmpLnk = document.createElement('a');
	tmpLnk.href = 'http://www.du.edu/media/documents/maps/campusMapPrintable.pdf';
	tmpLnk.innerHTML = 'Printable Campus Map (pdf)';
	tmpLnk.target = '_blank';
	tgtDown.appendChild(tmpLnk);
		
	//build top check boxes
	var ulInfo = document.createElement('ul');
	ulInfo.id = 'mapSubMenuUL';
	
	//Clear All Button
	var liInfo = document.createElement('li');
	liInfo.id = 'clearButton';
	liInfo.className = 'clrButton';
	liInfo.onclick = new Function("evt", "mapHideAll()");
	//attach button to column
	ulInfo.appendChild(liInfo);
	
	//Green spaces check box
	var chck1 = document.createElement('input')
	chck1.type = 'checkbox';
	chck1.id = 'greenbox';
	chck1.onclick = new Function("evt", "boxclick(this,'green')");
	//create Green spaces label
	var lbl1 = document.createElement('label');
	lbl1.setAttribute('for', 'greenbox');
	lbl1.innerHTML = 'Green Spaces';
	//Build list item and attach input and label
	var liInfo1 = document.createElement('li');
	liInfo1.appendChild(chck1);
	liInfo1.appendChild(lbl1);
	ulInfo.appendChild(liInfo1);
	
	//Emergency Phones check box
	var chck2 = document.createElement('input')
	chck2.type = 'checkbox';
	chck2.id = 'ephonebox';
	chck2.onclick = new Function("evt", "boxclick(this,'ephone')");
	//create Emergency Phones label
	var lbl2 = document.createElement('label');
	lbl2.setAttribute('for', 'ephonebox');
	lbl2.innerHTML = 'Emergency Phones';
	//Build list item and attach input and label
	var liInfo2 = document.createElement('li');
	liInfo2.appendChild(chck2);
	liInfo2.appendChild(lbl2);
	ulInfo.appendChild(liInfo2);
	
	//WiFi check box
	var chck3 = document.createElement('input')
	chck3.type = 'checkbox';
	chck3.id = 'wifibox';
	chck3.onclick = new Function("evt", "boxclick(this,'wifi')");
	//create WiFi Spots label
	var lbl3 = document.createElement('label');
	lbl3.setAttribute('for', 'wifibox');
	lbl3.innerHTML = 'WiFi Spots';
	//Build list item and attach input and label
	var liInfo3 = document.createElement('li');
	liInfo3.appendChild(chck3);
	liInfo3.appendChild(lbl3);
	ulInfo.appendChild(liInfo3);
	
	//attach list to column
	tgt1.appendChild(ulInfo);
	
	//build clear float
	var clr = document.createElement('div');
	clr.className = 'clear';
	tgt1.appendChild(clr);
	
	//build item list
	var ulList = document.createElement('ul');
	ulList.id = 'mapSideColListUL';
	var alt = false;
	var curCat = '';
	var bTest = false;
	// obtain the array of markers and loop through it
	var markers = xmlDoc.documentElement.getElementsByTagName("marker");
	for (var i = 0; i < markers.length; i++){
		// obtain the attribues of each marker
		var itemID = markers[i].getAttribute("id");
		var itemCategory = markers[i].getAttribute("category");
		var itemPoint = new google.maps.LatLng(parseFloat(markers[i].getAttribute("lat")),parseFloat(markers[i].getAttribute("lng")));
		var itemName = markers[i].getAttribute("name");
		var itemAddress = markers[i].getAttribute("address");
		var itemCity = markers[i].getAttribute("city");
		var itemState = markers[i].getAttribute("state");
		var itemZip = markers[i].getAttribute("zip");
		var itemImg = markers[i].getAttribute("img");
		var itemUrl = markers[i].getAttribute("url");
		var itemUrlTxt = markers[i].getAttribute("urlDisplayTxt");
		var itemNotes = null;
		//WiFi
		var itemWifi = null;
		var itemWifiTxt = null;
		//Item Polygon
		var itemPolygon = null;
		var itemPolyColor = '';
		var itemPolyPoints = '';
		var itemPolyPts = [];
		var itemPolyObject = null;
	
		if(markers[i].childNodes.length){
			if(markers[i].getElementsByTagName("poly")[0] != null && markers[i].getElementsByTagName("poly")[0] !== undefined)
				itemPolygon = markers[i].getElementsByTagName("poly")[0];
			if(markers[i].getElementsByTagName("notes")[0] != null && markers[i].getElementsByTagName("notes")[0].childNodes[0] !== undefined)
				itemNotes = markers[i].getElementsByTagName("notes")[0].childNodes[0].nodeValue;
			if(markers[i].getElementsByTagName("wifi")[0] != null && markers[i].getElementsByTagName("wifi")[0].childNodes[0] !== undefined){
				itemWifi = markers[i].getElementsByTagName("wifi")[0].getAttribute("available");
				itemWifiTxt = markers[i].getElementsByTagName("wifi")[0].childNodes[0].nodeValue;
			}
		}
		//Build Polygon
		if (itemPolygon != null) {
			//Obtain the attributes of each poly
			itemPolyColor = itemPolygon.getAttribute("color");
			itemPolyPoints = itemPolygon.getElementsByTagName("point");
			if(itemPolyPoints.length > 0){
				for (var j = 0; j < itemPolyPoints.length; j++) {
					 itemPolyPts[j] = new google.maps.LatLng(parseFloat(itemPolyPoints[j].getAttribute("lat")), parseFloat(itemPolyPoints[j].getAttribute("lng")));
				}
				itemPolyObject = new google.maps.Polygon(itemPolyPts,itemPolyColor,1,0.70, itemPolyColor, .5, itemCategory);
			}else{
				itemPolyObject = null;
			}
		}
		//Build HTML Bubble
		var html = '';
		if(itemCategory != "ephone")
			html = getBubbleHtmlStart() + getBubbleImg(itemImg) + getBubbleName(itemName) + getBubbleNotes(itemNotes) + getBubbleAddress(itemAddress,itemCity,itemState,itemZip) + getBubbleWifi(itemWifi,itemWifiTxt) + getBubbleUrl(itemUrl,itemUrlTxt) + getBubbleLinkToThis(mapTab,itemID) + getBubbleHtmlEnd();
	
		//Add to sort Array
		if( itemCategory == "acadbldg" || itemCategory ==  "adminbldg" || itemCategory ==  "resbld" || itemCategory ==  "greekbld" || itemCategory == "nondubldg" ){
			arrayList.push(itemName+'_'+itemID);
		}
		
		// create the marker
		var marker = createMarker(itemID,itemPoint,html,itemCategory,itemPolyObject);
		if( (curCat != itemCategory) || i == markers.length-1){
			if(curCat == ''){
				testCat.push(itemCategory);
			}else{
				if(testCat.indexOf(curCat) == -1)
					testCat.push(curCat);
			}
			curCat = itemCategory;
		}
		
		// Handle WiFi
		if(itemWifi == 'true'){
			var wifiMarker = createMarker(itemID+999,itemPoint,html,'wifi',null);
		}

}//end for [markers.length]
	
	//Sort Alpha
	tmpArrayList = arrayList.sort();
	
	//Build List
	for(k=0;k<tmpArrayList.length;k++){
		var tmpSplit = tmpArrayList[k].split("_",2);
		
		var a1 = document.createElement('a');
		a1.href = 'javascript: void(showMyMarker('+tmpSplit[1]+'));';
		a1.innerHTML = tmpSplit[0];
		var li = document.createElement('li');
		if(alt){
			li.className = 'mapListItemAlt';
			alt = false;
		}else{
			li.className = 'mapListItem';
			alt = true;
		}
		li.appendChild(a1);
		ulList.appendChild(li);
	}
	
	//Attach Item List to Sidebar
	tgt2.appendChild(ulList);
	
	
	if(!isNaN(shwPnt) && shwPnt != '' && shwPnt != null){
		if(shwPnt < 8000)
			showMyMarker(shwPnt);
		else
			loadMyCategoryBox(shwPnt);
	}
}

//****************************************** Transportation *************************************************//
function map_Transportation_main(){
	map = new google.maps.Map2(getElement("mapContainer"));
	mt = map.getMapTypes();
	// Overwrite the getMinimumResolution() and getMaximumResolution() methods
	for (var b=0; b<mt.length; b++) {
		mt[b].getMinimumResolution = function() {return 10;}
		mt[b].getMaximumResolution = function() {return 17;}
	}
	map.setCenter(new google.maps.LatLng(39.6794479726438,-104.96217727661133), 16);//11);
	map.setMapType(G_MAPMAKER_HYBRID_MAP);
	map.addControl(new google.maps.LargeMapControl(), new google.maps.ControlPosition(G_ANCHOR_TOP_RIGHT, new google.maps.Size(4,6)));
	map.addControl(new ExtMapTypeControl({showTraffic: true, showTrafficKey: true}));
}

function map_Transportation_display(xmlDoc,tgt1,tgt2,tgtDown,shwPnt){
	var testCat=[];
	var arrayList=[];
	arrayList['generalPermitPark']=[];
	arrayList['paidHourlyPark']=[];
	arrayList['restrictPermitPark']=[];
	var tmpArrayList=[];
	tmpArrayList['generalPermitPark']=[];
	tmpArrayList['paidHourlyPark'];
	tmpArrayList['restrictPermitPark'];
	
	//Add File Download Link
	var tmpLnk = document.createElement('a');
	tmpLnk.href = 'http://www.du.edu/media/documents/maps/parkingMap.pdf';
	tmpLnk.innerHTML = 'Printable Parking Map (pdf)';
	tmpLnk.target = '_blank';
	tgtDown.appendChild(tmpLnk);
		
	//build top check boxes
	var ulInfo = document.createElement('ul');
	ulInfo.id = 'mapSubMenuUL';
	
	//Clear All Button
	var liInfo = document.createElement('li');
	liInfo.id = 'clearButton';
	liInfo.className = 'clrButton';
	liInfo.onclick = new Function("evt", "mapHideAll()");
	//attach button to column
	ulInfo.appendChild(liInfo);

	//Du Shuttle
	/*var chck1 = document.createElement('input')
	chck1.type = 'checkbox';
	chck1.id = 'duShuttlebox';
	chck1.onclick = new Function("evt", "boxclick(this,'duShuttle')");
	//create DU Shuttle label
	var lbl1 = document.createElement('label');
	lbl1.setAttribute('for', 'duShuttlebox');
	lbl1.innerHTML = 'DU Shuttle';
	//Build list item and attach input and label
	var liInfo1 = document.createElement('li');
	liInfo1.appendChild(chck1);
	liInfo1.appendChild(lbl1);
	ulInfo.appendChild(liInfo1);*/
	
	//RTD Bus Routes
	var lbl2 = document.createElement('label');
	lbl2.innerHTML = '&nbsp;&nbsp;RTD Bus:';
	//route 21
	var chck2 = document.createElement('input')
	chck2.type = 'checkbox';
	chck2.id = 'bus21box';
	chck2.onclick = new Function("evt", "boxclick(this,'bus21')");
	//create Route labels
	var lbl3 = document.createElement('label');
	lbl3.setAttribute('for', 'bus21box');
	lbl3.innerHTML = 'Route 21';
	//route 24
	var chck3 = document.createElement('input')
	chck3.type = 'checkbox';
	chck3.id = 'bus24box';
	chck3.onclick = new Function("evt", "boxclick(this,'bus24')");
	//create Route labels
	var lbl4 = document.createElement('label');
	lbl4.setAttribute('for', 'bus24box');
	lbl4.innerHTML = 'Route 24';
	//route 52
	var chck4 = document.createElement('input')
	chck4.type = 'checkbox';
	chck4.id = 'bus79box';
	chck4.onclick = new Function("evt", "boxclick(this,'bus79')");
	//create Route labels
	var lbl5 = document.createElement('label');
	lbl5.setAttribute('for', 'bus79box');
	lbl5.innerHTML = 'Route 79';
	//Build list item and attach input and label
	var liInfo2 = document.createElement('li');
	liInfo2.appendChild(lbl2);
	liInfo2.appendChild(chck2);
	liInfo2.appendChild(lbl3);
	liInfo2.appendChild(chck3);
	liInfo2.appendChild(lbl4);
	liInfo2.appendChild(chck4);
	liInfo2.appendChild(lbl5);
	ulInfo.appendChild(liInfo2);

	//RTD Light Rail
	var chck5 = document.createElement('input')
	chck5.type = 'checkbox';
	chck5.id = 'lightRailbox';
	chck5.onclick = new Function("evt", "boxclick(this,'lightRail')");
	//create Emergency Phones label
	var lbl6 = document.createElement('label');
	lbl6.setAttribute('for', 'lightRailbox');
	lbl6.innerHTML = 'Light Rail';
	//Build list item and attach input and label
	var liInfo3 = document.createElement('li');
	liInfo3.appendChild(chck5);
	liInfo3.appendChild(lbl6);
	ulInfo.appendChild(liInfo3);

	//attach button to column
	tgt1.appendChild(ulInfo);
	
	//build item list
	var ulList = document.createElement('ul');
	ulList.id = 'mapSideColListUL';
	var alt = false;
	var curCat = '';
	
	// obtain the array of markers and loop through it
	var markers = xmlDoc.documentElement.getElementsByTagName("marker");
	for (var i = 0; i < markers.length; i++){
		// obtain the attribues of each marker
		var itemID = markers[i].getAttribute("id");
		var itemCategory = markers[i].getAttribute("category");
		var itemPoint = new google.maps.LatLng(parseFloat(markers[i].getAttribute("lat")),parseFloat(markers[i].getAttribute("lng")));
		var itemName = markers[i].getAttribute("name");
		var itemSpace = markers[i].getAttribute("space");
		var itemDirections = null;
		//Permit
		var itemPermit = null;
		var itemPermitTxt = null;
		//WiFi
		var itemWifi = null;
		var itemWifiTxt = null;
		//Item Polygon
		var itemPolygon = null;
		var itemPolyColor = '';
		var itemPolyPoints = '';
		var itemPolyPts = [];
		var itemPolyObject = null;
	
		if(markers[i].childNodes.length){
			if(markers[i].getElementsByTagName("poly")[0] != null)
				itemPolygon = markers[i].getElementsByTagName("poly")[0];
			if(markers[i].getElementsByTagName("directions")[0] != null)
				itemDirections = markers[i].getElementsByTagName("directions")[0].childNodes[0].nodeValue;
			if(markers[i].getElementsByTagName("permit")[0] != null && markers[i].getElementsByTagName("permit")[0].childNodes[0] !== undefined){
				itemPermit = markers[i].getElementsByTagName("permit")[0].getAttribute("type");
				itemPermitTxt = markers[i].getElementsByTagName("permit")[0].childNodes[0].nodeValue;
			}
			if(markers[i].getElementsByTagName("wifi")[0] != null && markers[i].getElementsByTagName("wifi")[0].childNodes[0] !== undefined){
				itemWifi = markers[i].getElementsByTagName("wifi")[0].getAttribute("available");
				itemWifiTxt = markers[i].getElementsByTagName("wifi")[0].childNodes[0].nodeValue;
			}
		}
		//Build Polygon
		if (itemPolygon != null) {
			//Obtain the attributes of each poly
			itemPolyColor = itemPolygon.getAttribute("color");
			itemPolyPoints = itemPolygon.getElementsByTagName("point");
			if(itemPolyPoints.length > 0){
				for (var j = 0; j < itemPolyPoints.length; j++) {
					 itemPolyPts[j] = new google.maps.LatLng(parseFloat(itemPolyPoints[j].getAttribute("lat")), parseFloat(itemPolyPoints[j].getAttribute("lng")));
				}
		
				itemPolyObject = new google.maps.Polygon(itemPolyPts,itemPolyColor,.1,0.80, itemPolyColor, 1, itemCategory);
			}else{
				itemPolyObject = null;
			}
		}
		//Build HTML Bubble
		var html = '';
		if( itemCategory == "generalPermitPark" || itemCategory ==  "paidHourlyPark" || itemCategory ==  "restrictPermitPark" )
			var html = getBubbleHtmlStart() + getBubbleName(itemName) + getBubbleWifi(itemWifi,itemWifiTxt) + getBubblePermit(itemPermit,itemPermitTxt) + getBubbleSpace(itemSpace) + getBubbleDirections(itemDirections) + getBubbleLinkToThis(mapTab,itemID) + getBubbleHtmlEnd();
			
		// create the marker
		var marker = createMarker(itemID,itemPoint,html,itemCategory, itemPolyObject);
		if(marker != null){
			if( itemCategory == "generalPermitPark" || itemCategory ==  "paidHourlyPark" || itemCategory ==  "restrictPermitPark" )
				arrayList[itemCategory].push(itemName+'_'+itemID);
		}
		if( (curCat != itemCategory) || i == markers.length-1){
			if(curCat == ''){
				testCat.push(itemCategory);
			}else{
				if(testCat.indexOf(curCat) == -1)
					testCat.push(curCat);
			}
			curCat = itemCategory;
		}
	}//end for [markers.length]
	
	//Sort Groups & build list
	tmpArrayList['paidHourlyPark'] = arrayList['paidHourlyPark'].sort();
	var aHead1 = document.createElement('a');
	aHead1.href = "javascript: void(show('paidHourlyPark'));";
	aHead1.innerHTML = 'Paid Hourly Parking';
	var liHead1 = document.createElement('li');
	liHead1.className = 'mapListItemHeader';
	liHead1.appendChild(aHead1);
	ulList.appendChild(liHead1);
	//Build List
	for(k=0;k<tmpArrayList['paidHourlyPark'].length;k++){
		var tmpSplit1 = tmpArrayList['paidHourlyPark'][k].split("_",2);
		
		var a1 = document.createElement('a');
		a1.href = 'javascript: void(showMyMarker('+tmpSplit1[1]+'));';
		a1.innerHTML = tmpSplit1[0];
		var li1 = document.createElement('li');
		if(alt){
			li1.className = 'mapListItemAlt';
			alt = false;
		}else{
			li1.className = 'mapListItem';
			alt = true;
		}
		li1.appendChild(a1);
		ulList.appendChild(li1);
	}

	tmpArrayList['generalPermitPark'] = arrayList['generalPermitPark'].sort();
	var aHead2 = document.createElement('a');
	aHead2.href = "javascript: void(show('generalPermitPark'));";
	aHead2.innerHTML = 'General Permit Parking';
	var liHead2 = document.createElement('li');
	liHead2.className = 'mapListItemHeader';
	liHead2.appendChild(aHead2);
	ulList.appendChild(liHead2);
	//Build List
	for(l=0;l<tmpArrayList['generalPermitPark'].length;l++){
		var tmpSplit2 = tmpArrayList['generalPermitPark'][l].split("_",2);
		
		var a2 = document.createElement('a');
		a2.href = 'javascript: void(showMyMarker('+tmpSplit2[1]+'));';
		a2.innerHTML = tmpSplit2[0];
		var li2 = document.createElement('li');
		if(alt){
			li2.className = 'mapListItemAlt';
			alt = false;
		}else{
			li2.className = 'mapListItem';
			alt = true;
		}
		li2.appendChild(a2);
		ulList.appendChild(li2);
	}

	tmpArrayList['restrictPermitPark'] = arrayList['restrictPermitPark'].sort();
	var aHead3 = document.createElement('a');
	aHead3.href = "javascript: void(show('restrictPermitPark'));";
	aHead3.innerHTML = 'Restricted Permit Parking';
	var liHead3 = document.createElement('li');
	liHead3.className = 'mapListItemHeader';
	liHead3.appendChild(aHead3);
	ulList.appendChild(liHead3);
	//Build List
	for(p=0;p<tmpArrayList['restrictPermitPark'].length;p++){
		var tmpSplit3 = tmpArrayList['restrictPermitPark'][p].split("_",2);
		
		var a3 = document.createElement('a');
		a3.href = 'javascript: void(showMyMarker('+tmpSplit3[1]+'));';
		a3.innerHTML = tmpSplit3[0];
		var li3 = document.createElement('li');
		if(alt){
			li3.className = 'mapListItemAlt';
			alt = false;
		}else{
			li3.className = 'mapListItem';
			alt = true;
		}
		li3.appendChild(a3);
		ulList.appendChild(li3);
	}
		
	//Attach Item List to Sidebar
	tgt2.appendChild(ulList);
	
	//Build Poly lines for routes
	var polyLines = xmlDoc.documentElement.getElementsByTagName("polyLine");

	for (var j=0;j<polyLines.length;j++){
		var tmpPoly2 = null;
		var tmpPolyColor2 = '';
		var tmpPolyCategory2 = '';
		var tmpPolyPoints2 = '';
		var tmpPolyPts2 = [];
		var polyOptions2 = '';//{geodesic:true};
		var tmpPolyObject2 = null;
		tmpPolyColor2 = polyLines[j].getAttribute("color");
		tmpPolyCategory2 = polyLines[j].getAttribute("category");
		tmpPolyPoints2 = polyLines[j].getElementsByTagName("point");
		if(tmpPolyPoints2.length > 0){
			for (var c = 0; c < tmpPolyPoints2.length; c++) {
				 tmpPolyPts2[c] = new google.maps.LatLng(parseFloat(tmpPolyPoints2[c].getAttribute("lat")), parseFloat(tmpPolyPoints2[c].getAttribute("lng")));
			}
			
			tmpPolyObject2 = new google.maps.Polyline(tmpPolyPts2,tmpPolyColor2,4,.5);
			tmpPolyObject2.mycategory = tmpPolyCategory2;
			if(tmpPolyObject2 != null){
				gPolyLines.push(tmpPolyObject2);
			}
		}
	}//end Polyline loop
	
	if(!isNaN(shwPnt) && shwPnt != '' && shwPnt != null){
		if(shwPnt < 8000)
			showMyMarker(shwPnt);
		else
			loadMyCategoryBox(shwPnt);
	}
}

//////////////////////////////////////////////////// Generic functions ////////////////////////////////////////////////

//Custom Google Bubble HTML Elements
function getBubbleHtmlStart(){
	return '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><title>Information Bubble | Maps | University of Denver</title></head><body><div class="mapBubbleHTML-outerWrapper"><div class="mapBubbleHTML-innerWrapper"><div class="mapBubbleHTML-contentContainer"><div class="mapBubbleHTML">';
}

function getBubbleHtmlEnd(){
	return '</div></div></div></div></body></html>';
}

function getBubbleName(txtName){
	if(txtName != null && txtName != '')
		return '<h3>'+txtName+'</h3>';
	else
		return '';
}

function getBubbleWifi(boolWifi,txtWifi){
	if(boolWifi != null && boolWifi != '')
		return '<p class="mapBubbleHTML-wifi"><img src="'+rootpath+'/_resources/images/icons/wi-fi.gif" border="0" alt="DU Wi-Fi" />'+txtWifi+'</p>';
	else
		return '';
}

function getBubbleNotes(txtNote){
	if(txtNote != null && txtNote != '')
		return '<p class="mapBubbleHTML-note">Notes: <label>'+txtNote+'</label></p>';
	else
		return '';
}

function getBubbleAddress(txtAddress,txtCity,txtState,txtZip){
	var myReturn = '';
	if( (txtAddress != null && txtAddress != '') || (txtCity != null && txtCity != '') || (txtState != null && txtState != '') || (txtZip != null && txtZip != '') )
		myReturn = '<p class="mapBubbleHTML-address">';
		
	if(txtAddress != null && txtAddress != ''){
		myReturn += txtAddress;
		if( (txtCity != null && txtCity != '') || (txtState != null && txtState != '') || (txtZip != null && txtZip != '') )
			myReturn += '<br />';
	}
		
	if(txtCity != null && txtCity != '')
		myReturn += txtCity+', ';
		
	if(txtState != null && txtState != '')
		myReturn += txtState+' ';
		
	if(txtZip != null && txtZip != '')
		myReturn += txtZip;
		
	if(myReturn.length > 0)
		myReturn += '</p>';
		
	return myReturn;
}

function getBubblePhone(txtPhone){
	if(txtPhone != null && txtPhone != '')
		return '<p class="mapBubbleHTML-phone">Phone: <label>'+txtPhone+'</label></p>';
	else
		return '';
}

function getBubbleUrl(txtUrl,txtUrlTxt){
	if( (txtUrl != null && txtUrl != '') && (txtUrlTxt != null && txtUrlTxt != '') )
		return '<a class="mapBubbleHTML-url" href="'+txtUrl+'" target="_blank">'+txtUrlTxt+'</a>';
	else
		return '';
}

function getBubbleDirections(txtDirections){
	if(txtDirections != null && txtDirections != '')
		return '<p class="mapBubbleHTML-directions">Directions: <label>'+txtDirections+'</label></p>';
	else
		return '';
}

function getBubblePermit(txtPermit,txtPermitTxt){
	if(txtPermit != null && txtPermit != '' && txtPermitTxt != null && txtPermitTxt != '')
		return '<p class="mapBubbleHTML-permit">'+txtPermit+': <label>'+txtPermitTxt+'</label></p>';
	else
		return '';
}

function getBubbleSpace(txtSpace){
	if(txtSpace != null && txtSpace != '')
		return '<p class="mapBubbleHTML-space">Parking Spaces: <label>'+txtSpace+'</label></p>';
	else
		return '';
}

function getBubbleImg(txtImg){
	if(txtImg != null && txtImg != '')
		return '<img src="'+txtImg+'" width="230" border="0" /><br />';
	else
		return '';
}

function getBubbleLinkToThis(mapType,mrkID){
	return '<a class="mapBubbleHTML-linkToThis" href="'+rootpath+'/utilities/maps/index.html?mpType='+mapType+'&mrkID='+mrkID+'">Link to this Location &raquo;</a>';
}

//Build map marker
function createMarker(markerID,point,html,category,objPoly) {
	var marker = new google.maps.Marker(point, getMarkerOptions(category));
	if(marker != null){
		// === Store the category and name info as a marker properties ===
		marker.id = markerID;
		marker.mycategory = category;                                 
		marker.poly = objPoly;
		if(html != null && html != '')
			marker.bindInfoWindowHtml(html);
		
		//attach to global
		gmarkers.push(marker);
	}
	return marker;
}

function getMarkerIndexByID(arryMrk,mrkId) {
	for(var i=0;i<arryMrk.length;i++) {
		if(arryMrk[i].id==mrkId){return i;}
	}
	return -1;
};

//Builds marker icons
function getMarkerOptions(strType){
	var baseIcon = new google.maps.Icon(G_DEFAULT_ICON);
	/*base configs:
		image: http://www.google.com/intl/en_us/mapfiles/marker.png
		shadow: http://www.google.com/intl/en_us/mapfiles/shadow50.png
		iconSize: (20,34)
		shadowSize: (37,34)
		iconAnchor: (9,34)
		infoWindowAnchor: (9,2)
		printImage: http://www.google.com/intl/en_us/mapfiles/markerie.gif
		mozPrintImage: http://www.google.com/intl/en_us/mapfiles/markerff.gif
		printShadow: http://www.google.com/intl/en_us/mapfiles/dithshadow.gif
		transparent: http://www.google.com/intl/en_us/mapfiles/markerTransparent.png
		imageMap: 9,06,1,4,2,2,4,0,8,012,1,14,2,16,5,19,7,23,826,9,30,9,34,11,34,11,30,12,26,13,24,14,21,16,18,18,16,20,12,20,8,18,4,16,2,15,1,13,0
		maxHeight: 13
		dragCrossImage: http://www.google.com/intl/en_us/mapfiles/drag_cross_67_16.png
		dragCrossSize: (16,16)
		dragCrossAnchor: (7,9)
	*/
	baseIcon.shadow = '/_resources/images/icons/markershadow.png';
	baseIcon.iconSize = new GSize(23, 41);
	baseIcon.shadowSize = new GSize(49, 41);
	baseIcon.iconAnchor = new GPoint(10, 41);
	baseIcon.infoWindowAnchor = new GPoint(18, 0);
	switch(strType){
		case "acadbldg": case "adminbldg": case "resbld": case "greekbld":
			baseIcon.image = '/_resources/images/icons/buildings.png';
			break;
		case "nondubldg":
			baseIcon.image = '/_resources/images/icons/du-marker.png';
			break;
		case "ephone":
			baseIcon.image = '/_resources/images/icons/phones.png';
			break;
		case "green":
			baseIcon.image = '/_resources/images/icons/greens.png';
			break;
		case "generalPermitPark":
			baseIcon.image = '/_resources/images/icons/parkingYellow.png';
			break;
		case "paidHourlyPark":
			baseIcon.image = '/_resources/images/icons/parkingGreen.png';
			break;
		case "restrictPermitPark":
			baseIcon.image = '/_resources/images/icons/parkingRed.png';
			break;
		case "lightRail":
			baseIcon.image = '/_resources/images/icons/lightRail.png';
			break;
		case "duShuttle":
			baseIcon.image = '/_resources/images/icons/shuttle.png';
			break;
		case "bus21": case "bus24": case "bus79":
			baseIcon.image = '/_resources/images/icons/bus.png';
			break;
		case "wifi":
			baseIcon.image = '/_resources/images/icons/wifi.png';
			break;
		default:
			baseIcon.image = '/_resources/images/icons/du-marker.png';
			break;
	}//end switch
	
	var markerOptions = { icon:baseIcon };
	
	return markerOptions;
}

// shows all markers/polygons of a particular category, and ensures the checkbox is checked ==
function show(category) {
	// close the info window, in case its open on a marker that we just hid
	map.closeInfoWindow();
	for (var i=0; i<gmarkers.length; i++) {
		if (gmarkers[i].mycategory == category) {
			if(gmarkers[i].poly != null)
				map.addOverlay(gmarkers[i].poly);
			map.addOverlay(gmarkers[i]);
		}
	}
	//Poly Lines
	for(var g=0;g<gPolyLines.length;g++){
		if(gPolyLines[g].mycategory == category){
			map.addOverlay(gPolyLines[g]);
		}
	}
	// == check the checkbox ==
	if(getElement(category+"box") != null)
		getElement(category+"box").checked = true;
}

// hides all markers/polygons of a particular category, and ensures the checkbox is cleared ==
function hide(category) {
	for (var i=0; i<gmarkers.length; i++) {
		if (gmarkers[i].mycategory == category) {
			if(gmarkers[i].poly != null)
				map.removeOverlay(gmarkers[i].poly);
			if(!gmarkers[i].isHidden())
				map.removeOverlay(gmarkers[i]);
		}
	}
	//Poly Lines
	for(var g=0;g<gPolyLines.length;g++){
		if(gPolyLines[g].mycategory == category){
			map.removeOverlay(gPolyLines[g]);
		}
	}
	// clear the checkbox ==
	if(getElement(category+"box") != null)
		getElement(category+"box").checked = false;
	// close the info window, in case its open on a marker that we just hid
	map.closeInfoWindow();
}

//Box Clicked
function boxclick(box,category) {
	if (box.checked) {
		show(category);
	} else {
		hide(category);
	}
}

// Show checked boxes on load
function loadMyCategoryBox(intID){
	switch(intID){
		case 8000:
			show('green');
			break;
		case 8001:
			show('ephone');
			break;
		case 8002:
			show('wifi');
			break;
		case 8003:
			show('duShuttle');
			break;
		case 8004:
			show('bus21');
			break;
		case 8005:
			show('bus24');
			break;
		case 8006:
			show('bus79');
			break;
		case 8007:
			show('lightRail');
			break;
		default:
			break;
	}
}
//Link Clicked: Fire Map Event
function showMyMarker(i) {
	var markerIndex = getMarkerIndexByID(gmarkers,i);
	if(markerIndex != -1){
		if(gmarkers[markerIndex].poly != null){
			map.addOverlay(gmarkers[markerIndex].poly);
		}
		map.addOverlay(gmarkers[markerIndex]);
		google.maps.Event.trigger(gmarkers[markerIndex],"click");
	}
}

//Clear all points
function mapHideAll(){
	// close the info window, in case its open on a marker that we just hid
	map.closeInfoWindow();
	for(var k=0;k<gmarkers.length;k++){
		if(gmarkers[k].poly != null && !gmarkers[k].poly.isHidden())
			map.removeOverlay(gmarkers[k].poly);
		if(!gmarkers[k].isHidden())
			map.removeOverlay(gmarkers[k]);
	}
	//uncheck boxes if there are any
	var tmpElem = document.getElementsByTagName("input");
	if(tmpElem.length > 0){
		for(var g=0;g<tmpElem.length;g++){
			if(tmpElem[g].type == 'checkbox' && tmpElem[g].checked == true)
				tmpElem[g].checked = false;
		}
	}
}
