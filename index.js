String.prototype.replaceAt = function(index, replacement) {
	if (index >= this.length) { return this.valueOf(); }
	return this.substring(0, index) + replacement + this.substring(index + 1);
}


function encriptar(){
  if(frase.value == ""){ alert("Porfavor ingrese una palabra"); } else {    
    let ini=0;
    let fe = '';
    fraini=frase.value;
    var cant = frase.value.length;
    let enc= frase.value.split('');
    while (ini < cant) {
      if(enc [ini] == "a"){ enc [ini] = 'ai'; }
      if(enc [ini] == "e"){ enc [ini] = 'enter'; }
      if(enc [ini] == "i"){ enc [ini] = 'imes'; }
      if(enc [ini] == "o"){ enc [ini] = 'ober'; }
      if(enc [ini] == "u"){ enc [ini] = 'ufat'; }
      fe=fe+enc [ini];
      ini = ini + 1;
    }
    let parrafo = document.querySelector('label2');  //ayuda a conectar elementos espesificos del html
    parrafo.innerHTML= fe;
	  //alert(fe);
  }
}


function desencriptar(){
  let fd= '';
  if(frase.value == ""){ alert("Porfavor ingrese una palabra codificada"); } else {
    fd=frase.value.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u");
    let parrafo = document.querySelector('label2');  //ayuda a conectar elementos espesificos del html
    parrafo.innerHTML= fd;
   // alert(fd);
  }
}

