const usuarios = [
	{
		id: 1,
		usuario: "usuario1",
		clave: "1234",
	},
	{
		id: 2,
		usuario: "usuario2",
		clave: "5678",
	},
	{ id: 3, usuario: "usuario3", clave: "9101" },
	{
		id: 4,
		usuario: "usuario4",
		clave: "1121",
	},
	{ id: 5, usuario: "usuario5", clave: "3141" },
];

const btnIngresar = document.getElementById("btnIngresar");

btnIngresar.addEventListener("click", validaUsuario);

function validaUsuario() {

	const usuarioIngresado = document.getElementById("usuario").value;
	const contrasena = document.getElementById("contrasena").value;

	console.log("Usuario: " + usuarioIngresado + "Contraseña: " + contrasena);
	const usuarioValido = usuarios.find((p) => p.usuario == usuarioIngresado);

	// Obtener el contador de intentos para el usuario actual

	let cont = localStorage.getItem(`intentos_${usuarioIngresado}`) || 0;

	if (cont < 3) {

		if (!usuarioValido) {
			cont++;
			localStorage.setItem(`intentos_${usuarioIngresado}`, cont);
			alert('El usuario no existe en el sistema');
			if (cont == 3) {
				alert("¡Cuenta bloqueada!");
			}
		} else if (usuarioValido.clave != contrasena) {
			cont++;
			localStorage.setItem(`intentos_${usuarioIngresado}`, cont);
			alert('Contraseña incorrecta!');
			if (cont == 3) {
				alert("¡Cuenta bloqueada!");
			}
		} else {
			alert("¡Inicio de sesión exitoso!");
			localStorage.removeItem(`intentos_${usuarioIngresado}`);
		}

	}else {
		alert("¡Cuenta bloqueada!");
	}

}


// Usada con setTtimeout para habilitar nuevamente el acceso
/* function habilitarAcceso() {
	alert("¡Cuenta bloqueada! Intente nuevamente en 20 segundos.");
	console.log(usuarioIngresado);
	setTimeout(() => {
		localStorage.removeItem(`intentos_${usuarioIngresado}`);
		alert("Acceso habilitado");
	}, 20000);
} */
//Comentario final tratando dehabilitar git