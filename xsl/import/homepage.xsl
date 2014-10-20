<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE xsl:stylesheet SYSTEM "http://commons.omniupdate.com/dtd/standard.dtd">
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:ou="http://omniupdate.com/XSL/Variables"  xmlns:og="http://ogp.me/ns#" xmlns:fb="http://www.facebook.com/2008/fbml" xmlns:twitter="http://api.twitter.com/" exclude-result-prefixes="xs ou og fb twitter">
    
<xsl:param name="isAlert" select="/document/config/parameter[@name='alert']/option[@selected='true']/@value"/>
<xsl:param name="pageTitle"><xsl:value-of select="/document/title"/></xsl:param>

<xsl:template name="homepage" match="/">
	<xsl:choose>
		<xsl:when test="$isAlert = 'active'">
			<xsl:call-template name="alert" />
		</xsl:when>
		<xsl:when test="$isAlert = 'disabled'">
			<xsl:call-template name="st_homepage" />
		</xsl:when>
	</xsl:choose>
</xsl:template>



<xsl:template name="st_homepage">
    
    <xsl:variable name="close_html">&lt;/html&gt;</xsl:variable>
    
    <xsl:text disable-output-escaping="yes">&lt;!DOCTYPE HTML&gt;</xsl:text>
       <html>
       <head>
    
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>

      <title><xsl:value-of select="$pageTitle"/></title>
      
      <xsl:copy-of select="/document/meta/node()"/>
      <meta name="author" content="University of Denver"/>
      <meta name="Copyright" content="Copyright (c) 2014 University of Denver"/>
	  <meta name="p:domain_verify" content="013556edf2d1ad1f939949f37e000a24"/>
	  <meta name="msvalidate.01" content="734633DF3F913A1A3CEC61CA91D56628" />
      <!-- Twitter Card data -->
	  <xsl:text disable-output-escaping="yes">&lt;meta name="twitter:card" content="summary" /&gt;</xsl:text>
      <xsl:text disable-output-escaping="yes">&lt;meta name="twitter:site" content="@uofdenver" /&gt;</xsl:text>
      <xsl:text disable-output-escaping="yes">&lt;meta name="twitter:title" content="</xsl:text><xsl:value-of select="$pageTitle"/><xsl:text disable-output-escaping="yes">" /&gt;</xsl:text>
	  <xsl:text disable-output-escaping="yes">&lt;meta name="twitter:description" content="The oldest and largest private university in the Rocky Mountain region, DU offers innovative and rigorous undergraduate, graduate and professional programs. The University is distinguished by its hands-on learning opportunities, strong faculty-student collaboration and global perspective." /&gt;</xsl:text>
      <xsl:text disable-output-escaping="yes">&lt;meta name="twitter:creator" content="@uofdenver" /&gt;</xsl:text>
		   <xsl:text disable-output-escaping="yes">&lt;meta name="twitter:image:src" content="</xsl:text><xsl:value-of select="$ou:resource-http-root"/><xsl:text disable-output-escaping="yes">/_resources/images/avatars/t_150-250_120.jpg" /&gt;</xsl:text>
      <xsl:text disable-output-escaping="yes">&lt;meta name="twitter:domain" content="du.edu" /&gt;</xsl:text>

	  <!-- Open Graph data -->
	  <xsl:text disable-output-escaping="yes">&lt;meta property="og:type" content="website" /&gt;</xsl:text>
	  <xsl:text disable-output-escaping="yes">&lt;meta property="og:site_name" content="University of Denver" /&gt;</xsl:text>
	  <xsl:text disable-output-escaping="yes">&lt;meta property="og:locale" content="en_US" /&gt;</xsl:text>
      <xsl:text disable-output-escaping="yes">&lt;meta property="og:url" content="</xsl:text><xsl:value-of select="$ou:resource-http-root"/><xsl:text disable-output-escaping="yes">/" /&gt;</xsl:text>
      <xsl:text disable-output-escaping="yes">&lt;meta property="og:image" content="</xsl:text><xsl:value-of select="$ou:resource-http-root"/><xsl:text disable-output-escaping="yes">/_resources/images/avatars/facebook_150avatarpreview200x200.jpg" /&gt;</xsl:text>
	  <xsl:text disable-output-escaping="yes">&lt;meta property="og:title" content="</xsl:text><xsl:value-of select="$pageTitle"/><xsl:text disable-output-escaping="yes">" /&gt;</xsl:text>
      <xsl:text disable-output-escaping="yes">&lt;meta property="og:description" content="The oldest and largest private university in the Rocky Mountain region, DU offers innovative and rigorous undergraduate, graduate and professional programs. The University is distinguished by its hands-on learning opportunities, strong faculty-student collaboration and global perspective." /&gt;</xsl:text>
      <!--xsl:text disable-output-escaping="yes">&lt;meta property="fb:admins" content="25062563980" /&gt;</xsl:text-->

      <link rel="shortcut icon" href="{$ou:resource-http-root}/favicon.ico" sizes="16x16" type="image/x-icon"/>
      <link rel="shortcut icon" href="{$ou:resource-http-root}/du-webclip.gif" sizes="16x16 32x32 48x48 57x57 144x144" type="image/gif"/>
	  <link rel="canonical" hreflang="en-US" href="{$ou:httproot}"/>
	  <link rel="alternate" hreflang="x-default" href="{$ou:httproot}"/>
      <link id="css" rel="stylesheet" href="{$ou:resource-http-root}/_resources/css/style.css"/>
      <!--link rel="stylesheet" href="{$ou:resource-http-root}/_resources/css/style-microsite.css"/-->
      <link rel="stylesheet" href="{$ou:resource-http-root}/_resources/css/style-homepage.css"/>
      <link rel="stylesheet" href="{$ou:resource-http-root}/_resources/css/style-homepage-rwd.css"/>
	  <link rel="alternate" href="http://magazine.du.edu/feed" type="application/rss+xml" title="RSS"/>
      
      <xsl:text disable-output-escaping="yes">&lt;!--[if lt IE 9]&gt;</xsl:text>
      	<script src="http://html5shim.googlecode.com/svn/trunk/html5.js">//</script>
      	<link id="css" rel="stylesheet" href="{$ou:resource-http-root}/_resources/css/ie8.css"/>
      <xsl:text disable-output-escaping="yes">&lt;![endif]--&gt;</xsl:text>
      
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js">//</script>
	  <script src="{$ou:resource-http-root}/_resources/scripts/plugins/jquery.jFav_v1.0.js">//</script>
	  <script src="{$ou:resource-http-root}/_resources/scripts/scripts.js">//</script>
	  
	  <script src="{$ou:resource-http-root}/_resources/scripts/plugins/fancybox/jquery.fancybox.pack.js">//</script>
	  <script src="{$ou:resource-http-root}/_resources/scripts/plugins/fancybox/jquery.mousewheel-3.0.6.pack.js">//</script>
      <link rel="stylesheet" href="{$ou:resource-http-root}/_resources/scripts/plugins/fancybox/jquery.fancybox.css" type="text/css" media="screen"/>
		   
	  <script type="text/javascript">
	   <![CDATA[
	  	$(document).ready(function($){
			$('.block img').each(function(){ 
				$(this).removeAttr('height');
			});
			
			$("li.#mainNav").on("click", function() {
                $("#globalNav").slideToggle();
            });
            
            $("li.#search").on("click", function() {
                $(".searchContainer").slideToggle();
            });
		});
        ]]>
      </script>
      
      <!-- Analytics Code -->
      <xsl:if test="$ou:action ='pub'">
        <xsl:processing-instruction name="php">
        include($_SERVER['DOCUMENT_ROOT'].'/_resources/includes/analytics.inc');
        </xsl:processing-instruction>
      </xsl:if>
      <link href="{$ou:httproot}" title="University of Denver" rel="index"/>
      <a href="https://plus.google.com/118249362446445529016" rel="publisher" />
	  <link rel="stylesheet" type="text/css" href="{$ou:resource-http-root}/_resources/scripts/plugins/wow-slider/engine1/style.css" />
    </head>
    
    <body class="footerNoLandscape">
      <a class="hiddenFromViewer" href="#mainContent">Skip navigation</a>
      <xsl:choose>
        <xsl:when test="not($ou:action ='pub')">
          <xsl:value-of select="unparsed-text(concat($ou:resource-http-root, '/_resources/includes/headerFull.inc'))" disable-output-escaping="yes"/>
        </xsl:when>
        <!-- otherwise do a php include -->
        <xsl:otherwise>
          <xsl:processing-instruction name="php">
          include($_SERVER['DOCUMENT_ROOT'].'/_resources/includes/headerFull.inc');
          </xsl:processing-instruction>
        </xsl:otherwise>
      </xsl:choose>
      
      <section id="container">
          <section id="main" class="hpmain">
              <section id="row1">
                <figure class="block" id="mainblock">
                	<xsl:choose>
                      <!-- if the situation is preview, edit, compare, pull in the full global footer -->
                      <xsl:when test="not($ou:action ='pub')">
                      	  <img src="/media/images/home_main/placeholder.jpg" class="main_img" />
                          <figcaption class="main_img_caption">
                              This is a static placeholder, slideshow images come directly from Flickr
                          </figcaption>
                      </xsl:when>
                      <!-- otherwise do a php include -->
                      <xsl:otherwise>
                        <xsl:processing-instruction name="php">
                        include($_SERVER['DOCUMENT_ROOT'].'/_resources/includes/main_slider.inc');
                        </xsl:processing-instruction>
                      </xsl:otherwise>
                    </xsl:choose>
                </figure><!-- /mainblock -->              
                
                <aside class="block" id="mainlinks">
                	
                    <xsl:copy-of select="/document/content/mainlinks/node()"/>
                    
                    <section id="social_icons">
						
                        <a title="University of Denver on Facebook" href="http://www.facebook.com/uofdenver" target="_blank" class="facebook">
                            University of Denver on Facebook
                        </a>
						<a title="University of Denver on Twitter" href="http://www.twitter.com/uofdenver" target="_blank" class="twitter">
							University of Denver on Twitter
                        </a>
                        <a title="University of Denver on Flickr" href="http://www.flickr.com/photos/uofdenver" target="_blank" class="flickr">
							University of Denver on Flickr
                        </a>
                        <a title="University of Denver on YouTube" href="http://www.youtube.com/uofdenver" target="_blank" class="youtube">
							University of Denver on YouTube
                        </a>
                    </section><!-- /social_icons -->
                </aside><!-- /mainlinks -->
            </section><!-- /row1 -->
            
            <section id="row2">
                <section class="block" id="1">
                	<hgroup>
                    	<xsl:copy-of select="/document/content/block_1_header/node()"/>
                    </hgroup>
                    <article>
                    	<xsl:copy-of select="/document/content/block_1/node()"/>
                    </article>
                </section>
                <section class="block" id="2">
                	<hgroup>
                    	<xsl:copy-of select="/document/content/block_2_header/node()"/>
                    </hgroup>
                    <article>
                    	<xsl:copy-of select="/document/content/block_2/node()"/>
                    </article>
                </section>
                <section class="block" id="3">
                	<hgroup>
                    	<xsl:copy-of select="/document/content/block_3_header/node()"/>
                    </hgroup>
                    <article>
                    	<xsl:copy-of select="/document/content/block_3/node()"/>
                    </article>
                </section>
                <section class="block" id="4">
                	<hgroup>
                    	<xsl:copy-of select="/document/content/block_4_header/node()"/>
                    </hgroup>
                    <article>
                       <xsl:copy-of select="/document/content/block_4/node()"/>
                    </article>
                </section>
            </section><!-- /row2 -->
        </section><!-- /main -->    
        <div class="clear"><!--//--></div>
      </section><!-- /container -->
      
      
    
	  <footer id="globalFooter">
      <section id="footerLinksContainer">
        <xsl:choose>
          <!-- if the situation is preview, edit, compare, pull in the full global footer -->
          <xsl:when test="not($ou:action ='pub')">
            <xsl:value-of select="unparsed-text(concat($ou:resource-http-root, '/_resources/includes/fullFooterNav.inc'))" disable-output-escaping="yes"/>
          </xsl:when>
          <!-- otherwise do a php include -->
          <xsl:otherwise>
            <xsl:processing-instruction name="php">
            include($_SERVER['DOCUMENT_ROOT'].'/_resources/includes/fullFooterNav.inc');
            </xsl:processing-instruction>
          </xsl:otherwise>
        </xsl:choose>
        <div class="clear"><xsl:comment>//</xsl:comment></div>
        
        <section id="followList">
          <xsl:choose>
            <!-- if the situation is preview, edit, compare, pull in include -->
            <xsl:when test="not($ou:action ='pub')">
              <xsl:value-of select="unparsed-text(concat($ou:resource-http-root, '/_resources/includes/followListNav.inc'))" disable-output-escaping="yes"/>
            </xsl:when>
            <!-- otherwise do a php include -->
            <xsl:otherwise>
              <xsl:processing-instruction name="php">
              include($_SERVER['DOCUMENT_ROOT'].'/_resources/includes/followListNav.inc');
              </xsl:processing-instruction>
            </xsl:otherwise>
          </xsl:choose>
        </section>
        
        <nav id="subFooter">
          <xsl:choose>
            <!-- if the situation is preview, edit, compare, pull in the include -->
            <xsl:when test="not($ou:action ='pub')">
              <xsl:value-of select="unparsed-text(concat($ou:resource-http-root, '/_resources/includes/subFooterNav.inc'))" disable-output-escaping="yes"/>
            </xsl:when>
            <!-- otherwise do a php include -->
            <xsl:otherwise>
              <xsl:processing-instruction name="php">
              include($_SERVER['DOCUMENT_ROOT'].'/_resources/includes/subFooterNav.inc');
              </xsl:processing-instruction>
            </xsl:otherwise>
          </xsl:choose>
          <p>&copy; 2014 University of Denver. All rights reserved. <a href="{$protocol}{$domain}/privacy/" title="link to university privacy policy">Privacy.</a> The University of Denver is an equal opportunity affirmative action institution.<span style="display:none;"><xsl:comment> com.omniupdate.ob </xsl:comment><xsl:comment> /com.omniupdate.ob </xsl:comment></span></p>
        </nav>
      </section><!-- Section: footerLinksContainer -->
	</footer><!-- Footer: globalFooter -->
    
    <!-- survey code for page property include file -->
        
    <xsl:if test="/document/config/parameter[@name='showsurvey']/option[@value='yes' and @selected='true']">
        <xsl:if test="not($ou:action ='pub')">
          <xsl:value-of select="unparsed-text(concat($ou:resource-http-root, '/_resources/includes/survey.inc'))" disable-output-escaping="yes"/>
        </xsl:if>            
      <xsl:processing-instruction name="php">
      include($_SERVER['DOCUMENT_ROOT'].'/_resources/includes/survey.inc');
      </xsl:processing-instruction>
    </xsl:if>
    
    <!-- end survey code -->
    
    
	</body>
  </html>
</xsl:template>

<xsl:template name="alert">
  <html>
    <head>
    	<title>UNIVERSITY OF DENVER EMERGENCY NOTICE</title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        
        <!--xsl:text disable-output-escaping="yes">&lt;!-[if lt IE 9]&gt;</xsl:text>
			<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<xsl:text disable-output-escaping="yes">&lt;![endif]-&gt;</xsl:text -->
        
        <style type="text/css">
			/* default styles */
			body {
				background: #fff;
				font: 14px/21px "Trebuchet MS", Arial, Helvetica, sans-serif;
				color: #111;
				-webkit-font-smoothing: antialiased; /* Fix for webkit rendering */
				-webkit-text-size-adjust: 100%;
			}
			.messages {
				background:#FFC;
				border:dashed #999999 1px;
				padding:10px;
				margin:0 10px 0 0;
			}
			
			/* layout styles */
			.container { position: relative; width: 960px; margin: 0 auto; padding: 0; }
			.container .column { float: left; display: inline; margin-left: 10px; margin-right: 10px; }
			.container .eight.column { width: 460px; }
			.container .sixteen.column { width: 940px; }
			
			@media only screen and (max-width: 959px) {
				.container { width: 100% }
				.container .eight.column { width: 100%; }
				.container .sixteen.column { width: 100%; }
			}
		</style>
        
    </head>
    <body>
    	<section class="container">
            <figure class="eight column"><img alt="University of Denver" src="data:image/gif;base64,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" /></figure>
            <header class="eight column">
            	<h1>EMERGENCY NOTIFICATION</h1>
            </header>
            
            <section class="sixteen column">
                <article class="messages">
                    <strong>Current Time:</strong> <xsl:processing-instruction name="php"> print date('M d, Y').' at '.date('H:i:s'); </xsl:processing-instruction>
                    <xsl:copy-of select="/document/content/alert/node()"/>
                </article>
            </section>
            
            <section class="sixteen column">
            	<h3>About this site</h3>
                <p>This Web site is your resource for up-to-date information about campus alerts, closures and openings during emergencies or unfavorable weather situations. The information on this site is also sent out using the University of Denver Emergency Notification system by automated phone message, email, and text message alerts.</p>
                <p>As a situation progresses, this page will be updated as information becomes available.  Updates will also be available through local news media, group e-mails and text messages.</p>
            </section>
            
            <footer>
                <section class="eight column">
                    <h3>Important Numbers</h3>
                    <p><strong>Office of Emergency Preparedness</strong><br />
                    Main: 303-871-2000<br />
                    </p>
                    <p>
                    <strong>Campus Safety</strong><br />
                    Emergency: Dial 911 from any campus phone, then 303-871-3000<br />
                    Non-emergency: 303-871-2334<br />
                    </p>
                </section>
                <section class="eight column">
                	<h3>Media Hotline</h3>
                    <p>
                    <strong>Media Resources</strong><br />
                    Main: 303-871-3172
                    </p>
                </section>
            </footer>
        </section>
        <span style="display:none;"><xsl:comment> com.omniupdate.ob </xsl:comment><xsl:comment> /com.omniupdate.ob </xsl:comment></span>
    </body>
  </html>

</xsl:template>


</xsl:stylesheet>
