import React from "react";
import '../css/Hom.css'
// import '../app.css'
const AdLogin = () => {
    return (
        <div className="vertical-collpsed login">
            {/* Loader Section */}

            {/* <div id="loader-full">
                <div id="load-inner">
                    <img
                        src="https://sitethemedata.com/sitethemes/diamondexch99.com/front/logo.png"
                        className="logo-login"
                        alt="Logo"
                    />
                    <i className="fa fa-spinner fa-spin"></i>
                </div>
            </div> */}

            {/* Login Section */}
            <div id="app"><section class="login-mn">
                <div class="log-logo m-b-20" >
                    <img src="https://sitethemedata.com/sitethemes/diamondexch99.com/front/logo.png" style={{ maxWidth: "250px", maxHeight: "100px" }}
                    />
                </div>
                <div class="log-fld">
                    <h2 class="text-center">Sign In</h2>
                    <form autocomplete="off" data-vv-scope="form-login" action="" method="POST" class="form-horizontal">
                        <div id="input-group-1" role="group" class="form-group">
                            <div>
                                <input id="input-1" name="username" type="text" placeholder="Username" class="form-control" />
                                <span class="error">
                                    The username field is required
                                </span>
                            </div>
                        </div> <div id="input-group-2" role="group" class="form-group"><div>
                            <input id="input-2" name="password" type="password" placeholder="password" class="form-control form-control" />
                            <span class="error">
                                The password field is required
                            </span>
                        </div>
                        </div>
                        <div class="form-group text-center">
                            <button type="submit" class="btn btn btn-submit btn-login btn-secondary mt-[20]" >Login <i class="fas fa-sign-in-alt"></i>
                            </button></div></form></div></section></div>
        </div>
    );
};

export default AdLogin;
