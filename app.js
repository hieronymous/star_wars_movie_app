var express = require('express');

var app = express();

var routes = require('./routes');

var path = require('path');

// following line tells express that the assets are in public directory
app.use(express.static(path.join(__dirname, 'public')));

// set 'ejs' as the templating engine for application
// first from terminal enter: npm install ejs --save
// then add line below to specify view engine

app.get('/', routes.home);

app.get('/star_wars_episode/:episode_number?', routes.movie_single);

app.get('*', routes.notFound);

app.set('view engine', 'ejs');

// app.listen(3000, function(){
// 	console.log('Listening on port 3000 . . . .');
// });

// Following log allows Heroku to run app in production environment, OR port 3000 if development
app.listen(process.env.PORT || 3000);