import React from 'react';
import whatson from '../../../assets/images/home/content/whatson/whatson.png';
import movie from '../../../assets/images/home/content/whatson/movie.png';

const WhatsMovie = () => {
    return (
        <>
            <div class="my-5">
                <div class="max-w-screen-2xl px-4 md:px-4 mx-auto">
                    <section class="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-4 mb-8 md:mb-8">
                        <div class="xl:w-7/12 md:w-8/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-8">
                            <h1 class="text-black-800 text-4xl sm:text-5xl md:text-3xl font-bold mb-8 md:mb-8">What's On</h1>
                            <p class=" md:text-lg xl:text-xl font-semibold mb-8 md:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            <div class="xl:w-11/12 md:w-11/12 overflow-hidden rounded-lg ">
                                <div className='flex justify-center items-center'>
                                    <a href="#" class="group flex items-center ">
                                        <figure><img src={whatson} /></figure>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="h-full grid grid-cols-2 md:grid-cols-3 gap-8  md:my-5  my-10">
                            <div className='flex justify-center items-center'>
                                <a href="#" class=" flex items-center  ">
                                    <figure><img src={movie} /></figure>
                                </a>
                            </div>
{/* 
                            <div class="mt-10 max-w-sm mx-auto">
                                <div class="relative group">
                                    <img
                                        src={movie} class="w-full rounded shadow-xl hover:shadow-3xl" />
                                    <div
                                        class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
                                    </div>
                                    <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-2 hover:opacity-900">
                                        <div class="flex-row text-center">
                                            <h1 class="text-gray-50 font-bold text-lg">Be careful on the way.</h1>
                                            <p class="text-gray-200 font-medium text-sm">Tulus</p>
                                            <btn class='btn btn-primary'>Live</btn>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            <div className='flex justify-center items-center'>
                                <a href="#" class=" flex items-center  ">
                                    <figure><img src={movie} /></figure>
                                </a>
                            </div>

                            <div className='flex justify-center items-center'>
                                <a href="#" class=" flex items-center  ">
                                    <figure><img src={movie} /></figure>
                                </a>
                            </div>

                            <div className='flex justify-center items-center'>
                                <a href="#" class=" flex items-center  ">
                                    <figure><img src={movie} /></figure>
                                </a>
                            </div>
                            <div className='flex justify-center items-center'>
                                <a href="#" class=" flex items-center  ">
                                    <figure><img src={movie} /></figure>
                                </a>
                            </div>
                            <div className='flex justify-center items-center'>
                                <a href="#" class=" flex items-center  ">
                                    <figure><img src={movie} /></figure>
                                </a>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </>
    );
};

export default WhatsMovie;