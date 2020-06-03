import * as React from "react";

export enum FieldTypes {
  LABEL = "LABEL",
  SMALL_TEXT = "SMALL_TEXT",
  LARGE_TEXT = "LARGE_TEXT",
  NUMBER = "NUMBER",
  PHONE = "PHONE",
  DATE = "DATE",
  TIME = "TIME",
  SSN = "SSN",
  CHOICE_LIST = "CHOICE_LIST",
  SELECT = "SELECT",
  DATE_RANGE = "DATE_RANGE",
  RADIO_BUTTON = "RADIO_BUTTON",
  RADIO_BUTTON_DESCRIPTION = "RADIO_BUTTON_DESCRIPTION",
  EMAIL = "EMAIL",
  LINK = "LINK",
  SCHEDULE = "SCHEDULE"
}

export interface Field {
  choice_list?: string
  choice_list_id?: string
  default_value?: string
  field_type: FieldTypes
  format: string
  id: string
  options: Option[];
  label: string
  meta_data: any[]
  name: string
  prompt: string
  required: false
  rules: any[]
  single_value: boolean
  size: number
  sort_index: number
  step: any
  template_id: string
  view_id: number
}

export interface Option {
  id: any,
  value: any,
  data: any,
  note?: any,
  icon?: any,
  label?: React.ReactNode
}
