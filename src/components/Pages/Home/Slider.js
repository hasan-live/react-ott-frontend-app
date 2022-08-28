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
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0, 
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "250px",
    className: "center",
    centerMode: true,
   
    
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