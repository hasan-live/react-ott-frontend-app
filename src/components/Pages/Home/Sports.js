import React, { useState } from 'react';
import sports1 from '../../../assets/images/home/sports/sports1.png';
import Slider from "react-slick";

const images = [sports1, sports1, sports1, sports1, sports1];

const Sports = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        beforeChange: (current, next) => setImageIndex(next),
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

    const [imageIndex, setImageIndex] = useState(0);

    return (
        <>

            <section class="text-gray-600 py-10">
                <div class="container max-width px-5   mx-auto">
                    <div class=" flex flex-col divide-y divide-dashed text-center w-full  items-start mb-3">
                        <h1 class="text-3xl font-bold  title-font mb-4  text-gray-900 uppercase">Tv Shows</h1>
                    </div>
                </div>


               
                    <div class="flex flex-wrap m-4 "></div>
                    <Slider {...settings}>
                        {
                            images.map((image, index) => (
                                <div class="p-4 lg:w-1/6 md:w-1/3" key={index}>
                                    <div class="h-full flex flex-col items-center text-center">
                                       
                                            <div className={index == imageIndex ? 'slide activeSlide' : 'slide'}>
                                            <figure>   <img src={image} alt='image' /> </figure>
                                            </div>
                                       
                                    </div>
                                </div>
                            ))
                        }

                    </Slider>
            </section>
        </>
    );
};

export default Sports;