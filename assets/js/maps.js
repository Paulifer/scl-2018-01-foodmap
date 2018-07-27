class localizacion{
	constructor(callback){
		if(navigator.geolocation){
			//obtenemos ubicacion
			navigator.geolocation.getCurrentPosition((position)=>{
				this.latitude =position.coords.latitude;
				this.longitude = position.coords.longitude;
			 callback();
			})
		}else{
			alert("no se pudo");
		}
	}
}
//var ubicacion = new localizacion();me da la ubicacion actual
//console.log(ubicacion);
function initMap() {//toma la ubicacion actual 
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