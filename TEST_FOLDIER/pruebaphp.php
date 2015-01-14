<?

echo "flieget";

$página_inicio = file_get_contents(' https://euw.api.pvp.net/api/lol/euw/v1.2/champion?freeToPlay=true&api_key=29e66e66-e148-4cda-8f1a-b627d7b09c10 ');
echo $página_inicio;

echo "curl";

$c = curl_init('https://euw.api.pvp.net/api/lol/euw/v1.2/champion?freeToPlay=true&api_key=29e66e66-e148-4cda-8f1a-b627d7b09c10 ');
curl_setopt($c, CURLOPT_RETURNTRANSFER, true);
$page = curl_exec($c);
curl_close($c);
echo $page;

echo "httprequest";

require_once 'HTTP/Request.php';
$r = new HTTP_Request('https://euw.api.pvp.net/api/lol/euw/v1.2/champion?freeToPlay=true&api_key=29e66e66-e148-4cda-8f1a-b627d7b09c10');
$r->sendRequest();
$page = $r->getResponseBody();
echo $page;

echo "contents";
$url = 'http://FDW:PASS@www.example.com/proyecto.php';
$page = file_get_contents($url);
echo $page;

?>



 