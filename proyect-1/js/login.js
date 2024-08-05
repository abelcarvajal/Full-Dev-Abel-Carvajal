const usuarios = [ { id: 1, usuario: 'usuario1', clave: '1234' }, { id: 2, usuario: 'usuario2',
clave: '5678' }, { id: 3, usuario: 'usuario3', clave: '9101' }, { id: 4, usuario: 'usuario4', clave:
'1121' }, { id: 5, usuario: 'usuario5', clave: '3141' } ];

const btnIngresar = document.getElementById('btnIngresar')


btnIngresar.addEventListener("click", validaUsuario)

function validaUsuario(){
	const usuarioIngresado=document.getElementById('usuario').value
	const contrasena=document.getElementById('contrasena').value
	
	const usuarioValido = usuarios.find(p => p.usuario == usuarioIngresado)
	console.log(usuarioValido)

	if(usuarioValido && usuarioValido.clave == contrasena){
		alert('Credenciales correctas')
	} else {
		alert('Acceso denegado. Verifique los datos ingresados')
	}

}