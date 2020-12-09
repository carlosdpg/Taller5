let form = document.getElementById('registro');
const idusuario = document.getElementById('idusuarioinp'.toString().trim);
const idpais = document.getElementById('idpaisinp'.toString().trim);
const nombre = document.getElementById('nombreinp'.trim);
const apellido = document.getElementById('apellidoinp').trim);
const direccion = document.getElementById('direccioninp'.trim);
const ccusuario = document.getElementById('ccusuarioinp'.trim);
const contrasena = document.getElementById('ccpaswdinp'.trim);
const confcontrasena = document.getElementById('ccconfpaswdinp'.trim);
const email = document.getElementById('emailinp'.trim);

alert("prueba");

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	
	if(idusuario == '') {
		setErrorFor(idusuario);
	} 

    if(idpais == '') {
		setErrorFor(idpais);
	} 
    
    if(nombre == '') {
		setErrorFor(nombre);
	} 
     else if (nombre.length > 25) {
		setErrorFor(nombre);
	 }
    
    if(apellido == '') {
		setErrorFor(apellido);
	}
     else if (apellido.length > 25) {
		setErrorFor(apellido);
	 }
    
    if(direccion == '') {
		setErrorFor(direccion);
    
    if(ccusuario == '') {
		setErrorFor(ccusuario);
    
    if(contrasena == '') {
		setErrorFor(contrasena);
	} 
    
    if(confcontrasena == '') {
		setErrorFor(confcontrasena);
	}
    
    if(email == '') {
		setErrorFor(email);
	}  
    else if (!isEmail(email)) {
		setErrorFor(email);
	}
}


function setErrorFor(input) {
	alert(input + "  no es valido.");
}


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}