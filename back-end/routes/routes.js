const express = require('express');
const router = express.Router();
const {createClient} = require('../services/clientService');

router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.post('/cliente',async (req, res)=>{
    const userData = req.body;
    try{
        const newClient = await createClient(userData);
        res.status(201).send(newClient);
    }catch(error){
        res.status(500).send('Erro ao criar o cliente')
    }
})

module.exports = router;