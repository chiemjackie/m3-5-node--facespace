'use strict';

const express = require('express');
const morgan = require('morgan');

const {
  handleFourOhFour,
  handleHomePage,
  handleProfilePage,
  handleLogin,
  handleName
} = require('./handlers')

// -----------------------------------------------------
// server endpoints
express()
  .use(morgan('dev'))
  .use(express.static('public'))
  .use(express.urlencoded({ extended: false }))
  .set('view engine', 'ejs')

  // endpoints
  .get('/login', handleLogin)
  .get('/users/:id', handleProfilePage)
  .get('/', handleHomePage)
  .post('/getname', handleName)

  // a catchall endpoint that will send the 404 message.
  .get('*', handleFourOhFour)

  .listen(8000, () => console.log('Listening on port 8000'));
