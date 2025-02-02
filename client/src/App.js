import React, { useEffect, useState } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import NewCard from './Pages/NewQuery';
import Contact from "./Pages/Contact";
import SignIn from './Pages/signIn';
import Navbar from './Component/Navbar';
import SignUp from './Pages/SignUp';
import NewQuery from './Pages/NewQuery';
import AllQuery from './Pages/AllQuery';
import MyQuery from './Pages/MyQuery';
import SingleQuery from './Pages/SingleQuery';
import Users from './Pages/Users';
import SingleUser from './Pages/SingleUser';
import Pricing from './Pages/Pricing';
import Footer from './Component/Footer';
import Profile from './Pages/Profile';
import EditProfile from './Pages/EditProfile';
import Loading from './Component/loading';
import QueryAnalytics from './Pages/QueryAnalytics';
import SinghalAnalytics from './Pages/SinghalAnalytics';
import UserSessions from './Component/UserSessions';
import Services from './Pages/Services';
import AboutUs from './Pages/AboutUs';
import NewPassword from './Pages/NewPassword'
import MyFollowers from './Pages/MyFollowers';
import MyFollowing from './Pages/MyFollowing';
function App() {
  const [loading, setLoading]= useState(false);

  useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },1000)
  },[])
  return (
    <>
      {
        loading ? <Loading loading={loading}/> : 
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewCard />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/newQuery' element={<NewQuery />} />
          <Route path='/allQuery' element={<AllQuery />} />
          <Route path='/myQuery' element={<MyQuery />} />
          <Route path='/users' element={<Users />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/user/:id' element={<SingleUser />} />
          <Route path='/query/:id' element={<SingleQuery />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/edit' element={<EditProfile />} />
          <Route path='/myAnalytic' element={<SinghalAnalytics />} />
          <Route path='/services' element={<Services/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/myAnalytic/:id' element={<SinghalAnalytics />} />
          <Route path='/queryAnalytic/:id' element={<QueryAnalytics />} />
          <Route path='/sessions/:id/:user' element={<UserSessions />} />
          <Route path='/newPassword/:token' element={<NewPassword/>}/> 
          <Route path='/myfollowers' element={<MyFollowers/>}/> 
          <Route path='/myfollowing' element={<MyFollowing/>}/> 
        </Routes>
        <Footer />
      </BrowserRouter>
      }
      
    </>
  );
}

export default App;
