import React from 'react';
import sports1 from '../../../assets/images/home/sports/sports1.png';
import sports3 from '../../../assets/images/home/sports/sports3.png';
import Slider from "react-slick";

const Sports = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>

            <section class="text-gray-600 py-10">
                <div class="container max-width px-5   mx-auto">
                    <div class=" flex flex-col divide-y divide-dashed text-center w-full  items-start mb-3">
                        <h1 class="text-3xl font-bold  title-font mb-4  text-gray-900 uppercase">Trending</h1>
                    </div>
                </div>


                <div>
                    <div class="flex flex-wrap m-4 "></div>
                    <Slider {...settings}>
                        <div class="p-4 lg:w-1/6 md:w-1/3 ">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={sports1} alt="movies" /></figure>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3 ">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={sports3} alt="movies" /></figure>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3 ">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={sports1} alt="movies" /></figure>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3 ">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={sports3} alt="movies" /></figure>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3 ">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={sports1} alt="movies" /></figure>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3 ">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={sports3} alt="movies" /></figure>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3 ">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={sports1} alt="movies" /></figure>
                            </div>
                        </div>

                    </Slider>

                </div>

            </section>
        </>
    );
};

export default Sports;