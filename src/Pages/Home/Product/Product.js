import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {


    const { _id, name, cost, img, description } = product;

    return (
        <div>

            <div className="col mt-5 mx-auto">
                <div className="card cart-container">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className="p-2">
                        <h2>{name}</h2>
                        <p>{description.slice(0, 200)}</p>
                        <h3> Price: ${cost} </h3>
                        <Link to={`/details/${_id}`}><button className="btn btn-primary">Buy Now</button></Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Product;