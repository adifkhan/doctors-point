import React from 'react';
import bannerImg from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppBanner = ({ date, setDate }) => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse items-center">
                <img src={bannerImg} className="max-w-lg rounded-lg shadow-2xl ml-12" alt='' />
                <div className=' mb-14'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppBanner;