<?php
ini_set('display_errors', 0);
// =========================================================
// formatCourses function
// By: Matt Eschenbaum
// =========================================================

function formatCourses ($uri, $format){
	$strMatchActive = '><a href="'.$activePath.'"';
	$strReplace = "id=nav_bob ".$strMatchActive;
	$strNavContents = file_get_contents($navFile);
	
	$daReturn = str_replace($strMatchActive, $strReplace, $strNavContents);
}
?>
