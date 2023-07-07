import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Query from '../Component/Query';
import ClipLoader from "react-spinners/ClipLoader";

const AllQuery = () => {
  const [AllQuery, setAllQuery] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigator = useNavigate();
  const getUserDetail = () => {
    const UserDetail = localStorage.getItem("Details");
    if (UserDetail === null) {
      window.alert("Please sign in");
      navigator("/signin");
    }
  };
  let likes = 0;

  getUserDetail();
  const getData = async () => {
    const res = await fetch("http://localhost:8000/data");
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
    }, 500)
  }, [])

  return (
    <>
      {
        loading ? <div className="flex justify-center p-5 mt-10 mb-10 h-full">
          <ClipLoader className='align-self-center' color="hsla(10, 62%, 30%, 0.99)"
            size={150} loading={loading} aria-label="Loading Spinner"
            data-testid="loader"/> </div>
          : <section class="text-black body-font">
            <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
              <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="bordered-checkbox-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
            </div>
            <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
              <input checked id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="bordered-checkbox-2" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
            </div>
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-4">
                {AllQuery.length !== null ?
                  AllQuery.map((ele) => {
                    return (
                      <Query elem={ele} />
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

export default AllQuery;