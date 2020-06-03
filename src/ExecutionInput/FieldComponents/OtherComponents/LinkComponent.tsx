import * as React from "react";
import {PropsField} from "../../interfaces";

export default (props:PropsField)=> {

  const {label, url, className} = props;

  return (
    <>
      {typeof label === "string" ? (
        <div className="form-group">
          <a className={className} href={url ? url : "#"} target="_blank">
            {label}
          </a>
        </div>
      ) : (
        label
      )}
    </>
  );
}
