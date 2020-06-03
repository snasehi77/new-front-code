import * as React from "react"
import {Options, PropsField} from "../../interfaces";

export default (props: PropsField) => {

  const {options, label, value, styles, required, onChange, className, customChecked} = props;

  return (
    <div className={"form-group " + className}>
      <label>{label}</label>
      {options ? (
        options.map((o: Options) => {
          return (
            <label
              key={o.id}
              htmlFor={"box" + o.id}
              style={styles}
              id={o.id}
              className={
                "form-control hm-h-auto hm-position-relative hm-d-flex hm-align-items-center hm-label-radio-button-multiple hm-label-" +
                ((value
                  ? !!value[o.value]
                  : false)
                  ? " checkbox-active"
                  : "")
              }
            >
              <input
                required={
                  required &&
                  !Object.keys(value ? value : {}).some(v => value[v])
                }
                type="checkbox"
                id={"box" + o.id}
                checked={value ? !!value[o.value] : false}
                onChange={() =>
                  onChange
                    ? onChange({
                      ...value,
                      [o.value]: value[o.value] ? false : o
                    })
                    : null
                }
              />
              <span
                className={`
                        ${(value && value[o.value]) ? "custom-checked" : "custom-check"} hm-custom-check`}>
                      {customChecked}
                    </span>
              <label className="hm-m-0" htmlFor={"box" + o.id}/>
              <span className="hm-text-checkbox">{o.label ? o.label : o.value}</span>
            </label>
          );
        })
      ) : (
        <div>please add options</div>
      )}
    </div>
  );
}
