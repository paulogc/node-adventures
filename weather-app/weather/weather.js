const request = require('request');

var weatherAddress = (address, key, callback) => {
  var weatherUrl = `https://api.darksky.net/forecast/${key}/${address.lat},${address.lng}`;
  request({
    url: weatherUrl,
    json: true,
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
      });
    } else {
      console.log('Unable to connect to API');
    }
  });
}

module.exports.getWeather = weatherAddress;