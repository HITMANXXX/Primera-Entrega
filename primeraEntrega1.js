//creamos la lista de cursos que vammos a publicar

let cursos = {
	PrimerCurso:{ Nombre1: 'Bootstrap 4',
				  Id1: 1245,
				  Duracion1: '4 meses',
			      Valor1: 250000
				},
	SegundoCurso:{ Nombre2: 'Html5 y Css',
				   Id2: 2201,
				   Duracion2: '2 meses',
				   Valor2: 150000

				},
	TercerCurso:{ Nombre3: 'Javascript',
				  Id3: 3522,
				  Duracion3: '3 meses',
		          Valor3: 200000
				}
}

//exportamos el modulo
module.exports = {
	cursos

};