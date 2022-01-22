//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const request = require("request")

const forecast = (latitude, longtitude, callback) => 
{
    const url = 'http://api.weatherstack.com/current?access_key=11b46ac9d4b43bdd172e2f1b329f3d36&query=' + latitude + ',' + longtitude
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!',undefined)
        } else if (body.error) {
            callback('Unable to find location!',undefined)
        } else {
            data = {
                weather_type: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelslike: body.current.feelslike
            }
            callback(undefined, data)
        }
    })
}

module.exports = forecast