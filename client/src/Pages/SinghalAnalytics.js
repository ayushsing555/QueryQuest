import React, { useState, useEffect } from 'react';
// import { Pie } from 'react-chartjs-2';
import { useParams, NavLink } from 'react-router-dom';

// import { Chart, ArcElement } from 'chart.js';
// Chart.register(ArcElement);
const SinghalAnalytics = () => {
//   const data = {
//     labels: [
//       'Red',
//       'Blue',
//       'Yellow'

//     ],
//     datasets: [{
//       label: 'My First Dataset',
//       data: [300, 50, 80],
//       backgroundColor: [
//         'rgb(255, 99, 132)',
//         'rgb(54, 162, 235)',
//         'rgb(123,12,34)'
//       ],
//       hoverOffset: 2
//     }]
//   };
//   // </block:setup>

//   // <block:config:0>
//   const config = {
//     type: 'pie',
//     data: data,
//   };

  const [allQuery, setAllQuery] = useState([]);

  let UserDetail = localStorage.getItem("Details");
  if (UserDetail === null) {
    navigator("/signin");
  }
  UserDetail = JSON.parse(UserDetail);
  const getSingleData = async () => {
    const res = await fetch(`http://localhost:8000/user/Queries/${UserDetail.id}`);
    const data = await res.json();
    setAllQuery(data);
  };

  useEffect(() => {
    getSingleData();
  }, [1]);

  return (
    <>
      {/* <div className='block m-auto' style={{ width: '400px', height: '500px' }}>
        <Pie data={data} options={config} />
      </div> */}
      <div class="relative overflow-x-auto shadow-md h-96 overflow-auto  m-5 sm:rounded-lg">
        <table class="w-full  text-center text-black text-xl dark:text-gray-400">
          <thead class="text-xs text-white  bg-gray-50 dark:bg-red-900 dark:text-gray-400">
            <tr className='text-xl'>
              <th scope="col" class="px-5 py-3">
                Query
              </th>
              <th scope="col" class="px-4 py-3">
                Time Spend
              </th>
              <th scope="col" class="px-6 py-3">
                Total Likes
              </th>
              <th scope="col" class="px-6 py-3">
                Total Solutions
              </th>
              <th scope="col" class="px-6 py-3">
                Total viewers
              </th>
            </tr>
          </thead>
          <tbody>
            {
              allQuery.map((ele) => {
                return (
                  <>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td scope="row" class=" px-6 py-4">
                        {ele.Question}
                      </td>
                      <td class="px-6 py-4">
                        {ele.totalTimeSpend}
                      </td>
                      <td class="px-6 py-4">
                        {ele.likes}
                      </td>
                      <td class="px-6 py-4">
                       <span className='ml-10'> {ele.answers.length}</span>
                        <button class="bg-green-900 hover:bg-green-800 text-white   rounded-lg p-2 w-48 mb-3 ml-24 mt-1"><NavLink to={`/query/${ele._id}`} class="text-white inline-flex items-center ml-2px">Go to Query Analytics 
                            <svg class="w-4 h-4 ml-20" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                            </NavLink>
                        </button>
                      </td>
                      <td class="px-6 py-4">
                        {ele.views.length}
                        <button class="bg-green-900 hover:bg-green-800 text-white font-bold  rounded-lg p-2 w-48 mb-3 ml-24 mt-1"><NavLink to={`queryAnalytic`} class="text-white inline-flex items-center ml-2px">Go to Query Analytics 
                            <svg class="w-4 h-4 ml-20" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                            </NavLink>
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )}

export default SinghalAnalytics;