import "./Header.css";


export default function Header() {
  return (
    <header id="top">
      <div className="subheader_div">
        <div className="container-xxl py-1">
          <div className="row">
            <div className="col-12 d-flex justify-content-end" id="subheader">
              
              <div id="lang">
                <ul className="m-0 p-0">
                  <li>
                    <span style={{ cursor: "pointer" }} id="toggle_color">
                      <i className="fa-solid fa-circle-half-stroke"></i>
                    </span>
                  </li>
                  <li>
                    <span style={{ cursor: "pointer" }} className="me-2">A+</span>
                    <span style={{ cursor: "pointer" }} className="me-2">A</span>
                    <span style={{ cursor: "pointer" }} className="me-2">A-</span>
                  </li>
                </ul>
              </div>

              <div id="social">
                <ul className="m-0 ps-3">
                  <li>
                    <a
                      href="https://www.facebook.com/IGRMaharashtra"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/IGR_Maharashtra"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UC3d6CFxsjcl2-hMvzuJem2A"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-2">
        <div className="row">

          <div className="col-lg-5 col-md-6 my-auto order-lg-1">
            <div className="logo_area d-flex justify-content-center justify-content-md-start">
              <div className="logo my-auto">
                <a href="https://www.maharashtra.gov.in/">
                  <img src="src/img/images/gom.png" alt="" />
                </a>
                <a href="/">
                  <img src="src/img/images/igr.png" alt="" />
                </a>
              </div>

              <div className="brand_name text-center my-auto">
                <span>Department of Registration and Stamps</span>
                <span>Government of Maharashtra</span>
                <span>नोंदणी व मुद्रांक विभाग महाराष्ट्र शासन</span>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-6 my-auto order-lg-3 d-none d-md-block">
            <div className="logo_area d-flex justify-content-md-end justify-content-center">
              <div className="sec_logo order-md-2">
                <a
                  href="https://india.gov.in/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src="src/img/images/embelem1.png" alt="" />
                </a>
              </div>
              <div className="brand_name text-center my-auto order-md-1">
                <img
                  src="src/img/images/isarita_logo.png"
                  width="180px"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="col-lg-2 mt-auto order-lg-2 service_name">
            <h2 className="text-center fw-bold" style={{ color: "#941210" }}>
              iSarita 2.0
            </h2>
          </div>

        </div>
      </div>
    </header>
  );
}
