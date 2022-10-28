'use strict'

const firebase = require('../connection');

exports.post =  async (req, res, next) => {
    const body = req.body;
    if (body.name){
        const data = {
            name: body.name,
            delete: false
        }
        await firebase.collection('products').add(data);
        res.status(201).send({msg: "Produto adicionado com sucesso !"});
    }
    else {
        res.status(400).send({msg: "Falha ao cadastrar o produto !"});
    }
            
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({ id: id, item: req.body });
};


exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};
