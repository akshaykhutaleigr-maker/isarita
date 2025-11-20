import React from 'react'
import ngdrs_logo from '../../img/images/ngdrs_logo.png'; 
import digitalindia from '../../img/images/digitalindia150-x-100.png'; 
import nic_logo from '../../img/images/nic_logo.png';
import india from '../../img/images/india.png';
import mord from '../../img/images/mord.png';
import sba from '../../img/images/sba.png';

const Partners = () => {
  return (
    <div>
      <section>
        <div className="container-xxl">
            <div className="row justify-content-center">
                <div className="col-2 text-center my-auto">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        {/* <img src="/img/images/ngdrs_logo.png" className="img-fluid" alt="NGDRS" />                    </a> */}
                        <img src={ngdrs_logo} className="img-fluid" alt="NGDRS" />                    </a> 
                </div>
                <div className="col-2 text-center">
                    <a href="https://www.digitalindia.gov.in/" target="_blank" rel="noopener noreferrer">
                        <img src={digitalindia} className="img-fluid" alt="digitalIndia" />                    </a>
                </div>
                <div className="col-2 text-center pt-13px">
                    <a href="https://www.nic.in/" target="_blank" rel="noopener noreferrer">
                        <img src={nic_logo} className="img-fluid" alt="nic" />                    </a>
                </div>
                <div className="col-2 text-center">
                    <a href="https://india.gov.in/" target="_blank" rel="noopener noreferrer">
                        <img src={india} className="img-fluid" alt="indiagov" />                    </a>
                </div>
                <div className="col-2 text-center">
                    <a href="https://rural.nic.in/" target="_blank" rel="noopener noreferrer">
                        <img src={mord} className="img-fluid" alt="mord" />                    </a>
                </div>
                <div className="col-2 text-center pt-15px">
                    <a href="https://swachhbharatmission.gov.in/" target="_blank" rel="noopener noreferrer">
                        <img src={sba} className="img-fluid" alt="digitalIndia" />                    </a>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Partners
