const express = require('express');
const datas = require('./Data.json');

const cors = require('cors')

const app = express();
app.use(cors())
app.get('/movies', (req, res) => {
  res.send(datas.movies);
});
app.listen(3300, () => {
  console.log('Server is running on port 3300');
});
