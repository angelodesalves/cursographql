const perfis = [{
	id: 1,
	nome: 'Admin'
},{
	id: 2,
	nome: 'Comum'
}];

const usuarios = [{
	id: 1,
	nome: 'André',
	email: 'andre@gmail.com',
	idade: 23,
	perfil_id: 1,
	status: 'ATIVO'
}, {
	id: 2,
	nome: 'Augusto',
	email: 'augusto@gmail.com',
	idade: 54,
	perfil_id: 2,
	status: 'INATIVO'
}, {
	id: 3,
	nome: 'Pamela',
	email: 'angela@gmail.com',
	idade: 35,
	perfil_id: 2,
	status: 'BLOQUEADO'
}];

module.exports = { usuarios, perfis };