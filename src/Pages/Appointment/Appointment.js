import React, { useState } from 'react';
import AppBanner from './AppBanner';
import AvailableServices from './AvailableServices';

const Appointment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <AppBanner date={date} setDate={setDate}></AppBanner>
            <AvailableServices date={date}></AvailableServices>
        </div>
    );
};

export default Appointment;