<?php
	// Forwards search requests to appropriate search engine
	
	if (isset($_POST['book_search']) && isset($_POST['book_keyword']) && $_POST['book_keyword'] != "") {
		
		// url strings
		//$peak = "http://lib-lakshmi.cair.du.edu/iii/encore/search?target=";
		$peak = "http://lib-lakshmi.cair.du.edu/iii/encore/search/C|S";
		$biancaAuthor = "http://bianca.penlib.du.edu/search/_parent?searchtype=a&searcharg=";
		$biancaTitle = "http://bianca.penlib.du.edu/search/_parent?searchtype=t&searcharg=";
		$biancaPeriodical = "http://bianca.penlib.du.edu/search/_parent?searchtype=s&searcharg=";
		$biancaSubject = "http://bianca.penlib.du.edu/search/_parent?searchtype=d&searcharg=";
		$biancaCallNumber = "http://bianca.penlib.du.edu/search/_parent?searchtype=c&searcharg=";
		$biancaCourse = "http://bianca.penlib.du.edu/search/_parent?searchtype=r&searcharg=";
		$biancaProfessor = "http://bianca.penlib.du.edu/search/_parent?searchtype=p&searcharg=";
		
		// new query string allow users to view the "Did you mean" suggestion above their search results  f.r.
		$queryString = "&searchscope=2&formids=target&lang=eng&SORT=DX&=Search";
		$encoreQueryString = "|Orighresult|U1?lang=eng&suite=pearl";		
		
		// post values	
		$book_keyword = (string)strip_tags(trim($_POST['book_keyword']));
		$book_search = (string)strip_tags(trim($_POST['book_search']));
	       
		// sanitize keyword (remove M$ smart quotes )				
		// replace UTF-8 characters.	
		$book_keyword = str_replace(
 				array("\xe2\x80\x98", "\xe2\x80\x99", "\xe2\x80\x9c", "\xe2\x80\x9d", "\xe2\x80\x93", "\xe2\x80\x94", "\xe2\x80\xa6"),
 				array("'", "'", '"', '"', '-', '--', '...'),
 				$book_keyword);

		// replace their Windows-1252 equivalents.
 		$book_keyword = str_replace(
 				array(chr(145), chr(146), chr(147), chr(148), chr(150), chr(151), chr(133)),
 				array("'", "'", '"', '"', '-', '--', '...'),
 				$book_keyword);


		switch ($book_search) {		
			
			case "peak" : // Catalog 
			$location = $peak . $book_keyword . $encoreQueryString;
			header("Location: $location");
			break;

			case "a" : // Author
			$location = $biancaAuthor . $book_keyword . $queryString;
			header("Location: $location");
			break;

			case "t" : // Title
			$location = $biancaTitle . $book_keyword . $queryString;
			header("Location: $location");
			break;

			case "s" : // Periodical title
			$location = $biancaPeriodical . $book_keyword . $queryString;
			header("Location: $location");
			break;

			case "d" : // Subject
			$location = $biancaSubject . $book_keyword . $queryString;
			header("Location: $location");
			break;

			case "c" : // LC Call Number
			$location = $biancaCallNumber . $book_keyword . $queryString;
			header("Location: $location");
			break;

			case "r" : // Reserves: Course
			$location = $biancaCourse . $book_keyword . $queryString;	
			header("Location: $location");
			break;
			
			case "p" : // Reserves: Professor
			$location = $biancaProfessor . $book_keyword . $queryString;
			header("Location: $location");
			break;
		}

	} elseif (isset($_POST['catalog_search']) && isset($_POST['catalog_keyword']) && $_POST['catalog_keyword'] != "") {
		
		// post values
		$catalog_search = (string)strip_tags(trim($_POST['catalog_search']));
		$catalog_keyword = (string)strip_tags(trim($_POST['catalog_keyword']));
		
		switch ($catalog_search) {
			
case "summonAll" :
			$location = "http://du.summon.serialssolutions.com/search?s.fvf[]=ContentType%2CNewspaper+Article%2Ct&s.q=" . $catalog_keyword . "";
			header("Location: $location");
			break;
			
			case "summonArticles" :
			$location = "http://du.summon.serialssolutions.com/search?s.fvf[]=IsFullText,false&s.fvf[]=ContentType,Journal%20Article,false&s.ps=50&s.q=" . $catalog_keyword . "";
			header("Location: $location");
			break;

			case "summonBooks" :
			$location = "http://du.summon.serialssolutions.com/search?s.fvf[]=IsFullText,false&s.fvf[]=ContentType,Book,false&s.ps=50&s.q=" . $catalog_keyword . "";
			header("Location: $location");
			break;		
				
		}
		
	} elseif (!isset($_POST['book_keyword']) || !isset($_POST['catalog_keyword']) || $_POST['book_keyword'] == "" || $_POST['catalog_keyword'] == "") {
		$location = "http://" . $_SERVER['SERVER_NAME'] . "/site/";
		header("Location: $location");
		exit();
	}	
?>
