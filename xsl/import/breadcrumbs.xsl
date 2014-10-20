<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE xsl:stylesheet SYSTEM "http://commons.omniupdate.com/dtd/standard.dtd">
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:ou="http://omniupdate.com/XSL/Variables" exclude-result-prefixes="xs ou">



<xsl:template name="breadcrumb">
	<xsl:param name="path"/>
	<xsl:param name="tokenizedPath" select="tokenize(normalize-space($path),'/')"/>
	
	<ol>
		<xsl:for-each select="$tokenizedPath[not(($tokenizedPath[last()] = 'index.html') and (position() = last()-1))]">
			<xsl:variable name="stagingURI">
				<xsl:choose>
					<xsl:when test="position() = 1">/index.pcf</xsl:when>
					<xsl:when test="position() = last()"><xsl:value-of select="concat(substring-before($path,.),replace(.,'.html','.pcf'))" /></xsl:when>
					<xsl:otherwise><xsl:value-of select="concat(substring-before($path,.),.,'/index.pcf')" /></xsl:otherwise>
				</xsl:choose>
			</xsl:variable>
			
			<xsl:if test="(last() - position()) &lt;= $breadcrumbParentLimit">								
				<xsl:variable name="title">
					<xsl:choose>
						<xsl:when test="doc-available(concat($ou:root,$ou:site,$stagingURI))">
							<xsl:variable name="itemBreadcrumbTitle" select="document(concat($ou:root,$ou:site,$stagingURI))/document/config/parameter[@name='breadcrumbTitle']"/>
							<xsl:choose>
								<xsl:when test="string-length($itemBreadcrumbTitle) != 0">
									<xsl:value-of select="$itemBreadcrumbTitle"/>
								</xsl:when>
								<xsl:otherwise>
									<xsl:variable name="itemPageTitle" select="document(concat($ou:root,$ou:site,$stagingURI))/document/title"/>
									<xsl:choose>
										<xsl:when test="string-length($itemPageTitle) != 0">
											<xsl:value-of select="$itemPageTitle"/>
										</xsl:when>
										<xsl:otherwise>
											<xsl:value-of select="." />
										</xsl:otherwise>
									</xsl:choose>
								</xsl:otherwise>
							</xsl:choose>
						</xsl:when>
						<xsl:otherwise>
							<xsl:choose>
								<xsl:when test="position() = 1">Home</xsl:when>
								<xsl:otherwise><xsl:value-of select="." /></xsl:otherwise>
							</xsl:choose>
						</xsl:otherwise>
					</xsl:choose>
				</xsl:variable>
				
				<xsl:variable name="productionURI">
					<xsl:choose>
						<xsl:when test="position() = 1"><xsl:value-of select="concat($ou:site-doc-root,'/')" /></xsl:when>
						<xsl:otherwise><xsl:value-of select="concat($ou:site-doc-root,substring-before($path,.),.)" /></xsl:otherwise>
					</xsl:choose>
				</xsl:variable>

				<xsl:choose>
					<xsl:when test="position() = last()"><li><xsl:value-of select="$title" /></li></xsl:when>
					<xsl:otherwise><li itemscope="true" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="{$productionURI}" itemprop="url"><span itemprop="title"><xsl:copy-of select="$title"/></span></a>&nbsp;&gt;&nbsp;</li></xsl:otherwise>
				</xsl:choose>
			</xsl:if>
		</xsl:for-each>
	</ol>
</xsl:template>

</xsl:stylesheet>
