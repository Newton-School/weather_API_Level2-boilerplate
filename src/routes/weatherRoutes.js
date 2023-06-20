const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

/*
  Instructions for students:
  Implement the route handler for retrieving the 7-day weather forecast data for a city by its name.

  Route:
    GET /forecast/city/:name

  Input:
    - :name (string): The name of the city for which forecast data needs to be retrieved.

  Output:
    - If the city name is found in the database, send a JSON response with the following structure and a status code of 200:
      {
        "status": "success",
        "message": "Forecast data retrieved",
        "data": { ... } // Forecast data object for the specified city
      }

    - If the city name is not found in the database, send a JSON response with the following structure and a status code of 404:
      {
        "status": "error",
        "error": "City not found",
        "message": "Failed to retrieve forecast data"
      }
      
  Tips:
    - Use the weatherController.getForecastDataByName() function to retrieve the forecast data for the specified city.
    - Pass the city name from the request parameters to the getForecastDataByName() function.
    - Handle the returned result and send the appropriate JSON response based on the result.

*/

// Level 2: Get 7 Days Weather Forecast Data by Name
router.get('/forecast/city/:name', async (req, res) => {
   // TODO: Implement this function
});

module.exports = router;
