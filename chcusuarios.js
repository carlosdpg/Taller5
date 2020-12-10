const form = document.getElementById('registro');
const idusuario = document.getElementById('idusuarioinp');
const idpais = document.getElementById('idpaisinp');
const nombre = document.getElementById('nombreinp');
const apellido = document.getElementById('apellidoinp');
const direccion = document.getElementById('direccioninp');
const ccusuario = document.getElementById('ccusuarioinp');
const contrasena = document.getElementById('ccpaswdinp');
const confcontrasena = document.getElementById('ccconfpaswdinp');
const email = document.getElementById('emailinp');

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