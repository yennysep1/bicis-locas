

function validateForm(){
	var nombre = document.getElementById('name').value;
	var apellido = document.getElementById('lastname').value;
	var mail = document.getElementById('input-email').value;
	var clave = document.getElementById('input-password').value;
	var bici = document.getElementsByTagName('select').value;
	var sinEspacios = /\s+/;
	var textoAZ = /[A-Za-z]/;
	var expresionCorreo = /\w+@\w+\.+[a-z]/; //  texto123@texto.texto , \w son caracteres a-z y n 

	//validar nombre
	if (nombre===""){
		alert("El campo Nombre es obligatorio");
		return false;
	}else if (!textoAZ.test(nombre)){
		alert("El campo Nombre sólo permite letras AZ");
		return false;
	}else if (!nombre.charAt(0).toUpperCase()){
		alert("El campo Nombre requiere comenzar con mayuscula");
		return false;
	}
	// validar apellido
	if (apellido===""){
		alert("El campo Apellido es obligatorio");
		return false;
	}else if (!textoAZ.test(apellido)){
		alert("El campo sólo permite letras AZ");
		return false;
	}else if (apellido.charAt(0).toUpperCase()){
		alert("El campo Apellido requiere comenzar con mayuscula");
		return false;
	}
	//validar correo
	if(mail===""){
		alert("El campo Nombre es obligatorio");
		return false;
	}else if (!expresionCorreo.test(mail)){
		alert('El correo no es valido');
		return false;
	}
	//validar clave
	if(clave===""){
		alert("El campo password es obligatorio")
		return false;
	}else if (clave.length < 5 || clave==="password" || clave===123456 || clave===098754){
		alert('su clave es insegura, debe modificarla')
		return false;
	}
	//validar campo seleccion
	if (bici===""){
		alert("Este campo es obligatorio")
		return false;
	}

}



