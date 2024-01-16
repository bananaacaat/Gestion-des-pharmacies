$(document).ready(function(){
	var mail = $("#user-name").text();
	// image par defaut
	var urlsec = "https://i.ibb.co/b6m8d08/Beige-And-Blue-Hospital-Design-Logow.png";
	$.ajax({
		url:'/pharmacies/'+mail,
		type:'GET',
		success : function(data) {	
			var urlt = '';
			var url = './get/imagep/'+data.id ;
			var idd = data.id;
			$("#ident").val(data.id);
				
				var option2;
			
			var option = '<div class="row align-items-center no-gutters">'
					+'<div class="col"><img id="imager" width="300" height="300" src="" style="margin-left: 5px;"></div>'
				+'</div>'
				+'<p style="margin-top: 10px;"> '+data.nom+' </p>'
				+'<p> Adresse :&nbsp; '+data.adresse+'</p>'
				+'<p> Ville :&nbsp; '+data.zone.ville.nom+'</p>'
				+'<p> Zone :&nbsp; '+data.zone.nom+'</p>';
				$('#info').html(option);
				var option1 ="";
				var option2 ="";
			
				if(data.etat=="non valide"){
					option2 = option2 + '<div  class="card text-white bg-warning shadow">'
					+'<div class="card-body">'
						+'<p class="m-0">Status : en cours de vérification</p>'
						+'<p class="text-white-50 small m-0"></p>'
					+'</div>'
					+'</div>';
				}
				if(data.etat=="valide"){
					option2 = option2 + '<div  class="card text-white bg-success shadow">'
					+'<div class="card-body">'
						+'<p class="m-0">Status : pharmacie vérifié</p>'
						+'<p class="text-white-50 small m-0"></p>'
					+'</div>'
				+'</div>';
				}
		
				
				$.ajax({
						url: './pharmacieDeGardes/garde/'+idd,
						type:'GET',
						success : function(data1) {	
							
							

							
							$('#status').html(option2);			
							var today = new Date();
							if(data1.pharmacieDeGardePK!=null && data1.dateFin!=null){
								var datedd = data1.pharmacieDeGardePK.dateDebut;
							
								var dated = parseDate(datedd);
								var dateff = data1.dateFin;
								
								var datef = parseDate(dateff);
								if(dated.getTime()<today.getTime()){
									if(datef.getTime()>today.getTime()){
																												
										var dateFin = parseDate(data1.dateFin);
										var formattedDate = [dateFin.getMonth() + 1, dateFin.getDate(), dateFin.getFullYear()].join('/');
										var formattedDate1 = [ dateFin.getDate(), dateFin.getMonth() + 1, dateFin.getFullYear()].join('/');
										console.log(formattedDate);
										$('#conteur').attr("data-count",formattedDate);
										var optional = '<h6 style="text-align: center ;">Le : '+formattedDate1+' pour achever votre garde</h6>'
										$('#dateF').html(optional);
										$('#textual').html('<span>Vous êtes en Garde il reste :</span>');
		
									}
									else{
										$('#textual').html('<span>Vous avez pas de Garde programmé </span>');
										$('#conteur').css('visibility', 'hidden');
									}
									
	
								}
								else{
									if(datef.getTime()>dated.getTime()){
										var dateFin = parseDate(datedd);
										var formattedDate = [dateFin.getMonth() + 1, dateFin.getDate(), dateFin.getFullYear()].join('/');
										var formattedDate1 = [ dateFin.getDate(), dateFin.getMonth() + 1, dateFin.getFullYear()].join('/');
										console.log(formattedDate);
										$('#conteur').attr("data-count",formattedDate);
										var optional = '<h6 style="text-align: center ;">Le : '+formattedDate1+' pour La prochaine garde</h6>'
										$('#dateF').html(optional);
										$('#textual').html('<span>Votre Prochaine Garde est dans :</span>');
										
										
		
									}
									else{
										$('#textual').html('<span>Vous avez pas de Garde programmé </span>');
										$('#conteur').css('visibility', 'hidden');
	
									}
	
								}
							

							}
							else{
								$('#textual').html('<span>Vous avez pas de Garde programmé </span>');
										$('#conteur').css('visibility', 'hidden');
							}
							
							
							
							
							
						},
						error : function(jqXHR, textStatus,
							errorThrown) {
							console.log(textStatus);
							
								}
					});
					$.ajax({
						url: url,
						type:'GET',
						success : function(data) {	
							$('#imager').attr('src',url);
						},
						error : function(jqXHR, textStatus,
							errorThrown) {
							console.log(textStatus);
							$('#imager').attr('src',urlsec);
								}
					});	

		}
									,
		error : function(jqXHR, textStatus,
						errorThrown) {
						console.log(textStatus);
							}
							
	});	
	

	
	function parseDate(input) {
		var parts = input.match(/(\d+)/g);
		// new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
		return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
	  }
	

})
