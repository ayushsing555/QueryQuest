import React, {useEffect, useState} from 'react';
import BillingDetail from '../Component/BillingDetail';

const Pricing = () => {
  const [QueryTicket, setQueryTicket] = useState("monthly");
  const [TicketRaised, setTicketRaised] = useState(true);
  const [month, SetMonth] = useState(3);
  let dt = new Date();
  dt.setMonth((parseInt(dt.getMonth()) + parseInt(month)));
  let oneYr = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
  oneYr = oneYr.toDateString();
  // const []
  const style = {
    backgroundColor: "#742a2a",
    color: "#ffffff"
  };
  const style1 = {
    backgroundColor: "white",
    color: "black"
  };
  const backToPrice = () =>{
    setTicketRaised(true);
  }
  const [button1, setButton1] = useState(style);
  const [button2, setButton2] = useState(style1);
  const handleChange = (e) => {
    console.log(e.target.value);
    let Ticket = e.target.value;
    if (Ticket === "monthly") {
      setButton1(style);
      setButton2(style1);
      setQueryTicket(Ticket);

    }
    if (Ticket === "year") {
      setButton1(style1);
      setButton2(style);
      setQueryTicket(Ticket);
    }
  };
  return (
    <>
      {
        TicketRaised ? <>
          <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-5 mx-auto">
              <div class="flex flex-col text-center w-full mb-5">
                <h1 class=" text-3xl font-bold title-font  text-gray-900">Plans and Pricing</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-red-800 font-bold font-serif mb-5">Unlock value with our flexible pricing.</p>
                <div onClick={handleChange} class="flex font-bold mx-auto border-2  border-red-900 rounded-lg overflow-hidden mt-4">
                  <button style={button1} value="monthly" id="monthly" class="py-1 px-4  focus:outline-none">Monthly</button>
                  <button style={button2} value="year" id="year" class="py-1 px-4 focus:outline-none">Annually</button>
                </div>
              </div>
              <div class="flex flex-wrap -m-4">
                <div class="p-4 xl:w-1/2 md:w-1/2 w-full">
                  <div class="h-full p-6 rounded-lg border-2 border-gray-300 hover:border-4 hover:bg-gray-50 flex flex-col relative overflow-hidden">
                  <h2 class="text-sm tracking-widest title-font mb-3  text-gray-700 font-bold">BASIC</h2>
                    <p class="text-lg font-normal text-gray-700 -mt-3 font-serif" >For experiencing all the features of our platform.</p>
                    <h1 class="text-5xl text-gray-900 pb-4 mb-4 mt-5 border-b border-gray-200 font-serif leading-none">Free</h1>
                    <p class="flex items-center text-gray-600 mb-2">
                      <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span> Upload Only 5 Queries Per Month
                    </p>
                    <p class="flex items-center text-gray-600 mb-2">
                      <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>Not Getting Email for Answer
                    </p>
                    <p class="flex items-center text-gray-600 mb-6">
                      <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>Not able to see analytics
                    </p>
                    <button  class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Your are already on Free Plan
                     
                    </button>
                    <p class="text-xs text-gray-600 mt-3">Unleash your potential with our free plan.</p>
                  </div>
                </div>
                <div class="p-4 xl:w-1/2 md:w-1/2 w-full">
                  <div class="h-full p-6 rounded-lg border-2 border-red-900 hover:border-4  flex flex-col relative overflow-hidden">
                    <span class="bg-red-900 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                    <h2 class="text-sm tracking-widest title-font mb-3  text-red-900 font-bold">PRO 
                      <svg viewBox="0 0 16 16" fill="currentColor" height="1em"  className='ml-8 -mt-4 text-yellow-600'>
                        <path fillRule="evenodd" d="M8 16A8 8 0 108 0a8 8 0 000 16zm.252-12.932a.478.478 0 00-.682.195l-1.2 2.432-2.684.39a.478.478 0 00-.266.816l1.944 1.892-.46 2.674a.478.478 0 00.694.504L8 10.709l2.4 1.261a.478.478 0 00.694-.504l-.458-2.673L12.578 6.9a.479.479 0 00-.265-.815l-2.685-.39-1.2-2.432a.478.478 0 00-.176-.195z"/>
                      </svg>
                    </h2>
                    <p class="text-lg font-normal text-gray-700 -mt-3 font-serif" >For experiencing all the features of our platform.</p>
                    <p class="text-md ml-1 mt-4 font-normal text-gray-700 ">Starting at</p>
                    <h1 class="text-5xl text-gray-900 leading-none flex items-center">
                    <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06z" />
                    </svg>
                      <span className='font-bold -ml-2 -mt-2'>{
                        QueryTicket === "monthly" ? "10" : "7"
                      }</span>
                    </h1>
                    <p class="text-md ml-1 font-normal text-gray-700 -mt-1">per month</p>
                    <p className='border-b border-gray-200 pb-4 mb-3 '></p>
                    <div className='flex flex-row'>
                      <div>
                        <p>Everything in Free, plus: </p>
                        <p class="flex items-center mt-2 text-gray-600 mb-2">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-900 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>Unlimited Queries posted
                        </p>
                        <p class="flex items-center text-gray-600 mb-2">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-900 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>Getting Email for answering <br/> on your queries
                        </p>
                        <p class="flex items-center text-gray-600 mb-2">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-900 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>Able to see analytics of each and every query
                        </p>
                        <p class="flex items-center text-gray-600 mb-4">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-900 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>Have a eye on each viewer
                        </p>
                      </div>
                      {
                        QueryTicket === "monthly" ? <div className='text-end'>
                          <table className='ml-2'>
                            <tr className=''>
                              <th>
                                <b className='text-black px-5 ml-2 text-lg font-serif font-bold'>Month</b>
                              </th>
                              <th>
                                <b className='text-black px-3 text-lg font-serif font-bold'>Total</b>
                              </th>
                            </tr>
                            <tr className=''>
                              <td className='px-4'>
                                <input value={month} onChange={(e) => SetMonth(e.target.value)} className='border-2 border-red-900 m-3 w-16 rounded-lg px-2 hover:border-4 text-black' placeholder='Eg. 3' />
                              </td>
                              <td className='px-4 font-bold text-black'>
                                {month * 10}
                              </td>
                            </tr>
                            <b>
                            <br/><br/>
                              <p className='text-sm ml-7 px-1 -mr-14'><span className='text-red-900 text-lg'>Valid Upto </span>{`${dt.toDateString()}`}</p>
                            </b>
                          </table>
                        </div> : <table className='ml-2'>
                          <tr >
                            <th>
                              <b className='text-black px-5 ml-2 text-lg font-serif font-bold'>Total</b>
                            </th>
                          </tr>
                          <tr >
                            <td >
                              <b>
                              <span className='ml-20 -mt-5 text-black text-lg font-serif'>Rs. 84/-</span>
                              
                              </b>
                            </td>
                            </tr>
                            <tr>
                            <td>
                              <b >
                              <br/>
                              <p className='text-sm ml-7 px-1 -mr-14'><span className='text-red-900 text-lg'>Valid Upto </span>{`${oneYr}`}</p>
                              </b>
                            </td>
                          </tr>
                        </table>
                      }
                    </div>
                    <hr />
                    <button onClick={() => setTicketRaised(false)} class="flex items-center mt-auto text-white bg-red-900 font-semibold hover:bg-green-800 hover:font-semibold border-0 py-2 px-4 w-full focus:outline-none  rounded">Buy Now
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                    <p class="text-xs text-gray-600 mt-3">Unleash the full power of our platform with our premium plan.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </> : <><BillingDetail QueryTicket={QueryTicket} validity={month} setTicketRaised={backToPrice} /></>
      }
    </>
  );
};

export default Pricing;