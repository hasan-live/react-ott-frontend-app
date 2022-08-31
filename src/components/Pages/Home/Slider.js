import React from 'react';
import slider1 from '../../../assets/images/home/slider/slider1.png';
import slider2 from '../../../assets/images/home/slider/slider2.png';
import slider3 from '../../../assets/images/home/slider/slider3.png';
import SliderReact from "react-slick";

const Slider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2500,
        centerPadding: "60px",
        className: "center",



        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.65,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.65,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.65,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            <section class="text-gray-600 py-10">

                <div>
                    <div class="flex flex-wrap m-4 "></div>
                    <SliderReact {...settings}>
                        <div class="p-4 lg:w-1/6 md:w-1/3 ">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={slider1} alt="movies" /></figure>

                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3 ">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={slider2} alt="movies" /></figure>

                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3 ">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={slider3} alt="movies" /></figure>

                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3 ">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={slider1} alt="movies" /></figure>

                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3 ">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={slider1} alt="movies" /></figure>

                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3 ">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={slider2} alt="movies" /></figure>

                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3 ">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={slider3} alt="movies" /></figure>

                            </div>
                        </div>



                    </SliderReact>

                </div>

            </section>


        </>
    );
};

export default Slider;