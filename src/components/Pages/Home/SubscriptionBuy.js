import React from 'react';
import play1 from '../../../assets/images/home/subscription/play/play1.png';
import play2 from '../../../assets/images/home/subscription/play/play2.png';
import playthird1 from '../../../assets/images/home/subscription/play/playthird1.png';
import playthird2 from '../../../assets/images/home/subscription/play/playthird2.png';
import playthird3 from '../../../assets/images/home/subscription/play/playthird3.png';
import playfull from '../../../assets/images/home/subscription/play/playfull.png';
const SubscriptionBuy = () => {
    return (
        <>
           
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex w-full mb-20  justify-center">
                        <h1 class="sm:text-3xl text-2xl font-bold text-white ">Buy Our Subscription Plan Now</h1>
                    </div>
                    <div class="flex flex-wrap md:-m-2 -m-1 ">
                        <div class="p-4 lg:w-1/ md:w-2/3  w-2/2 ">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={play1} alt="movies"/></figure>
                            </div>
                        </div>

                        <div class="p-4 lg:w-1/ md:w-1/3  w-1/3">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={play2} alt="movies" /></figure>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-wrap md:-m-2 -m-1 ">
                        <div class="flex flex-wrap -m-2">
                            <div class="p-4 lg:w-1/ md:w-1/3 ">
                                <div class="h-full flex flex-col items-center text-center">
                                    <figure><img src={playthird1} alt="movies" /></figure>
                                </div>
                            </div>
                            <div class="p-4 lg:w-1/ md:w-1/3 ">
                                <div class="h-full flex flex-col items-center text-center">
                                    <figure><img src={playthird2} alt="movies" /></figure>
                                </div>
                            </div>
                            <div class="p-4 lg:w-1/ md:w-1/3">
                                <div class="h-full flex flex-col items-center text-center">
                                    <figure><img src={playthird3} alt="movies" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap -m-4 ">
                            <div class="p-4 lg:w-1/ md:w-1/1 mt-6">
                                <div class="h-full flex flex-col items-center text-center">
                                    <figure><img src={playfull} alt="movies" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          
        </>
    );
};

export default SubscriptionBuy;