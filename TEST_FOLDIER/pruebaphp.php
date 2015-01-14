<?
//Url donde esta nuestro JSON													  29e66e66-e148-4cda-8f1a-b627d7b09c10
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

for ($i=0; $i < count($titulo) ; $i++) { 
	echo "comilla <pre>";
	echo $titulo[$i]['id'];
	echo "</pre>";
}
?>