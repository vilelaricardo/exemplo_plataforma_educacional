const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = 3000;


mongoose.connect('mongodb+srv://ufcaricardo:zV88kQ0ywlBjSBiQ@aulaweb.sodqlon.mongodb.net/?retryWrites=true&w=majority&appName=AulaWeb');
  


app.use(express.json());
app.use(cors());


app.use('/api', routes);


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
