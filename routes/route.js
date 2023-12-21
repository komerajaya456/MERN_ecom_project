const express= require("express")
const router=express.Router()
const [Home,Login]=require('../controllers/routemehods')

router.get(['/'],[Home])

router.post(['/login'],[Login])

module.exports=router;