import {Options, PropsField} from "../../interfaces";
import Select from "react-select";
import * as React from "react";

export default (props: PropsField) => {

  const {id, value, options, singleValue, className, required, placeholder, label, onChange} = props;

  return (
    <div className="form-group hm-field-select">
      <label className="hm-field-label" htmlFor={id}>{label}</label>
      <Select
        id={id}
        required={required}
        className={className + " hm-input-select"}
        placeholder={placeholder}
        name="choice"
        value={value}
        isMulti={!singleValue}
        options={
          options
            ? options.map((v: Options) => {
              return {label: v.label, value: v.id};
            })
            : []
        }
        onChange={(e: any) => (onChange ? onChange(e) : null)}
      />
    </div>
  );
}
