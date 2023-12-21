const mongoose = require('mongoose')
const [dbname,dbcollection,usermodel]=require('../models/mongoosemodel')

const url = `mongodb+srv://komerajaya7259:eihlGz2XfQOM3FoJ@secondcluster.vzmnsfg.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{console.log("conrtc")});


async function mongoconnect(){
   await usermodel.insertMany({name:"komeerarr2",gender:"F"})
   console.log("connected")
}

module.exports=[mongoconnect];