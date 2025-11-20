import React from "react";
import loginimg from '../../img/images/login.avif';
import { useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Login = () => {

    const [logintype, SetLogintype] = useState("username");

  return (
    <div>
      <section id="main_content" className="landing_page landing_page1">
        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="content_div_landing my-3 p-0">
                <div
                  className="row m-0"
                  style={{ boxShadow: "0px 0px 10px 1px lightgray" }}
                >
                  {/* LEFT IMAGE */}
                  <div className="col-lg-6 d-none d-lg-block bg-white">
                    <div>
                      <img
                        src={loginimg}
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </div>
                  </div>

                  {/* RIGHT FORM */}
                  <div className="col-lg-6">
                    <form
                      action="/"
                      id="User"
                      autoComplete="off"
                      method="post"
                      acceptCharset="utf-8"
                    >
                      <div className="login_form row">
                        <div className="col-12">
                          <h3 style={{ color: "#0b3a82", marginTop: "20px" }}>
                            Citizen Login
                          </h3>
                        </div>

                        {/* LOGIN TYPE */}
                        <div className="col-12 mt-3" id="logintype">
                          <div className="text-start">
                            <label>Login with</label>
                            <div>
                              <input
                                type="radio"
                                name="logintype"
                                value="usernamebased"
                                id="usernamebased"
                                checked={logintype === "username"}
                                onChange={() => SetLogintype("username")}
                              />
                              <label htmlFor="usernamebased" className="me-3">
                                Username
                              </label>

                              <input
                                type="radio"
                                name="logintype"
                                value="otpbased"
                                id="otpbased"
                                onChange={() => SetLogintype("mobile")}
                              />
                              <label htmlFor="otpbased" className="me-3">
                                Mobile Number
                              </label>
                            </div>
                            <span id="logintype_error" className="form-error" />
                          </div>
                        </div>

                        {/* USERNAME */}
                         {logintype === "username" && (
                            <>
                        <div className="col-12 username_div">
                          <div className="input-effect mb-4">
                            <label className="uname">
                              Username<sup className="text-danger">*</sup>
                            </label>
                            <div className="input text required">
                              <input
                                name="data[User][username]"
                                className="effect-16"
                                id="username"
                                maxLength="50"
                                type="text"
                                required
                                autoComplete="off"
                              />
                            </div>
                            <span className="focus-border focus_b"></span>
                            <a
                              href="/citizenentry/forgotusername_citizen"
                              className="z-9"
                              id="forgot_user"
                            >
                              Forgot Username
                            </a>
                            <span
                              id="username_error"
                              className="form-error"
                            ></span>
                          </div>
                        </div>

                        {/* PASSWORD */}
                        <div className="col-12 username_div">
                          <div className="input-effect mb-4">
                            <label className="pass">
                              Password<sup className="text-danger">*</sup>
                            </label>
                            <div className="input password required">
                              <input
                                name="data[User][password]"
                                className="effect-16"
                                id="password"
                                type="password"
                                required
                              />
                            </div>

                            <span id="showpass">
                              <i className="fa-regular fa-eye"></i>
                            </span>
                            <span id="hidepass">
                              <i className="fa-regular fa-eye-slash"></i>
                            </span>

                            <span className="focus-border focus_p"></span>

                            <a
                              href="/Citizenentry/forgotpassword_citizen"
                              className="z-9"
                            >
                              Forgot Password?
                            </a>

                            <input
                              type="hidden"
                              name="data[User][csrftoken]"
                              id="csrftoken"
                              value="27611820081220"
                            />

                            <span
                              id="password_error"
                              className="form-error"
                            ></span>
                          </div>
                        </div>
                        </>)}

                        {/* MOBILE NUMBER */}
                         {logintype === "mobile" && (
                            <>
                        <div className="col-12 mobile_div">
                          <div className="input-effect">
                            <label className="uname">
                              Mobile Number<sup className="text-danger">*</sup>
                            </label>
                            <div className="input text">
                              <input
                                name="data[User][mobile]"
                                className="effect-16"
                                id="mobile"
                                type="text"
                                autoComplete="off"
                              />
                            </div>
                            <span className="focus-border focus_b"></span>
                            <span id="mobile_error" className="form-error" />
                          </div>
                        </div>
                    <div className="col-12 username_div">
                          <div className="input-effect mb-4">
                            <label className="pass">
                              Password<sup className="text-danger">*</sup>
                            </label>
                            <div className="input password required">
                              <input
                                name="data[User][password]"
                                className="effect-16"
                                id="password"
                                type="password"
                                required
                              />
                            </div>

                            <span id="showpass">
                              <i className="fa-regular fa-eye"></i>
                            </span>
                            <span id="hidepass">
                              <i className="fa-regular fa-eye-slash"></i>
                            </span>

                            <span className="focus-border focus_p"></span>

                            <a
                              href="/Citizenentry/forgotpassword_citizen"
                              className="z-9"
                            >
                              Forgot Password?
                            </a>

                            <input
                              type="hidden"
                              name="data[User][csrftoken]"
                              id="csrftoken"
                              value="27611820081220"
                            />

                            <span
                              id="password_error"
                              className="form-error"
                            ></span>
                          </div>
                        </div>
                        </>
                    )}

                        {/* CAPTCHA */}
                        {/* <div className="col-12">
                          <div
                            className="input-effect"
                            style={{ marginBottom: "80px" }}
                          >
                            <label className="pass">
                              Enter Captcha<sup className="text-danger">*</sup>
                            </label>
                            <div className="input text">
                              <input
                                name="data[User][captcha]"
                                className="effect-16"
                                id="captcha"
                                type="text"
                                autoComplete="off"
                              />
                            </div>
                            <span className="focus-border focus_p"></span>

                            <div className="captcha">
                              <img
                                src="/users/get_captcha"
                                id="captcha_image"
                                className="img-rounded img-thumbnail"
                                alt=""
                              />
                              <button
                                className="my-auto ms-3 ajax"
                                id="reload"
                                type="button"
                              >
                                <i className="fa-solid fa-arrows-rotate"></i>
                              </button>
                            </div>

                            <input
                              type="hidden"
                              name="data[User][hfSaltedStr]"
                              id="hfSaltedStr"
                              value="wjm1TqgMndwWUotAYp78C5"
                            />

                            <input
                              type="hidden"
                              name="data[User][hfLoginCount]"
                              id="hfLoginCount"
                              value="0"
                            />
                          </div>
                        </div> */}

                        {/* OTP DIV */}
                        {/* <div className="col-12">
                          <div
                            className="input-effect"
                            id="otp_div"
                            style={{ display: "none" }}
                          >
                            <label className="uname">
                              OTP<sup className="text-danger">*</sup>
                            </label>
                            <div className="input password">
                              <input
                                name="data[User][otp]"
                                className="effect-16"
                                id="otp"
                                maxLength="8"
                                type="password"
                                autoComplete="off"
                                style={{ display: "none" }}
                              />
                            </div>

                            <span id="showpassotp">
                              <i className="fa-regular fa-eye text-white"></i>
                            </span>
                            <span id="hidepassotp">
                              <i className="fa-regular fa-eye-slash text-white"></i>
                            </span>

                            <span className="focus-border focus_b"></span>
                          </div>

                          <span className="head_info countdown"></span>
                          <span className="head_info resendbtn" id="btnotp1">
                            Resend OTP
                          </span>
                        </div> */}

                        {/* BUTTONS */}
                        <div className="col-12">
                          <div className="button_div">
                            <button type="button" className="btn secondary">
                              Cancel
                            </button>

                            {/* <button
                              type="submit"
                              id="btnotp"
                              name="btnotp"
                              className="btn primary"
                            >
                              Get OTP
                            </button> */}

                            <button
                              type="button"
                              id="btnSubmit"
                              name="btnSubmit"
                              className="btn btn-sm primary"
                            //   style={}
                            >
                              Login
                            </button>

                            <input
                              type="hidden"
                              value="3ed2007234c5cacb7fe4c2031cf31857"
                              name="token"
                              id="token"
                            />
                          </div>
                        </div>

                        {/* REGISTER */}
                        <div className="col-12 pt-4">
                          <Link to="/Register">
                          New user? click here to Register
                        </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
