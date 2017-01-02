const request = require('request');
const yargs = require('yargs');

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

console.log(argv.a);
const address = encodeURIComponent(argv.a);

request({
  url: `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
  json: true,
}, (error, response, body) => {
  console.log(JSON.stringify(body.results[0].formatted_address, undefined, 2));
  console.log(JSON.stringify(body.results[0].geometry.location, undefined, 2));
});