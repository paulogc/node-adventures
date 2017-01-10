const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js')
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

var results;

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    weather.getWeather(results, KEY, (weatherErrorMessage, weatherResults) => {
      if (weatherErrorMessage) {
        consoel.log(weatherErrorMessage);
      } else {
        console.log(`${results.formatted_address}`);
        console.log(`It's currently ${weatherResults.temperature} it fells like ${weatherResults.apparentTemperature}`);
      }
    })
  }


});