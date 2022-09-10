import React from 'react';
import whatson from '../../../assets/images/home/content/whatson/whatson.png';
import movie from '../../../assets/images/home/content/whatson/movie.png';

const WhatsMovie = () => {
    return (
        <>
            <div class="bg-white my-5">
                <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">

                    <section class="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-6 mb-8 md:mb-16">

                        <div class="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12">

                            <h1 class="text-black-800 text-4xl sm:text-5xl md:text-3xl font-bold mb-8 md:mb-12">What's On</h1>
                            <p class=" md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                            <div class="xl:w-11/12  overflow-hidden rounded-lg ">
                            <div className='flex justify-center items-center'>
                                <a href="#" class="group flex items-center ">
                                    <figure><img src={whatson}  /></figure>
                                </a>
                            </div>
                            </div>
                        </div>
                        
                      
                      <div class="h-full grid grid-cols-2 md:grid-cols-3 gap-6  md:my-5  my-10">
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
                                    <figure><img src={movie}  /></figure>
                                </a>
                            </div>

                            <div className='flex justify-center items-center'>
                                <a href="#" class=" flex items-center  ">
                                    <figure><img src={movie}  /></figure>
                                </a>
                            </div>
                            <div className='flex justify-center items-center'>
                                <a href="#" class=" flex items-center  ">
                                    <figure><img src={movie}  /></figure>
                                </a>
                            </div>
                            <div className='flex justify-center items-center'>
                                <a href="#" class=" flex items-center  ">
                                    <figure><img src={movie}  /></figure>
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