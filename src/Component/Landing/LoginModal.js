import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import UserService from '../../Service/UserService';

class LoginModal extends Component {
    constructor() {
        super();
        this.state = {
            emailId: '',
            password: '',
            emailIsValid: true,
            passwordIsValid: true,
            loginSuccess: false,
            loginError: false,
        };

        this.fnLogin = this.fnLogin.bind(this);
    }

    fnLogin() {
        const {
            emailId,
            password,
        } = this.state;

        if (!emailId) {
            this.setState({ emailIsValid: false });
            return;
        } else {
            this.setState({ emailIsValid: true });
        }

        if (!password) {
            this.setState({ passwordIsValid: false });
            return;
        } else {
            this.setState({ passwordIsValid: true });
        }

        if (this.state.emailId.trim() === '' || this.state.password.trim() === '') {
            this.setState({ loginSuccess: false, loginError: true });
            setTimeout(() => {
                this.setState({ loginError: false });
            }, 5000); // Hide the error message after 5 seconds
            return;
        }

        UserService.login(this.state)
            .then((response) => {
                if (response.data.token === 'Login failed') {
                    this.setState({ loginSuccess: false, loginError: true });
                    setTimeout(() => {
                        this.setState({ loginError: false });
                    }, 5000); // Hide the error message after 5 seconds
                } else {
                    this.setState({ loginSuccess: true, loginError: false });
                    setTimeout(() => {
                        this.setState({ loginSuccess: false });
                    }, 5000); // Hide the success message after 5 seconds
                    localStorage.setItem('token', response.data.token);
                    console.log(response.data.token)
                    this.props.handleLoginSuccess();
                    const closeButton = document.querySelector('#loginModal [data-bs-dismiss="modal"]');
                    // if (closeButton) {
                    //     closeButton.click();
                    // }
                    
                    //my
                    localStorage.setItem('email', this.state.emailId)
                    var myemail = localStorage.getItem('email')
                    console.log(myemail)
                    //byEmail
                    UserService.findUserByEmail(myemail).then(response => {
                        localStorage.setItem('userList', JSON.stringify(response.data));
                        console.log(localStorage.getItem('userList'));
                    }).catch(err => {
                        console.log("failed to get By email")
                    })
                    // window.location = '/dashboard'
                    //find user object by username
                    UserService.getAllUsers()
                        .then((response) => {
                            console.log(response.data);
                            localStorage.setItem('user', JSON.stringify(response.data));
                        })
                        .catch((response) => {
                            console.log(response.data);
                        })
                    UserService.getAllCategories().then(response => {
                        localStorage.setItem('catList', JSON.stringify(response.data));
                        console.log(localStorage.getItem('catList'));
                    }).catch((err) => {
                        console.log("failed to get all categories");
                    })
                    setTimeout(() => {
                        if (closeButton) {
                            closeButton.click();
                        }
                        this.setState({
                            emailId: '',
                            password: '',
                            emailIsValid: true,
                            passwordIsValid: true,
                            loginSuccess: false,
                            loginError: false
                        });
                    }, 5000);

                }
                // Reload the page after 5 seconds
                // window.location.reload();
            })
            .catch((err) => {
                this.setState({ loginSuccess: false, loginError: true });
                setTimeout(() => {
                    this.setState({ loginError: false });
                }, 5000); // Hide the error message after 5 seconds
                // alert("Login error");
            });
    }

    render() {
        return (
            <div>
                <div className="modal fade" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
                    aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form id="login-form">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5 d-flex align-items-center">
                                        <FontAwesomeIcon icon={faUser} className='me-2' /> User Login
                                    </h1>
                                    <button type="reset" className="btn-close shadow-none" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {this.state.loginSuccess && (
                                        <div className="alert alert-success">Login successful</div>
                                    )}
                                    {this.state.loginError && (
                                        <div className="alert alert-danger">Login failed. Please check your credentials.</div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            <FontAwesomeIcon icon={faEnvelope} className='me-2' />Email address
                                        </label>
                                        <input type="text" name="emailId" required className={`form-control shadow-none ${this.state.emailIsValid ? '' : 'is-invalid'}`} placeholder='Email'
                                            onChange={(event) => this.setState({ [event.target.name]: event.target.value })} />
                                        {this.state.emailIsValid ? null : (
                                            <div className="invalid-feedback">Email is required.</div>
                                        )}
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label fw-bold">
                                            <FontAwesomeIcon icon={faLock} className='me-2' />Password
                                        </label>
                                        <input type="password" name="password" required className={`form-control shadow-none ${this.state.passwordIsValid ? '' : 'is-invalid'}`} placeholder="Password"
                                            onChange={(event) => this.setState({ [event.target.name]: event.target.value })} />
                                        {this.state.passwordIsValid ? null : (
                                            <div className="invalid-feedback">Password is required.</div>
                                        )}
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <button type="button" className="btn btn-dark shadow-none" onClick={this.fnLogin}>
                                            <FontAwesomeIcon icon={faSignInAlt} className='me-2' />Login
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

export default LoginModal;
