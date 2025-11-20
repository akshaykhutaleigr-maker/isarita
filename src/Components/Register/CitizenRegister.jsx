import React, { useState } from "react";

function CitizenRegistration() {
  const [step, setStep] = useState(2);

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
  const checkemail = () => {};
  const checkmobileno = () => {};
  const checkuidproof = () => {};
  const checkusername = () => {};
  const checkcaptcha = () => {};

  // input sanitation (same regex intent as inline)
  const sanitize = (pattern) => (e) => {
    const re = new RegExp(pattern, "g");
    e.target.value = e.target.value.replace(re, "");
  };

  return (
      <section id="main_content" className="landing_page landing_page1">
        <div className="container-xxl">
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

              <div className="login_form row" id="idbuilder" style={{ display: "none" }}>
                <div className="col-md-4">
                  <div className="input-effect">
                    <label htmlFor="builder">
                      Builder/Company Name<span style={{ color: "#ff0000" }}>*</span>
                    </label>
                    <div className="input text">
                      <input
                        name="data[citizenregistration][buildername]"
                        id="buildername"
                        className="effect-16"
                        maxLength={100}
                        type="text"
                      />
                    </div>
                    <span className="focus-border focus_b"></span>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="input-effect">
                    <label htmlFor="builderadd">
                      Builder Address<span style={{ color: "#ff0000" }}>*</span>
                    </label>
                    <div className="input text">
                      <input
                        name="data[citizenregistration][builderadd]"
                        id="builderadd"
                        className="effect-16"
                        maxLength={100}
                        type="text"
                      />
                    </div>
                    <span className="focus-border focus_b"></span>
                  </div>
                </div>
              </div>

              <div className="login_form row" id="idbank" style={{ display: "none" }}>
                <div className="col-md-4">
                  <div className="input-effect">
                    <label htmlFor="bankbuilder">
                      Bank Name<span style={{ color: "#ff0000" }}>*</span>
                    </label>
                    <div className="input text">
                      <input
                        name="data[citizenregistration][bankname]"
                        id="bankname"
                        className="effect-16"
                        maxLength={100}
                        type="text"
                      />
                    </div>
                    <span className="focus-border focus_b"></span>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="input-effect">
                    <label htmlFor="bankadd">
                      Bank Address<span style={{ color: "#ff0000" }}>*</span>
                    </label>
                    <div className="input text">
                      <input
                        name="data[citizenregistration][bankadd]"
                        id="bankadd"
                        className="effect-16"
                        maxLength={100}
                        type="text"
                      />
                    </div>
                    <span className="focus-border focus_b"></span>
                  </div>
                </div>
              </div>

              <div className="login_form row" id="rowifsc" style={{ display: "none" }}>
                <div className="col-md-4">
                  <div className="input-effect">
                    <label htmlFor="ifsc">
                      IFSC Code<span style={{ color: "#ff0000" }}>*</span>
                    </label>
                    <div className="input text">
                      <input
                        name="data[citizenregistration][ifsc]"
                        id="ifsc"
                        className="effect-16"
                        maxLength={20}
                        type="text"
                      />
                    </div>
                    <span className="focus-border focus_b"></span>
                  </div>
                </div>
              </div>

              <div className="login_form row" id="cidcocitizen" style={{ display: "none" }}>
                <div className="col-md-4">
                  <div className="input-effect">
                    <label htmlFor="contract_number">
                      Contract No.:<span style={{ color: "#ff0000" }}>*</span>
                    </label>
                    <div className="input text">
                      <input
                        name="data[citizenregistration][contract_number]"
                        id="contract_number"
                        className="effect-16"
                        maxLength={20}
                        type="text"
                        autoComplete="off"
                      />
                    </div>
                    <span className="focus-border focus_b"></span>
                  </div>
                </div>
              </div>

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
                        onInput={sanitize("[^a-zA-Z ]")}
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
                        onInput={sanitize("[^a-zA-Z ]")}
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
                        onInput={sanitize("[^a-zA-Z ]")}
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
                        onInput={sanitize("[^a-zA-Z ]")}
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
              <a href="/NGDRS_MH_COMBINE_DEV/citizenlogin" className="btn secondary">
                Cancel
              </a>
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
                        <option value=""></option>
                        <option value="1">NA</option>
                        <option value="36">अंदमान आणि निकोबार बेटे</option>
                        <option value="13">अरुणाचल प्रदेश</option>
                        <option value="28">आंध्र प्रदेश</option>
                        <option value="18">आसाम</option>
                        <option value="10">उत्तर प्रदेश</option>
                        <option value="6">उत्तराखंड</option>
                        <option value="21">ओडिशा</option>
                        <option value="29">कर्नाटक</option>
                        <option value="33">केरळ</option>
                        <option value="24">गुजरात</option>
                        <option value="31">गोवा</option>
                        <option value="5">चंडीगढ़</option>
                        <option value="22">छत्तीसगढ़</option>
                        <option value="2">जम्मू आणि काश्मीर</option>
                        <option value="20">झारखंड</option>
                        <option value="34">तमिळनाडु</option>
                        <option value="37">तेलंगाना</option>
                        <option value="30">त्रिपुरा</option>
                        <option value="25">दमण आणि दीव</option>
                        <option value="26">दादरा आणि नगर हवेली</option>
                        <option value="8">दिल्ली</option>
                        <option value="14">नागालँड</option>
                        <option value="4">पंजाब</option>
                        <option value="19">पश्चिम बंगाल</option>
                        <option value="35">पुडुचेरी</option>
                        <option value="11">बिहार</option>
                        <option value="15">मणिपूर</option>
                        <option value="23">मध्य प्रदेश</option>
                        <option value="27">महाराष्ट्र</option>
                        <option value="16">मिझोरम</option>
                        <option value="17">मेघालय</option>
                        <option value="9">राजस्थान</option>
                        <option value="32">लक्षद्वीप</option>
                        <option value="12">सिक्किम</option>
                        <option value="7">हरयाणा</option>
                        <option value="3">हिमाचल प्रदेश</option>
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
                    <div className="input select">
                      <select name="data[citizenregistration][district_id]" id="district_id" className="effect-16">
                        <option value=""></option>
                      </select>
                    </div>
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
                      <select name="data[citizenregistration][taluka_id]" id="taluka_id" className="effect-16">
                        <option value=""></option>
                      </select>
                    </div>
                    <span className="focus-border focus_b"></span>
                    <span id="taluka_id_error" className="form-error"></span>
                  </div>
                </div>
              </div>

              <div className="login_form row" id="deed_office" style={{ display: "none" }}>
                <div className="col-md-4">
                  <div className="input-effect">
                    <label htmlFor="office" id="lbl_deed_writer_off">
                      Select Office<span style={{ color: "#ff0000" }}>*</span>
                    </label>
                    <div className="input select">
                      <select name="data[citizenregistration][office_id]" id="office_id" className="effect-16">
                        <option value=""></option>
                      </select>
                    </div>
                    <span className="focus-border focus_b"></span>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="input-effect">
                    <label htmlFor="office" id="lbl_licence_no" className="focused_label">
                      Licence Number<span style={{ color: "#ff0000" }}>*</span>
                    </label>
                    <div className="input text">
                      <input
                        name="data[citizenregistration][licence_no]"
                        id="licence_no"
                        className="effect-16"
                        type="text"
                        autoComplete="off"
                      />
                    </div>
                    <span className="focus-border focus_b"></span>
                    <span id="licence_no_error" className="form-error"></span>
                  </div>
                </div>
              </div>

              <div className="login_form row" id="adv_bar" style={{ display: "none" }}>
                <div className="col-md-4">
                  <div className="input-effect">
                    <label htmlFor="office" id="lbl_name_of_bar">
                      Name Of Bar<span style={{ color: "#ff0000" }}>*</span>
                    </label>
                    <div className="input text">
                      <input
                        name="data[citizenregistration][name_of_bar]"
                        id="name_of_bar"
                        className="effect-16"
                        type="text"
                        autoComplete="off"
                      />
                    </div>
                    <span className="focus-border focus_b"></span>
                    <span id="name_of_bar_error" className="form-error"></span>
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
                    <div className="input text">
                      <input
                        name="data[citizenregistration][email_id]"
                        id="email_id"
                        className="effect-16"
                        onBlur={checkemail}
                        maxLength={50}
                        type="text"
                        autoComplete="off"
                      />
                    </div>
                    <span className="focus-border focus_b"></span>
                    <span id="email_id_error" className="form-error"></span>
                  </div>
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
                        onBlur={checkmobileno}
                        maxLength={10}
                        type="tel"
                        onInput={sanitize("[^0-9]")}
                        autoComplete="off"
                      />
                    </div>
                    <span className="focus-border focus_b"></span>
                    <span id="mobile_no_error" className="form-error"></span>
                  </div>
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

              <div className="login_form row" id="idcompany" style={{ display: "none" }}>
                <div className="col-md-4">
                  <div className="input-effect">
                    <label htmlFor="firmdetails">Firm Details</label>
                    <div className="input text">
                      <input name="data[citizenregistration][firmdetails]" id="firmdetails" className="effect-16" type="text" />
                    </div>
                    <span className="focus-border focus_b"></span>
                    <span id="firmdetails_error" className="form-error"></span>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="input-effect">
                    <label htmlFor="authperson">Authorised Person</label>
                    <div className="input text">
                      <input name="data[citizenregistration][authperson]" id="authperson" className="effect-16" type="text" />
                    </div>
                    <span className="focus-border focus_b"></span>
                    <span id="authperson_error" className="form-error"></span>
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
                        onBlur={checkusername}
                        minLength={8}
                        maxLength={20}
                        type="text"
                        onInput={sanitize("[^a-zA-Z0-9_]")}
                        autoComplete="off"
                      />
                    </div>
                    <span className="focus-border focus_b"></span>
                    <span id="user_name_error" className="form-error"></span>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="input-effect mb-5">
                    <label htmlFor="password" className="focused_label">
                      Password<span style={{ color: "#ff0000" }}>*</span>
                    </label>
                    <div className="input password">
                      <input
                        name="data[citizenregistration][user_pass]"
                        id="user_pass"
                        className="effect-16"
                        readOnly={userPassReadonly}
                        onFocus={() => setUserPassReadonly(false)}
                        type="password"
                        autoComplete="off"
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
                        name="data[citizenregistration][re_user_pass]"
                        id="re_user_pass"
                        className="effect-16"
                        readOnly={reUserPassReadonly}
                        onFocus={() => setReUserPassReadonly(false)}
                        type="password"
                        autoComplete="off"
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

                <div className="col-md-4">
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
                </div>

                <div className="col-md-4">
                  <div className="input-effect">
                    <img src="/NGDRS_MH_COMBINE_DEV/users/get_captcha" id="captcha_image" className="img-rounded img-thumbnail" alt="" />
                    <span className="input-group-addon cursor_pointer" id="reload">
                      <i className="fa fa-refresh  text-success"></i>
                    </span>
                  </div>
                </div>

                <div className="col-12">
                  <h6 className="form_subtitle blue">In Case You Forgot Your Password</h6>
                </div>

                <div className="col-md-4">
                  <div className="input-effect">
                    <label htmlFor="question" className="focused_label">
                      Hint Question<span style={{ color: "#ff0000" }}>*</span>
                    </label>
                    <div className="input select">
                      <select
                        name="data[citizenregistration][hint_question]"
                        id="hint_question"
                        className="effect-16 focused"
                        autoComplete="off"
                      >
                        <option value="empty"></option>
                        <option value="9">What color are your eyes?</option>
                        <option value="6">What is the name of your first school?</option>
                        <option value="7">What is your place of birth?</option>
                        <option value="8">When did you complete your schooling?</option>
                      </select>
                    </div>
                    <span className="focus-border focus_b focused_label"></span>
                    <span id="hint_question_error" className="form-error"></span>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="input-effect">
                    <label htmlFor="qst_ans" className="focused_label">Your Answer</label>
                    <div className="input password">
                      <input
                        name="data[citizenregistration][hint_answer]"
                        id="hint_answer"
                        className="effect-16"
                        maxLength={255}
                        readOnly={hintAnswerReadonly}
                        onFocus={() => setHintAnswerReadonly(false)}
                        type="password"
                        onInput={sanitize("[^a-zA-Z0-9 ]")}
                        autoComplete="off"
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
              <button type="button" className="btn secondary" id="btnSubmit" name="btnSubmit" onClick={() => (window.location.href = "/NGDRS_MH_COMBINE_DEV/")}>
                Cancel
              </button>
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
    </div>
</section>
  );
}

export default CitizenRegistration;
