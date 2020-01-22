import React from "react";

const LoadingSpinnerComponent = ({loading}: { loading: boolean }) => {
    return (
        <>
            {loading ?
                <div className="text-center w-100">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                : null}
        </>
    )
};


export default LoadingSpinnerComponent;
