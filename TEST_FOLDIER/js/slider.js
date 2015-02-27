


	function bigslide(){
		document.getElementById("slider").className = "slide_max";
		document.getElementById('close').className = "close";
	}
	
	function bigimg(target){
		//ADASDASDASDA
		//Esta parte no la toques:
		/*
		$.ajax({
			url: 'http://gehena.byethost7.com/pruebasincowick/try001.php',
			cache: false,
			type: "GET",
			//LOS DATOS SON EL RESPONSE ECHO JSON
			success: function(datos){
				datos = JSON.parse(datos);
				
				var id = [];
				for(var i = 0; i < 10; i++){
					id[i] = datos.champions[i].id;
				}
			}
		});		
		
		*/
		//ASDASDASDASAD
		var id = target.replace('spid','');
		for(var a = 1; a < 500; a++){
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
		for(var a = 1; a < 11; a++){
				document.getElementById('spid'+a).className = "minislide";
		}
	}