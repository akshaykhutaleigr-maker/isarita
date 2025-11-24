import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getDistrict } from "../../api/District/districtApi";
import { getTaluka } from "../../api/Taluka/Taluka";
import { getEmail, getMobile, getUsername } from "../../api/Users/getUsers";







function CitizenRegistration() {

  const [contactFname, setContactFname] = useState("");
  const [contactMotherName, setContactMotherName] = useState("");
const [contactMName, setContactMName] = useState("");
const [contactLName, setContactLName] = useState("");
const navigate = useNavigate();


  const [districts, setDistricts] = useState([]);
  const [talukas, setTalukas] = useState([]);
  const [districtId, setDistrictId] = useState("");
  const [talukaId, setTalukaId] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileNo, setMobile] = useState("");
  const [mobileError, setMobileError] = useState("");

  const [username, setUsername] = useState("");
  const [usernameError, setusernameError] = useState("");

  const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [hintQuestion, setHintQuestion] = useState("");
const [hintAnswer, setHintAnswer] = useState("");




  useEffect(() => {
    getDistrict().then(data => setDistricts(data));
  }, []);


  const handleDistrictChange = (e) => {
    const id = e.target.value;
    setDistrictId(id);
    setTalukaId("");
    setTalukas([]);

    if (id) {
      getTaluka(id).then(data => {
        setTalukas(data);
      });
    }
  };

  const CheckEmail = async () => {
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    try {
      const data = await getEmail(email);
      if (data.error) {
        setEmailError("Email already registered");
        setEmail("");
      } else {
        setEmailError("");
      }
    } catch (error) {
      setEmailError(" Error checking email");
    }
  };

  const Checkmobileno = async () => {
    if (!mobileNo) {
      setMobileError("Mobile Number is required");
      return;
    }
    try {
      const data = await getMobile(mobileNo);
      if (data.error) {
        setMobileError("Mobile Number already registered");
        setMobile("");
      } else {
        setMobileError("");
      }
    } catch (error) {
      setMobileError(" Error checking Mobile Number");
    }
  };

  const Checkusername = async () => {

    if (!username) {
      setusernameError("Username is required");
      return;
    }
    try {
      const data = await getUsername(username);
      if (data.error) {
        setusernameError("Username already registered");
        setUsername("");
      } else {
        setusernameError("");
      }
    } catch (error) {
      setusernameError(" Error checking Username");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop page reload
    const hintQuestionInt = hintQuestion ? parseInt(hintQuestion) : null;

    const payload = {
      contact_fname: contactFname,
      contact_mname: contactMName,
      contact_lname: contactLName,
      email_id: email,
      mobile_no: mobileNo,
      user_name: username,
      user_pass: password,
      hint_question: hintQuestionInt,
      hint_answer: hintAnswer,
      // add all other form fields here
    };
    

    try {
  const res = await fetch("http://localhost:4000/register", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});
if (res.ok) {
  navigate("/", { state: { message: "Registration Successful!" } });
} else {
  alert(data.error);
}


} catch (error) {
  console.error(error);
  alert("Server error, try again!");
}

  };







  const [step, setStep] = useState(1);

  // local readOnly toggles on focus
  const [panReadonly, setPanReadonly] = useState(true);
  const [userPassReadonly, setUserPassReadonly] = useState(true);
  const [reUserPassReadonly, setReUserPassReadonly] = useState(true);
  const [hintAnswerReadonly, setHintAnswerReadonly] = useState(true);

  // mimic original function names the HTML referenced
  const gotoStepTwo = () => setStep(2);
  const goToStapeThree = () => setStep(3);
  const goToStapeFour = () => setStep(4);
  const prefunction = (_fromBtn, _toBtn, _toTab) => {
    // go previous logically
    setStep((s) => Math.max(1, s - 1));
  };

  // stubbed validators (wire up as needed)


  const checkuidproof = () => { };

  const checkcaptcha = () => { };

  // input sanitation (same regex intent as inline)
  const sanitize = (pattern) => (e) => {
    const re = new RegExp(pattern, "g");
    e.target.value = e.target.value.replace(re, "");
  };

  return (
    <section id="main_content" className="landing_page landing_page1">
      <div className="container-xxl">
        <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="offset-lg-1 col-lg-10 col-md-12">
            <div className="content_div">
              <span className="head">Citizen Registration</span>
              <input
                type="hidden"
                name="data[citizenregistration][reg_type]"
                id="reg_type"
                className="effect-16"
                value="1"
              />

              <div id="steps_old">
                <div className={`step ${step > 1 ? "done" : step === 1 ? "active" : ""}`} id="step1_btn">
                  <div className="outer_circle">
                    <span className="inner_circle"></span>
                    <span className="inner_check"></span>
                  </div>
                  <span className={`step_number ${step === 1 ? "active" : ""}`}>Step 1</span>
                </div>
                <div className="line"></div>
                <div className={`step ${step > 2 ? "done" : step === 2 ? "active" : ""}`} id="step2_btn">
                  <div className="outer_circle">
                    <span className="inner_circle"></span>
                    <span className="inner_check"></span>
                  </div>
                  <span className={`step_number ${step === 2 ? "active" : ""}`}>Step 2</span>
                </div>
                <div className="line"></div>
                <div className={`step ${step > 3 ? "done" : step === 3 ? "active" : ""}`} id="step3_btn">
                  <div className="outer_circle">
                    <span className="inner_circle"></span>
                    <span className="inner_check"></span>
                  </div>
                  <span className={`step_number ${step === 3 ? "active" : ""}`}>Step 3</span>
                </div>
                <div className="line"></div>
                <div className={`step ${step === 4 ? "active" : ""}`} id="step4_btn">
                  <div className="outer_circle">
                    <span className="inner_circle"></span>
                    <span className="inner_check"></span>
                  </div>
                  <span className={`step_number ${step === 4 ? "active" : ""}`}>Step 4</span>
                </div>
              </div>

              <div
                id="step1"
                className={`stepTab ${step === 1 ? "active" : ""}`}
                style={{ display: step === 1 ? "block" : "none" }}
              >
                <div className="step_form">
                  <h6>Basic Details</h6>
                  <div className="login_form row" id="">
                    <div className="col-md-4">
                      <div className="input-effect">
                        <label htmlFor="contact_person" className="focused_label">
                          First Name<span style={{ color: "#ff0000" }}>*</span>
                        </label>
                        <div className="input text">
                          <input
                              name="data[citizenregistration][contact_fname]"
                              id="contact_fname"
                              className="effect-16 focused"
                              maxLength={100}
                              type="text"
                              value={contactFname}
                              onChange={(e) =>
                                setContactFname(e.target.value.replace(/[^a-zA-Z ]/g, "")) // sanitize
                              }
                              autoComplete="off"
                            />
                        </div>
                        <span className="focus-border focus_b focused_label"></span>
                        <span id="contact_fname_error" className="form-error"></span>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="input-effect">
                        <label htmlFor="contact_person" className="focused_label">Mother Name<span style={{ color: "#ff0000" }}></span></label>
                        <div className="input text">
                          <input
  name="data[citizenregistration][contact_mother_name]"
  id="contact_mother_name"
  className="effect-16"
  maxLength={100}
  type="text"
  value={contactMotherName}
  onChange={(e) =>
    setContactMotherName(e.target.value.replace(/[^a-zA-Z ]/g, ""))
  }
  autoComplete="off"
/>

                        </div>
                        <span className="focus-border focus_b"></span>
                        <span id="contact_mother_name_error" className="form-error"></span>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="input-effect">
                        <label htmlFor="contact_person" className="focused_label">Middle Name<span style={{ color: "#ff0000" }}></span></label>
                        <div className="input text">
                          <input
  name="data[citizenregistration][contact_mname]"
  id="contact_mname"
  className="effect-16"
  maxLength={100}
  type="text"
  value={contactMName}
  onChange={(e) =>
    setContactMName(e.target.value.replace(/[^a-zA-Z ]/g, ""))
  }
  autoComplete="off"
/>

                        </div>
                        <span className="focus-border focus_b"></span>
                        <span id="contact_mname_error" className="form-error"></span>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="input-effect">
                        <label htmlFor="contact_person" className="focused_label">
                          Last Name<span style={{ color: "#ff0000" }}>*</span>
                        </label>
                        <div className="input text">
                          <input
  name="data[citizenregistration][contact_lname]"
  id="contact_lname"
  className="effect-16 focused"
  maxLength={100}
  type="text"
  value={contactLName}
  onChange={(e) =>
    setContactLName(e.target.value.replace(/[^a-zA-Z ]/g, ""))
  }
  autoComplete="off"
/>

                        </div>
                        <span className="focus-border focus_b focused_label"></span>
                        <span id="contact_lname_error" className="form-error"></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="button_div mt-4 text-end">
                  <Link to="/" className="btn secondary"> Cancel</Link>
                  <button type="button" className="btn primary" id="btn1" onClick={gotoStepTwo}>
                    Next
                  </button>
                </div>
              </div>

              <div
                id="step2"
                className={`stepTab ${step === 2 ? "active" : ""}`}
                style={{ display: step === 2 ? "block" : "none" }}
              >
                <div className="step_form" id="contact_details">
                  <h6>Contact Person Address</h6>

                  <div className="login_form row" id="">
                    <div className="col-md-4">
                      <div className="input-effect">
                        <label htmlFor="building" className="focused_label">
                          Building Name / No. / Floor
                        </label>
                        <div className="input text">
                          <input
                            name="data[citizenregistration][building]"
                            id="building"
                            className="effect-16"
                            maxLength={100}
                            type="text"
                            onInput={sanitize("[^a-zA-Z0-9,() ]")}
                          />
                        </div>
                        <input
                          type="hidden"
                          name="data[citizenregistration][csrftoken]"
                          id="csrftoken"
                          className="effect-16 focused"
                          value="121908473672404"
                        />
                        <span className="focus-border focus_b focused_label"></span>
                        <span id="building_error" className="form-error"></span>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="input-effect">
                        <label htmlFor="street" className="focused_label">Street/Locality</label>
                        <div className="input text">
                          <input
                            name="data[citizenregistration][street]"
                            id="street"
                            className="effect-16"
                            maxLength={100}
                            type="text"
                            onInput={sanitize("[^a-zA-Z0-9,() ]")}
                          />
                        </div>
                        <span className="focus-border focus_b"></span>
                        <span id="street_error" className="form-error"></span>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="input-effect">
                        <label htmlFor="city" className="focused_label">City</label>
                        <div className="input text">
                          <input
                            name="data[citizenregistration][city]"
                            id="city"
                            className="effect-16"
                            maxLength={100}
                            type="text"
                            onInput={sanitize("[^a-zA-Z ]")}
                          />
                        </div>
                        <span className="focus-border focus_b"></span>
                        <span id="city_error" className="form-error"></span>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="input-effect">
                        <label htmlFor="pin_code" className="focused_label">Pin Code</label>
                        <div className="input text">
                          <input
                            name="data[citizenregistration][pincode]"
                            id="pincode"
                            className="effect-16"
                            maxLength={6}
                            type="text"
                            onInput={sanitize("[^0-9]")}
                          />
                        </div>
                        <span className="focus-border focus_b"></span>
                        <span id="pincode_error" className="form-error"></span>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="input-effect">
                        <label htmlFor="state" className="focused_label">Select&nbsp;State<span style={{ color: "#ff0000" }}>*</span></label>
                        <div className="input select">
                          <select name="data[citizenregistration][state_id]" id="state_id" className="effect-16">
                            <option value="27">महाराष्ट्र</option>
                          </select>
                        </div>
                        <span className="focus-border focus_b"></span>
                        <span id="state_id_error" className="form-error"></span>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="input-effect">
                        <label htmlFor="district" className="focused_label">
                          Select&nbsp;District<span style={{ color: "#ff0000" }}>*</span>
                        </label>
                        <select
                          name="data[citizenregistration][district_id]"
                          id="district_id"
                          className="effect-16"
                          value={districtId}
                          onChange={handleDistrictChange}
                        >
                          <option value="">Select</option>
                          {districts.map((d, index) => (
                            <option key={`${d.district_id}_${index}`} value={d.district_id}>
                              {d.district_name_en}
                            </option>
                          ))}
                        </select>
                        <span className="focus-border focus_b"></span>
                        <span id="district_id_error" className="form-error"></span>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="input-effect">
                        <label htmlFor="taluka" className="focused_label">
                          Select&nbsp;Taluka<span style={{ color: "#ff0000" }}>*</span>
                        </label>
                        <div className="input select">
                          <select
                            name="data[citizenregistration][taluka_id]"
                            id="taluka_id"
                            className="effect-16"
                            value={talukaId}
                            onChange={(e) => setTalukaId(e.target.value)}
                          >
                            <option value=""></option>
                            {talukas.map((t, index) => (
                              <option key={`${t.taluka_id}_${index}`} value={t.taluka_id}>
                                {t.taluka_name_en}
                              </option>
                            ))}
                          </select>
                        </div>
                        <span className="focus-border focus_b"></span>
                        <span id="taluka_id_error" className="form-error"></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="button_div mt-4 text-end">
                  <button type="button" className="btn primary" onClick={() => prefunction("#step2_btn", "#step1_btn", "#step1")}>
                    Previous
                  </button>
                  <button type="button" className="btn primary" onClick={goToStapeThree}>
                    Next
                  </button>
                </div>
              </div>

              <div
                id="step3"
                className={`stepTab ${step === 3 ? "active" : ""}`}
                style={{ display: step === 3 ? "block" : "none" }}
              >
                <div className="step_form" id="">
                  <h6>Contact Person ID Details</h6>

                  <div className="login_form row" id="">
                    <div className="col-md-4">
                      <div className="input-effect">
                        <label htmlFor="e_mail" className="focused_label">Email Id</label>
                        <input
                          name="data[citizenregistration][email_id]"
                          id="email_id"
                          className="effect-16"
                          onBlur={CheckEmail}
                          maxLength={50}
                          type="text"
                          autoComplete="off"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />

                      </div>
                      <span className="focus-border focus_b"></span>
                      {emailError && (
                        <span id="email_id_error" className="form-error">
                          {emailError}
                        </span>
                      )}

                    </div>

                    <div className="col-md-4">
                      <div className="input-effect">
                        <label htmlFor="mobile_no" className="focused_label">
                          Mobile No.<span style={{ color: "#ff0000" }}>*</span>
                        </label>
                        <div className="input tel">
                          <input
                            name="data[citizenregistration][mobile_no]"
                            id="mobile_no"
                            className="effect-16"
                            onBlur={Checkmobileno}
                            maxLength={10}
                            type="tel"
                            onInput={sanitize("[^0-9]")}
                            autoComplete="off"
                            value={mobileNo}
                            onChange={(e) => setMobile(e.target.value)}
                          />
                        </div>

                      </div>
                      <span className="focus-border focus_b"></span>
                      {mobileError && (
                        <span id="mobile_no_error" className="form-error">
                          {mobileError}
                        </span>
                      )}
                    </div>

                    <div className="col-md-4">
                      <div className="input-effect">
                        <label htmlFor="id_type" className="focused_label" >
                          Select&nbsp;Id Proof<span style={{ color: "#ff0000" }}>*</span>
                        </label>
                        <div className="input select">
                          <select name="data[citizenregistration][id_type]" id="id_type" className="effect-16 focused">
                            <option value="empty"></option>
                            <option value="15">Bank or Post Office Passbook</option>
                            <option value="1">Driving License</option>
                            <option value="3">Election Card</option>
                            <option value="6">Employee Id Card</option>
                            <option value="5">PAN CARD</option>
                            <option value="4">Passport</option>
                          </select>
                        </div>
                        <span className="focus-border focus_b focused_label"></span>
                        <span id="id_type_error" className="form-error"></span>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="input-effect">
                        <label htmlFor="pan_no" id="pan_lable" className="focused_label">
                          Id Proof No.<span style={{ color: "#ff0000" }}>*</span>
                        </label>
                        <div id="pantxt">
                          <div className="input password">
                            <input
                              name="data[citizenregistration][pan_no]"
                              id="pan_no"
                              className="effect-16"
                              onBlur={checkuidproof}
                              readOnly={panReadonly}
                              onFocus={() => setPanReadonly(false)}
                              type="password"
                              onInput={sanitize("[^a-zA-Z0-9_]")}
                            />
                          </div>
                        </div>
                        <span id="showid">
                          <i className="fa-regular fa-eye"></i>
                        </span>
                        {/* <span id="hideid"><i className="fa-regular fa-eye-slash"></i></span> */}
                        <span className="focus-border focus_b"></span>
                        <span id="pan_no_error" className="form-error"></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="button_div mt-4 text-end">
                  <button type="button" className="btn primary" onClick={() => prefunction("#step3_btn", "#step2_btn", "#step2")}>
                    Previous
                  </button>
                  <button type="button" className="btn primary" onClick={goToStapeFour}>
                    Next
                  </button>
                </div>
              </div>

              <div
                id="step4"
                className={`stepTab ${step === 4 ? "active" : ""}`}
                style={{ display: step === 4 ? "block" : "none" }}
              >
                <div className="step_form" id="">
                  <h6>Username &amp; Password</h6>

                  <div className="login_form row" id="">
                    <div className="col-md-4">
                      <div className="input-effect mb-5">
                        <label htmlFor="user_name" className="focused_label">
                          Username<span style={{ color: "#ff0000" }}>*</span>
                        </label>
                        <div className="input text">
                          <input
                            name="data[citizenregistration][user_name]"
                            id="user_name"
                            className="effect-16"
                            onBlur={Checkusername}
                            minLength={8}
                            maxLength={20}
                            type="text"
                            onInput={sanitize("[^a-zA-Z0-9_]")}
                            autoComplete="off"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>

                      </div>

                      {usernameError && (
                        <span id="user_name_error" className="form-error">
                          {usernameError}
                        </span>
                      )}
                    </div>

                    <div className="col-md-4">
                      <div className="input-effect mb-5">
                        <label htmlFor="password" className="focused_label">
                          Password<span style={{ color: "#ff0000" }}>*</span>
                        </label>
                        <div className="input password">
                         <input
                            id="user_pass"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <span id="showuser_pass">
                          <i className="fa-regular fa-eye"></i>
                        </span>
                        <span id="hideuser_pass">
                          <i className="fa-regular fa-eye-slash"></i>
                        </span>
                        <span className="focus-border focus_b"></span>
                        <span id="user_pass_error" className="form-error"></span>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="input-effect mb-5">
                        <label htmlFor="re_user_pass" className="focused_label">
                          Confirm Your Password<span style={{ color: "#ff0000" }}>*</span>
                        </label>
                        <div className="input password">
                          <input
                            id="re_user_pass"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>
                        <span id="showre_user_pass">
                          <i className="fa-regular fa-eye"></i>
                        </span>
                        <span id="hidere_user_pass">
                          <i className="fa-regular fa-eye-slash"></i>
                        </span>
                        <span className="focus-border focus_b"></span>
                        <span id="re_user_pass_error" className="form-error"></span>
                      </div>
                    </div>

                    {/* <div className="col-md-4">
                  <div className="input-effect">
                    <label htmlFor="captcha" className="focused_label">
                      Captcha<span style={{ color: "#ff0000" }}>*</span>
                    </label>
                    <div className="input text">
                      <input
                        name="data[citizenregistration][captcha]"
                        id="captcha"
                        className="effect-16"
                        onBlur={checkcaptcha}
                        maxLength={6}
                        type="text"
                        onInput={sanitize("[^a-zA-Z0-9_]")}
                        autoComplete="off"
                      />
                    </div>
                    <span className="focus-border focus_b"></span>
                    <span id="captcha_error" className="form-error"></span>
                  </div>
                </div> */}

                    {/* <div className="col-md-4">
                  <div className="input-effect">
                    <img src="/NGDRS_MH_COMBINE_DEV/users/get_captcha" id="captcha_image" className="img-rounded img-thumbnail" alt="" />
                    <span className="input-group-addon cursor_pointer" id="reload">
                      <i className="fa fa-refresh  text-success"></i>
                    </span>
                  </div>
                </div> */}

                    <div className="col-12">
                      <h6 className="form_subtitle blue">In Case You Forgot Your Password</h6>
                    </div>

                    <div className="col-md-4">
                      <div className="input-effect">
                        <label htmlFor="question" className="focused_label">
                          Hint Question<span style={{ color: "#ff0000" }}>*</span>
                        </label>
                        <select
  name="data[citizenregistration][hint_question]"
  id="hint_question"
  className="effect-16 focused"
  value={hintQuestion}
  onChange={(e) => setHintQuestion(e.target.value)}
  autoComplete="off"
>
  <option value="">Select Question</option>
  <option value="9">What color are your eyes?</option>
  <option value="6">What is the name of your first school?</option>
  <option value="7">What is your place of birth?</option>
  <option value="8">When did you complete your schooling?</option>
</select>

                        <span className="focus-border focus_b focused_label"></span>
                        <span id="hint_question_error" className="form-error"></span>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="input-effect">
                        <label htmlFor="qst_ans" className="focused_label">Your Answer</label>
                        <div className="input password">
                          <input
  type="text"
  value={hintAnswer}
  onChange={(e) => setHintAnswer(e.target.value)}
  placeholder="Enter your hint answer"
/>

                        </div>
                        <span id="showhint_answer">
                          <i className="fa-regular fa-eye"></i>
                        </span>
                        <span id="hidehint_answer">
                          <i className="fa-regular fa-eye-slash"></i>
                        </span>
                        <span className="focus-border focus_b"></span>
                        <span id="hint_answer_error" className="form-error"></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="button_div mt-4 text-end">
                  <Link to="/" className="btn secondary" > Cancel</Link>

                  <button type="button" className="btn primary" onClick={() => prefunction("#step4_btn", "#step3_btn", "#step3")}>
                    Previous
                  </button>
                  <button type="submit" className="btn primary" id="cmdSubmit" name="cmdSubmit">
                    Submit
                  </button>
                  <input type="hidden" name="appl_name" id="appl_name" value="" />
                  <input type="hidden" name="dist_name" id="dist_name" value="" />
                  <input type="hidden" name="state_name" id="state_name" value="" />
                  <input type="hidden" name="country_name" id="country_name" value="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
      
    </section>
  );
}

export default CitizenRegistration;
