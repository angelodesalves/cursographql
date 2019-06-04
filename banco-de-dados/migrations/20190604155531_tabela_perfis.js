
exports.up = function(knex, Promise) {
	console.log("table perfis");
	return knex.schema.createTable('perfis', table => {
		table.increments('id').primary();
		table.string('nome').notNull().unique();
		table.string('rotulo').notNull();
	}).then(function() {
		return knex('perfis').insert([
			{ nome: 'comum', rotulo: 'Comum' },
			{ nome: 'admin', rotulo: 'Admin' },
			{ nome: 'master', rotulo: 'Master' }
		]);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('perfis');
};
