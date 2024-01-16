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
											url : "pharmacies/all",
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
													data : "adresse"
												},
												{
													data : "lat"
												},
												{
													data : "log"
												},
												{
													data : "zone.nom"
												},
												{
													"render" : function() {
														return '<button type="button" class="btn btn-outline-danger supprimer">Supprimer</button>';
													}
												},
												{
													"render" : function() {
														return '<button type="button" class="btn btn-outline-secondary modifier">Modifier</button>';
													}
												} ]

									});
					
							
									


					$('#btn').click(
							function() {
								
								var nom = $("#nom");
								var adresse = $("#adresse");
								var lat = $("#lat");
								var log = $("#log");
								var zone = $("#zone");
								
								if ($('#btn').text() == 'Ajouter') {
									console.log(zone.val)
									var p = {
										
										nom : nom.val(),
										etat : "valide",
										adresse : adresse.val(),
										lat : lat.val(),
										log : log.val(),
										zone : {
											id : zone.val()
										}
										
									};

									$.ajax({
										url : 'pharmacies/save',
										contentType : "application/json",
										dataType : "json",
										data : JSON.stringify(p),
										type : 'POST',
										async : false,
										success : function(data, textStatus,
												jqXHR) {
											table.ajax.reload();
										},
										error : function(jqXHR, textStatus,
												errorThrown) {
											console.log(textStatus);
										}
									});
									$("#main-content").load(
											"./page/admin/pharmacy.html");
								}
							});

					$('#table-content')
							.on(
									'click',
									'.supprimer',
									function() {

										var id = $(this).closest('tr').find(
												'td').eq(0).text();
										var oldLing = $(this).closest('tr')
												.clone();
										var newLigne = '<tr style="position: relative;" class="bg-light" ><th scope="row">'
												+ id
												+ '</th><td colspan="4" style="height: 100%;">';
										newLigne += '<h4 class="d-inline-flex">Voulez vous vraiment supprimer cette pharmacie ? </h4>';
										newLigne += '<button type="button" class="btn btn-outline-primary btn-sm confirmer" style="margin-left: 25px;">Oui</button>';
										newLigne += '<button type="button" class="btn btn-outline-danger btn-sm annuler" style="margin-left: 25px;">Non</button></td></tr>';

										$(this).closest('tr').replaceWith(
												newLigne);
										$('.annuler').click(
												function() {
													$(this).closest('tr')
															.replaceWith(
																	oldLing);
												});
										$('.confirmer')
												.click(
														function(e) {
															e.preventDefault();
															$
																	.ajax({
																		url : 'pharmacies/delete/'
																				+ id,
																		data : {},
																		type : 'DELETE',
																		async : false,
																		success : function(
																				data,
																				textStatus,
																				jqXHR) {
																			if (data
																					.includes("error") == true) {
																				$(
																						"#error")
																						.modal();
																			} else {
																				table.ajax
																						.reload();
																			}
																		},
																		error : function(
																				jqXHR,
																				textStatus,
																				errorThrown) {
																			$(
																					"#error")
																					.modal();
																		}
																	});

														});

									});

					$('#table-content').on(
							'click',
							'.modifier',
							function() {
								var btn = $('#btn');
								var id = $(this).closest('tr').find('td').eq(0).text();
								
								var nom = $(this).closest('tr').find('td').eq(1).text();
								
								var adresse = $(this).closest('tr').find('td').eq(
										2).text();
								var lat = $(this).closest('tr').find('td').eq(
											3).text();
								var log = $(this).closest('tr').find('td').eq(
												4).text();
								var zone = $(this).closest('tr').find('td').eq(
													5).text();
								btn.text('Modifier');
								
								$("#nom").val(nom);
								$("#adresse").val(adresse);
								$("#lat").val(lat);
								$("#log").val(log);
								$("#zone option").filter(function(index) { return $(this).text() === zone; }).attr('selected', 'selected');
								btn.click(function(e) {
									e.preventDefault();
									var p = {
										nom : $("#nom").val(),
										adresse : $("#adresse").val(),
										lat : $("#lat").val(),
										log : $("#log").val(),
										zone : {
											id : $("#zone").val()
										}
									};
									if ($('#btn').text() == 'Modifier') {
										$.ajax({
											url : 'pharmacies/update/'+id,
											contentType : "application/json",
											dataType : "json",
											data : JSON.stringify(p),
											type : 'PUT',
											async : false,
											success : function(data,
													textStatus, jqXHR) {
												table.ajax.reload();
												$("#code").val('');
												$("#nom").val('');
												btn.text('Ajouter');
											},
											error : function(jqXHR, textStatus,
													errorThrown) {
												console.log(textStatus);
											}
										});
										$("#main-content").load(
												"./page/pharmacy.html");
									}
								});
							});
						
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
