<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE xsl:stylesheet SYSTEM "http://commons.omniupdate.com/dtd/standard.dtd">
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:ou="http://omniupdate.com/XSL/Variables" exclude-result-prefixes="ou">

<xsl:output method="xml" indent="yes" encoding="UTF-8" omit-xml-declaration="yes" />


<xsl:template match="/">
	
    <constants xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://psm.du.edu/_resources/search_feeds/constants.xsd">
    
    	<xsl:copy-of select="constants/node()"/>
        
    </constants>

</xsl:template>

</xsl:stylesheet>
