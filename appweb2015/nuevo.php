<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:Origin,X-Requested-With, Content-Type, Accept");
require('functions.php');
if(isset($_POST['submit'])){
	require('clases/cliente.class.php');

	$nombres = htmlspecialchars(trim($_POST['nombres']));
	$ciudad = htmlspecialchars(trim($_POST['ciudad']));
	$sexo = htmlspecialchars(trim($_POST['alternativas']));
	$telefono = htmlspecialchars(trim($_POST['telefono']));
	$fecha_nacimiento = htmlspecialchars(trim($_POST['fecha_nacimiento']));
	
	$objCliente=new Cliente;
	if ( $objCliente->insertar(array($nombres,$ciudad,$sexo,$telefono,$fecha_nacimiento)) == true){
		echo 'Datos guardados';

	}else{
		echo 'Se produjo un error. Intente nuevamente';
	} 
}else{

}
?>