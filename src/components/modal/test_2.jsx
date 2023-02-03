import React from "react";

function Test2({ onClose }) {
  return (
    <div className="modal_container">
      <div className="modal_title_text">
        <h2 onClick={onClose}>สร้างใบอนุญาติ</h2>
      </div>
      <div className="modal_description_value_container">
        <div className="modal_description_value_text_container">
          <h2>hi</h2>
          <input />
        </div>
        <div className="modal_description_value_text_container">
          <h2>hi</h2>
          <input />
        </div>
        <div className="modal_description_value_text_container">
          <h2>hi</h2>
          <input />
        </div>
      </div>
    </div>
  );
}

export default Test2;
