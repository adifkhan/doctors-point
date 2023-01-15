import React from 'react';
import footerBg from '../assets/images/footer.png';

const Footer = () => {
    return (
        <div className='pl-12'
            style={{ background: `url(${footerBg})`, backgroundSize: 'contain' }}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-500'>
                <div className='mt-12'>
                    <h3 className='font-bold mb-4'>SERVICES</h3>
                    <p className='my-2'>Emergency Checkup</p>
                    <p className='my-2'>Monthly Checkup</p>
                    <p className='my-2'>Weekly Checkup</p>
                    <p className='my-2'>Deep Checkup</p>
                </div>
                <div className='mt-12'>
                    <h3 className='font-bold mb-2'>ORAL HEALTH</h3>
                    <p className='my-2'>Flouride Treatment</p>
                    <p className='my-2'>Cavity Filling</p>
                    <p className='my-2'>Teeth Whitening</p>
                </div>
                <div className='mt-12'>
                    <h3 className='font-bold mb-2'>OUR ADDRESS</h3>
                    <p className='my-2'>21, Shukrabad, Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='text-center mt-20 mb-8'>
                <p><small>Copyright &copy; {new Date().getFullYear()} - All rights reserved</small></p>
            </div>
        </div>
    );
};

export default Footer;