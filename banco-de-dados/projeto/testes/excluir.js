const db = require('../config/db');

db('perfis')
	.where({ id: 10 })
	.delete()
	.then(res => console.log(res))
	.finally(() => db.destroy());