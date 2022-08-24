import React from 'react';
import movie1 from '../../../assets/images/Movies/movie1.png';
import movie2 from '../../../assets/images/Movies/movie2.png';
import movie3 from '../../../assets/images/Movies/movie3.png';

const TvShows = () => {
    return (
        <>
            <section class="text-gray-600 ">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full  items-start mb-3">
                        <h1 class="text-2xl font-bold  title-font mb-4 text-gray-900 uppercase">Tv Shows</h1>
                    </div>

                    <div class="flex flex-wrap -m-4 ">
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

                    </div>

                    <div className='mt-24 text-center'>
                    <button class="btn btn-primary text-white  ">View More</button>

                </div>
                </div>
                
            </section>


        </>
    );
};

export default TvShows;