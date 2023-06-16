const { getDistance } = require('../controllers/DistanceController');
const { getFare } = require('../controllers/FareController');

const express = require('express')
const router = express.Router();



router.post("/getfare", getFare);


router.post("/getdistance", getDistance);


module.exports = router;