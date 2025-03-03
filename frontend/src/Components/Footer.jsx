import React from 'react';
// import '../index.css';
const Footer = () => {
    return (
        <>
            <section class="footer">
                <div class="footer-top">
                    <div class="footer-links">
                        <nav class="navbar navbar-expand-sm">
                            <ul class="navbar-nav leading-[-7]">
                                <li class="nav-item">
                                    <a class="nav-link" href="/terms-and-conditions" target="_blank"> Terms and Conditions </a>
                                </li>
                                <li class="nav-item"><a class="nav-link" href="/responsible-gaming" target="_blank"> Responsible Gaming </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="support-detail">
                        <h2>24X7 Support</h2>

                    </div>
                    <div class="social-icons-box">
                    </div>
                </div>
            </section>
            <div class="footer-bottom">
                <div class="secure-logo">
                    <div>
                        <img src="https://wver.sprintstaticdata.com/v3/static/front/img/ssl.png" />
                    </div>
                    <div class="">
                        <b className=''>100% SAFE</b>
                        <div>Protected connection and encrypted data.</div>
                    </div>
                </div>
                <div class="d-inline-block">
                    <button class="btn p-0">
                        <img src="https://versionobj.ecoassetsservice.com/v32/static/front/img/18plus.png" />
                    </button>
                    <a href="https://www.gamcare.org.uk/" className='' target="_blank">
                        <img src="https://versionobj.ecoassetsservice.com/v32/static/front/img/gamecare.png" />
                    </a>
                    <a href="https://www.gamblingtherapy.org/" className='' target="_blank">
                        <img src="https://versionobj.ecoassetsservice.com/v32/static/front/img/gt.png" />
                    </a>
                </div>
            </div>
            <div class="footer-text">
                <p class="text-center">© Copyright 2025. All Rights Reserved. Powered by DIAMONDEXCH99.</p>
            </div>
        </>
    );
}

export default Footer;
