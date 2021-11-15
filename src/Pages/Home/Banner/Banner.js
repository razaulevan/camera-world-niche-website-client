import { borderRadius, color } from '@mui/system';
import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import banner1 from '../../../image/gopro5.jpg';
import banner2 from '../../../image/gopro6.jpg';
import banner3 from '../../../image/gopro7.png';
import './Banner.css';

const Banner = () => {
    return (
        <div style={{ backgroundColor: '#575555', color: "#FFFFFF" }}>


            <Container fluid  >
                <Row >
                    <Col lg={8} md={12} xs={12}>
                        <Carousel >
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 mx-auto caro"
                                    src={banner3}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3 > </h3>
                                    <p className="text-black"></p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 mx-auto caro"
                                    src={banner1}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3 className="text-black"> </h3>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 mx-auto caro"
                                    src={banner2}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3 className="text-black"> </h3>

                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                    </Col>
                    <Col lg={4} md={12} xs={12} >
                        <h1 className='mt-3 mb-3'>Subscribe to GoPro</h1>
                        <div style={{ textAlign: 'left', }}>

                            <h4>Unlimited use of the Quik app</h4>
                            <h4>Up to 50% off at GoPro.com</h4>
                            <h4>Guaranteed camera replacement</h4>
                            <h4>Unlimited cloud 100% quality</h4>

                        </div>
                        <Button className='mt-3'> <a style={{ textDecoration: 'none', color: 'white' }} href="https://gopro.com/en/us/shop/subscribe-to-gopro-subscription/GoProPlusYearly.html"> Subscribe</a></Button>

                    </Col>
                </Row>


            </Container>


        </div >
    );
};

export default Banner;

