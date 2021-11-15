import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div className=" pt-2 footer-container mt-5">

                <div className="row w-75 p-3 mx-auto footer-detaill">
                    <div className=" pt-3 ps-3 pe-3  col-lg-5 col-md-5 col-12 col-sm-12">
                        <h3 className=""> @Hello Trekkers</h3>



                    </div>
                    <div className="  p-3 col-lg-3 col-md-3 col-12 col-sm-12">
                        <h3>CONTACT US</h3>
                        <p>Hotline : 01715868941, 0185768945 </p>

                    </div>

                    <div className=" p-3 col-lg-4 col-md-4 col-12 col-sm-12">
                        <h3>ANY QUERY?</h3>
                        <p>Email: info@hellotrekkerrs.com</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;