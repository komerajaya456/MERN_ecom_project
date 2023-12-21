const [mongoconnect] = require("../config/mongooseconnect")

const Home=(req,res)=>{
    mongoconnect()
    res.send('cameconggyy');
}

const Login=(req,res)=>{
    console.log(req.body)
}


module.exports=[Home,Login]