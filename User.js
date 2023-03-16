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

    getNome(){
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

    setNome(novoNome) {
        if(novoNome === ''){
            throw new Error('Formato invalido!')
        }
      this.#nome = novoNome
    }

    exibirInfos() {
        return `${this.getNome()}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
    }
}

// const novoUser = new User('Juliana', 'j@j.com', '1965-02-24')
// console.log(novoUser)
// console.log(novoUser.exibirInfos())

// console.log(User.prototype.isPrototypeOf(novoUser)) // true