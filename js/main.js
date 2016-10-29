
var nombre = document.getElementById('name');
var apellido = document.getElementById('lastname');
var mail = document.getElementById('input-email');
var clave = document.getElementById('input-password');
var bici = document.getElementsByTagName('select')[0];
var textoAZ = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/; //texto de A a Z sin espacios
var expresionCorreo = /\w+@\w+\.+[a-z]/; //  texto123@texto.texto , \w son caracteres a-z y n 


function validateForm(){
	
	//VALIDAR NOMBRE
	function suNombre(){
		if (nombre.value===""){
			alert("El campo Nombre es obligatorio");
			return false;
		} else if (!textoAZ.test(nombre.value)){
			alert("El campo Nombre sólo permite letras AZ sin espacios");
			return false;
		}
	}
	suNombre();
	//VALIDAR APELIIDO
	function suApellido(){
		if (apellido.value ===""){
			alert("El campo Apellido es obligatorio");
			return false;
		} else if (!textoAZ.test(apellido.value)){
			alert("El campo Apellido sólo permite letras AZ sin espacios");
			return false;
		}
	}
	suApellido();
	//VALIDAR PRIMERA LETRA MAYUSCULA *
	function mayusculas(){
		if (nombre.value.charAt(0)!==nombre.value.charAt(0).toUpperCase()){
			alert("Nombre debe comenzar con mayuscula");
			return false;
		}if (apellido.value.charAt(0)!==apellido.value.charAt(0).toUpperCase()){
			alert("Apellido debe comenzar con mayuscula");
			return false;
		}
	}
	mayusculas();
	//VALIDAR CORREO
	function correo(){
		if(mail.value===""){
			alert("El campo Correo es obligatorio");
			return false;
		}else if (!expresionCorreo.test(mail.value)){
			alert('El correo no es valido');
			return false;
		}
	}
	correo();
	//VALIDAR CLAVE
	function contrasenia(){
		if(clave.value===""){
			alert("El campo password es obligatorio")
			return false;
		}else if (clave.value.length < 5 || clave.value==="password" || clave.value==="123456" || clave.value==="098754"){
			alert('su clave es insegura, debe modificarla')
			return false;
		}
	}
	contrasenia();
	//VALIDAR OPCIONES DE BICICLETA
	function bicicleta(){
		if (bici.value==0){
			alert("Debe escoger un tipo de bicicleta");
			return false;
		}
	}
	bicicleta();
} 



