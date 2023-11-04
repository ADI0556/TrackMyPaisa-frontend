import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import UserService from '../../Service/UserService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const rupee = {
    color: 'green',
};

const Header = () => {
    // Get the navigate function from react-router
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(UserService.isAuthenticated()); // Set initial state based on local storage
    const [showLogoutAlert, setShowLogoutAlert] = useState(false);
    // const [showDashboardAlert, setShowDashboardAlert] = useState(false);
    const [showLoginAlert, setShowLoginAlert] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        // Show the logout alert
        setShowLogoutAlert(true);
        // Hide the alert after a few seconds (e.g., 5 seconds)
        setTimeout(() => {
            setShowLogoutAlert(false);
        }, 5000);
        // Navigate to the home page after showing the alert
        setTimeout(() => {
            navigate('/'); // Replace '/' with the actual URL of your home page
        }, 5000);
    };

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        // Hide the login alert
        setShowLoginAlert(false);
    };

    const handleDashboardClick = () => {
        if (!isLoggedIn) {
            // Show the login alert
            setShowLoginAlert(true);
        } else {
            // Navigate to the dashboard
            navigate('/dashboard');
        }
    };

    return (
        <div className="navbar-fixed-top">
            <nav id="nav-bar" className="navbar navbar-expand-lg bg-white px-lg-3 py-lg-2 shadow-sm">
                <div className="container-fluid">
                    <Link className="navbar-brand me-5 fw-bold fs-3 h-font" to="/">
                        <h3 className="h-font fw-bold fs-3 mb-2">
                            T<span style={rupee} className="fw-bold fs-3 h-font">
                                ₹
                            </span>
                            ackMyPaisa
                        </h3>
                    </Link>
                    <button
                        className="navbar-toggler shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link me-2" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                {isLoggedIn ? (
                                    <Link className="nav-link me-2" to="/dashboard">Dashboard</Link>
                                ) : (
                                    <Link
                                        className="nav-link me-2"
                                        to="/"
                                        onClick={handleDashboardClick}
                                    >
                                        Dashboard
                                    </Link>
                                )}
                            </li>
                        </ul>
                        <div className="d-flex">
                            {isLoggedIn ? (
                                <button
                                    type="button"
                                    className="btn btn-outline-dark shadow-none"
                                    onClick={handleLogout}
                                >
                                    <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                                </button>
                            ) : (
                                <>
                                    <button
                                        type="button"
                                        className="btn btn-outline-dark shadow-none me-lg-3 me-2"
                                        data-bs-toggle="modal"
                                        data-bs-target="#loginModal"
                                    >
                                        <FontAwesomeIcon icon={faSignInAlt} className='me-2' /> Login
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-dark shadow-none"
                                        data-bs-toggle="modal"
                                        data-bs-target="#registerModal"
                                    >
                                        <FontAwesomeIcon icon={faUserPlus} /> Register
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            <LoginModal handleLoginSuccess={handleLoginSuccess} />
            <RegisterModal />
            {showLogoutAlert && (
                <div className="position-absolute end-0 m-3" style={{ zIndex: 1050 }}>
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        You have been logged out successfully.
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setShowLogoutAlert(false)}></button>
                    </div>
                </div>
            )}
            {showLoginAlert && (
                <div className="position-absolute end-0 m-3" style={{ zIndex: 1050 }}>
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        You must be logged in to access the Dashboard.
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setShowLoginAlert(false)}></button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
