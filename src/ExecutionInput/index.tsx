/**
 * @author Frank Carpio Ferrer
 * @class ExampleComponent
 */

//--------------------------------
import * as React from "react";
import {FieldTypes} from "./enums";
import {PropsField} from "./interfaces";
import "react-dates/initialize";
import SmallTextComponent from "./FieldComponents/TextComponents/SmallTextComponent";
import LargeTextComponent from "./FieldComponents/TextComponents/LargeTextComponent";
import NumberComponent from "./FieldComponents/TextComponents/NumberComponent";
import RadioComponent from "./FieldComponents/RadioButtonComponent/RadioComponent";
import GridComponent from "./FieldComponents/RadioButtonComponent/GridComponent";
import CheckboxComponent from "./FieldComponents/RadioButtonComponent/CheckboxComponent";
import DateFieldComponent from "./FieldComponents/DateComponents/DateFieldComponent";
import DateRangeFieldComponent from "./FieldComponents/DateComponents/DateRangeFieldComponent";
import ScheduleFieldComponent from "./FieldComponents/DateComponents/ScheduleFieldComponent";
import ButtonDescriptionComponent from "./FieldComponents/ButtonsComponents/ButtonDescriptionComponent";
import ButtonComponent from "./FieldComponents/ButtonsComponents/ButtonComponent";
import ButtonImageComponent from "./FieldComponents/ButtonsComponents/ButtonImageComponent";
import LabelComponent from "./FieldComponents/OtherComponents/LabelComponent";
import TimeComponent from "./FieldComponents/TextComponents/TimeComponent";
import LinkComponent from "./FieldComponents/OtherComponents/LinkComponent";
import SelectComponent from "./FieldComponents/OtherComponents/SelectComponent";
import StatesComponent from "./FieldComponents/OtherComponents/StatesComponent";
import YearsComponent from "./FieldComponents/DateComponents/YearsComponent";

const ExecutionInput = (props: PropsField) => {
  const {type, singleValue, first, options} = props;

  switch (type) {
    //-------------------------------------------------
    case FieldTypes.SMALL_TEXT:
      return <SmallTextComponent {...props} />
    //-------------------------------------------------
    case FieldTypes.LARGE_TEXT:
      return <LargeTextComponent {...props} />
    //-------------------------------------------------
    case FieldTypes.NUMBER:
      return <NumberComponent {...props} />
    //-------------------------------------------------
    case FieldTypes.RADIO_BUTTON:
      if (first) {
        return <GridComponent {...props} /> //TODO: hard code for now
      } else if (singleValue) {
        return <RadioComponent {...props} />
      } else {
        return <CheckboxComponent {...props} />
      }
    //-------------------------------------------------
    case FieldTypes.LABEL:
      return <LabelComponent {...props} />
    //--------------------------------------------------
    case FieldTypes.TIME:
      return <TimeComponent {...props} />
    // -------------------------------------------------
    case FieldTypes.SELECT:
      const labels = (options || []).map((i) => i.data.label)
      if (labels.includes("California")) { //TODO: hard code for now
        return <StatesComponent {...props} />
      }
      return <SelectComponent {...props} />
    // -------------------------------------------------
    case FieldTypes.DATE:
      //return <YearsComponent {...props} /> //TODO: hard code for now
      return <DateFieldComponent {...props} />;
    // -------------------------------------------------
    case FieldTypes.DATE_RANGE:
      return <DateRangeFieldComponent {...props} />;
    // -------------------------------------------------
    case FieldTypes.LINK:
      return <LinkComponent {...props} />
    // -------------------------------------------------
    case FieldTypes.SCHEDULE:
      return <ScheduleFieldComponent {...props} />;

    case FieldTypes.RADIO_BUTTON_DESCRIPTION:
      return <ButtonDescriptionComponent {...props} />;

    case FieldTypes.BUTTON:
      return <ButtonComponent {...props} />;

    case FieldTypes.RADIO_BUTTON_IMAGE:
      return <ButtonImageComponent {...props} />

    default:
      return <div style={{textAlign: "center"}}>No data on display!</div>;
  }
};

export default ExecutionInput;
