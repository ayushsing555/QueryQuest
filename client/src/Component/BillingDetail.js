import React, {useEffect, useState} from 'react';
import {GetProfileData} from './GetProfileData';

const BillingDetail = ({QueryTicket,validity,setTicketRaised}) => {
  const [showDialog, setShowDialog] = useState(false);
  const handleClose = () => {
    setShowDialog(false);
  };
  const choosePlan = () => {
    setTicketRaised()
  }
  const [price,setPrice] = useState(0);
  useEffect(()=>{
    if(QueryTicket==="year"){
      setPrice(84);
    }
    else{
      setPrice(10*(parseInt(validity)))
    }
  },[1]);
  const setTicket = () =>{
    setShowDialog(true);
  }
  const BuyTicket = async() =>{
    const user = GetProfileData();
     let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        };

        let bodyContent = JSON.stringify({
            Price:price,
            Ticket:QueryTicket,
            Validity:validity,
            _id:user._id
        });
        let response = await fetch(`http://localhost:8000/payment`, {
            method: "post",
            body: bodyContent,
            headers: headersList
        });
        const data = await response.json();
        if (response.status === 200) {
            window.alert("Disliked");
            
        }
        else {
            window.alert(data.error);
        } 
  }
  
  return (
    <>

   
     {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <h2 className="text-xl font-bold mb-4">Dialogue Box</h2>
            
               <button className='btn bg-red-900 text-black' onClick={BuyTicket}>
                 Confirm
               </button> 
            
          </div>
        </div>
      )}
    <div>
      <section class="py-4 bg-white">
        <div class="max-w-7xl mx-auto py-1  bg-red-500">
          <article class="overflow-hidden">
            <div class="bg-white text-yellow-600 border-2  border-r-red-600 border-l-red-600 rounded-b-md">
              <div class="p-9">
                <div class="space-y-6 text-red-900">
                  {/* <img class="object-cover h-12" src="https://pbs.twimg.com/profile_images/1513243060834123776/dL8-d7zI_400x400.png" alt=''/> */}
                  <p class="text-xl font-extrabold tracking-tight uppercase font-body">
                    Community Solutions
                  </p>
                </div>
              </div>
              <div class="p-9">
                <div class="flex w-full">
                  <div class="grid grid-cols-4 gap-12">
                    <div class="text-sm font-light text-slate-500">
                      <p class=" font-normal text-xl text-slate-700">
                        Invoice Detail:
                      </p>
                      <p>Unwrapped</p>
                      <p>Fake Street 123</p>
                      <p>San Javier</p>
                      <p>CA 1234</p>
                    </div>
                    <div class="text-sm font-light text-slate-500">
                      <p class="text-lg font-normal text-slate-700">Billed To:</p>
                      <p>The Boring Company</p>
                      <p>Tesla Street 007</p>
                      <p>Frisco</p>
                      <p>CA 0000</p>
                    </div>
                    <div class="text-sm font-light text-slate-500">
                      <p class="text-lg font-normal text-slate-700">Invoice Number</p>
                      <p>000000</p>
                      <p class="mt-2 text-lg font-normal text-slate-700">
                        Date of Issue
                      </p>
                      <p>00.00.00</p>
                    </div>
                    <div class="text-sm font-light text-slate-500">
                      <p class="text-lg font-normal text-slate-700">Terms</p>
                      <p>0 Days</p>
                      <p class="mt-2 text-lg font-normal text-slate-700">Next Billing</p>
                      <p>00.00.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-9">
                <div class="flex flex-col mx-0 mt-8">
                  <table class="min-w-full divide-y divide-slate-500">
                    <thead>
                      <tr>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0">
                          Ticket
                        </th>
                        <th scope="col" class="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
                          Months
                        </th>
                        <th scope="col" class="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
                          Price/Month
                        </th>
                        <th scope="col" class="py-3.5 pl-3 pr-4 text-right text-sm font-normal text-slate-700 sm:pr-6 md:pr-0">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b border-slate-200">
                        <td class="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                          <div class="font-medium text-slate-700">Tesla Truck</div>
                          <div class="mt-0.5 text-slate-500 sm:hidden">
                            1 unit at $0.00
                          </div>
                        </td>
                        <td class="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                          48
                        </td>
                        <td class="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                          Rs 0.00
                        </td>
                        <td class="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                          Rs 0.00
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th scope="row" colspan="3" class="hidden pt-4 pl-6 pr-3 text-sm font-normal text-right text-slate-700 sm:table-cell md:pl-0">
                          Total
                        </th>
                        <td class="pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0">
                          Rs 0.00
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
                  <button className='btn btn-info ml-12 mt-1' onClick={choosePlan}>back to Price </button>
                  <button className='btn btn-info ml-12 mt-1' onClick={setTicket}>Make Payment Rs {price} </button>
              <div class="mt-2 p-9">
                <div class="border-t pt-9 border-slate-200">
                  <div class="text-sm font-light text-slate-700">
                    <p>
                      Payment terms are 14 days. Please be aware that according to the
                      Late Payment of Unwrapped Debts Act 0000, freelancers are
                      entitled to claim a 00.00 late fee upon non-payment of debts
                      after this time, at which point a new invoice will be submitted
                      with the addition of this fee. If payment of the revised invoice
                      is not received within a further 14 days, additional interest
                      will be charged to the overdue account and a statutory rate of
                      8% plus Bank of England base of 0.5%, totalling 8.5%. Parties
                      cannot contract out of the Act’s provisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
    </>
  );
};

export default BillingDetail;