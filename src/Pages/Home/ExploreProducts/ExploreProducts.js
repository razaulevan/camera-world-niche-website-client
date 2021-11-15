import React from 'react';
import { Link } from 'react-router-dom';
import './ExploreProduct.css';

const ExploreProducts = ({ product }) => {
    const { _id, img, name, description, cost } = product;

    console.log(product);
    return (
        <div>

            <div className="col mt-5 mx-auto">
                <div className="explore explore-container">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className="p-2">
                        <h2> {name}</h2>
                        <p>{description.slice(0, 200)}</p>
                        <h3> Cost: {cost} BDT</h3>
                        <Link to={`/details/${_id}`}><button className="btn btn-primary">Buy Now</button></Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ExploreProducts;