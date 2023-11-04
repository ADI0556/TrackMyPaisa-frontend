import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ReachUs = () => {
    return (
        <div>
            <h2 className="mt-5 pt-4 text-center fw-bold h-font">Reach Us</h2>
            <div className="h-line bg-dark mb-4"></div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-8 col-md-8 p-4 mb-lg-0 mb-3 bg-white rounded-2 shadow">
                        <iframe
                            className="w-100 rounded"
                            height="320px"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.623759629409!2d77.68835991082707!3d12.931886315694735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13a91254b703%3A0x23f3ee63d9fed2c9!2sEmpower!5e0!3m2!1sen!2sin!4v1697168750095!5m2!1sen!2sin"
                            loading="lazy"
                            title="Contact Map"
                        ></iframe>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="bg-white p-4 rounded-2 shadow mb-4">
                            <h5>Contact Us</h5>
                            <a
                                href={`tel: +919284014492`}
                                className="d-block mb-2 text-decoration-none text-dark ms-5"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faPhone} className='me-2'/>+919284014492
                            </a>
                            <a
                                href={`mailto: adarshshetty338@gmail.com`}
                                className="d-block text-decoration-none text-dark ms-5"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faEnvelope} className='me-2'/>
                                adarshshetty338@gmail.com
                            </a>
                        </div>

                        <div className="bg-white p-4 rounded-2 shadow mb-4">
                            <h5>Follow Us</h5>

                            <a href="https://twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer" className="d-block mb-3">
                                <span className="badge bg-light text-dark fs-6 p-2 ms-5">
                                    <FontAwesomeIcon icon={faXTwitter} className='me-2'/>Twitter
                                </span>
                            </a>

                            <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer" className="d-block mb-3">
                                <span className="badge bg-light text-dark fs-6 p-2 ms-5">
                                    <FontAwesomeIcon icon={faInstagram} className='me-2'/>Instagram
                                </span>
                            </a>
                            <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer" className="d-block">
                                <span className="badge bg-light text-dark fs-6 p-2 ms-5">
                                    <FontAwesomeIcon icon={faFacebook} className='me-2' /> Facebook
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReachUs;
