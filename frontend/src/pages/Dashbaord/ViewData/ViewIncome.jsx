import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

const ViewIncome = () => {
  const [incomeData, setincomeData] = useState({});
  const {incomeId}=useParams()
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API_KEY}income/getincomebyid/${incomeId}`,{headers:{
      Authorization:'Bearer '+localStorage.getItem('token')
    }})
    .then((res)=>{
      setincomeData(res?.data?.income)
    })
    .catch(err=>console.log(err))
  },[incomeId])
  console.log(incomeData,"iiiiiiiiiiiii");
  return (
    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
      <h2 class="text-lg font-semibold text-gray-700 capitalize">
        Income Details
      </h2>
      <form>
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
              value={incomeData?.name}
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
              value={incomeData?.amount}
            />
          </div>
          <div>
            <label class="text-gray-700 " for="username">
              Category
            </label>
            <input
              required
              value={incomeData?.category}
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              type="text"
              name="category"
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
              value={new Date(incomeData.date).toISOString().split('T')[0]}
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
              value={incomeData?.description}
              rows={4}
              cols={50}
            />
          </div>
        </div>
      </form>
    </section>

  )
}

export default ViewIncome