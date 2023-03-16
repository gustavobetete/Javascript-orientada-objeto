function User(nome, email){
    this.nome = nome
    this.email = email

    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`
    }
}

// const novoUser = new User('Gustavo', 'gbc@email.com')
// console.log(novoUser.exibirInfos())

function Admin(role){
    User.call(this, 'Gustavo', 'gbc@email.com')
    this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)
const novoAdmin = new Admin('admin')
console.log(novoAdmin.exibirInfos()) // gustao, gbc@email.com
console.log(novoAdmin.role) // admin

const user2 = {
    init: function(nome, email){
        this.nome = nome
        this.email = email
    }, 

    exibirInfos2: function(){
        return this.nome
    }
}

const novoUser = Object.create(user2)
novoUser.init('Gustavo', 'teste@email.com')
console.log(novoUser.exibirInfos2()) // Gustavo
console.log(user2.isPrototypeOf(novoUser)) // true
