import * as React from "react";
import {PropsField} from "../../interfaces";
import {DateRangePicker} from "react-dates";
import {useState} from "react";
import moment from "moment";

export default ({
  id,
  value,
  required,
  onChange,
  label
                }:PropsField)=> {

  const [focusedRange, setFocusedRange] = useState<any>(null);

  return (
    <div className="form-group custom-DateInput_input">
      <label className="hm-field-label" htmlFor={id}>{label}</label>
      <DateRangePicker
        required={required}
        startDate={value ? moment(value.from) : null} // momentPropTypes.momentObj or null,
        startDateId={"range_start" + id} // PropTypes.string.isRequired,
        endDate={value ? moment(value.to) : null} // momentPropTypes.momentObj or null,
        endDateId={"range_end" + id} // PropTypes.string.isRequired,
        block
        small
        onDatesChange={({startDate, endDate}: any) => onChange ? onChange({
          from: new Date(startDate),
          to: new Date(endDate)
        }) : null
        } // PropTypes.func.isRequired,
        focusedInput={focusedRange} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={(focusedInput: any) => setFocusedRange(focusedInput)} // PropTypes.func.isRequired,
      />
    </div>
  );
}
