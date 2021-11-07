import React from 'react';
import './Specialized.css';
import image1 from './2003121.jpg'
import image2 from './5c46ed2b006c9c000123ca1a.jpg'
import image3 from './happy-dentist-and-patient.jpg'
import image4 from './images (3).jpg'
import image5 from './Tooth-extraction.jpg'
import image6 from './WisdomTeeth.jpg'

const Specialized = () => {
    return (
        <div className="container g-5 mb-5">
            <h1 className='mt-5 text-center text-danger'>We Specialized In</h1>
            <h4 className='text-center mb-5'>Find out our best specialized work from top notch doctor</h4>
            <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-5">
                <div className="col">
                    <div className="card">
                        <img src={image1} className="img-fluid w-100 mx-auto img-rounded h-50 " alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title text-danger ">Dental Treatment</h5>
                            <p className="card-text">Welcome to MediCare — it's quite a ride! Have questions about baby sleep habits, baby care and feeding, health, development, and safety?</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={image2} className="img-fluid w-100 mx-auto img-rounded h-50 " alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title text-danger ">Primary Health Care</h5>
                            <p className="card-text">Welcome to MediCare — it's quite a ride! Have questions about baby sleep habits, baby care and feeding, health, development, and safety?</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={image3} className="img-fluid w-100 mx-auto img-rounded  h-50 " alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title text-danger ">Heart Treatment</h5>
                            <p className="card-text">Welcome to MediCare — it's quite a ride! Have questions about baby sleep habits, baby care and feeding, health, development, and safety?</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={image4} className="img-fluid w-100 mx-auto img-rounded  h-50 " alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title text-danger ">Baby Care</h5>
                            <p className="card-text">Welcome to MediCare — it's quite a ride! Have questions about baby sleep habits, baby care and feeding, health, development, and safety?</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={image5} className="img-fluid w-100 mx-auto img-rounded  h-50 " alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title text-danger ">Neurology Care</h5>
                            <p className="card-text">Welcome to MediCare — it's quite a ride! Have questions about baby sleep habits, baby care and feeding, health, development, and safety?</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={image6} className="img-fluid w-100 mx-auto img-rounded  h-50 " alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title text-danger ">Pregnency Care</h5>
                            <p className="card-text">Welcome to MediCare — it's quite a ride! Have questions about baby sleep habits, baby care and feeding, health, development, and safety?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specialized;
