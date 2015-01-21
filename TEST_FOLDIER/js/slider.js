


	function bigslide(){
		document.getElementById("slider").className = "slide_max";
		document.getElementById('close').className = "close";
	}
	
	function bigimg(target){
		var id = target.replace('spid','');
		for(var a = 76; a < 86; a++){
			if( 'spid'+a == target){
				document.getElementById(target).className = "minislide target";
			}
			else{
				document.getElementById('spid'+a).className = "minislide notarget";
			}
		}
	}
	
	
	function closeslider(){
		document.getElementById("slider").className = "slide_min";
		document.getElementById('close').className = "";
		for(var a = 76; a < 86; a++){
				document.getElementById('spid'+a).className = "minislide";
		}
	}