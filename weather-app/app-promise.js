const yargs = require('yargs');
const axios = require('axios');

const KEY = '4c19496c089f8130403a97c387246119';

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'address to fetch the api',
      string: true,
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var uriAddress = encodeURIComponent(argv.address);

var geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${uriAddress}`;

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find address');
  }

  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;

  var weatherUrl = `https://api.darksky.net/forecast/${KEY}/${lat},${lng}`;
  console.log(response.data.results[0].formatted_address);

  return axios.get(weatherUrl);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`Its currently ${temperature} and fells like ${apparentTemperature}`);
}).catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('Uneble to connect to the server');
  } else {
    console.log(e.message);
  }
})