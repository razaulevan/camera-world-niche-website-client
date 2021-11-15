import React from 'react';
import Review from '../../Dashboard/Review/Review';
import ShowReview from '../../ShowReview/ShowReview';
import Accesories from '../Accesories/Accesories';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Products></Products>
            <Accesories></Accesories>
            {/* <ShowReview></ShowReview> */}
            <Review></Review>
        </div>
    );
};

export default Home;