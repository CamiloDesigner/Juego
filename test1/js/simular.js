//creamos la variable:
var vGblPosicionMoneda = 0;
//los intentos con limite de 3:
var vGblIntentos = 3;
var vGblIntentosUsados = 0;
//para guardar el nombre de usuario:
var vGblNombre;
//cuando terminemos el juego ya sea porque ganamos o perdimos:
var vGblJuegoTerminado = 0;

//funcion para esconder la moneda:
function escondeMoneda() {
  //funsion random:
   vGblPosicionMoneda = Math.floor(Math.random() * 9 + 1);
   vGblIntentosUsados = 0;
   vGblJuegoTerminado = 0;
}

function verMoneda(pElement) {
	//si no ganamos hace esto:
	switch(vGblIntentosUsados < vGblIntentos){
		case 1:  pElement.src = 'img/moneda.png';
       actualizarDiv(`Has ganado ${vGblNombre}!!!`);
       break;

        case 2: pElement.src = 'img/naipe.png';
		actualizarDiv(`Segui participando ${vGblNombre}!!!`);
		break;

		case 3: pElement.src = 'img/river.png';
		actualizarDiv(`Segui participando ${vGblNombre}!!!`);
		break;

		case 4: pElement.src = 'img/racing.png';
		actualizarDiv(`Segui participando ${vGblNombre}!!!`);
		default: vGblIntentosUsados = vGblIntentosUsados + 1; 
		break;
		default: actualizarDiv(`${vGblNombre}, ya usaste todos tus intentos.`);
      //le mostramos el boton para que juegue de nuevo:
      document.getElementById('jugarDeNuevo').style.display = '';
      vGblJuegoTerminado = 1;
      


	}

	
}



	/*if(vGblJuegoTerminado == 0){
	

	if(vGblIntentosUsados < vGblIntentos) {

	if(pElement.id == vGblPosicionMoneda){
       pElement.src = 'img/moneda.png';
       actualizarDiv(`Has ganado ${vGblNombre}!!!`);
    //si gana hay que mostrarle el boton para que juege otra vez si quiere:
    document.getElementById('jugarDeNuevo').style.display = '';
    vGblJuegoTerminado = 1;
    //Si no lo encuentra:
	} else{
		pElement.src = 'img/naipe.png';
		actualizarDiv(`Segui participando ${vGblNombre}!!!`);
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
	
} */

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
		actualizarDiv('Debe ingresar su nombre');
	}
}

//funcion para el boton de jugar de nuevo:

function jugarDeNuevo() {
	//primero esconder la moneda:
	escondeMoneda();

	for(var i= 1; i<= 9; i++) {
     //la posicion "i" que son los naipes, del 1 al 6
		document.getElementById(i).src = 'img/naipefondo.png';
	}
	//escondemos el boton de jugar de nuevo:
	document.getElementById('jugarDeNuevo').style.display = 'none';
    //lo pasamos en blanco al mensaje:
    actualizarDiv('');
}