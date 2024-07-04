import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import BarGraph from "../../../components/Graph/BarGraph";
import { Link } from "react-router-dom";

const AllIncome = () => {
  const [allIncome, setAllIncome] = useState();
  const [isShowGraph,setIsShowGraph]=useState(true)

  const fetchData=()=>{
    axios
      .get(`${process.env.REACT_APP_API_KEY}income/getallincome`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        toast.success(res.data.message, { position: "top-right" });
        setAllIncome(res.data.income);
      })
      .catch((err) => {
        toast.error(err.data.message, { position: "top-right" });
      });
  }
  useEffect(() => {
    fetchData();
  }, [])
  const deleteIncome = (_id) => {
    axios.delete(`${process.env.REACT_APP_API_KEY}income/deleteincome/${_id}`, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then((res) => {
        toast.info(res?.data?.message, { position: 'top-right' })
        fetchData();
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <div class="flex justify-end mt-6">
        <button onClick={()=>setIsShowGraph(!isShowGraph)} class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
        {isShowGraph?"Graph":"Tabular"}
        </button>
      </div>
      {isShowGraph?(
        <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Amount
              </th>
              <th scope="col" class="px-6 py-3">
                  Edit
                </th>
                <th scope="col" class="px-6 py-3">
                  Delete
                </th>
            </tr>
          </thead>
          <tbody>
            {allIncome?.map((income) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {income?.name}
                </th>
                <td class="px-6 py-4">{income.category}</td>
                <td class="px-6 py-4">{income.amount}</td>
                <Link to={`/dashbaord/editincome/${income?._id}`}>
                    <td class="px-6 py-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                      </svg>
                    </td>
                  </Link>
                <td class="px-6 py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 cursor-pointer hover:text-red-900" onClick={() => deleteIncome(income?._id)}>
                      <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      ):(
        <BarGraph data={allIncome}/>
      )}
      <ToastContainer />
    </>
  );
};

export default AllIncome;
