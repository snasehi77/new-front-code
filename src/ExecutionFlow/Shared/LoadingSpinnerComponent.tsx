/** @jsx jsx */
import {css, jsx} from "@emotion/core";

const LoadingSpinnerComponent = ({loading}: { loading: boolean }) => {
  if (loading) {
    return (
      <div css={css`width:100%;text-align:center`}>
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  } else {
    return null
  }
};


export default LoadingSpinnerComponent;
