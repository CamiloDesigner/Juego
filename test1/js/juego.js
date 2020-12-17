//creamos la variable:
var vGblPosicionRiver = 0;
//los intentos con limite de 3:
var vGblIntentos = 3;
var vGblIntentosUsados = 0;
//para guardar el nombre de usuario:
var vGblNombre;
//cuando terminemos el juego ya sea porque ganamos o perdimos:
var vGblJuegoTerminado = 0;

//funcion para esconder la moneda:
function escondeEquipo() {
  //funsion random:
   vGblPosicionRiver = Math.floor(Math.random() * 6 + 1);
   vGblIntentosUsados = 0;
   vGblJuegoTerminado = 0;
}

function newel(pElement) {
	//si no ganamos hace esto:
	if(vGblJuegoTerminado == 0){
	

	if(vGblIntentosUsados < vGblIntentos) {

	if(pElement.id == vGblPosicionRiver){
       pElement.src = 'img/river.jpg';
       actualizarDiv(`Has ganado ${vGblNombre}, encontraste al más grande de America!!!`);
    //si gana hay que mostrarle el boton para que juege otra vez si quiere:
    document.getElementById('jugarDeNuevo').style.display = '';
    vGblJuegoTerminado = 1;
    //Si no lo encuentra:
	} else{
		pElement.src = 'img/newel.jpg';
		actualizarDiv(`Newel? jaja, segui buscando ${vGblNombre}!!!`);
	}
    vGblIntentosUsados = vGblIntentosUsados + 1;  

  //si pierde le decimos:
  }else{
      actualizarDiv(`${vGblNombre}, ya usaste todos tus intentos.`);
      //le mostramos el boton para que juegue de nuevo:
      document.getElementById('jugarDeNuevo').style.display = '';
      vGblJuegoTerminado = 1;
   }

 } else{
 	//si terminamos el juego ya sea ganando o perdiendo:
 	actualizarDiv(`El juego ya termino. ¿Querés jugar de nuevo ${vGblNombre}?`)
 	document.getElementById('jugarDeNuevo').style.display = '';
 }
	
}


function boca(pElement) {
	//si no ganamos hace esto:
	if(vGblJuegoTerminado == 0){
	

	if(vGblIntentosUsados < vGblIntentos) {

	if(pElement.id == vGblPosicionRiver){
       pElement.src = 'img/river.jpg';
       actualizarDiv(`Has ganado ${vGblNombre}, encontraste al más grande de America!!!`);
    //si gana hay que mostrarle el boton para que juege otra vez si quiere:
    document.getElementById('jugarDeNuevo').style.display = '';
    vGblJuegoTerminado = 1;
    //Si no lo encuentra:
	} else{
		pElement.src = 'img/boca.jpg';
		actualizarDiv(`Boca? Me suena a equipo chico, segui buscando... ${vGblNombre}!!!`);
	}
    vGblIntentosUsados = vGblIntentosUsados + 1;  

  //si pierde le decimos:
  }else{
      actualizarDiv(`${vGblNombre}, ya usaste todos tus intentos.`);
      //le mostramos el boton para que juegue de nuevo:
      document.getElementById('jugarDeNuevo').style.display = '';
      vGblJuegoTerminado = 1;
   }

 } else{
 	//si terminamos el juego ya sea ganando o perdiendo:
 	actualizarDiv(`El juego ya termino. ¿Querés jugar de nuevo ${vGblNombre}?`)
 	document.getElementById('jugarDeNuevo').style.display = '';
 }
	
}

function velez(pElement) {
	//si no ganamos hace esto:
	if(vGblJuegoTerminado == 0){
	

	if(vGblIntentosUsados < vGblIntentos) {

	if(pElement.id == vGblPosicionRiver){
       pElement.src = 'img/river.jpg';
       actualizarDiv(`Has ganado ${vGblNombre}, encontraste al más grande de America!!!`);
    //si gana hay que mostrarle el boton para que juege otra vez si quiere:
    document.getElementById('jugarDeNuevo').style.display = '';
    vGblJuegoTerminado = 1;
    //Si no lo encuentra:
	} else{
		pElement.src = 'img/velez.jpg';
		actualizarDiv(`Velez?? esforzate un poco más ${vGblNombre}!!!`);
	}
    vGblIntentosUsados = vGblIntentosUsados + 1;  

  //si pierde le decimos:
  }else{
      actualizarDiv(`${vGblNombre}, ya usaste todos tus intentos.`);
      //le mostramos el boton para que juegue de nuevo:
      document.getElementById('jugarDeNuevo').style.display = '';
      vGblJuegoTerminado = 1;
   }

 } else{
 	//si terminamos el juego ya sea ganando o perdiendo:
 	actualizarDiv(`El juego ya termino. ¿Querés jugar de nuevo ${vGblNombre}?`)
 	document.getElementById('jugarDeNuevo').style.display = '';
 }
	
}

function racing(pElement) {
	//si no ganamos hace esto:
	if(vGblJuegoTerminado == 0){
	

	if(vGblIntentosUsados < vGblIntentos) {

	if(pElement.id == vGblPosicionRiver){
       pElement.src = 'img/river.jpg';
       actualizarDiv(`Has ganado ${vGblNombre}, encontraste al más grande de America!!!`);
    //si gana hay que mostrarle el boton para que juege otra vez si quiere:
    document.getElementById('jugarDeNuevo').style.display = '';
    vGblJuegoTerminado = 1;
    //Si no lo encuentra:
	} else{
		pElement.src = 'img/racing.jpg';
		actualizarDiv(`Racing? tiene lindo estadio si, seguí buscando ${vGblNombre}!!!`);
	}
    vGblIntentosUsados = vGblIntentosUsados + 1;  

  //si pierde le decimos:
  }else{
      actualizarDiv(`${vGblNombre}, ya usaste todos tus intentos.`);
      //le mostramos el boton para que juegue de nuevo:
      document.getElementById('jugarDeNuevo').style.display = '';
      vGblJuegoTerminado = 1;
   }

 } else{
 	//si terminamos el juego ya sea ganando o perdiendo:
 	actualizarDiv(`El juego ya termino. ¿Querés jugar de nuevo ${vGblNombre}?`)
 	document.getElementById('jugarDeNuevo').style.display = '';
 }
	
}

function lorenzo(pElement) {
	//si no ganamos hace esto:
	if(vGblJuegoTerminado == 0){
	

	if(vGblIntentosUsados < vGblIntentos) {

	if(pElement.id == vGblPosicionRiver){
       pElement.src = 'img/river.jpg';
       actualizarDiv(`Has ganado ${vGblNombre}, encontraste al más grande de America!!!`);
    //si gana hay que mostrarle el boton para que juege otra vez si quiere:
    document.getElementById('jugarDeNuevo').style.display = '';
    vGblJuegoTerminado = 1;
    //Si no lo encuentra:
	} else{
		pElement.src = 'img/lorenzo.jpg';
		actualizarDiv(`San Lorenzo? jaja, contá un chiste mejor ${vGblNombre}!!!`);
	}
    vGblIntentosUsados = vGblIntentosUsados + 1;  

  //si pierde le decimos:
  }else{
      actualizarDiv(`${vGblNombre}, ya usaste todos tus intentos.`);
      //le mostramos el boton para que juegue de nuevo:
      document.getElementById('jugarDeNuevo').style.display = '';
      vGblJuegoTerminado = 1;
   }

 } else{
 	//si terminamos el juego ya sea ganando o perdiendo:
 	actualizarDiv(`El juego ya termino. ¿Querés jugar de nuevo ${vGblNombre}?`)
 	document.getElementById('jugarDeNuevo').style.display = '';
 }
	
}

function independiente(pElement) {
	//si no ganamos hace esto:
	if(vGblJuegoTerminado == 0){
	

	if(vGblIntentosUsados < vGblIntentos) {

	if(pElement.id == vGblPosicionRiver){
       pElement.src = 'img/river.jpg';
       actualizarDiv(`Has ganado ${vGblNombre}, encontraste al más grande de America!!!`);
    //si gana hay que mostrarle el boton para que juege otra vez si quiere:
    document.getElementById('jugarDeNuevo').style.display = '';
    vGblJuegoTerminado = 1;
    //Si no lo encuentra:
	} else{
		pElement.src = 'img/independiente.png';
		actualizarDiv(`Independiente? No desperdicies tus intentos ${vGblNombre}!!!`);
	}
    vGblIntentosUsados = vGblIntentosUsados + 1;  

  //si pierde le decimos:
  }else{
      actualizarDiv(`${vGblNombre}, ya usaste todos tus intentos.`);
      //le mostramos el boton para que juegue de nuevo:
      document.getElementById('jugarDeNuevo').style.display = '';
      vGblJuegoTerminado = 1;
   }

 } else{
 	//si terminamos el juego ya sea ganando o perdiendo:
 	actualizarDiv(`El juego ya termino. ¿Querés jugar de nuevo ${vGblNombre}?`)
 	document.getElementById('jugarDeNuevo').style.display = '';
 }
	
}





function actualizarDiv(pTexto){
	document.getElementById('informacion').innerHTML = pTexto;
}

//armamos la funcion para comenzar a jugar:
function jugar() {
	var vNombre = document.getElementById('nombreJugador').value;

   //Si es distinto de vacio le sacamos el estilo de display none;
	if(vNombre.trim() != "") {
		document.getElementById('tablero').style.display = '';
	    //escondo el nombre del usuario:
	    document.getElementById('usuario').style.display = 'none';
	    vGblNombre = vNombre;
	    //Si el nombre es valido el div tiene que estar en blanco:
	    actualizarDiv('');

	}else{
		actualizarDiv('Ingrese su nombre por favor.');
	}
}

//funcion para el boton de jugar de nuevo:

function jugarDeNuevo() {
	//primero esconder el equipo:
	escondeEquipo();

	for(var i= 1; i<= 6; i++) {
     //la posicion "i" que son los naipes, del 1 al 6
		document.getElementById(i).src = 'img/afa.png';
	}
	//escondemos el boton de jugar de nuevo:
	document.getElementById('jugarDeNuevo').style.display = 'none';
    //lo pasamos en blanco al mensaje:
    actualizarDiv('');
}

/* LIBRERIA PARA PERSONALIZAR ALERTAS */

(async () => {
  const {value: seleccionar} = await Swal.fire({
   //metodo de la libreria:
//a esto le pasamos un objetos con la opciones que queremos:
//Si queremos extraer un valor de la alerta creamos una constante:
//dentro de la llave le decimos el valor que queremos extraer
   title: 'Bienvenido',
   text: 'Elija su equipo y disfrute del juego encontrando al mejor Club Argentino!',
   //html: '<b class="rojo">Hola!</b>'
  //iconos con animaciones:
   icon: 'info',
  /* icon: 'question',
   icon: 'error',
   icon: 'warning', */
   //icon: 'success',
  //si queremos cambiar el boton de ok por otro:
  confirmButtonText: 'Seleccionar',
  //podemos agregar pie de pagina, puede ser texto o codigo html:
  //esto podemos poner en una etiqueta span con clase:
  footer: '<span class="footer">CamiloR © 2020 Todos los derechos reservados<br>Politica de privacidad Terminos y condiciones<br>Sigueme en: <a href="https://www.instagram.com/camilorigoni/" target="_blank"><i class="fab fa-instagram"></i></a><a href="https://www.facebook.com/camilo.rigoni/" target="_blank"><i class="fab fa-facebook-f"></i></a><a href="https://twitter.com/?lang=es" target="_blank"><i class="fab fa-twitter"></i></a>',
  //podemos ponerle tamaño a la ventana con width (en porcentaje sino perdemos el responsive):
  width: '90%',
  //podemos ponerle un padding:
  padding: '2rem',

  //podemos cambiar el fondo con backrground:
  //background: '#000'

  //con grow podemos pasarle que abarque todo el ancho "row" o todo el alto "column"
  //o "fullscreen" que abarcara toda la pantalla
  grow: 'fullscreen',
  
  //pone un fondo oscuro:
  backdrop: true,

  //timer es el tiempo que queremos que dure la alerta:
  // timer: 5000,

  //si queremos mostrarle al usuario cuanto tiempo le queda:
  // timerProgressBar: true,

  //con toast hacemos la alerta pequeña, con position la ubicamos:
  //toast: true,
  position: 'center',

  //si quiero que el usuario dee click fuera de la alerta para cerrarla:
  allowOutsideClick: false,

  //si quiero que el usuario use esc para cerrarla:
  allowEscapeKey: false,

  //si quiero que el usuario dee enter en la alerta para cerrarla:
  allowEnterKey: false,

  //si queremos pararle la propagacion de eventos hasta que cierre la alerta:
  stopKeydownPropagation: false,

  input: 'select',

  inputPlaceholder: 'Elija su equipo',

  inputValue: '',

  //nos permite recibir un objeto:
  inputOptions: {
  	
  	aldosivi: 'Aldosivi',
  	argentinos: 'Argentinos',
  	arsenal: 'Arsenal',
  	atletico: 'Atlético Tucumán',
  	banfield: 'Banfield',
  	boca: 'Boca Juniors',
  	central: 'Central Cordoba SdE',
  	colon: 'Colón',
  	defensa: 'Defensa y Justicia',
  	estudiantes: 'Estudiantes',
  	gimnasia: 'Gimnasia y Esgrima',
  	godoy: 'Godoy Cruz',
  	independiente: 'Independiente',
  	lanus: 'Lanús',
  	newell: 'Newell´s Old Boys',
  	patronato: 'Patronato',
  	racing: 'Racing',
  	river: 'River Plate',
  	rosario: 'Rosario Central',
  	lorenzo: 'San Lorenzo',
  	talleres: 'Talleres',
  	union: 'Unión de Santa Fe',
  	velez: 'Vélez Sarsfield',
  },

  //customClass debemos pasarle un objeto si queremos
  //asignarles clases para darle estilos en CSS:
    //customClass: {
    //container: '',
   //popup: 'popup-class',
   //header:
   //title:
   //closeButton:
   //icon:
   //image:
   //content:
   //input:
   //actions:
   //confirmButton: 
	
   //cancelButton:
   //footer:
  
  //},

  //si queremos mostrar o no el boton de confirmar:
  showConfirmButton: true,

  //cambiar el color al boton:
  confirmButtonColor: '#f4bd76',

  //para describir de que va el boton:
  confirmButtonAriaLabel: 'Confirmar',

  //si queremos poner un boton de cancelar:

  showCancelButton: false,
  //nombre del boton
  cancelButtonText: 'Cancelar',

  //cancelButtonColor: '#333',

  cancelButtonAriaLabel: 'Cancelar',

  //si queremos darle nosotros los estilos al boton
  //ponemos false en buttonsStyling:
  buttonsStyling: true,

  //si queremos poner el boton para cerrar la alerta:
  showCloseButton: true,

  closeButtonAriaLabel: 'Cerrar alerta',

  //si queremos agregar imagen a nuestra alerta:

  imageUrl: 'img/afa.png',
  imageWidth: '300px',
  imageHeight: '400px',
  imageAlt: 'imagen'


});

   //una condicional de que si existe "seleccionar" hacer esto:

   if (seleccionar){
	Swal.fire({
       title: '<span class="titulopublicidad">Encuentra al mejor',
  html: '<a href="#" class="publicidad">Adquiere este juego a solo <b>US$ 999<b><br>Oferta Navideña!</a>',
  icon: undefined,
  footer: '<span class="footer">CamiloR © 2020 Todos los derechos reservados<br>Sigueme en: <a href="https://www.instagram.com/camilorigoni/" target="_blank"><i class="fab fa-instagram"></i></a><a href="https://www.facebook.com/camilo.rigoni/" target="_blank"><i class="fab fa-facebook-f"></i></a>',
  width: '300px',
  padding: '1rem',
  background: '#f6cd8f',
  grow: false,
  backdrop: false,
  timer: 40000,
  timerProgressBar: true,
  toast: false, //animacion toast para el popup
  position: 'bottom-end',
  allowOutsideClick: false,
  allowEscapeKey: false,
  stopKeydownPropagation: false,
  showConfirmButton: false,
  showCancelButton: false,
  showCloseButton: true,
  closeButtonAriaLabel: 'Cerrar esta alerta',

  imageUrl: 'img/afa.png',
  imageWidth: '250px',
  imageHeight: '300px'
	});
   } 


})()
