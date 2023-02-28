function navegacion(path="") {
	let elementos = ['Area', 'Subarea', 'Usuario']
	let listaJs = document.getElementById('listaJs')
	for (i=0; i<elementos.length; i++) {
		listaJs.innerHTML += '<button class="btn dropdown-toggle lista" data-bs-toggle="dropdown">'
		+ elementos[i] + '</button>'
		+ '<ul class="dropdown-menu">'
		+ '<li><a class="dropdown-item" href="'+path+'formularios/'+elementos[i]+'_subir.html">'
		+ 'Subir ' + elementos[i] + '</a></li>'
		+ '<li><a class="dropdown-item" href="'+path+'formularios/'+elementos[i]+'_modificar.html">'
		+ 'Modificar ' + elementos[i] + '</a></li>'
		+ '<li><a class="dropdown-item" href="'+path+'formularios/'+elementos[i]+'_eliminar.html">'
		+ 'Eliminar ' + elementos[i] + '</a></li></ul>'
	}
	listaJs.innerHTML += '<a href="'+path+'formularios/usuario_password.html">'
		+ '<label id="usuarioNombre">Usuario</label></a>'
		+ '<a href="'+path+'login.html" id="btnSalir" class="btn btn-light">Salir</a>'
}