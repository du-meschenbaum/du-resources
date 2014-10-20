<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE xsl:stylesheet SYSTEM "http://commons.omniupdate.com/dtd/standard.dtd">
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:ou="http://omniupdate.com/XSL/Variables" xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="ou xs">

<xsl:output method="xml" indent="yes" encoding="UTF-8" omit-xml-declaration="yes" />

<!-- Initialize OU Variables -->
<xsl:param name="ou:action" />
<xsl:param name="ou:path" />
<xsl:param name="ou:filename" />
<xsl:param name="ou:dirname" />
<xsl:param name="ou:root" />
<xsl:param name="ou:site" />
<xsl:param name="ou:modified" as="xs:dateTime"/>
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

<xsl:param name="protocol">
	<xsl:choose>
  	<xsl:when test="contains($ou:resource-http-root,'https://')">https://</xsl:when>
    <xsl:otherwise>http://</xsl:otherwise>
  </xsl:choose>
</xsl:param>
<xsl:param name="domain">psm.du.edu</xsl:param>

<xsl:param name="record_active" select="/document/config/parameter[@name='active']/option[@selected='true']/@value"/>
<xsl:param name="record_url">
	<xsl:value-of select="concat($ou:resource-http-root,$ou:site-doc-root,$ou:path)" />
</xsl:param>
<xsl:param name="target_url">
	<xsl:choose>
  	<xsl:when test="/document/content/title/a/@href/string-length(normalize-space()) > 0">
    	<xsl:choose>
      	<xsl:when test="contains(/document/content/title/a/@href/normalize-space(),'http://') or contains(/document/content/title/a/@href/normalize-space(),'https://')"><xsl:value-of select="escape-html-uri(/document/content/title/a/@href/normalize-space())" /></xsl:when>
    		<xsl:otherwise><xsl:value-of select="concat($ou:resource-http-root,escape-html-uri(/document/content/title/a/@href/normalize-space()))" /></xsl:otherwise>
      </xsl:choose>
    </xsl:when>
	  <xsl:otherwise><xsl:value-of select="$record_url" /></xsl:otherwise>
  </xsl:choose>
</xsl:param>

<xsl:template match="/">
	<xsl:choose>
		<xsl:when test="$ou:action = 'pub'">
      <xsl:text disable-output-escaping="yes">&lt;?xml version="1.0" encoding="utf-8"?&gt;</xsl:text>
        <xsl:element name="record">
          <xsl:attribute name="url"><xsl:value-of select="$record_url" /></xsl:attribute>
          <xsl:attribute name="mimetype">text/html</xsl:attribute>
          <xsl:attribute name="last-modified"><xsl:value-of select="format-dateTime(xs:dateTime($ou:modified), '[FNn,*-3], [D] [MNn,*-3] [Y] [h]:[m01]:[s01]', 'en', (), ())"/> MDT</xsl:attribute>
          <xsl:attribute name="active"><xsl:value-of select="$record_active" /></xsl:attribute>
          <xsl:attribute name="displayurl"><xsl:value-of select="$target_url" /></xsl:attribute>
          <xsl:element name="metadata">
            <xsl:element name="meta">
              <xsl:attribute name="name">title</xsl:attribute>
              <xsl:attribute name="content"><xsl:value-of select="/document/content/title/a/normalize-space()" /></xsl:attribute>
            </xsl:element>
            <xsl:element name="meta">
              <xsl:attribute name="name">target_url</xsl:attribute>
              <xsl:attribute name="content"><xsl:value-of select="$target_url" /></xsl:attribute>
            </xsl:element>
            <xsl:for-each select="/document/config/parameter[@name='types']/option[@selected='true']">
              <xsl:element name="meta">
                <xsl:attribute name="name">documenttype</xsl:attribute>
                <xsl:attribute name="content"><xsl:value-of select="@value" /></xsl:attribute>
              </xsl:element>
            </xsl:for-each>
            <xsl:for-each select="/document/config/parameter[@name='issues']/option[@selected='true']">
              <xsl:element name="meta">
                <xsl:attribute name="name">issue</xsl:attribute>
                <xsl:attribute name="content"><xsl:value-of select="@value" /></xsl:attribute>
              </xsl:element>
            </xsl:for-each>
            <xsl:for-each select="/document/config/parameter[@name='years']/option[@selected='true']">
              <xsl:element name="meta">
                <xsl:attribute name="name">year</xsl:attribute>
                <xsl:attribute name="content"><xsl:value-of select="@value" /></xsl:attribute>
              </xsl:element>
            </xsl:for-each>
            <xsl:for-each select="/document/config/parameter[@name='africa']/option[@selected='true']">
              <xsl:element name="meta">
                <xsl:attribute name="name">country</xsl:attribute>
                <xsl:attribute name="content"><xsl:value-of select="@value" /></xsl:attribute>
              </xsl:element>
            </xsl:for-each>
            <xsl:for-each select="/document/config/parameter[@name='americas']/option[@selected='true']">
              <xsl:element name="meta">
                <xsl:attribute name="name">country</xsl:attribute>
                <xsl:attribute name="content"><xsl:value-of select="@value" /></xsl:attribute>
              </xsl:element>
            </xsl:for-each>
            <xsl:for-each select="/document/config/parameter[@name='asia']/option[@selected='true']">
              <xsl:element name="meta">
                <xsl:attribute name="name">country</xsl:attribute>
                <xsl:attribute name="content"><xsl:value-of select="@value" /></xsl:attribute>
              </xsl:element>
            </xsl:for-each>
            <xsl:for-each select="/document/config/parameter[@name='europe']/option[@selected='true']">
              <xsl:element name="meta">
                <xsl:attribute name="name">country</xsl:attribute>
                <xsl:attribute name="content"><xsl:value-of select="@value" /></xsl:attribute>
              </xsl:element>
            </xsl:for-each>
            <xsl:for-each select="/document/config/parameter[@name='middle_east_and_north_africa']/option[@selected='true']">
              <xsl:element name="meta">
                <xsl:attribute name="name">country</xsl:attribute>
                <xsl:attribute name="content"><xsl:value-of select="@value" /></xsl:attribute>
              </xsl:element>
            </xsl:for-each>
            <xsl:for-each select="/document/config/parameter[@name='oceania']/option[@selected='true']">
              <xsl:element name="meta">
                <xsl:attribute name="name">country</xsl:attribute>
                <xsl:attribute name="content"><xsl:value-of select="@value" /></xsl:attribute>
              </xsl:element>
            </xsl:for-each>
            <xsl:for-each select="/document/config/parameter[@name='partners']/option[@selected='true']">
              <xsl:element name="meta">
                <xsl:attribute name="name">partner</xsl:attribute>
                <xsl:attribute name="content"><xsl:value-of select="@value" /></xsl:attribute>
              </xsl:element>
            </xsl:for-each>
            <xsl:for-each select="/document/content/pdfs/ol/li">
              <xsl:element name="meta">
                <xsl:attribute name="name">pdf:<xsl:value-of select="lower-case(normalize-space(a))"/></xsl:attribute>
                <xsl:attribute name="content"><xsl:value-of select="escape-html-uri(a/@href/normalize-space())" /></xsl:attribute>
              </xsl:element>
            </xsl:for-each>
            <xsl:for-each select="/document/content/internal_resourceurl/ol/li">
              <xsl:element name="meta">
                <xsl:attribute name="name">resourceurl:internal<xsl:if test="string-length(normalize-space(a/@title)) > 0">:<xsl:value-of select="lower-case(normalize-space(a/@title))"/></xsl:if></xsl:attribute>
                <xsl:attribute name="content"><xsl:value-of select="escape-html-uri(a/normalize-space())" />_--_<xsl:value-of select="escape-html-uri(normalize-space(a/@href))" /></xsl:attribute>
              </xsl:element>
            </xsl:for-each>
            <xsl:for-each select="/document/content/external_resourceurl/ol/li">
              <xsl:element name="meta">
                <xsl:attribute name="name">resourceurl:external<xsl:if test="string-length(normalize-space(a/@title)) > 0">:<xsl:value-of select="lower-case(normalize-space(a/@title))"/></xsl:if></xsl:attribute>
                <xsl:attribute name="content"><xsl:value-of select="escape-html-uri(a/normalize-space())" />_--_<xsl:value-of select="escape-html-uri(normalize-space(a/@href))" /></xsl:attribute>
              </xsl:element>
            </xsl:for-each>
            <xsl:for-each select="distinct-values(/document/content/author/normalize-space())">
              <xsl:if test="string-length(normalize-space(.)) > 0">
                <xsl:element name="meta">
                  <xsl:attribute name="name">author</xsl:attribute>
                  <xsl:attribute name="content"><xsl:value-of select="." /></xsl:attribute>
                </xsl:element>
              </xsl:if>
            </xsl:for-each>
            <xsl:element name="meta">
              <xsl:attribute name="name">publish_year</xsl:attribute>
              <xsl:attribute name="content"><xsl:value-of select="/document/content/publish_year/normalize-space()" /></xsl:attribute>
            </xsl:element>
            <xsl:element name="meta">
              <xsl:attribute name="name">publish_month</xsl:attribute>
              <xsl:choose>
                <xsl:when test="starts-with(/document/content/publish_month/normalize-space(),'0')">
	                <xsl:attribute name="content"><xsl:value-of select="substring-after(/document/content/publish_month/normalize-space(), '0')" /></xsl:attribute>
                </xsl:when>
                <xsl:otherwise><xsl:attribute name="content"><xsl:value-of select="/document/content/publish_month/normalize-space()" /></xsl:attribute></xsl:otherwise>
              </xsl:choose>
            </xsl:element>
            <xsl:element name="meta">
              <xsl:attribute name="name">publish_day</xsl:attribute>
              <xsl:choose>
                <xsl:when test="starts-with(/document/content/publish_day/normalize-space(),'0')">
	                <xsl:attribute name="content"><xsl:value-of select="substring-after(/document/content/publish_day/normalize-space(), '0')" /></xsl:attribute>
                </xsl:when>
                <xsl:otherwise><xsl:attribute name="content"><xsl:value-of select="/document/content/publish_day/normalize-space()" /></xsl:attribute></xsl:otherwise>
              </xsl:choose>
            </xsl:element>
            <xsl:for-each select="tokenize(/document/content/content_bucket/normalize-space(),',')">
              <xsl:if test="string-length(normalize-space(.)) > 0">
                <xsl:element name="meta">
                  <xsl:attribute name="name">content_bucket</xsl:attribute>
                  <xsl:attribute name="content"><xsl:value-of select="normalize-space(.)" /></xsl:attribute>
                </xsl:element>
               </xsl:if>
            </xsl:for-each>
          </xsl:element>
          <xsl:if test="/document/content/annotations/string-length(normalize-space()) > 0">
            <xsl:element name="content">
              <xsl:text disable-output-escaping="yes">&lt;![CDATA[</xsl:text><xsl:copy-of select="/document/content/annotations/node()[not(self::comment())]" />]]<xsl:text disable-output-escaping="yes">&gt;</xsl:text>
            </xsl:element>
          </xsl:if>
          <xsl:if test="/document/content/annotations2/string-length(normalize-space()) > 0">
            <xsl:element name="content2">
              <xsl:text disable-output-escaping="yes">&lt;![CDATA[</xsl:text><xsl:copy-of select="/document/content/annotations2/node()[not(self::comment())]" />]]<xsl:text disable-output-escaping="yes">&gt;</xsl:text>
            </xsl:element>
          </xsl:if>
        </xsl:element>
      </xsl:when>
      <xsl:otherwise>
      	<xsl:copy-of select="/document/content/title/node()"/>
      </xsl:otherwise>
  </xsl:choose>
</xsl:template>

</xsl:stylesheet>
