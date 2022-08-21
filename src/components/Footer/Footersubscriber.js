import React from 'react';

const Footersubscriber = () => {
    return (
        <>
            <footer class="footer p-10 bg-accent text-white">
                <div>
                    <div>
                        <div class="form-control w-80">
                            <label class="label">
                                <span class=" text-white font-bold ">Subscribe our newsletter for newest <br/>
                               movies updates</span>
                            </label>
                            <div class="relative">
                                <input type="text" placeholder="Type your email here" class="input input-bordered w-full pr-16 text-white" />
                                <button class="btn btn-secondary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <span class="text-center">All Over The <br/>
                        Bangladesh</span>
                </div>
            </footer>
        </>
    );
};

export default Footersubscriber;