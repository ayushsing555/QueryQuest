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
        <div className='w-11/12 p-4  ml-14 mb-4 bg-red-100 rounded-lg'>
          <div class="flex flex-col text-center w-full mb-4">
            <h1 class="sm:text-3xl text-2xl font-bold title-font  text-gray-900">WHY US?</h1>
          </div>
          <div class="flex flex-wrap ml-16 text-white">

            <div class="ml-10 p-4 lg:w-2/5 bg-red-900 shadow-lg shadow-red-900 drop-shadow-xl rounded-xl">
              <div class="h-full flex flex-col items-center text-center">
                <svg fill="currentColor" viewBox="0 0 16 16" height="40px">
                  <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 006 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z" />
                  <path d="M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 012.924 2.924l-.01.89.636.622a2.89 2.89 0 010 4.134l-.637.622.011.89a2.89 2.89 0 01-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 01-4.134 0l-.622-.637-.89.011a2.89 2.89 0 01-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 010-4.134l.637-.622-.011-.89a2.89 2.89 0 012.924-2.924l.89.01.622-.636a2.89 2.89 0 014.134 0l-.715.698a1.89 1.89 0 00-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 00-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 000 2.704l.944.92-.016 1.32a1.89 1.89 0 001.912 1.911l1.318-.016.921.944a1.89 1.89 0 002.704 0l.92-.944 1.32.016a1.89 1.89 0 001.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 000-2.704l-.944-.92.016-1.32a1.89 1.89 0 00-1.912-1.911l-1.318.016z" />
                  <path d="M7.001 11a1 1 0 112 0 1 1 0 01-2 0z" />
                </svg>
                <div class="w-full font-sans">
                  <p className="text-sm text-white mt-3">We made our platform a global knowledge sharing platform, connectiong people to share insights on various topics and providing a unique platform to learn, share, & connect with others.</p>
                </div>
              </div>
            </div>

            <div class="ml-10 p-4 lg:w-2/5 bg-red-900 shadow-lg shadow-red-900 drop-shadow-xl rounded-xl">
              <div class="h-full flex flex-col items-center text-center">
                <svg baseProfile="tiny" viewBox="0 0 24 24" fill="currentColor" height="50px">
                  <path d="M12 2c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9zm0 6a1 1 0 112 0v3a1 1 0 101 1h1v-2l1 1-1 1c0 3 0 3-2 4 0-1-1-1-3-1v-2l-2-2V9c-1 0-1 1-1 1l-.561-.561-1.652-1.651A7.004 7.004 0 0112 4c.688 0 1.353.104 1.981.29C13.895 5.185 13.402 6 12.5 6c-1 0-1.5 1-1.5 2v3s1 0 1-3zm0 10c-3.859 0-7-3.14-7-7 0-.776.133-1.521.367-2.219l1.926 1.926 1 1L10 13.414V15a1 1 0 001 1c.779 0 1.651 0 2.006.091a1.028 1.028 0 001.02.902.946.946 0 00.422-.098c2.348-1.174 2.539-1.644 2.552-4.479l.708-.708a.999.999 0 000-1.414l-1-1A1.001 1.001 0 0015 10V8a2 2 0 00-.883-1.658c.421-.411.712-.995.826-1.685C17.335 5.772 19 8.192 19 11c0 3.86-3.141 7-7 7z" />
                </svg>
                <div class="w-full font-sans">
                  {/* <h2 class="title-font font-medium text-md text-white mb-4 mt-2">REPUTATION SYSTEM</h2> */}
                  <p className="text-sm text-white ">Platforms lets people ask questions, get instant answers, learn, & share technical knowledge.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      <section>
      <div className='w-11/12 p-4  ml-14 mb-4 bg-red-100 rounded-lg text-white'>
      <div class="flex flex-col text-center w-full mb-4">
                        <h1 class="sm:text-3xl text-2xl font-bold title-font  text-gray-900">OUR CORE VALUES</h1>
                    </div>
                    <div class="flex flex-wrap ml-16">

                        <div class="ml-10 mb-5 p-4 lg:w-2/5 bg-red-900 shadow-lg shadow-red-900 drop-shadow-xl rounded-xl">
                            <div class="h-full flex flex-col items-center text-center">
                            <svg fill="currentColor" viewBox="0 0 16 16" height="40px">
                                    <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 006 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z" />
                                    <path d="M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 012.924 2.924l-.01.89.636.622a2.89 2.89 0 010 4.134l-.637.622.011.89a2.89 2.89 0 01-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 01-4.134 0l-.622-.637-.89.011a2.89 2.89 0 01-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 010-4.134l.637-.622-.011-.89a2.89 2.89 0 012.924-2.924l.89.01.622-.636a2.89 2.89 0 014.134 0l-.715.698a1.89 1.89 0 00-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 00-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 000 2.704l.944.92-.016 1.32a1.89 1.89 0 001.912 1.911l1.318-.016.921.944a1.89 1.89 0 002.704 0l.92-.944 1.32.016a1.89 1.89 0 001.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 000-2.704l-.944-.92.016-1.32a1.89 1.89 0 00-1.912-1.911l-1.318.016z" />
                                    <path d="M7.001 11a1 1 0 112 0 1 1 0 01-2 0z" />
                                </svg>
                                <div class="w-full font-sans">
                                    <h2 class="title-font font-medium text-md text-white mb-4 mt-2">BE TRANSPARENT</h2>
                                    <p className="text-sm text-white mt-3">Communicate properly. Encourage Transparency from others by being empathetic reliable,acting with integrity.</p>
                                </div>
                            </div>
                        </div>

                        <div class="ml-10 mb-5 p-4 lg:w-2/5 bg-red-900 shadow-lg shadow-red-900 drop-shadow-xl rounded-xl">
                            <div class="h-full flex flex-col items-center text-center">
                            <svg viewBox="0 0 24 24" fill="currentColor" height="50px">
                            <path d="M15.2 10.7l1.4 5.3-4.6-3.8L7.4 16l1.4-5.2-4.2-3.5L10 7l2-5 2 5 5.4.3-4.2 3.4M14 19h-1v-3l-1-1-1 1v3h-1c-1.1 0-2 .9-2 2v1h8v-1a2 2 0 00-2-2z" />
                            </svg>
                                <div class="w-full font-sans">
                                    <h2 class="title-font font-medium text-md text-white mb-4 mt-2">MISSION FIRST</h2>
                                    <p className="text-sm text-white ">We place long-term, collective impact ahead of personal achievement.</p>
                                </div>
                            </div>
                        </div>

                        <div class="ml-10 p-4 lg:w-2/5 bg-red-900 shadow-lg shadow-red-900 drop-shadow-xl rounded-xl">
                            <div class="h-full flex flex-col items-center text-center">
                                <svg baseProfile="tiny" viewBox="0 0 24 24" fill="currentColor" height="50px">
                                    <path d="M12 2c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9zm0 6a1 1 0 112 0v3a1 1 0 101 1h1v-2l1 1-1 1c0 3 0 3-2 4 0-1-1-1-3-1v-2l-2-2V9c-1 0-1 1-1 1l-.561-.561-1.652-1.651A7.004 7.004 0 0112 4c.688 0 1.353.104 1.981.29C13.895 5.185 13.402 6 12.5 6c-1 0-1.5 1-1.5 2v3s1 0 1-3zm0 10c-3.859 0-7-3.14-7-7 0-.776.133-1.521.367-2.219l1.926 1.926 1 1L10 13.414V15a1 1 0 001 1c.779 0 1.651 0 2.006.091a1.028 1.028 0 001.02.902.946.946 0 00.422-.098c2.348-1.174 2.539-1.644 2.552-4.479l.708-.708a.999.999 0 000-1.414l-1-1A1.001 1.001 0 0015 10V8a2 2 0 00-.883-1.658c.421-.411.712-.995.826-1.685C17.335 5.772 19 8.192 19 11c0 3.86-3.141 7-7 7z" />
                                </svg>
                                <div class="w-full font-sans">
                                    <h2 class="title-font font-medium text-md text-white mb-4 mt-2">AGILITY</h2>
                                    <p className="text-sm text-white ">We are mimble in our processes & system and ready to adapt to a changing world.</p>
                                </div>
                            </div>
                        </div>

                        <div class="ml-10 p-4 lg:w-2/5 bg-red-900 shadow-lg shadow-red-900 drop-shadow-xl rounded-xl">
                            <div class="h-full flex flex-col items-center text-center">
                            <svg viewBox="0 0 512 512" fill="currentColor" height="50px">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M344 280l88-88M232 216l64 64M80 320l104-104" />
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M480 168 A24 24 0 0 1 456 192 A24 24 0 0 1 432 168 A24 24 0 0 1 480 168 z" />
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M344 304 A24 24 0 0 1 320 328 A24 24 0 0 1 296 304 A24 24 0 0 1 344 304 z" />
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M232 192 A24 24 0 0 1 208 216 A24 24 0 0 1 184 192 A24 24 0 0 1 232 192 z" />
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M80 344 A24 24 0 0 1 56 368 A24 24 0 0 1 32 344 A24 24 0 0 1 80 344 z" />
                                </svg>
                                <div class="w-full font-sans">
                                    <h2 class="title-font font-medium text-md text-white mb-4 mt-2">EMPOWER PEOPLE TO DELIVER OUTSTANDING RESULTS</h2>
                                    <p className="text-sm text-white ">Give People space to their job done, support them when they need it, & practice blameless accountability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
      </div>
      </section>

      <section>
      <div className='w-11/12 p-4  ml-14 mb-8 bg-red-100 rounded-lg text-white'>
      <div class="flex flex-col text-center w-full mb-4">
                        <h1 class="sm:text-3xl text-2xl font-bold title-font  text-gray-900">OUR SERVICES</h1>
                    </div>
                    <div class="flex flex-wrap ml-16">

                        <div class="ml-10 p-4 lg:w-1/4 bg-red-900 shadow-lg shadow-red-900 drop-shadow-xl rounded-xl">
                            <div class="h-full flex flex-col items-center text-center">
                                <svg fill="currentColor" viewBox="0 0 16 16" height="40px">
                                    <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 006 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z" />
                                    <path d="M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 012.924 2.924l-.01.89.636.622a2.89 2.89 0 010 4.134l-.637.622.011.89a2.89 2.89 0 01-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 01-4.134 0l-.622-.637-.89.011a2.89 2.89 0 01-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 010-4.134l.637-.622-.011-.89a2.89 2.89 0 012.924-2.924l.89.01.622-.636a2.89 2.89 0 014.134 0l-.715.698a1.89 1.89 0 00-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 00-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 000 2.704l.944.92-.016 1.32a1.89 1.89 0 001.912 1.911l1.318-.016.921.944a1.89 1.89 0 002.704 0l.92-.944 1.32.016a1.89 1.89 0 001.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 000-2.704l-.944-.92.016-1.32a1.89 1.89 0 00-1.912-1.911l-1.318.016z" />
                                    <path d="M7.001 11a1 1 0 112 0 1 1 0 01-2 0z" />
                                </svg>
                                <div class="w-full font-sans">
                                    <h2 class="title-font font-medium text-md text-white mb-4 mt-2">QUESTION & ANSWER PLATFORM</h2>
                                    <p className="text-sm text-white ">QueryQuest is primarily known for its question & answers system, where user can ask any query & other members of the community can provide answers or solutions.</p>
                                </div>
                            </div>
                        </div>

                        <div class="ml-10 p-4 lg:w-1/4 bg-red-900 shadow-lg shadow-red-900 drop-shadow-xl rounded-xl">
                            <div class="h-full flex flex-col items-center text-center">
                                <svg baseProfile="tiny" viewBox="0 0 24 24" fill="currentColor" height="50px">
                                    <path d="M12 2c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9zm0 6a1 1 0 112 0v3a1 1 0 101 1h1v-2l1 1-1 1c0 3 0 3-2 4 0-1-1-1-3-1v-2l-2-2V9c-1 0-1 1-1 1l-.561-.561-1.652-1.651A7.004 7.004 0 0112 4c.688 0 1.353.104 1.981.29C13.895 5.185 13.402 6 12.5 6c-1 0-1.5 1-1.5 2v3s1 0 1-3zm0 10c-3.859 0-7-3.14-7-7 0-.776.133-1.521.367-2.219l1.926 1.926 1 1L10 13.414V15a1 1 0 001 1c.779 0 1.651 0 2.006.091a1.028 1.028 0 001.02.902.946.946 0 00.422-.098c2.348-1.174 2.539-1.644 2.552-4.479l.708-.708a.999.999 0 000-1.414l-1-1A1.001 1.001 0 0015 10V8a2 2 0 00-.883-1.658c.421-.411.712-.995.826-1.685C17.335 5.772 19 8.192 19 11c0 3.86-3.141 7-7 7z" />
                                </svg>
                                <div class="w-full font-sans">
                                    <h2 class="title-font font-medium text-md text-white mb-4 mt-2">REPUTATION SYSTEM</h2>
                                    <p className="text-sm text-white ">QueryQuest has a good reputation system that encourages users to contribute positively to the community. Users gets like for asking questions, providing helpful answers & participating in the community in various ways.</p>
                                </div>
                            </div>
                        </div>

                        <div class="ml-10 p-4 lg:w-1/4 bg-red-900 shadow-lg shadow-red-900 drop-shadow-xl rounded-xl">
                            <div class="h-full flex flex-col items-center text-center">
                                <svg className="mt-2" viewBox="0 0 24 24" fill="currentColor" height="40px">
                                    <path d="M20.625 8.127q-.55 0-1.025-.205-.475-.205-.832-.563-.358-.357-.563-.832Q18 6.053 18 5.502q0-.54.205-1.02t.563-.837q.357-.358.832-.563.474-.205 1.025-.205.54 0 1.02.205t.837.563q.358.357.563.837.205.48.205 1.02 0 .55-.205 1.025-.205.475-.563.832-.357.358-.837.563-.48.205-1.02.205zm0-3.75q-.469 0-.797.328-.328.328-.328.797 0 .469.328.797.328.328.797.328.469 0 .797-.328.328-.328.328-.797 0-.469-.328-.797-.328-.328-.797-.328zM24 10.002v5.578q0 .774-.293 1.46-.293.685-.803 1.194-.51.51-1.195.803-.686.293-1.459.293-.445 0-.908-.105-.463-.106-.85-.329-.293.95-.855 1.729-.563.78-1.319 1.336-.756.557-1.67.861-.914.305-1.898.305-1.148 0-2.162-.398-1.014-.399-1.805-1.102-.79-.703-1.312-1.664t-.674-2.086h-5.8q-.411 0-.704-.293T0 16.881V6.873q0-.41.293-.703t.703-.293h8.59q-.34-.715-.34-1.5 0-.727.275-1.365.276-.639.75-1.114.475-.474 1.114-.75.638-.275 1.365-.275t1.365.275q.639.276 1.114.75.474.475.75 1.114.275.638.275 1.365t-.275 1.365q-.276.639-.75 1.113-.475.475-1.114.75-.638.276-1.365.276-.188 0-.375-.024-.188-.023-.375-.058v1.078h10.875q.469 0 .797.328.328.328.328.797zM12.75 2.373q-.41 0-.78.158-.368.158-.638.434-.27.275-.428.639-.158.363-.158.773 0 .41.158.78.159.368.428.638.27.27.639.428.369.158.779.158.41 0 .773-.158.364-.159.64-.428.274-.27.433-.639.158-.369.158-.779 0-.41-.158-.773-.159-.364-.434-.64-.275-.275-.639-.433-.363-.158-.773-.158zM6.937 9.814h2.25V7.94H2.814v1.875h2.25v6h1.875zm10.313 7.313v-6.75H12v6.504q0 .41-.293.703t-.703.293H8.309q.152.809.556 1.5.405.691.985 1.19.58.497 1.318.779.738.281 1.582.281.926 0 1.746-.352.82-.351 1.436-.966.615-.616.966-1.43.352-.815.352-1.752zm5.25-1.547v-5.203h-3.75v6.855q.305.305.691.452.387.146.809.146.469 0 .879-.176.41-.175.715-.48.304-.305.48-.715t.176-.879z" />
                                </svg>
                                <div class="w-full font-sans">
                                    <h2 class="title-font font-medium text-md text-white mb-4 mt-2">TEAMS</h2>
                                    <p className="text-sm text-white ">QueryQuest also provides a paid service that enables organizations to create private internal Q/A platforms for their development teams to share knowledge & collaborate effectively.</p>
                                </div>
                            </div>
                        </div>

                        <div class="ml-10 mt-5 p-4 lg:w-1/4 bg-red-900 shadow-lg shadow-red-900 drop-shadow-xl rounded-xl">
                            <div class="h-full flex flex-col items-center text-center">
                                <svg viewBox="0 0 512 512" fill="currentColor" height="50px">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M344 280l88-88M232 216l64 64M80 320l104-104" />
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M480 168 A24 24 0 0 1 456 192 A24 24 0 0 1 432 168 A24 24 0 0 1 480 168 z" />
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M344 304 A24 24 0 0 1 320 328 A24 24 0 0 1 296 304 A24 24 0 0 1 344 304 z" />
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M232 192 A24 24 0 0 1 208 216 A24 24 0 0 1 184 192 A24 24 0 0 1 232 192 z" />
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M80 344 A24 24 0 0 1 56 368 A24 24 0 0 1 32 344 A24 24 0 0 1 80 344 z" />
                                </svg>
                                <div class="w-full font-sans">
                                    <h2 class="title-font font-medium text-md text-white mb-4 mt-2">ANALYTICS</h2>
                                    <p className="text-sm text-white ">This includes metrics like the no. of active users, daily/weekly/monthly active users, time spent per session, & average no. of questions asked & answered per user.</p>
                                </div>
                            </div>
                        </div>

                        <div class="ml-10 mt-5 p-4 lg:w-1/4 bg-red-900 shadow-lg shadow-red-900 drop-shadow-xl rounded-xl">
                            <div class="h-full flex flex-col items-center text-center">
                                <svg viewBox="0 0 24 24" fill="currentColor" height="50px">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M6.455 19L2 22.5V4a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1H6.455zM4 18.385L5.763 17H20V5H4v13.385zM11 13h2v2h-2v-2zm0-6h2v5h-2V7z" />
                                </svg>
                                <div class="w-full font-sans">
                                    <h2 class="title-font font-medium text-md text-white mb-4 mt-2">USER FEEDBACK & SATISFACTION</h2>
                                    <p className="text-sm text-white ">Gathering feedback from users through surveys or feedback forms helps gauge user satisfaction & identity areas for improvement.</p>
                                </div>
                            </div>
                        </div>

                        <div class="ml-10 mt-5 p-4 lg:w-1/4 bg-red-900 shadow-lg shadow-red-900 drop-shadow-xl rounded-xl">
                            <div class="h-full flex flex-col items-center text-center">
                                <svg fill="none" viewBox="0 0 24 24" height="50px">
                                    <path fill="currentColor" fillRule="evenodd" d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                                    <path fill="currentColor" fillRule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z" clipRule="evenodd" />
                                </svg>
                                <div class="w-full font-sans">
                                    <h2 class="title-font font-medium text-md text-white mb-4 mt-2">USER PROFILES</h2>
                                    <p className="text-sm text-white ">QueryQuest have user profiles that display a user's activity, contributions, answering through helpful answers & contributions to the community.</p>
                                </div>
                            </div>
                        </div>

                        <div class="ml-10 mt-5 p-4 lg:w-1/4 bg-red-900 shadow-lg shadow-red-900 drop-shadow-xl rounded-xl">
                            <div class="h-full flex flex-col items-center text-center">
                                <svg viewBox="0 0 24 24" fill="currentColor" height="50px">
                                    <path d="M6 6.9L3.87 4.78l1.41-1.41L7.4 5.5 6 6.9M13 1v3h-2V1h2m7.13 3.78L18 6.9l-1.4-1.4 2.12-2.13 1.41 1.41M4.5 10.5v2h-3v-2h3m15 0h3v2h-3v-2M6 20h12a2 2 0 012 2H4a2 2 0 012-2m6-15a6 6 0 016 6v8H6v-8a6 6 0 016-6m0 2a4 4 0 00-4 4v6h8v-6a4 4 0 00-4-4z" />
                                </svg>
                                <div class="w-full font-sans">
                                    <h2 class="title-font font-medium text-md text-white mb-4 mt-2">NOTIFICATIONS</h2>
                                    <p className="text-sm text-white ">Users may receive notifications when answers of questions posted by them is answered & users is notified by this through their registered mail id.</p>
                                </div>
                            </div>
                        </div>

                        <div class="ml-10 mt-5 p-4 lg:w-1/4 bg-red-900 shadow-lg shadow-red-900 drop-shadow-xl rounded-xl">
                            <div class="h-full flex flex-col items-center text-center">
                                <svg fill="none" viewBox="0 0 24 24" height="50px">
                                    <path fill="currentColor" d="M7.665 10.237L9.198 8.95l1.285 1.532 3.064-2.571 1.286 1.532-4.596 3.857-2.572-3.064z" />
                                    <path fill="currentColor" fillRule="evenodd" d="M16.207 4.893a8.001 8.001 0 01.662 10.565c.016.013.03.027.045.042l4.243 4.243a1 1 0 01-1.414 1.414L15.5 16.914a1.046 1.046 0 01-.042-.045A8.001 8.001 0 014.893 4.893a8 8 0 0111.314 0zm-1.414 9.9a6 6 0 10-8.485-8.485 6 6 0 008.485 8.485z" clipRule="evenodd" />
                                </svg>
                                <div class="w-full font-sans">
                                    <h2 class="title-font font-medium text-md text-white mb-4 mt-2">SEARCH FUNCTIONALITY</h2>
                                    <p className="text-sm text-white ">Robust search functionality allows users to find questions & answers quickly, even among the vast archives of content.</p>
                                </div>
                            </div>
                        </div>

                        <div class="ml-10 mt-5 p-4 lg:w-1/4 bg-red-900 shadow-lg shadow-red-900 drop-shadow-xl rounded-xl">
                            <div class="h-full flex flex-col items-center text-center">
                                <svg fill="currentColor" viewBox="0 0 16 16" height="50px">
                                    <path d="M3.5 2.5a.5.5 0 00-1 0v8.793l-1.146-1.147a.5.5 0 00-.708.708l2 1.999.007.007a.497.497 0 00.7-.006l2-2a.5.5 0 00-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM7.5 6a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 3a.5.5 0 000 1h3a.5.5 0 000-1h-3zm0 3a.5.5 0 000 1h1a.5.5 0 000-1h-1z" />
                                </svg>
                                <div class="w-full font-sans">
                                    <h2 class="title-font font-medium text-md text-white mb-4 mt-2">QUERY SORT LISTING</h2>
                                    <p className="text-sm text-white ">Monitoring the query posted by users in My Query or in All Queries, search for query in a date view allows user to navigate through any past queries accordingly.</p>
                                </div>
                            </div>
                        </div>

                    </div>
      </div>
      </section>



    </>
  )
}

export default Home