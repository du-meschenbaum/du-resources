<!DOCTYPE xsl:stylesheet SYSTEM "http://commons.omniupdate.com/dtd/standard.dtd">
<!--
OUPOLLS for LDP Module, V2
Imported by ouforms.xsl
Defines template for oupolls

Last Updated: 9/12/2013
-->
<xsl:stylesheet version="2.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
    xmlns:fo="http://www.w3.org/1999/XSL/Format" 
    xmlns:xs="http://www.w3.org/2001/XMLSchema" 
    xmlns:fn="http://www.w3.org/2005/xpath-functions" 
    xmlns:xdt="http://www.w3.org/2005/xpath-datatypes" 
    xmlns:ou="http://omniupdate.com/XSL/Variables" 
    exclude-result-prefixes="xs fo fn xdt ou">
    
    
    <xsl:template name="ouform_poll">
        <link rel="stylesheet" href="/_resources/css/oupolls.css"/>
        <xsl:variable name="uuid" select="//ouform/@uuid"/>
        <div class="ldp-poll-container">
            <div class="ldp-poll-form">
                
                <form id="ldp-poll" name="ldp-poll" method="post" class="ldpforms">
                    <xsl:for-each select="//ouform/elements/element">
                        <xsl:if test="./@type = 'input-radio'">
                            
                            <span id="{./@name}" class="none">
                                <xsl:variable name="field_name" select="./@name"/>
                                <h4><xsl:value-of select="./label"/></h4>
                                <span>
                                    <xsl:for-each select="./options/option">
                                        <input type="radio" name="{$field_name}" value="{./@value}" title="{./node()}">
                                            <xsl:if test="./@selected = 'true'">									
                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                            </xsl:if>
                                        </input><xsl:copy-of select="./node()"/>&nbsp;<br/>
                                    </xsl:for-each>
                                </span>
                                <br/>
                            </span>
                        </xsl:if>
                    </xsl:for-each>	
                    <input type="hidden" name="polltext" value ="poll_text"/>	
                    <input type="hidden" name="type" value ="poll"/>	
                    <input type="hidden" name="form_uuid" value ="{$uuid}"/>
                    <xsl:if test="not($ou:action='prv')">
                        <input type="submit" name="button" id="button" class="submit" value="Submit" />
                    </xsl:if>
                </form>		
                <xsl:if test="not($ou:action='prv')">
                    <br/><a href="#" class="results" style="color:#000">View Results</a>
                </xsl:if>
            </div>
            <div class="ldp-poll-results"><xsl:comment>This comment required for XHTML output.</xsl:comment>
                
            </div>
        </div>
        
        <!--<script type="text/javascript" src="/_resources/js/oupolls.js">//</script>-->
        <script type="text/javascript">
            $(document).ready(function(){
            var form_data = $('#ldp-poll').serialize();
            $("#ldp-poll").bind("submit", function() {
            
            $.ajax({
            type  : "POST",
            cache : false,
            // change this to the server side script you are using for regular form submission
            url : "<xsl:value-of select="$ou:resource-http-root" />/_resources/php/ldp/modules/forms.php",
            data  : $(this).serialize(),
            complete: function(){},
            success: function(data) {
            $(".spanerror").removeClass("spanerror");$(".errmsg").html("").removeClass("errmsg");
            var resultObj = jQuery.parseJSON(data);
            var errC=/[faultcode]+\s:/;
            var faultCode=errC.exec(resultObj.message);
            if(resultObj.active == false){
            if(!faultCode)
            {
            $("#status").removeClass("success");
            $("#status").addClass("error");
            var dataSet=resultObj.message+"<br/>";
            $.each(resultObj.data, function(i,data){
            var d = data.message;
            highlightID="#"+data.name;
            $(highlightID).addClass("spanerror");
            $(highlightID).find("span").html(data.message).addClass("errmsg");
            });
            $("#status").html(dataSet);
            } //err Code
            else
            {
            var dataSet=resultObj.message+" "+resultObj.data;
            $("#status").addClass("error");
            $("#status").html(dataSet);
            }
            }
            else{
            $("#status").removeClass("error");
            $("#status").addClass("success");
            if(!poll){
            $("#ldp-poll").remove();
            $("#status").html(resultObj.message);
            }
            else{
            get_results();
            }
            
            }
            
            },
            error: function(data){
            
            }
            });
            
            return false;
            });
            
            
            var poll="true";
            var form_id=$("input[name=form_uuid]").attr('value');
            
            var names="";
            $('#ldp-poll input:radio').each(function(data){
            names+=$(this).val()+":"+$(this).attr('title')+",";
            });
            
            var ajax_data="uuid="+form_id+"&amp;response=html"+"&amp;names="+names; 
            
            function animateResults(){
            $(".ldp-poll-results div").each(function(){
            var percentage = $(this).next().text();
            $(this).css({width: "0%"}).animate({width: percentage}, 'slow');});
            }
            
            function get_results(){
            $('.ldp-poll-results').html("");
            $('.ldp-poll-form').fadeOut(5);
            $('.ldp-poll-results').fadeIn(700);
            $.ajax({
            // Change this part to point to the server side script you are using for poll result retrieval
            url:"/_resources/php/ldp/get_poll.php",
            data: ajax_data,
            success:function(data){
            $(".ldp-poll-results").html(data);
            $(".ldp-poll-results").append('<a href="#" class="poll-back">Return To Poll</a>');
            animateResults();
            }
            });
            }
            
            $(".results").click(function(){
            get_results();
            return false;
            });
            $(".ldp-poll-results").delegate(".poll-back","click",function(){
            $('.ldp-poll-results').hide();
            $('.ldp-poll-form').fadeIn(700);
            
            return false;
            });
            
            
            
            
            });
        </script>
        
    </xsl:template>
    
    
</xsl:stylesheet> 
