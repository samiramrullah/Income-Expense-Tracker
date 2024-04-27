const express=require('express');
const router=express.Router();
const checkAuth=require('../../../middleware/check-auth')

const incomeController=require('../../controllers/income')
router.post('/addincome',checkAuth,incomeController.addincome);


module.exports=router;