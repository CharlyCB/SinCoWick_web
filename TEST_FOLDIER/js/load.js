function champ_list(){
	
	var ids = [266,103,84,12,32,34,1,22,268,432,53,63,201,51,69,31,42,122,131,36,119,60,28,81,9,114,105,3,41,86,150,79,104,120,74,39,40,59,24,126,222,429,43,30,38,55,10,85,121,96,7,64,89,127,236,117,99,11,54,90,57,21,82,25,267,75,111,76,56,20,2,61,80,78,133,33,421,58,107,92,68,13,113,35,98,102,27,14,15,72,37,16,50,134,91,44,17,412,18,48,23,4,29,77,6,110,67,45,161,254,112,8,106,19,62,101,5,157,83,154,238,115,26,143];
	var u=0;
	
		var names = ["Aatrox","Ahri","Akali","Alistar","Amumu","Anivia","Annie","Ashe","Azir","Bardo","Blitzcrank","Brand","Braum","Caitlyn","Cassiopeia","Cho'Gath","Corki","Darius","Diana","Dr. Mundo","Draven","Elise","Evelyn","Ezreal","Fiddlesticks","Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves","Hecarim","Heimerdinger","Irelia","Janna","Jarvan IV","Jax","Jayce","Jinx","Kalista","Karma","Karthus","Kassadin","Katarina","Kayle","Kennen","Kha'Zix","Kog'Maw","LeBlanc","Lee Sin","Leona","Lissandra","Lucian","Lulu","Lux","Maestro Yi","Malphite","Malzahar","Maokai","Miss Fortune","Mordekaiser","Morgana","Nami","Nasus","Nautilus","Nidalee","Nocturne","Nunu","Olaf","Oriana","Phanteon","Poppy","Quinn","Rammus","Rek'Sai","Renekton","Rengar","Riven","Rumble","Ryze","Sejuani","Shaco","Shen","Shyvana","Signed","Sion","Sivir","Skarner","Sona","Soraka","Swain","Syndra","Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","Twisted Fate","Twitch","Udyr","Urgot","Varus","Vayne","Veigar","Vel'Koz","Vi","Viktor","Vladimir","Volibear","Warwick","Wukong","Xerath","Xin Zhao","Yasuo","Yorick","Zac","Zed","Ziggs","Zilean","Zyra"]



	for (var i = 1; i <=123; i++){
		document.getElementById("champs").innerHTML += 	
		"<a href=\"http://es.leagueoflegends.wikia.com/wiki/"+names[u]+"\"><div id=\""+ids[u]+"\"class=\"div_mini\" style=\"background: url('../images/champs_mini/mid_"+ids[u]+".png'); background-size: cover;\"></div></a>"
		u++;
	}// END FOR i

}




function sprite(){

var ids = [266,103,84,12,32,34,1,22,268,53,63,201,51,69,31,42,122,131,36,119,60,28,81,9,114,105,3,41,86,150,79,104,120,74,39,40,59,24,126,222,429,43,30,38,55,10,85,121,96,7,64,89,127,236,117,99,11,54,90,57,21,82,25,267,75,111,76,56,20,2,61,80,78,133,33,421,58,107,92,68,13,113,35,98,102,27,14,15,72,37,16,50,134,91,44,17,412,18,48,23,4,29,77,6,110,67,45,161,254,112,8,106,19,62,101,5,157,83,154,238,115,26,143];
		

		var H = 0; // indices del vector ids
		var x = 0; // coordenada x
		
		
// SPRITE 0
	var y = 0; // coordenada y
	for (var i = 1; i <= 3; i++){
		x = 0;
		for (var j = 1; j <= 10; j++){
			document.getElementById("champs").innerHTML += "<div id=\""+ids[H]+"\" class=\"div_mini\" style=\"height:70px; width:70px; float:left; background: url('../images/spriteCH0.png') "+x+"px "+y+"px no-repeat;\"></div>"
			H =H+1;
			x =x-70;
			}//FOR j
			y=y-70;
	}//FOR i
	
// SPRITE 1
	var y = 0;
	for (var i = 1; i <= 3; i++){
		x = 0;
		for (var j = 1; j <= 10; j++){
			document.getElementById("champs").innerHTML += "<div id=\""+ids[H]+"\" class=\"div_mini\" style=\"height:70px; width:70px; float:left; background: url('../images/spriteCH1.png') "+x+"px "+y+"px no-repeat;\"></div>"
			H =H+1;
			x =x-70;
			}//FOR j
			y=y-70
	}//FOR i
	
	
// SPRITE 2
	var y = 0;
	for (var i = 1; i <= 3; i++){
		x = 0;
		for (var j = 1; j <= 10; j++){
			document.getElementById("champs").innerHTML += "<div id=\""+ids[H]+"\" class=\"div_mini\" style=\"height:70px; width:70px; float:left; background: url('../images/spriteCH2.png') "+x+"px "+y+"px no-repeat;\"></div>"
			H =H+1;
			x =x-70;
			}//FOR j
			y=y-70
	}//FOR i
	
// SPRITE 3
	var y = 0;
	for (var i = 1; i <= 3; i++){
		x = 0;
		for (var j = 1; j <= 10; j++){
			document.getElementById("champs").innerHTML += "<div id=\""+ids[H]+"\" class=\"div_mini\" style=\"height:70px; width:70px; float:left; background: url('../images/spriteCH3.png') "+x+"px "+y+"px no-repeat;\"></div>"
			H =H+1;
			x =x-70;
			}//FOR j
			y=y-70
	}//FOR i
	
// SPRITE 4
	var y = 0;
	for (var i = 1; i <= 1; i++){
		x = 0;
		for (var j = 1; j <= 3; j++){
			document.getElementById("champs").innerHTML += "<div id=\""+ids[H]+"\" class=\"div_mini\" style=\"height:70px; width:70px; float:left; background: url('../images/spriteCH4.png') "+x+"px "+y+"px no-repeat;\"></div>"
			H =H+1;
			x =x-70;
			}//FOR j
			y=y-70
	}//FOR i
	
	
}// FUNCTION sprite()