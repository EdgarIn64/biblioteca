/* Hacer visible la contraseña */

function viewPassword() {
	let x = document.getElementById("password");
	if (x.type === "password")
		x.type = "text";
	else
		x.type = "password";
}

/* Efectos visuales */

const msjPassword = () => {
	viewPassword()
	let x = document.getElementById("checkPassword")
	if (x.checked) 
		x.checked = false
	else
		x.checked = true
}

const msjRecordar = () => {
	let x = document.getElementById("checkRecordar")
	if (x.checked) 
		x.checked = false
	else
		x.checked = true
}

/* Login */

const ingresar = () => {
	window.open("menu.html","_self")
} 
