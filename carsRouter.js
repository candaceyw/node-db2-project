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

module.exports = router;
