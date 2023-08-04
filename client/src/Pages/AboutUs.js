import React from "react";

const AboutUs = () => {
    return (
        <>
            <section class="text-white body-font">
                <div class="container px-5 py-24 ">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-bold title-font  text-gray-900">ABOUT US</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-red-800 font-bold font-serif">Our mission: Connecting seekers and knowledge providers</p>
                    </div>

                    <main>
                    <div class="flex flex-col text-center w-full">
                        <h1 class="sm:text-3xl text-2xl font-bold title-font  text-gray-900">WHO WE ARE!</h1>
                    </div>
                        <div class=" ml-20 p-4 w-10/12 bg-red-900 shadow-lg shadow-red-900 drop-shadow-xl rounded-xl mt-2 mb-6">
                            <div class="h-full flex flex-col items-center">
                                <div class="w-full font-sans">
                                    <ul className=" list-disc">
                                        <li>Empowering the world to develop technology through collective knowledge.</li>
                                        <li>Our mission is to share and grow the world's knowledge. We want to connect the people who knowledge to the people who used it, to bring together people with different perspectives so they
                                            can understand each other better, to empower everyone to share their knowledge for the benefit of the rest of the world.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </main>

                    <div class="flex flex-col text-center w-full mb-4">
                        <h1 class="sm:text-3xl text-2xl font-bold title-font  text-gray-900">WHY US?</h1>
                    </div>
                    <div class="flex flex-wrap ml-16">

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


                    <div class="flex flex-col text-center w-full mb-4 mt-16">
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
        </>
    )
}

export default AboutUs;