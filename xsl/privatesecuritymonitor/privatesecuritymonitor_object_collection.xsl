<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE xsl:stylesheet SYSTEM "http://commons.omniupdate.com/dtd/standard.dtd">
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:ou="http://omniupdate.com/XSL/Variables" xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="ou xs">
	
<xsl:import href="../import/base64.xsl" />

<xsl:output method="xml" indent="yes" encoding="UTF-8" omit-xml-declaration="no" doctype-public="-//Google//DTD GSA Feeds//EN" doctype-system="http://stage.du.edu/korbel/sie/privatesecuritymonitor/_resources/search_feeds/gsafeed.dtd"/>


<!-- Initialize OU Variables -->
<xsl:param name="ou:action" />
<xsl:param name="ou:path" />
<xsl:param name="ou:filename" /> 
<xsl:param name="ou:dirname" />
<xsl:param name="ou:site" />
<xsl:param name="ou:title" />	
<xsl:param name="ou:root" />
<xsl:param name="ou:modified" as="xs:dateTime"/>
<!-- Initialize OU Directory Variables -->
<xsl:param name="ou:resource-http-root"/>
<xsl:param name="ou:site-doc-root"/>


<xsl:template name="object-collection" match="/">
<gsafeed>
	<header>
		<datasource><xsl:value-of select="document/config/parameter[@name='datasource']" /></datasource>
		<feedtype><xsl:value-of select="document/config/parameter[@name='feedtype']" /></feedtype>
	</header>
	<group action="add">
	  <xsl:call-template name="object_list"/>
	</group>
</gsafeed>
</xsl:template>


<xsl:template name="object_list">

	<xsl:variable name="location" >
		<xsl:value-of select="document/config/parameter[@name='filelocation']" />
	</xsl:variable>
    
	<xsl:variable name="items" select="concat($ou:root,$ou:site, $location, '?select=*.pcf;recurse=yes')" />
    
  <xsl:for-each select="collection($items)" > 
    <xsl:call-template name="object">
      <xsl:with-param name="file" select="tokenize(document-uri(.), '[/.]')[last()-1]" />
      <xsl:with-param name="dir" select="$location" />
      <xsl:with-param name="passmod" select="$ou:modified" />
    </xsl:call-template> 
  </xsl:for-each>
                                                           
</xsl:template>


<xsl:template name="object">
	<xsl:param name="file" />
	<xsl:param name="dir" />
  <xsl:param name="passmod" />
  <xsl:param name="record_url">
    <xsl:if test="/document/content/title/a/@href/string-length(normalize-space()) > 0">
      <xsl:element name="meta">
        <xsl:attribute name="name">target_url</xsl:attribute>
        <xsl:attribute name="content"><xsl:value-of select="/document/content/title/a/@href/normalize-space()" /></xsl:attribute>
      </xsl:element>
    </xsl:if>
  </xsl:param>

  <xsl:variable name="modified"><xsl:value-of select="$ou:modified" /></xsl:variable>
    
	<xsl:variable name="docuri">
    <xsl:value-of select="substring-after(document-uri(.),'usr/local/omni/oucampus/Denver/korbel_sie_tipss')"/>
  </xsl:variable>
  <xsl:variable name="linkpath">
    <xsl:value-of select="substring-before($docuri,'.pcf')"/>
  </xsl:variable>
	<xsl:variable name="link">
		<xsl:value-of select="concat($ou:resource-http-root,$ou:site-doc-root,$linkpath,'.xml')" />
	</xsl:variable>
    <!--  END not used -->
    
	<xsl:variable name="title">
    <xsl:if test="/document/title/string-length(normalize-space()) > 0">
      <xsl:element name="meta">
        <xsl:attribute name="name">title</xsl:attribute>
        <xsl:attribute name="content"><xsl:copy-of select="document/title/node()[not(self::comment())]/normalize-space()" /></xsl:attribute>
      </xsl:element>
    </xsl:if>
  </xsl:variable>
    
  <xsl:variable name="internal_resourceurl">
    <xsl:for-each select="/document/content/internal_resourceurl/ol/li">
      <xsl:element name="meta">
        <xsl:attribute name="name">resourceurl:internal<xsl:if test="./string-length(normalize-space(a/@title)) > 0">:<xsl:value-of select="./lower-case(normalize-space(a/@title))"/></xsl:if></xsl:attribute>
        <xsl:attribute name="content"><xsl:value-of select="./normalize-space(a)" />_--_<xsl:value-of select="./a/@href" /></xsl:attribute>
      </xsl:element>
    </xsl:for-each>
  </xsl:variable>
  <xsl:variable name="external_resourceurl">
    <xsl:for-each select="/document/content/external_resourceurl/ol/li">
      <xsl:element name="meta">
        <xsl:attribute name="name">resourceurl:external<xsl:if test="./string-length(normalize-space(a/@title)) > 0">:<xsl:value-of select="./lower-case(normalize-space(a/@title))"/></xsl:if></xsl:attribute>
        <xsl:attribute name="content"><xsl:value-of select="./normalize-space(a)" />_--_<xsl:value-of select="./a/@href" /></xsl:attribute>
      </xsl:element>
    </xsl:for-each>
  </xsl:variable>
    
	<xsl:variable name="author">
    <xsl:if test="string-length(document/content/author/node()[not(self::comment())]/normalize-space()) > 0">
      <xsl:element name="meta">
        <xsl:attribute name="name">author</xsl:attribute>
        <xsl:attribute name="content"><xsl:copy-of select="document/content/author/node()[not(self::comment())]/normalize-space()" /></xsl:attribute>
      </xsl:element>
    </xsl:if>
  </xsl:variable>
	<xsl:variable name="publish_year">
    <xsl:copy-of select="document/content/publish_year/node()[not(self::comment())]/normalize-space()" />
  </xsl:variable>
	<xsl:variable name="publish_month">
    <xsl:copy-of select="document/content/publish_month/node()[not(self::comment())]/normalize-space()" />
  </xsl:variable>
	<xsl:variable name="publish_day">
    <xsl:copy-of select="document/content/publish_day/node()[not(self::comment())]/normalize-space()" />
  </xsl:variable>
  <xsl:variable name="converted_publish_month">
    <xsl:choose>
      <xsl:when test="starts-with($publish_month,'0')"><xsl:value-of select="substring-after($publish_month, '0')" /></xsl:when>
      <xsl:otherwise><xsl:value-of select="$publish_month" /></xsl:otherwise>
    </xsl:choose>
  </xsl:variable>
  <xsl:variable name="converted_publish_day">
    <xsl:choose>
      <xsl:when test="starts-with($publish_day,'0')"><xsl:value-of select="substring-after($publish_day, '0')" /></xsl:when>
      <xsl:otherwise><xsl:value-of select="$publish_day" /></xsl:otherwise>
    </xsl:choose>
  </xsl:variable>
	<xsl:variable name="publish_date">
    <xsl:element name="meta">
      <xsl:attribute name="name">publish_date</xsl:attribute>
      <xsl:attribute name="content"><xsl:value-of select="$publish_year"/>-<xsl:value-of select="$converted_publish_month"/>-<xsl:value-of select="$converted_publish_day"/></xsl:attribute>
    </xsl:element>
  </xsl:variable>
	<xsl:variable name="content_bucket">
    <xsl:if test="/document/content/content_bucket/string-length(normalize-space()) > 0">
      <!--xsl:element name="meta">
        <xsl:attribute name="name">content_bucket</xsl:attribute>
        <xsl:attribute name="content"><xsl:copy-of select="document/content/content_bucket/node()[not(self::comment())]/normalize-space()" /></xsl:attribute>
      </xsl:element-->
      <xsl:for-each select="tokenize(/document/content/content_bucket/node()[not(self::comment())]/normalize-space(),',')">
        <xsl:if test="string-length(normalize-space(.)) > 0">
          <xsl:element name="meta">
            <xsl:attribute name="name">content_bucket</xsl:attribute>
            <xsl:attribute name="content"><xsl:value-of select="normalize-space(.)" /></xsl:attribute>
          </xsl:element>
         </xsl:if>
      </xsl:for-each>
    </xsl:if>
  </xsl:variable>
    
    
  <!-- The for-each will loop though every paramter/option with true and build a meta tag for each one -->
	<xsl:variable name="year">
    <xsl:for-each select="document/config/parameter[@name='years']/option[@selected='true']" >
      <xsl:variable name="con"><xsl:value-of select="."/></xsl:variable>
      <meta name="year" content="{$con}" />
    </xsl:for-each>
  </xsl:variable>
	<xsl:variable name="issues">
    <xsl:for-each select="document/config/parameter[@name='issues']/option[@selected='true']" >
      <xsl:variable name="con"><xsl:value-of select="./@value"/></xsl:variable>
      <meta name="issue" content="{$con}" />
    </xsl:for-each>
  </xsl:variable>
	<xsl:variable name="type">
    <xsl:for-each select="document/config/parameter[@name='types']/option[@selected='true']" >
      <xsl:variable name="con"><xsl:value-of select="./@value"/></xsl:variable>
      <meta name="documenttype" content="{$con}" />
    </xsl:for-each>
  </xsl:variable>
	<xsl:variable name="country">
    <xsl:for-each select="document/config/parameter[@name='Africa']/option[@selected='true']" >
      <xsl:variable name="con"><xsl:value-of select="./@value"/></xsl:variable>
      <meta name="country" content="{$con}" />
    </xsl:for-each>
  </xsl:variable>
	<xsl:variable name="pdf">
    <xsl:for-each select="/document/content/pdfs/ol/li">
      <xsl:if test="/document/content/pdfs/ol/li/a/@href/string-length(normalize-space()) > 0">
        <xsl:element name="meta">
          <xsl:attribute name="name">pdf:<xsl:value-of select="./lower-case(normalize-space(a))"/></xsl:attribute>
          <xsl:attribute name="content"><xsl:value-of select="./a/@href" /></xsl:attribute>
        </xsl:element>
      </xsl:if>
    </xsl:for-each>
  </xsl:variable>
    
  <xsl:variable name="teaser">
    <xsl:if test="/document/content/annotations/string-length(normalize-space()) > 0">
      <xsl:element name="meta">
        <xsl:attribute name="name">dGVhc2Vy</xsl:attribute>
        <xsl:attribute name="encoding">base64binary</xsl:attribute>
        <xsl:attribute name="content">
        
          <xsl:call-template name="base64">
	          <xsl:with-param name="asciiString1" select="document/content/annotations" />
          </xsl:call-template>
        
        </xsl:attribute>
      </xsl:element>
    </xsl:if>
  </xsl:variable>
    
  <record url="{$link}" mimetype="text/html">
    <xsl:attribute name="last-modified"><xsl:value-of select="format-dateTime(xs:dateTime($modified), '[FNn,*-3], [D] [MNn,*-3] [Y] [h]:[m01]:[s01]', 'en', (), ())"/> MDT</xsl:attribute><!-- Mon, 23 Jan 2012 12:45:26 GMT -->
    <metadata>
      <xsl:copy-of select="$record_url" />
      <xsl:copy-of select="$title" />
      <xsl:copy-of select="$type" />
      <xsl:copy-of select="$country" />
      <xsl:copy-of select="$issues" />
      <xsl:copy-of select="$year" />
      <xsl:copy-of select="$pdf" />
      <xsl:copy-of select="$internal_resourceurl" />
      <xsl:copy-of select="$external_resourceurl" />
      <xsl:copy-of select="$author" />
      <xsl:copy-of select="$publish_date" />
      <xsl:copy-of select="$content_bucket" />
      <xsl:copy-of select="$teaser" />
    </metadata>
  </record>
    
</xsl:template>

</xsl:stylesheet>
