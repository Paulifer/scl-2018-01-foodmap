//Esconde la pantalla de inicio a los 2 segundos y muestra el resto de la App
setTimeout(function hide() { $('#splash').hide('fast');
document.getElementById('muro').style.display = 'block'; }, 3000);



class localizacion{
	constructor(callback){
		if (navigator.geolacation) {
			//obtenemos ubicacion
			navigator.geolacation.getCurrentPosition((position)=>{
				this.latitude = position.coords.latitude;
				this.longitude = position.coords.longitude;
			})
		}else{
			alert("tu navegador no soporta geolacalicacion")
		}
	}
}