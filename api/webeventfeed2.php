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
echo $content;

?>