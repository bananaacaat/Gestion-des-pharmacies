/**
 * 
 */$(document)
 .ready(
	function() {
		$.ajax({
			url:'/villes/all',
			type:'GET',
			success : function(data) {	
			var option = '';
			data.forEach(e=>{
					option += '<option value ='+e.id+'>'+e.nom+'</option>';
							});
									
			$('#ville').append(option);
										},
			error : function(jqXHR, textStatus,
							errorThrown) {
							console.log(textStatus);
								}
								
		});	
		
		$("#ville").change(function () {
			var ville = $("#ville");
			if ($('#ville').val() != 0 ) {
				$.ajax({
					url:'villes/zones/'+ville.val(),
					type:'GET',
					success : function(data) {	
					var option = '<option value="0">Choisir une zone</option>';
					data.forEach(e=>{
							option += '<option value ='+e.id+'>'+e.nom+'</option>';
									});
											
					$('#zone').html(option);
												},
					error : function(jqXHR, textStatus,
									errorThrown) {
									console.log(textStatus);
										}
										
				});
			}
			else{
				var option = '<option value="0">Choisir une zone</option>';
				$('#zone').html(option);

			}
		});

		
		table = $('#tpharmacy')
				.DataTable({
							ajax : {
								url : "pharmacies/nv",
								dataSrc : ''
							},
							columns : [
									{
										data : "id"
									},
									{
										data : "nom"
									},
									{
										data : "zone.ville.nom"
									},
									
									{
										data : "zone.nom"
									},
									{
										"render" : function() {
											return '<button type="button" class="btn btn-outline-secondary modifier">Valider</button>';
										}
									}  ]

						});
		


						$('#table-content')
						.on(
								'click',
								'.modifier',
								function() {

									var id = $(this).closest('tr').find(
											'td').eq(0).text();
											$.ajax({
												url:'/pharmacies/byId/'+id,
												type:'GET',
												success : function(data) {	
													option = '<h5 class="modal-title" id="exampleModalLabel">'+ data.nom +' title</h5>'
													+'<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
													 + '<span aria-hidden="true">&times;</span>';
													$("#modt").html(option);
													option1 = '<div class="row">'
													+'<p > &nbsp; Nom : <span class="badge badge-secondary">'+data.nom+'</span></p>'
													+'</div>'
													+'<div class="row">'
													+'<p>&nbsp; Adresse : <span class="badge badge-secondary">'+data.adresse+'</span></p>'
													+'</div>'
													+'<div class="row">'
													+'<p> &nbsp; Ville : <span class="badge badge-secondary">'+data.zone.ville.nom+'</span></p>'
													+'<p> &nbsp; Zone : <span  class="badge badge-secondary">'+data.zone.nom+'</span></p>'
													+'</div>'
													+'<div class="row">'
													+'<p> &nbsp; latitude : <span class="badge badge-secondary">'+data.lat+'</span></p>'
													+'<p> &nbsp; longitude : <span  class="badge badge-secondary">'+data.log+'</span></p>'
													+'<div id="map" style="height: 250px; width: 100%; " ></div>'
													+'</div>'
													$("#modb").html(option1);
													option3 = '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'
													+'<button type="button" onClick="Validate('+data.id+');" class="btn btn-primary">Valider</button>';
													$("#modalf").html(option3);

													var map = L.map('map',{
														center: [parseFloat(parseInt(data.lat)), parseFloat(parseInt(data.log))],
														zoom: 15
													  });

													

																										
													L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
														attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
													}).addTo(map);
													
													var curLocation = [data.lat, data.log];
													var markers = L.marker(curLocation,{draggable:'false'})
													
													markers.addTo(map);
													map.panTo(new L.LatLng(data.lat, data.log));
													
													
  
																			},
												error : function(jqXHR, textStatus,
																errorThrown) {
																console.log(textStatus);
																	}
																	
											});	
									$('#myModal').modal('toggle');
									$('#myModal').modal('show');
									

								});

								function Validate(id, nb) {
									$.ajax({
										url: "/pharmacies/validate/" + id,
										success: function (data, textStatus, jqXHR) {
											$('#myModal').modal('hide');
											$('#InfoModal').modal('show');
											$('#infb').html("<h2>Validé avec success</h2>")
											
										},
										error: function (jqXHR, textStatus, errorThrown) {
											console.log("erreur");
											$('#myModal').modal('hide');
											$('#infb').html("<h2>Echec de l'opération</h2>")
											$('#InfoModal').modal('show');
											
										}
										
									});
									
							
								}
								function Refresh() {
									$('#InfoModal').modal('hide');
									$("#main-content").load("./page/admin/validation.html");
								}
								window.Validate = Validate;
								window.Refresh = Refresh;
						



		// function remplir(data) {
		// var contenu = $('#table-content');
		// var ligne = "";
		// for (i = 0; i < data.length; i++) {
		// ligne += '<tr><th scope="row">' + data[i].id + '</th>';
		// ligne += '<td>' + data[i].code + '</td>';
		// ligne += '<td>' + data[i].nom + '</td>';
		// ligne += '<td>' + data[i].prix + '</td>';
		// ligne += '<td>' + data[i].dateAchat + '</td>';
		// ligne += '<td><button type="button" class="btn
		// btn-outline-danger
		// supprimer">Supprimer</button></td>';
		// ligne += '<td><button type="button" class="btn
		// btn-outline-secondary
		// modifier">Modifier</button></td></tr>';
		// }
		// contenu.html(ligne);
		// }

		// $.ajax({
		// url: 'produits/all',
		// data: {op: ''},
		// type: 'GET',
		// async: false,
		// success: function (data, textStatus, jqXHR) {
		// console.log(data);
		// remplir(data);
		// },
		// error: function (jqXHR, textStatus, errorThrown) {
		// console.log(textStatus);
		// }
		// });
	});
