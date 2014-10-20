<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE xsl:stylesheet SYSTEM "http://commons.omniupdate.com/dtd/standard.dtd">
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:ou="http://omniupdate.com/XSL/Variables" exclude-result-prefixes="xs ou">
 
<xsl:template name="media">
	<xsl:param name="htmlHead"/>
	<xsl:param name="mediaUID"/>
  
  <xsl:choose>
  	<!-- Video -->
  	<xsl:when test="$mediatype = 'video'">
      <xsl:choose>
      
        <xsl:when test="$htmlHead = 'true'">
          <xsl:call-template name="video-htmlhead">
            <xsl:with-param name="mediaUID" select="$mediaUID" />
          </xsl:call-template>
        </xsl:when>
        
        <xsl:otherwise>
          <xsl:call-template name="video">
            <xsl:with-param name="mediaUID" select="$mediaUID" />
          </xsl:call-template>
        </xsl:otherwise>
        
      </xsl:choose>
    </xsl:when>
    
  </xsl:choose>

</xsl:template>

<!-- Video: HTML Head -->
<xsl:template name="video-htmlhead">
	<xsl:param name="mediaUID"/>
  <xsl:param name="mediaName" select="/document/content/media/name/normalize-space()"/>
  <xsl:param name="mediaCaption" select="/document/content/media/captiontxt"/>
  <xsl:param name="videoURI" select="concat(/document/content/media/video/protocol/normalize-space(),'://',/document/content/media/video/path/normalize-space(),'/',/document/content/media/video/filename/normalize-space())"/>
  <xsl:param name="videoWidth" select="/document/content/media/video/width/normalize-space()"/>
  <xsl:param name="videoHeight" select="/document/content/media/video/height/normalize-space()"/>
  <xsl:param name="videoPoster" select="/document/content/media/video/poster/normalize-space()"/>

	<script>
    var ouRoot      = "<xsl:value-of select="$ou:resource-http-root"/>";
    var vidAssetId  = "<xsl:value-of select="$mediaUID"/>";
    var vidSrc      = "<xsl:value-of select="$videoURI"/>";
    var vidWidth    = "<xsl:value-of select="$videoWidth"/>";
    var vidHeight   = "<xsl:value-of select="$videoHeight"/>";
    var vidTitle    = "<xsl:value-of select="$mediaName"/>";
    var poster      = "<xsl:value-of select="$videoPoster"/>";
  <xsl:text disable-output-escaping="yes">
  //<![CDATA[
    var expressInstallPath = ouRoot+"/_resources/scripts/flash/expressInstall.swf",
      playerPath           = ouRoot+"/_resources/scripts/flash/players/StrobeMediaPlayback.swf",
			pluginGoogle         = ouRoot+"/_resources/scripts/flash/players/GTrackPlugin.swf",
      altContentId 		     = "overlay-wrapper_"+vidAssetId,
      vidID        		     = "davideo_"+vidAssetId,
      flashvars            = {'src': encodeURI(vidSrc), 'poster': encodeURI(poster), 'scalemode': 'none'};/*, 'plugin_googleanalytics': encodeURI(pluginGoogle)*/
      params               = {'allowfullscreen': 'true', 'allowscriptaccess': 'always', 'wmode': 'transparent'},
      attributes           = {'id': vidID, 'name': vidTitle};
    swfobject.embedSWF(playerPath, altContentId, vidWidth, vidHeight, "10.0.0", expressInstallPath, flashvars, params, attributes);		
  //]]>
  </xsl:text>
  </script>

</xsl:template>

<!-- Video: Body -->
<xsl:template name="video">
	<xsl:param name="mediaUID"/>

  
  <figure id="videoPage">
    <xsl:if test="$ou:action ='edt'"><h4><xsl:copy-of select="/document/content/media/name/normalize-space()"/></h4></xsl:if>
    <div id="overlay-wrapper_{$mediaUID}" class="overlay-wrapper videoOverlay">
      <h1 class="overlayTitle"><xsl:value-of select="/document/content/media/name/normalize-space()"/><a class="close" href="#" title="Close">&nbsp;</a></h1>
      <div class="overlayContent">
        <div class="mediaContainer">
          <div id="altContent_{$mediaUID}">
            <p>To view this video, you will need to <a href="http://www.adobe.com/go/getflashplayer">download the free Adobe Flash Player</a>.  Flash player is a small, fast download that allows you to watch videos, listen to audio clips, view interactive content across the University of Denver's Web Sites and across the internet.</p>
            <p><a href="http://www.adobe.com/go/getflashplayer"><img src="{$ou:resource-http-root}/_resources/images/btns/get_flash_player.jpg" alt="Get Adobe Flash player" /></a></p>
            <div class="vars" id="vars{$mediaUID}" style="display:none">
              <code class="mediaUID"><xsl:value-of select="$mediaUID"/></code>
              <code class="width"><xsl:value-of select="/document/content/media/video/width/normalize-space()"/></code>
              <code class="height"><xsl:value-of select="/document/content/media/video/height/normalize-space()"/></code>
              <code class="title"><xsl:value-of select="/document/content/media/name/normalize-space()"/></code>
              <code class="uri"><xsl:value-of select="concat(/document/content/media/video/protocol/normalize-space(),'://',/document/content/media/video/path/normalize-space(),'/',/document/content/media/video/filename/normalize-space())"/></code>
              <xsl:choose>
                <xsl:when test="string-length(/document/content/media/video/poster/normalize-space()) > 0"><code class="poster"><xsl:value-of select="/document/content/media/video/poster/normalize-space()"/></code></xsl:when>
                <xsl:otherwise><code class="poster">&nbsp;</code></xsl:otherwise>
              </xsl:choose>
            </div>
          </div>
        </div>
        <div class="mediaInfo"><xsl:copy-of select="/document/content/media/captiontxt/node()"/></div>
        <div clas="clear">&nbsp;</div>
      </div>
      <div class="clear">&nbsp;</div>
      <span class="topLeft">&nbsp;</span><span class="top">&nbsp;</span><span class="topRight">&nbsp;</span>
      <span class="bottomLeft">&nbsp;</span><span class="bottom">&nbsp;</span><span class="bottomRight">&nbsp;</span>
    </div>
	  <xsl:if test="string-length(/document/content/media/captiontxt) > 0"><figcaption><xsl:copy-of select="/document/content/media/captiontxt/node()"/></figcaption></xsl:if>
  </figure>
  <div class="clear"><xsl:comment>//</xsl:comment></div>

</xsl:template>

</xsl:stylesheet>
