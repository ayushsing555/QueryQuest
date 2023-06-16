import React, {useEffect, useState} from 'react';
import BillingDetail from '../Component/BillingDetail';
import {useGlobalContext} from '../context';
const Pricing = () => {
  const {state, SetState} = useGlobalContext();
  useEffect(() => {
    SetState(!state);
  }, [1]);
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
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
                <div onClick={handleChange} class="flex  mx-auto border-2  border-red-900 rounded overflow-hidden mt-6">
                  <button style={button1} value="monthly" id="monthly" class="py-1 px-4  focus:outline-none">Monthly</button>
                  <button style={button2} value="year" id="year" class="py-1 px-4 focus:outline-none">Annually</button>
                </div>
              </div>
              <div class="flex flex-wrap -m-4">
                <div class="p-4 xl:w-1/2 md:w-1/2 w-full">
                  <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                    <h2 class="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
                    <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1>
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
                    <button onClick={() => setTicketRaised(false)} class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                    <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                  </div>
                </div>
                <div class="p-4 xl:w-1/2 md:w-1/2 w-full">
                  <div class="h-full p-6 rounded-lg border-2 border-red-900 flex flex-col relative overflow-hidden">
                    <span class="bg-red-900 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                    <h2 class="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
                    <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                      <span>{
                        QueryTicket === "monthly" ? "Rs10" : "Rs7"
                      }</span>
                      <span class="text-lg ml-1 font-normal text-gray-500">
                        /mo
                      </span>
                    </h1>
                    <div className='flex flex-row'>
                      <div>
                        <p>Everything is in Free + </p>
                        <p class="flex items-center mt-1 text-gray-600 mb-2">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>Unlimited Queries posted
                        </p>
                        <p class="flex items-center text-gray-600 mb-2">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>Getting Email for answering on your queries
                        </p>
                        <p class="flex items-center text-gray-600 mb-2">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>Hexagon neutra unicorn
                        </p>
                        <p class="flex items-center text-gray-600 mb-4">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>Mixtape chillwave tumeric
                        </p>
                      </div>
                      {
                        QueryTicket === "monthly" ? <div className='text-end'>
                          <table className='ml-10'>
                            <tr className='m-2'>
                              <th>
                                <b className='m-2 text-lg'>Month</b>
                              </th>
                              <th>
                                <b className='m-2 text-lg'>Total</b>
                              </th>
                            </tr>
                            <tr className='m-2'>
                              <td>
                                <input value={month} onChange={(e) => SetMonth(e.target.value)} className='border-2  border-b-red-700 m-3 w-16' placeholder='Eg. 3' />
                              </td>
                              <td>
                                {month * 10}
                              </td>
                            </tr>
                            <b>
                              <span className='text-red-900'>Valid Upto </span><p>{`${dt.toDateString()}`}</p>
                            </b>
                          </table>
                        </div> : <table className='ml-10'>
                          <tr className='m-2'>
                            <th>
                              <b className='text-lg'>Total</b>
                            </th>
                          </tr>
                          <tr>
                            <td>
                              <b>
                                Rs 84/-
                              </b>
                            </td>
                            <td>
                              <b className='pl-2'>
                                <span className='text-red-900'>Valid Upto </span><p>{`${oneYr}`}</p>
                              </b>
                            </td>
                          </tr>
                        </table>
                      }
                    </div>
                    <hr />
                    <button onClick={() => setTicketRaised(false)} class="flex items-center mt-auto text-white bg-red-900 border-0 py-2 px-4 w-full focus:outline-none hover:bg-red-900 rounded">Button
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                    <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </> : <><BillingDetail /></>
      }
    </>
  );
};

export default Pricing;