let inscripcion ={
	nombre:{
		demand : true,
		alias :'n'
	},
	cedula:{
		demand : true,
		alias : 'c'
	},
	id: {
		demand : true,
		alias : 'i'
	}
};

const argv = require('yargs')
			 .command('inscribir', 'registrarme en un curso', inscripcion)
			 .argv;


module.exports = {
	argv
}			 