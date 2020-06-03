import * as React from "react";
import {PropsField} from "../../interfaces";

export default (props: PropsField) => {
  const {
    options,
    label,
    styles,
    className,
    radioIconAction,
    radioAction,
    onChange
  } = props;
  return (
    <div className="form-group">
      <label>{label}</label>
      <div className={className} style={styles}>
        {options && options.length ? options.map((o, i) => (
          <div id={o.id}  onClick={() => {
            if (radioAction && onChange) {
              onChange(o);
              radioAction(o);
            }
          }} key={i} className="btn btn-block  btn-field-button hm-button-custom-1 hm-pointer">
            <div className="row">
              <div  className={(o.note ? "col-7" : "col-10") + " hm-d-flex hm-align-items-center"}>
                <div>
                  {o.label ? o.label : o.value}
                </div>
              </div>

              {o.note && <div  className="col-3 hm-d-flex hm-align-items-center">
                {o.note}
              </div>}

              <div className="col-2 hm-d-flex hm-align-items-center hm-just-end">
                <a onClick={() => radioIconAction ? radioIconAction(o) : null}>
                  {o.icon}
                </a>
              </div>
            </div>
          </div>
        )) : "add options"}
      </div>
    </div>
  )
}
