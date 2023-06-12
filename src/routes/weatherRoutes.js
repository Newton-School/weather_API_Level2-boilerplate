const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');



// Level 2: Get 7 Days Weather Forecast Data by Name
router.get('/forecast/city/:name', async (req, res) => {
   // TODO: Implement this function
});

module.exports = router;
