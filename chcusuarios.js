const idusuario = document.getElementById('idusuarioinp');
const idpais = document.getElementById('idpaisinp');
const nombre = document.getElementById('nombreinp');
const apellido = document.getElementById('apellidoinp');
const direccion = document.getElementById('direccioninp');
const ccusuario = document.getElementById('ccusuarioinp');
const contrasena = document.getElementById('ccpaswdinp');
const confcontrasena = document.getElementById('ccconfpaswdinp');
const email = document.getElementById('emailinp');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const idusuarioValue = idusuario.value.trim();
    const idpaisValue = idpais.value.trim();
    const nombreValue = nombre.value.trim();
    const apellidoValue = apellido.value.trim();
    const direccionValue = direccion.value.trim();
    const ccusuarioValue = ccusuario.value.trim();
    const contrasenaValue =contrasena.value.trim();
    const confcontrasenaValue = confcontrasena.value.trim();
    const emailValue = email.value.trim();
	
	if(idusuarioValue === '') {
		setErrorFor(idusuario);
	} 

    if(idpaisValue === '') {
		setErrorFor(idpais);
	} 
    
    if(nombreValue === '') {
		setErrorFor(nombre');
	} 
     else if (nombre.length > 25) {
		setErrorFor(nombre);
    
    if(apellidoValue === '') {
		setErrorFor(apellido);
	}
     else if (apellido.length > 25) {
		setErrorFor(apellido);
    
    if(direccionValue === '') {
		setErrorFor(direccion);
    
    if(ccusuarioValue === '') {
		setErrorFor(ccusuario);
    
    if(contrasenaValue === '') {
		setErrorFor(contrasena');
	} 
    
    if(confcontrasenaValue === '') {
		setErrorFor(confcontrasena);
	}
    
    if(emailValue === '') {
		setErrorFor(email);
	}  
    else if (!isEmail(emailValue)) {
		setErrorFor(email);
}

function setErrorFor(input) {
	alert("No es valido.");
}