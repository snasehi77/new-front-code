import * as React from "react";
import {useEffect} from "react";
import {PropsField} from "../../interfaces";

export default ({
                  id,
                  value,
                  label,
                  required,
                  onChange,
                }: PropsField) => {
  const getYears = () => {
    const start = new Date().getFullYear() - 70;
    const end = new Date().getFullYear() + 70;
    let years: Array<string> = [];
    for (let i = start; i < end; i++) {
      years.push(i + "");
    }
    return years;
  };

  useEffect(() => {
    const el = document.getElementById(`${value - 2}_date`);
    if (el) {
      el.scrollIntoView(true);
    }
  }, [value]);

  return (
    <div className="form-group hm-field-date">
      <label className="hm-field-label" htmlFor={id}>{label}</label>
      <div className="css-DateInput-input col-lg-8 col-md-10 col-12 mx-auto">
        {getYears().map((a, i) => (
          <label key={i} htmlFor={`${a}_date`}
                 className={"date-input-item hm-view-date-selector " + (a.toString() === (value ? value.toString() : "") ? " date-input-item-active hm-view-date-selector-active " : "")}>
            <input id={`${a}_date`} required={required}
                   className="hm-invisible"
                   type="radio"
                   name={"field_date_" + id}
                   checked={a === value}
                   onChange={() => onChange ? onChange(a) : null}/>

            <b>{a}</b>
          </label>
        ))}
      </div>
    </div>
  );
}
