const idusuario = document.getElementById('idusuarioinp'.toString().trim);
const idpais = document.getElementById('idpaisinp'.toString().trim);
const nombre = document.getElementById('nombreinp'.toString().trim);
const apellido = document.getElementById('apellidoinp'.toString().trim);
const direccion = document.getElementById('direccioninp'.toString().trim);
const ccusuario = document.getElementById('ccusuarioinp'.toString().trim);
const contrasena = document.getElementById('ccpaswdinp'.toString().trim);
const confcontrasena = document.getElementById('ccconfpaswdinp'.toString().trim);
const email = document.getElementById('emailinp'.toString().trim);

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
    
    if(apellido == '') {
		setErrorFor(apellido);
	}
     else if (apellido.length > 25) {
		setErrorFor(apellido);
    
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

function setErrorFor(input) {
	alert(input + "  no es valido.");
}