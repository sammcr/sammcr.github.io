$(document).ready(function(){
	$("li").click(function(){
		$("#selec").text($(this).text());
		ruta = $(this).text();
		console.log(ruta);
		initMap();
	});	
});

var ruta = null;
var coordenadasRuta = null;
var map;

function initMap(){
	var mapOptions = {
		center: {lat: 28.667449, lng: -106.073375},
		zoom: 13,
		scrollwheel: false
	};
	map = new google.maps.Map(document.getElementById('map'),mapOptions);

	if(ruta!=null){
		switch(ruta){
			case 'RA-02 Panamericana':
				coordenadasRuta = [
					{lat: 28.625652, lng: -106.115579}, 
			 		{lat: 28.625934, lng: -106.115016},
			 		{lat: 28.627229, lng: -106.116402},
			 		{lat: 28.627907, lng: -106.117539}, 
			 		{lat: 28.629065, lng: -106.119041}, 
			 		{lat: 28.630073, lng: -106.119728},
			 		{lat: 28.633849, lng: -106.121348},
			 		{lat: 28.635440, lng: -106.121992},
			 		{lat: 28.636316, lng: -106.122582},
			 		{lat: 28.637276, lng: -106.122915},
			 		{lat: 28.637992, lng: -106.122936},
			 		{lat: 28.639155, lng: -106.122636},
			 		{lat: 28.640139, lng: -106.122607},
			 		{lat: 28.641048, lng: -106.122956},
			 		{lat: 28.645144, lng: -106.125334}, 
			 		{lat: 28.645685, lng: -106.125838},
			 		{lat: 28.646175, lng: -106.125758},
			 		{lat: 28.646570, lng: -106.125286},
			 		{lat: 28.647206, lng: -106.123108}, 
			 		{lat: 28.647055, lng: -106.122566}, 
			 		{lat: 28.646918, lng: -106.121997},
			 		{lat: 28.646768, lng: -106.121382},
			 		{lat: 28.646344, lng: -106.120658},
			 		{lat: 28.646024, lng: -106.119703},
			 		{lat: 28.646043, lng: -106.116924},
			 		{lat: 28.646650, lng: -106.116822},
			 		{lat: 28.651466, lng: -106.119054},
			 		{lat: 28.652031, lng: -106.117139},
			 		{lat: 28.650068, lng: -106.117563},
			 		{lat: 28.648755, lng: -106.110546},
			 		{lat: 28.647201, lng: -106.110900},
			 		{lat: 28.646622, lng: -106.111047},
			 		{lat: 28.644084, lng: -106.112285},
			 		{lat: 28.643947, lng: -106.111811},
			 		{lat: 28.644229, lng: -106.109665},
			 		{lat: 28.644220, lng: -106.108764},
			 		{lat: 28.643236, lng: -106.106532},
			 		{lat: 28.643010, lng: -106.104692},
			 		{lat: 28.642591, lng: -106.103930},
			 		{lat: 28.641819, lng: -106.103077},
			 		{lat: 28.640877, lng: -106.100802},
			 		{lat: 28.637793, lng: -106.097943},
			 		{lat: 28.637233, lng: -106.097852},
			 		{lat: 28.634493, lng: -106.097782}
				];
				mapOptions.center = {lat: 28.639170, lng: -106.108705};   
				mapOptions.zoom = 15; 
				map = new google.maps.Map(document.getElementById('map'),mapOptions);
				break;
			case 'RA-04 Circuito Universitario':
				coordenadasRuta = [
					{lat: 28.704681, lng: -106.126134},  
			 		{lat: 28.703815, lng: -106.128323},
			 		{lat: 28.703608, lng: -106.130158},
			 		{lat: 28.704041, lng: -106.131553}, 
			 		{lat: 28.703523, lng: -106.132744}, 
			 		{lat: 28.703032, lng: -106.133677},
			 		{lat: 28.702194, lng: -106.138602},
			 		{lat: 28.702467, lng: -106.140683},
			 		{lat: 28.702909, lng: -106.141498},
			 		{lat: 28.703417, lng: -106.141519},
			 		{lat: 28.704433, lng: -106.140489},
			 		{lat: 28.705223, lng: -106.139202},
			 		{lat: 28.705421, lng: -106.138258},
			 		{lat: 28.705929, lng: -106.138387},
			 		{lat: 28.706955, lng: -106.138065}, 
			 		{lat: 28.708393, lng: -106.138769},
			 		{lat: 28.709607, lng: -106.139617},
			 		{lat: 28.709329, lng: -106.144209},
			 		{lat: 28.710825, lng: -106.144745}, 
			 		{lat: 28.713667, lng: -106.147223}, 
			 		{lat: 28.716066, lng: -106.149573},
			 		{lat: 28.719178, lng: -106.145083},
			 		{lat: 28.722817, lng: -106.148575},
			 		{lat: 28.721227, lng: -106.151558},
			 		{lat: 28.725922, lng: -106.154798},
			 		{lat: 28.729365, lng: -106.148457},
			 		{lat: 28.726486, lng: -106.146483},
			 		{lat: 28.725056, lng: -106.145582},
			 		{lat: 28.724426, lng: -106.145614},
			 		{lat: 28.722723, lng: -106.148682},
			 		{lat: 28.719091, lng: -106.145206},
			 		{lat: 28.716080, lng: -106.149573},
			 		{lat: 28.716974, lng: -106.150506},
			 		{lat: 28.716767, lng: -106.150860},
			 		{lat: 28.711629, lng: -106.145882},
			 		{lat: 28.710656, lng: -106.145190},
			 		{lat: 28.709644, lng: -106.144800},
			 		{lat: 28.708312, lng: -106.144467},
			 		{lat: 28.708072, lng: -106.143898},
			 		{lat: 28.708672, lng: -106.140025},
			 		{lat: 28.708371, lng: -106.138995},
			 		{lat: 28.707524, lng: -106.138233},
			 		{lat: 28.706705, lng: -106.138136},
			 		{lat: 28.705896, lng: -106.138512}];

				mapOptions.center = {lat:  28.714727, lng: -106.143414};
				mapOptions.zoom = 15; 
				map = new google.maps.Map(document.getElementById('map'),mapOptions);
				break;
			case 2:
				coordenadasRuta = null;
				break;
			default:
				break;
		}
		
		var rutaPath = new google.maps.Polyline({
		path: coordenadasRuta,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});

	rutaPath.setMap(map);
}
