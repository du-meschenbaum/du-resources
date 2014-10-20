// DU Library detect screen width of mobile/tablet users to provide dialogue options

function checkScreenWidth() {
	
	try
		{ 
	
		if (screen.width <= 768) {
		   //prompt
		   var retVal = confirm("Click OK to go to the current mobile-optimized website. Otherwise select Cancel to stay on the new desktop website.");
		   if( retVal == true ){
			  window.location.href = "http://m.du.edu/sites/main/library/";//"http://m.library.du.edu";
			  return true;
		   }else{
			  return false;
		   } 
		
		} //if
	
	} //try
	
	catch(err) {
			//do nothing
		}
	
} //checkScreenWidth function


window.onload=checkScreenWidth;

// jquery dom content ready if available
// $( document ).ready(checkScreenWidth);
