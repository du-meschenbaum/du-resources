// -- COMPRESS WITH http://jscompress.com/ --
//Unobtrusive JavaScript Implementation, hosted in the Cloud
//http://en.wikipedia.org/wiki/Unobtrusive_JavaScript
/// <reference path="Scripts/jquery-1.4.1.js" />

//http://www.du.edu

// Declare fully qualified Namespace
if (typeof location3 == 'undefined') var location3 = {};
location3.media = location3.media || {};
location3.media.analytics = location3.media.analytics || {};
location3.media.analytics.du = location3.media.analytics.du || {};
//create an alias to the Namespace
var l3m = location3.media.analytics.du;

// Matt: Added Debug
var debug = false;

var l3mDomain = document.domain;                       if(debug) console.log('l3mDomain: ' + l3mDomain);
var l3mPathName = document.location.pathname;          if(debug) console.log('l3mPathName: ' + l3mPathName);
var l3mCategory = '';                                  if(debug) console.log('l3mCategory: ' + l3mCategory);
var l3mAction = '';                                    if(debug) console.log('l3mAction: ' + l3mAction);
var l3mLabel = '';                                     if(debug) console.log('l3mLabel: ' + l3mLabel);

//DU Master Profile: UA-516606-30
// Per Tara 01/28/2013, set ON/OFF SWITCHES in the Matrix until
//  1. Cloud Code in place
//  2. Inline Code Removed from domain
//  3.  For each UA on site: denverpioneers.com has FIVE UAs firing
// SubDirectoies on du.edu conditional code > see Google Docs

l3m.MultiDim = [];
//[i][0] Domain (document.domain)
//[i][1] UA on/off
//[i][2] UA - Account: du.edu | Property: DU Master Profile - Default Tracker (UA-516606-30)
//[i][3] Inline on/off
//[i][4] UA2 - t2 Tracker
//[i][5] UA3 - t3 Tracker
//[i][6] UA4 - t4 Tracker
//[i][7] UA5 - t5 Tracker
//[i][8] UniversalTracker on/off
//[i][9] UT - Account: University of Denver | Property: DU Domain - Default Tracker (UA-50286807-1) || Development UA (UA-52336315-1)
//[i][10] UT2 - Client Universal Tracker

l3m.MultiDim[0] = ['www.du.edu', 'on', 'UA-516606-30', 'on', 'UA-516606-1', '', '', '', 'on', 'UA-50286807-1',''];
l3m.MultiDim[1] = ['alumni.du.edu', 'on', 'UA-516606-30', 'on', 'UA-20019047-1', 'UA-516606-1', '', '', 'on', 'UA-50286807-1',''];
l3m.MultiDim[2] = ['m.du.edu', 'on', 'UA-516606-30', 'on', 'UA-516606-25', 'UA-516606-1', '', '', 'on', 'UA-50286807-1',''];
l3m.MultiDim[3] = ['denverpioneers.com', 'on', 'UA-516606-30', 'on', 'UA-516606-1', 'UA-8564833-4', '', '', 'on', 'UA-50286807-1',''];
l3m.MultiDim[4] = ['ducal.du.edu', 'on', 'UA-516606-30', 'on', 'UA-7613876-3', 'UA-516606-1', '', '', 'on', 'UA-50286807-1',''];
l3m.MultiDim[5] = ['daniels.du.edu', 'on', 'UA-516606-30', 'on', 'UA-516606-1', '', '', '', 'on', 'UA-50286807-1',''];
l3m.MultiDim[6] = ['womenscollege.du.edu', 'on', 'UA-516606-30', 'on', 'UA-516606-1', '', '', '', 'on', 'UA-50286807-1',''];
l3m.MultiDim[7] = ['universitycollege.du.edu', 'on', 'UA-516606-30', 'on', 'UA-10268985-1', 'UA-516606-1', '', '', 'on', 'UA-50286807-1','UA-10268985-4'];
l3m.MultiDim[8] = ['www.law.du.edu', 'on', 'UA-516606-30', 'on', 'UA-4554763-1', 'UA-516606-1', '', '', 'on', 'UA-50286807-1',''];
l3m.MultiDim[9] = ['otl.du.edu', 'on', 'UA-516606-30', 'on', 'UA-516606-1', '', '', '', 'on', 'UA-50286807-1',''];
l3m.MultiDim[10] = ['library.du.edu', 'on', 'UA-516606-30', 'on', 'UA-516606-1', '', '', '', 'on', 'UA-50286807-1',''];
l3m.MultiDim[11] = ['www.newmancenterpresents.com', 'on', 'UA-516606-30', 'on', 'UA-29634419-1', 'UA-516606-1', '', '', 'on', 'UA-50286807-1',''];
l3m.MultiDim[12] = ['search.du.edu', 'on', 'UA-516606-30', 'on', 'UA-516606-1', '', '', '', 'on', 'UA-50286807-1',''];
l3m.MultiDim[13] = ['dupioneermovement.com', 'on', 'UA-516606-30', 'on', 'UA-32592113-1', 'UA-516606-1', '', '', 'on', 'UA-50286807-1',''];
l3m.MultiDim[14] = ['psm.du.edu', 'on', 'UA-516606-30', 'on', 'UA-516606-1', '', '', '', 'on', 'UA-50286807-1',''];
l3m.MultiDim[15] = ['abroad.du.edu', 'on', 'UA-516606-30', 'on', 'UA-516606-1', '', '', '', 'on', 'UA-50286807-1',''];
l3m.MultiDim[16] = ['morgridge.du.edu', 'on', 'UA-516606-30', 'on', 'UA-516606-1', '', '', '', 'on', 'UA-50286807-1',''];
l3m.MultiDim[17] = ['video.du.edu', 'on', 'UA-516606-30', 'on', 'UA-13074384-12', '', '', '', 'on', 'UA-50286807-1',''];
l3m.MultiDim[18] = ['videocast.du.edu', 'on', 'UA-516606-30', 'on', 'UA-13074384-12', '', '', '', 'on', 'UA-50286807-1',''];
l3m.MultiDim[19] = ['magazine.du.edu', 'on', 'UA-516606-30', 'on', 'UA-516606-1', '', '', '', 'on', 'UA-50286807-1',''];
l3m.MultiDim[20] = ['pioneerweb.du.edu', 'on', 'UA-516606-30', 'on', 'UA-516606-24', '', '', '', 'on', 'UA-50286807-2',''];
l3m.MultiDim[21] = ['admission.du.edu', 'on', 'UA-516606-30', 'on', 'UA-516606-1', '', '', '', 'on', 'UA-50286807-1',''];
l3m.MultiDim[22] = ['bulletin.du.edu', 'on', 'UA-516606-30', 'on', 'UA-516606-1', '', '', '', 'on', 'UA-50286807-1',''];
l3m.MultiDim[23] = ['securelb.imodules.com', 'on', 'UA-516606-30', 'on', 'UA-516606-1', '', '', '', 'on', 'UA-50286807-1',''];
l3m.MultiDim[24] = ['inquire.du.edu', 'on', 'UA-516606-30', 'on', 'UA-516606-1', '', '', '', 'on', 'UA-50286807-1',''];
l3m.MultiDim[25] = ['vicki-myhren-gallery.du.edu', 'on', 'UA-516606-30', 'on', 'UA-516606-1', '', '', '', 'on', 'UA-50286807-1',''];
// Development Analytics
l3m.MultiDim[26] = ['devweb.du.edu', 'on', 'UA-516606-30', 'on', '', '', '', '', 'on', 'UA-52336315-1',''];
l3m.MultiDim[27] = ['stage.du.edu', 'on', 'UA-516606-30', 'on', '', '', '', '', 'on', 'UA-52336315-1',''];
l3m.MultiDim[28] = ['lp5webteam.cair.du.edu', 'on', 'UA-516606-30', 'on', 'UA-516606-24', '', '', '', 'on', 'UA-52336315-1',''];
l3m.MultiDim[29] = ['goldpioneerweb.du.edu', 'on', 'UA-516606-30', 'on', 'UA-516606-24', '', '', '', 'on', 'UA-52336315-1',''];
l3m.MultiDim[30] = ['nextbulletin.du.edu', 'on', 'UA-516606-30', 'on', '', '', '', '', 'on', 'UA-52336315-1',''];
l3m.MultiDim[31] = ['inquire-red.du.edu', 'on', 'UA-516606-30', 'on', '', '', '', '', 'on', 'UA-52336315-1',''];

/* These are disabled domains
 l3m.MultiDim[2] = new Array('uofdenver.org', 'off', 'UA-516606-30', 'off', 'UA-516606-1', '', '', '', 'on', 'UA-50286807-1','');
 l3m.MultiDim[3] = new Array('commonapp.org', 'off', 'UA-516606-30', 'off', 'UA-516606-1', '', '', '', 'on', 'UA-50286807-1','');
 l3m.MultiDim[6] = new Array('volunteer.du.edu', 'off', 'UA-516606-30', 'off', 'UA-13074384-6', 'UA-516606-1', '', '', 'on', 'UA-50286807-1','');
 l3m.MultiDim[8] = new Array('tedxdu.com', 'off', 'UA-516606-30', 'off', 'UA-516606-1', '', '', '', 'on', 'UA-50286807-1','');
 l3m.MultiDim[9] = new Array('duclarion.com', 'off', 'UA-516606-30', 'off', 'UA-33582921-1', 'UA-516606-1', '', '', 'on', 'UA-50286807-1','');
 l3m.MultiDim[14] = new Array('nano.du.edu', 'off', 'UA-516606-30', 'off', 'UA-516606-1', '', '', '', 'on', 'UA-50286807-1','');
 l3m.MultiDim[16] = new Array('danielsatdu.org', 'off', 'UA-516606-30', 'off', 'UA-516606-1', '', '', '', 'on', 'UA-50286807-1','');
 l3m.MultiDim[17] = new Array('denveradmission.du.edu', 'off', 'UA-516606-30', 'off', 'UA-516606-1', '', '', '', 'on', 'UA-50286807-1','');
 l3m.MultiDim[18] = new Array('du-uga.edu.185r.net', 'off', 'UA-516606-30', 'off', 'UA-516606-1', '', '', '', 'on', 'UA-50286807-1','');
 l3m.MultiDim[22] = new Array('tax.du.edu', 'off', 'UA-516606-30', 'off', 'UA-516606-1', '', '', '', 'on', 'UA-50286807-1','');
 l3m.MultiDim[25] = new Array('coursemedia.du.edu', 'off', 'UA-516606-30', 'off', 'UA-13074384-5', 'UA-516606-1', '', '', 'on', 'UA-50286807-1','');
 l3m.MultiDim[27] = new Array('iaals.du.edu', 'off', 'UA-516606-30', 'off', 'UA-516606-1', 'UA-22880948-2', '', '', 'on', 'UA-50286807-1','');

 */

// Per Tara Email Tasks 04/23/2013 2:11 PM - RE: Ramona - Web Analytics Tasks (Add the extra discovered UAs)
l3m.PathnameDim = [];
//[i][0] Domain Id (from l3m.MultiDim)
//[i][1] Pathname
//[i][2] UAPath1 - tPath1 Tracker
//[i][3] PathUniversalTracker on/off
//[i][4] UTPath1 -  Tracker
l3m.PathnameDim[0] = ['0', '/ritchiecenter/', 'UA-332497-1', 'off', ''];
l3m.PathnameDim[1] = ['0', '/events/', 'UA-19537427-1', 'off', ''];
l3m.PathnameDim[2] = ['0', '/gspp/', 'UA-33493444-1', 'off', ''];
l3m.PathnameDim[3] = ['0', '/highlandsranchgolf/', 'UA-38509446-1', 'off', ''];
l3m.PathnameDim[4] = ['0', '/transportation/', 'UA-10268985-5', 'off', ''];
l3m.PathnameDim[5] = ['26', '/give/', 'UA-516606-25', 'off', ''];


l3m.getDomainId = function (domain, array) {
    var result = -1;
    for (var i = 0; i < array.length; i++) {
        if (array[i][0] == domain) {
            result = i;
            break;
        }
    }
    return result;
};

l3m.getCloudCodeSwitch = function (id, array) {
    var result = 'off';
    if (id > -1) {
        result = array[id][1];
    }
    return result;
};

l3m.getInlineCodeSwitch = function (id, array) {
    var result = 'off';
    if (id > -1) {
        result = array[id][3];
    }
    return result;
};

l3m.getUA = function (id, array) {
    var result = 'UA-XXXXXXXX-X';
    if (id > -1) {
        if (array[id][4]) {
            result = array[id][4];
        }
    }
    return result;
};

l3m.getUA2 = function (id, array) {
    var result = 'UA-XXXXXXXX-X';
    if (id > -1) {
        if (array[id][2]) {
            result = array[id][2];
        }
    }
    return result;
};

l3m.getUA3 = function (id, array) {
    var result = 'UA-XXXXXXXX-X';
    if (id > -1) {
        if (array[id][5]) {
            result = array[id][5];
        }
    }
    return result;
};

l3m.getUA4 = function (id, array) {
    var result = 'UA-XXXXXXXX-X';
    if (id > -1) {
        if (array[id][6]) {
            result = array[id][6];
        }
    }
    return result;
};

l3m.getUA5 = function (id, array) {
    var result = 'UA-XXXXXXXX-X';
    if (id > -1) {
        if (array[id][7]) {
            result = array[id][7];
        }
    }
    return result;
};

l3m.getPathnameId = function (id, pathname, array) {
    var result = -1;
    for (var i = 0; i < array.length; i++) {
        if (array[i][0] == id.toString()) {
            var pattern = new RegExp("^"+array[i][1]);
            if (pattern.test(pathname.toString())) {
                result = i;
                if(debug) console.log('Path Pattern: ' + array[i][1]);
                break;
            }
        }
    }
    return result;
};

l3m.getUAPath1 = function (id, array) {
    var result = 'UA-XXXXXXXX-X';
    if (id > -1) {
        if (array[id][2]) {
            result = array[id][2];
        }
    }
    return result;
};

l3m.getDomainName = function (l3mDomainName) {
    var domainName = '';
    domainName = l3mDomainName.toString().slice(l3mDomainName.toString().lastIndexOf('.'));
    l3mDomainName = l3mDomainName.toString().substring(0, l3mDomainName.toString().lastIndexOf('.'));
    domainName = (l3mDomainName.toString().lastIndexOf('.') > -1
        ? l3mDomainName.toString().slice(l3mDomainName.toString().lastIndexOf('.')) + domainName
        : '.' + l3mDomainName + domainName);

    return domainName;
};

//Matt; Added form submission event tracking 8/21/2013
l3m.formSubmitted = false;
l3m.submitForm = function (form) {
	var result = false;
    setTimeout(function () {form.submit();}, 500);
    l3m.formSubmitted = true;
    return l3m.formSubmitted;
};

// Matt: Added Universal switch/tracker
l3m.getUTCodeSwitch = function (id, array) {
  var result = 'off';
  if (id > -1) {
    result = array[id][8];
  }
  return result;
};

l3m.getUT = function (id, array) {
  var result = 'UA-XXXXXXXX-X';
  if (id > -1) {
    if (array[id][9]) {
      result = array[id][9];
    }
  }
  return result;
};

l3m.getUT2 = function (id, array) {
    var result = 'UA-XXXXXXXX-X';
    if (id > -1) {
        if (array[id][10]) {
            result = array[id][10];
        }
    }
    return result;
};

l3m.getUTCodeSwitchPath = function (id, array) {
  var result = 'off';
  if (id > -1) {
    result = array[id][3];
  }
  return result;
};

l3m.getUTPath1 = function (id, array) {
  var result = 'UA-XXXXXXXX-X';
  if (id > -1) {
    if (array[id][4]) {
      result = array[id][4];
    }
  }
  return result;
};

l3m.getLinkerDomains = function (domain, array){
  var result = [];
  var tmp ='';
  for (var i = 0; i < array.length; i++) {
    if (array[i][0].toString().indexOf(domain.toString()) <= 0) {
      tmp = l3m.getDomainName(array[i][0]);
      tmp = tmp.substr(1);
      if(!(tmp in result)) result.push(tmp);
    }
  }
  return result;
};

l3m.getPathNameCanonical = function (pathname){
  var result = pathname;
  if (pathname.toString().indexOf('index.html') > -1) {
    result = pathname.slice(0,pathname.toString().indexOf('index.html'));
  }
  return result;
};

l3m.DomainId = l3m.getDomainId(l3mDomain, l3m.MultiDim);
l3m.CloudCodeSwitch = l3m.getCloudCodeSwitch(l3m.DomainId, l3m.MultiDim);
l3m.UA = l3m.getUA(l3m.DomainId, l3m.MultiDim);
l3m.InlineCodeSwitch = l3m.getInlineCodeSwitch(l3m.DomainId, l3m.MultiDim);
l3m.UA2 = l3m.getUA2(l3m.DomainId, l3m.MultiDim);
l3m.UA3 = l3m.getUA3(l3m.DomainId, l3m.MultiDim);
l3m.UA4 = l3m.getUA4(l3m.DomainId, l3m.MultiDim);
l3m.UA5 = l3m.getUA5(l3m.DomainId, l3m.MultiDim);
l3m.domainName = l3m.getDomainName(l3mDomain);
l3m.PathnameId = l3m.getPathnameId(l3m.DomainId, l3mPathName, l3m.PathnameDim);
l3m.UAPath1 = l3m.getUAPath1(l3m.PathnameId, l3m.PathnameDim);
// Matt: Added Universal switch/tracker
l3m.UTCodeSwitch = l3m.getUTCodeSwitch(l3m.DomainId, l3m.MultiDim);
l3m.UT = l3m.getUT(l3m.DomainId, l3m.MultiDim);
l3m.UTCodeSwitchPath = l3m.getUTCodeSwitchPath(l3m.PathnameId, l3m.PathnameDim);
l3m.UT2 = l3m.getUT2(l3m.DomainId, l3m.MultiDim);
l3m.UTPath1 = l3m.getUTPath1(l3m.PathnameId, l3m.PathnameDim);
l3m.LinkerDomains = l3m.getLinkerDomains(l3m.domainName, l3m.MultiDim);
l3m.PathNameCanonical = l3m.getPathNameCanonical(l3mPathName);

if(debug) console.log('l3m Object');
if(debug) console.log(l3m);

//============================================
// Begin Google Analytics Asynchronous Code
var _gaq = _gaq || [];
if (l3m.CloudCodeSwitch == 'on') {
    _gaq.push(['t2._setAccount', l3m.UA2]);
    if (l3m.InlineCodeSwitch == 'on') {
        _gaq.push(['t2._setAllowLinker', true]);
        _gaq.push(['t2._setDomainName', l3m.domainName]);
    }
    _gaq.push(['t2._setSiteSpeedSampleRate', 5]);
    _gaq.push(['t2._trackPageview']);
}

if (l3m.InlineCodeSwitch == 'on') {
    if (l3m.UA != 'UA-XXXXXXXX-X') {
        _gaq.push(['_setAccount', l3m.UA]);
        _gaq.push(['_setAllowLinker', true]);
        _gaq.push(['_setDomainName', l3m.domainName]);
        _gaq.push(['_setSiteSpeedSampleRate', 5]);
        _gaq.push(['_trackPageview']);
    }

    if (l3m.UA3 != 'UA-XXXXXXXX-X') {
        _gaq.push(['t3._setAccount', l3m.UA3]);
        _gaq.push(['t3._setAllowLinker', true]);
        _gaq.push(['t3._setDomainName', l3m.domainName]);
        _gaq.push(['t3._setSiteSpeedSampleRate', 5]);
        _gaq.push(['t3._trackPageview']);
    }

    if (l3m.UA4 != 'UA-XXXXXXXX-X') {
        _gaq.push(['t4._setAccount', l3m.UA4]);
        _gaq.push(['t4._setAllowLinker', true]);
        _gaq.push(['t4._setDomainName', l3m.domainName]);
        _gaq.push(['t4._setSiteSpeedSampleRate', 5]);
        _gaq.push(['t4._trackPageview']);
    }

    if (l3m.UA5 != 'UA-XXXXXXXX-X') {
        _gaq.push(['t5._setAccount', l3m.UA5]);
        _gaq.push(['t5._setAllowLinker', true]);
        _gaq.push(['t5._setDomainName', l3m.domainName]);
        _gaq.push(['t5._setSiteSpeedSampleRate', 5]);
        _gaq.push(['t5._trackPageview']);
    }
    if (l3m.UAPath1 != 'UA-XXXXXXXX-X') {
        _gaq.push(['tPath1._setAccount', l3m.UAPath1]);
        _gaq.push(['tPath1._setAllowLinker', true]);
        _gaq.push(['tPath1._setDomainName', l3m.domainName]);
        _gaq.push(['tPath1._setSiteSpeedSampleRate', 5]);
        _gaq.push(['tPath1._trackPageview']);
    }
}

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    //Per Tara Tasks - use DobuleClick Library
    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
	//switch to normal ga code for experiments - matte
    //ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

// Matt: Universal Tracking Code
if (l3m.UTCodeSwitch == 'on' || l3m.UTCodeSwitchPath == 'on') {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','_duTracker');

  if (l3m.UTCodeSwitch == 'on' && l3m.UT != 'UA-XXXXXXXX-X') {
    _duTracker('create', l3m.UT, 'auto', {'name': 'duMainTracker', 'allowLinker':true, 'siteSpeedSampleRate':5, 'legacyCookieDomain': l3m.domainName});
    _duTracker('duMainTracker.require', 'displayfeatures');//enables advertising features in GA
    _duTracker('duMainTracker.require', 'linkid', 'linkid.js');//enhanced link attribution
    _duTracker('duMainTracker.require', 'linker');//cross domain linking
    _duTracker('duMainTracker.linker:autoLink', l3m.LinkerDomains, true, true);//cross domain linking
    _duTracker('duMainTracker.send', 'pageview');
  }

  if (l3m.UTCodeSwitch == 'on' && l3m.UT2 != 'UA-XXXXXXXX-X') {
      _duTracker('create', l3m.UT2, 'auto', {'name': 'duClientTracker1'});
      _duTracker('duClientTracker1.require', 'displayfeatures');//enables advertising features in GA
      _duTracker('duClientTracker1.require', 'linkid', 'linkid.js');//enhanced link attribution
      _duTracker('duClientTracker1.send', 'pageview');
  }

  if (l3m.UTCodeSwitchPath == 'on' && l3m.UTPath1 != 'UA-XXXXXXXX-X') {
    _duTracker('create', l3m.UTPath1, 'auto', {'name': 'duPathTracker', 'allowLinker':true, 'siteSpeedSampleRate':5, 'legacyCookieDomain': l3m.domainName});
    _duTracker('duPathTracker.require', 'displayfeatures');//enables advertising features in GA
    _duTracker('duPathTracker.require', 'linkid', 'linkid.js');//enhanced link attribution
    _duTracker('duPathTracker.require', 'linker');//cross domain linking
    _duTracker('duPathTracker.linker:autoLink', l3m.LinkerDomains, true, true);//cross domain linking
    _duTracker('duPathTracker.send', 'pageview');
  }
}
//End of Google Analytics Asynchronous Code
//============================================

////Per conversation with Tara 01/22/2013 10:00 AM - Add CrazyEgg
//l3m.loadCrazyEgg = function () {
//    ///<summary>Function to create script tag to load CrazyEgg Code
//    ///</summary>
//    var prot = document.location.protocol;
//    var ce = document.createElement('script');
//    ce.src = prot + '//dnn506yrbagrg.cloudfront.net/pages/scripts/0007/8999.js';
//    ce.type = 'text/javascript';
//    var b = document.getElementsByTagName('body')[0];
//    b.appendChild(ce);
//};

//====================================================================================================
// Ths Function has been MODIFIED because of CloudCodeSwitch, InlineCodeSwitch, and MULTIPLE Trackers
//====================================================================================================
l3m.trackEvent = function (category, action, optLabel, optValue) {
    ///<summary>Function to build GA _gaq array elements
    ///<para>Pass: category, action, opt_label, opt_value.  opt_value has to be INTEGER.  opt_label is optional but is best used for Google Analytics</para>
    ///<para>returns category</para>
    ///</summary>
    ///<param name="category" type="String">The category in _trackEvent for GA.</param>
    ///<param name="action" type="String">The action in _trackEvent for GA.</param>
    ///<param name="opt_label" type="String">The optional label in _trackEvent for GA.</param>
    ///<param name="opt_value" type="Integer">The optional value in _trackEvent for GA.</param>
    if (optValue == null && optLabel != null) {
        if (l3m.CloudCodeSwitch == 'on') {
            _gaq.push(['t2._trackEvent', category, action, optLabel]);
        }
        if (l3m.InlineCodeSwitch == 'on') {
            if (l3m.UA != 'UA-XXXXXXXX-X') {
                _gaq.push(['_trackEvent', category, action, optLabel]);
            }
            if (l3m.UA3 != 'UA-XXXXXXXX-X') {
                _gaq.push(['t3._trackEvent', category, action, optLabel]);
            }
            if (l3m.UA4 != 'UA-XXXXXXXX-X') {
                _gaq.push(['t4._trackEvent', category, action, optLabel]);
            }
            if (l3m.UA5 != 'UA-XXXXXXXX-X') {
                _gaq.push(['t5._trackEvent', category, action, optLabel]);
            }
            if (l3m.UAPath1 != 'UA-XXXXXXXX-X') {
                _gaq.push(['tPath1._trackEvent', category, action, optLabel]);
            }
        }
    }
    else if (optLabel == null && optValue == null) {
        if (l3m.CloudCodeSwitch == 'on') {
            _gaq.push(['t2._trackEvent', category, action]);
        }
        if (l3m.InlineCodeSwitch == 'on') {
            if (l3m.UA != 'UA-XXXXXXXX-X') {
                _gaq.push(['_trackEvent', category, action]);
            }
            if (l3m.UA3 != 'UA-XXXXXXXX-X') {
                _gaq.push(['t3._trackEvent', category, action]);
            }
            if (l3m.UA4 != 'UA-XXXXXXXX-X') {
                _gaq.push(['t4._trackEvent', category, action]);
            }
            if (l3m.UA5 != 'UA-XXXXXXXX-X') {
                _gaq.push(['t5._trackEvent', category, action]);
            }
            if (l3m.UAPath1 != 'UA-XXXXXXXX-X') {
                _gaq.push(['tPath1._trackEvent', category, action]);
            }
        }
    }
    else {
        if (l3m.CloudCodeSwitch == 'on') {
            _gaq.push(['t2._trackEvent', category, action, optLabel, optValue]);
        }
        if (l3m.InlineCodeSwitch == 'on') {
            if (l3m.UA != 'UA-XXXXXXXX-X') {
                _gaq.push(['_trackEvent', category, action, optLabel, optValue]);
            }
            if (l3m.UA3 != 'UA-XXXXXXXX-X') {
                _gaq.push(['t3._trackEvent', category, action, optLabel, optValue]);
            }
            if (l3m.UA4 != 'UA-XXXXXXXX-X') {
                _gaq.push(['t4._trackEvent', category, action, optLabel, optValue]);
            }
            if (l3m.UA5 != 'UA-XXXXXXXX-X') {
                _gaq.push(['t5._trackEvent', category, action, optLabel, optValue]);
            }
            if (l3m.UAPath1 != 'UA-XXXXXXXX-X') {
                _gaq.push(['tPath1._trackEvent', category, action, optLabel, optValue]);
            }
        }
    }
    return category;
};

l3m.replaceWithUnderscores = function (value) {
    ///<summary>Function to replace carriage-returns, line-feeds, and white spaces with underscores between words
    ///<para>Pass a String value which can have carriage-returns, line-feeds, and spaces</para>
    ///<para>returns the value with underscores in place.</para>
    ///</summary>
    value = jQuery.trim(value);
    if (value != "") {
        value = value.replace(/\s+/g, ' ');
        value = value.replace(/-/g, ' ');
        value = value.replace(/ /g, '_');
    }
    return value;
};

//============================================
//Begin Dynamically load jQuery

if ((typeof jQuery == 'undefined') && (l3mDomain != 'alumni.du.edu')) {
    var jq = document.createElement('script');
    jq.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.js';
    jq.onload = function () { initJQuery(); };
    var h = document.getElementsByTagName('head')[0];
    h.appendChild(jq);
}
else {
    initJQuery();
}

//End ofDynamically load jQuery
//============================================

l3m.trackSocial = function (link, linkName, e) {
    var href = jQuery(link).attr('href');
    var category = 'Social Link';
    var action = linkName;
    var label = l3mDomain + l3m.PathNameCanonical;
    var onClickHandler = jQuery(link).attr('onclick');
    jQuery(link).removeAttr('onclick');
    if (jQuery(link).attr('target') !== null && jQuery(link).attr('target') !== '_blank') {
        e.preventDefault();
    }
    l3m.trackEvent(category, action, label);
    jQuery(link).click(onClickHandler);
    if (jQuery(link).attr('target') !== null && jQuery(link).attr('target') !== '_blank') {
        setTimeout(function () {
            window.location = href;
        }, 500);
    }
};

l3m.getBaseDomain = function (domain) {
    var result = '';
    var idx = -1;
    idx = domain.toString().lastIndexOf('.');
    if (idx != -1) {
        result = domain.toString().slice(idx);
        domain = domain.toString().slice(0, idx);
    }
    idx = domain.toString().lastIndexOf('.');
    if ((idx != -1) && (result != '')) {
        result = domain.toString().slice(idx) + result;
    } else if (result != '') {
        result = '.' + domain + result;
    }

    return result;
};

l3m.generateLinkMethods = function (href) {
    if (l3m.CloudCodeSwitch == 'on') {
        _gaq.push(['t2._link', href]);
    }
    if (l3m.InlineCodeSwitch == 'on') {
        if (l3m.UA != 'UA-XXXXXXXX-X') {
            _gaq.push(['_link', href]);
            return false;
        }
        if (l3m.UA3 != 'UA-XXXXXXXX-X') {
            _gaq.push(['t3._link', href]);
            return false;
        }
        if (l3m.UA4 != 'UA-XXXXXXXX-X') {
            _gaq.push(['t4._link', href]);
            return false;
        }
        if (l3m.UA5 != 'UA-XXXXXXXX-X') {
            _gaq.push(['t5._link', href]);
            return false;
        }
    }
    return href;
};

l3m.getDocumentName = function(href) {
    var result = '';
    var start = href.toString().lastIndexOf('/') + 1;
    if (start > -1) {
        result = href.toString().substring(start, href.length + 1);
    }
    return result;
};

function initJQuery() {
    if (window.jQuery) {
        jQuery(document).ready(function () {
            var stuff = '';
            var category = '';
            var action = '';
            var label = '';

            //l3m.loadCrazyEgg();

            var jQueryVersion = jQuery().jquery;

            //=============================================
            // Signals of Intent for Downloads
            jQuery('a[href$=".pdf"]').click(function () {
              category = 'Document Access';
              action = 'pdf';
              label = l3m.getDocumentName(this.href) != '' ? l3m.getDocumentName(this.href) : l3mDomain + l3mPathName;
              l3m.trackEvent(category, action, label);
              // Matt: Added Universal Tracking Events
              if (l3m.UTCodeSwitch == 'on') _duTracker('duMainTracker.send', 'event', category, action, label);
              if(l3m.UTCodeSwitchPath == 'on') _duTracker('duPathTracker.send', 'event', category, action, label);
            });
            jQuery('a[href$=".doc"]').click(function (e) {
              category = 'Document Access';
              action = 'doc';
              label = l3m.getDocumentName(this.href) != '' ? l3m.getDocumentName(this.href) : l3mDomain + l3mPathName;
              l3m.trackEvent(category, action, label);
              // Matt: Added Universal Tracking Events
              if (l3m.UTCodeSwitch == 'on') _duTracker('duMainTracker.send', 'event', category, action, label);
              if(l3m.UTCodeSwitchPath == 'on') _duTracker('duPathTracker.send', 'event', category, action, label);
            });
            jQuery('a[href$=".xls"]').click(function () {
              category = 'Document Access';
              action = 'xls';
              label = l3mDomain + l3mPathName;
              l3m.trackEvent(category, action, label);
              // Matt: Added Universal Tracking Events
              if (l3m.UTCodeSwitch == 'on') _duTracker('duMainTracker.send', 'event', category, action, label);
              if(l3m.UTCodeSwitchPath == 'on') _duTracker('duPathTracker.send', 'event', category, action, label);
            });
            jQuery('a[href^="mailto:"]').click(function () {
              category = 'Email Address Clicks';
              action = 'mailto';
              label = l3mDomain + l3mPathName;
              l3m.trackEvent(category, action, label);
              // Matt: Added Universal Tracking Events
              if (l3m.UTCodeSwitch == 'on') _duTracker('duMainTracker.send', 'event', category, action, label);
              if(l3m.UTCodeSwitchPath == 'on') _duTracker('duPathTracker.send', 'event', category, action, label);
            });
            // End Downloads
            //=============================================


            jQuery('a').click(function (e) {
                var href = this.getAttribute('href');
                if (href != '#' && href.indexOf('javascript') == -1) {
                    // Per Tara Email 03/21/2013 4:10 PM - Details on DU Goals - Pioneer Application Events
                    //http://www.du.edu/apply/admission/apply/firstyear/index.html
                    if (href.indexOf('uofdenver.org') > -1) {
                        category = 'Pioneer Application Link';
                        action = l3mDomain + l3m.PathNameCanonical;
                        label = href;
                        l3m.trackEvent(category, action, label);
                        // Matt: Added Universal Tracking Events
                        if (l3m.UTCodeSwitch == 'on') _duTracker('duMainTracker.send', 'event', category, action, label);
                        if(l3m.UTCodeSwitchPath == 'on') _duTracker('duPathTracker.send', 'event', category, action, label);
                    }
                    // Per Tara Email 03/21/2013 4:10 PM - Details on DU Goals - Common Application Events
                    //http://www.du.edu/apply/admission/apply/firstyear/index.html
                    if (href.indexOf('commonapp.org') > -1) {
                        category = 'Common Application Link';
                        action = l3mDomain + l3m.PathNameCanonical;
                        label = href;
                        l3m.trackEvent(category, action, label);
                        // Matt: Added Universal Tracking Events
                        if (l3m.UTCodeSwitch == 'on') _duTracker('duMainTracker.send', 'event', category, action, label);
                        if(l3m.UTCodeSwitchPath == 'on') _duTracker('duPathTracker.send', 'event', category, action, label);
                    }
										// Per Tara Email 07/26/2013 9:04 AM - Details on DU Goals - Visit Schedule Events
                    //https://du-uga.edu.185r.net/Event/
                    if (href.indexOf('du-uga.edu.185r.net') > -1) {
                        category = 'Visit Schedule Link';
                        action = l3mDomain + l3m.PathNameCanonical;
                        label = href;
                        l3m.trackEvent(category, action, label);
                      // Matt: Added Universal Tracking Events
                      if (l3m.UTCodeSwitch == 'on') _duTracker('duMainTracker.send', 'event', category, action, label);
                      if(l3m.UTCodeSwitchPath == 'on') _duTracker('duPathTracker.send', 'event', category, action, label);
                    }
                    // Per Tara Email 03/28/2013 9:20 AM - DU & Delta To-Dos - Click Event for du-csm.symplicity.com
                    if (href.indexOf('du-csm.symplicity.com') > -1) {
                        category = 'Pioneer Careers';
                        action = l3mDomain + l3m.PathNameCanonical;
                        label = href;
                        l3m.trackEvent(category, action, label);
                      // Matt: Added Universal Tracking Events
                      if (l3m.UTCodeSwitch == 'on') _duTracker('duMainTracker.send', 'event', category, action, label);
                      if(l3m.UTCodeSwitchPath == 'on') _duTracker('duPathTracker.send', 'event', category, action, label);
                    }
                    //Per Tara Tasks 4/6/2013 4:01 PM - Ramaon - Web Analytics Tasks - DU - make social more generic
                    if (href.split('?')[0].indexOf('facebook.com') > -1) {
                        l3m.trackSocial(jQuery(this), 'Facebook', e);
                      // Matt: Added Universal Tracking Social
                      if (l3m.UTCodeSwitch == 'on') _duTracker('duMainTracker.send', 'social', 'Facebook', 'link-out', document.location);
                      if(l3m.UTCodeSwitchPath == 'on') _duTracker('duPathTracker.send', 'social', 'Facebook', 'link-out', document.location);
                    }
                    if (href.split('?')[0].indexOf('twitter.com') > -1) {
                        l3m.trackSocial(jQuery(this), 'Twitter', e);
                      // Matt: Added Universal Tracking Social
                      if (l3m.UTCodeSwitch == 'on') _duTracker('duMainTracker.send', 'social', 'Twitter', 'link-out', document.location);
                      if(l3m.UTCodeSwitchPath == 'on') _duTracker('duPathTracker.send', 'social', 'Twitter', 'link-out', document.location);
                    }
                    if (href.split('?')[0].indexOf('www.flickr.com') > -1) {
                        l3m.trackSocial(jQuery(this), 'Flickr', e);
                      // Matt: Added Universal Tracking Social
                      if (l3m.UTCodeSwitch == 'on') _duTracker('duMainTracker.send', 'social', 'Flickr', 'link-out', document.location);
                      if(l3m.UTCodeSwitchPath == 'on') _duTracker('duPathTracker.send', 'social', 'Flickr', 'link-out', document.location);
                    }
                    if (href.split('?')[0].indexOf('youtube.com') > -1) {
                        l3m.trackSocial(jQuery(this), 'YouTube', e);
                      // Matt: Added Universal Tracking Social
                      if (l3m.UTCodeSwitch == 'on') _duTracker('duMainTracker.send', 'social', 'YouTube', 'link-out', document.location);
                      if(l3m.UTCodeSwitchPath == 'on') _duTracker('duPathTracker.send', 'social', 'YouTube', 'link-out', document.location);
                    }
                    if (href.split('?')[0].indexOf('scribd.com') > -1) {
                        l3m.trackSocial(jQuery(this), 'Scribd', e);
                      // Matt: Added Universal Tracking Social
                      if (l3m.UTCodeSwitch == 'on') _duTracker('duMainTracker.send', 'social', 'Scribd', 'link-out', document.location);
                      if(l3m.UTCodeSwitchPath == 'on') _duTracker('duPathTracker.send', 'social', 'Scribd', 'link-out', document.location);
                    }
                    //Per Tara Email 05/10/2013 10:56 AM - RE: DU Followups - add additional social sites
                    if (href.split('?')[0].indexOf('pinterest.com') > -1) {
                        l3m.trackSocial(jQuery(this), 'Pinterest', e);
                      // Matt: Added Universal Tracking Social
                      if (l3m.UTCodeSwitch == 'on') _duTracker('duMainTracker.send', 'social', 'Pinterest', 'link-out', document.location);
                      if(l3m.UTCodeSwitchPath == 'on') _duTracker('duPathTracker.send', 'social', 'Pinterest', 'link-out', document.location);
                    }
                    if (href.split('?')[0].indexOf('vimeo.com') > -1) {
                        l3m.trackSocial(jQuery(this), 'Vimeo', e);
                      // Matt: Added Universal Tracking Social
                      if (l3m.UTCodeSwitch == 'on') _duTracker('duMainTracker.send', 'social', 'Vimeo', 'link-out', document.location);
                      if(l3m.UTCodeSwitchPath == 'on') _duTracker('duPathTracker.send', 'social', 'Vimeo', 'link-out', document.location);
                    }
                    if (href.split('?')[0].indexOf('linkedin.com') > -1) {
                        l3m.trackSocial(jQuery(this), 'LinkedIn', e);
                      // Matt: Added Universal Tracking Social
                      if (l3m.UTCodeSwitch == 'on') _duTracker('duMainTracker.send', 'social', 'LinkedIn', 'link-out', document.location);
                      if(l3m.UTCodeSwitchPath == 'on') _duTracker('duPathTracker.send', 'social', 'LinkedIn', 'link-out', document.location);
                    }
                    if (href.split('?')[0].indexOf('plus.google.com') > -1) {
                        l3m.trackSocial(jQuery(this), 'Google+', e);
                      // Matt: Added Universal Tracking Social
                      if (l3m.UTCodeSwitch == 'on') _duTracker('duMainTracker.send', 'social', 'Google+', 'link-out', document.location);
                      if(l3m.UTCodeSwitchPath == 'on') _duTracker('duPathTracker.send', 'social', 'Google+', 'link-out', document.location);
                    }

                    // Per Tara Email 03/21/2013 4:10 PM - Details on DU Goals - Navigation to DU Colleges
                    // AND Per Tara Email 4/3/2013 10:32 AM - DU tasks ...
                    if ((l3mPathName == '/learn/undergraduates/degreeprograms.html') || (l3mPathName == '/learn/graduates/degreeprograms/index.html') || (l3mPathName == '/learn/graduates/degreeprograms/')) {
                        if (jQuery(this).parents('#programGrid').length == 1) {
                            e.preventDefault();
                            ////Tables
                            // IE8 and lower > .text().trim() IS NOT CHAINABLE  > should be: jQuery.trim(jQuery(this).parents('div.expandListItem').children('h5').text());
                            //http://api.jquery.com/jQuery.trim/
                            //http://stackoverflow.com/questions/3439316/ie8-and-jquerys-trim
                            category = jQuery.trim(jQuery(this).parents('div.expandListItem').children('h5').text());
                            if (jQuery.trim(jQuery(this).parents('div.subContent').children('h6').text()) != '') {
                                if (jQuery.trim(jQuery(this).text() != jQuery(this).parents('div.subContent').children('h6').text())) {
                                    action = l3m.replaceWithUnderscores(jQuery.trim(jQuery(this).parents('div.subContent').children('h6').text())) + '-' + l3m.replaceWithUnderscores(jQuery.trim(jQuery(this).text()));
                                } else {
                                    action = l3m.replaceWithUnderscores(jQuery.trim(jQuery(this).parents('div.subContent').children('h6').text()));
                                }
                            } else {
                                if (jQuery.trim(jQuery(this).text()) != jQuery.trim(jQuery(this).parents('div.expandListItem').children('h5').text())) {
                                    action = l3m.replaceWithUnderscores(jQuery.trim(jQuery(this).parents('div.expandListItem').children('h5').text())) + "-" + l3m.replaceWithUnderscores(jQuery.trim(jQuery(this).text()));
                                } else {
                                    action = l3m.replaceWithUnderscores(jQuery.trim(jQuery(this).text()));
                                }
                            }
                            label = this.href;
                            l3m.trackEvent(category, action, label);
                          // Matt: Added Universal Tracking Events
                          if (l3m.UTCodeSwitch == 'on') _duTracker('duMainTracker.send', 'event', category, action, label);
                          if(l3m.UTCodeSwitchPath == 'on') _duTracker('duPathTracker.send', 'event', category, action, label);
                            setTimeout(function () {
                                window.location = href;
                            }, 200);
                        }
                    }
                    // Per Tara Email 03/21/2013 4:10 PM - Details on DU Goals - Navigation to DU Colleges
                    // AND Per Tara Email 4/3/2013 10:32 AM - DU tasks ...
                    if ((l3mPathName == '/learn/undergraduates/schoolsandcolleges.html') || (l3mPathName == '/learn/graduates/schoolsandcolleges.html')) {
                        if (jQuery(this).parents('div').attr('class') == 'expandListItemContent') {
                            e.preventDefault();
                            //Div(s)
                            category = jQuery(this).parents('div.expandListItem').children('h5').text();
                            action = l3m.replaceWithUnderscores(category) + '-' + l3m.replaceWithUnderscores(jQuery(this).text());
                            label = this.href;
                            l3m.trackEvent(category, action, label);
                          // Matt: Added Universal Tracking Events
                          if (l3m.UTCodeSwitch == 'on') _duTracker('duMainTracker.send', 'event', category, action, label);
                          if(l3m.UTCodeSwitchPath == 'on') _duTracker('duPathTracker.send', 'event', category, action, label);
                            setTimeout(function () {
                                window.location = href;
                            }, 200);
                        }
                    }

                    // Cross Domain _link() method implementation
                    // this.hostname
                    // Make this the last conditional because it has a RETURN statement.
                    if (l3m.getBaseDomain(this.hostname) != l3m.getBaseDomain(l3mDomain)) {
                        var domainId = l3m.getDomainId(this.hostname, l3m.MultiDim);
                        if (domainId == -1) {
                            var outboundDomain = this.hostname.replace(/www./g, '');
                            domainId = l3m.getDomainId(outboundDomain, l3m.MultiDim);
                            if (domainId > -1) {
                                stuff = 'stuff';
                                l3m.generateLinkMethods(href);
                            }
                        }
                    }
                }
            });
						
				//Matt; Added form submission event tracking 8/21/2013
				// Form Submission Event
        		jQuery('form').submit(function (e) {
				  if (l3mDomain == 'library.du.edu') {
				    if (!l3m.formSubmitted) {
					  e.preventDefault();
                      category = 'FormSubmission';  // or some other value of your choice
                      action = this.id !== '' ? this.id : this.name;  // or some other value of your choice
                      label = l3mDomain + l3m.PathNameCanonical;  // or some other value of your choice
                      l3m.trackEvent(category, action, label);
                      // Matt: Added Universal Tracking Events
                      if (l3m.UTCodeSwitch == 'on') _duTracker('duMainTracker.send', 'event', category, action, label);
                      if(l3m.UTCodeSwitchPath == 'on') _duTracker('duPathTracker.send', 'event', category, action, label);
                      l3m.submitForm(jQuery(this));
					}
				  }
        		});
        });
    }
}
