import React from 'react';
import play1 from '../../../assets/images/home/subscription/play/play1.png';
import playthird1 from '../../../assets/images/home/subscription/play/playthird1.png';
import playthird2 from '../../../assets/images/home/subscription/play/playthird2.png';
import playthird3 from '../../../assets/images/home/subscription/play/playthird3.png';
import playfull from '../../../assets/images/home/subscription/play/playfull.png';

const MainContent = () => {
    return (
        <>
            <section class="bg-secondary bg-grey text-base-100  rounded-t-[50px]">

                <div class="container px-5 py-24 mx-auto flex flex-wrap">

                    {/* Buy Our Service */}
                    <div class="flex flex-col text-center w-full mb-20">
                       
                        <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">Buy Our Subscription Plan Now</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base"> to watch your favorite movies and TV shows.</p>
                    </div>
                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-1/1">

                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={play1} />
                            </div>

                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={play1} />
                            </div>
                        </div>

                        <div class="flex flex-wrap w-1/1">
                            <div class="md:p-2 p-1 w-1/3">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={playthird1} />
                            </div>

                            <div class="md:p-2 p-1 w-1/3">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={playthird2} />
                            </div>
                            <div class="md:p-2 p-1 w-1/3">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={playthird3} />
                            </div>

                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src={playfull} />
                            </div>
                        </div>



                     

                    </div>

                    <div class="flex flex-col text-center w-full my-20">
                       
                       <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">Subscription Plan</h1>
                       <p class="lg:w-2/3 mx-auto leading-relaxed text-base"> Select watch your favorite movies and TV shows.</p>
                   </div>
                </div>
            </section>

        </>
    );
};

export default MainContent;