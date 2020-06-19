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
    const start = new Date().getFullYear() - 10;
    const end = new Date().getFullYear();
    let years: Array<string> = [];
    for (let i = start; i < end; i++) {
      years.push(i + "");
    }
    years = years.reverse();
    return years;
  };

  useEffect(() => {
    const el = document.getElementById(`${value - 2}_date`);
    if (el) {
      el.scrollIntoView(true);
    }
  }, [value]);

  return (
    <div className="form-group hm-field-years">
      <div className={"content-radio-grid"}>
        {getYears().map((year) => {
            return (
              <div key={year} onClick={() => onChange ? onChange(year) : null}>
                <label
                  htmlFor={`${year}_date`}
                  className={
                    "form-control custom-label hm-label-radio-button-single hm-h-auto hm-w-100 hm-mb-0" + 
                    (year.toString() === (value ? value.toString() : "") ? " radio-active" : "")
                  }
                >
                    <span
                      className={"col-10 hm-d-flex hm-align-items-center"}>
                      <span>
                        {year}
                      </span>
                    </span>
                </label>
              </div>
            );
          })}
      </div>
    </div>
  );
}