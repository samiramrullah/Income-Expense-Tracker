const express=require('express');
const router=express.Router();
const checkAuth=require('../../../middleware/check-auth')

const incomeController=require('../../controllers/income')
router.post('/addincome',checkAuth,incomeController.addincome);
router.get('/getallincome',checkAuth,incomeController.getallincome);
router.put('/updateincome',checkAuth,incomeController.updateIncome);
router.get('/getincomebyid/:incomeId',checkAuth,incomeController.getIncomeById)
router.delete('/deleteincome/:id',checkAuth,incomeController.deleteIncome);



module.exports=router;