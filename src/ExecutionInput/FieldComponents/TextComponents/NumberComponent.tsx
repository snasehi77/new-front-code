import * as React from "react";
import {PropsField} from "../../interfaces";

export default (props:PropsField)=> {

  const {id, label, name, className, value, onChange, required, placeholder} = props

  return (
    <div className="form-group hm-field-number-text">
      <label className="hm-field-label" htmlFor={id}>{label}</label>
      <input
        required={required}
        // name={name}
        className={"form-control " + " hm-field-input-number-text " + className}
        type="number"
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={e => (onChange ? onChange(e.target.value) : null)}
      />
    </div>
  );
}
