<?
	require_once('execquery.php');
	
	//how to get free champs:
	// i = numero de la posicion del array para obtener el camepeon.
	function getfreechamps($i){
		//Url donde esta nuestro JSON													  
		$req = 'https://euw.api.pvp.net/api/lol/euw/v1.2/champion?freeToPlay=true&api_key=29e66e66-e148-4cda-8f1a-b627d7b09c10';
		//Iniciamos cURL junto con la URL
		$cVimeo = curl_init($req);
		//Agregamos opciones necesarias para leer
		curl_setopt($cVimeo,CURLOPT_RETURNTRANSFER, TRUE);
		//Capturamos la URL
		$gVimeo = curl_exec($cVimeo);
		//Descodificamos para leer
		$getVimeo = json_decode($gVimeo,true);
		//Asociamos los campos del JSON a variables
		$titulo = $getVimeo['champions'];
		//obtencion de las id's del array de rito:
		return $titulo[$i]['id'];
	}
	
	//despues de obtener las id, necesitamos recuperar sus datos, nombre de la bd:
	//llamamos a la funcion y obtenemos los nombres:
	function getnamefree($champ_id){
			$query = "SELECT ch_name FROM champ WHERE ch_id='$champ_id'";
			return consulta_bd($query, "ch_name");	
	}
	
	
?>