import React,{useState, useEffect} from "react";
import { useParams } from "react-router";

const UserSessions = ()=>{
    const {id} = useParams();
    console.log(id)
    // const [query, setQuery] = useState([]);
    // const [viewers, setViewers] = useState([]);
    // const [sessions, setSessions] = useState([]);

    // const getData = async () => {
    //     const res = await fetch(`http://localhost:8000/data/${id}`);
    //     const data = await res.json();
    //     // console.log(data.views)
    //     setQuery(data);
    //     setViewers(data.views)
    //   };
    //   useEffect(() => {
    //     getData();
    //   }, [1]);
    return(
        <>
            <div class=" align-self-center hover:bg-red-800  bg-red-900 shadow-lg text-black body-font rounded-lg w-full">
                <div class="h-full bg-red-100 bg-opacity-75 px-8 pt-10 pb-20 m-2 rounded-lg overflow-hidden text-center relative">
                    <h1 class="title-font text-3xl font-bold text-black-900 mb-3 -mt-3">hih</h1>
                </div>
            </div>
            <div class="relative overflow-x-auto shadow-md h-96 overflow-auto  m-5 sm:rounded-lg">
                <table class="w-full  text-center text-black text-xl dark:text-gray-400">
                    <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-red-900 dark:text-gray-400">
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
                        {/* {viewers.map((ele)=>{
                            return(
                                <> */}
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td scope="row" class=" px-6 py-4">
                                {/* {ele.userName} */}
                            </td>
                            <td class="px-6 py-4">
                                {/* {ele.totalTimeSpend} */}
                            </td>
                            <td class="px-6 py-4">
                                <button className="mt-2 ml-10 bg-red-900 text-white rounded-lg px-10 py-2 ">Go to Sessions</button>
                            </td>
                            <td class="px-6 py-4">
                            <button className="mt-2 ml-10 bg-red-900 text-white rounded-lg px-10 py-2 ">Visit User</button>
                            </td>
                            {/* <td class="px-6 py-4 text-right">
                                <a href="a" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Solutions</a>
                            </td> */}
                        </tr>
                                {/* </>
                            )
                        })} */}
                        
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UserSessions;