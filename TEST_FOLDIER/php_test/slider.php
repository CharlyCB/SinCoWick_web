<?
require_once('db/getfreechamp.php');
	//Generación del SliderGrande
	function sliderchamps(){
		//parte de arribadel slider
		echo "<div class='slide_cont'>
                <a onclick='closeslider()' id='close'></a>
                <div class='slide_min' onclick='bigslide();' id='slider'>";
		
		//Es muy raro que hayan más de 10 campeones gratis por lo que
		//Pondremos 10 de serie.
		for($i = 0; $i < 10 ; $i ++){
			//obtenemos la ID de los campeones llamando a la funcion:
			//concatenamos la id con las palabras clave para obtener su logo.
			$fnc = getfreechamps($i);
			$spl = "spid".$fnc;
			$lgo = "lgid".$fnc;
			
			//obtenemos el nombre para poder redirigur a su pagina
			//$fpgn = getnamefree($fnc);
			//concatenacion debe acabar como -> por ejemplo /champions/annie	
			//$pgn = "/champion/".$fpgn;
			
			
			
	
			//lo insertamos en las lineas que controlan los campeones mostrados
			echo "<div class='minislide' onclick='bigimg($spl );' id='$spl'>
                        	<div class='biglogo' id='$lgo'><a href='#'></a></div>
                    </div>";
		}
		
		
		
		//parte de abajo del slider(cierre de los dos divs superiores)
		echo "</div></div>";
	}


?>