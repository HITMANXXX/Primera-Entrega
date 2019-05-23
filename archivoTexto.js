//creamos la constante para la creacion del file system
const fs = require('fs');

let archivoTexto = (nombre, cedula)=>{
	texto = `el nombre del estudiante es ${nombre}  \n 
	         su numero de cedula es ${cedula}`;
	         fs.writeFile('archivo.txt', texto, (err)=>{
	         	if (err) throw(err);
	         	console.log('se ha creado el archivo')
	         }); 
}


module.exports ={
	archivoTexto
}