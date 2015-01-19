function bigslide(){
		document.getElementById("slider").className = "slide_max";
		document.getElementById('close').className = "close";
	}
	function bigimg(target){
		for(var a = 0; a < 10; a++){
			if( a == target){
				document.getElementById(target).className = "minislide target";
			}
			else{
				document.getElementById(a).className = "minislide notarget";
			}
		}
	}
	function closeslider(){
		document.getElementById("slider").className = "slide_min";
		document.getElementById('close').className = "";
		for(var a = 0; a < 10; a++){
				document.getElementById(a).className = "minislide";
		}
	}