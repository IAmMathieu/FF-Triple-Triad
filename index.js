const dotenv = require('dotenv');
const express = require('express');
const session = require('express-session')

dotenv.config();

const PORT = process.env.PORT || 1234;
const router = require('./app/router');

const app = express();
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 3600000 } // Session d'une heure
}))

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('public'));

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT}`);
});
