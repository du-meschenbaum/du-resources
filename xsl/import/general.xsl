<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE xsl:stylesheet SYSTEM "http://commons.omniupdate.com/dtd/standard.dtd">
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:ou="http://omniupdate.com/XSL/Variables" exclude-result-prefixes="xs ou">

    <xsl:template name="general">
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
            <xsl:text disable-output-escaping="yes">&lt;!--[if gte IE 9]&gt;</xsl:text>
            <link id="css" rel="stylesheet" href="{$ou:resource-http-root}/_resources/css/ie9.css"/>
            <xsl:text disable-output-escaping="yes">&lt;![endif]--&gt;</xsl:text>
            <xsl:choose>
                <xsl:when test="$template = 'currentstudents'">
                    <link id="currentStudentsStylesheet" rel="stylesheet" href="{$ou:resource-http-root}/_resources/css/style-currentstudents.css" title="DU Current Students Styles"/>
                </xsl:when>
                <xsl:when test="$template = 'maps'">
                    <link id="mapsStylesheet" rel="stylesheet" href="{$ou:resource-http-root}/_resources/css/style-maps.css" title="DU Maps Styles" />
                </xsl:when>
            </xsl:choose>
            <link id="ajaxMedia2css" rel="stylesheet" href="{$ou:resource-http-root}/_resources/css/jquery.ajaxMedia2.0.css" title="AJAX Media Styles"/>
            <link rel="alternate" href="http://magazine.du.edu/feed" type="application/rss+xml" title="RSS"/>
            <xsl:call-template name="header_scriptblock" />
        </head>

        <body class="{$format} {if ($showLandscape = 'false') then ('footerNoLandscape') else ('')} {if ($showFullFooter = 'false') then ('footerCondensed') else ('')} {$ou:watermarkClass}">
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

    <xsl:choose>
    	<xsl:when test="$showCustomHero = 'true'">
      	<section id="pageBanners" style="{$customHeroStyles}">
          <xsl:choose>
            <xsl:when test="not($ou:action ='pub')">
	            <xsl:value-of select="unparsed-text(concat($ou:resource-http-root, $customHeroFile))" disable-output-escaping="yes"/>
            </xsl:when>
            <!-- otherwise do a php include -->
            <xsl:otherwise>
              <xsl:processing-instruction name="php">
                include_once($_SERVER['DOCUMENT_ROOT'].'<xsl:value-of select="$customHeroFile" />');
              </xsl:processing-instruction>
            </xsl:otherwise>
          </xsl:choose>
        </section>
      </xsl:when>
      <xsl:otherwise>
      	<section id="pageBanners">
        	<div class="oneColBanner"><xsl:copy-of select="/document/content/banner/node()"/></div>
        </section>
      </xsl:otherwise>
    </xsl:choose>

            <div id="mainWrapper">
                <section id="main">
                    <xsl:choose>
                        <xsl:when test="$breadcrumbType = 'off'">
                            <xsl:choose>
                                <xsl:when test="$template = 'currentstudents'">
                                    <xsl:call-template name="currentstudents-nav" />
                                </xsl:when>
                                <xsl:otherwise><xsl:comment> breadcrumbs disabled </xsl:comment></xsl:otherwise>
                            </xsl:choose>
                        </xsl:when>
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
                        </aside>
                    </xsl:if>

                    <section id="mainContent">
                        <header>
                            <hgroup>
                                <xsl:if test="string-length($contentTitle) != 0"><h1><xsl:value-of select="$contentTitle"/></h1></xsl:if>
                                <xsl:if test="string-length($contentSubtitle) != 0"><h2><xsl:value-of select="$contentSubtitle"/></h2></xsl:if>
                            </hgroup>
                        </header>

                        <xsl:apply-templates select="/document/content/main/node()" mode="copy">
                            <xsl:with-param name="gallerylocation">main</xsl:with-param>
                        </xsl:apply-templates>

                        <xsl:if test="$template = 'currentstudents'">
                            <xsl:call-template name="currentstudents" />
                        </xsl:if>
                        <xsl:if test="$mediatype != 'none'">
                            <xsl:call-template name="media">
                                <xsl:with-param name="htmlHead">false</xsl:with-param>
                                <xsl:with-param name="mediaUID" select="$mediaUID" />
                            </xsl:call-template>
                        </xsl:if>
                    </section>

                    <xsl:if test="$format != 'oneCol'">
                        <aside id="rightSidebar">
                            <xsl:apply-templates select="/document/content/right/node()" mode="copy">
                                <xsl:with-param name="gallerylocation">right</xsl:with-param>
                            </xsl:apply-templates>
                        </aside>
                    </xsl:if>

                    <div class="clear"><xsl:comment>//</xsl:comment></div>
                </section>
            </div>

            <footer id="globalFooter">
                <xsl:if test="$showLandscape = 'true'">
                    <section class="{$landscapeClass}"><xsl:comment>//</xsl:comment></section>
                </xsl:if>

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
                        <p>&copy; 2014 University of Denver. All rights reserved. <a href="{$protocol}{$domain}/privacy/index.html" title="link to university privacy policy">Privacy.</a> The University of Denver is an equal opportunity affirmative action institution. <xsl:comment> com.omniupdate.ob </xsl:comment><xsl:comment> /com.omniupdate.ob </xsl:comment></p>
                    </nav>
                </section><!-- Section: footerLinksContainer -->
            </footer><!-- Footer: globalFooter -->

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

    <xsl:template name="currentstudents">

        <section class="twoSubCol">
            <article class="vertCol">
                <xsl:copy-of select="/document/content/bodycol1/node()"/>
            </article>
            <article class="vertCol last">
                <xsl:copy-of select="/document/content/bodycol2/node()"/>
            </article>
        </section>

    </xsl:template>

    <xsl:template name="currentstudents-nav">

        <nav id="navContainer">
            <ol id="breadcrumbs">
                <li itemscope="true" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/"><span itemprop="title">Home</span></a>&nbsp;&gt;&nbsp;</li><li>Current Students</li>
            </ol>
            <ul class="noJS" id="menu">
                <li class="navAcademics"><a href="#" title="Academics"><img src="/_resources/images/currentstudents/nav/lbl_academics.png" alt="Academics" /></a>
                    <div class="subMenu"><xsl:copy-of select="/document/content/navigation/position1/node()"/></div>
                </li>
                <li class="navBuildingsServices"><a href="#" title="Buildings &amp; Services"><img src="/_resources/images/currentstudents/nav/lbl_buildings-services.png" alt="Buildings &amp; Services" /></a>
                    <div class="subMenu"><xsl:copy-of select="/document/content/navigation/position2/node()"/></div>
                </li>
                <li class="navHousingFood"><a href="#" title="Housing &amp; Food"><img src="/_resources/images/currentstudents/nav/lbl_housing-food.png" alt="Housing &amp; Food" /></a>
                    <div class="subMenu"><xsl:copy-of select="/document/content/navigation/position3/node()"/></div>
                </li>
                <li class="navFinancesAid"><a href="#" title="Finances &amp; Aid"><img src="/_resources/images/currentstudents/nav/lbl_finances-aid.png" alt="Finances &amp; Aid" /></a>
                    <div class="subMenu"><xsl:copy-of select="/document/content/navigation/position4/node()"/></div>
                </li>
                <li class="navStudentActivities"><a href="#" title="Student Activities"><img src="/_resources/images/currentstudents/nav/lbl_student-activities.png" alt="Student Activities" /></a>
                    <div class="subMenu"><xsl:copy-of select="/document/content/navigation/position5/node()"/></div>
                </li>
            </ul>
            <div class="clear"><xsl:comment>//</xsl:comment></div>
        </nav>

    </xsl:template>

</xsl:stylesheet>
