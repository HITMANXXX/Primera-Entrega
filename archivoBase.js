const cursos = require ('./cursos').cursos;
const argv = require ('./inscripcion').inscripcion;
const {archivoTexto} = require('./archivoTexto');


let comand =  argv._[0];
let nombre = cursos[id_Nombre];

switch (comand){
	case 'registrar':
	if (Number(argv.id) < cursos.length + 1){
		nombre = cursos.find(cursoAlumno =>cursoAlumno.id == argv.id)
		archivoTexto(argv.nombre, argv.cedula)
		.then(e => console.log('se ha creado el archivo'))
		.catch(e => console.log(e));

	}else{
		console.log(`el codigo  digitado `)
	}
}