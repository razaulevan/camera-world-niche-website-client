import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProducts.css';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();

        axios.post(`https://radiant-mesa-42940.herokuapp.com/cameras`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Service Added Successfully')

                }
            })
    }
    return (
        <div className="add-service">
            <h1>Add Products</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="product name" />
                <textarea {...register("description")} placeholder="Description" />
                <textarea {...register("cost")} placeholder="price " />
                <input  {...register("img")} placeholder="Image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;
