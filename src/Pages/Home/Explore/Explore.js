import React from 'react';
import { useEffect, useState } from 'react';
import ExploreProducts from '../ExploreProducts/ExploreProducts';

const Explore = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`https://radiant-mesa-42940.herokuapp.com/cameras`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div id="services" className="mt-3 mx-auto py-2">
            <h1 className="py-3"> Explore Camera World</h1>
            <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 g-3 services mb-5">
                {

                    products.map(product => <ExploreProducts


                        key={product._id}
                        product={product}
                    ></ExploreProducts>)
                }

            </div>

        </div>
    );
};

export default Explore;




