function subirArchivo() {
	let archivo = document.getElementById('archivo');
	document.getElementById('nombreArchivo').innerText = archivo.files[0].name;
	if(archivo.files[0].size > 31000000) {
		document.getElementById('advertenciaOculta').style.display = 'block';
		btnSubir.disabled = true;
	}
	else {
		document.getElementById('advertenciaOculta').style.display = 'none';
		btnSubir.disabled = false;
	}
}

function subirIcono() {
	let icono = document.getElementById('icono');
	let btnSubir = document.getElementById('btnSubir');
	document.getElementById('nombreArchivo').innerText = icono.files[0].name;
	if(icono.files[0].size > 510000) {
		document.getElementById('advertenciaOculta').style.display = 'block';
		btnSubir.disabled = true;
	}
	else {
		document.getElementById('advertenciaOculta').style.display = 'none';
		btnSubir.disabled = false;
	}
}

