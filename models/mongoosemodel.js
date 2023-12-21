const mongoose=require('mongoose')

const [dbname,dbcollection]=["Ecommerce","users"]

const schema=new mongoose.Schema({
    name : {type : String},

    gender:{type :String },
    
    email : {type : String},

    password :{type :String},

    cpassword :{type : String},

})



const usermodel=mongoose.model(dbcollection,schema)

module.exports=[dbname,dbcollection,usermodel]