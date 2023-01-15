import React from 'react';
import bannerImg from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImg} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                <div className='lg:w-1/2 mb-14'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6 text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-bold text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner; 