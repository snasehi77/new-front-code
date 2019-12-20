import React, {useEffect, useState} from 'react';
import {Input} from "reactstrap";
import './MetadataInputComponent.scss';
import {checkMail, ToArray, formatPhoneNumber, formatSSN} from "../../../Utils/Utilities";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {DateRangePicker, SingleDatePicker} from "react-dates";
import moment from "moment";
import Select from "react-select";
import useDidMountEffect from "../../../Hooks/useDidMountEffect";

const pageSize = 16;
const allYears = yearsToToggle('DESC', 80);

export function sliceObjects(r: Array<any>, p: number, c: number) {
  return r.slice(c * p, (c + 1) * p);
}

export function yearsToToggle(ord: string, cant: number) {
  const yearEnd = new Date().getFullYear();
  const yearStart = yearEnd - cant;
  let years = [], year = yearStart;
  while (year < yearEnd) {
    year++;
    years.push(year);
  }
  return ord === 'DESC' ? years.sort((a: number, b: number) => b - a) : years;
}

enum FieldTypes {
  LABEL = "LABEL",
  SMALL_TEXT = "SMALL_TEXT",
  LARGE_TEXT = "LARGE_TEXT",
  NUMBER = "NUMBER",
  PHONE = "PHONE",
  BOOLEAN = "BOOLEAN",
  DATE = "DATE",
  TIME = "TIME",
  SSN = "SSN",
  SELECT = 'SELECT',
  BUTTON = 'BUTTON',
  DATE_RANGE = "DATE_RANGE",
  RADIO_BUTTON = 'RADIO_BUTTON',
  TOGGLE_BUTTON = 'TOGGLE_BUTTON'
}

interface props {
  id: string;
  type: string;
  name?: string;
  label: string;
  defaultValue?: any;
  childType: string;
  className?: string;
  placeholder?: string;
  singleValue: boolean;
  listOptions: Array<any>;
  onChange?: (event: any) => void;
}

const MetadataInputComponent = ({
                                  id,
                                  type,
                                  name,
                                  label,
                                  defaultValue,
                                  childType,
                                  className,
                                  placeholder,
                                  singleValue,
                                  listOptions,
                                  onChange,
                                }: props) => {

  const [date, setDate] = useState<any>(new Date());
  const [value, setValue] = useState<any>("");
  const [focused, setFocused] = useState(false);
  const [multiSelect, setMultiSelect] = useState<any>({});
  const [inputFocused, setInputFocused] = useState(null);
  const [choiceList, setChoiceList] = useState<any>(null);
  const [dateRange, setDateRange] = useState({from: new Date(), to: new Date()});
  const [years, setYears] = useState<any>([]);
  const [page, setPage] = useState(0);
  const [yesNo, setYesNo] = useState();


  useDidMountEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [value]);

  useDidMountEffect(() => {
    setValue(`${dateRange.from} , ${dateRange.to}`)
  }, [dateRange]);

  useEffect(() => {
    if (defaultValue) {
      console.log(defaultValue);
      switch (type) {
        case FieldTypes.BOOLEAN:
          setYesNo(defaultValue === "Yes");
          break;
        case FieldTypes.RADIO_BUTTON:
          if (singleValue) {
            const val = listOptions.filter((o: any) => o.label === defaultValue);
            setValue(val.length ? val[0] : false)
          } else {
            let multi: any = {};
            listOptions.forEach((l: any) => {
              multi[l.id] = defaultValue.filter((d: any) => d === l.label).length ? l : false;
            });
            setMultiSelect(multi);
          }
          break;
        case FieldTypes.SMALL_TEXT:
        case FieldTypes.LARGE_TEXT:
        case FieldTypes.NUMBER:
        case FieldTypes.PHONE:
        case FieldTypes.SSN:
        case FieldTypes.TIME:
          setValue(defaultValue);
          break;
        case FieldTypes.DATE:
          setDate(defaultValue);
          break;
        case FieldTypes.DATE_RANGE:
          const range = defaultValue.split(" , ");
          setDateRange({from: range[0], to: range[1]});
          break;
        case FieldTypes.SELECT:
          if (singleValue) {
            const temp = listOptions.filter((l: any) => l.value === defaultValue)[0];
            setChoiceList({label: temp.label, value: temp.id});
          } else {
            // PENDING MULTIPLE SELECTIONS
            let temp = listOptions.filter((a: any) => {
              return defaultValue.some((b: string) => b === a.value)
            });

            temp = temp.map((a: any) => {
              return {label: a.label, value: a.id}
            });

            setChoiceList(temp);
          }
          break;
        case FieldTypes.TOGGLE_BUTTON:
          // ?
          break;
      }
    }
  }, [defaultValue]);

  useEffect(() => {
    if (type === 'RADIO_BUTTON' && !singleValue) {
      setValue(ToArray(multiSelect));
    }
  }, [multiSelect]);

  useDidMountEffect(() => {
    if (type === FieldTypes.DATE) {
      if (date)
        setValue(date._d);
    } else if (type === FieldTypes.SELECT) {
      if (choiceList && singleValue) {
        setValue(listOptions.filter((l: any) => l.id === choiceList.value)[0]);
      } else if (!singleValue && choiceList) {
        const temp = listOptions.filter((a: any) => {
          return choiceList.some((b: any) => b.value === a.id)
        });
        setValue(temp);
      }
    } else if (type === FieldTypes.BOOLEAN) {
      if (yesNo !== undefined) {
        setValue(yesNo ? "Yes" : "No")
      }
    }
  }, [date, choiceList, yesNo]);


  useEffect(() => {
    setYears(sliceObjects(allYears, pageSize, page))
  }, [page]);

  function getWithFormat(type: string, value: string) {
    switch (type) {
      case 'PHONE':
        return value ? formatPhoneNumber(value, value) : value;
      case 'SSN':
        return value ? formatSSN(value) : value;
      default:
        return value
    }
  }

  function checkValue(type: string, value: string) {
    switch (type) {

      case 'SSN':
        return value.length > 11 ? 'is-invalid' : value && value.length < 12 ? 'is-valid' : '';

      case  'PHONE':
        return value.length > 14 ? 'is-invalid' : value && value.length < 15 ? 'is-valid' : '';

      case 'EMAIL':
        return checkMail(value) && value ? 'is-valid' : value ? 'is-invalid' : '';

      default:
        return '';
    }
  }

  function OnSubmit() {
    let event: any = document.getElementById('nextStep');
    if (event) {
      setTimeout(() => {
        event.click();
      }, 100)
    }
  }

  switch (type) {

    case FieldTypes.SMALL_TEXT:
      return (
        <Input
          required={true}
          className={checkValue(childType, value) + " " + className}
          name={name}
          type={childType === "EMAIL" ? "email" : "text"}
          onChange={e => setValue(e.target.value)}
          value={getWithFormat(childType, value) || ''}
          id={id}
          placeholder={placeholder}
        />
      );

    case FieldTypes.LARGE_TEXT:
      return (
        <Input
          required={true}
          type="textarea"
          name={name}
          className={className}
          onChange={e => setValue(e.target.value)}
          value={value || ''}
          id={id}
          placeholder={placeholder}
        />
      );

    case FieldTypes.NUMBER:
      return (
        <Input
          required={true}
          type="number"
          name={name}
          className={className}
          onChange={e => setValue(e.target.value)}
          value={value || ''}
          id={id}
          placeholder={placeholder}
        />
      );

    case FieldTypes.BUTTON:
      return (
        <>
          {listOptions.map((b: any, i: any) => {
            return (
              <button onClick={() => setValue(b)} key={i}
                      className="btn btn-info mb-2 form-control btn-choice-list">
									<span className="btn-float-icon">
										<FontAwesomeIcon icon={faChevronRight}/>
									</span>
                {b.label}
              </button>
            )
          })}
        </>
      );

    case FieldTypes.RADIO_BUTTON:
      return (
        <>
          {listOptions.map((b: any, i: any) => {
            return <div key={i}>
              <label htmlFor={id + b.id} className="form-control mb-2">
                {singleValue ?
                  <input required={!value} checked={value.label === b.label} type="radio" id={id + b.id}
                         name="unique" className="mr-2" onClick={() => {
                    setValue(b);
                    OnSubmit();
                  }} onChange={() => null}/> :
                  <input type="checkbox" id={id + b.id} required={!ToArray(multiSelect).length}
                         checked={multiSelect[b.id] || false}
                         className="mr-2"
                         onChange={() => setMultiSelect({...multiSelect, [b.id]: multiSelect[b.id] ? false : b})}/>}
                <small> <b>{b.label}</b> </small>
              </label>
            </div>
          })}
        </>
      );

    case FieldTypes.SELECT:
      return (
        <Select
          required={true}
          className={className}
          placeholder={placeholder}
          name="choice"
          value={choiceList}
          isMulti={!singleValue}
          options={listOptions.map((v: any) => {
            return {label: v.label, value: v.id}
          })}
          onChange={(e: any) => setChoiceList(e)}
        />
      );

    case FieldTypes.DATE:
      return (
        <div className="custom-DateInput_input">
          <SingleDatePicker
            required={true}
            date={moment(date ? date : new Date())} // momentPropTypes.momentObj or null
            onDateChange={(date: any) => setDate(date)} // PropTypes.func.isRequired
            focused={focused} // PropTypes.bool
            block
            small
            onFocusChange={({focused}) => setFocused(!!focused)} // PropTypes.func.isRequired
            id={id.toString()} // PropTypes.string.isRequired,
          />
        </div>
      );

    case FieldTypes.DATE_RANGE:
      return (
        <div className="custom-DateInput_input">
          <DateRangePicker
            required={true}
            startDate={moment(dateRange.from)} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={moment(dateRange.to)} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            block
            small
            onDatesChange={({startDate, endDate}: any) => {
              setDateRange({from: new Date(startDate), to: new Date(endDate)});
            }} // PropTypes.func.isRequired,
            focusedInput={inputFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={(focusedInput: any) => setInputFocused(focusedInput)} // PropTypes.func.isRequired,
          />
        </div>
      );

    case FieldTypes.TIME:
      return (
        <Input type="time"
               id={id}
               className={className}
               required={true}
               value={value || ''}
               onChange={e => setValue(e.target.value)}/>
      );

    case FieldTypes.TOGGLE_BUTTON:
      return (
        <div className="row justify-content-center position-relative ">
          {years.map((y: any) => {
            return (
              <div key={y} className="col-lg-3 col-md-4 col-5 mb-2 text-center">
                <input value={value} onChange={() => setValue(y)} required={true} id={y.toString()} type="radio"
                       name="toggle-button" className="display-opacity toggle-button"/>
                <label htmlFor={y.toString()} className="btn btn-light toggle-label">{y}</label>
              </div>
            )
          })}
          <a className=" toggle-control c-back">
            <FontAwesomeIcon onClick={() => setPage(page > 0 ? page - 1 : page)}
                             className={(page <= 0 ? "opacity-control" : "") + " primary pointer-event"}
                             icon={faChevronLeft}/>
          </a>
          <a aria-disabled={true} className="toggle-control c-next">
            <FontAwesomeIcon onClick={() => setPage(page < (allYears.length / pageSize - 1) ? page + 1 : page)}
                             className={(page >= (allYears.length / pageSize - 1) ? "opacity-control" : "") + " primary pointer-event"}
                             icon={faChevronRight}/>
          </a>
        </div>
      );

    case FieldTypes.LABEL:
      return (
        <div className="text-center">
          <h2 className="font-weight-light">
            <b>{label}</b>{" "}
          </h2>
          <h4 className="gray-opacity font-weight-light mb-5">{placeholder}</h4>
        </div>
      );

    case FieldTypes.BOOLEAN:
      return (
        <div className="m-0 p-0">
          <label className={className + " form-control mb-2"} htmlFor={id + "1"}>
            <input type="radio" required={true} id={id + "1"}
                   className="mr-1" name="unique" checked={value === "Yes"} onClick={() => {
              setYesNo(true);
              OnSubmit()
            }} onChange={() => null}/>
            <small><b>Yes</b></small>
          </label>

          <label className={className + " form-control mb-2"} htmlFor={id + "2"}>
            <input type="radio" required={true} id={id + "2"}
                   className="mr-1" name="unique" checked={value === "No"} onClick={() => {
              setYesNo(false);
              OnSubmit();
            }} onChange={() => null}/>
            <small><b> No</b></small>
          </label>
        </div>
      );

    default:
      return null
  }
};

export default MetadataInputComponent;
