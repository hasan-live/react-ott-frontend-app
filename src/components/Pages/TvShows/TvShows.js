import React from 'react';
import movie1 from '../../../assets/images/Movies/movie1.png';
import movie2 from '../../../assets/images/Movies/movie2.png';
import movie3 from '../../../assets/images/Movies/movie3.png';
import Slider from "react-slick";

const TvShows = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
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
                        <h1 class="text-3xl font-bold  title-font mb-4  text-gray-900 uppercase">Tv Shows</h1>
                    </div>
                </div>


                <div>
                    <div class="flex flex-wrap m-4 "></div>
                    <Slider {...settings}>
                        <div class="p-4 lg:w-1/6 md:w-1/3 ">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={movie1} alt="movies" /></figure>
                                <div class="w-full ">
                                    <h2 class="card-title ">
                                        Take Out Tango
                                        {/* <div class="badge badge-secondary">NEW</div> */}
                                    </h2>
                                    <p><span className='flex items-start m-1'>Episode : 24</span ></p>
                                    <div class="card-actions justify-between">
                                        <div class="rating items-center">
                                            <input type="radio" name="rating-1" class="mask mask-star" />
                                            <div class="badge badge-primary ">4.95</div>
                                        </div>
                                        <div class=""></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3">
                            <div class="h-full flex flex-col items-center text-center">

                                <figure><img src={movie2} alt="movies" /></figure>
                                <div class="w-full">
                                    <h2 class="card-title">
                                        Take Out Tango
                                    </h2>
                                    <p className='flex items-start m-1'>2018 <span className='ml-2'>2h 3m</span></p>
                                    <div class="card-actions justify-between">
                                        <div class="rating items-center">
                                            <input type="radio" name="rating-1" class="mask mask-star" />
                                            <div class="badge badge-primary ">4.95</div>
                                        </div>
                                        <div class=""></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3">
                            <div class="h-full flex flex-col items-center text-center">

                                <figure><img src={movie3} alt="movies" /></figure>
                                <div class="w-full">
                                    <h2 class="card-title">
                                        Take Out Tango
                                        {/* <div class="badge badge-secondary">NEW</div> */}
                                    </h2>
                                    <p className='flex items-start m-1'>2018 <span className='ml-2'>2h 3m</span></p>
                                    <div class="card-actions justify-between">
                                        <div class="rating items-center">
                                            <input type="radio" name="rating-1" class="mask mask-star" />
                                            <div class="badge badge-primary ">4.95</div>
                                        </div>
                                        <div class=""></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3">
                            <div class="h-full flex flex-col items-center text-center">

                                <figure><img src={movie1} alt="movies" /></figure>
                                <div class="w-full">
                                    <h2 class="card-title">
                                        Take Out Tango
                                        {/* <div class="badge badge-secondary">NEW</div> */}
                                    </h2>
                                    <p className='flex items-start m-1'>2018 <span className='ml-2'>2h 3m</span></p>
                                    <div class="card-actions justify-between">
                                        <div class="rating items-center">
                                            <input type="radio" name="rating-1" class="mask mask-star" />
                                            <div class="badge badge-primary ">4.95</div>
                                        </div>
                                        <div class=""></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={movie1} alt="movies" /></figure>
                                <div class="w-full ">
                                    <h2 class="card-title ">
                                        Take Out Tango
                                        {/* <div class="badge badge-secondary">NEW</div> */}
                                    </h2>
                                    <p><span className='flex items-start m-1'>Episode : 24</span></p>
                                    <div class="card-actions justify-between">
                                        <div class="rating items-center">
                                            <input type="radio" name="rating-1" class="mask mask-star" />
                                            <div class="badge badge-primary ">4.95</div>
                                        </div>
                                        <div class=""></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3">
                            <div class="h-full flex flex-col items-center text-center">

                                <figure><img src={movie3} alt="movies" /></figure>
                                <div class="w-full">
                                    <h2 class="card-title">
                                        Take Out Tango
                                        {/* <div class="badge badge-secondary">NEW</div> */}
                                    </h2>
                                    <p className='flex items-start m-1'>2018 <span className='ml-2'>2h 3m</span></p>
                                    <div class="card-actions justify-between">
                                        <div class="rating items-center">
                                            <input type="radio" name="rating-1" class="mask mask-star" />
                                            <div class="badge badge-primary ">4.95</div>
                                        </div>
                                        <div class=""></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3 ">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={movie1} alt="movies" /></figure>
                                <div class="w-full ">
                                    <h2 class="card-title ">
                                        Take Out Tango
                                        {/* <div class="badge badge-secondary">NEW</div> */}
                                    </h2>
                                    <p><span className='flex items-start m-1'>Episode : 24</span ></p>
                                    <div class="card-actions justify-between">
                                        <div class="rating items-center">
                                            <input type="radio" name="rating-1" class="mask mask-star" />
                                            <div class="badge badge-primary ">4.95</div>
                                        </div>
                                        <div class=""></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3">
                            <div class="h-full flex flex-col items-center text-center">

                                <figure><img src={movie2} alt="movies" /></figure>
                                <div class="w-full">
                                    <h2 class="card-title">
                                        Take Out Tango
                                    </h2>
                                    <p className='flex items-start m-1'>2018 <span className='ml-2'>2h 3m</span></p>
                                    <div class="card-actions justify-between">
                                        <div class="rating items-center">
                                            <input type="radio" name="rating-1" class="mask mask-star" />
                                            <div class="badge badge-primary ">4.95</div>
                                        </div>
                                        <div class=""></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3">
                            <div class="h-full flex flex-col items-center text-center">

                                <figure><img src={movie3} alt="movies" /></figure>
                                <div class="w-full">
                                    <h2 class="card-title">
                                        Take Out Tango
                                        {/* <div class="badge badge-secondary">NEW</div> */}
                                    </h2>
                                    <p className='flex items-start m-1'>2018 <span className='ml-2'>2h 3m</span></p>
                                    <div class="card-actions justify-between">
                                        <div class="rating items-center">
                                            <input type="radio" name="rating-1" class="mask mask-star" />
                                            <div class="badge badge-primary ">4.95</div>
                                        </div>
                                        <div class=""></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3">
                            <div class="h-full flex flex-col items-center text-center">

                                <figure><img src={movie1} alt="movies" /></figure>
                                <div class="w-full">
                                    <h2 class="card-title">
                                        Take Out Tango
                                        {/* <div class="badge badge-secondary">NEW</div> */}
                                    </h2>
                                    <p className='flex items-start m-1'>2018 <span className='ml-2'>2h 3m</span></p>
                                    <div class="card-actions justify-between">
                                        <div class="rating items-center">
                                            <input type="radio" name="rating-1" class="mask mask-star" />
                                            <div class="badge badge-primary ">4.95</div>
                                        </div>
                                        <div class=""></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={movie1} alt="movies" /></figure>
                                <div class="w-full ">
                                    <h2 class="card-title ">
                                        Take Out Tango
                                        {/* <div class="badge badge-secondary">NEW</div> */}
                                    </h2>
                                    <p><span className='flex items-start m-1'>Episode : 24</span></p>
                                    <div class="card-actions justify-between">
                                        <div class="rating items-center">
                                            <input type="radio" name="rating-1" class="mask mask-star" />
                                            <div class="badge badge-primary ">4.95</div>
                                        </div>
                                        <div class=""></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/6 md:w-1/3">
                            <div class="h-full flex flex-col items-center text-center">
                                <figure><img src={movie3} alt="movies" /></figure>
                                <div class="w-full">
                                    <h2 class="card-title">
                                        Take Out Tango
                                        {/* <div class="badge badge-secondary">NEW</div> */}
                                    </h2>
                                    <p className='flex items-start m-1'>2018 <span className='ml-2'>2h 3m</span></p>
                                    <div class="card-actions justify-between">
                                        <div class="rating items-center">
                                            <input type="radio" name="rating-1" class="mask mask-star" />
                                            <div class="badge badge-primary ">4.95</div>
                                        </div>
                                        <div class=""></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </Slider>
                    <div className='mt-24 text-center'>
                        <button class="btn btn-primary text-white  ">View More</button>

                    </div>

                </div>


            </section>


        </>
    );
};

export default TvShows;