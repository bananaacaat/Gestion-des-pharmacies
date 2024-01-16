/**
 * 
 */$(document)
		.ready(
				function() {
					
					var map = L.map("map").setView([33.201924189778936, -8.492431640625002], 6);
					var apiKey = "AAPK37d49776cc6c498bb6c24acc5f417aaaJmFZNNC0WqSluI_pXCnxtODYALo3dXQ3VGXDe-_FmSkiqGT2ORcH3AZCeI7_0lSQ";
					
					var idd = $("#ident").val();
					var url ='./get/imagep/'+idd ;
					var urlsec = "https://i.ibb.co/b6m8d08/Beige-And-Blue-Hospital-Design-Logow.png";
					
					$.ajax({
						url: url,
						type:'GET',
						success : function(data) {	
							var option = '<img class="center" src="'+url+'"></img>';
							$('#img1').html(option);
													},
						error : function(jqXHR, textStatus,
										errorThrown) {
										console.log(textStatus);
										var option = '<img class="center" src="'+urlsec+'"></img>';
										$('#img1').html(option);
											}
										})
					
					$.ajax({
						url:'/villes/all',
						type:'GET',
						success : function(data) {	
						var option = '';
						data.forEach(e=>{
								option += '<option value ='+e.id+'>'+e.nom+'</option>';
										});
												
						$('#ville').html(option);
						$.ajax({
							url:'/zones/all',
							type:'GET',
							success : function(data) {	
							var option = '';
							data.forEach(e=>{
									option += '<option value ='+e.id+'>'+e.nom+'</option>';
											});
													
							$('#zone').html(option);
							$.ajax({
								url:'/pharmacies/byId/'+idd,
								type:'GET',
								success : function(data) {	
									$("#nom").val(data.nom),
									$("#adresse").val(data.adresse),							
									$("#ville").val(data.zone.ville.id),
									$("#zone").val(data.zone.id),
									$("#lat").val(data.lat),
									$("#log").val(data.log),
										
									L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
									attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
									}).addTo(map);

									var searchControl = L.esri.Geocoding.geosearch({
									position: "topright",
									placeholder: "Enter an address or place e.g. 1 York St",
									useMapBounds: false,
									providers: [
										L.esri.Geocoding.arcgisOnlineProvider({
										apikey: apiKey,
										nearby: {
											lat: data.lat,
											lng: data.log
										}
										})
									]
									}).addTo(map);
									var curLocation = [data.lat, data.log];
									var results = L.layerGroup().addTo(map);
									var markers = L.marker(curLocation,{draggable:'true'})
									searchControl.on("results", function (data) {
									results.clearLayers();
									
									markers.setLatLng(data.results[data.results.length - 1].latlng)
									lat.value = markers.getLatLng().lat;
									log.value = markers.getLatLng().lng;
									});
									markers.addTo(map);

									markers.on('drag', function (e) {
												lat.value = markers.getLatLng().lat;
												log.value = markers.getLatLng().lng;

											});

									
															},
								error : function(jqXHR, textStatus,
												errorThrown) {
												console.log(textStatus);
													}
													
							});	
														},
							error : function(jqXHR, textStatus,
											errorThrown) {
											console.log(textStatus);
												}
												
						});
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
					$("#file-upload-form").on("submit", function (e) {

						// cancel the default behavior
						e.preventDefault();
				
						// use $.ajax() to upload file
						$.ajax({
							url: "/upload/image/"+idd,
							type: "POST",
							data: new FormData(this),
							enctype: 'multipart/form-data',
							processData: false,
							contentType: false,
							cache: false,
							success: function (res) {
								console.log(res);
							},
							error: function (err) {
								console.error(err);
							}
							
						});
						location.reload();
					});
					
					
					$('#btn').click(
							function() {
								
								var nom = $("#nom");
								var adresse = $("#adresse");
								var lat = $("#lat");
								var log = $("#log");
								var zone = $("#zone");
								
								if ($('#btn').text() == 'Modifier') {
									console.log(zone.val)
									var p = {
										lat : lat.val(),
										log : log.val(),
										nom : nom.val(),
										adresse : adresse.val(),
										zone : {
											id : zone.val()
										}
										
									};

									$.ajax({
										url : 'pharmacies/update/'+idd,
											contentType : "application/json",
											dataType : "json",
											data : JSON.stringify(p),
											type : 'PUT',
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
											"./page/user/pharmacy.html");
								}
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
