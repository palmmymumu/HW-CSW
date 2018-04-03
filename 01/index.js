const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;
const secretPassword = ['BIWZAZA', 'PALMMYMUMU', 'BOYREALLIFE', 'TEACHERWARODOM'];

app.listen(PORT);
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(cookieParser('keyboard cat'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  if (secretPassword.indexOf(req.cookies.password) < 0) {
    res.render('login');
  } else {
    res.render('index', {password: req.cookies.password});
  }
});

app.get('/register', (req, res) => {
	res.render('register');
})
app.post('/login', (req, res) => {
  res.cookie('password', req.body.password);
  res.redirect('/');
})

app.post('/register', (req, res) => {
  secretPassword.push(req.body.password);
  res.redirect('/');
})

app.get('/logout', (req, res) => {
  res.clearCookie('password');
  res.redirect('/');
})

console.log('Server is running on port ' + PORT);
