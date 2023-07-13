import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ClipLoader from "react-spinners/ClipLoader";

const UserSessions = () => {
    const { id } = useParams();
    const { user } = useParams();

    const [sessions, setSessions] = useState([]);
    const [usrSession, setUerSession] = useState([]);
    const [loading, setLoading] = useState(false);
    var sno = 1;
    const getData = async () => {
        const res = await fetch(`http://localhost:8000/data/${id}`);
        const data = await res.json();
        setSessions(data.views)
        sessions.map((ele)=>{
            if (ele.userName === user) {
                setUerSession(ele.Session)
            }
          })
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

    return (
        <>
        {
            loading ? <div className="flex justify-center p-5 mt-10 mb-10 h-full">
          <ClipLoader className='align-self-center' color="hsla(10, 62%, 30%, 0.99)"
            size={150} loading={loading} aria-label="Loading Spinner"
            data-testid="loader" /> </div>
          :<> <div class="p-2 align-self-center hover:bg-red-800  bg-red-900 shadow-lg text-black body-font rounded-lg w-1/2 mt-5 ml-80">
                <div class="h-full bg-red-100 bg-opacity-75 px-8 pt-10 pb-10  m-2 rounded-lg overflow-hidden text-center relative">
                    <h1 class="title-font text-3xl font-bold text-black-900 mb-3 ">{user}</h1>
                </div>
            </div>
            { usrSession.length != null ?
                <div class="relative overflow-x-auto shadow-md h-96 overflow-auto  m-5 sm:rounded-lg">
                <table class="w-full  text-center text-black text-xl dark:text-gray-400">
                    <thead class="text-xs text-white  bg-gray-50 dark:bg-red-900 dark:text-gray-400">
                        <tr className='text-xl'>
                            <th scope="col" class="px-6 py-3">
                                S.No.
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Time spend
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Started Time
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        usrSession.map((ele)=>{
                            {/* console.log(ele) */}
                        return(
                            <>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td scope="row" class=" px-6 py-4">
                                {sno++}
                            </td>
                            <td class="px-6 py-4">
                                {ele.SpendTimes}
                            </td>
                            <td class="px-6 py-4">
                                {ele.startsAt}
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

export default UserSessions;