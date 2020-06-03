import {FieldTypes} from "../../enums";
import {checkValue, getWithFormat} from "../../Utils";
import * as React from "react";
import {PropsField} from "../../interfaces";


export default (props: PropsField) => {
  const {childType, id, name, onChange, label, className, required, value, placeholder} = props
  return (
    <div className="form-group hm-field-small-text">
      <label className="hm-field-label" htmlFor={id}>{label}</label>
      <input
        type={childType === FieldTypes.EMAIL ? "email" : "text"}
        required={required}
        name={name}
        className={
          "form-control " + className + " hm-field-input-text " +
          checkValue(childType ? childType : "TEXT", value ? value : "")
        }
        placeholder={placeholder}
        value={getWithFormat(
          childType ? childType : "TEXT",
          value ? value : ""
        )}
        onChange={e => (onChange ? onChange(e.target.value) : null)}
      />
    </div>
  );
}
