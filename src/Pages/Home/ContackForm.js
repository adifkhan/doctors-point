import React from 'react';
import bg from '../../assets/images/appointment.png';

const ContackForm = () => {
    return (
        <section style={{ background: `url(${bg})` }}>
            <div className='py-12 flex flex-col items-center my-12'>
                <div className='text-center'>
                    <h2 className='text-secondary font-bold'>Contact Us</h2>
                    <h4 className='text-2xl text-white'>Stay Connected With Us</h4>
                </div>
                <div>
                    <form className='my-5 flex flex-col items-center'>
                        <input className='bg-white w-80 p-1 rounded m-1' type="email" name="email" placeholder='Email Address' id="" />
                        <input className='bg-white w-80 p-1 rounded m-1' type="text" name="subject" placeholder='Subject' id="" />
                        <textarea className='bg-white w-80 p-1 rounded m-1' name="message" id="" cols="30" rows="4" placeholder='Your Message'></textarea>
                        <input className='btn btn-primary bg-gradient-to-r from-secondary to-primary text-bold text-white w-24 mt-5' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContackForm;