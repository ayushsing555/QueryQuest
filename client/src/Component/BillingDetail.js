import React, {useEffect, useState} from 'react';
import {GetProfileData} from './GetProfileData';
import DialogBox from './DialogBox';
import Modal from 'react-modal';

const BillingDetail = ({QueryTicket,validity,setTicketRaised}) => {
  const user = GetProfileData();
  const [usr, setUsrData] = useState([]);
  const [invNo, setInvNo] = useState();

  const getData = async () => {
    const res = await fetch(`http://localhost:8000/user/${user.username}`);
    const data = await res.json();
    setUsrData(data);
  };
  
  useEffect(() => {
    getData();
  }, [1]);

    let validUpTo;
    let date = new Date();
  if (QueryTicket==="monthly") {
     validUpTo= new Date(date.setMonth(date.getMonth()+parseInt(validity)));
  }else{

     validUpTo= new Date(date.setMonth(date.getMonth()+12))
  }
  
      // var a='';
        // for(let i=1; i<=7; i++){
          

         var invoiceNo;
         
         useEffect(()=>{
          invoiceNo=Math.ceil(Math.random()*100000)
          setInvNo(invoiceNo)
         },1)

  const [showDialog, setShowDialog] = useState(false);
  const [subscribedDialog, setSubscribedDialog] = useState(false);
  const handleClose = () => {
    setShowDialog(false);
    setSubscribedDialog(false);
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
    toggleModal()
  }

  const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

  const BuyTicket = async() =>{
    setShowDialog(false)
    const user = GetProfileData();
     let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        };

        let bodyContent = JSON.stringify({
          invoiceNo:invNo,
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
          setSubscribedDialog(true)       
        }
        else {
            window.alert(data.error);
        } 
  }
  
  return (
    <>
    <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
     {showDialog && (
            <DialogBox heading="Would you like to proceed with the payment?" showNotes={true} notes="Before proceeding with the payment, we want to emphasize that once the payment is confirmed, it cannot be canceled or reversed." btnData="Yes" cancelBtn={true} cancelBtnData="No" btnFunct={BuyTicket} showDialogBox={true}/>
          
      )}
      {subscribedDialog && (
          <DialogBox heading="Successfully Subscribed" showNotes={false} notes="" btnData="OK" cancelBtn={false} cancelBtnData="" btnFunct={handleClose} showDialogBox={true}/>
      )}</Modal>
    <div>
      <section class="py-4 bg-white">
        <div class="max-w-7xl mx-auto py-1  bg-red-500">
          <article class="overflow-hidden">
            <div class="bg-white text-yellow-600 border-2  border-r-red-600 border-l-red-600 rounded-b-md">
              <div class="p-9">
                <div class="space-y-6 text-red-900">
                  <p class="text-5xl font-extrabold tracking-tight uppercase font-body">
                  𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭
                  </p>
                </div>
              </div>
              <div class="p-8">
                <div class="flex w-full">
                  <div class="grid grid-cols-4 gap-12">
                    <div class="text-sm font-normal text-slate-500">
                      <p class=" text-xl text-black mb-1 font-bold">
                        Invoice Detail:
                      </p>
                      <p>QueryQuest</p>
                      <p>Ajmer</p>
                      <p>Rajasthan</p>
                      <p>India</p>
                    </div>
                    <div class="text-sm font-normal text-slate-500">
                      <p class="text-xl text-black mb-1 font-bold">Billed To:</p>
                      <p>{usr.fullName}</p>
                      <p>{usr.email}</p>
                      <p>{usr.gender}</p>
                    </div>
                    <div class="text-sm font-normal text-slate-500">
                      <p class="text-xl text-black mb-1 font-bold">Invoice Number</p>
                      <p>{invNo}
                        </p>
                      <p class="text-xl text-black mb-1 font-bold">
                        Date of Issue
                      </p>
                      <p> {new Date().getDate()}.{new Date().getMonth()+1}.{new Date().getFullYear()}</p>
                    </div>
                    <div class="text-sm font-normal text-slate-500">
                      <p class="text-xl text-black mb-1 font-bold">Terms</p>
                      <p>{validity===1 ? `${validity} month`: `${validity} months`}</p>
                      <p class="text-xl text-black mb-1 font-bold">Next Billing</p>
                      <p>{validUpTo.getDate()}.{validUpTo.getMonth()+1}.{validUpTo.getFullYear()}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-9">
                <div class="flex flex-col mx-0 mt-8">
                  <table class="min-w-full divide-y divide-slate-500">
                    <thead>
                      <tr>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-black sm:pl-6 md:pl-0">
                          Ticket
                        </th>
                        <th scope="col" class="hidden py-3.5 px-3 text-right text-sm font-bold text-black sm:table-cell">
                          Months
                        </th>
                        <th scope="col" class="hidden py-3.5 px-3 text-right text-sm font-bold text-black sm:table-cell">
                          Price/Month
                        </th>
                        <th scope="col" class="py-3.5 pl-3 pr-4 text-right text-sm font-bold text-black sm:pr-6 md:pr-0">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b border-slate-200">
                        <td class="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                          <div class="font-medium text-slate-700">QueryQuest</div>
                          
                        </td>
                        <td class="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                          {validity}
                        </td>
                        <td class="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                          Rs {QueryTicket=="monthly"? "10" : "84"}
                        </td>
                        <td class="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                          Rs {price}
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th scope="row" colspan="3" class="hidden pt-4 pl-6 pr-3 text-sm font-bold text-right text-slate-700 sm:table-cell md:pl-0">
                          Total
                        </th>
                        <td class="pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0">
                          Rs {price}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
                  <button className='btn bg-red-900 hover:bg-green-800 ml-12 mt-1 text-white font-bold rounded-lg' onClick={choosePlan}>Back to Price </button>
                  <button className='btn bg-red-900 hover:bg-green-800 ml-12 mt-1 text-white font-bold rounded-lg' onClick={setTicket}>Make Payment of Rs {price} </button>
              <div class="mt-2 p-9">
                <div class="border-t pt-9 border-slate-200">
                  <div class="text-sm font-serif text-slate-700">
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