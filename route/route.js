const express = require('express')
const mongoose = require('mongoose')
const Formdata = require('../model/model')
const router = express.Router()

router.post("/addformdata",async(req,res) =>{

    var formdata = new Formdata(req.body)
    var addData = await formdata.save()
    console.log("prod is " +formdata)
    console.log(req.body)
    res.send(req.body)
})

router.get("/getformdata",async(req,res) =>
{
    const data = await Formdata.find()
res.send(data)

}
)

module.exports = router;

