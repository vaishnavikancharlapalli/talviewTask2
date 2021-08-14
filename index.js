const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const route = require('./route/route')
const app = express()
app.use(bodyParser.urlencoded({extended :false}))
app.use(bodyParser.json())

const connectionStr = `mongodb+srv://admin:admin@cluster0.znxnd.mongodb.net/edyodadb?retryWrites=true&w=majority`
const options = {
    useUnifiedTopology : true,
    useNewUrlParser : true
}

mongoose.connect(connectionStr,options)
.then(() =>
{
    console.log("we are trying connect with u the atlas cloud DB")
})
.catch((err) => console.log(err))




app.use("/form",route)



app.listen(3000,() =>
{
    console.log(" I am connecting u with the server")
})