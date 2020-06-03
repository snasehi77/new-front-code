import * as React from "react";
import {PropsField} from "../../interfaces";

export default (props: PropsField) => {

  const {id, label, value, onChange, required, className} = props;

  return (
    <div className="form-group hm-field-time-text">
      <label className="hm-field-label" htmlFor={id}>{label}</label>
      <input
        type="time"
        id={id}
        className={"form-control " + " hm-input-time-text " + className}
        required={required}
        value={value || ""}
        onChange={e => (onChange ? onChange(e.target.value) : null)}
      />
    </div>
  );
}
