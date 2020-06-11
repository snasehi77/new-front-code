import * as React from "react";
import {Options, PropsField} from "../../interfaces";

export default ({
                                                className,
                                                value,
                                                label,
                                                options,
                                                onChange,
                                                required,
                                                customChecked,
                                                radioAction,
                                                radioIconAction,

                                              }: PropsField) => {
  return (
    <div className={"form-group hm-mt-2 hm-view-radio-form-group " + className}>
      <label>{label}</label>
      {options ? options.map((o: Options, i) => {
        return (
          <div 
            key={i}
            onClick={() => onChange ? onChange({value: o.value, data: o.data}) : null}
            className={"btn hm-h-auto hm-w-100 hm-button-description"}>
            <div className="row">
              <div  className={"rbd hm-d-flex hm-align-items-center col-11"}>
                <div>
                  <h5 className="hm-view-button-description-header hm-mt-1 hm-mb-1 hm-text-left">{o.label ? o.label : o.value}</h5>
                  <p className="hm-view-button-description-text hm-text-left">{o.data ? o.data.description : ""}</p>
                </div>
              </div>

              <span className="hm-d-flex hm-mt-1">
                <span
                  className={`${
                    value === o.value
                    ? "custom-checked hm-custom-checked"
                    : "custom-check hm-custom-check"}`}
                  >
                  {customChecked}
                </span>
              </span>
            </div>
          </div>
        )
      }) : <div>please add options</div>}
    </div>
  )
}
