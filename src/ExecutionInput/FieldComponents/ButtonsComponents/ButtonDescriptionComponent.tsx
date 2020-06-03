import * as React from "react";
import {Options, PropsField} from "../../interfaces";

export default ({
                                                className,
                                                value,
                                                label,
                                                options,
                                                onChange,
                                                styles,
                                                required,
                                                radioAction,
                                                radioIconAction,

                                              }: PropsField) => {
  return (
    <div className={"form-group hm-view-radio-form-group " + className}>
      <label>{label}</label>
      {options ? options.map((o: Options, i) => {
        return <label key={i} htmlFor={"button" + o.id}
                      style={styles}
                      className={"btn btn-light btn-block hm-view-radio-button hm-w-100 hm-h-auto" + ((value === o.value) ? " button-active " : "")}>

          <div className="row">
            <div  className={(o.note ? "col-7" : "col-10") + " rbd hm-d-flex hm-align-items-center"}>
              <div>
                <input className="hm-invisible hm-position-absolute"
                       required={required} type="radio"
                       id={"button" + o.id}
                       name="uniqueValueButton"
                       checked={value === o.value}
                       onClick={() => radioAction ? radioAction(o) : null}
                       onChange={() => onChange ? onChange({value: o.value, data: o.data}) : null}/>
              </div>
              <div>
                <h5 className="hm-view-radio-header hm-mb-1 hm-text-left">{o.label ? o.label : o.value}</h5>
                <p className="hm-view-radio-text">{o.data ? o.data.description : ""}</p>
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
        </label>
      }) : <div>please add options</div>}
    </div>
  )
}
