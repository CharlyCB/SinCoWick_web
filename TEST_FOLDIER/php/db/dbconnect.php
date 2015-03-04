<?
	
	function connect(){
		//conectamos a la bd
		
		$link =  mysql_connect('localhost:3306', 'root', 'root') or die('No se pudo conectar: ' . mysql_error());
		
		//seleccionamos bd	
		mysql_select_db('loldinger') or die('No se pudo seleccionar la base de datos');
		
		return $link;
	}
	
	function close($con){
		mysql_close($con);
	}
?>