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
            {/* <div class="container px-5 py-6 mx-auto flex flex-wrap">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">Buy Our Subscription Plan Now</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base"> to watch your favorite movies and TV shows.</p>
                </div>

                <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-6">
                    <div>
                        <img src={play2} alt="" loading="lazy" />
                    </div>
                    <div class="row-start-1 col-start-2 col-span-2 gap-6">
                        <img src={play1} alt="" loading="lazy" />
                    </div>
                    
                    <div class="col-start-3">
                        <img src={playthird1} alt="" loading="lazy" />
                    </div>
                    <div>
                        <img src={playthird1} alt="" loading="lazy" />
                    </div>
                    <div>
                        <img src={playthird1} alt="" loading="lazy" />
                    </div>

                </div>
                <div class="flex flex-wrap md:-m-2 ">
                    <div class="flex -m-4 ">
                        <div class="p-4 lg:w-1/ md:w-1/1">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={playfull} alt="movies" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div class="container px-5 py-6 mx-auto flex flex-wrap">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">Buy Our Subscription Plan Now</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base"> to watch your favorite movies and TV shows.</p>
                </div>
                <div class="grid  gap-6 gap-x-8 gap-y-4  grid-cols-3">
                    <div class="lg:col-span-2 col-span-3 transition ease-in-out delay-150 bg-text hover:-translate-y-1 hover:scale-105 hover:bg duration-30 "><figure><a href=''><img src={play1} alt='image' className='object-cover' /></a></figure></div>
                    <div class="lg:col-span-1 col-span-3 transition ease-in-out delay-150 bg-text hover:-translate-y-1 hover:scale-105 hover:bg duration-30"><figure><a href=''><img src={play2} alt='image' /></a></figure></div>
                    <div class="lg:col-span-1 col-span-3  transition ease-in-out delay-150 bg-text hover:-translate-y-1 hover:scale-105 hover:bg duration-30"><figure><a href=''><img src={playthird1} alt='image' /></a></figure></div>
                    <div class="lg:col-span-1 col-span-3  transition ease-in-out delay-150 bg-text hover:-translate-y-1 hover:scale-105 hover:bg duration-30"><figure><a href=''><img src={playthird1} alt='image' /></a></figure></div>
                    <div class="lg:col-span-1 col-span-3 transition ease-in-out delay-150 bg-text hover:-translate-y-1 hover:scale-105 hover:bg duration-30"><figure><a href=''><img src={playthird1} alt='image' /></a></figure></div>
                    <div class="col-span-3  transition ease-in-out delay-150 bg-text hover:-translate-y-1 hover:scale-105 hover:bg duration-30"><figure><a href=''><img src={playfull} alt='image' /></a></figure></div>
                </div>
            </div>
        </>
    );
};

export default SubscriptionBuy;