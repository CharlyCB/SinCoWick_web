<?
	$link;
	function connect(){
		//conectamos a la bd
		$link = mysql_connect('localhost:3306', 'root', 'root') or die('No se pudo conectar: ' . mysql_error());
		//seleccionamos bd	
		mysql_select_db('lol') or die('No se pudo seleccionar la base de datos');
	}
	
	function close(){
		mysql_close($link);
	}
?>