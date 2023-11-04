import React from 'react';
import svg1 from '../Images/facilities/budget.svg';
import svg2 from '../Images/facilities/stock-market.svg';
import svg3 from '../Images/facilities/customer-service.svg';
import svg4 from '../Images/facilities/education-window.svg';
import svg5 from '../Images/facilities/financial-investor.svg';
const OurServices = () => {

    return (
        <div>
            <h2 className="mt-5 pt-4 text-center fw-bold h-font">Our Services</h2>
            <div className="mb-4 h-line bg-dark"></div>
            <div className="container">
                <div className="row justify-content-evenly px-lg-0 px-md-0 px-5">
                    <div className="col-lg-2 col-md-2 text-center bg-white rounded-4 shadow py-4 my-3 border-top border-4 border-dark pop">
                        <img src={svg1} alt="service" width="80px" />
                        <h5 className="mt-3">Budget Management</h5>
                    </div>
                    <div className="col-lg-2 col-md-2 text-center bg-white rounded-4 shadow py-4 my-3 border-top border-4 border-dark pop">
                        <img src={svg2} alt="service" width="80px" />
                        <h5 className="mt-3">Expense Analytics</h5>
                    </div>
                    <div className="col-lg-2 col-md-2 text-center bg-white rounded-4 shadow py-4 my-3 border-top border-4 border-dark pop">
                        <img src={svg3} alt="service" width="80px" />
                        <h5 className="mt-3">Customer Support</h5>
                    </div>
                    <div className="col-lg-2 col-md-2 text-center bg-white rounded-4 shadow py-4 my-3 border-top border-4 border-dark pop">
                        <img src={svg4} alt="service" width="80px" />
                        <h5 className="mt-3">Educational Resources</h5>
                    </div>
                    <div className="col-lg-2 col-md-2 text-center bg-white rounded-4 shadow py-4 my-3 border-top border-4 border-dark pop">
                        <img src={svg5} alt="service" width="80px" />
                        <h5 className="mt-3">Financial Milestones</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
