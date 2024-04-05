const cursos = ['JavaScript', 'HTMl','CSS', 'Arduino', 'Raspberry', 'C++', 'Python', 'Java', 'C#']

// Só pode ter um método definido como padrão.
export default function getTodosCursos(){
    return cursos
}

function Indice_Cursos(i_curso){
    return cursos[i_curso]
}

// Tenho que exportar o que eu quero pegar.
export {cursos, Indice_Cursos} 

// export default getTodosCursos