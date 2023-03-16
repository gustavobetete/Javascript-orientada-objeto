import User from "./User.js";
// classe Filha
class Admin extends User{
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '1999-01-20')
console.log(novoAdmin)
/*
  Admin {
  nome: 'Rodrigo',
  email: 'r@r.com',
  nascimento: '1999-01-20',
  role: 'admin',
  ativo: true
}*/

console.log(novoAdmin.exibirInfos()) //Rodrigo, r@r.com
