<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE xsl:stylesheet SYSTEM "http://commons.omniupdate.com/dtd/standard.dtd">
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:ou="http://omniupdate.com/XSL/Variables" exclude-result-prefixes="ou">

<xsl:output method="xml" indent="yes" encoding="UTF-8" omit-xml-declaration="yes" />


<xsl:template match="/constants">

	<variable name="issues" type="checkbox" output="xml">	
	
    	<xsl:apply-templates select="issues/*"/>

	</variable>

	
  <xsl:apply-templates select="countries/*"/>
        
        
	<variable name="years" type="checkbox" output="xml">	
	
    	<xsl:apply-templates select="years/*"/>

	</variable>

	<variable name="types" type="checkbox" output="xml">	
	
    	<xsl:apply-templates select="types/*"/>

	</variable>

	<variable name="partners" type="checkbox" output="xml">	
	
    	<xsl:apply-templates select="partners/*"/>

	</variable>
        
</xsl:template>






<xsl:template match="issues/*">

	<xsl:variable name="item">
		<xsl:value-of select="." />
	</xsl:variable>
	<xsl:variable name="item_id">
		<xsl:value-of select="./@id" />
	</xsl:variable>
    
	<option value="{$item_id}"><xsl:value-of select="$item"/></option>

</xsl:template>

<xsl:template match="countries/*">

	<xsl:variable name="item">
		<xsl:value-of select="./@name" />
	</xsl:variable>
    
	<variable name="{$item}" type="checkbox" output="xml">
    	<xsl:call-template name="division" />    
	</variable>


</xsl:template>

<xsl:template name="division" match="division/*">
    
    <xsl:for-each select="./country">
    
        <xsl:variable name="item">
            <xsl:value-of select="./display_name" />
        </xsl:variable>
        <xsl:variable name="item_id">
          <xsl:value-of select="./@id" />
        </xsl:variable>
    
		<option value="{$item_id}"><xsl:value-of select="$item"/></option>
    </xsl:for-each>
    
</xsl:template>


<xsl:template match="years/*">

	<xsl:variable name="item">
		<xsl:value-of select="." />
	</xsl:variable>
	<xsl:variable name="item_id">
		<xsl:value-of select="./@id" />
	</xsl:variable>
    
	<option value="{$item_id}"><xsl:value-of select="$item"/></option>

</xsl:template>

<xsl:template match="types/*">

	<xsl:variable name="item">
		<xsl:value-of select="." />
	</xsl:variable>
	<xsl:variable name="item_id">
		<xsl:value-of select="./@id" />
	</xsl:variable>
    
	<option value="{$item_id}"><xsl:value-of select="$item"/></option>

</xsl:template>

<xsl:template match="partners/*">

	<xsl:variable name="item">
		<xsl:value-of select="short_name" />
	</xsl:variable>
	<xsl:variable name="item_id">
		<xsl:value-of select="./@id" />
	</xsl:variable>
    
	<option value="{$item_id}"><xsl:value-of select="$item"/></option>

</xsl:template>


</xsl:stylesheet>
