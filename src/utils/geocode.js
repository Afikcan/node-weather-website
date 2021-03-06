const request = require('request')

geocode = (address, callback) => 
{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoiYWZ5cXVlIiwiYSI6ImNreW12emI0bzAxbXMybm95dWNucHl5ajkifQ.KnHMiOxsVS3y1ycE6dxKig&limit=1'
    request({ url: url, json: true}, (error, { body }) =>{
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Please try another search.',undefined)
        } else {
            data = {
                latitude : body.features[0].center[1],
                longtitude : body.features[0].center[0],
                location : body.features[0].place_name
            }
            callback(undefined, data)
        }
    })
}

module.exports = geocode