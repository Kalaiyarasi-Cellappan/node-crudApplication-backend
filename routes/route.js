var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const Student = require('../model/student');



router.get('/',(req,res)=>{
    Student.find()
    .exec()
    .then(result=>{
        console.log(result);
        res.status(200).send(result);
    })
    .catch(err=>{
        res.status(500).send(err);
    })
})
router.post('/students',(req,res)=>{
    console.log(req.body.firstname);
    console.log(req.body.lastname);
    console.log(req.body.place);
    const student = new  Student({
        _id : new mongoose.Types.ObjectId,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        place: req.body.place
    });
    student.save()
    .then(result=>{
        console.log(result);
        res.status(200).json({msg:"succesfully submitted"});
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error occured"});
    })
})
router.delete('/student/:id',(req,res)=>{
    const id = req.params.id;
    Student.remove({_id:id},(err,result)=>{
        if(err)
        {
            console.log(err);
            res.status(500).send('error occured');
        }
        else{
            res.status(200).json({msg:"successfully deleted"});
        }
    })
})
router.put('/student/:id',(req,res)=>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const place = req.body.place;
    const id = req.params.id;
    Student.update({_id:id},{$set:{firstname:firstname,lastname:lastname,place:place}})
    .then(result=>{
        console.log(result);
        res.status(200).json({msg:"successfully updated"});
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred"});
    })
})

module.exports = router;