import React, { useContext } from "react";
import Modal_context from "../../context/modal/modal_context";
import "./modal.scss";

function Modal_create_license({ children_modal, children }) {
  const [modal] = useContext(Modal_context);

  return (
    <div
      className={`page_super_staff_container ${
        modal && "page_super_staff_container_active"
      }`}
    >
      <div
        className={`page_staff_container ${
          modal && "page_staff_container_active"
        }`}
      >
        {/* page */}
        <div
          className={`page_component_container ${
            modal && "page_component_container_active"
          }`}
        >
          {children}
        </div>
        {/* table */}
      </div>
      <div
        className={`super_modal_container ${
          modal && "super_modal_container_active"
        }  `}
      >
        {/*  modal */}
        {children_modal}
        {/* modal */}
      </div>
    </div>
  );
}

export default Modal_create_license;
