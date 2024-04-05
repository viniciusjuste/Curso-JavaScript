
import { cursos, Indice_Cursos } from "./cursos2.js" // Aqui eu importo o que eu quero usar.
import  getTodosCursos  from "./cursos2.js";

cursos.forEach(element => {
    console.log(element)
});

console.log(getTodosCursos())

console.log(Indice_Cursos(2))


