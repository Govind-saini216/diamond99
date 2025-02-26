import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [msg, setMsg] = useState("");
    const [error, setError] = useState(false);

    const signupHandler = async (event) => {
        setMsg("");
        event.preventDefault();
        const name = event.target.username.value;
        const password = event.target.password.value;
        const confirm_password = event.target.confirm_password.value;

        if (name && password && confirm_password) {
            if (password === confirm_password) {
                try {
                    const response = await axios.post("http://localhost:5001/create-account", {
                        name,
                        password,
                    });
                    if (response.data.status === 1) {
                        event.target.reset();
                        setMsg(response.data.msg);
                        setError(false);
                    } else {
                        console.log(response.data.error);
                        setMsg(response.data.msg);
                        setError(true);
                    }
                } catch (error) {
                    setMsg(error.response?.data?.msg || "Request failed. Please try again.");
                    setError(true);
                }
            } else {
                setMsg("Both passwords must match");
                setError(true);
            }
        } else {
            setMsg("Please fill all fields");
            setError(true);
        }
    };


    return (
        <div className="login-page">
            <div className={`${error ? "text-red-500" : "text-green-500"} text-center font-bold`}>
                {msg}
            </div>
            <div className="login-box">
                <div className="logo-login"></div>
                <div className="login-form mt-4">
                    <h4 className="text-center login-title">
                        Sign Up <i className="fas fa-hand-point-down"></i>
                    </h4>
                    <form onSubmit={signupHandler}>
                        <div className="mb-4 input-group position-relative">
                            <input
                                className="form-control"
                                placeholder="Username"
                                type="text"
                                name="username"
                                required
                            />
                            <span className="input-group-text">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                        {/* <div className="mb-4 input-group position-relative">
                            <input
                                className="form-control"
                                placeholder="Email"
                                type="email"
                                name="email"
                                required
                            />
                            <span className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div> */}
                        <div className="mb-4 input-group position-relative">
                            <input
                                className="form-control"
                                placeholder="Password"
                                type="password"
                                name="password"
                                id="password"
                                required
                            />
                            <span className="input-group-text">
                                <i className="fas fa-key"></i>
                            </span>
                        </div>
                        <div className="mb-4 input-group position-relative">
                            <input
                                className="form-control"
                                placeholder="Confirm Password"
                                type="password"
                                name="confirm_password"
                                id="confirm-password"
                                required
                            />
                            <span className="input-group-text">
                                <i className="fas fa-key"></i>
                            </span>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary btn-block">
                                Sign Up <i className="fas fa-user-plus float-end mt-1"></i>
                            </button>
                        </div>
                        <Link to={"/login"} className="mt-2 d-block text-center">
                            Already have an account? Login
                        </Link>
                        <small className="recaptchaTerms mt-1">
                            This site is protected by reCAPTCHA and the Google{" "}
                            <a href="https://policies.google.com/privacy">Privacy Policy</a> and
                            <a href="https://policies.google.com/terms">Terms of Service</a> apply.
                        </small>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
