function limpiarError(){
    var error = document.getElementsByClassName('.text-danger');
    for(var i; i <error.length; i++){
        error[i].innerHTML = '';
        console.log('Campos Borrados')
    }
}
function validar(formulario){
    validarNombre = /^[a-zA-ZÀ-ÿ\s]{4,40}$/;
    validarEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(formulario.nombres.value.trim().length == 0){
        document.getElementById('errornombres').innerText = 'Campo Obligatorio';
        document.getElementById('errorEmail').innerText = 'Campo Obligatorio';
        document.getElementById('errorContrasena').innerText = 'Campo Obligatorio';
        document.getElementById('errorConfirmacion').innerText = 'Campo Obligatorio';
        document.getElementById('errorTipo').innerText = 'Campo Obligatorio';
        document.getElementById('errorAcepto').innerText = 'Debe aceptar para continuar';
        return false;
    }
    
    if(!validarNombre.test(formulario.nombres.value)){
        document.getElementById('errornombres').innerText = 'Campo Invalido';
        document.getElementById('errorEmail').innerText = 'Campo Obligatorio';
        document.getElementById('errorContrasena').innerText = 'Campo Obligatorio';
        document.getElementById('errorConfirmacion').innerText = 'Campo Obligatorio';
        document.getElementById('errorTipo').innerText = 'Campo Obligatorio';
        document.getElementById('errorAcepto').innerText = 'Debe aceptar para continuar';
        return false;
    }
    if(formulario.correo.value.trim().length == 0){
        document.getElementById('errornombres').innerText = '';
        document.getElementById('errorEmail').innerText = 'Campo Obligatorio';
        document.getElementById('errorContrasena').innerText = 'Campo Obligatorio';
        document.getElementById('errorConfirmacion').innerText = 'Campo Obligatorio';
        document.getElementById('errorTipo').innerText = 'Campo Obligatorio';
        document.getElementById('errorAcepto').innerText = 'Debe aceptar para continuar';
        return false;
    }

    if(!validarEmail.test(formulario.correo.value)){
        document.getElementById('errorEmail').innerText = 'Campo Invalido';
        return false;
    }
    if(formulario.contrasena.value.trim().length == 0){
        document.getElementById('errorEmail').innerText = '';
        document.getElementById('errorContrasena').innerText = 'Campo Obligatorio';
        document.getElementById('errorConfirmacion').innerText = 'Campo Obligatorio';
        document.getElementById('errorTipo').innerText = 'Campo Obligatorio';
        document.getElementById('errorAcepto').innerText = 'Debe aceptar para continuar';
        return false
    }
    if(formulario.contrasena.value.trim().length < 7){
        document.getElementById('errorContrasena').innerText = 'Campo Invalido';
        document.getElementById('errorConfirmacion').innerText = 'Las contrasenas no coinciden';
        return false;
    }
    if(formulario.contrasena.value.length != formulario.confirmacion.value.length){
        document.getElementById('errorContrasena').innerText = '';
        document.getElementById('errorConfirmacion').innerText = 'Las contrasenas no coinciden';
        document.getElementById('errorTipo').innerText = 'Campo Obligatorio';
        document.getElementById('errorAcepto').innerText = 'Debe aceptar para continuar';
        return false
    }
    if(formulario.tipo.value == '-1'){
        document.getElementById('errorConfirmacion').innerText = '';
        document.getElementById('errorTipo').innerText = 'Campo Obligatorio';
        document.getElementById('errorAcepto').innerText = 'Debe aceptar para continuar';
        return false
    }
    if(!formulario.terminos.checked){
        document.getElementById('errorTipo').innerText = '';
        document.getElementById('errorAcepto').innerText = 'Debe aceptar para continuar';
        return false
    }
alert('Datos enviados satisfactoriamente')
return true
}
