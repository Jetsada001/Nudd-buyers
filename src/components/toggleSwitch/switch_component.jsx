import React from "react";
import "./switch_component.scss";

function SwitchComponent() {
  return (
    <div class="container example">
      <label class="switch">
        <input type="checkbox"></input>
        <span class="slider round"></span>
      </label>
    </div>
  );
}

export default SwitchComponent;
