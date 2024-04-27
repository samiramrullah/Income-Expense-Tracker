const express=require('express');
const router=express.Router();
const checkAuth=require('../../../middleware/check-auth')
const expensesController=require('../../controllers/expenses')

router.post('/addexpenses',checkAuth,expensesController.addexpenses)

module.exports=router;