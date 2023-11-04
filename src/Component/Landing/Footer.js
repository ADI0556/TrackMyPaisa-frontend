import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
const rupee = {
    color: 'green'
}
function Footer() {
    return (
        <div>
            <div className="container-fluid bg-white mt-5 shadow">
                <div className="row">
                    <div className="col-lg-4 p-4">
                        <h3 className="h-font fw-bold fs-3 mb-2">T<span style={rupee} className='fw-bold fs-3 h-font'>₹</span>ackMyPaisa</h3>
                        <p>Your Financial Navigator - Effortlessly manage your finances with our all-in-one platform. Record expenses, categorize spending, and set meaningful financial goals. From income tracking to expense organization, we provide the tools you need to master your money. Visualize your financial habits, plan your future, and take control of your financial journey with Track My Paisa. Your dreams are now within reach!</p>
                    </div>
                    <div className="col-lg-4 p-4">
                        <h5 className="mb-3">Links</h5>
                        <Link to="/" className="d-inline-block mb-2 text-dark text-decoration-none">Home</Link><br />
                        <Link to="/" className="d-inline-block mb-2 text-dark text-decoration-none">Dashboard</Link><br />
                        <Link to="/about" className="d-inline-block mb-2 text-dark text-decoration-none">About Us</Link>
                    </div>
                    <div className="col-lg-4 p-4">
                        <h5 className="mb-3">Follow Us</h5>
                        <a href="https://twitter.com/intent/tweet"
                            target="_blank" rel="noopener noreferrer"
                            className="d-inline-block text-dark text-decoration-none">
                            <FontAwesomeIcon icon={faXTwitter} className='me-1' /> Twitter
                        </a><br />
                        <a href="https://www.facebook.com/your-facebook-page"
                            target="_blank" rel="noopener noreferrer"
                            className="d-inline-block text-dark text-decoration-none">
                            <FontAwesomeIcon icon={faFacebook} className='me-1' /> Facebook
                        </a><br />
                        <a href="https://www.instagram.com/your-instagram-profile"
                            target="_blank" rel="noopener noreferrer"
                            className="d-inline-block text-dark text-decoration-none">
                            <FontAwesomeIcon icon={faInstagram} className='me-1' /> Instagram
                        </a>
                    </div>
                </div>
            </div>
            <h6 className="text-center bg-dark text-white p-3 m-0">&copy; 2023 Developed & Authorized by TrackMyPaisa</h6>
        </div>
    );
}

export default Footer;