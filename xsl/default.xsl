<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE xsl:stylesheet SYSTEM "http://commons.omniupdate.com/dtd/standard.dtd">
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:ou="http://omniupdate.com/XSL/Variables" exclude-result-prefixes="ou">

<xsl:import href="import/breadcrumbs.xsl" />
<xsl:import href="import/navigation.xsl" />
<xsl:import href="import/homepage.xsl" />
<xsl:import href="import/academicunits.xsl" />
<xsl:import href="import/general.xsl" />
<xsl:import href="import/microsite.xsl" />
<xsl:import href="import/media.xsl" />
<xsl:import href="import/base64.xsl" />
<xsl:include href="import/ou-forms.xsl" />

<xsl:output method="xml" indent="yes" encoding="UTF-8" omit-xml-declaration="yes" />

<!-- Initialize OU Variables -->
<xsl:param name="ou:action" />
<xsl:param name="ou:path" />
<xsl:param name="ou:filename" />
<xsl:param name="ou:dirname" />
<xsl:param name="ou:root" />
<xsl:param name="ou:site" />
<xsl:param name="ou:httproot" />

<!-- Initialize OU Directory Variables -->
<xsl:param name="ou:watermarkClass" />
<xsl:param name="ou:palette" />
<xsl:param name="ou:landscapeClass" />

<xsl:param name="ou:searchCollection" />
<xsl:param name="searchCollection" select="$ou:searchCollection" />
<xsl:param name="ou:googleAlternateAnalytics" />

<xsl:param name="ou:breadcrumbParentLimit"/>
<xsl:param name="breadcrumbParentLimit" select="number($ou:breadcrumbParentLimit)"/>
<xsl:param name="ou:resource-http-root"/>
<xsl:param name="ou:site-doc-root"/>
<xsl:param name="ou:canonical-root"/>

<!-- Parameters used by imported stylesheets -->
<xsl:param name="protocol">
	<xsl:choose>
  	<xsl:when test="contains($ou:resource-http-root,'https://')">https://</xsl:when>
    <xsl:otherwise>http://</xsl:otherwise>
  </xsl:choose>
</xsl:param>
<xsl:param name="domain">www.du.edu</xsl:param>
<xsl:param name="dirname">
	<xsl:choose>
		<xsl:when test="string-length($ou:dirname) = 1">
			<xsl:value-of select="$ou:dirname" />
		</xsl:when>
		<xsl:otherwise>
			<xsl:value-of select="concat($ou:dirname,'/')" />
		</xsl:otherwise>
	</xsl:choose>
</xsl:param>
<xsl:param name="showFullHeader" select="/document/config/parameter[@name='showFullHeader']/option[@selected='true']/@value"/>
<xsl:param name="breadcrumbType" select="/document/config/parameter[@name='breadcrumbType']/option[@selected='true']/@value"/>
<xsl:param name="showFullFooter" select="/document/config/parameter[@name='showFullFooter']/option[@selected='true']/@value"/>

<xsl:param name="breadcrumbTitle" select="/document/config/parameter[@name='breadcrumbTitle']"/>
<xsl:param name="contentTitle" select="/document/config/parameter[@name='contentTitle']"/>
<xsl:param name="contentSubtitle" select="/document/config/parameter[@name='contentSubtitle']"/>

<xsl:param name="showLandscape" select="/document/config/parameter[@name='showLandscape']/option[@selected='true']/@value"/>
<xsl:param name="landscapeClass">
	<xsl:choose>
  	<xsl:when test="string-length($ou:landscapeClass) > 0">
    	<xsl:choose>
      	<xsl:when test="string-length(/document/config/parameter[@name='landscapeClass']) > 0">
        	<xsl:value-of select="if ( matches($ou:landscapeClass, /document/config/parameter[@name='landscapeClass']) ) then ($ou:landscapeClass) else (/document/config/parameter[@name='landscapeClass'])"/>
        </xsl:when>
        <xsl:otherwise><xsl:value-of select="$ou:landscapeClass" /></xsl:otherwise>
      </xsl:choose>
    </xsl:when>
    <xsl:otherwise><xsl:value-of select="/document/config/parameter[@name='landscapeClass']" /></xsl:otherwise>
  </xsl:choose>
</xsl:param>

<xsl:param name="showGallery" select="/document/config/parameter[@name='showGallery']/option[@selected='true']/@value"/>

<xsl:param name="template" select="/document/@template"/>
<xsl:param name="format" select="/document/@format"/>
<xsl:param name="palette" select="if (string-length($ou:palette) > 0) then ($ou:palette) else ('palette_01')"/>
<xsl:param name="mediatype" select="if (/document/@mediatype) then (/document/@mediatype) else ('none')"/>
<xsl:param name="mediaUID" select="translate(string(current-dateTime()),'-.:','')" />
<!-- Custom Hero Variables -->
<xsl:param name="showCustomHero" select="if (/document/config/parameter[@name='showCustomHero']) then (/document/config/parameter[@name='showCustomHero']/option[@selected='true']/@value) else ('false')"/>
<xsl:param name="customHeroFile" select="if (/document/config/parameter[@name='customHeroFile']) then (concat('/_resources/includes/', /document/config/parameter[@name='customHeroFile'])) else ('')"/>
<xsl:param name="customHeroStyles" select="if (/document/config/parameter[@name='customHeroStyles']) then (/document/config/parameter[@name='customHeroStyles']) else ('')"/>

<!-- Determine which xsl template to call -->
<xsl:template match="/">
	<xsl:choose>
		<xsl:when test="$template = 'homepage'">
			<xsl:call-template name="homepage" />
		</xsl:when>
		<xsl:when test="$template = 'academicunit'">
			<xsl:call-template name="academicunits" />
		</xsl:when>
		<xsl:when test="$template = 'microsite'">
			<xsl:call-template name="microsite" />
		</xsl:when>
		<xsl:otherwise><xsl:call-template name="general" /></xsl:otherwise>
	</xsl:choose>
</xsl:template>

<!-- Generic use Templates -->

<!-- header scripts for all pages -->
<xsl:template name="header_scriptblock">
  <script src="https://www.google.com/jsapi">//</script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js">//</script>
  <script src="{$ou:resource-http-root}/_resources/scripts/plugins/jquery.jFav_v1.0.js">//</script>
  <script src="{$ou:resource-http-root}/_resources/scripts/scripts.js" >//</script>
  <script>
    var domain = "<xsl:value-of select="$ou:resource-http-root"/>";
    var skinUrl=domain+"/_resources/scripts/flash/skins/du_player_skin.zip", root=domain, shortRoot=root;
  </script>
  <script src="{$protocol}ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js">//</script>
  <script src="{$ou:resource-http-root}/_resources/scripts/plugins/jquery.ajaxMedia3.0.js">//</script>
  <script src="{$ou:resource-http-root}/_resources/scripts/plugins/jquery.navigationize.js">//</script>
	<xsl:if test="$ou:action = 'prv'"><script src="{$ou:resource-http-root}/_resources/scripts/ouPreviewNav.js">//</script></xsl:if>
  
  <!-- FancyBox script for LDP Galleries -->
  <script src="{$ou:resource-http-root}/_resources/scripts/plugins/fancybox/jquery.fancybox.pack.js">//</script>
  <script src="{$ou:resource-http-root}/_resources/scripts/plugins/fancybox/jquery.mousewheel-3.0.6.pack.js">//</script>
  <link rel="stylesheet" href="{$ou:resource-http-root}/_resources/scripts/plugins/fancybox/jquery.fancybox.css" type="text/css" media="screen" />
  <xsl:if test="$ou:action = 'prv'"><script src="{$ou:resource-http-root}/_resources/scripts/ouPreviewNav.js">ouPreviewNav("<xsl:value-of select="concat($ou:site-doc-root,$dirname)"/>");</script></xsl:if>
  <!-- Additional Scripts -->
  <xsl:choose>
    <xsl:when test="$template = 'currentstudents'">
      <script src="{$ou:resource-http-root}/_resources/scripts/scripts-currentstudents.js" >//</script>
    </xsl:when>
    <xsl:when test="$template = 'azlist'">
      <script>
        $(document).ready(
          function(){
            $("#az_tabs li").click(
              function(){
                var $this = $(this);
                var stuff = this.id+"_stuff";
                if(!$this.is('.current')){
                  $("#az_tabs li.current").removeClass('current');
                  $this.addClass('current');
                  $("ul.showme").removeClass('showme').addClass('hideme');
                  $("#"+stuff).removeClass('hideme').addClass('showme');
                }
                return false;
              }
            );
            $("#inline_marketing li").click(function(){
              var $this = $(this);
              var stuff = this.id+"_stuff";
              if(!$this.is('.current')){
                $("#inline_marketing li.current").removeClass('current');
                $this.addClass('current');
                $("#inline_marketing div.showme").removeClass('showme').addClass('hideme');
                $("#"+stuff).removeClass('hideme').addClass('showme');
              }
              return false;
            }
          );
        });
      </script>
    </xsl:when>
    <xsl:when test="$template = 'contactus'">
  
      <link href="{$ou:resource-http-root}/_resources/css/contact-us.css" rel="stylesheet" type="text/css" media="screen" />
      <link href="{$ou:resource-http-root}/_resources/css/jquery.validationEngine.css" rel="stylesheet" type="text/css" media="screen" />
      <script src="{$ou:resource-http-root}/_resources/scripts/scripts_contact_us.js">//</script>
			<script src="{$ou:resource-http-root}/_resources/scripts/plugins/jquery.validationEngine-en.js">//</script>
      <script src="{$ou:resource-http-root}/_resources/scripts/plugins/jquery.validationEngine.js">//</script>
      <script>
      //<![CDATA[
        $(document).ready(function() {
          $("#contactForm").validationEngine()
          $("#submitButton").click(function(){
            if($("#contactForm").validationEngine({returnIsValid:true})){
              $("#contactForm").trigger("submit")
            }
            return false
          })
          if(getUrlVars()["error"]){alert("There was an error processing your form.\r\nPlease try again.");}
        });
      //]]>
      </script>
  
    </xsl:when>
    <xsl:when test="$template = 'sitemap'">
      <style media="screen" type="text/css">
        #mainContent ul {float:left; width:188px; margin:10px 0; list-style:none;}
        #mainContent ul li {padding:10px 0 2px 0;}
        #mainContent ul li.level2 {padding:2px 0 2px 10px;}
        #mainContent ul li.level3 {padding:2px 0 2px 20px;}
      </style>
    </xsl:when>
    <xsl:when test="$template = 'maps'">
      <script src="{$ou:resource-http-root}/_resources/scripts/maps.js">//</script>
      <script src="{$ou:resource-http-root}/_resources/scripts/mapsMenus.js">//</script>
      <script src="{$ou:resource-http-root}/_resources/scripts/extmaptypecontrol_packed.js">//</script>
    </xsl:when>
    <xsl:when test="$template = 'webcams'">
    	<link rel="stylesheet" type="text/css" href="{$ou:resource-http-root}/lib/css/global/webcam.css" media="screen" />
    </xsl:when>
    <xsl:when test="$ou:watermarkClass = 'summer' and $ou:dirname = '/courses' and $ou:action ='pub'">
      <script><xsl:text disable-output-escaping="yes">
				$(document).ready(function() {
					$("#coursesearchsidebar").bind("submit", function(){if($('#coursesearchquery').val().length &lt; 3){$('#coursesearcherror').html("You must enter at least 3 characters to search on.").show();$('#coursesearchquery').focus();return false;}else{showLoader();}});
					$("#coursesearch").bind("submit", function(){if($('#coursesearchquery').val().length &lt; 3){$('#coursesearcherror').html("You must enter at least 3 characters to search on.").show();$('#coursesearchquery').focus();return false;}else{showLoader();}});
				});</xsl:text>
      </script>
    </xsl:when>
    <xsl:when test="$ou:watermarkClass = 'tipss'">
			<link href="{$ou:site-doc-root}/_resources/css/tipss.css" rel="stylesheet" type="text/css" media="screen" />
			<script src="{$ou:site-doc-root}/_resources/scripts/tipss.js">//</script>
		</xsl:when>
  </xsl:choose>
  <script>
    var docstate = "<xsl:value-of select="$ou:action"/>";
    $(document).ready(function() {
	  <xsl:if test="$ou:action = 'prv'">ouPreviewNav("<xsl:value-of select="concat($ou:site-doc-root,$dirname)"/>");</xsl:if>
      var navparent="";
      if(docstate == 'pub')
        if(navparent != ''){$("#"+navparent).navigationize(navparent);}else if($("#nav_bob").is(":visible")){$("#nav_bob").navigationize("nav_bob");}
      <xsl:if test="$template != 'currentstudents' and $template != 'maps'">
      $(document).ajaxMedia({rootPath:root, rootPathShort:shortRoot, playerPath:'/_resources/scripts/flash/players/StrobeMediaPlayback.swf', skinPath:'/_resources/scripts/flash/skins/du_player_skin.zip'});
      </xsl:if>
    });
  </script>
  <!-- Gallery Script -->
  <xsl:if test="$showGallery = 'true'">
  <script src="{$ou:resource-http-root}/_resources/scripts/hero-slideshow.js">//</script>
  </xsl:if>
  <!-- Header Search -->
  <xsl:if test="$showFullHeader = 'false'">
    <script>
      var glbSearch = "<xsl:value-of select="lower-case(normalize-space($searchCollection))"/>";
      <xsl:text disable-output-escaping="yes">
      //<![CDATA[
      function HandleSearch(e, text){var CharCode = e.keyCode? e.keyCode : e.charCode; if(CharCode == 13){DoOtherSearch(text); return false;}else{return true;}}
      function DoOtherSearch(text){if(text != 'Search' && text != ''){location.href='http://search.du.edu/search?site='+glbSearch+'&client='+glbSearch+'&proxystylesheet='+glbSearch+'&output=xml_no_dtd&lr=&ie=utf8&oe=utf8&q=' + text.replace(' ', '+');}}
      function DoDUSearch(text){if(text != 'Search' && text != ''){location.href='http://search.du.edu/search?site=du_collection&client=du_frontend&proxystylesheet=du_frontend&output=xml_no_dtd&lr=&ie=utf8&oe=utf8&q=' + text.replace(' ', '+');}}
      //]]>
      </xsl:text>
    </script>
  </xsl:if>
  <!-- Media: Video -->
  <xsl:if test="$mediatype = 'video'">
    <xsl:call-template name="media">
      <xsl:with-param name="htmlHead">true</xsl:with-param>
      <xsl:with-param name="mediaUID" select="$mediaUID" />
    </xsl:call-template>
  </xsl:if>
  <!-- Analytics Code -->
  <xsl:if test="$ou:action ='pub' and ($domain != 'devweb.du.edu' and $domain != 'stage.du.edu')">
  	<xsl:choose>
    	<xsl:when test="string-length($ou:googleAlternateAnalytics) = 0 or  $ou:googleAlternateAnalytics = '0'">
        <xsl:processing-instruction name="php">
        include($_SERVER['DOCUMENT_ROOT'].'/_resources/includes/analytics.inc');
        </xsl:processing-instruction>
      </xsl:when>
      <xsl:otherwise>
      	<script>
					var altGoogleAcct = "<xsl:value-of select="$ou:googleAlternateAnalytics"/>";
				</script>
        <xsl:processing-instruction name="php">
        include($_SERVER['DOCUMENT_ROOT'].'/_resources/includes/analytics-multi.inc');
        </xsl:processing-instruction>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:if>
  <!-- Canonical URLs -->
  <xsl:if test="$ou:filename = 'index.html'">
	  <xsl:choose>
		  <xsl:when test="$ou:dirname = '/'"><link rel="canonical" hreflang="en-US" href="{$ou:httproot}"/></xsl:when>
		  <xsl:otherwise><link rel="canonical" hreflang="en-US" href="{concat($ou:httproot,substring-after($ou:dirname,'/'),'/')}"/></xsl:otherwise>
	  </xsl:choose>
    
	  <!--script>
		  console.log('path:'+'<xsl:value-of select="$ou:path"/>');
		  console.log('filename:'+'<xsl:value-of select="$ou:filename"/>');
		  console.log('dirname:'+'<xsl:value-of select="$ou:dirname"/>');
		  console.log('root:'+'<xsl:value-of select="$ou:root"/>');
		  console.log('site:'+'<xsl:value-of select="$ou:site"/>');
		  console.log('httproot:'+'<xsl:value-of select="$ou:httproot"/>');
		  console.log('substring:'+'<xsl:value-of select="substring-after($ou:dirname,'/')"/>');
	  </script-->
  </xsl:if>
</xsl:template>

<!-- LDP Gallery Code -->
<xsl:template match="@* | node() | comment() | text()" mode="copy">
  <xsl:copy>
        <xsl:apply-templates select="@* | node() | comment() | text()" mode="copy"/>
  </xsl:copy>
</xsl:template>

<xsl:template match="gallery" mode="copy" >

    <xsl:variable name="gallery-name" select="./name"/>
    <xsl:variable name="gallery-created" select="./@created"/>
    <xsl:variable name="gallery-id" select="./@asset_id"/>
    
    <!-- if gallery is in <main> node then this code -->
    <ul class="gallerylist">
        <xsl:for-each select="images/image">
            <li>
                <a class="lightbox" href="{./@url}" title="{./caption}" rel="{$gallery-id}"><img src="{./thumbnail/@url}" width="{./thumbnail/width}" height="{./thumbnail/height}" alt="{./caption}" /></a>
            </li>
        </xsl:for-each>
    </ul>
    <br/>
    
    <!--  otherwise for right sidebar use this code -->
    
    <script>
	
	$(document).ready(function() { 
	  $("#rightlightbox").click(function() { 
		$.fancybox([
		
		  <xsl:for-each select="images/image">
			{
			'href': '<xsl:value-of select="./@url"/>',
			'title': '<xsl:value-of select="./caption"/>',
			'rel': '<xsl:value-of select="$gallery-id"/>' 
			},
          </xsl:for-each>
 
		], { 
		// fancybox options 
		'type' : 'image',
		'transitionIn'  : 'elastic',
		'transitionOut' : 'fade',
		'speedIn' : '500',
		'speedOut' : '500',	
		'titlePosition'  : 'inside',
		'titleFormat' : function(title, currentArray, currentIndex, currentOpts) {
		return 'Image ' + (currentIndex + 1) + ' / ' + currentArray.length + ' - ' + title + '';}
		}); // closes fancybox 
	  }); // closes click 
	}); // closes ready 

</script>
    
</xsl:template>

<!-- template match for forms now in ou-forms.xsl -->
<!--<xsl:template match="ouform" mode="copy"> 
	<xsl:call-template name="ouform" />
</xsl:template>-->

</xsl:stylesheet>
