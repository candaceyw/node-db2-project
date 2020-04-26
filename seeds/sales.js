exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex('sales').truncate();
	await knex('sales').insert([
		{
			sale_id: 1,
			customer: 'Bill Jones',
			sale_amount: 22000,
			date: knex.fn.now(),
		},
		{
			sale_id: 2,
			customer: 'Alice Brown',
			sale_amount: 32000,
			date: knex.fn.now(),
		},
		{
			sale_id: 3,
			customer: 'Andy Green',
			sale_amount: 42000,
			date: knex.fn.now(),
		},
		{
			sale_id: 4,
			customer: 'Jackie Smith',
			sale_amount: 52000,
			date: knex.fn.now(),
		},
	]);
};
