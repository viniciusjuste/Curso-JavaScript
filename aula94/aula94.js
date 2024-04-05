// O 'as' renomeia o método que foi esportado.

//import { cursos as c, Indice_Cursos as ic } from "./cursos3.js" // Aqui eu importo o que eu quero usar.
import  getTodosCursos  from "./cursos3.js";

// Consigo renomear o módulo inteiro.
import * as m_cursos from './cursos3.js'

m_cursos.cursos.forEach(element => {
    console.log(element)
});

console.log(m_cursos.default())

console.log(m_cursos.Indice_Cursos(2))


