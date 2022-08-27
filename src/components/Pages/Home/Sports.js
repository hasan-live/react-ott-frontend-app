import React from 'react';
import sports1 from '../../../assets/images/home/sports/sports1.png';
import Slider from "react-slick";


const Sports = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <>

            {/* <div>
                <h2>Center Mode</h2>
                <Slider {...settings}>
                    <div>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                            class="block w-full"
                            alt="Wild Landscape"
                        />
                    </div>
                    <div>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                            class="block w-full"
                            alt="Camera"
                        />
                    </div>
                    <div>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                            class="block w-full"
                            alt="Exotic Fruits"
                        />
                    </div>
                    <div>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                            class="block w-full"
                            alt="Exotic Fruits"
                        />
                    </div>

                </Slider>
            </div> */}

            <section class="text-gray-600 ">
            <div class="container px-5 py-24 mx-auto">
                <div>
                <div class="flex flex-col text-center w-full  items-start mb-3">
                        <h1 class="text-2xl font-bold  title-font mb-4 text-gray-900 uppercase">Sports</h1>
                    </div>
                   
                    <Slider {...settings}>
                    <div class="flex flex-wrap -m-4"></div>
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

                    </Slider>
                </div>
                </div>
            </section>


            {/* <section class="text-gray-600 ">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full  items-start mb-3">
                        <h1 class="text-2xl font-bold  title-font mb-4 text-gray-900 uppercase">Sports</h1>
                    </div>

                    <div class="flex flex-wrap -m-4">

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


            </section> */}
        </>
    );
};

export default Sports;