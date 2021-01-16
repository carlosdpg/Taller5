const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const expresiones = {
	nombre:  /^[a-zA-ZÀ-ÿ\s]{1,20}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,25}$/, // Letras y espacios, pueden llevar acentos.
    usuario: /^.{10,20}$/,
    direccion:/^.{1,120}$/,
    password: /^.{1,20}$/,
    password2: /^.{1,20}$/,
    correo: /^.{1,120}$/,
}
const campos = {
    nombre:false,
    apellido:false,
    usuario:false,
    coarreo:false,
    contraseña:false,
    direccion:false
    
}
const validarFormulario =(e) => {
    switch(e.target.name){
        case "nombre":
            validarCampo (expresiones.nombre, e.target,'nombre');
        break;
        case "apellido":
            validarCampo(expresiones.apellido,e.target,"apellido");
        break;
        case "direccion":
            validarCampo(expresiones.direccion,e.target,"direccion");
        break;
        case "correo":
            validarCampo(expresiones.correo,e.target,"correo");
        break;
        case "usuario":
            validarCampo(expresiones.usuario,e.target,"usuario");
        break;
        case "contraseña":
            validarCampo(expresiones.password,e.target,"contraseña");
            validarPassword2();
        break;
        case "contraseña2":
            validarPassword2();
        
        break;
    };
     
};
const validarCampo =(expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo]=false;
    }else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo]=true;
    };
};
const validarPassword2 = () => {
    const imputPassword1= document.getElementById('contraseña');
    const imputPassword2= document.getElementById('contraseña2');
    if(imputPassword1.value !==  imputPassword2.value){
        document.getElementById(`grupo__contraseña2`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__contraseña2`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__contraseña2 i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__contraseña2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__contraseña2 .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['contraseña']=false;
    } else{
        document.getElementById(`grupo__contraseña2`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__contraseña2`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__contraseña2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__contraseña2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__contraseña2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['contraseña']=true;
    }

};


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
    
});
formulario.addEventListener('submit', (e) => {
e.preventDefault();
const terminos =document.getElementById('terminos');
if( campos.nombre && campos.apellido && campos.usuario && campos.coarreo && campos.contraseña && campos.direccion && terminos.checked ){
    formulario.reset();
    
}
});

