const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs');
})

console.log('Server is running on port ' + PORT);
