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

module.exports.geocodeAddress = geocodeAddress;
