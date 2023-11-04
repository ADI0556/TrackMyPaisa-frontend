import React from 'react'

import about1 from '../Images/About/about-us.svg'
import about2 from '../Images/About/mobile-app.svg'
import employees from '../Images/About/office-colleagues.svg'
import trophy from '../Images/About/trophy.svg'
import customers from '../Images/About/shopping-big-sale.svg'
import ratings from '../Images/About/man-sharing-shopping-feedback.svg'

export default function About() {
  return (
    <div>
      <h2 className="mt-5 pt-4 text-center fw-bold h-font">About Us</h2>
      <div className="mb-4 h-line bg-dark"></div>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-md-5 mb-4 order-lg-1 order-md-1 order-2">
            <h3 className="mb-3">
              Who we are ?
            </h3>
            <p>
              At Track My Paisa, we are dedicated to helping individuals take charge of their financial well-being and shape a brighter financial future. We understand that managing money and achieving financial goals can be a complex and daunting task, which is why we've created a user-friendly platform designed to simplify the process and provide valuable insights.
            </p>
          </div>
          <div className="col-lg-5 col-md-5 mb-4 order-lg-2 order-md-2 order-1">
            <img src={about1} alt="Person" className="d-block mx-auto img-fluid ui-img" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-md-5 mb-4 order-lg-2 order-md-2 order-1">
            <h3 className="mb-3">
              Our Mission
            </h3>
            <p>
            Our mission is simple yet powerful to empower people to make informed financial decisions, save money, reduce debt, and turn their financial aspirations into reality. We believe that everyone, regardless of their financial background, deserves the tools and knowledge to build a secure and prosperous future.
            </p>
          </div>
          <div className="col-lg-5 col-md-5 mb-4 order-lg-1 order-md-1 order-2">
            <img src={about2} alt="Person" className="d-block mx-auto img-fluid ui-img" />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 px-4">
            <div className="bg-white rounded shadow p-4 border-top border-4 border-dark text-center box pop">
              <img src={trophy} alt="Hotel" width="75px" />
              <h4 className="mt-3">50+ Awards and Recognition</h4>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 px-4">
            <div className="bg-white rounded shadow p-4 border-top border-4 border-dark text-center box pop">
              <img src={customers} alt="Hotel" width="100px" />
              <h4 className="mt-3">2M+ CUSTOMERS</h4>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 px-4">
            <div className="bg-white rounded shadow p-4 border-top border-4 border-dark text-center box pop">
              <img src={ratings} alt="Hotel" width="100px" />
              <h4 className="mt-3">1M+ REVIEWS</h4>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 px-4">
            <div className="bg-white rounded shadow p-4 border-top border-4 border-dark text-center box pop">
              <img src={employees} alt="Hotel" width="100px" />
              <h4 className="mt-3">50K+ Employees</h4>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
