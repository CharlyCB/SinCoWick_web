<?
	require_once('dbconnect.php');
	
	function consulta_bd($query, $campo){
		//conectamos bd
		connect();
		//lanzamos consulta
		$result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());	
		//obtenemos datos
		$datos = mysql_result($result, 0, $campo);
		//liberamos result
		mysql_free_result($result);
		//cerramos bd
		close();
		//devolvemos datos
		return $datos;
	}
	
	
?>