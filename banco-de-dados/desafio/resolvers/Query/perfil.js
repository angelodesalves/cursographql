const db = require('../../config/db')

module.exports = {
	perfis() {
		return db('perfis')
			.select('id', 'nome', 'rotulo');
	},
	async perfil(_, { filtro }) {
		if (!filtro)
			return null;

		const { id, nome } = filtro;

		if (id) {
			return await db('perfis')
				.where({ id })
				.first();
		} else if (nome) {
			return await db('perfis')
				.where({ nome })
				.first();
		} else {
			return null;
		}
	}
}