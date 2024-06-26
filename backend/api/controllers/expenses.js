const expensesScheme=require('../../models/expenses');
const userSchema = require('../../models/user')
exports.addexpenses=async(req,res,next)=>{
    try {
        const userId=req.userData.userId;
        const isValidUser=await userSchema.findOne({_id:userId})
        if(!isValidUser) return res.status(400).json({status:false,message:"User Doesn't Exists"})
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

exports.updateExpenses = async (req, res, next) => {
    try {
        const userId = req.userData.userId;
        const isValidUser = await userSchema.findOne({ _id: userId });

        if (!isValidUser) return res.status(400).json({ status: false, message: "User Doesn't Exist" });

        const { expenseId, name, amount, category, date, description } = req.body;

        const updatedExpense = await expensesSchema.findOneAndUpdate(
            { _id: expenseId, userId: userId },
            { name, amount, category, date, description },
            { new: true }
        );

        if (!updatedExpense) return res.status(400).json({ status: false, message: "Expense Not Found" });

        res.status(200).json({
            status: true,
            message: "Expenses Successfully Updated",
            updatedExpense
        });
    } catch (error) {
        res.status(401).json({
            status: false,
            message: "Failed to Update"
        });
    }
};

exports.deleteExpenses = async (req, res, next) => {
    try {
        const userId = req.userData.userId;
        const isValidUser = await userSchema.findOne({ _id: userId });

        if (!isValidUser) return res.status(400).json({ status: false, message: "User Doesn't Exist" });

        const { expenseId } = req.body;

        const deletedExpense = await expensesSchema.findOneAndDelete({ _id: expenseId, userId: userId });

        if (!deletedExpense) return res.status(400).json({ status: false, message: "Expense Not Found" });

        res.status(200).json({
            status: true,
            message: "Expenses Successfully Deleted"
        });
    } catch (error) {
        res.status(401).json({
            status: false,
            message: "Failed to Delete"
        });
    }
};

exports.allexpenses=async(req,res,next)=>{
    try {
        const userId=req.userData.userId;
        const isValidUser=await userSchema.findOne({_id:userId})
        if(!isValidUser) return res.status(400).json({status:false,message:"User Doesn't Exists"})
        const expenses=await expensesScheme.find({userId:userId});
        res.status(200).json({
            status:true,
            message:"Successfully Fetched",
            expenses
        })
    } catch (error) {
        res.status(401).json({
            status:false,
            message:"Failed to fetch"
        })
    }
}