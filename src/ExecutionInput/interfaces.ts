import {FieldTypes} from "./enums";
import * as React from "react";

export interface Options {
  value: string | number,
  label?: React.ReactNode;
  data: any,
  note?: React.ReactNode,
  id: string,
  icon?: React.ReactNode;
  state: "green" | "red" | "yellow"
}

export interface DateRange {
  from: Date,
  to: Date
}


export interface PropsField {
  id?: string;
  label?: string | React.ReactNode,
  required?: boolean,
  value?: any,
  url?: string,
  name?: string,
  type: FieldTypes.DATE | FieldTypes.DATE_RANGE | FieldTypes.LABEL | FieldTypes.LARGE_TEXT |
    FieldTypes.RADIO_BUTTON | FieldTypes.SMALL_TEXT | FieldTypes.BUTTON | FieldTypes.RADIO_BUTTON_IMAGE |
    FieldTypes.SELECT | FieldTypes.TIME | FieldTypes.NUMBER | FieldTypes.LINK | FieldTypes.SCHEDULE | FieldTypes.RADIO_BUTTON_DESCRIPTION | string,
  childType?: FieldTypes.PHONE | FieldTypes.SSN | FieldTypes.EMAIL | string;
  options?: Array<Options>,
  singleValue?: boolean,
  placeholder?: string,
  selectValue?: any,
  className?: string,
  onChange?: (e: any) => void,
  setFocused?: (e: any) => void,
  focused?: boolean | any,
  styles?: any,
  description?: boolean,
  descriptionData?: React.ReactNode,
  SingleDatePicker?: any,
  DateRangePicker?: any,
  radioAction?: (data: any) => void,
  radioIconAction?: (data: any) => void,
  moment?: (event: any) => void,
  radioIcon?: React.ReactNode,
  customChecked?: React.ReactNode
}

export interface TimeFormat {
  hour: number,
  minutes: number
}

// export type PropsField = PropsFieldLabel | PropsFieldRadioButton | PropsDate | PropsDateRange |
//   PropsSmallText | PropsLargeText | PropsNumber | PropsTime | PropsSelect;
//
//
// export interface PropsBaseField {
//   id?: string;
//   label?: string,
//   placeholder?: string,
//   required?: boolean,
//   className?: string,
// }
//
// interface PropsText {
//   value?: string,
//   onChange?: (e: any) => void,
// }
//
// export interface PropsSmallText extends PropsBaseField, PropsText {
//   type: typeof FieldTypes.SMALL_TEXT,
//   childType?: FieldTypes.PHONE | FieldTypes.SSN | FieldTypes.EMAIL,
// }
//
// export interface PropsLargeText extends PropsBaseField, PropsText {
//   type: typeof FieldTypes.LARGE_TEXT,
// }
//
// export interface PropsFieldRadioButton extends PropsBaseField, PropsText {
//   type: typeof FieldTypes.RADIO_BUTTON,
//   options: Array<Options>,
//   singleValue?: boolean,
//   multiSelect?: any,
//   radioIcon?: string,
//   radioAction?: (data: any) => void,
//   radioIconAction?: (data: any) => void,
//   setMultiSelect?: (e: Options) => void,
// }
//
// export interface PropsFieldLabel extends PropsBaseField {
//   type: typeof FieldTypes.LABEL;
// }
//
// export interface PropsNumber extends PropsBaseField, PropsText {
//   type: typeof FieldTypes.NUMBER
// }
//
// export interface PropsTime extends PropsBaseField, PropsText {
//   type: typeof FieldTypes.TIME
// }
//
// export interface PropsSelect extends PropsBaseField {
//   type: typeof FieldTypes.SELECT,
//   selectValue?: any,
//   setSelectValue?: (event: any) => void,
//   options: Array<Options>,
//   singleValue?: boolean,
// }
//
// export interface PropsDate extends PropsBaseField {
//   type: typeof FieldTypes.DATE,
//   SingleDatePicker: any,
//   date?: any,
//   setDate?: (e: any) => void,
//   moment?: (event: any) => void,
//   focused: boolean,
//   setFocused: (e: any) => void,
// }
//
// export interface PropsDateRange extends PropsBaseField {
//   type: typeof FieldTypes.DATE_RANGE,
//   DateRangePicker: any,
//   dateRange?: DateRange,
//   setDateRange?: (event: DateRange) => void,
//   focused: boolean,
//   setFocused: (e: any) => void,
// }
