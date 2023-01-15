import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20'>
            <div className="card lg:card-side shadow-xl bg-gradient-to-r from-secondary to-primary text-white">
                <figure className='p-6'>
                    <img src={clock} alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Sun - Thu : 9am - 8pm</p>
                    <p>Fri - Sat : OFF</p>
                </div>
            </div>
            <div className="card lg:card-side shadow-xl bg-accent text-white">
                <figure className='p-6'>
                    <img src={marker} alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Visit Our Location</h2>
                    <p>21, Shukrabad, Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className="card lg:card-side shadow-xl bg-gradient-to-r from-secondary to-primary text-white">
                <figure className='p-6'>
                    <img src={phone} alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Contact Us Now</h2>
                    <p>+880 1307 770233</p>
                    <p>adifkhanbd@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Info;