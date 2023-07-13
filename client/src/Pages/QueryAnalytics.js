import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const QueryAnalytics = () => {
    const {id} = useParams();

    const [query, setQuery] = useState([]);
    const [viewers, setViewers] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const getData = async () => {
        const res = await fetch(`http://localhost:8000/data/${id}`);
        const data = await res.json();
        // console.log(data.views)
        setQuery(data);
        setViewers(data.views)
      };
      useEffect(() => {
        getData();
      }, [1]);

      useEffect(() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 300)
      }, [])
    //   console.log(viewers)
    return (
        <>{
            loading ? <div className="flex justify-center p-5 mt-10 mb-10 h-full">
          <ClipLoader className='align-self-center' color="hsla(10, 62%, 30%, 0.99)"
            size={150} loading={loading} aria-label="Loading Spinner"
            data-testid="loader" /> </div>
          : <>
            <div class="p-2 align-self-center hover:bg-red-800  bg-red-900 shadow-lg text-black body-font rounded-lg w-1/2 mt-5 ml-80">
                <div class="h-full bg-red-100 bg-opacity-75 px-8 pt-10 pb-10 m-2 rounded-lg overflow-hidden text-center relative">
                    <h1 class="title-font text-3xl font-bold text-black-900 mb-3 -mt-3">{query.Question}</h1>
                </div>
            </div>
            { viewers.length != null ?
            <div class="relative overflow-x-auto shadow-md h-96 overflow-auto  m-5 sm:rounded-lg">
                <table class="w-full  text-center text-black text-xl dark:text-gray-400">
                    <thead class="text-xs text-white  bg-gray-50 dark:bg-red-900 dark:text-gray-400">
                        <tr className='text-xl'>
                            <th scope="col" class="px-6 py-3">
                                User
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Time Spend
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Sessions
                            </th>
                            <th scope="col" class="px-6 py-3">
                               Visit User 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {viewers.map((ele)=>{
                            {/* setSessions(ele.Session) */}
                            {/* console.log(ele.Session) */}
                            return(
                                <>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td scope="row" class=" px-6 py-4">
                                {ele.userName}
                            </td>
                            <td class="px-6 py-4">
                                {ele.totalTimeSpend}
                            </td>
                            <td class="px-6 py-4">
                                <button className="mt-2 ml-10 bg-red-900 text-white rounded-lg px-10 py-2 hover:bg-green-800"><NavLink to={`/sessions/${query._id}/${ele.userName}`} className="text-white">Go to Sessions</NavLink></button>
                            </td>
                            <td class="px-6 py-4">
                        <button className="mt-2 ml-10 bg-red-900 text-white rounded-lg px-10 py-2 hover:bg-green-800"><NavLink to={`/user/${ele.userName}`} className="text-white">Visit User</NavLink></button>
                            </td>
                        </tr>
                                </>
                            )
                        })}
                        
                    </tbody>
                </table>
            </div>
            : <div class=" align-self-center hover:bg-red-800  bg-red-900 shadow-lg text-black body-font rounded-lg w-full">
                    <div class="h-full bg-red-100 bg-opacity-75 px-8 pt-10 pb-20 m-2 rounded-lg overflow-hidden text-center relative">
                      <h1 class="title-font text-3xl font-bold text-black-900 mb-3 -mt-3">No Session Taken Yet...</h1>
                    </div>
                  </div>
            }
            </>
        }
        </>
    )
}

export default QueryAnalytics;