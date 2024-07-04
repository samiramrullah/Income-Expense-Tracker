const incomeSchema=require('../../models/income');
const userSchema=require('../../models/user')
exports.addincome=async(req,res,next)=>{
    try {
        const userId=req.userData.userId;
        const {name,amount,category,date,description}=req.body;
        const newIncome=new incomeSchema({
            userId:userId,
            name:name,
            amount:amount,
            category:category,
            date:date,
        })
        if(description) newIncome.description=description;
        const savedIncome=await newIncome.save();
        res.status(201).json({
            status:true,
            message:"Income Successfully Added",
            savedIncome,
        })
    } catch (error) {
        res.status(401).json({status:false,message:"Failed to Add"});
    }
}
exports.getIncomeById = async (req, res, next) => {
    try {
        const userId = req.userData.userId;
        const isValidUser = await userSchema.findOne({ _id: userId });
        if (!isValidUser) return res.status(400).json({ status: false, message: "User Doesn't Exist" });
        const { incomeId } = req.params;
        const income = await incomeSchema.findOne({ _id: incomeId, userId: userId });
        if (!income) return res.status(400).json({ status: false, message: "Income Not Found" });
        res.status(200).json({
            status: true,
            message: "Income Retrieved Successfully",
            income
        });
    } catch (error) {
        res.status(401).json({
            status: false,
            message: "Failed to Retrieve Income"
        });
    }
};

exports.updateIncome = async (req, res, next) => {
    try {
        const userId = req.userData.userId;
        const isValidUser = await userSchema.findOne({ _id: userId });
        if (!isValidUser) return res.status(400).json({ status: false, message: "User Doesn't Exist" });
        const {_id, name, amount, category, date, description } = req.body;
        const updatedIncome = await incomeSchema.findOneAndUpdate(
            { _id: _id, userId: userId },
            { name, amount, category, date, description },
            { new: true }
        );
        if (!updatedIncome) return res.status(400).json({ status: false, message: "Income Not Found" });
        res.status(200).json({
            status: true,
            message: "Income Successfully Updated",
            updatedIncome
        });
    } catch (error) {
        res.status(401).json({
            status: false,
            message: "Failed to Update"
        });
    }
};

exports.deleteIncome = async (req, res, next) => {
    try {
        const userId = req.userData.userId;
        const isValidUser = await userSchema.findOne({ _id: userId });
       
        if (!isValidUser) return res.status(400).json({ status: false, message: "User Doesn't Exist" });
        const { id } = req.params;
        const deletedIncome = await incomeSchema.findOneAndDelete({ _id: id, userId: userId });
        if (!deletedIncome) return res.status(400).json({ status: false, message: "Expense Not Found" });

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
exports.getallincome=async(req,res,next)=>{
        try {
            const userId=req.userData.userId;
            const income=await incomeSchema.find({userId:userId})
            res.status(200).json({
                status:true,
                message:"Successfully Fetched",
                income
            })
        } catch (error) {
            res.status(401).json({status:false,message:"Failed to fetch"})
        }
}