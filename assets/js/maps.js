function initMap() {
	const ubicacion = new localizacion(()=>{
		const options = {
			center: {
				lat: ubicacion.latitude,
				lng: ubicacion.longitude
			},
			zoom :15
		}
		let map = document.getElementById('map');
		const mapa = new google.maps.Map(map, options);
	});
}