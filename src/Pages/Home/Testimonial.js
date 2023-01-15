import React from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';
import quote from '../../assets/icons/quote.svg';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Jon Snow',
            img: people1,
            location: 'California',
            comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            _id: 2,
            name: 'Kate denning',
            img: people2,
            location: 'London',
            comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            _id: 3,
            name: 'Jennifer Winslate',
            img: people3,
            location: 'New York',
            comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
    ]
    return (
        <div>
            <div className='pb-24' style={{ background: `url(${quote})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right', backgroundSize: '150px' }}>
                <h2 className='text-xl text-secondary font-bold'>Testimonial</h2>
                <h4 className='text-3xl'>What Our Patients Say</h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonial;