import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';

const AllQuery = () => {
  const [AllQuery, setAllQuery] = useState([]);
  const navigator = useNavigate();
  const getUserDetail = () => {
    const UserDetail = localStorage.getItem("Details");
    if (UserDetail === null) {
      window.alert("Please sign in");
      navigator("/signin");
    }
  };
  getUserDetail();
  const getData = async () => {
    const res = await fetch("http://localhost:8000/data");
    const data = await res.json();
    setAllQuery(data);
    console.log(AllQuery);
  };
  useEffect(() => {
    getData();
  }, [1]);
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {
              AllQuery.map((elem) => {
                const date = new Date(elem.postedOn);
                const time = date.getHours()+": "+date.getMinutes();

                return (
                  <>
                    <div class="p-3    lg:w-1/2 hover:bg-red-900  bg-red-300 shadow-lg ">
                      <div class="h-full bg-red-200 bg-opacity-75 px-8 pt-16 pb-24 m-2 rounded-lg overflow-hidden text-center relative">
                        <h2 class="tracking-widest text-xl title-font font-large text-red-900 mb-1">1910</h2>
                        <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{elem.Question}</h1>
                        <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoatacha leggings jianbing microdosing tousled waistcoatvacha leggings jianbing microdosing tousled waistcoat.</p>
                        <b className='text-bold'>Query posted By <NavLink style={{color: "blue"}} to={`/Users/${elem._id}`} >{elem.postedBy}</NavLink> On {time} </b>
                        <br />
                        <br />
                        <NavLink to={`/query/${elem._id}`} class="text-indigo-500 inline-flex items-center">
                          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Solutions <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </button>
                        </NavLink>
                        <div class="text-center mt-2 leading-none flex justify-center  absolute bottom-0 left-0 w-full py-4">
                          <span class="text-white mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                          </span>
                          <span class="text-white mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                              <path d="M12 21.35l-10.24-9.74c-1.46-1.39-1.46-3.65 0-5.04 1.41-1.34 3.67-1.34 5.08 0l1.16 1.1 1.16-1.1c1.41-1.34 3.67-1.34 5.08 0 1.46 1.39 1.46 3.65 0 5.04l-10.24 9.74z" />
                            </svg>1.2K
                          </span>
                          <span class="text-white inline-flex items-center leading-none text-sm">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>6
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            }

          </div>
        </div>
      </section>
    </>
  );
};

export default AllQuery;