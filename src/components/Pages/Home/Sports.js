import React from 'react';
import sports1 from '../../../assets/images/home/sports/sports1.png';

const Sports = () => {
    return (
        <>
            <section class="text-gray-600 ">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full  items-start mb-3">
                        <h1 class="text-2xl font-bold  title-font mb-4 text-gray-900 uppercase">Sports</h1>
                    </div>

                    <div class="flex flex-wrap -m-4 ">
                            <div class="p-4 lg:w-1/ md:w-1/3 ">
                                <div class="h-full flex flex-col items-center text-center">
                                    <figure><img src={sports1} alt="movies" /></figure>

                                </div>
                            </div>
                            <div class="p-4 lg:w-1/ md:w-1/3 ">
                                <div class="h-full flex flex-col items-center text-center">
                                    <figure><img src={sports1} alt="movies" /></figure>

                                </div>
                            </div>

                            <div class="p-4 lg:w-1/ md:w-1/3">
                                <div class="h-full flex flex-col items-center text-center">
                                    <figure><img src={sports1} alt="movies" /></figure>

                                </div>
                            </div>

                        </div>
                    </div>
              

            </section>
        </>
    );
};

export default Sports;