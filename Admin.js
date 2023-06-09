import User from "./User.js";
// classe Filha
export default class Admin extends User{
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    exibirInfos() {
        return `${this.getNome()}, ${this.role}, ${this.ativo}` // tecnica de polimorfismo ( utilizando função com mesma assinatura porem com comportamento diferente)
    }

    criarCurso(nomeCurso, vagas){
        return `Curso de ${nomeCurso} criado com ${vagas} vagas`
    }
}

// const novoAdmin = new Admin('Rodrigo', 'r@r.com', '1999-01-20')
// console.log(novoAdmin.criarCurso('Desenvolvimento Web Full stack', 20))
