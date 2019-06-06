const db = require('../config/db');

async function salvarUsuario(nome, email, senha) {
	let usuario = await db('usuarios')
		.where({ email })
		.first();

	if (!usuario) {
		let [ id ] = await db('usuarios')
			.insert({ nome, email, senha });

		usuario = await db('usuarios')
			.where({ id }).first();
	
	} else {
		await db('usuarios')
			.where({ id: usuario.id })
			.update({ nome, email, senha });

		usuario = { ...usuario, nome, email, senha}
	}

	return usuario;
}

async function salvarPerfil(nome, rotulo) {
	let perfil = await db('perfis')
		.where({ nome })
		.first();

	if (!perfil) {
		let [ id ] = await db('perfis')
			.insert({ nome, rotulo });

		perfil = await db('perfis')
			.where({ id }).first();
	} else {
		await db('perfis')
			.where({ id: perfil.id })
			.update({ rotulo });

		perfil = { ...perfil, rotulo}
	}

	return perfil;
}

async function adionarPerfis(usuario, ...perfis) {
	const usuario_id = usuario.id;
	await db('usuarios_perfis')
		.where({ usuario_id })
		.delete();

	for (perfil of perfis) {
		const perfil_id = perfil.id;
		await db('usuarios_perfis')
			.insert({ usuario_id, perfil_id })
	}
}

async function executar() {
	const usuario = await salvarUsuario('Ana', 'ana@g.com', '123');
	const perfilA = await salvarPerfil('rh 1', 'Pessoal 2');
	const perfilB = await salvarPerfil('fin 1', 'Financeiro');

	console.log(usuario);
	console.log(perfilA);
	console.log(perfilB);

	await adionarPerfis(usuario, perfilA, perfilB);
}

executar()
	.catch(err => console.log(err))
	.finally(() => db.destroy());