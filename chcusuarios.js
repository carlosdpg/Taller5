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

const idus = idusuario.toString().trim();
const idp = idpais.toString().trim();
const nmbr = nombre.trim();
const aplld = apellido.trim();
const drccn = direccion.trim();
const ccusr = ccusuario.trim();
const ctrsn = contrasena.trim();
const cnfctrsn = confcontrasena.trim();
const eml = email.trim();

alert("prueba");

form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	checkInputs();
});

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
    
    if(ccusr == "") {
		setErrorFor("ccusuario");
    
    if(ctrsn == "") {
		setErrorFor("contrasena");
	} 
    
    if(cnfctrsn == "") {
		setErrorFor("confcontrasena");
	}
    
    if(eml == "") {
		setErrorFor("email");
	}  
    else if (!isEmail(eml)) {
		setErrorFor("email");
	}
}


function setErrorFor(input) {
	alert(input + "  no es valido.");
}


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}