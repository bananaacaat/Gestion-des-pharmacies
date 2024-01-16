

function show(page) {
	
	if (page == "statistiques") {
		$('a').removeClass('active');
		$('a:contains(Dashboard)').addClass('active');
		$("#main-content").load("page/user/statistiques.html");
		event.preventDefault();
	}
	
	
	if (page == "pharmacy") {
		$('a').removeClass('active');
		$('a:contains(Ma pharmacie)').addClass('active');
		$("#main-content").load("page/user/pharmacy.html");
		event.preventDefault();
	}
	
	if (page == "pharmacieDeGarde") {
		$('a').removeClass('active');
		$('a:contains(Gestion De Garde)').addClass('active');
		$("#main-content").load("page/user/pharmacieDeGarde.html");
		event.preventDefault();
	}
	
	
}
$('a').removeClass('active');
$('a:contains(Dashboard)').addClass('active');
$("#main-content").load("page/user/statistiques.html");
