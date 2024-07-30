const express = require('express');
const router = express.Router();
const Booking = require('../models/booking'); // Adjust path if needed

// GET all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new booking
router.post('/', async (req, res) => {
  const booking = new Booking({
    destination: req.body.destination,
    date: req.body.date,
    status: req.body.status
  });

  try {
    const newBooking = await booking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
