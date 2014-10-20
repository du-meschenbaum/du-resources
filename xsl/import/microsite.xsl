<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE xsl:stylesheet SYSTEM "http://commons.omniupdate.com/dtd/standard.dtd">
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:ou="http://omniupdate.com/XSL/Variables" exclude-result-prefixes="ou">

<xsl:template name="microsite">

  <xsl:text disable-output-escaping="yes">&lt;!DOCTYPE HTML&gt;</xsl:text>
  <xsl:text disable-output-escaping="yes">&lt;</xsl:text>html xmlns="http://www.w3.org/1999/xhtml" lang="en" dir="ltr" id="du-edu" class="no-js"<xsl:text disable-output-escaping="yes">&gt;</xsl:text>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <title><xsl:value-of select="/document/config/parameter[@name='windowTitle']"/> | University of Denver</title>
    <xsl:copy-of select="/document/meta/node()"/>
    <meta name="author" content="University of Denver"/>
    <meta content="Copyright (c) 2014 University of Denver" name="Copyright"/>
    <script src="{$ou:resource-http-root}/_resources/scripts/modernizr-2.0.6.js">//</script>
    <xsl:text disable-output-escaping="yes">&lt;!--[if lt IE 9]&gt;</xsl:text>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js">//</script>
    <xsl:text disable-output-escaping="yes">&lt;![endif]--&gt;</xsl:text>
  	<link rel="shortcut icon" href="/favicon.ico" sizes="16x16" type="image/x-icon"/> 
    <link rel="shortcut icon" href="/du-webclip.gif" sizes="16x16 32x32 48x48 57x57 144x144" type="image/gif"/>
    <link id="css" rel="stylesheet" href="{$ou:resource-http-root}/_resources/css/style.css"/>
    <link id="css" rel="stylesheet" href="{$ou:resource-http-root}/_resources/css/style-microsite.css"/>
    <xsl:text disable-output-escaping="yes">&lt;!--[if gte IE 9]&gt;</xsl:text>
    	<link id="css" rel="stylesheet" href="{$ou:resource-http-root}/_resources/css/ie9.css"/>
    <xsl:text disable-output-escaping="yes">&lt;![endif]--&gt;</xsl:text>
    <link id="ajaxMedia2css" rel="stylesheet" href="{$ou:resource-http-root}/_resources/css/jquery.ajaxMedia2.0.css" title="AJAX Media Styles"/>
    <link rel="alternate" href="http://magazine.du.edu/feed" type="application/rss+xml" title="RSS"/>
    <xsl:call-template name="header_scriptblock" />
  </head>
  
	<body class="{$format} {if ($palette = 'Crimson') then ($palette) else ('')} {if ($showGallery = 'true') then ('heroGallery') else ('')} {if ($showLandscape = 'false') then ('footerNoLandscape') else ('')} {if ($showFullFooter = 'false') then ('footerCondensed') else ('')} {$ou:watermarkClass}">
  	<a class="hiddenFromViewer" href="#mainContent">Skip navigation</a>
    <xsl:choose>
      <xsl:when test="$showFullHeader = 'false'">
        <xsl:choose>
          <!-- if the situation is preview, edit, compare, pull in the COMPACT global header include for stage rendering from published FQ location -->
          <xsl:when test="not($ou:action ='pub')">
          	<xsl:choose>
            	<xsl:when test="lower-case(normalize-space($searchCollection)) != 'du' and string-length(normalize-space($searchCollection)) > 0"><xsl:value-of select="unparsed-text(concat($ou:resource-http-root, '/_resources/includes/headerMin.inc'))" disable-output-escaping="yes"/></xsl:when>
              <xsl:otherwise><xsl:value-of select="unparsed-text(concat($ou:resource-http-root, '/_resources/includes/headerMin-sngl_search.inc'))" disable-output-escaping="yes"/></xsl:otherwise>
            </xsl:choose>
          </xsl:when>
          <!-- otherwise do a php include -->
          <xsl:otherwise>
          	<xsl:choose>
            	<xsl:when test="lower-case(normalize-space($searchCollection)) != 'du' and string-length(normalize-space($searchCollection)) > 0">
                <xsl:processing-instruction name="php">
                include_once($_SERVER['DOCUMENT_ROOT'].'/_resources/includes/headerMin.inc');
                </xsl:processing-instruction>
              </xsl:when>
              <xsl:otherwise>
                <xsl:processing-instruction name="php">
                include_once($_SERVER['DOCUMENT_ROOT'].'/_resources/includes/headerMin-sngl_search.inc');
                </xsl:processing-instruction>
              </xsl:otherwise>
            </xsl:choose>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:when>
      <xsl:otherwise>
        <!-- otherwise if the situation is preview, edit, compare, pull in the FULL global header include for stage rendering from published FQ location -->
        <xsl:choose>
          <xsl:when test="not($ou:action ='pub')">
            <xsl:value-of select="unparsed-text(concat($ou:resource-http-root, '/_resources/includes/headerFull.inc'))" disable-output-escaping="yes"/>
          </xsl:when>
          <!-- otherwise do a php include -->
          <xsl:otherwise>
            <xsl:processing-instruction name="php">
            include_once($_SERVER['DOCUMENT_ROOT'].'/_resources/includes/headerFull.inc');
            </xsl:processing-instruction>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:otherwise>
    </xsl:choose>
    
    <section id="pageBanners">
  
      <div class="oneColBanner">
        <!-- If the page has a gallery, utilize the gallery node, otherwise use the banner node -->  
        <xsl:choose>
          <xsl:when test="$showGallery = 'true'">
            <xsl:copy-of select="/document/content/gallery/node()"/>
          </xsl:when>
          <xsl:otherwise>
            <xsl:copy-of select="/document/content/banner/node()"/>
          </xsl:otherwise>
        </xsl:choose>
      </div>
        
      <nav class="bannersNav">      
        <xsl:variable name="local">_local.inc</xsl:variable>
        <xsl:choose>
          <xsl:when test="unparsed-text-available(concat($ou:root,$ou:site,'/',$local))" >
            <xsl:choose>
              <xsl:when test="unparsed-text-available(concat($ou:root,$ou:site,$dirname,$local))">
                <xsl:comment> com.omniupdate.div group="Everyone" label="<xsl:value-of select="$local"/>" button="833" path="<xsl:value-of select="concat($dirname,$local)" />" </xsl:comment>
                <xsl:processing-instruction name="php">
                  echo(file_get_contents($_SERVER['DOCUMENT_ROOT']."<xsl:value-of select="concat($ou:site-doc-root, $dirname, $local)"/>"));
                </xsl:processing-instruction>
                <xsl:comment> /com.omniupdate.div </xsl:comment>
              </xsl:when>
              <xsl:otherwise>
                <xsl:call-template name="filelocator">
                  <xsl:with-param name="myfilename" select="$local"/>
                </xsl:call-template>
              </xsl:otherwise>
            </xsl:choose>
          </xsl:when>
          <xsl:otherwise>
            <xsl:text>ERROR: A Root level include file is missing. Please create one to avoid seeing this message.</xsl:text>
          </xsl:otherwise>
        </xsl:choose>
      </nav>
    </section><!-- Section: pageBanners -->
    
    <div id="mainWrapper">
      <section id="main">
        
        <xsl:if test="$format != 'oneCol'">
          <aside id="leftSidebar">
            <nav>
              <ol id="nav">
                <xsl:variable name="navigation">_navigation.inc</xsl:variable>
                <xsl:choose>
                  <xsl:when test="unparsed-text-available(concat($ou:root,$ou:site,'/',$navigation))" >
                    <xsl:choose>
                      <xsl:when test="unparsed-text-available(concat($ou:root,$ou:site,$dirname,$navigation))">
                        <xsl:comment> com.omniupdate.div group="Everyone" label="<xsl:value-of select="$navigation"/>" button="833" path="<xsl:value-of select="concat($dirname,$navigation)" />" </xsl:comment>
                        <xsl:processing-instruction name="php">
                        echo(file_get_contents($_SERVER['DOCUMENT_ROOT']."<xsl:value-of select="concat($ou:site-doc-root, $dirname, $navigation)"/>"));
                        </xsl:processing-instruction>
                        <xsl:comment> /com.omniupdate.div </xsl:comment>
                      </xsl:when>
                      <xsl:otherwise>
                        <xsl:call-template name="filelocator">
                          <xsl:with-param name="myfilename" select="$navigation"/>
                        </xsl:call-template>
                      </xsl:otherwise>
                    </xsl:choose>
                  </xsl:when>
                  <xsl:otherwise>
                    <xsl:text>ERROR: A Root level include file is missing. Please create one to avoid seeing this message.</xsl:text>
                  </xsl:otherwise>
                </xsl:choose>
              </ol>
            </nav>
            <!--xsl:copy-of select="/document/content/left/node()"/-->
          </aside><!-- Aside: leftSidebar -->
        </xsl:if>

        <section id="mainContent">

			<xsl:choose>
				<xsl:when test="$breadcrumbType = 'off'"><xsl:comment> breadcrumbs disabled </xsl:comment></xsl:when>
				<xsl:when test="$breadcrumbType = 'manual'">
					<nav id="breadcrumbs">
						<xsl:copy-of select="/document/content/breadcrumbs/node()"/>
					</nav>
				</xsl:when>
				<xsl:otherwise>
					<nav id="breadcrumbs">
						<xsl:call-template name="breadcrumb">
							<xsl:with-param name="path" select="$ou:path" />
						</xsl:call-template>
					</nav>
				</xsl:otherwise>
			</xsl:choose>
			
          <header>
            <hgroup>
              <xsl:if test="string-length($contentTitle) != 0"><h1><xsl:value-of select="$contentTitle"/></h1></xsl:if>
              <xsl:if test="string-length($contentSubtitle) != 0"><h2><xsl:value-of select="$contentSubtitle"/></h2></xsl:if>
            </hgroup>
          </header>
          
          <xsl:apply-templates select="/document/content/main/node()" mode="copy">
          <xsl:with-param name="gallerylocation">main</xsl:with-param>
          </xsl:apply-templates>
          
          <xsl:if test="$mediatype != 'none'">
            <xsl:call-template name="media">
              <xsl:with-param name="htmlHead">false</xsl:with-param>
              <xsl:with-param name="mediaUID" select="$mediaUID" />
            </xsl:call-template>
          </xsl:if>
        </section><!-- Secton: mainContent -->
        
        <xsl:if test="$format != 'oneCol'">
          <aside id="rightSidebar">
            <xsl:apply-templates select="/document/content/right/node()" mode="copy">
            <xsl:with-param name="gallerylocation">right</xsl:with-param>
            </xsl:apply-templates>
          </aside><!-- Aside: rightSidebar -->
        </xsl:if>
        
        <div class="clear">&nbsp;</div>
      </section><!-- Section: main -->
    </div>

    <footer id="globalFooter">
      <xsl:if test="$showLandscape = 'true'"><section class="{$landscapeClass}"><xsl:comment>//</xsl:comment></section></xsl:if>
      <section id="footerLinksContainer">
        <xsl:if test="$showFullFooter = 'true'">
          <!-- Show the full footer if that's selected as an option in the PCF -->
          <xsl:choose>
            <!-- if the situation is preview, edit, compare, pull in the full global footer -->
            <xsl:when test="not($ou:action ='pub')">
              <xsl:value-of select="unparsed-text(concat($ou:resource-http-root, '/_resources/includes/fullFooterNav.inc'))" disable-output-escaping="yes"/>
            </xsl:when>
            <!-- otherwise do a php include -->
            <xsl:otherwise>
              <xsl:processing-instruction name="php">
              include_once($_SERVER['DOCUMENT_ROOT'].'/_resources/includes/fullFooterNav.inc');
              </xsl:processing-instruction>
            </xsl:otherwise>
          </xsl:choose>
          <div class="clear"><xsl:comment>//</xsl:comment></div>
        </xsl:if>
        
        <section id="followList">
          <xsl:choose>
            <!-- if the situation is preview, edit, compare, pull in include -->
            <xsl:when test="not($ou:action ='pub')">
              <xsl:value-of select="unparsed-text(concat($ou:resource-http-root, '/_resources/includes/followListNav.inc'))" disable-output-escaping="yes"/>
            </xsl:when>
            <!-- otherwise do a php include -->
            <xsl:otherwise>
              <xsl:processing-instruction name="php">
              include_once($_SERVER['DOCUMENT_ROOT'].'/_resources/includes/followListNav.inc');
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
              include_once($_SERVER['DOCUMENT_ROOT'].'/_resources/includes/subFooterNav.inc');
              </xsl:processing-instruction>
            </xsl:otherwise>
          </xsl:choose>
          <p>&copy; 2014 University of Denver. All rights reserved. <a href="{$protocol}{$domain}/privacy/" title="link to university privacy policy">Privacy.</a> The University of Denver is an equal opportunity affirmative action institution. <xsl:comment> com.omniupdate.ob </xsl:comment><xsl:comment> /com.omniupdate.ob </xsl:comment></p>
        </nav>
      </section>
    </footer>
    
    <!-- survey code for page property include file -->
    <xsl:if test="/document/config/parameter[@name='showsurvey']/option[@value='yes' and @selected='true']">
      <xsl:if test="not($ou:action ='pub')">
        <xsl:value-of select="unparsed-text(concat($ou:resource-http-root, '/_resources/includes/survey.inc'))" disable-output-escaping="yes"/>
      </xsl:if>            
      <xsl:processing-instruction name="php">
      include_once($_SERVER['DOCUMENT_ROOT'].'/_resources/includes/survey.inc');
      </xsl:processing-instruction>
    </xsl:if>
    <!-- end survey code -->

  </body>
<xsl:text disable-output-escaping="yes">&lt;/</xsl:text>html<xsl:text disable-output-escaping="yes">&gt;</xsl:text>

</xsl:template>

</xsl:stylesheet>
