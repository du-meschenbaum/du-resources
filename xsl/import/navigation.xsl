<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE xsl:stylesheet SYSTEM "http://commons.omniupdate.com/dtd/standard.dtd">
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:ou="http://omniupdate.com/XSL/Variables" xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs ou">
  
  <!-- attempts to locate an include file by recursively searching parent directories until the root is reached. If found will create dynamic edit button code for the file and include it. -->
  
  <xsl:template name="filelocator">
    <xsl:param name="path" as="xs:string" select="$dirname"/>
    <xsl:param name="list" select="tokenize(substring($path,2), '/')"/>
    <xsl:param name="myfilename"/>
    
    <xsl:choose>
      <xsl:when test="(unparsed-text-available(concat($ou:root,$ou:site,$path,$myfilename)))" >
        <xsl:comment> com.omniupdate.div group="Everyone" label="<xsl:value-of select="$myfilename"/>"  button="707" path="<xsl:value-of select="concat($path, $myfilename)" />" </xsl:comment>
        <xsl:processing-instruction name="php">
          echo(file_get_contents($_SERVER['DOCUMENT_ROOT']."<xsl:value-of select="concat($ou:site-doc-root, $path, $myfilename)"/>"));
        </xsl:processing-instruction>
        <xsl:comment> /com.omniupdate.div </xsl:comment>
        <xsl:value-of select="$path" />
        <!-- Filelocator: First -->
      </xsl:when>
      <xsl:when test="count($list) &lt; 3 " >
        <xsl:variable name="recursive_result"  >
          <xsl:call-template name="filelocator" >
            <xsl:with-param name="path" select="'/'" />
            <xsl:with-param name="myfilename" select="$myfilename"/>
          </xsl:call-template >
          </xsl:variable>
        <xsl:comment> com.omniupdate.div group="Everyone" label="<xsl:value-of select="$myfilename"/>"  button="707" path="<xsl:value-of select="concat( $recursive_result, $myfilename)" />" </xsl:comment>
        <xsl:processing-instruction name="php">
          echo(file_get_contents($_SERVER['DOCUMENT_ROOT']."<xsl:value-of select="concat($ou:site-doc-root, $recursive_result, $myfilename)"/>"));
        </xsl:processing-instruction>
        <div class="hideme"><xsl:value-of select="$recursive_result" /></div>
        <xsl:comment> /com.omniupdate.div </xsl:comment>
				<!-- Filelocator: Second -->
      </xsl:when>
      <xsl:otherwise>
    
        <xsl:variable name="recursive_result"  >
					<xsl:call-template name="filelocator" >
						<xsl:with-param name="path" select="concat( '/', string-join(subsequence($list, 1, (count($list)-2)),'/'),'/')" />
						<xsl:with-param name="myfilename" select="$myfilename"/>
					</xsl:call-template >
        </xsl:variable>
        <xsl:comment> com.omniupdate.div group="Everyone" label="<xsl:value-of select="$myfilename"/>"  button="707" path="<xsl:value-of select="concat( $recursive_result, $myfilename)" />" </xsl:comment>
        <xsl:processing-instruction name="php">
          echo(file_get_contents($_SERVER['DOCUMENT_ROOT']."<xsl:value-of select="concat($ou:site-doc-root, $recursive_result, $myfilename)"/>"));
        </xsl:processing-instruction>
        <div class="hideme"><xsl:value-of select="$recursive_result" /></div>
        <xsl:comment> /com.omniupdate.div </xsl:comment>
				<!-- Filelocator: Third -->
	
      </xsl:otherwise>

    </xsl:choose>
  </xsl:template>
</xsl:stylesheet>
