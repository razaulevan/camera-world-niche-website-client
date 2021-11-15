import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ShowReview from '../../ShowReview/ShowReview';

const Review = () => {
    const [ratings, setRatings] = useState([])

    useEffect(() => {
        fetch(`https://radiant-mesa-42940.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => setRatings(data));

    }, [])

    return (
        <div style={{ backgroundColor: 'rgb(199, 192, 192)' }} id="reviews" className="mt-3 mx-auto py-5">
            <h1>Customer's Feedback</h1>

            <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 g-3  mb-5">
                {

                    ratings.map(rating => <ShowReview
                        key={rating._id}

                        rating={rating}>
                    </ShowReview>



                    )
                }

            </div>

        </div>
    );
};

export default Review;

