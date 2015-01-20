// JavaScript Document

function createstats(){

	var ch1 = [80,50,10,90]
	var ch1 = [10,20,90,20]
	var ch1 = [40,90,30,100]
	var ch1 = [80,50,10,90]
	
	var att = [70,50,60,90]
	var def = [50,90,80,10]
	var hec = [10,50,80,20]
	var dif = [50,60,40,20]
	
	
	for (var i=1;i<11;i++){
		// IMPRIMIR DIAGRAMA DE BARRAS
		document.getElementById("container").innerHTML += "Campeon con ID: "+i+"<div id='"+i+"champ' class='statics'><div id='"+i+"attack' class='attack'>Ataque</div> <div id='"+i+"defense' class='defense'>Defensa</div> <div id='"+i+"hechizos' class='hechizos'>Hechizo</div><div id='"+i+"diff' class='diff'>Dificultad</div></div>"
		
		
		
		document.getElementById(i+'attack').setAttribute("style","width: "+ch1[0]+"%");
		document.getElementById(i+'defense').setAttribute("style","width: "+ch1[1]+"%");
		document.getElementById(i+'hechizos').setAttribute("style","width: "+ch1[2]+"%");
		document.getElementById(i+'diff').setAttribute("style","width: "+ch1[3]+"%");
	}
}