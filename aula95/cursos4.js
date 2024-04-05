class Curso{

    // Os métodos 'static' é para não ter que instanciar a classe Curso.
    static cursos = ['JavaScript', 'HTMl','CSS', 'Arduino', 'Raspberry', 'C++', 'Python', 'Java', 'C#']

   static getTodosCursos = () => {
        return this.cursos
    }

    static getCurso = (i_curso) => {
        return this.cursos[i_curso]
    }

    static addCurso = (novoCurso) => {
        this.cursos.push(novoCurso)
    }

    static apagartodosCursos = () => {
        this.cursos = []
    }

}


// Tenho que exportar o que eu quero pegar.
export default Curso

