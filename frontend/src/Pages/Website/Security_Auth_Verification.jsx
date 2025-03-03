import React, { useState, useEffect } from 'react';

const SecurityAuthVerification = () => {
    const [password, setPassword] = useState('');
    const [activeTab, setActiveTab] = useState(''); // Default active tab
    const [code, setCode] = useState('');
    const [showInstructions, setShowInstructions] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [isReversing, setIsReversing] = useState(false);

    // Dummy correct password for validation
    const correctPassword = 'Akshay123'; // Replace with the actual password

    // Load password from localStorage on component mount
    useEffect(() => {
        const savedPassword = localStorage.getItem('loginPassword');
        if (savedPassword) {
            setPassword(savedPassword);
        }
    }, []);

    // Handle input change and update local storage
    const handleInputChange = (e) => {
        const value = e.target.value.trim();
        setPassword(value);
        localStorage.setItem('loginPassword', value);
    };

    // Handle tab change
    const handleTabChange = (tab, e) => {
        e.preventDefault(); // Prevent page reload
        setActiveTab(tab);
        setPassword('')
        setShowInstructions(false); // Reset instructions visibility

        if (tab === 'mobile') {
            setTimeout(generateNewCode, 500); // Generate code after 0.5 second
        }
    };
    //Code Generator
    const generateNewCode = () => {
        // // const newCode = Math.floor(Math.random() * 900000) + 100000;
        // setCode(newCode);
    };
    const handleClick = () => {
        if (password === correctPassword) {
            setShowInstructions(true);
            setShowNotification(false);
        } else {
            setShowInstructions(false);
            setShowNotification(true);
            setIsReversing(false); // Start show animation

            // Reverse animation and hide notification after 4 seconds
            setTimeout(() => {
                setIsReversing(true); // Start hide animation
                setTimeout(() => setShowNotification(false), 350); // Hide after animation completes
            }, 4000);
        }
    };


    return (
        <> <div className="center-main-container report-page">
            <div className="center-container">
                {/* Animated Notification */}
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
                                    <div className="go2534082608"></div>
                                </div>
                            </div>
                            <div role="status" aria-live="polite" className="go3958317564">
                                User Password Not Valid.
                            </div>
                        </div>
                    </div>
                )}

                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Secure Auth Verification</h4>
                    </div>
                    <div className="card-body">
                        <div className="container-fluid mt-3 secure-auth">
                            <div className="row justify-content-center">
                                <div className="col-md-6 text-center">
                                    <div>
                                        <span>Secure Auth Verification Status:</span>
                                        <b className={`p-2 text-white ms-3 ${password ? 'bg-danger' : 'bg-danger'}`}>
                                            {/* {password ? 'Enabled' : 'Disabled'} */}
                                            Disabled
                                        </b>
                                    </div>

                                    <div className="mt-1">
                                        Please select below option to enable secure auth verification
                                    </div>

                                    {/* Tab Navigation */}
                                    <div className="nav nav-tabs" role="tablist">
                                        <div className="nav-item">
                                            <a
                                                role="tab"
                                                data-rr-ui-event-key="1"
                                                id="secure-auth-tabs-tab-1"
                                                aria-controls="secure-auth-tabs-tabpane-1"
                                                aria-selected={activeTab === 'mobile'}
                                                tabIndex={activeTab === 'mobile' ? '0' : '-1'}
                                                className={`nav-link ${activeTab === 'mobile' ? 'active' : ''}`}
                                                onClick={(e) => handleTabChange('mobile', e)}
                                                href="#"
                                            >
                                                Enable Using Mobile
                                            </a>
                                        </div>
                                        <div className="nav-item">
                                            <a
                                                role="tab"
                                                data-rr-ui-event-key="2"
                                                id="secure-auth-tabs-tab-2"
                                                aria-controls="secure-auth-tabs-tabpane-2"
                                                aria-selected={activeTab === 'telegram'}
                                                tabIndex={activeTab === 'telegram' ? '0' : '-1'}
                                                className={`nav-link ${activeTab === 'telegram' ? 'active' : ''}`}
                                                onClick={(e) => handleTabChange('telegram', e)}
                                                href="#"
                                            >
                                                Enable Using Telegram
                                            </a>
                                        </div>
                                    </div>

                                    {/* Tab Content */}
                                    <div className="tab-content">
                                        {/* Mobile Tab Content */}
                                        <div
                                            role="tabpanel"
                                            id="secure-auth-tabs-tabpane-1"
                                            aria-labelledby="secure-auth-tabs-tab-1"
                                            className={`fade tab-pane ${activeTab === 'mobile' ? 'active show' : ''}`}
                                        >
                                            <div>Please enter below auth code in your 'Secure Auth Verification App'.</div>
                                            <div className="verification-code mt-1">782347</div>
                                            <div className="mt-1">
                                                <b>
                                                    If you haven't downloaded,<br />
                                                    please download 'Secure Auth Verification App' from below link.
                                                </b>
                                            </div>
                                            <div className="mt-1">
                                                Using this app you will receive auth code during login authentication
                                            </div>
                                            <div className="mt-1">
                                                <a
                                                    target="_blank"
                                                    href="https://dataobj.ecoassetsservice.com/secure-auth-apk/SecureAuthApp-2.0.apk"
                                                    rel="noreferrer"
                                                >
                                                    <button className="btn btn-success">
                                                        <div>
                                                            <i className="fab fa-android"></i>
                                                        </div>
                                                        <div className="ms-2">
                                                            <b>DOWNLOAD</b>
                                                            <br />
                                                            <span>On the android</span>
                                                        </div>
                                                    </button>
                                                </a>
                                            </div>
                                        </div>

                                        {/* Telegram Tab Content */}
                                        <div
                                            role="tabpanel"
                                            id="secure-auth-tabs-tabpane-2"
                                            aria-labelledby="secure-auth-tabs-tab-2"
                                            className={`fade tab-pane ${activeTab === 'telegram' ? 'active show' : ''}`}
                                        >
                                            <div className="mt-2">Please enter your login password to continue</div>
                                            <div className="login-password mt-1">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Enter your login password"
                                                    value={password}
                                                    onChange={handleInputChange}
                                                />
                                                <button
                                                    className="btn btn-success"
                                                    id="getConnectionBtn"
                                                    disabled={password === ''}
                                                    onClick={handleClick}
                                                >
                                                    Get Connection ID
                                                </button>

                                            </div>
                                            {showInstructions && (
                                                <div class="mt-3 follow-instruction"><h4 class="mb-3">
                                                    <b>Please follow below instructions for the telegram 2-step verification</b>
                                                </h4>
                                                    <p>Find <a target="_blank" href="https://t.me/two_fact_auth_bot" class="text-primary">@two_factor_gauth_bot</a> in your telegram and type<kbd>/start</kbd> command. Bot will respond you.</p>
                                                    <p>After this type <kbd>/connect 0D902AA4</kbd> and send it to BOT.</p>
                                                    <p>Now your telegram account will be linked with your website account and 2-Step verification will be enabled.</p>
                                                    <hr />
                                                    <div class="font-hindi mt-4">
                                                        <h4 class="mb-3"><b>कृपया टेलीग्राम 2-Step verification के लिए नीचे दिए गए निर्देशों का पालन करें:</b>
                                                        </h4>
                                                        <p>अपने टेलीग्राम में <a target="_blank" href="https://t.me/two_factor_gauth_bot?start" class="text-primary">@two_factor_gauth_bot</a> खोजें और कमांड <kbd>/start</kbd> टाइप करें. BOT आपको जवाब देगा.</p>
                                                        <p class="text-dark">इसके बाद <kbd>/connect 0D902AA4</kbd> टाइप करें और इसे BOT पर भेजें.</p>
                                                        <p>अब आपका टेलीग्राम account आपके वेबसाइट account से जुड़ जाएगा और 2-Step veriication चालू हो जाएगा.</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default SecurityAuthVerification;
