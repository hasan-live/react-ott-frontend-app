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