import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import BarGraph from "../../../components/Graph/BarGraph";

const AllExpenses = () => {
  const [allExpenses, setAllExpenses] = useState();
  const [isShowGraph, setIsShowGraph] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}expenses/getallexpenses`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        toast.success(res.data.message, { position: "top-right" });
        setAllExpenses(res.data.expenses);
      })
      .catch((err) => {
        toast.error(err.data.message, { position: "top-right" });
      });
  }, []);
  return (
    <>
      <div class="flex justify-end mt-6">
        <button
          onClick={() => setIsShowGraph(!isShowGraph)}
          class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          {isShowGraph ? "Graph" : "Tabular"}
        </button>
      </div>
      {isShowGraph ? (
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
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {allExpenses?.map((expense) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {expense?.name}
                  </th>
                  <td class="px-6 py-4">{expense?.category}</td>
                  <td class="px-6 py-4">{expense?.amount}</td>
                  <Link to={`/dashbaord/editexpense/${expense?._id}`}>
                  <td class="px-6 py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                  </td>
                  </Link>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <BarGraph data={allExpenses} />
      )}
      <ToastContainer />
    </>
  );
};

export default AllExpenses;
