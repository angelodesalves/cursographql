const db = require('../../config/db')

module.exports = {
	usuarios() {
		return db('usuarios');
	},
	async usuario(_, { filtro }) {
		if (!filtro)
			return null;

		const { id, email } = filtro;

		if (id) {
			return await db('usuarios')
				.where({ id })
				.first();
		} else if (email) {
			return await db('usuarios')
				.where({ email })
				.first();
		} else {
			return null;
		}
	},
}