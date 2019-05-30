const { usuarios, perfis } = require('../data/db');

module.exports = {
	ola() {
		return "Alooow";
	},
	hora() {
		return new Date;
	},
	usuarioLogado() {
		return {
			id: 1,
			nome: "Angelo",
			email: "angelo@g.com",
			salario_real: 1234.56
		}
	},
	produtoEmDestaque() {
		return {
			nome: 'Controle XBOX',
			preco: 199.99,
			desconto: .15
		}
	},
	numerosMegaSena() {
		return [4, 8, 13, 27, 33, 54];
	},
	usuarios() {
		return usuarios;
	},
	usuario(parent, { id }) {
		const selecionados = usuarios.filter(u => u.id == id);

		return selecionados ? selecionados[0] : null;
	},
	perfis() {
		return perfis;
	},
	perfil(parent, { id }) {
		const selecionados = perfis.filter(p => p.id == id);

		return selecionados ? selecionados[0] : null;
	}
}