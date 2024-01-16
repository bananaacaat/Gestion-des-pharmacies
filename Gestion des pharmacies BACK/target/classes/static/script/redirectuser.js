

function show(page) {
	if (page == 'produit') {
		$('a').removeClass('active');
		$('a:contains(Produit)').addClass('active');
		$("#main-content").load("page/produit.html");

		event.preventDefault();
	}
	if (page == "statistiques") {
		$('a').removeClass('active');
		$('a:contains(Statistiques)').addClass('active');
		$("#main-content").load("page/statistiques.html");
		event.preventDefault();
	}
	if (page == "marques") {
		$('a').removeClass('active');
		$('a:contains(Marques)').addClass('active');
		$("#main-content").load("page/marque.html");
		event.preventDefault();
	}
	if (page == "machines") {
		$('a').removeClass('active');
		$('a:contains(Machines)').addClass('active');
		$("#main-content").load("page/machine.html");
		event.preventDefault();
	}
	if (page == "pharmacy") {
		$('a').removeClass('active');
		$('a:contains(Pharmacies)').addClass('active');
		$("#main-content").load("page/pharmacy.html");
		event.preventDefault();
	}
	if (page == "zone") {
		$('a').removeClass('active');
		$('a:contains(Zone)').addClass('active');
		$("#main-content").load("page/zone.html");
		event.preventDefault();
	}
	if (page == "ville") {
		$('a').removeClass('active');
		$('a:contains(Ville)').addClass('active');
		$("#main-content").load("page/ville.html");
		event.preventDefault();
	}
	if (page == "pharmacieDeGarde") {
		$('a').removeClass('active');
		$('a:contains(Pharmacie de garde)').addClass('active');
		$("#main-content").load("page/pharmacieDeGarde.html");
		event.preventDefault();
	}
	if (page == "garde") {
		$('a').removeClass('active');
		$('a:contains(garde)').addClass('active');
		$("#main-content").load("page/garde.html");
		event.preventDefault();
	}
}
$('a').removeClass('active');
$('a:contains(Statistiques)').addClass('active');
$("#main-content").load("page/statistiques.html");
