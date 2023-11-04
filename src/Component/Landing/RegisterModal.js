import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faLock,
  faPhone,
  faCalendarAlt,
  faStickyNote,
  faMapMarkerAlt,
  faUserPlus,
  faMapPin,
  faMessage,
  faKey
} from '@fortawesome/free-solid-svg-icons';
import UserService from '../../Service/UserService';

class RegisterModal extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      phoneNo: '',
      emailId: '',
      password: '',
      address: '',
      pincode: '',
      date: '',
      otp: '',
      enteredOtp: '',
      otpSent: false,
      successMessage: '',
      errorMessage: '',
      nameIsValid: true,
      emailIsValid: true,
      phoneIsValid: true,
      addressIsValid: true,
      pincodeIsValid: true,
      dateIsValid: true,
      passwordIsValid: true,
      cpassIsValid: true,
      otpVerified: false,
    };
    this.fnSignup = this.fnSignup.bind(this);
  }

  fnSendOtp() {
    const {
      name,
      emailId,
      phoneNo,
      password,
      address,
      pincode,
      date,
      cpass,
    } = this.state;

    // Basic form validation
    if (!name) {
      this.setState({ nameIsValid: false });
      return;
    } else {
      this.setState({ nameIsValid: true });
    }

    if (!emailId.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      this.setState({ emailIsValid: false });
      return;
    } else {
      this.setState({ emailIsValid: true });
    }

    if (!phoneNo.match(/^\d{10}$/)) {
      this.setState({ phoneIsValid: false });
      return;
    } else {
      this.setState({ phoneIsValid: true });
    }

    if (!date) {
      this.setState({ dateIsValid: false });
      return;
    } else {
      // Check if the date is between 18 and 100 years ago
      const selectedDate = new Date(date);
      const currentDate = new Date();
      const minDate = new Date(currentDate);
      minDate.setFullYear(currentDate.getFullYear() - 100);
      const maxDate = new Date(currentDate);
      maxDate.setFullYear(currentDate.getFullYear() - 18);

      if (selectedDate < minDate || selectedDate > maxDate) {
        this.setState({ dateIsValid: false });
        return;
      } else {
        this.setState({ dateIsValid: true });
      }
    }

    if (!address) {
      this.setState({ addressIsValid: false });
      return;
    } else {
      this.setState({ addressIsValid: true });
    }

    if (!pincode.match(/^\d{6}$/)) {
      this.setState({ pincodeIsValid: false });
      return;
    } else {
      this.setState({ pincodeIsValid: true });
    }


    if (!password.match(/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d.*\d).{8,}$/)) {
      this.setState({ passwordIsValid: false });
      return;
    } else {
      this.setState({ passwordIsValid: true });
    }

    if (cpass === password) {
      this.setState({ cpassIsValid: true });
    } else {
      this.setState({ cpassIsValid: false });
      return;
    }
    // Additional validation

    // If all validations pass, send the OTP
    fetch('http://localhost:3001/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: emailId }),
    })
      .then((response) => response.text())
      .then((data) => {
        this.setState({ otp: data, otpSent: true });
        this.displaySuccessMessage('OTP has been sent to your email. Check your inbox.');
      })
      .catch((error) => {
        this.displayErrorMessage('Error sending OTP');
      });
  }

  fnValidateOtp() {
    if (this.state.otp === this.state.enteredOtp) {
      this.displaySuccessMessage('OTP is verified successfully!');
      // Enable registration button after successful OTP verification
      this.setState({ otpVerified: true });
    } else {
      this.displayErrorMessage('Incorrect OTP. Please try again.');
    }
  }

  fnSignup() {
    // Only allow registration when OTP is verified
    if (this.state.otpVerified) {
      UserService.signup(this.state)
        .then((response) => {
          console.log(this.state);
          this.displaySuccessMessage('Registration is complete');
          // Close the Bootstrap modal
          const closeButton = document.querySelector('#registerModal [data-bs-dismiss="modal"]');
          // if (closeButton) {
          //   closeButton.click();
          // }
          setTimeout(() => {
            if (closeButton) {
              closeButton.click();
            }
            this.setState({
              name: '',
              phoneNo: '',
              emailId: '',
              password: '',
              address: '',
              pincode: '',
              date: '',
              otp: '',
              enteredOtp: '',
              otpSent: false,
              successMessage: '',
              errorMessage: '',
              nameIsValid: true,
              emailIsValid: true,
              phoneIsValid: true,
              addressIsValid: true,
              pincodeIsValid: true,
              dateIsValid: true,
              passwordIsValid: true,
              cpassIsValid: true,
              otpVerified: false,
            });
            // window.location.reload();
          }, 5000);
          // Refresh the page
          // window.location.reload();
        })
        .catch((err) => {
          this.displayErrorMessage('Error registering user');
        });
    } else {
      this.displayErrorMessage('Please verify OTP before registering.');
    }
  }

  displaySuccessMessage(message) {
    this.setState({ successMessage: message, errorMessage: '' });
    setTimeout(() => {
      this.setState({ successMessage: '' });
    }, 5000);
  }

  displayErrorMessage(message) {
    this.setState({ errorMessage: message, successMessage: '' });
    setTimeout(() => {
      this.setState({ errorMessage: '' });
    }, 5000);
  }

  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="registerModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <form id="register-form">
                <div className="modal-header">
                  <h1 className="modal-title fs-5 d-flex align-items-center">
                    <FontAwesomeIcon icon={faUserPlus} className="me-2" /> User Registration
                  </h1>
                  <button
                    type="reset"
                    className="btn-close shadow-none"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  {this.state.successMessage && (
                    <div className="alert alert-success">{this.state.successMessage}</div>
                  )}
                  {this.state.errorMessage && (
                    <div className="alert alert-danger">{this.state.errorMessage}</div>
                  )}
                  <span className="badge rounded-pill text-bg-light text-dark mb-3 text-wrap lh-base">
                    <FontAwesomeIcon icon={faStickyNote} className="me-2" /> Note: Your details must match with your ID (Aadhaar card, Passport, Driving License, etc.).
                  </span>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6 ps-0 mb-3">
                        <label className="form-label">
                          <FontAwesomeIcon icon={faUser} className="me-2" /> Name
                        </label>
                        <input
                          name="name"
                          type="text"
                          className={`form-control shadow-none ${this.state.nameIsValid ? '' : 'is-invalid'}`}
                          onChange={(event) => this.setState({ [event.target.name]: event.target.value })}
                          placeholder="Full Name"
                          required
                        />
                        {this.state.nameIsValid ? null : (
                          <div className="invalid-feedback">Name is required.</div>
                        )}
                      </div>
                      <div className="col-md-6 p-0 mb-3">
                        <label className="form-label">
                          <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Email address
                        </label>
                        <input
                          name="emailId"
                          type="email"
                          className={`form-control shadow-none ${this.state.emailIsValid ? '' : 'is-invalid'}`}
                          onChange={(event) => this.setState({ [event.target.name]: event.target.value })}
                          placeholder="Email"
                          required
                        />
                        {this.state.emailIsValid ? null : (
                          <div className="invalid-feedback">Invalid email address.</div>
                        )}
                      </div>
                      <div className="col-md-6 ps-0 mb-3">
                        <label className="form-label">
                          <FontAwesomeIcon icon={faPhone} className="ms-2 me-2" /> Phone Number
                        </label>
                        <input
                          name="phoneNo"
                          type="number"
                          className={`form-control shadow-none ${this.state.phoneIsValid ? '' : 'is-invalid'} required`}
                          placeholder="Phone Number"
                          onChange={(event) => this.setState({ [event.target.name]: event.target.value })}
                          required
                        />
                        {this.state.phoneIsValid ? null : (
                          <div className="invalid-feedback">Invalid phone number.</div>
                        )}
                      </div>
                      <div className="col-md-6 p-0 mb-3">
                        <label className="form-label">
                          <FontAwesomeIcon icon={faCalendarAlt} className="me-2" /> Date Of Birth
                        </label>
                        <input
                          name="date"
                          type="date"
                          className={`form-control shadow-none ${this.state.dateIsValid ? '' : 'is-invalid'}`}
                          onChange={(event) => this.setState({ [event.target.name]: event.target.value })}
                          required
                        />
                        {this.state.dateIsValid ? null : (
                          <div className="invalid-feedback">Date of Birth is required.</div>
                        )}
                      </div>
                      <div className="col-md-12 p-0 mb-3">
                        <label className="form-label">
                          <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> Address
                        </label>
                        <textarea
                          name="address"
                          className={`form-control shadow-none ${this.state.addressIsValid ? '' : 'is-invalid'}`}
                          rows="1"
                          onChange={(event) => this.setState({ [event.target.name]: event.target.value })}
                          placeholder="Street, Lane, City, State"
                          required
                        ></textarea>
                        {this.state.addressIsValid ? null : (
                          <div className="invalid-feedback">Address is required.</div>
                        )}
                      </div>
                      <div className="col-md-6 ps-0 mb-3">
                        <label className="form-label">
                          <FontAwesomeIcon icon={faMapPin} className="me-2" /> Pincode
                        </label>
                        <input
                          name="pincode"
                          type="number"
                          className={`form-control shadow-none ${this.state.pincodeIsValid ? '' : 'is-invalid'}`}
                          placeholder="Pincode"
                          onChange={(event) => this.setState({ [event.target.name]: event.target.value })}
                          required
                        />
                        {this.state.pincodeIsValid ? null : (
                          <div className="invalid-feedback">Pincode should contain 6 digits.</div>
                        )}
                      </div>
                      <div className="col-md-6 p-0 mb-3">
                        <label className="form-label">
                          <FontAwesomeIcon icon={faLock} className="me-2" /> Password
                        </label>
                        <input
                          name="password"
                          type="password"
                          className={`form-control shadow-none ${this.state.passwordIsValid ? '' : 'is-invalid'}`}
                          onChange={(event) => this.setState({ [event.target.name]: event.target.value })}
                          placeholder="Password"
                          required
                        />
                        {this.state.passwordIsValid ? null : (
                          <div className="invalid-feedback">Password must contain at least one capital letter, two numeric characters, one special character (@, $, !, %, *, ?, or &), and be at least 8 characters long.</div>
                        )}
                      </div>
                      <div className="col-md-6 ps-0 mb-3">
                        <label className="form-label">
                          <FontAwesomeIcon icon={faLock} className="me-2" /> Confirm Password
                        </label>
                        <input
                          name="cpass"
                          type="password"
                          className={`form-control shadow-none ${this.state.cpassIsValid ? '' : 'is-invalid'}`}
                          placeholder="Confirm Password"
                          onChange={(event) => this.setState({ [event.target.name]: event.target.value })}
                          required
                        />
                        {this.state.cpassIsValid ? null : (
                          <div className="invalid-feedback">Confirm password should match with password.</div>
                        )}
                      </div>
                      {this.state.otpSent ? (
                        <div className="col-md-6 ps-0 mb-3">
                          <label className="form-label">
                            <FontAwesomeIcon icon={faMessage} className='me-2' /> OTP
                          </label>
                          <input
                            name="enteredOtp"
                            type="text"
                            className="form-control shadow-none mb-3"
                            onChange={(event) => this.setState({ [event.target.name]: event.target.value })}
                            required
                          />
                          <button
                            type="button"
                            className="btn btn-dark shadow-none"
                            onClick={() => this.fnValidateOtp()}
                          >
                            <FontAwesomeIcon icon={faKey} className='me-2' />Validate OTP
                          </button>
                        </div>
                      ) : (
                        <div className="text-center my-1 mb-3 mt-3">
                          <button
                            type="button"
                            className="btn btn-dark shadow-none"
                            onClick={() => this.fnSendOtp()}
                          >
                            <FontAwesomeIcon icon={faKey} className='me-2' />Send OTP
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-center my-1">
                    <button
                      type="button"
                      className={`btn btn-dark shadow-none ${this.state.otpVerified ? '' : 'disabled'}`}
                      onClick={this.fnSignup}
                    >
                      <FontAwesomeIcon icon={faUserPlus} className="me-2" /> Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterModal;
