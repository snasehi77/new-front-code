import {PropsField} from "../../interfaces";
import icon_search from "../../../Assets/icons/icn_search.svg";
import { ListGroup, ListGroupItem } from "reactstrap"
import React, { useState } from "react";

export default (props: PropsField) => {

  const [searchText, setSearchText] = useState<any>("")
  const [activeId, setActiveId] = useState<string | null>(null)

  const {id, options, label, onChange} = props;
  const data = (options || []).filter((item) => item.value.toString().toLowerCase().includes(searchText.toLowerCase()))
  return (
    <div className="form-group hm-field-select">
      <label className="hm-field-label" htmlFor={id}>{label}</label>
      <div className="hm-search-bar">
        <img className="hm-search-icon" src={icon_search} />
        <input
          value={searchText}
          className="hm-text-field" 
          placeholder="Choose the state"
          onFocus={() => {
            setActiveId(null)
            if (onChange) {
              onChange(undefined)
            }
          }}
          onChange={(event) => {
            setSearchText(event.target.value)
          }}
        />
      </div>
      <ListGroup className="borderless">
        {data.map((item) => {
          return (
            <ListGroupItem 
              className={"hm-field-list-label borderless " + (activeId === item.id ? "hm-field-selected" : "")}
              onClick={() => {
                setActiveId(item.id)
                if (onChange) {
                  onChange({
                    value: item.id,
                    label: item.value
                  })
                }
              }} 
              key={item.value}>
              {item.value}
            </ListGroupItem>
          )
        })}
      </ListGroup>
    </div>
  );
}