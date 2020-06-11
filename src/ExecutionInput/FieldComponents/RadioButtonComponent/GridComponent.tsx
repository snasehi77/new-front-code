import * as React from "react";

import {PropsField} from "../../interfaces";
import icon_motor_vehicle_accident from "../../../Assets/icons/YC_Icon_Auto_Accidents_Green.png";
import icon_personal_injury from "../../../Assets/icons/YC_Icon_Personal_Injury.png";
import icon_workplace_injury from "../../../Assets/icons/YC_Icon_Workplace_Injuries_Green.png";
import icon_employment_issue from "../../../Assets/icons/YC_Icon_Sexual_Harassment_Green.png";
import icon_sexual_abuse from "../../../Assets/icons/YC_Icon_Workplace_Discrimination_Green.png";
import icon_elder_abuse from "../../../Assets/icons/YC_Icon_Elder_Care_Green.png";

export default (props: PropsField) => {

  const {label, className, options, onChange, radioAction} = props;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Motor Vehicle Accident':
        return icon_motor_vehicle_accident
      case "Personal Injury":
        return icon_personal_injury
      case "Workplace Injury":
        return icon_workplace_injury
      case "Employment Issue":
        return icon_employment_issue
      case "Sexual Abuse":
        return icon_sexual_abuse
      case "Elder Abuse":
        return icon_elder_abuse
    }
  }

  return (
    <div className={"form-group " + className}>
      <div>
        <label>{label}</label>
          <div className="content-cases-grid">
            {(options || []).map(c => {
              let label: string = c.value.toString() || ""
              return (
                <div 
                  key={c.id + "item"} 
                  onClick={() => {
                    if (onChange) {
                      onChange({value: c.value, data: c.data})
                    }
                    if (radioAction) {
                      radioAction(c)
                    }
                  }}>
                  <div className="item-route m-auto d-flex justify-content-center align-items-center icon-on-display">
                    <div className="item-route-icon">
                      <img src={getIcon(label)} className="mobile-image-size" alt=""/>
                    </div>
                    <h6 className="cases-label">{label}</h6>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="final-case-paragraph hm-text-left hm-p-0 final-case-margin">Can’t find what you are looking for? <a href="mailto: attorneyinquiries@yourcase.com" className="link-orange pointer">Contact&nbsp;us.</a></p>
      </div>
    </div>
  );
}
