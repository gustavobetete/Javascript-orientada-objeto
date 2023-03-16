//classe Pai
export default class User {
    #nome //proteger o nome para privada ( ou seja, ngm pode alterar os dados de user )
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    get nome(){
        return this.#nome
    }

    get email(){
        return this.#email
    }

    get nascimento(){
        return this.#nascimento
    }

    get role(){
        return this.#role
    }

    get ativo(){
        return this.#ativo
    }

    #montaObjetoUser(){
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }

    exibirInfos() {
        const objUser = this.#montaObjetoUser() // tem acesso ja que esta na classe User
        return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${objUser.ativo}`
    }
}

// const novoUser = new User('Juliana', 'j@j.com', '1965-02-24')
// console.log(novoUser)
// console.log(novoUser.exibirInfos())

// console.log(User.prototype.isPrototypeOf(novoUser)) // true