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


function setErrorFor(input) {
	alert(input + "  no es valido.");
}


function checkInputs() {
	
	if(idus == "") {
		setErrorFor("idusuario");
	} 

    if(idp == "") {
		setErrorFor("idpais");
	} 
    
    if(nmbr == "") {
		setErrorFor("nombre");
	} 
     else if (nmbr.length > 25) {
		setErrorFor("nombre");
	 }
    
    if(aplld == "") {
		setErrorFor("apellido");
	}
     else if (aplld.length > 25) {
		setErrorFor("apellido");
	 }
    
    if(drccn == "") {
		setErrorFor("direccion");
	}

    if(ccusr == "") {
		setErrorFor("ccusuario");
	}

    if(ctrsn == "") {
		setErrorFor("contrasena");
	} 
    
    if(cnfctrsn == "") {
		setErrorFor("confcontrasena");
	}
    
    if(eml == "") {
		setErrorFor("email");
	}  
}