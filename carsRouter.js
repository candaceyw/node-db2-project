const express = require('express');
const db = require('./data/config');
const router = express.Router();

// GET all
router.get('/', async (req, res, next) => {
	try {
		const cars = await db.select('*').from('cars');
		res.json(cars);
	} catch (error) {
		next(error);
	}
});

// POST new car information
router.post('/', async (req, res, next) => {
	try {
		const payload = req.body;
		const [id] = await db('cars').insert(payload);
		const car = await db('cars').where('id', id).first();
		res.json(car);
	} catch (error) {
		next(error);
	}
});

// GET cars by ID
router.get('/:id', async (req, res, next) => {
	try {
		const car = await db('cars').where('id', req.params.id).first();
		res.json(car);
	} catch (error) {
		next(error);
	}
});

// PUT update car
router.put('/:id', async (req, res, next) => {
	try {
		const payload = req.body;
		await db('cars').where('id', req.params.id).update(payload);
		const updateCar = await db('cars').where('id', req.params.id).first();
		res.json(updateCar);
	} catch (error) {
		next(error);
	}
});

// DELETE car
router.delete('/:id', async (req, res, next) => {
	try {
		await db('cars').where('id', req.params.id).del();
		res.status(204).end();
	} catch (error) {
		next(error);
	}
});

module.exports = router;
