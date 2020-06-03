import * as React from "react";
import {PropsField} from "../../interfaces";

export default (props: PropsField) => {

  const {id, value, name, onChange, placeholder, className, required, label} = props

  return (
    <div className="form-group hm-field-large-text">
      <label className="hm-field-label" htmlFor={id}>{label}</label>
      <textarea
        className={"form-control " + " hm-field-textarea-large-text " + className}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={e => (onChange ? onChange(e.target.value) : null)}
      ></textarea>
    </div>
  );
}
