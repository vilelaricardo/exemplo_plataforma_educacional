const Client = require('../models/clientModel');

async function createClient(clientData){
  console.log(clientData);  
  try {
        const newClient = new Client(clientData);
        
        await newClient.save();
        return newClient;
      } catch (error) {
        throw new Error('Erro ao criar cliente.');
      }
}

module.exports = {createClient};