import * as React from "react";
import {PropsField} from "../../interfaces";

export default (props: PropsField) => {

  const {label, childType, className, placeholder, description, descriptionData} = props;

  if (typeof label === "string" && !childType) {
    return (
      <div className={"text-center " + className}>
        <div className="title">{label}</div>
        <div className="subtitle">{placeholder}</div>
        {description && descriptionData}
      </div>
    );
  } else {
    return (
      <div className={className}>
        {label}
        {description && descriptionData}
      </div>
    );
  }
}
