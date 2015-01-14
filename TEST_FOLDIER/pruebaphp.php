<?
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
echo "comilla <pre>";
echo $titulo[0]['id'];
echo "</pre>";

echo "sincomilla <pre>";
echo $titulo[0][id];
echo "</pre>";
?>
 