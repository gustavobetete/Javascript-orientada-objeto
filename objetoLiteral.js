const user = {
    nome: 'Gustavo',
    email: 'gustavo.betete@email.com',
    nascimento: '1999/01/01',
    role: "estudante",
    ativo: true,
    exibirInfos: function (){
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: 'Mariana',
    email: 'Mariana@email.com',
    nascimento: '1989/12/21',
    role: "admin",
    ativo: true,
    criarCurso(){
        console.log('Curso criado.')
    }
}

Object.setPrototypeOf(admin, user) // fez a ligação dos dados do user para o admin, ou seja, agora o admin possui o exibirInfos

user.exibirInfos(); // gustavo gustavo.betete@email.com
admin.criarCurso() // Curso criado
admin.exibirInfos() // Mariana Mariana@email.com