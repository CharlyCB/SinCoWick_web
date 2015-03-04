<?
	require_once('dbconnect.php');
	
	function consulta_bd($query){
		//conectamos bd
		$con = connect();
		//lanzamos consulta
		$result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());	
		//obtenemos array de datos
		$rawdata = array();
		$i=0;
		while($row = mysql_fetch_assoc($result))
		{
			$rawdata[$i] = $row;
			$i++;
		}
		//liberamos result
		mysql_free_result($result);
		//cerramos bd
		close($con);
		//devolvemos datos
		return $rawdata;
	}
?>