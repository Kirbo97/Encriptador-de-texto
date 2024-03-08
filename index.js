let bol=0; //Creo una variable para usarlo como una bandera

//creo una funcion que limitara los caracteres proibida usar en mi cuadro de texto
function remplazar(elemento){
  let texto = elemento.value.split(/[^a-z, ]+/g); //creo una variable que actuara como un arreglo a partir de la frase pero solo permitira los caracteres (a - z) minusculas y el espacio en blanco estar dentro de la celdas y los demas los ignorara.
  //En caso de que la fase empieza con un caracter proibido, ese caracter se guardara en la primera celda como espacio vacio. 
  texto = texto.join(""); //le indico que unifique todos los contenidos de las celdas como una cadena de caracteres pero las celdas que estan en blanco las ignore
  if(elemento.value!=texto){
    alert("El programa no permite vocales con tildes, mayusculas y sibolos.");
  }
  elemento.value = texto;
}

// creo funcion de codificar
function encriptar(){
  let fe = '!Sin codificar';
  if(frase.value == ""){ // valido si el contenido del imput esta vacio o no a traves de la id
    alert("Porfavor ingrese una palabra para codificar"); 
  } else {    
    let ini=0;
    var cant = frase.value.length; // calculo la cantidad de carracteres que tiene
    let enc= frase.value.split(''); // creo un arreglo a partir de la frase (cada caracter tendra su propia celda) para cambiar las casillas requeridas
    // compruebo cada casilla para cambiar las vocales
    while (ini < cant) {

        if(enc [ini] == "a"){ enc [ini] = 'ai'; } // remplaso la vocal en la casilla correspondiente
        if(enc [ini] == "e"){ enc [ini] = 'enter'; }
        if(enc [ini] == "i"){ enc [ini] = 'imes'; }
        if(enc [ini] == "o"){ enc [ini] = 'ober'; }
        if(enc [ini] == "u"){ enc [ini] = 'ufat'; }

        fe=enc.join(""); //le indico que unifique todos los contenidos de las celdas como una cadena de caracteres pero las celdas que estan en blanco las ignore
        ini = ini + 1;
    }
  }
  let parrafo = document.querySelector('.codificar');  //la variable se conectara al elementos espesificos del html el cual es el elemento que tenga o este dentro de la clase codificar
  parrafo.innerHTML= fe; //la variable conectada a la clase remplasara su texto visual por el contenido de la variable "fe"
  parrafo.value=fe; //guardo el contenido para ser usado mas adelante
  bol=1; //cambio mi bandera a 1

  if(fe != "!Sin codificar"){   //si el programa codifico la frase, el boton se avilita
    let btncop = document.getElementById('cop');
    btncop.disabled = false;
  }

}

// funcion de decodificar
function copiar(){
  let parrafo = document.querySelector('.codificar');  //la variable se conectara al elementos espesificos del html el cual es el elemento que tenga o este dentro de la clase codificar
  let btndes = document.getElementById('desen');
  let btnenc = document.getElementById('enc');
  if (bol==1) { //si ya codifico avilita el boton de decodificar
    btndes.disabled = false;
    btnenc.disabled = true;
    parrafo.innerHTML= '!Sin decodificar'; 

  } else if (bol==2) {  //si ya decodifico avilita el boton de codificar
    btnenc.disabled = false;
    btndes.disabled = true;
    parrafo.innerHTML= '!Sin codificar'; 
  }
    let btncop = document.getElementById('cop');
    btncop.disabled = true;
    frase.value= parrafo.value; //el cuadro de texto remplasara su contenido con lo que tenga el label
    alert("La palabra se copio con éxito"); 
}

// funcion de decodificar
function desencriptar(){
  let fd = '!Sin decodificar'; //creo la variable de texto vacio para contener la frase modificado
  if(frase.value == ""){  // valido si el contenido del imput esta vacio o no a traves de la id
    alert("Porfavor ingrese una palabra codificada"); 
  } else {
    fd=frase.value.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u"); // mi variable tendra la frase y realisara un remplaso total de todas las coincidencia que tenga
  }

  let parrafo = document.querySelector('.codificar');  //la variable se conectara al elementos espesificos del html el cual es el elemento que tenga o este dentro de la clase codificar
  parrafo.innerHTML= fd; //la variable conectada a la clase remplasara su texto visual por el contenido de la variable "fd"
  parrafo.value=fd; //guardo el contenido para ser usado mas adelante
  bol=2; //cambio mi bandera a 2
  
    if(fd != "!Sin decodificar"){   //si el programa codifico la frase, el boton se avilita
      let btncop = document.getElementById('cop');
      btncop.disabled = false;
    }
}