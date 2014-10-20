<?php
ini_set('display_errors', 1);
// =========================================================
// setActiveNav function
// By: Matt Eschenbaum
// =========================================================

function setActiveNav ($navFile, $activePath){
	$strMatchActive = '><a href="'.$activePath.'"';
	$strReplace = "id=nav_bob ".$strMatchActive;
	$strNavContents = file_get_contents($navFile);
	
	$daReturn = str_replace($strMatchActive, $strReplace, $strNavContents);
}
?>
