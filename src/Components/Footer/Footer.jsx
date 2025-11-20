import React, { Component } from 'react'
import './Footer.css'

 class Footer extends Component {
  render() {
    return (
        <>
      <div>
      <footer className="main-footer" >
          {/* <div className="d-flex justify-content-between"> */}
          <div className="">

              {/* <div className=" hidden-xs">
                  <a href="https://www.digitalindia.gov.in/" rel="noopener noreferrer" target="_blank" title="External Link">
                     Akshay
                  </a>
              </div> */}
              {/* <div> */}
                  <center>
                     Web Application designed and developed by <a href="http://www.nic.in/" rel="noopener noreferrer" target="_blank">National Informatics Centre</a><br/>
                      Contents provided and maintained by Department of Registration & Stamps, Government of MAHARASHTRA
                  </center>
              {/* </div> */}
         
          </div>
          <div className="container mt-3">
              <div className="row justify-content-center text-center">
                  <div className="col-sm-12 footer-link" >
                    <a href="">Hardware Component |</a>&nbsp;&nbsp;&nbsp;<a href="">User manual |</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="">Copy Right |</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="">Hardware Component |</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="">Disclimer |</a>
                  </div> 
                </div>
          </div>
      </footer>
      </div>
      </>
    )
  }
}

export default Footer;
