import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableServices = ({ date }) => {

    const [treatment, setTreatment] = useState(null);
    const formatedDate = format(date, 'PP');
    /* 
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/availableServices?date=${formatedDate}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [formatedDate]);
 */

    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () =>
        fetch(`http://localhost:5000/availableServices?date=${formatedDate}`).then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='text-center'>
            <div>
                <h3 className='text-xl text-secondary font-bold'>Available Services on {format(date, 'PP')}</h3>
            </div>
            <div className='grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-5 my-14'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {
                treatment && <BookingModal
                    treatment={treatment}
                    date={date}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableServices;