import React from 'react';

import '../../Css/PricingPlan.css'; // CSS file should be in the same directory
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
const PricingPlan = () => {
    return (
        <div>
            <h2 className="mt-5 pt-4 text-center fw-bold h-font">Our Plans & Subscriptions</h2>
            <div className="mb-2 h-line bg-dark"></div>
            <div className="container">
                <div className="row d-flex justify-content-evenly">
                    <div className="col-lg-3 col-md-6 my-3">
                        <div className="pricingTable shadow-bottom">
                            <div className="pricing_heading">
                                <h3 className="title">Free</h3>
                                <span className="value">
                                    ₹0
                                    <span className="month">per month</span>
                                </span>
                            </div>
                            <div className="content">
                                <ul>
                                    <li>
                                        <span className="green-check me-1    ">
                                            <FontAwesomeIcon icon={faCircleCheck} />
                                        </span>
                                        Expense Tracking
                                    </li>
                                    <li>
                                        <span className="red-check me-1">
                                            <FontAwesomeIcon icon={faCircleXmark} />
                                        </span>
                                        Goal Setting
                                    </li>
                                    <li>
                                        <span className="red-check me-1">
                                            <FontAwesomeIcon icon={faCircleXmark} />
                                        </span>
                                        Basic Reports
                                    </li>
                                    <li>
                                        <span className="red-check me-1">
                                            <FontAwesomeIcon icon={faCircleXmark} />
                                        </span>
                                        Email Support
                                    </li>
                                    <li>
                                        <span className="red-check me-1">
                                            <FontAwesomeIcon icon={faCircleXmark} />
                                        </span>
                                        Customized Investment Plans
                                    </li>
                                </ul>
                                <div className="link">
                                    <a href="/" className='btn btn-sm btn-outline-dark shadow-none'>Purchase</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 my-3">
                        <div className="pricingTable">
                            <div className="pricing_heading">
                                <h3 className="title">Basic</h3>
                                <span className="value">
                                    ₹200
                                    <span className="month">per month</span>
                                </span>
                            </div>
                            <div className="content">
                                <ul>
                                    <li>
                                        <span className="green-check me-1    ">
                                            <FontAwesomeIcon icon={faCircleCheck} />
                                        </span>
                                        Expense Tracking
                                    </li>
                                    <li>
                                        <span className="green-check me-1">
                                            <FontAwesomeIcon icon={faCircleCheck} />
                                        </span>
                                        Goal Setting
                                    </li>
                                    <li>
                                        <span className="green-check me-1">
                                            <FontAwesomeIcon icon={faCircleCheck} />
                                        </span>
                                        Basic Reports
                                    </li>
                                    <li>
                                        <span className="red-check me-1">
                                            <FontAwesomeIcon icon={faCircleXmark} />
                                        </span>
                                        Email Support
                                    </li>
                                    <li>
                                        <span className="red-check me-1">
                                            <FontAwesomeIcon icon={faCircleXmark} />
                                        </span>
                                        Customized Investment Plans
                                    </li>
                                </ul>
                                <div className="link">
                                    <a href="/" className='btn btn-sm btn-outline-dark shadow-none'>Purchase</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 my-3">
                        <div className="pricingTable shadow-bottom">
                            <div className="pricing_heading">
                                <h3 className="title">Premium</h3>
                                <span className="value">
                                    ₹500
                                    <span className="month">per month</span>
                                </span>
                            </div>
                            <div className="content">
                                <ul>
                                    <li>
                                        <span className="green-check me-1    ">
                                            <FontAwesomeIcon icon={faCircleCheck} />
                                        </span>
                                        Expense Tracking
                                    </li>
                                    <li>
                                        <span className="green-check me-1">
                                            <FontAwesomeIcon icon={faCircleCheck} />
                                        </span>
                                        Goal Setting
                                    </li>
                                    <li>
                                        <span className="green-check me-1">
                                            <FontAwesomeIcon icon={faCircleCheck} />
                                        </span>
                                        Basic Reports
                                    </li>
                                    <li>
                                        <span className="green-check me-1">
                                            <FontAwesomeIcon icon={faCircleCheck} />
                                        </span>
                                        Email Support
                                    </li>
                                    <li>
                                        <span className="green-check me-1">
                                            <FontAwesomeIcon icon={faCircleCheck} />
                                        </span>
                                        Customized Investment Plans
                                    </li>
                                </ul>
                                <div className="link">
                                    <a href="/" className='btn btn-sm btn-outline-dark shadow-none'>Purchase</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPlan;
