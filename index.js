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
  let fe = '!Ingrese un texto para comenzar.';
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
  respuesta.value = fe; //el cuadro de texto remplasara su contenido con el contenido de la variable

  if(fe != "!Ingrese un texto para comenzar."){   //si el programa codifico la frase, el boton se avilita
    let btncop = document.getElementById('cop');  //el boton copiar se avilita
    btncop.disabled = false;
    
    let encotrar = document.getElementById('busqueda'); //La imagen cambia
    encotrar.setAttribute("src", "IMG/lleno.gif");

    let titulo = document.getElementById('mensaje'); //El titulo cambia
    titulo.innerHTML="El texto codificado es";
  }

}

// funcion de decodificar
function copiar(){
  let encotrar = document.getElementById('busqueda');
  let titulo = document.getElementById('mensaje');
  let btncop = document.getElementById('cop');

  encotrar.setAttribute("src", "IMG/vacio.png"); //La imagen cambia
  titulo.innerHTML="Ningun texto fue encontrado"; //El titulo cambia
  navigator.clipboard.readText().then((clipText) => (document.querySelector(".cliptext").innerText = clipText),); //Solicito que admitar la funcion de copiar al portapapeles el navegador del movil
  navigator.clipboard.writeText(respuesta.value); //El mensaje es copiado al portapapeles
  respuesta.value = ""; //el cuadro de texto remplasara su contenido con el contenido de la variable
  alert("La palabra se copio con éxito"); 
  btncop.disabled = true; //desabilito el boton
}

// funcion de decodificar
function desencriptar(){
  let fd = '!Ingrese un texto para comenzar.'; //creo la variable de texto vacio para contener la frase modificado
  if(frase.value == ""){  // valido si el contenido del imput esta vacio o no a traves de la id
    alert("Porfavor ingrese una palabra para decodificar"); 
  } else {
    fd=frase.value.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u"); // mi variable tendra la frase y realisara un remplaso total de todas las coincidencia que tenga
  }

  respuesta.value = fd; //el cuadro de texto remplasara su contenido con el contenido de la variable

    if(fd != "!Ingrese un texto para comenzar."){   //si el programa codifico la frase, el boton se avilita
      let btncop = document.getElementById('cop'); //el boton copiar se avilita
      btncop.disabled = false;

      let encotrar = document.getElementById('busqueda'); //La imagen cambia
      encotrar.setAttribute("src", "IMG/lleno.gif");

      let titulo = document.getElementById('mensaje'); //El titulo cambia
      titulo.innerHTML="El texto decodificado es";

    }
}