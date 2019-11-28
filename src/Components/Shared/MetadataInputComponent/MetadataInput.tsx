import React, {useEffect, useState} from 'react';
import {Input} from "reactstrap";
import './MetadataInputComponent.scss';
import {checkMail, ToArray, formatPhoneNumber, formatSSN} from "../../../Utils/Utilities";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {DateRangePicker, SingleDatePicker} from "react-dates";
import moment from "moment";
import Select from "react-select";

const MetadataInput = ({type, childType, name, className, onChange, placeholder, id, listOptions, singleValue}: any) => {

	const [date, setDate] = useState<any>(null);
	const [value, setValue] = useState<any>('');
	const [focused, setFocused] = useState(false);
	const [multiSelect, setMultiSelect] = useState<any>({});
	const [inputFocused, setInputFocused] = useState(null);
	const [choiceList, setChoiceList] = useState<any>(null);
	const [dateRange, setDateRange] = useState({from: new Date(), to: new Date()});

	useEffect(() => {
		onChange(value)
	}, [value]);

	useEffect(() => {
		if (type === 'RADIO_BUTTON' && !singleValue) {
			setValue(ToArray(multiSelect));
		}
	}, [multiSelect]);

	useEffect(() => {
		if (type === 'DATE') {
			if (date)
				setValue(date._d);
		} else if (type === 'SELECT') {
			if (choiceList && singleValue) {
				setValue(choiceList.value.toString())
			} else if (!singleValue && choiceList) {
				setValue(choiceList.map((c:any) => listOptions[c.value]));
			}
		}
	}, [date, choiceList]);


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

	switch (type) {

		case 'SMALL_TEXT':
			return (
				<Input
					required={true}
					className={checkValue(childType, value) + " " + className}
					name={name}
					onChange={e => setValue(e.target.value)}
					value={getWithFormat(childType, value) || ''}
					id={id}
					placeholder={placeholder}
				/>
			);

		case 'LARGE_TEXT':
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

		case 'NUMBER':
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

		case 'BUTTON':
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

		case 'RADIO_BUTTON':
			return (
				<>
					{listOptions.map((b: any, i: any) => {
						return <div key={i}>
							<label htmlFor={id + b.id} className="form-control mb-2">
								{singleValue ?
									<input required={!value} value={value || ''} onChange={() => setValue(b)} type="radio" id={id + b.id}
												 name="unique" className="mr-2"/> :
									<input type="checkbox" id={id + b.id} required={!value || value === ""}
												 value={multiSelect[b.id] || false}
												 className="mr-2"
												 onChange={() => setMultiSelect({...multiSelect, [b.id]: multiSelect[b.id] ? false : b})}/>}
								<small> <b>{b.label}</b> </small>
							</label>
						</div>
					})}
				</>
			);

		case 'SELECT':
			return (
				<Select
					required={true}
					className={className}
					placeholder={placeholder}
					name="choice"
					value={choiceList}
					isMulti={!singleValue}
					options={listOptions.map((v: any, i: number) => {
						return {label: v.label, value: i}
					})}
					onChange={(e: any) => setChoiceList(e)}
				/>
			);

		case 'DATE':
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

		case 'DATE_RANGE':
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

		case 'TIME':
			return (
				<Input type="time"
							 id={id}
							 className={className}
							 required={true}
							 value={value || ''}
							 onChange={e => setValue(e.target.value)}/>
			);

		default:
			return null
	}
}

export default MetadataInput;
