	var path = "http://gehena.byethost7.com/CLASE/Practica%209%20-%20act%20%2016,%2018,%2019/appweb2015/";
	function ActualizarDatos(){
		var cliente_id = $('#cliente_id').val();
		var nombres = $('#nombres').val();
		var ciudad = $('#ciudad').val(); 
		var alternativas = $("input[name='alternativas']:checked").val();
		var telefono = $("#telefono").val();
		var fecha_nacimiento = $("#fecha_nacimiento").val();

		$.ajax({
			url: path+'actualizar.php',
			type: "POST",
			data: "submit=&nombres="+nombres+"&ciudad="+ciudad+"&alternativas="+alternativas+"&telefono="+telefono+"&fecha_nacimiento="+fecha_nacimiento+"&cliente_id="+cliente_id,
			success: function(datos){
				alert(datos);
				ConsultaDatos();
				$("#formulario").hide();
				$("#tabla").show();
			}
		});
		return false;
	}
	
	function calendar(){
		$("#fecha_nacimiento").datepicker({
			firsDay:1,
			changMonth:true,
			changeYear:true,
			dateFormat:"yy-mm-dd"
		});
	}	
	
		
	
	
	
	
	function driverf(){
	$(document).ready(function(){
	// mostrar formulario de actualizar datos
	$("table tr .modi a").click(function(){
		$('#tabla').hide();
		$("#formulario").show();
		$.ajax({
			type: "GET",
			url: path+"actualizar.php?id="+this.id,
			success: function(datos){
				datos = JSON.parse(datos);

				$("#formulario").html(
					$("<form>", {
				   id: 'frmClienteActualizar',
				   name: 'frmClienteActualizar',
				   onsubmit: 'ActualizarDatos(); return false',
				   method: 'post'
				}).append(
					$('<input>', {
						type: 'hidden',
						name: 'cliente_id',
						id: 'cliente_id',
						value:datos.id
					}),
					$('<p>').append(
						$('<label>', {
							text: 'Nombres'
						}).append(
							$('<br>'),
							$('<input>', {
								class: 'text',
								type: 'text',
								name: 'nombres',
								id: 'nombres' ,
								value:datos.nombres
							}) 
						)
					),$('<p>').append(
						$('<label>', {
							text: 'Ciudad'
						}).append(
							$('<br>'),
							$('<input>', {
								class: 'text',
								type: 'text',
								name: 'ciudad',
								id: 'ciudad' ,
								value:datos.ciudad
							}) 
						)
					),$('<p>').append(
						$('<label>', {
							text: 'Masculino'       
						}).prepend(
							$('<input>', {
								type: 'radio',
								name: 'alternativas',
								id: 'masculino', 
								value: 'M'
							}) 
						),$('<label>', {
							text: 'Femenino'
						}).prepend(
							$('<input>', {
								type: 'radio',
								name: 'alternativas',
								id: 'femenino',
								value: 'F'
							}) 
						)
				
					),$('<p>').append(
						$('<label>', {
							text: 'Telefono'
						}).append(
							$('<br>'),
							$('<input>', {
								class: 'text',
								type: 'text',
								name: 'telefono',
								id: 'telefono' ,
								value:datos.telefono
							}) 
						)     
					),$('<p>').append(
						$('<label>', {
							text: 'Fecha Nacimiento'
						}).append(
							$('<a>',{
								onclick: 'show_calendar()',
								style: 'cursor: pointer;'
							}).append(
								$('<small>', {
									text: '(calendario)'
								})
							),
							$('<br>'),
							$('<input>', {
								class: 'text',
								type: 'text',
								name: 'fecha_nacimiento',
								id: 'fecha_nacimiento',
								readonly: 'readonly' ,
								value:datos.fecha_nacimiento
							}),$('<div>', {
								id: 'calendario'
								
							}) 
						),$('<p>').append(
							$('<input>', {
								type: 'submit',
								name: 'submit',
								id: 'button',
								value: 'enviar' 
							}),$('<label>'),
							$('<input>', {
								type: 'button',
								name: 'cancelar',
								id: 'cancelar',
								value: 'cancelar',
								onclick:'Cancelar()' 
							})
				 
						)
					)
				)
				);
				calendar();
				if(datos.sexo == 'F' || datos.sexo == 'f'){
					$('#femenino').prop('checked',true);
					}
				else if(datos.sexo == 'm' || datos.sexo == 'M' ){
					$('#masculino').prop('checked',true);
				}
				
			}
		});
		return false;
	});
	
	// llamar a formulario nuevo
	$("#nuevo a").click(function(){
		$("#formulario").show();
		$("#tabla").hide();
		$.ajax({
			type: "GET",
			url:  path+"nuevo.php",
			success: function(datos){
				$("#formulario").html(
					$("<form>",{
            id:  'frmClienteNuevo',
            name: 'frmClienteNuevo',
            method: 'post',
            onsubmit: 'GrabarDatos(); return false'
					}).append(
						$('<p>').append(
							$('<label>',{
								text: 'Nombres'
							}).append(
								$('<br/>'),
								$('<input>',{
									class:'text',
									type:'text',
									name:'nombres',
									id:'nombres'
								})
							)
						),
						$('<p>').append(
							$('<label>',{
								text: 'Ciudad'
							}).append(
								$('<br/>'),
								$('<input>',{
									class:'text',
									type:'text',
									name:'ciudad',
									id:'ciudad'
								})
							)
						),
						$('<p>').append(
							$('<label>',{
								text: 'Masculino'
							}).prepend(
								$('<input>',{
									type:'radio',
									name:'alternativas',
									id:'masculino',
									value: 'M'
								})
							),
							$('<label>',{
								text: 'Femenino'
							}).prepend(
								$('<input>',{
									type:'radio',
									name:'alternativas',
									id:'femenino',
									value: 'F'
								})
							)
						),
						$('<p>').append(
							$('<label>',{
								text: 'Telefono'
							}).append(
								$('<br/>'),
								$('<input>',{
									class:'text',
									type:'text',
									name:'telefono',
									id:'telefono'
								})
							)
						),
						$('<p>').append(
							$('<label>',{
								text: 'Fecha Nacimiento'
							}).append(
								$('<br/>'),
								$('<input>',{
									readonly: 'readonly',
									class:'text',
									type:'text',
									name:'fecha_nacimiento',
									id:'fecha_nacimiento',
								onclick: 'calendar()'
			
								})
							),
							$('<div>',{
								id:'calendario',
			
							})
						),
						$('<p>').append(
							$('<input>',{
									type:'button',
									name:'submit',
									id:'id',
									value:'Enviar',
									onclick:"GrabarDatos()"
								}),
							$('<label>'),
							$('<input>',{
									type:'button',
									class:"cancelar",
									name:'cancelar',
									id:'cancelar',
									value:'cancelar',
									onclick:"Cancelar()"
								})
							)
						)
							
							);
							calendar();
						}
					});
					return false;
				});
			});
		}
/*
	function PintaTabla(dades){
	var source = $("#RellenaTabla").html();
	var template = Handlebars.compile(source);
	$('#tabla').append(template({usuario: dades}));
	}
	*/
	function ConsultaDatos(){
		$.ajax({
			url: path+'consulta.php',
			cache: false,
			type: "GET",
			//LOS DATOS SON EL RESPONSE ECHO JSON
			success: function(datos){
				var source = $("#RellenaTabla").html();
				var template = Handlebars.compile(source);
				var t=template({usuario: JSON.parse(datos)});
				$('#tabla').html(t);
			//	PintaTabla(JSON.parse(datos));
				driverf();
			}
		});
	}
	
	function EliminarDato(cliente_id, cliente_nombres){
		var msg = confirm("Desea eliminar " + cliente_nombres + "?")
		if ( msg ) {
			$.ajax({
				url: path+'eliminar.php',
				type: "GET",
				data: "id="+cliente_id,
				success: function(datos){
					alert(datos);
					$("#fila-"+cliente_id).remove();
				}
			});
		}
		return false;
	}
	
	function GrabarDatos(){
		var nombres = $('#nombres').val();
		var ciudad = $('#ciudad').val(); 
		var alternativas = $("input[name='alternativas']:checked").val();
		var telefono = $("#telefono").val();
		var fecha_nacimiento = $("#fecha_nacimiento").val();
		$.ajax({
			url: path+'nuevo.php',
			type: "POST",
			data: "submit=&nombres="+nombres+"&ciudad="+ciudad+"&alternativas="+alternativas+"&telefono="+telefono+"&fecha_nacimiento="+fecha_nacimiento,
			success: function(datos){
				ConsultaDatos()
				alert(datos);
				$("#formulario").hide();
				$("#tabla").show();
			}
		});
		return false;
	}

	function Cancelar(){
		$("#formulario").hide();
		$("#tabla").show();
		return false;
	}
	
	// funciones del calendario
	function update_calendar(){
		var month = $('#calendar_mes').val();
		var year = $('#calendar_anio').val();
	
		var valores='month='+month+'&year='+year;
	
		$.ajax({
			url: path+'calendario.php',
			type: "GET",
			data: valores,
			success: function(datos){
				$("#calendario_dias").html(datos);
			}
		});
	}
	
	function set_date(date){
		$('#fecha_nacimiento').attr('value',date);
		show_calendar();
	}
	
	function show_calendar(){
		$('#calendario').toggle();
	}
	
  