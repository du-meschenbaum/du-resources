<?php  
$maxDays = $_GET['maxDays'];
$calID = $_GET['calID'];
	 
// do not modify these three lines
$calDay = date("d");
$calMonth = date("m");
$calYear = date("y");
$cal_url = 'http://ducal.du.edu/webevent/scripts/webevent.plx?cmd=rss_export;calID=' . $calID . ';days=' . $maxDays . ';d=' . $calDay . ';m=' . $calMonth . ';y=20' . $calYear;

$content = utf8_encode(file_get_contents($cal_url));
//$rss = simplexml_load_string($content);
//$content = utf8_encode(file_get_contents('http://ducal.du.edu/webevent/scripts/webevent.plx?cmd=rss_export;calID=272')); 
//$msofilter = preg_replace('/mso-.+?:\s*?.+?;/s','',$content);
//$msofilter = preg_replace('/mso-.+?:\s*?.+?;/s','',$content);
//$classfilter = preg_replace('class=.+?:\s*?.+?;/s','',$content);
//$filtered1 = str_replace('style=&quot;&quot; class=&quot;MsoNormal&quot;','',$msofilter);
//$filtered = str_replace('</br>','',$filtered1);
//$quotefilter = str_replace('&quot;','"',$content);
//$clearquotes = preg_replace('/"[^"]+"/','""',$quotefilter);
//$clearop = str_replace('&lt;o:p&gt;','',$clearquotes);
//$clearopclose = str_replace('&lt;/o:p&gt;','',$clearop);
//$clearclass = str_replace('class=""','',$clearopclose);
//$clearspan = str_replace('&lt;span style="" lang=""&gt;','',$clearclass);
//$clearspanclose = str_replace('&lt;/span&gt;','',$clearspan);
//$replacequotes = str_replace('"','&quot;',$clearspanclose);
//$xmlv = str_replace('xml version=&quot;&quot;','xml version="1.0"',$replacequotes);
//$rssv = str_replace('rss version=&quot;&quot;','rss version="2.0"',$xmlv);
//$clean = str_replace('&lt;?xml:namespace prefix = o ns = &quot;&quot; /&gt;','',$rssv);
//$classfilter = preg_replace('style=.+?:\s*?.+?;/s','',$filter);
//$filter2 = str_replace('\"','&quote;',$classfilter );

//$str = htmlspecialchars_decode($content);
//$strip = preg_replace("|<(\w+)([^>/]+)?|","<$1",$str);
//$remove_o = str_replace('<o>','',$strip);
//$remove_oclose = str_replace('</o:p>','',$remove_o);
//$remove_span = str_replace('<span>','',$remove_oclose);
//$remove_spanclose = str_replace('</span>','',$remove_span);
//$remove_font = str_replace('<font>','',$remove_spanclose);
//$remove_fontclose = str_replace('</font>','',$remove_font);
//$remove_p = str_replace('<p>','',$remove_fontclose); 
//$remove_pclose = str_replace('</p>','',$remove_p);
//$replace_br = str_replace('<br>','&lt;br /&gt;',$remove_pclose); 
//$replace_a = str_replace('<a ','&lt;a ',$replace_br);
//$replace_aclose = str_replace('</a>','&lt;/a&gt;',$replace_a);
//$remove_xmlns = str_replace('<?xml:namespace prefix = o ns = "urn:schemas-microsoft-com:office:office" />','',$replace_aclose);
//$replace_a = str_replace('<a//','<a href="http://',$remove_xmlns);
//$replace_rss = str_replace('<rss>','<rss version="2.0">',$replace_a);
//$str = htmlspecialchars_decode($content);
//$strip = preg_replace('|<(\w+)([^>/]+)?|','<$1',$str);
//$strip = str_replace('<?xml:namespace prefix = o ns = "urn:schemas-microsoft-com:office:office" />','',$strip);
//$strip = str_replace('<o>','',$strip);
//$strip = str_replace('</o:p>','',$strip);
//$strip = str_replace('<font>','',$strip);
//$strip = str_replace('</font>','',$strip);
//$strip = str_replace('<span>','',$strip);
//$strip = str_replace('</span>','',$strip);
//$strip = str_replace('<p>&nbsp;</p>','',$strip);
//$strip = str_replace('&nbsp;',' ',$strip);
//$strip = str_replace('&amp;','and',$strip);
//$strip = str_replace('&','&amp;',$strip);
//$strip = str_replace('<a//','&lt;a href="http://',$strip);
//$strip = str_replace('">','"&gt;',$strip);
//$strip = str_replace('<p>','&lt;p&gt;',$strip);
//$strip = str_replace('</p>','&lt;/p&gt;',$strip);
//$strip = str_replace('</a>','&lt;/a&gt;',$strip);
//$strip = str_replace('<br>','&lt;br /&gt;',$strip);
//$strip = str_replace('&lt;p&gt;&lt;/p&gt;','',$strip);
//$strip = str_replace('<rss>','<rss version="2.0">',$strip);
//$strip = str_replace('  ','',$strip);

//function demicrosoftize($str) {
//    return strtr($str,
//"\x82\x83\x84\x85\x86\x87\x89\x8a" .
//"\x8b\x8c\x8e\x91\x92\x93\x94\x95" .
//"\x96\x97\x98\x99\x9a\x9b\x9c\x9e\x9f",
//"'f\".**^\xa6<\xbc\xb4''" .
//"\"\"---~ \xa8>\xbd\xb8\xbe");
//}

//$content = demicrosoftize($content);
function stripInvalidXml($value)
{
    $ret = "";
    $current;
    if (empty($value)) 
    {
        return $ret;
    }

    $length = strlen($value);
    for ($i=0; $i < $length; $i++)
    {
        $current = ord($value{$i});
        if (($current == 0x9) ||
            ($current == 0xA) ||
            ($current == 0xD) ||
            (($current >= 0x20) && ($current <= 0xD7FF)) ||
            (($current >= 0xE000) && ($current <= 0xFFFD)) ||
            (($current >= 0x10000) && ($current <= 0x10FFFF)))
        {
            $ret .= chr($current);
        }
        else
        {
            $ret .= " ";
        }
    }
    return $ret;
}
$content = stripInvalidXml($content);
echo $content;

?>