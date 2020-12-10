let form = document.getElementById('registro');
let idusuario = document.getElementById('idusuarioinp');
let idpais = document.getElementById('idpaisinp');
let nombre = document.getElementById('nombreinp');
let apellido = document.getElementById('apellidoinp');
let direccion = document.getElementById('direccioninp');
let ccusuario = document.getElementById('ccusuarioinp');
let contrasena = document.getElementById('ccpaswdinp');
let confcontrasena = document.getElementById('ccconfpaswdinp');
let email = document.getElementById('emailinp');

let idus = idusuario + "";
idus = idus.trim();
let idp = idpais + "";
idp = idp.trim();
let nmbr = nombre + "";
nmbr = nmbr.trim();
let aplld = apellido + "";
aplld = aplld.trim();
let drccn = direccion + "";
drccn = drccn.trim();
let ccusr = ccusuario + "";
ccusr = ccusr.trim();
let ctrsn = contrasena + "";
ctrsn = ctrsn.trim();
let cnfctrsn = confcontrasena + "";
cnfctrsn = cnfctrsn.trim();
let eml = email + "";
eml = eml.trim();

form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	checkInputs();
});


function tiene_minusculas(texto){
   for(i=0; i<texto.length; i++){
		var letras="abcdefghyjklmnñopqrstuvwxyz";
		if (letras.indexOf(texto.charAt(i),0)!=-1){
			return 1;
		}
   }
   return 0;
}

function tiene_mayusculas(texto){
	var letras_mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
	for(i=0; i<texto.length; i++){
		if (letras_mayusculas.indexOf(texto.charAt(i),0)!=-1){
			return 1;
		}
	}
   return 0;
}

function tiene_numeros(texto){
	var numeros="0123456789";
	for(i=0; i<texto.length; i++){
		if (numeros.indexOf(texto.charAt(i),0)!=-1){
			return 1;
		}
	}
   return 0;
}

function tiene_simbolos(texto){
	var simbolos="#%/&";
	for(i=0; i<texto.length; i++){
		if (simbolos.indexOf(texto.charAt(i),0)!=-1){
			return 1;
		}
	}
   return 0;
}



function checkInputs() {
	let error = false;
	if(idus == "") {
		error = true;
	} 

    if(idp == "") {
		error = true;
	} 
    
    if(nmbr == "") {
		error = true;
	} 
     else if (nmbr.length > 25) {
		error = true;
	 }
    
    if(aplld == "") {
		error = true;
	}
     else if (aplld.length > 25) {
		error = true;
	 }
    
    if(drccn == "") {
		error = true;
	}
	else if((/^cll/.test(drccn.substring(0,4)) == false) && (/^cra/.test(drccn.substring(0,4)) == false) && (/^av/.test(drccn.substring(0,4)) == false) && (/^anv/.test(drccn.substring(0,4)) == false) &&| (/^trans/.test(drccn.substring(0,4)) == false)){
		error = true;
	}

    if(ccusr == "") {
		error = true;
	}

    if(ctrsn == "") {
		error = true;
	} 
	else if((tiene_mayusculas(ctrsn) == false) && (tiene_minusculas(ctrsn) == false) && (tiene_numeros(ctrsn) == false) && (tiene_simbolos(ctrsn) == false)){
		error = true;
	}
    
    if(cnfctrsn == "") {
		error = true;
	}
	else if(cnfctrsn != ctrsn){
		error = true;
	}
    
    if(eml == "") {
		error = true;
	}  


	if(error == true){
		alert("Intente de nuevo.");
	}
}