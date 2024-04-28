const expensesScheme=require('../../models/expenses');

exports.addexpenses=async(req,res,next)=>{
    try {
        const userId=req.userData.userId;
        const {name,amount,category,date,description}=req.body;
        const newExpenses=new expensesScheme({
            userId:userId,
            name:name,
            amount:amount,
            category:category,
            date:date
        })
        if(description) newExpenses.description=description;
        const savedExpenses=newExpenses.save();
        res.status(201).json({
            status:true,
            message:"Expenses Successfully Added",
            savedExpenses
        })
    } catch (error) {
        res.status(401).json({
            status:false,
            message:"Failed to Add"
        })
    }
}