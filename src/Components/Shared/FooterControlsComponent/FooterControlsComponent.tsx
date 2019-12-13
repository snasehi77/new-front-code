import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";

interface props {
  onBack?: () => void;
  onNext: () => void;
  disabledBack?: boolean;
  disabledNext?: boolean;
}

const FooterControlsComponent = ({disabledBack, disabledNext, onBack, onNext}: props) => {

  return (
    <>
      <div style={{height: '200px'}}>{}</div>

      <div className="footer-controls d-flex justify-content-center align-items-center">
        <div>
          <button disabled={disabledBack}
                  onClick={onBack}
                  className="btn btn-light btn-cyan  pl-5 pr-5 mr-3">
            Back
          </button>
          <button disabled={disabledNext}
                  onClick={onNext}
                  className="btn btn-danger btn-cyan p2 pl-5 pr-5">
            Next
          </button>
        </div>

        <span className="float-matters">
            <FontAwesomeIcon icon={faInfoCircle} className="mr-1"/>
            What this matters ?
          </span>
      </div>
    </>
  )
};

export default FooterControlsComponent;