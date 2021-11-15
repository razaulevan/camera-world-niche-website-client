import { Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from 'react';
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const Reviews = () => {
    const [review, setReview] = useState('');
    const [value, setValue] = React.useState(0);
    const { user } = useAuth()
    const handleOnBlur = e => {
        setReview(e.target.value)
    }
    const handleSubmit = (e) => {
        const newReview = { name: user.displayName, email: user.email, review, value }
        console.log(newReview);
        fetch('https://radiant-mesa-42940.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Thanks for your Feedback')

                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <h1>Add a Review</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    name="review"
                    onBlur={handleOnBlur} />
                <br />
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                >
                    <Typography component="legend">Give your Rating</Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />

                </Box>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Reviews;