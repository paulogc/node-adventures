const request = require('request');

const ZERO_RESULTS = 'ZERO_RESULTS';
const OK_RESULT = 'OK';

var geocodeAddress = (address, callback) => {
  var uriAddress = encodeURIComponent(address);

  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${uriAddress}`,
    json: true,
  }, (error, response, body) => {
    if (error) {
      callback('Something unexpected happen');
    } else if (body.status === ZERO_RESULTS) {
      callback('Unable to find address');
    } else if (body.status === OK_RESULT) {
      callback(undefined, {
        formatted_address: body.results[0].formatted_address,
        lat: body.results[0].geometry.location.lat,
        lng: body.results[0].geometry.location.lng,
      });
    }
  });
};

var weatherAddress = (address, key, callback) => {
  var weatherUrl = `https://api.darksky.net/forecast/${key}/${address.lat},${address.lng}`
  console.log(weatherUrl);
  request({
    url: weatherUrl,
    json: true,
  }, (error, response, body) => {
    console.log(JSON.stringify(response));
    if (error) {
      cosnole.log('oi');
      callback('Something unexpected happen');
    } else if (body.status === ZERO_RESULTS) {
      cosnole.log('oi');
      callback('Unable to find address');
    } else if (body.status === OK_RESULT) {
      cosnole.log('oi');
      callback(undefined, {
        temperature: body.results[0].currently.temperature,
        apparentTemperature: body.results[0].currently.apparentTemperature,
      });
    }
  });
}

module.exports = {
  geocodeAddress,
  weatherAddress,
};
