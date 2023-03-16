import User from "./User.js";
// Classe filho
export default class Docente extends User{
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    aprovarEstudante(estudante, curso){
       return `O estudante ${estudante} foi aprovado(a) no curso ${curso}. `
    }
}

// const novoDocente = new Docente('Guilherme', 'g@gmail.com', '12/05/1984')
// console.log(novoDocente)
// console.log(novoDocente.exibirInfos())
// console.log(novoDocente.aprovarEstudante('Guilherme', 'Análise e desenvolvimento de sistemas'))