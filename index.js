import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Gustavo', 'gustavo@email.com', '12/05/1999')
const novoAdmin = new Admin('Ana Beatriz', 'ana@email.com', '13/04/1999')
const novoDocente = new Docente('Yhonathan', 'yho@email.com', '25/01/2000')

console.log(novoUser.exibirInfos())
console.log(novoAdmin.exibirInfos())
console.log(novoDocente.exibirInfos())

// novoUser.#nome = 'Gabriel'
// console.log(novoUser.#nome) // campo privado, não deixa trocar
// console.log(novoUser.#montaObjetoUser()) // Private field '#montaObjetoUser' must be declared in an enclosing class

console.log(novoAdmin.nome) //Ana Beatriz (função get do User)