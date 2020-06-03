import * as React from "react";
import {PropsField} from "../../interfaces";

export default ({
                  label,
                  id,
                  styles,
                  options,
                  onChange,
                  radioAction,
                  radioIconAction,
                }: PropsField) => {
  return (
    <div className={"form-group " + ("hm-button-custom-" + id)}>
      <label>{label}</label>
      <div className="row hm-p-0 hm-m-0 hm-just-center">
        {options && options.map((a, i) => (
          <div key={i} style={styles}
               id={a.id}
               onClick={() => {
                 if (radioAction && onChange) {
                   onChange(a);
                   radioAction(a);
                 }
               }}
               className={"hm-pointer hm-px-1 hm-pt-0 hm-pb-1 hm-mb-1 hm-mt-0 " +
               (radioIconAction ? " col-12 btn btn-light my-2" : " col-lg-4 col-6  hm-button-custom")}>
            {radioIconAction ?
              <div className="row">
                <div  className={(a.note ? "col-7" : "col-10") + " hm-d-flex hm-align-items-center"}>
                  <div>
                    {a.label ? a.label : a.value}
                  </div>
                </div>

                {a.note && <div className="hm-d-flex hm-align-items-center">
                  {a.note}
                </div>}

                <div className="col-2 hm-d-flex hm-align-items-center hm-just-end">
                  <a onClick={() => radioIconAction ? radioIconAction(a) : null}>
                    {a.icon}
                  </a>
                </div>
              </div>
              :
              <div  className="hm-button-custom-content hm-text-center">
                <div className={"hm-button-custom-image hm-button-custom-" + (i + 1)}/>
                <p className="hm-button-custom-text">{a.label ? a.label : a.value}</p>
              </div>}
          </div>
        ))}
      </div>
    </div>
  )
}
