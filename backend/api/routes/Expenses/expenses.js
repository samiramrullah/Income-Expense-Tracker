const express=require('express');
const router=express.Router();
const checkAuth=require('../../../middleware/check-auth')
const expensesController=require('../../controllers/expenses')

router.post('/addexpenses',checkAuth,expensesController.addexpenses);
router.get('/getallexpenses',checkAuth,expensesController.allexpenses);
router.put('/updateexpenses',checkAuth,expensesController.updateExpenses);
router.delete('/deleteexpense',checkAuth,expensesController.deleteExpenses);

module.exports=router;