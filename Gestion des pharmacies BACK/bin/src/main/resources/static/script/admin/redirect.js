

function show(page) {
	if (page == 'produit') {
		$('a').removeClass('active');
		$('a:contains(Produit)').addClass('active');
		$("#main-content").load("page/admin/produit.html");

		event.preventDefault();
	}
	if (page == "statistiques") {
		$('a').removeClass('active');
		$('a:contains(Statistiques)').addClass('active');
		$("#main-content").load("page/admin/statistiques.html");
		event.preventDefault();
	}
	if (page == "marques") {
		$('a').removeClass('active');
		$('a:contains(Marques)').addClass('active');
		$("#main-content").load("page/admin/marque.html");
		event.preventDefault();
	}
	if (page == "machines") {
		$('a').removeClass('active');
		$('a:contains(Machines)').addClass('active');
		$("#main-content").load("page/admin/machine.html");
		event.preventDefault();
	}
	if (page == "pharmacy") {
		$('a').removeClass('active');
		$('a:contains(Pharmacies)').addClass('active');
		$("#main-content").load("page/admin/pharmacy.html");
		event.preventDefault();
	}
	if (page == "zone") {
		$('a').removeClass('active');
		$('a:contains(Zone)').addClass('active');
		$("#main-content").load("page/admin/zone.html");
		event.preventDefault();
	}
	if (page == "ville") {
		$('a').removeClass('active');
		$('a:contains(Ville)').addClass('active');
		$("#main-content").load("page/admin/ville.html");
		event.preventDefault();
	}
	if (page == "pharmacieDeGarde") {
		$('a').removeClass('active');
		$('a:contains(Pharmacie de garde)').addClass('active');
		$("#main-content").load("page/admin/pharmacieDeGarde.html");
		event.preventDefault();
	}
	if (page == "garde") {
		$('a').removeClass('active');
		$('a:contains(garde)').addClass('active');
		$("#main-content").load("page/admin/garde.html");
		event.preventDefault();
	}
	if (page == "validation") {
		$('a').removeClass('active');
		$('a:contains(Validation)').addClass('active');
		$("#main-content").load("page/admin/validation.html");
		event.preventDefault();
	}
}
$('a').removeClass('active');
$('a:contains(Statistiques)').addClass('active');
$("#main-content").load("page/admin/statistiques.html");
