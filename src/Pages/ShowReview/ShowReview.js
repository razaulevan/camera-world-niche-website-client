import { Rating } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './ShowReview.css';

const ShowReview = ({ rating }) => {

    const { name, review, value } = rating;
    return (
        <div >

            <div className="col mt-5 mx-auto">
                <div className="review-card review-container">

                    <div className="p-2">

                        <p>{review}</p>
                        <Box
                            sx={{
                                '& > legend': { mt: 2 },
                            }}
                        >


                            <Rating name="read-only" value={value} readOnly />

                        </Box>
                        <h6>......................"{name}"</h6>




                    </div>

                </div>
            </div>

        </div>
    );
};

export default ShowReview;