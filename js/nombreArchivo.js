let archivo = document.querySelector('#archivo');

archivo.addEventListener('change', () => {
	document.querySelector('#nombreArchivo').innerText = archivo.files[0].name;
	if(archivo.files[0].size > 31000000) {
		document.getElementById('advertenciaOculta').style.display = 'block';
		btnSubir.disabled = true;
	}
	else {
		document.getElementById('advertenciaOculta').style.display = 'none';
		btnSubir.disabled = false;
	}
});

function subirIcono() {
	icono = document.getElementById('icono');
	btnSubir = document.getElementById('btnSubir');
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

