const express = require('express');

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

router.post('/authenticate', (req, res) => {
    model.findOne(req.body)
        .then((result) => {
            if (result) res.json(result);
            else res.status(401).json({ message: 'Invalid credentials' })

        }
        ).catch((err) => {
            console.log(err);
            res.json(err);
        });
});
module.exports = router;
//getall
//getbyid
// update
//delete
//product router

