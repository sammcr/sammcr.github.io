var ruta = null;
var coordenadasRuta = null;
var mydata = JSON.parse(rutas);

$(document).ready(function(){
	var $datos = document.getElementById("rutas1");
	var text = "";
	var x;
	for(x in mydata){
		text += "<li><a href='#selec'>" + mydata[x].nombre + "</a></li>";
	}
	document.getElementById("rutas1").innerHTML = text;
	$("li").click(function(){
		$("#selec").text($(this).text());
		ruta = $(this).text();
		initMap();
	});

});

function initMap(){
	var mapOptions = {
		center: {lat: 28.667449, lng: -106.073375},
		zoom: 13,
		scrollwheel: false
	};

	map = new google.maps.Map(document.getElementById('map'),mapOptions);

	if(ruta!=null){
		for(x in mydata){
			if(ruta==mydata[x].nombre){
				mapOptions.center = mydata[x].center;
				mapOptions.zoom=15;
				map = new google.maps.Map(document.getElementById('map'),mapOptions);
				var rutaPath = new google.maps.Polyline({
					path: mydata[x].coordenadas,
					geodesic: true,
					strokeColor: '#FF0000',
					strokeOpacity: 1.0,
					strokeWeight: 2
				});
				rutaPath.setMap(map);
			}
		}
	}
}