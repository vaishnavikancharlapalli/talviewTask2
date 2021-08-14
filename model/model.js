const mongoose = require('mongoose')

const Formschema = new mongoose.Schema({
    Name : 
    {
       type  : String,
       required : [true,'Name is required']
    },
    Email :
    {
     type : String,
     required : [true,'Email is required']
    },
    Age : 
    {
      type :   Number,
       required : [false,'Optional']  
    },
    role :
    {
    type : String,
    required : [true,'role is required']
    },
    favoruite_Application :
    {
        type :String,
        required : [true,"Favoruite applcation is requred"]
    },
    like_To_see_improvement : 
    {
    type : String,
    required : [true,"mandatory Field"]
       },
    comments : 
    {
        type : String,
        required : [true,'mandotory Field']
    }
})

Formschema.path('Email').validate(async(Email) => {
    const emailcount = await mongoose.models.SurveyDatas.countDocuments({Email})
    return !emailcount
},"Email is already Existed")

Formschema.path('Age').validate(async(Age) => {
    const age = await mongoose.models.SurveyDatas.countDocuments({Age})
    if(age <= 0 && age > 70)
    {
    return false
    }
},"Age should be in the Range")

const Formdata = mongoose.model('SurveyDatas',Formschema)


module.exports = Formdata;