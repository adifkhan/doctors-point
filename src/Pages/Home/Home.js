import React from 'react';
import Banner from './Banner';
import ContackForm from './ContackForm';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import SpecialService from './SpecialService';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <SpecialService></SpecialService>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContackForm></ContackForm>
        </div>
    );
};

export default Home;