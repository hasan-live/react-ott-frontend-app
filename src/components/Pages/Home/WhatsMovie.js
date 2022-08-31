import React from 'react';
import whatson from '../../../assets/images/home/content/whatson/whatson.png';
import movie from '../../../assets/images/home/content/whatson/movie.png';

const WhatsMovie = () => {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">What's On
                        </h1>
                        <p class="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod
                            tempor incididunt ut labore et dolore</p>

                        {/* <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg" src={whatson} alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div> */}


                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img class="object-cover object-center rounded" alt="hero" src={whatson} />
                        </div>

                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

                        <div class="flex flex-wrap -m-4 ">
                            <div class="p-4 lg:w-1/ md:w-1/3 ">
                                <div class="h-full flex flex-col items-center text-center">
                                    <figure><img src={movie} alt="movies" /></figure>

                                </div>
                            </div>
                            <div class="p-4 lg:w-1/ md:w-1/3 ">
                                <div class="h-full flex flex-col items-center text-center">
                                    <figure><img src={movie} alt="movies" /></figure>

                                </div>
                            </div>

                            <div class="p-4 lg:w-1/ md:w-1/3 ">
                                <div class="h-full flex flex-col items-center text-center">
                                    <figure><img src={movie} alt="movies" /></figure>

                                </div>
                            </div>
                            <div class="p-4 lg:w-1/ md:w-1/3 ">
                                <div class="h-full flex flex-col items-center text-center">
                                    <figure><img src={movie} alt="movies" /></figure>

                                </div>
                            </div>
                            <div class="p-4 lg:w-1/ md:w-1/3 ">
                                <div class="h-full flex flex-col items-center text-center">
                                    <figure><img src={movie} alt="movies" /></figure>

                                </div>
                            </div>
                            <div class="p-4 lg:w-1/ md:w-1/3 ">
                                <div class="h-full flex flex-col items-center text-center">
                                    <figure><img src={movie} alt="movies" /></figure>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhatsMovie;