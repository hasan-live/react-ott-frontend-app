import React from 'react';
import plan1 from '../../../assets/images/home/subscription/plan/plan1.png';
import plan3 from '../../../assets/images/home/subscription/plan/plan3.png';

const SubscriptionPlan = () => {
    return (
        <>

            <div class="pricing-table-2 py-6 pb-6 md:py-6">
                <div class="container mx-auto px-4">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">Subscription Plan</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-white"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class="shadow-lg lg:mx-[40px] md:flex items-center justify-center gap-6  md:mt-6">

                        <div class=" lg:w-1/3 my-2 md:my-6 ">
                            <div class="shadow-lg border-4 border-solid border-gray text-center max-w-sm mx-auto rounded-3xl  transition-colors duration-300">
                                <div class="pricing-amount  p-10 transition-colors duration-300">
                                    <div class=""><span class="text-2xl font-bold">1 month <br />
                                        of premium <br />
                                        for ৳ 100</span>
                                    </div>
                                </div>
                                <div class="p-10">
                                    <ul class="leading-loose">
                                        <li>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                                        </li>

                                    </ul>
                                    <div class="mt-6 py-4">
                                        <button class="bg-green-600 text-xl text-white py-2 px-6 rounded hover:bg-red-700 transition-colors duration-300">UnSubscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class=" lg:w-1/3 my-2 md:my-6 ">
                            <div class="shadow-lg border-4 border-solid border-gray text-center max-w-sm mx-auto rounded-3xl md:scale-105 transition-colors duration-300">

                                <div class="pricing-amount  p-10 transition-colors duration-300">
                                    <div class=""><span class="text-4xl font-bold">3 month <br />
                                        of premium <br />
                                        for ৳ 250</span>
                                    </div>
                                </div>
                                <div class="p-10">
                                    <ul class="leading-loose">
                                        <li>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                                        </li>

                                    </ul>
                                    <div class="mt-6 py-4">
                                        <button class="bg-red-600 text-xl text-white py-2 px-6 rounded hover:bg-green-700 transition-colors duration-300">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class=" lg:w-1/3 my-2 md:my-6 ">
                            <div class="shadow-lg border-4 border-solid border-gray text-center max-w-sm mx-auto rounded-3xl  transition-colors duration-300">

                                <div class="pricing-amount  p-10 transition-colors duration-300">
                                    <div class=""><span class="text-2xl font-bold">12 month <br />
                                        of premium <br />
                                        for ৳ 7500</span>
                                    </div>
                                </div>
                                <div class="p-10">
                                    <ul class="leading-loose">
                                        <li>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                                        </li>

                                    </ul>
                                    <div class="mt-6 py-4">
                                        <button class="bg-red-600 text-xl text-white py-2 px-6 rounded hover:bg-green-700 transition-colors duration-300">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            {/* <div class="pricing-table   md:py-6">
                <div class="container mx-auto px-6 pb-16 py-10 ">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">Subscription Plan</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-white"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class="shadow-lg flex lg:-mx-6 items-center justify-center gap-6 ">

                    <div class=" lg:w-1/3 my-2 md:my-6 ">
                            <div class="shadow-lg border-4 border-solid border-gray text-center max-w-sm mx-auto  transition-colors duration-300 rounded-3xl">

                                <div class="pricing-amount  p-10 transition-colors duration-300">
                                    <div class=""><span class="text-2xl font-bold">1 month <br />
                                        of premium <br />
                                        for ৳ 100</span>
                                    </div>
                                </div>
                                <div class="p-10">
                                    <ul class="leading-loose">
                                        <li>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                                        </li>

                                    </ul>
                                    <div class="mt-6 py-4">
                                    <button class="bg-green-600 text-xl text-white py-2 px-6 rounded hover:bg-red-700 transition-colors duration-300">UnSubscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                      
                        <div class=" lg:w-1/3 my-2 md:my-6 ">
                            <div class="shadow-lg border-4 border-solid border-gray text-center max-w-sm mx-auto   transition-colors duration-300 rounded-3xl border-white transform scale-125">
                            <div class="pricing-amount  p-10 transition-colors duration-300">
                                    <div class=""><span class="text-2xl font-bold">3 month <br />
                                        of premium <br />
                                        for ৳ 250</span>
                                    </div>
                                </div>
                                <div class="p-10">
                                <ul class="leading-loose">
                                        <li>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                                        </li>

                                    </ul>
                                    <div class="mt-6 py-4">
                                        <button class="bg-red-600 text-xl text-white py-2 px-6 rounded hover:bg-green-700 transition-colors duration-300 ">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                     
                        <div class=" lg:w-1/3 my-2 md:my-6 ">
                            <div class="shadow-lg border-4 border-solid border-gray text-center max-w-sm mx-auto  transition-colors duration-300 rounded-3xl">

                                <div class="pricing-amount  p-10 transition-colors duration-300">
                                    <div class=""><span class="text-2xl font-bold">12 month <br />
                                        of premium <br />
                                        for ৳ 7500</span>
                                    </div>
                                </div>
                                <div class="p-10">
                                    <ul class="leading-loose">
                                        <li>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                                        </li>

                                    </ul>
                                    <div class="mt-6 py-4">
                                        <button class="bg-red-600 text-xl text-white py-2 px-6 rounded hover:bg-green-700 transition-colors duration-300">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            */}


        </>
    );
};

export default SubscriptionPlan;