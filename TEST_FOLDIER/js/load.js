
	function load(){
		for (var i = 1; i <= 123; i++){

		document.getElementById("champs").innerHTML += 
		"<div id=\""+i+"\"class=\"div_mini\"><img src=\"../images/champs_mini/mid_"+i+".png\" width=\"70\" height=\"70\" /></div>";

		}
		
}

function sprite(){
		var x = 0;
		var y = 0;
		
// SPRITE 0
	for (var i = 1; i <= 3; i++){
		x = 0;
		for (var j = 1; j <= 10; j++){
			document.getElementById("champs").innerHTML += "<div id=\"1\" class=\"div_mini\" style=\"height:70px; width:70px; float:left; background: url('../images/spriteCH0.png') "+x+"px "+y+"px no-repeat;\"></div>"
			x =x-70;
			}//FOR j
			y=y-70
	}//FOR i
	
	var y = 0;
	// SPRITE 1
	for (var i = 1; i <= 3; i++){
		x = 0;
		for (var j = 1; j <= 10; j++){
			document.getElementById("champs").innerHTML += "<div id=\"1\" class=\"div_mini\" style=\"height:70px; width:70px; float:left; background: url('../images/spriteCH1.png') "+x+"px "+y+"px no-repeat;\"></div>"
			x =x-70;
			}//FOR j
			y=y-70
	}//FOR i
	
	var y = 0;
	// SPRITE 2
	for (var i = 1; i <= 3; i++){
		x = 0;
		for (var j = 1; j <= 10; j++){
			document.getElementById("champs").innerHTML += "<div id=\"1\" class=\"div_mini\" style=\"height:70px; width:70px; float:left; background: url('../images/spriteCH2.png') "+x+"px "+y+"px no-repeat;\"></div>"
			x =x-70;
			}//FOR j
			y=y-70
	}//FOR i
	
	var y = 0;
	// SPRITE 3
	for (var i = 1; i <= 3; i++){
		x = 0;
		for (var j = 1; j <= 10; j++){
			document.getElementById("champs").innerHTML += "<div id=\"1\" class=\"div_mini\" style=\"height:70px; width:70px; float:left; background: url('../images/spriteCH3.png') "+x+"px "+y+"px no-repeat;\"></div>"
			x =x-70;
			}//FOR j
			y=y-70
	}//FOR i
	
	var y = 0;
	// SPRITE 4
	for (var i = 1; i <= 3; i++){
		x = 0;
		for (var j = 1; j <= 10; j++){
			document.getElementById("champs").innerHTML += "<div id=\"1\" class=\"div_mini\" style=\"height:70px; width:70px; float:left; background: url('../images/spriteCH4.png') "+x+"px "+y+"px no-repeat;\"></div>"
			x =x-70;
			}//FOR j
			y=y-70
	}//FOR i
	
	
}// FUNCTION sprite()