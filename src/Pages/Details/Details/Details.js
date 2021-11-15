import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';

import './Details.css';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import { Grid } from '@mui/material';

const Details = () => {
    const { cameraid } = useParams();

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();


    const onSubmit = data => {
        const newData = { ...data, status: "pending" }

        reset();
        axios.post('https://radiant-mesa-42940.herokuapp.com/orders', newData)
            .then(res => {

                console.log(newData);
                if (res.data.insertedId) {
                    alert('Product Added Successfully')


                }

            })

    }


    const [camera, setCamera] = useState({})

    useEffect(() => {
        fetch(`https://radiant-mesa-42940.herokuapp.com/cameras/${cameraid}`)
            .then(res => res.json())
            .then(data => setCamera(data));
        reset();

    }, [])




    return (

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                <h1>  {camera.name}</h1>
                <p style={{ textAlign: 'justify', marginLeft: '30px' }} > {camera.description} </p>
                <h3> Price: $ {camera.cost} </h3>
                <img style={{ width: "40%" }} src={camera.img} alt="" />

            </Grid>
            <Grid item xs={6}>
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>


                    <input placeholder="Your Name" defaultValue={user.displayName} {...register("name")} />

                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}

                    <input placeholder="Camera name" {...register("place")} />
                    <input placeholder="phone number" defaultValue="" {...register("phone")} />
                    {/* <input defaultValue="pending" {...register("pending")} /> */}
                    <button style={{ borderRadius: '5px', color: 'white', backgroundColor: '#FF009B' }} className=" mt-3 px-3 ">CONFIRM ORDER </button>


                </form>

            </Grid>
        </Grid>





    );
};

export default Details;