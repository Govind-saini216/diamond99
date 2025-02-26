import React, { useState } from 'react';

const ChangePassword = () => {
    // State to manage form input values
    const [formData, setFormData] = useState({
        // password: '',
        // newPassword: '',
        // newPasswordConfirm: ''
    });
    const initialFormData = {
        password: '',
        newPassword: '',
        newPasswordConfirm: ''
    };
    const [notificationMessage, setNotificationMessage] = useState('');
    const [showNotification, setShowNotification] = useState(false);
    const [isReversing, setIsReversing] = useState(false);

    // Dummy correct password for validation
    const correctPassword = 'Akshay123'; // Replace with the actual password
    // State to handle validation error messages
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false); // New state to handle form submission
    // Regular expression for password validation with minimum length
    // Must contain at least 1 uppercase, 1 lowercase, 1 number, and be at least 3 characters long
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{3,}$/;

    // Validate the entire form (for submit) or individual fields (for live validation)
    const validateField = (name, value) => {
        const newErrors = { ...errors };

        if (name === 'password' || name === 'all') {
            const passwordValue = name === 'password' ? value : formData.password;

            if (!passwordValue) {
                newErrors.password = 'Current Password is required';
            } else if (passwordValue.length < 3) {
                newErrors.password = 'Current Password must be at least 3 characters long';
            } else {
                delete newErrors.password;
            }
        }

        // Validation for the new password
        if (name === 'newPassword' || name === 'all') {
            const newPasswordValue = name === 'newPassword' ? value : formData.newPassword;

            if (!newPasswordValue) {
                newErrors.newPassword = 'New Password is required';
            } else if (newPasswordValue.length < 3) {
                newErrors.newPassword = 'New Password must be at least 3 characters long';
            } else if (!passwordRegex.test(newPasswordValue)) {
                newErrors.newPassword = 'New Password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number';
            } else {
                delete newErrors.newPassword;
            }
        }

        // Validation for the confirm password
        // Validation for the confirm password
        if (name === 'newPasswordConfirm' || name === 'all') {
            const confirmPassword = name === 'newPasswordConfirm' ? value : formData.newPasswordConfirm;
            // const newPassword = name === 'newPassword' ? value : formData.newPassword;

            if (!confirmPassword) {
                newErrors.newPasswordConfirm = 'New Password Confirmation is required';
            } else if (!passwordRegex.test(confirmPassword)) {
                newErrors.newPasswordConfirm = 'New Password Confirmation must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number';
            } else if (formData.newPassword !== confirmPassword) {
                newErrors.newPasswordConfirm = 'New Password Confirmation does not match';
            } else {
                delete newErrors.newPasswordConfirm;
            }
        }



        setErrors(newErrors);

        // Return true if there are no errors
        return Object.keys(newErrors).length === 0;
    };

    // Handler for input field changes with live validation
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Update form data
        setFormData({ ...formData, [name]: value });

        // Validate the specific field as the user types
        validateField(name, value);
    };

    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true); // Set the form as submitted

        if (validateField('all')) {
            if (formData.password !== correctPassword) {
                setShowNotification('Password is wrong');
                setIsReversing(false); // Start show animation

                // Reverse animation and hide notification after 4 seconds
                setTimeout(() => {
                    setIsReversing(true); // Start hide animation
                    setTimeout(() => setShowNotification(false), 350); // Hide after animation completes
                }, 4000);
                console.log(" id pass nahi h same hai");

            } else if (formData.password === formData.newPassword) {
                setShowNotification('Password Must not be same as previous password.');

                setIsReversing(false); // Start show animation

                // Reverse animation and hide notification after 4 seconds
                setTimeout(() => {
                    setIsReversing(true); // Start hide animation
                    setTimeout(() => setShowNotification(false), 350); // Hide after animation completes
                }, 4000);
                console.log("current pass and new passs same hai..");

            } else {
                console.log('Form submitted', formData);
                setShowNotification('Password change successfully');
                setIsReversing(false); // Start show animation

                // Reverse animation and hide notification after 4 seconds
                setTimeout(() => {
                    setIsReversing(true); // Start hide animation
                    setTimeout(() => setShowNotification(false), 350); // Hide after animation completes
                }, 9000);
                console.log("current pass and new passs same hai..");
                // setIsSubmitted(false); // Reset submission status
                // setFormData(initialFormData);
            }
        } else {
            console.log('Validation errors present');
        }
    };


    return (
        <>{/* Animated Notification */}
            {showNotification && (
                <div
                    className="go4109123758"
                    style={{
                        left: "0px",
                        right: "0px",
                        display: "flex",
                        position: "absolute",
                        transition: "230ms cubic-bezier(0.21, 1.02, 0.73, 1)",
                        transform: "translateY(0px)",
                        top: "16px",
                        justifyContent: "center"
                    }}
                >
                    <div
                        className="go2072408551"
                        style={{
                            animation: `0.35s cubic-bezier(0.21, 1.02, 0.73, 1) 0s 1 normal forwards running ${isReversing ? 'goOut3223188581' : 'go3223188581'
                                }  `,
                        }}
                    >
                        <div className="go685806154">
                            <div className="go1858758034"></div>
                            <div className="go1579819456">
                                <div className={showNotification === 'Password change successfully'
                                    ? ' go2344853693'
                                    : 'go2534082608 '}>
                                </div>

                            </div>
                        </div>
                        <div role="status" aria-live="polite" className="go3958317564">
                            {showNotification}
                        </div>
                    </div>
                </div>
            )}

            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Change Password</h4>
                </div>
                <div class="card-body">
                    <div class="report-form">
                        <form class="" onSubmit={handleSubmit}>
                            <div class="row row10">
                                <div class="mb-3 position-relative col-md-6">
                                    <label class="form-label">Current Password:</label>
                                    <input name="password" type="password" class="form-control" placeholder="Enter Current password" value={formData.password}
                                        onChange={handleInputChange} />
                                    {isSubmitted && errors.password && <p className="error-form">{errors.password}</p>}

                                </div>
                            </div>
                            <div class="row row10">
                                <div class="mb-3 position-relative col-md-6">
                                    <label class="form-label">New Password:</label>
                                    <input name="newPassword" type="password" class="form-control" placeholder="Enter New Password" value={formData.newPassword}
                                        onChange={handleInputChange}

                                    />
                                    {isSubmitted && errors.newPassword && <p className="error-form">{errors.newPassword}</p>}


                                </div>
                            </div>
                            <div class="row row10">
                                <div class="mb-4 position-relative col-md-6">
                                    <label class="form-label">Confirm Password:</label>
                                    <input name="newPasswordConfirm" type="password" class="form-control" placeholder="Confirm New Password" value={formData.newPasswordConfirm}
                                        onChange={handleInputChange} />
                                    {isSubmitted && errors.newPasswordConfirm && <p className="error-form">{errors.newPasswordConfirm}</p>}

                                </div>
                            </div>
                            <div class="row row10">
                                <div class="mb-3 col-md-6">
                                    <button type="submit" class="btn btn-primary btn-block w-100">Change Password</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChangePassword;
