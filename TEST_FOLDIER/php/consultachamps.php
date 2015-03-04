<?

require_once('db/execquery.php');


$query = 'SELECT * FROM champs';

$exit = consulta_bd($query);

echo json_encode($exit);

?>