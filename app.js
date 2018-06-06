'use strict';

const express = require('express');
const app = express();
// mustache govuk template
const govukTemplate = require('hof-govuk-template');
// hogan renderer engine, this is better than hogan express because it throws an error when you've done your mustache wrong
const hoganExpressStrict = require('hogan-express-strict');
// Allows the use of partials
const expressPartialTemplates = require('express-partial-templates');
const path = require('path');

// setup for front end toolkit
govukTemplate.setup(app);

// this recognises html files
app.set('view engine', 'html');

//setting where my views are, you can have arrays
app.set('views', [path.resolve(__dirname, 'views')]);

// using the hoganExpress engine
app.engine('html', hoganExpressStrict);
// need to call this after the others
app.use(expressPartialTemplates(app));

// serving static files
app.use('/public', express.static(path.resolve(__dirname, 'public')));

app.get('/', function(req, res){
  res.render('home', Object.assign({}, res.locals, {
  }));
});

app.get('/download', function(req, res){
  res.render('download', Object.assign({}, res.locals, {
  }));
});

// Set server port
app.listen(4000, function() {
  console.log('App listening on port 4000!')
});
