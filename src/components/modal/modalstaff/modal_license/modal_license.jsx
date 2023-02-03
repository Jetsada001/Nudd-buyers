import React, { useState } from "react";
import "./modal_license.scss";

import { useDropzone } from "react-dropzone";
import { FileUploader } from "react-drag-drop-files";
import button_close from "../../../../public/button_close/vector (20).png";
import { object } from "prop-types";

const filesTypes = ["PNG", "JPG", "GIF"];

function Modal_license({ onClose }) {
  const [file, setFile] = useState([]);
  const handleFileChange = (file) => {
    console.log(file);
  };

  const { getRootProps, getInput } = useDropzone({
    accept: "image/*",
    onDrop: (acceptfiles) => {
      setFile(acceptfiles);
      acceptfiles.map((file) =>
        Object.assign(
          file,
          {
            preview: URL.createObjectURL(file),
          }
          // console.log("file", file)
        )
      );
    },
  });

  const image = file.map((file) => (
    <div key={file.name}>
      <img src={file.preview} style={{ width: "205px", height: "100px" }} />
    </div>
  ));

  return (
    <div className="modal_container">
      <div className="modal_title_text">
        <h2>สร้างใบอนุญาต</h2>
        {/* <img src={button_close} onClick={onClose} /> */}
      </div>
      <div className="modal_description_value_container">
        <div className="modal_description_value_text_container">
          <h2>เลือกแพ็กเกจ</h2>
          <select>
            <option className="option">กรุณาเลือกแพ็กเกจ</option>
          </select>
        </div>
        <div className="modal_description_value_text_container">
          <h2>ประเภท</h2>
          <input />
        </div>
        <div className="modal_description_value_text_container">
          <h2>จำนวนรุ่นที่สร้างได้</h2>
          <input />
        </div>
        <div className="modal_description_value_text_container">
          <h2>ราคา</h2>
          <input />
        </div>
        <div className="modal_description_value_text_container">
          <h2>เลือกผู้ซื้อ</h2>
          <select>
            <option className="option">กรุณาเลือก....</option>
          </select>
        </div>
        <div className="drag_drop_zone_image">
          <h2>เลือกผู้ซื้อ</h2>
          <div>
            <input {...getRootProps()} />
            {/* <FileUploader
              handleChange={handleFileChange}
              name="file"
              types={filesTypes}
              
            /> */}
            {image}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal_license;
