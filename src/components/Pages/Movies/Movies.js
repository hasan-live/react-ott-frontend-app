import React from 'react';
import movie1 from '../../../assets/images/Movies/movie1.png';

const Movies = () => {
    return (
        <>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={movie1} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                    Take Out Tango
                        {/* <div class="badge badge-secondary">NEW</div> */}
                    </h2>
                    <p>2018 <span>2h 3m</span></p>
                    <div class="card-actions justify-between">
                        <div class="rating items-center">
                            <input type="radio" name="rating-1" class="mask mask-star" />
                            <div class="badge badge-outline">4.95</div>
                        </div>
                       
                        <div class="badge badge-outline">৳200</div>
                    </div>
                </div>
            </div>

           
        </>
    );
};

export default Movies;