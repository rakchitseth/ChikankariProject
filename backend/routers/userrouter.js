const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const model = require('../models/usermodel');

const router = express.Router();
router.post('/add', (req, res) => {
    console.log(req.body)
    new model(req.body).save()

        .then((result) => {
            console.log(result);
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.json(err);
        });
});

router.get('/getall', (req, res) => {
    model.find()
        .then((result) => {
            res.json(result);

        }).catch((err) => {
            console.log(err)
            res.json(err)
        });
});
router.get('/getbyid/:id', (req, res) => {
    model.findById(req.params.id)
        .then((result) => {
            res.json(result);

        }).catch((err) => {
            console.log(err)
            res.json(err)
        });
});

router.put('/update/:id', (req, res) => {
    model.findByIdAndUpdate(req.params._id, req.body, { new: true })
        .then((result) => {
            res.json(result);

        }).catch((err) => {
            console.log(err);
            res.json(err)
        });
});

router.delete('/delete/:id', (req, res) => {

    model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json(result);

        }).catch((err) => {
            console.log(err);
            res.json(err)
        });
});

router.post("/authenticate", (req, res) => {
    console.log(req.body);
    model.find(req.body)
    .then((result) => {
        if(result){
            const { _id, name, email } = result;
            const payload = {_id, name, email};
            jwt.sign(
                payload,
                process.env.JWT_SECRET,
                {expiry: '2 days'},
                (err, token) => {
                    if(err){
                        res.status(500).json({message : 'error creating token'})
                    }else{
                        res.status(200).json({token, role: result.role})
                    }
                }
            )
        }else{
            res.status(401).json({message : 'Invalid Credentials'})
        }
    }).catch((err) => {
        res.status(500).json(err);
    });
});

module.exports = router;
//getall
//getbyid
// update
//delete
//product router

