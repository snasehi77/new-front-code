import * as React from "react";

import {Options, PropsField} from "../../interfaces";

export default (props: PropsField) => {

  const {label, required, styles, className, onChange, value, options, radioIconAction, radioAction, customChecked} = props;

  return (
    <div className={"form-group " + className}>
      <label>{label}</label>
      <div className="content-radio-grid">
        {options ? (
          options.map((o: Options) => {
            return (
              <div key={o.id}>
                <label
                  htmlFor={"radio" + o.id}
                  style={styles}
                  id={o.id}
                  className={
                    "form-control custom-label hm-label-radio-button-single hm-h-auto hm-w-100" + 
                    (value === o.value ? " radio-active" : "")
                  }
                >
                  <span className="row">
                    <span
                      className={(o.note ? "col-7" : "col-10") + " hm-d-flex hm-align-items-center "}>
                        <input
                          className="hm-mr-2"
                          required={required}
                          type="radio"
                          id={"radio" + o.id}
                          name="uniqueValue"
                          checked={value === o.value}
                          onClick={() =>
                            radioAction ? radioAction(o) : null
                          }
                          onChange={() =>
                            onChange
                              ? onChange({value: o.value, data: o.data})
                              : null
                          }
                        />
                      <span>
                        {o.label ? o.label : o.value}
                      </span>
                    </span>

                    {o.note && (
                      <span className="col-3 hm-d-flex hm-align-items-center">
                        {o.note}
                      </span>
                    )}

                    <span className="col-2 hm-d-flex hm-align-items-center hm-just-end">
                            <span
                              className={`
                                ${
                                value === o.value
                                  ? "custom-checked hm-custom-checked"
                                  : "custom-check hm-custom-check"}`}
                            >
                              {customChecked}
                            </span>
                      <a onClick={() =>
                        radioIconAction ? radioIconAction(o) : null
                      }
                      >
                        {o.icon}
                      </a>
                    </span>
                  </span>
                </label>
              </div>
            );
          })
        ) : (
          <div>please add options</div>
        )}
      </div>
    </div>
  );
}
