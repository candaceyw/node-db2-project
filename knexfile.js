// Update with your config settings.

module.exports = {
	client: 'sqlite3',
	useNullAsDefault: true,
	connection: {
		filename: './data/cars.db3',
	},
	migrations: {
		directory: './migrations',
	},
	seeds: {
		directory: './seeds',
	},
};
