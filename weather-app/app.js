const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');

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
const key = '4c19496c089f8130403a97c387246119';
geocode.geocodeAddress(argv.a, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    geocode.weatherAddress(results, key, (weatherErrorMessage, weatherResults) => {
      if (weatherErrorMessage) {
        consoel.log(weatherErrorMessage);
      } else {
        console.log(JSON.stringify(results, undefined, 2));
        console.log(JSON.stringify(weatherResults, undefined, 2));
      }
    })
  }


});