import React from 'react';
import doctor from '../../assets/images/doctor-small.png';
import bg from '../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center my-12' style={{ background: `url(${bg})` }}>
            <div className="flex-1 hidden lg:block">
                <img src={doctor} className="max-w-sm rounded-lg lg:ml-28 mt-[-60px] mb-[-50]" alt='' />
            </div>
            <div className='flex-1 pr-12 pl-6'>
                <h1 className="text-2xl text-secondary font-bold">Appointment</h1>
                <h1 className="text-4xl text-white font-bold">Make an Appointment Today</h1>
                <p className="py-6 text-justify  text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English.</p>
                <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-bold text-white">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;