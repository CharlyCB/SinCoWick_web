<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:Origin,X-Requested-With, Content-Type, Accept");
require('clases/cliente.class.php');
require('functions.php');
$objCliente=new Cliente;
$consulta=$objCliente->mostrar_clientes();

if($consulta) {
	$aux = 0;
	while( $cliente = mysql_fetch_array($consulta,MYSQL_ASSOC) ){
		$cli[$aux] = $cliente;
		$aux ++;

	}
}	
	$cli =  json_encode($cli);
	echo $cli;
?>

