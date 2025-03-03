import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // State to manage form inputs and errors
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        username: false,
        password: false
    });
    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform login logic here
        navigate('/home'); // Temporary redirect to the home page
    };
    const loginHandler = async (event) => {
        event.preventDefault();

        // Correctly access form data using event.target.elements
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        if (username != "" && password != "") {


        }
        console.log("Username:", username);
        console.log("Password:", password);


    }

    // Handle input changes and show live errors
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Live error display if input is empty
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: !value.trim()
        }));
    };

    const handleDemoLogin = () => {
        sessionStorage.setItem("isAuthenticated", "true");

        // Generate a unique session ID only during login
        const uniqueSessionId = Date.now().toString();
        localStorage.setItem("sessionId", uniqueSessionId);

        window.location.href = "/home"; // Navigate to the home page
    };

    return (
        <div class="login-page">
            <div class="login-box">
                <div class="logo-login">
                    <a href="/">
                        <img alt="Logo" src="https://sitethemedata.com/sitethemes/diamondexch99.com/front/logo.png" />
                    </a>
                </div>
                <div class="login-form mt-4">
                    <h4 class="text-center login-title">Login <i class="fas fa-hand-point-down"></i></h4>
                    <form onSubmit={loginHandler}>
                        <div class="mb-4 input-group position-relative">
                            <input
                                className="form-control"
                                placeholder="Username"
                                type="text"
                                name="username"
                                onChange={handleInputChange}
                            />
                            <span class="input-group-text">
                                <i class="fas fa-user"></i>
                            </span>
                            {errors.username && (
                                <p className="error-form">This input is required.</p>
                            )}
                        </div>
                        <div class="mb-4 input-group position-relative">
                            <input class="form-control" placeholder="Password" type="password" name="password" onChange={handleInputChange} />
                            <span class="input-group-text">
                                <i class="fas fa-key">
                                </i>
                            </span>
                            {errors.password && (
                                <p className="error-form">This input is required.</p>
                            )}
                        </div>
                        <div class="d-grid">
                            <button type="submit" class="btn btn-primary btn-block" >Login <i class="fas fa-sign-in-alt float-end mt-1"></i></button>
                            <button type="button" class="btn btn-primary btn-block mt-2" onClick={handleDemoLogin}>Login with demo ID<i class="fas fa-sign-in-alt float-end mt-1"></i></button>
                        </div>
                        <small class="recaptchaTerms mt-1">This site is protected by reCAPTCHA and the Google
                            <a href="https://policies.google.com/privacy">Privacy Policy</a> and<a href="https://policies.google.com/terms">Terms of Service</a> apply.</small>
                        <p class="mt-1"></p>
                        <section class="footer footer-login"><div class="footer-top"><div class="footer-links"><nav class="navbar navbar-expand-sm"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link" href="/terms-and-conditions" target="_blank"> Terms and Conditions </a></li><li class="nav-item"><a class="nav-link" href="/responsible-gaming" target="_blank"> Responsible Gaming </a></li></ul></nav></div><div class="support-detail"><h2>24X7 Support</h2><p></p></div><div class="social-icons-box"></div></div></section>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Login;
