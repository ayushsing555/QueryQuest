import React from 'react'
import { Carousel } from "@material-tailwind/react";
const Home = () => {
  return (
    <>
      <section class=" body-font">
  <div class="container px-5 py-10 mx-auto">
  <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-bold title-font  text-gray-900">Ask. Connect. Share Knowledge.</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-red-800 font-bold font-serif">Your Questions, Answered. Community Driven.</p>
    </div>
    
    <div class="flex flex-wrap ml-80 w-1/2 h-1/3">

    <Carousel transition={{ duration: 2 }} className="rounded-xl text-black" data-carousel="slide">
      <img alt="gallery" class="absolute inset-0 w-full" 
        src="/image/query.JPG"
      />
      <img
        src="/image/newQuery.JPG"
        alt="image 2"
        className=" w-100"
      />
      <img
        src="/image/single Query.JPG"
        alt="image 3"
        className=" w-full"
      />
      <img
        src="/image/users.JPG"
        alt="image 3"
        className=" w-full"
      />
    </Carousel>
      {/* <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="/image/query.JPG"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="/image/query.JPG"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="/image/query.JPG"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="/image/query.JPG"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="/image/query.JPG"/>
          <div class="px-8 py-10 relative z-10 blur-lg w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="/image/query.JPG"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</section>

<main>
      <div className='p-3 hover:bg-red-800  bg-red-900 shadow-lg text-black body-font rounded-lg w-10/12 ml-auto mr-auto'>
      <div className='h-full bg-red-100 bg-opacity-75 pt-10 pb-10 rounded-lg '>
          <h2 className='sm:text-3xl text-2xl font-bold title-font text-center mb-3'>Who we Are !!</h2>
          <h3 className='ml-5 font-bold font-serif'>Empowering the world to develop technology through collective knowledge.</h3>
          <p className='ml-5 font-bold font-serif'>Our mission is to share and grow the world's knowledge. We want to connect the people who knowledge to the people who used it, to bring together people with different perspectives so they 
            can understand each other better, to empower everyone to share their knowledge for the benefit of the rest of the world.</p>
      </div>
      </div>
</main>

      <section className= 'mt-5 mb-5 w-full'>
      <div className='p-3 hover:bg-red-800  bg-red-900 shadow-lg text-black body-font rounded-lg w-10/12 ml-auto mr-auto'>
      <div className='h-full bg-red-100 bg-opacity-75 pt-10 pb-10 rounded-lg '>
      <h2 className='sm:text-3xl text-2xl font-bold title-font text-center mb-3'>Why Us?</h2>
      <div className='flex flex-row m-2 ml-5 font-bold font-serif'>
      <div className='inline-flex items-center pr-2 py-1 w-10/12'>
        <p>We made our platform a global knowledge sharing platform, connectiong people to share insights on various topics and providing a unique platform to learn, share, & connect with others.</p>
      </div>
      <div>
        <p>Platforms lets people ask questions, get instant answers, learn, & share technical knowledge.</p>
      </div>
      </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Home