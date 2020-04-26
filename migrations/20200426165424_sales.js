exports.up = async function (knex) {
	await knex.schema.createTable('sales', (table) => {
		table.increments();

		table
			.integer('sale_id')
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('cars')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
		table.text('customer').notNull();
		table.integer('sale_amount').notNullable();
		table.timestamp('date').notNull().defaultTo(knex.fn.now());
	});
};

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists('sales');
};
