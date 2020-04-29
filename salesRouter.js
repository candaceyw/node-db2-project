const express = require('express');
const db = require('./data/config');
const router = express.Router();

// GET all
router.get('/', async (req, res, next) => {
	try {
		const sales = await db.select('*').from('sales');
		res.json(sales);
	} catch (error) {
		next(error);
	}
});

// POST new sales information
router.post('/', async (req, res, next) => {
	try {
		const payload = req.body;
		const [sale_id] = await db('sales').insert(payload);
		const sale = await db('sales').where('sale_id', sale_id).first();
		res.json(sale);
	} catch (error) {
		next(error);
	}
});

// GET sale by ID
router.get('/:id', async (req, res, next) => {
	try {
		const sale = await db('sales').where('sale_id', req.params.id).first();
		res.json(sale);
	} catch (error) {
		next(error);
	}
});

// PUT update sale
router.put('/:id', async (req, res, next) => {
	try {
		const payload = req.body;
		await db('sales').where('sale_id', req.params.id).update(payload);
		const updateSale = await db('sales')
			.where('sale_id', req.params.id)
			.first();
		res.json(updateSale);
	} catch (error) {
		next(error);
	}
});

// DELETE sale
router.delete('/:id', async (req, res, next) => {
	try {
		await db('sales').where('sale_id', req.params.id).del();
		res.status(204).end();
	} catch (error) {
		next(error);
	}
});

module.exports = router;
