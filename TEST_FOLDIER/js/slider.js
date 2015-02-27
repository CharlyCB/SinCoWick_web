


	function bigslide(){
		document.getElementById("slider").className = "slide_max";
		document.getElementById('close').className = "close";
	}
	
	function bigimg(target){

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
				
				for(var a = 0; a < 10; a++){
					if( 'spid'+id[a] == target){
						document.getElementById(target).className = "minislide target";
					}
					else{
						document.getElementById('spid'+id[a]).className = "minislide notarget";
					}
				}
				
				
			}
		});		
		
	}
	
	
	function closeslider(){
		document.getElementById("slider").className = "slide_min";
		document.getElementById('close').className = "";
		
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
				
				for(var a = 0; a < 10; a++){
					document.getElementById('spid'+id[a]).className = "minislide";
				}
				
				
			}
		});		
		
	}