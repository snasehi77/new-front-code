import React from 'react';

interface props {
  onBack?: () => void;
  onNext: () => void;
  disabledBack?: boolean;
  disabledNext?: boolean;
  hiddenNext?: boolean
  hiddenBack?: boolean
}

const FooterControlsComponent = ({
  hiddenNext,
  hiddenBack,
  disabledBack,
  disabledNext,
  onBack,
  onNext
}: props) => {

  return (
    <>
      <div style={{ height: '200px' }}>{}</div>

      <div className="footer-controls d-flex justify-content-center align-items-center">
        <div>
          {!hiddenBack && <button disabled={disabledBack}
            onClick={onBack}
            className="btn btn-light btn-cyan  pl-5 pr-5 mr-3">
            Back
          </button>}
          {!hiddenNext && <button disabled={disabledNext}
            onClick={onNext}
            className="btn btn-danger btn-cyan p2 pl-5 pr-5">
            Next
          </button>}
        </div>


        {/*<span className="float-matters">*/}
        {/*    <FontAwesomeIcon icon={faInfoCircle} className="mr-1"/>*/}
        {/*    What this matters ?*/}
        {/*  </span>*/}
      </div>
    </>
  )
};

export default FooterControlsComponent;