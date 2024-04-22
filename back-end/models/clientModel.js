const mongoose = require('mongoose');


const clientSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: {type: String, required: true}
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;