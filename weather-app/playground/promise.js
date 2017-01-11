const request = require('request');

const ZERO_RESULTS = 'ZERO_RESULTS';
const OK_RESULT = 'OK';

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    request({
      url: `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
      json: true,
    }, (error, response, body) => {
      if (error) {
        reject('Something unexpected happen');
      } else if (body.status === ZERO_RESULTS) {
        reject('Unable to find address');
      } else if (body.status === OK_RESULT) {
        console.log(body.results[0].formatted_address);
        resolve({
          formatted_address: body.results[0].formatted_address,
          lat: body.results[0].geometry.location.lat,
          lng: body.results[0].geometry.location.lng,
        });
      }
    });
  });
};

geocodeAddress('13575340').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});