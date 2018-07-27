let map;
let infoWindow;

function initMap(){
	navigator.geolocation.getCurrentPosition(position=>{
		lati = position.coords.latitude;
		log = position.coords.longitude;

		let latitudeLongitude = new google.maps.LatLng(lati, log);
		let options = {
			center: latitudeLongitude,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.roadmap			
			};

			console.log(position);
		map = new google.maps.Map(document.getElementById('map'), options)		
		infoWindow = new google.maps.InfoWindow;

		 var request = {
            location: latitudeLongitude,
            radius: '500',
            type: ['food'],
            key: 'AIzaSyBQearEk9C4QkT-lWKttFnXZgeonntEqaQ',
        };
            //crear service
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);


        function callback(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (let i = 0; i < results.length; i++) {
                    let place = results[i];
                    


                }

            }

        };

	})
}













/*class localizacion{
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
*/
