const getSelect = (id) => {
	let aux = document.getElementById(id);
	return aux.options[aux.selectedIndex].value;
}

function sub() {
	let mostrar = getSelect('areas');
	let ocultar = document.getElementsByClassName("ocultar");
	for(i=0; i<ocultar.length; i++) {
		ocultar[i].style.display = "none";
		ocultar[i].name = "";
	}
	document.getElementById(mostrar).style.display = "inline";
	document.getElementById(mostrar).name = "sub_area";
}

function buscarDoc() {
	let accion = document.getElementById("accion").innerHTML;
	let buscar = document.getElementById("buscar").value;
	let departamento = document.getElementById("areas").value;
	let subdepartamento = document.getElementById(departamento).value;
	let direccion = '../formularios/documento_'+accion+'.php?buscar='+buscar+'&depa='+departamento+'&sub='+subdepartamento;
	window.open(direccion, "_self");
}

function buscarjs() {
	let area = document.getElementById("areas").value;
	let buscar = document.getElementById(area).value;
	let accion = document.getElementById("accion").innerHTML;
/*	let extra = "";
	if (buscar.includes(' - ')) {
		let aux = buscar.split(" - ");
		buscar = aux[0];
		extra = aux[1];
	}
*/	let direccion = '../formularios/subarea_'+accion+'.php?buscar='+buscar;
	//let direccion = '../formularios/subarea_'+accion+'.php?buscar='+buscar+'&areaSuperior='+area+'&subSuperior='+extra;
	window.open(direccion, "_self");
}

function buscarUsuario() {
	let accion = document.getElementById("accion").innerHTML;
	let buscar = document.getElementById("buscar").value;
	let direccion = '../formularios/usuario_'+accion+'.php?buscar='+buscar;
	window.open(direccion, "_self");
}