import React from 'react';

const Review = ({ review }) => {
    const { name, img, location, comment } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <div>
                    <p>{comment}</p>
                </div>
                <div className='flex items-center my-5'>
                    <div className="avatar">
                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div className='pl-5'>
                        <h4 className='font-bold'>{name}</h4>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;