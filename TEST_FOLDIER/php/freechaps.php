<?
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:Origin,X-Requested-With, Content-Type, Accept");
		//Url donde esta nuestro JSON													  
		$req = 'https://euw.api.pvp.net/api/lol/euw/v1.2/champion?freeToPlay=true&api_key=29e66e66-e148-4cda-8f1a-b627d7b09c10';
		//Iniciamos cURL junto con la URL
		$cVimeo = curl_init($req);
		//Agregamos opciones necesarias para leer
		curl_setopt($cVimeo,CURLOPT_RETURNTRANSFER, TRUE);
		//Capturamos la URL
		$gVimeo = curl_exec($cVimeo);
		//Descodificamos para leer
		
		echo $gVimeo;

?>