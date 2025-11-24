import React, { useState } from "react";
import loginimg from "../../img/images/login.avif";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [logintype, SetLogintype] = useState("username");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleloginSubmit = async (e) => {
    e.preventDefault();

    const payload =
      logintype === "username"
        ? { username, password }
        : { mobile, password };

    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        navigate("/welcome", { state: { message: "Login Successful!" } });
      } else {
        alert(data.error || "Invalid login credentials");
      }
    } catch (error) {
      console.error(error);
      alert("Server error, try again!");
    }
  };

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
                    <img src={loginimg} style={{ width: "100%" }} alt="" />
                  </div>

                  {/* RIGHT FORM */}
                  <div className="col-lg-6">
                    <form
                      id="User"
                      autoComplete="off"
                      method="post"
                      onSubmit={handleloginSubmit}
                    >
                      <div className="login_form row">
                        <div className="col-12">
                          <h3 style={{ color: "#0b3a82", marginTop: "20px" }}>
                            {location.state?.message && (
                              <div className="alert alert-success">
                                {location.state.message}
                              </div>
                            )}
                            Citizen Login
                          </h3>
                        </div>

                        {/* LOGIN TYPE */}
                        <div className="col-12 mt-3" id="logintype">
                          <label>Login with</label>
                          <div>
                            <input
                              type="radio"
                              name="logintype"
                              checked={logintype === "username"}
                              onChange={() => SetLogintype("username")}
                            />
                            <label className="me-3">Username</label>

                            <input
                              type="radio"
                              name="logintype"
                              onChange={() => SetLogintype("mobile")}
                            />
                            <label className="me-3">Mobile Number</label>
                          </div>
                        </div>

                        {/* USERNAME LOGIN */}
                        {logintype === "username" && (
                          <>
                            {/* USERNAME */}
                            <div className="col-12 username_div">
                              <div className="input-effect mb-4">
                                <label className="uname">
                                  Username<sup className="text-danger">*</sup>
                                </label>
                                <input
                                  className="effect-16"
                                  id="username"
                                  type="text"
                                  required
                                  value={username}
                                  onChange={(e) =>
                                    setUsername(e.target.value)
                                  }
                                />
                              </div>
                            </div>

                            {/* PASSWORD */}
                            <div className="col-12 username_div">
                              <div className="input-effect mb-4">
                                <label className="pass">
                                  Password<sup className="text-danger">*</sup>
                                </label>
                                <input
                                  className="effect-16"
                                  id="password"
                                  type="password"
                                  required
                                  value={password}
                                  onChange={(e) =>
                                    setPassword(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                          </>
                        )}

                        {/* MOBILE LOGIN */}
                        {logintype === "mobile" && (
                          <>
                            <div className="col-12 mobile_div">
                              <div className="input-effect mb-4">
                                <label className="uname">
                                  Mobile Number<sup className="text-danger">*</sup>
                                </label>
                                <input
                                  className="effect-16"
                                  id="mobile"
                                  type="text"
                                  required
                                  value={mobile}
                                  onChange={(e) =>
                                    setMobile(e.target.value)
                                  }
                                />
                              </div>
                            </div>

                            <div className="col-12 username_div">
                              <div className="input-effect mb-4">
                                <label className="pass">
                                  Password<sup className="text-danger">*</sup>
                                </label>
                                <input
                                  className="effect-16"
                                  id="password_mobile"
                                  type="password"
                                  required
                                  value={password}
                                  onChange={(e) =>
                                    setPassword(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                          </>
                        )}

                        {/* BUTTONS */}
                        <div className="col-12">
                          <div className="button_div">
                            <button type="button" className="btn secondary">
                              Cancel
                            </button>

                            <button
                              type="submit"
                              id="btnSubmit"
                              className="btn btn-sm primary"
                            >
                              Login
                            </button>
                          </div>
                        </div>

                        {/* REGISTER */}
                        <div className="col-12 pt-4">
                          <Link to="/Register">
                            New user? Click here to Register
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
