const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');

//app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'About page',
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'Welcome Friend',
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page',
    currentYear: new Date().getFullYear(),
  });
});

app.get('/bad', (req, res) => {
  res.send({
    error: 35,
    message: 'Something went wrong',
  });
});

app.get('/about/me', (req, res) => {
  res.send({
    im: 'Im 30 years old',
    not: 'Nobody',
  });
});

app.listen(3000, () => {
  console.log('Server is up and running')
});