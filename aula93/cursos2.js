const cursos = ['JavaScript', 'HTMl','CSS', 'Arduino', 'Raspberry', 'C++', 'Python', 'Java', 'C#']

// const getTodosCursos = () => {
//     return cursos
// }

// Só pode ter um método definido como padrão.
export default function getTodosCursos(){
    return cursos
}

function Indice_Cursos(i_curso){
    return cursos[i_curso]
}

export {cursos, Indice_Cursos} // Tenho que exportar o que eu quero pegar.

// export default getTodosCursos