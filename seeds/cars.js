exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex('cars').truncate();
	await knex('cars').insert([
		{
			id: 1,
			VIN: 'JTDKN3DU0C5423791',
			make: 'Nissan',
			model: 'Pathfinder',
			mileage: '120876',
			transmission_type: 'manual',
			title_status: 'clean',
		},
		{
			id: 2,
			VIN: '5TDYK3DC0ES461044',
			make: 'Toyota',
			model: 'RAV4',
			mileage: '76165',
			transmission_type: 'automatic',
			title_status: 'clean',
		},
		{
			id: 3,
			VIN: '1FMCU0G92FUA73034',
			make: 'Mazda',
			model: 'Mazda3',
			mileage: '54376',
			transmission_type: 'automatic',
			title_status: 'clean',
		},
		{
			id: 4,
			VIN: 'JYA2JU009HA067968',
			make: 'Saturn',
			model: 'Ion',
			mileage: '99098',
			transmission_type: 'manual',
			title_status: 'salvage',
		},
		{
			id: 5,
			VIN: 'JN8AZ28RX9T133342',
			make: 'Ford',
			model: 'F150',
			mileage: '10800',
			transmission_type: 'automatic',
			title_status: 'clean',
		},
	]);
};
