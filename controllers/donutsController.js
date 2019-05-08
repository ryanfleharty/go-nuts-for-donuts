const express = require('express');
const router = express.Router();
const Donut = require('../models/Donut');

router.get('/', (req, res)=>{
    Donut.find({}, (err, donuts) => {
        if(err){
            console.log(err);
            res.send(err);
        }else{
            res.json(donuts);
        }
    })
})

router.get('/:id', (req, res)=>{
    Donut.findById(req.params.id, (err, foundDonut)=>{
        if(err){
            console.log(err);
            res.send(err);
        }else{
            res.json(foundDonut);
        }
    })
})

router.post('/', (req, res)=>{
    console.log("MAKING THE DONUTS")
    console.log(req.body);
    Donut.create(req.body, (err, newDonut)=>{
        if(err){
            console.log(err);
            res.send(err);
        }else{
            res.json(newDonut);
        }
    })
})

router.put('/:id', (req, res)=>{
    if(req.body.tasty === "on"){
        req.body.tasty = true;
    }else{
        req.body.tasty = false
    }
    Donut.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, newDonut)=>{
        if(err){
            console.log(err);
        }
        console.log(newDonut);
        res.json(newDonut);
    })
})

router.delete('/:id', (req, res)=>{
    Donut.findByIdAndDelete(req.params.id, (err, deadDonut)=>{
        console.log(deadDonut);
        res.json(deadDonut);
    });
})

module.exports = router;