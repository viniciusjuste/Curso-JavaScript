/* import Curso from "./cursos4.js"; // Não pode esquecer de colocar o '.js'
console.log(Curso.getTodosCursos()) */

// Posso colocar o nome que eu quiser, pelo fato de 'Curso' ser exportado como default.
import c from "./cursos4.js";

c.addCurso('Photoshop')
c.apagartodosCursos()
console.log(c.getTodosCursos())
