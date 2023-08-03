import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Query from '../Component/Query';
import ClipLoader from "react-spinners/ClipLoader";

const MyQuery = () => {
  const [AllQuery, setAllQuery] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigator = useNavigate();

  let UserDetail = localStorage.getItem("Details");
  if (UserDetail === null) {
    navigator("/signin");
  }
  UserDetail = JSON.parse(UserDetail);
  // console.log(UserDetail.id)
  const getData = async () => {
    const res = await fetch(`http://localhost:8000/user/Queries/${UserDetail.id}`);
    const data = await res.json();
    setAllQuery(data);
    
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
    <>{
        loading ? <div className="flex justify-center p-5 mt-10 mb-10 h-full">
          <ClipLoader className='align-self-center' color="hsla(10, 62%, 30%, 0.99)"
            size={150} loading={loading} aria-label="Loading Spinner"
            data-testid="loader" /> </div>
          : <section class="text-black body-font">
            <button className='flex items-center mt-2 ml-auto -mr-74 text-white  bg-red-900 font-semibold hover:bg-green-800 hover:font-semibold border-0 py-2 px-4 focus:outline-none rounded'><NavLink to={`/myAnalytic/${UserDetail.id}`} className="text-white"> Go to Analytics Dashboard </NavLink></button>
            <div class="container ml-2 py-24 w-full">
              <div class="flex flex-wrap w-full">
                {AllQuery.length !== null ?
                  AllQuery.map((ele) => {
                    return (
                    <>
                    <div className='flex-col lg:w-1/3 '>
                      <Query elem={ele} />
  
                        <button class="bg-green-900 hover:bg-green-800 text-white font-bold  rounded-lg p-2 w-48 mb-3 ml-24 mt-1"><NavLink to={`queryAnalytic`} class="text-white inline-flex items-center ml-2px">Go to Query Analytics 
                            <svg class="w-4 h-4 ml-20" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                            </NavLink>
                        </button>
                    
                    </div>
                    </>
                      
                    )
                  })
                  : <div class=" align-self-center hover:bg-red-800  bg-red-900 shadow-lg text-black body-font rounded-lg w-full">
                    <div class="h-full bg-red-100 bg-opacity-75 px-8 pt-10 pb-20 m-2 rounded-lg overflow-hidden text-center relative">
                      <h1 class="title-font text-3xl font-bold text-black-900 mb-3 -mt-3">No Query Posted Yet...</h1>
                    </div>
                  </div>
                }


              </div>
            </div>
          </section>
      }

    </>
  );
};

export default MyQuery;