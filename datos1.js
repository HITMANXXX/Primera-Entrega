const universidad = require('./primeraEntrega1');
//console.log(universidad.cursos);


// mostramos los 3 cursos en sus intervalos de tiempo (2s)
setTimeout(function(){
	console.log('El primer curso en oferta es ' + universidad.cursos.PrimerCurso.Nombre1);
	console.log('Su codigo de identificacion es ' + universidad.cursos.PrimerCurso.Id1);
	console.log('La duracion del curso es ' + universidad.cursos.PrimerCurso.Duracion1);
	console.log('El Costo del curso es ' + universidad.cursos.PrimerCurso.Valor1);
},0);

setTimeout(function(){
	console.log('El segundo curso en oferta es ' + universidad.cursos.SegundoCurso.Nombre2);
	console.log('Su codigo de identificacion es ' + universidad.cursos.SegundoCurso.Id2);
	console.log('La duracion del curso es ' + universidad.cursos.SegundoCurso.Duracion2);
	console.log('El Costo del curso es ' + universidad.cursos.SegundoCurso.Valor2);
},2000);

setTimeout(function(){
	console.log('El Tercer curso en oferta es ' + universidad.cursos.TercerCurso.Nombre3);
	console.log('Su codigo de identificacion es ' + universidad.cursos.TercerCurso.Id3);
	console.log('La duracion del curso es ' + universidad.cursos.TercerCurso.Duracion3);
	console.log('El Costo del curso es ' + universidad.cursos.TercerCurso.Valor3);
},4000);
