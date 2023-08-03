'use strict';
const path = require('node:path')
const express = require('express');
const app = express();

app.use(express.static('./'))

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './index.html'))
});

app.all('*', (req, res) => {
  res.status(404).send('resourse not found');
});

app.listen(5000, () => {
  console.log('server is listening at port 5000...');
})