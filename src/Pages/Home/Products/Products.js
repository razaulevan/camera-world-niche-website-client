import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`https://radiant-mesa-42940.herokuapp.com/cameras`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    let homeData = [];
    for (const data of products) {
        if (homeData.length <= 5) {
            homeData.push(data)

        }
    }


    return (

        <div style={{ backgroundColor: 'rgb(199, 192, 192)' }} id="products" className="mt-3 mx-auto py-2">
            <h1 className="py-3"> Purchage Your Dream Camera</h1>
            <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 g-3 services mb-5">
                {

                    homeData.map(product => <Product


                        key={product._id}
                        product={product}
                    ></Product>)
                }

            </div>

        </div>
    );
};


export default Products;