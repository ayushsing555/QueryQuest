import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Query from '../Component/Query';

const MyQuery = () => {
  const [AllQuery, setAllQuery] = useState([]);
  const navigator = useNavigate();

  let UserDetail = localStorage.getItem("Details");
  if (UserDetail === null) {
    window.alert("please sign in");
    navigator("/signin");
  }
  UserDetail = JSON.parse(UserDetail);

  const getData = async () => {
    const res = await fetch(`http://localhost:8000/user/Queries/${UserDetail.id}`);
    const data = await res.json();
    setAllQuery(data);
  };
  useEffect(() => {
    getData();
  }, [1]);
  return (
    <>
      <section class="text-black body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {
              AllQuery.map((ele) => {
                console.log(ele)
                return (
                    <Query elem={ele} />
                    )
              })
            }

          </div>
        </div>
      </section>
    </>
  );
};

export default MyQuery;