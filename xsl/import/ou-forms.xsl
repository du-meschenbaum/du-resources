<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE xsl:stylesheet SYSTEM "http://commons.omniupdate.com/dtd/standard.dtd">
<!--
OU Forms Stylesheet
Transforms form assets into submitable web forms
Last Updated 1/9/13
-->
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:ou="http://omniupdate.com/XSL/Variables" exclude-result-prefixes="ou">
	
	<xsl:import href="datasets.xsl"/>
	<xsl:import href="oupolls.xsl"/>
	<xsl:param name="serverType">php</xsl:param> <!-- Either: php or asp (for checkboxes and drop-down menus)-->
	
	<xsl:template match="ouform" mode="copy">
		<!--
		***Predefined Attributes:***
		1.legend : To create a placeholder text inside a form. Format: legend=true;
		2.addclass: To add a class to an element block. Format: addclass=[CLASS NAME];
		3.fieldset_start: Defines the statring block for a fieldset. Format: fieldset_start=true;
		4.fieldset_end: Defines the ending block for a fieldset. Format: fieldset_end=true;
		5.fieldset_label: Defines the label of the fieldset. Format: fieldset_label=[FIELDSET LABEL];
		7.size :To add a size attribute to a single-line or multi-line text field. Format: size=10;
		8.cols :To add a cloumns attribute to a multi-line text field. Format: cols=10;
		9.rows :To add a rows attribute to a multi-line text field. Format: rows=10;
		10.dataset: To add a pre-defined dataset to a radio button, checkbox, single-select and multi-select. Format: dataset=[DATASET_NAME];
		 (state, state_ab, country, year, month)
		 
		Rules:
		1. Every declaration in the advanced field must be terminated with a semicolon. Eg. legend=true;addclass=form_legend;
		2. Attributes are always lowercase.
	-->
		
		<div id="status">&nbsp;</div>
		
		<!-- test if the form is a poll -->
		<xsl:variable name="isPoll">
			<xsl:for-each select="//ouform/elements/element">
				<xsl:if test="./@type = 'input-radio'">
					<xsl:if test="(contains(./advanced/node(),'type=poll'))">true</xsl:if>
				</xsl:if>
			</xsl:for-each>
		</xsl:variable>
		
		<xsl:variable name="datepicker">
			<xsl:for-each select="//ouform/elements/element">
				<xsl:if test="./@type = 'input-text'">
					<xsl:if test="(contains(./advanced/node(),'datepicker=true'))">true</xsl:if>
				</xsl:if>
			</xsl:for-each>
		</xsl:variable>
		
		<xsl:variable name="timepicker">
			<xsl:for-each select="//ouform/elements/element">
				<xsl:if test="./@type = 'input-text'">
					<xsl:if test="(contains(./advanced/node(),'timepicker=true'))">true</xsl:if>
				</xsl:if>
			</xsl:for-each>
		</xsl:variable>
		
		<xsl:choose>
			<xsl:when test="$isPoll='true'">
				<xsl:call-template name="ouform_poll"/>
			</xsl:when>
			<xsl:otherwise>
				<form id="form" name="contact-form" method="post" class="ldpforms">
					
					<xsl:apply-templates select="elements/element" mode="ouforms"/>
					
					<input type="hidden" name="form_uuid" value ="{@uuid}"/>
					<input type="hidden" name="site_name" value ="{$ou:site}"/>
					<xsl:if test="not($ou:action='prv')">
						<br/><input type="submit" name="button" id="btn btn-info" class="submit" value="Submit" />
					</xsl:if>
				</form>
				
				<!-- includes start-->
				<!--<script type="text/javascript" src="/_resources/js/ouforms.js"></script>
		<link rel="stylesheet" href="/_resources/css/ouforms-bootstrap.css"/>-->
				<!-- includes end-->
				
				<xsl:if test="$datepicker='true'">
					<link rel="stylesheet" href="//code.jquery.com/ui/1.10.2/themes/smoothness/jquery-ui.css"/>
					<script src="//code.jquery.com/ui/1.10.2/jquery-ui.js">//</script>
               <script type="text/javascript">
					$(function() {
					$(".datepicker").datepicker();
					});
				</script>
				</xsl:if>	
				<xsl:if test="$timepicker='true'">
               <link type="text/css" rel="stylesheet" href="//code.jquery.com/ui/1.10.1/themes/base/jquery-ui.css"/>
               <link type="text/css" rel="stylesheet" href="//code.jquery.com/ui/1.10.2/themes/smoothness/jquery-ui.css"/>
               <script type="text/javascript" src="//code.jquery.com/ui/1.10.2/jquery-ui.js">//</script>
               <script type="text/javascript" src="/_resources/scripts/plugins/jquery-ui-timepicker-addon.js">//</script>
               <script type="text/javascript">
					$(function() {
					$(".timepicker").timepicker({controlType: 'select', timeFormat: 'hh:mm tt' });  
					});  
				</script>
				</xsl:if>
				
				<script type="text/javascript">
					$(document).ready(function(){
					var form_data = $('#form').serialize();
					$("#form").bind("submit", function(e) {
					e.preventDefault();
					$.ajax({
					type : "POST",
					cache : false,
					url : "<xsl:value-of select="$ou:resource-http-root" />/_resources/php/ldp/modules/forms.php",
					data : $(this).serialize(),
					success: function(data) {
					$('.formerror').remove();
					var resultObj = jQuery.parseJSON(data);
					var errC=/[faultcode]+\s:/;
					var faultCode=errC.exec(resultObj.message);
					if(resultObj.active == false){
					if(!faultCode)
					{
					$("#status").removeClass("main-formsuccess");
					
					$("#status").addClass("main-formerror");
					var dataSet=resultObj.message+"<br/>";
					$("#status").append(dataSet);
					$.each(resultObj.data, function(i,data){
					var d = data.message;
					//dataSet = dataSet + d +"<br/>";
					highlightID="#id_"+data.name;
					//console.log(highlightID);
					errorHTML='<span class="formerror">'+data.message+'</span>';
					
					$(highlightID).parent().append(errorHTML);
					});
					
					} //err Code
					else
					{
					var dataSet=resultObj.message+" "+resultObj.data;
					$("#status").addClass("fielderror");
					$("#status").addClass("main-formerror");
					$("#status").html(dataSet);
					}
					}
					else{
					$("#status").removeClass("main-formerror");
					$("#status").addClass("main-formsuccess");
					$("#form").remove();
					$("#status").html(resultObj.message);
					}
					},
					error: function(data){
					}
					});
					return false;
					});
					
					$(function(){
					$('textarea').each(function(){
					if ($(this).val().trim()=='') $(this).val('');
					});
					});
					});
				</script>
			</xsl:otherwise>
		</xsl:choose>
		
	</xsl:template>
	
	
	<xsl:template match="element" mode="ouforms">
		<!-- This outputs the <fieldset> opening node, if the fieldset_start is set to true in the advanced field. -->
		<xsl:if test="contains(ou:get-adv(advanced,'fieldset_start'),'true')">
			<xsl:text disable-output-escaping="yes">&lt;fieldset&gt;</xsl:text>
			<legend class="none">
				<xsl:attribute name="class"><xsl:value-of select="ou:ldp-create-class(advanced,'none')"/></xsl:attribute>
				<xsl:value-of select="ou:get-adv(advanced,'fieldset_label')"/>
			</legend>
		</xsl:if>
		
		<!-- Creates the span that contains the input field, applies the template with 'ouforms-input' mode to process the actual fields -->
		<br />
		<span id="{@name}" class="none">
			<xsl:if test="not(contains(ou:get-adv(advanced,'addclass'),'false'))">
				<xsl:attribute name="class">
					<xsl:value-of select="ou:ldp-create-class(advanced,'none')"/>
				</xsl:attribute>
			</xsl:if>
			<xsl:apply-templates select="." mode="ouforms-input" />
		</span>
		
		<!-- This outputs the </fieldset> closing node, if the fieldset_end is set to true in the advanced field. -->
		<xsl:if test="contains(ou:get-adv(advanced,'fieldset_end'),'true')">
			<xsl:text disable-output-escaping="yes">&lt;/fieldset&gt;</xsl:text>
		</xsl:if>
	</xsl:template>
	
	
	<!-- ***FIELD TYPES *** -->
	<!-- Single-line Text Field -->
	<xsl:template match="element[attribute::type = 'input-text']" mode="ouforms-input">
		<label for="{concat('id_',@name)}"><xsl:value-of select="label"/><xsl:if test="contains(ou:get-adv(advanced,'instructions'),'true')"><br/><span style="font-weight:normal;"><xsl:value-of select="ou:get-adv(advanced,'instruction_text')"/></span></xsl:if></label>
		<!-- if the document is HTML5 you can use placeholder attribute eg. placeholder="{default/node()}" -->
		<input type="text" name="{@name}" id="{concat('id_',@name)}">
			<xsl:if test="not(contains(ou:get-adv(advanced,'size'),'false'))">
				<xsl:attribute name="size"><xsl:value-of select="ou:get-adv(advanced,'size')" /></xsl:attribute>
			</xsl:if>
			<xsl:if test="not(contains(ou:get-adv(advanced,'datepicker'),'false'))">
				<xsl:attribute name="class">datepicker</xsl:attribute>
			</xsl:if>
			<xsl:if test="not(contains(ou:get-adv(advanced,'timepicker'),'false'))">
				<xsl:attribute name="class">timepicker</xsl:attribute>
			</xsl:if>
		</input>
	</xsl:template>
	
	<!-- Single-line Text Field with Legend advanced attribute.  Takes priority over all over single-line text fields. -->
	<xsl:template match="element[attribute::type = 'input-text' and contains(ou:get-adv(advanced,'legend'),'true')]" mode="ouforms-input" priority="1">
		<xsl:copy-of select="default/node()"/>
	</xsl:template>
	
	<!-- Multi-line Text Field -->
	<xsl:template match="element[attribute::type = 'textarea']" mode="ouforms-input">
		<xsl:variable name="adv" select="advanced/node()"/>
		<label for="{concat('id_',@name)}"><xsl:value-of select="label"/><xsl:if test="contains(ou:get-adv(advanced,'instructions'),'true')"><br/><span style="font-weight:normal;"><xsl:value-of select="ou:get-adv(advanced,'instruction_text')"/></span></xsl:if></label>
		<!-- if the document is HTML5 you can use placeholder attribute eg. placeholder="{default/node()}" -->
		<xsl:element name="textarea">
			<xsl:attribute name="name"><xsl:value-of select="./@name" /></xsl:attribute>
			<xsl:attribute name="id"><xsl:value-of select="concat('id_',./@name)" /></xsl:attribute>
			
			<xsl:if test="not(contains(ou:get-adv($adv,'cols'),'false'))">
				<xsl:attribute name="cols"><xsl:value-of select="ou:get-adv($adv,'cols')" /></xsl:attribute>
			</xsl:if>
			
			<xsl:if test="not(contains(ou:get-adv($adv,'rows'),'false'))">
				<xsl:attribute name="rows"><xsl:value-of select="ou:get-adv($adv,'rows')" /></xsl:attribute>
			</xsl:if>
			
			<xsl:if test="not(contains(ou:get-adv($adv,'size'),'false'))">
				<xsl:attribute name="size"><xsl:value-of select="ou:get-adv($adv,'size')" /></xsl:attribute>
			</xsl:if>
			
			<xsl:copy-of select="default/node()"/><xsl:value-of select="' '"/>
		</xsl:element>
		
	</xsl:template>
	
	<!-- Multi-line Text Area with Legend advanced attribute.  Takes priority over all over single-line text fields. -->
	<xsl:template match="element[attribute::type = 'textarea' and contains(ou:get-adv(advanced,'description_text'),'true')]" mode="ouforms-input" priority="1">
		<xsl:value-of select="default/node()" disable-output-escaping="yes"/>
	</xsl:template>
	
	
	<!-- Radio buttons -->
	<xsl:template match="element[attribute::type = 'input-radio']" mode="ouforms-input">
		<label><xsl:value-of select="label"/><xsl:if test="contains(ou:get-adv(advanced,'instructions'),'true')"><br/><span style="font-weight:normal;"><xsl:value-of select="ou:get-adv(advanced,'instruction_text')"/></span></xsl:if></label>
		<xsl:for-each select="options/option">
			<label class="radio">
				<input type="radio" name="{ancestor::element/attribute::name}" value="{node()}">
					<xsl:if test="@selected = 'true'">
						<xsl:attribute name="checked">checked</xsl:attribute>
					</xsl:if>
				</input>
				<xsl:copy-of select="node()"/>
			</label>
		</xsl:for-each>
	</xsl:template>
	
	<!-- Check boxes -->
	<xsl:template match="element[attribute::type = 'input-checkbox']" mode="ouforms-input">
		<xsl:variable name="field_name" select="if($serverType = 'php') then concat(@name,'[]') else @name "/>
		
		<label><xsl:value-of select="label"/><xsl:if test="contains(ou:get-adv(advanced,'instructions'),'true')"><br/><span style="font-weight:normal;"><xsl:value-of select="ou:get-adv(advanced,'instruction_text')"/></span></xsl:if></label>
		<xsl:for-each select="options/option">
			<label class="checkbox">
				<input type="checkbox" name="{$field_name}" value="{node()}" >
					<xsl:if test="@selected = 'true'">
						<xsl:attribute name="checked">checked</xsl:attribute>
					</xsl:if>
				</input>
				<xsl:copy-of select="node()"/>
			</label>
		</xsl:for-each>
	</xsl:template>
	
	<!-- Single-select Drop Down Menus -->
	<xsl:template match="element[attribute::type = 'select-single']" mode="ouforms-input">
		<xsl:variable name="field_name" select="if($serverType = 'php') then concat(@name,'[]') else @name "/>
		
		<label for="{concat('id_',@name)}"><xsl:value-of select="label"/><xsl:if test="contains(ou:get-adv(advanced,'instructions'),'true')"><br/><span style="font-weight:normal;"><xsl:value-of select="ou:get-adv(advanced,'instruction_text')"/></span></xsl:if></label>
		<select name="{$field_name}" id="{concat('id_',@name)}">
			<xsl:for-each select="options/option">
				<option value="{node()}" >
					<xsl:if test="@selected = 'true'">
						<xsl:attribute name="checked">checked</xsl:attribute>
					</xsl:if>
					<xsl:copy-of select="node()"/>
				</option>
			</xsl:for-each>
		</select>
		
	</xsl:template>
	
	<!-- Multi-select Drop Down Menus -->
	<xsl:template match="element[attribute::type = 'select-multiple']" mode="ouforms-input">
		<xsl:variable name="field_name" select="if($serverType = 'php') then concat(@name,'[]') else @name "/>
		
		<label for="{concat('id_',@name)}"><xsl:value-of select="label"/><xsl:if test="contains(ou:get-adv(advanced,'instructions'),'true')"><br/><span style="font-weight:normal;"><xsl:value-of select="ou:get-adv(advanced,'instruction_text')"/></span></xsl:if></label>
		<select name="{$field_name}" multiple="multiple" size="5" id="{concat('id_',@name)}">
			<xsl:for-each select="options/option">
				<option value="{node()}" >
					<xsl:if test="@selected = 'true'">
						<xsl:attribute name="checked">checked</xsl:attribute>
					</xsl:if>
					<xsl:copy-of select="node()"/>
				</option>
			</xsl:for-each>
		</select>
	</xsl:template>
	
	<!-- DATASETS (radio, checkbox, and select options)  Higher priority than normal inputs. -->
	<xsl:template match="element[contains(child::advanced,'dataset')]" mode="ouforms-input" priority="1">
		<xsl:variable name="inputType" select="tokenize(@type,'-')" />
		<xsl:variable name="field_name" select="if($serverType = 'php' and @type != 'input-radio') then concat(@name,'[]') else @name " />
		
		<xsl:choose>
			<xsl:when test="$inputType[1] = 'input'">
				<label><xsl:value-of select="label"/><xsl:if test="contains(ou:get-adv(advanced,'instructions'),'true')"><br/><span style="font-weight:normal;"><xsl:value-of select="ou:get-adv(advanced,'instruction_text')"/></span></xsl:if></label>
				<xsl:for-each select="tokenize(ou:create-dataset(advanced), ',')" >
					<label class="{$inputType[2]}">
						<input type="{$inputType[2]}" name="{$field_name}" value="{normalize-space(.)}"></input>
						<xsl:copy-of select="normalize-space(.)"/>
					</label>
				</xsl:for-each>
			</xsl:when>
			<xsl:otherwise>
				<label for="{concat('id_',@name)}"><xsl:value-of select="label"/><xsl:if test="contains(ou:get-adv(advanced,'instructions'),'true')"><br/><span style="font-weight:normal;"><xsl:value-of select="ou:get-adv(advanced,'instruction_text')"/></span></xsl:if></label>
				<select name="{$field_name}" id="{concat('id_',@name)}">
					<xsl:if test="$inputType[2] = 'multiple'">
						<xsl:attribute name="multiple">multiple</xsl:attribute>
						<xsl:attribute name="size">5</xsl:attribute>
					</xsl:if>
					<xsl:for-each select="tokenize(ou:create-dataset(advanced), ',')" >
						<option value="{normalize-space(.)}" >
							<xsl:copy-of select="normalize-space(.)"/>
						</option>
					</xsl:for-each>
				</select>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
	
	<!-- catch-all (in case of future types) -->
	<xsl:template match="element" mode="ouforms-input"/>
	
	
	<!-- *** FUNCTIONS *** -->
	<!-- Function that parses advanced field for an attribute, and returns the value.  If no value is found, returns 'false'. -->
	<xsl:function name="ou:get-adv">
		<xsl:param name="adv"/>
		<xsl:param name="key"/>
		<xsl:choose>
			<xsl:when test="contains($adv,$key)">
				<xsl:value-of select="substring-before(substring-after($adv,concat($key,'=')),';')"/>
			</xsl:when>
			<xsl:otherwise>false</xsl:otherwise>
		</xsl:choose>
	</xsl:function>
	
	<!-- Function to create a class, uses ou:get-adv -->
	<xsl:function name="ou:ldp-create-class">
		<xsl:param name="adv" />
		<xsl:param name="predefined-class" />
		<xsl:variable name="class-name" select="if(contains($adv,'addclass')) then ou:get-adv($adv,'addclass') else ''" />
		<xsl:value-of select="normalize-space(concat($predefined-class,' ',$class-name))"/>
	</xsl:function>
	
</xsl:stylesheet>
