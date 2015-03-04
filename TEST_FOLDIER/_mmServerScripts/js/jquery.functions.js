	function getfreechamps(){
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
				var img;
				var logo = 'lgid';
				$('#slider').html("");
				
				for(var b = 0; b < 10; b++){
					img = 'spid'+id[b];
					$('#slider').append(
						$("<div>",{
							class: 'minislide',
							onclick: "bigimg('"+img+"');" ,
							id: img
						}).append( $("<div>", {
							class:'biglogo',
							id:logo+id[b]
							}).append( $("<a>" ,{
								href:'#'
							})
							)
						)
					);
				}
				
			}
		});
	}