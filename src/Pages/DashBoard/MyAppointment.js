import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {

    const [user] = useAuthState(auth);
    const [appointment, setAppointment] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setAppointment(data);
                })
        }
    }, [user]);

    return (
        <div>
            <div className="overflow-x-auto mt-4">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointment.map((appo, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{appo.service}</td>
                                    <td>{appo.date}</td>
                                    <td>{appo.slot}</td>
                                    <td><label className='text-white bg-accent rounded-full py-1 px-2'>✕</label></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;