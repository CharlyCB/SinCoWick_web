<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Recuperando datos del Mysql desde PHP</title>
</head>

<body>

	<div>
    	<fieldset>
        	<legend> Datos recuperados: </legend>
            <div>
            	<?php 
                	include("conexion.php");
					$Con = conexion();
					$Con->recuperarDatos();
				?>
            </div>
        </fieldset>    
    </div>







</body>
</html>