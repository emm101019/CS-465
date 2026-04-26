const express = require('express');
const router = express.Router();
const { expressjwt: jwt } = require('express-jwt');
const ctrlTrips = require('../controllers/trips');
const ctrlAuth = require('../controllers/authentication');

const auth = jwt({
  secret: 'MY_SECRET',
  algorithms: ['HS256']
});

router.get('/trips', ctrlTrips.tripsList);
router.get('/trips/:tripCode', ctrlTrips.tripsFindCode);
router.post('/login', ctrlAuth.login);
router.post('/register', ctrlAuth.register);

router.post('/trips', auth, ctrlTrips.tripsAddTrip);
router.put('/trips/:tripCode', auth, ctrlTrips.tripsUpdateTrip);
router.delete('/trips/:tripCode', auth, ctrlTrips.tripsDeleteTrip);

module.exports = router;