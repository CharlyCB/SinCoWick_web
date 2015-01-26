<?
	require_once('execquery.php');
	
	//how to get free champs:
	function getfreechamps(){
		//Url donde esta nuestro JSON													  
		$req = 'url';
		//Iniciamos cURL junto con la URL
		$cVimeo = curl_init($req);
		//Agregamos opciones necesarias para leer
		curl_setopt($cVimeo,CURLOPT_RETURNTRANSFER, TRUE);
		// Capturamos la URL
		$gVimeo = curl_exec($cVimeo);
		//Descodificamos para leer
		$getVimeo = json_decode($gVimeo,true);
		//Asociamos los campos del JSON a variables
		$titulo = $getVimeo['champions'];
		//obtencion de las id's del array de rito:
		for ($i=0; $i < count($titulo) ; $i++) { 
			return $titulo[$i]['id'];
		}
	}
	
	//despues de obtener las id, necesitamos recuperar sus datos, nombre de la bd:
	//llamamos a la funcion y obtenemos los nombres:
	function getnamefree($champ_id){
			$query = "SELECT ch_name FROM champ WHERE ch_id='$champ_id'";
			return consulta_bd($query, "ch_name");	
	}
	
	
?>