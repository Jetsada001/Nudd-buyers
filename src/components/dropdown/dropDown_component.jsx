import React, { useCallback, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../_component.scss";

function DropDownComponent(
  width = null,
  labelValue = "",
  setDataList ,
  focusField = "",
  currentField = "",
  setFocusfield = () => {},
  dataList = []
) {
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    if (focusField !== currentField && openDropdown) {
      setOpenDropdown(false);
    }
  }, [focusField]);

  const onOptionChangeHandler = useCallback(
    setDataList(dataList),
    setOpenDropdown(false),
    setFocusfield("")
  );

  return (
    <div className="component_dropdown_type">
      <p className="component_dropdown_label">{labelValue}</p>
      <Button
        onClick={() => {
          setFocusfield(!openDropdown ? currentField : "");
          setOpenDropdown(!openDropdown);
        }}
        width="100%"
      ></Button>
    </div>
  );
}

export default DropDownComponent;
