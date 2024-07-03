import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditExpenses = () => {
    const [expensesData, setExpensesData] = useState({});
    const {expenseId}=useParams()
    useEffect(()=>{
      axios.get(`${process.env.REACT_APP_API_KEY}expenses/getexpensebyid/${expenseId}`,{headers:{
        Authorization:'Bearer '+localStorage.getItem('token')
      }})
      .then((res)=>{
        setExpensesData(res?.data?.expense)
      })
      .catch(err=>console.log(err))
    },[expenseId])
    const onChangeHandler = (e) => {
      const { name, value } = e.target;
      setExpensesData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  const onSubmithandler=(e)=>{
    e.preventDefault()
      axios.put(`${process.env.REACT_APP_API_KEY}expenses/updateexpenses`, expensesData,{headers:{
        'Authorization':'Bearer '+localStorage.getItem('token')
      }})
      .then((res) => {
        toast.success(res.data.message, { position: "top-right" });
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message, { position: "top-right" });
      });
  }
  return (
    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
      <h2 class="text-lg font-semibold text-gray-700 capitalize">
        Edit Expense
      </h2>
      <form onSubmit={onSubmithandler}>
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700 " for="username">
              Name
            </label>
            <input
              required
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              type="text"
              name="name"
              value={expensesData?.name}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label class="text-gray-700 " for="username">
              Amount
            </label>
            <input
              required
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              type="number"
              name="amount"
              value={expensesData?.amount}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label class="text-gray-700 " for="username">
              Category
            </label>
            <input
              required
              value={expensesData?.category}
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              type="text"
              name="category"
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label class="text-gray-700 " for="username">
              Date
            </label>
            <input
              required
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              type="date"
              name="date"
              value={expensesData?.date}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label class="text-gray-700 " for="username">
              Description
            </label>
            <textarea
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              type="text"
              name="description"
              value={expensesData?.description}
              rows={4}
              cols={50}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div class="flex justify-end mt-6">
          <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Update
          </button>
        </div>
      </form>
      <ToastContainer/>
    </section>
  );
};

export default EditExpenses;
