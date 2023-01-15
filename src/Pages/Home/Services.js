import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
    const services = [
        {
            _id: 1,
            img: fluoride,
            title: 'Fluoride Treatement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            _id: 2,
            img: cavity,
            title: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            _id: 3,
            img: whitening,
            title: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ]
    return (
        <div className='flex flex-col items-center'>
            <div className='text-center mt-16'>
                <h2 className='text-secondary font-bold'>OUR SERVICES</h2>
                <h3 className='text-3xl'>Service We Provide</h3>
            </div>
            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;