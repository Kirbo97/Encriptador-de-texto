// añado la funcion para poder remplasar texto
String.prototype.replaceAt = function(index, replacement) {
	if (index >= this.length) { return this.valueOf(); }
	return this.substring(0, index) + replacement + this.substring(index + 1);
}

// creo funcion de codificar
function encriptar(){
  let fe = ''; //creo la variable de texto vacio para contener la frase modificado
  if(frase.value == ""){ // valido si el contenido del imput esta vacio o no a traves de la id
    fe = '!sin codificar';
    alert("Porfavor ingrese una palabra"); 
  } else {    
    let ini=0;
    var cant = frase.value.length; // calculo la cantidad de carracteres que tiene
    let enc= frase.value.split(''); // creo un arreglo a partir de la frase para cambiar las casillas requeridas
    // compruebo cada casilla para cambiar las vocales
    while (ini < cant) {
      if(enc [ini] == "a"){ enc [ini] = 'ai'; } // remplaso la vocal en la casilla correspondiente
      if(enc [ini] == "e"){ enc [ini] = 'enter'; }
      if(enc [ini] == "i"){ enc [ini] = 'imes'; }
      if(enc [ini] == "o"){ enc [ini] = 'ober'; }
      if(enc [ini] == "u"){ enc [ini] = 'ufat'; }
      fe=fe+enc [ini]; // unifico todo como una nueva frase
      ini = ini + 1;
    }
  }
  
  let parrafo = document.querySelector('.codificar');  //la variable se conectara al elementos espesificos del html el cual es el elemento que tenga o este dentro de la clase codificar
  parrafo.innerHTML= fe; //la variable conectada a la clase remplasara su texto visual por el contenido de la variable "fe"
}

// funcion de decodificar
function desencriptar(){
  let fd= ''; //creo la variable de texto vacio para contener la frase modificado
  if(frase.value == ""){  // valido si el contenido del imput esta vacio o no a traves de la id
    fd = '!sin codificar';
    alert("Porfavor ingrese una palabra codificada"); 
  } else {
    fd=frase.value.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u"); // mi variable tendra la frase y realisara un remplaso total de todas las coincidencia que tenga
  }
  let parrafo = document.querySelector('.codificar');  //la variable se conectara al elementos espesificos del html el cual es el elemento que tenga o este dentro de la clase codificar
    parrafo.innerHTML= fd; //la variable conectada a la clase remplasara su texto visual por el contenido de la variable "fd"
}