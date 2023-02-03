import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sidebar_staff_menu_name } from "./sidebar_menu_name";

//button
import button_close from "../../../public/img_menu_staff/Button (1).png";
import button_open from "../../../public/img_menu_staff/Button (2).png";

import "./sidebar_staff.css";

function Sidebar_staff({ children }) {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuActive, setMenuActive] = useState(0);

  return (
    <div className="staff_container_page">
      <div
        className={
          sidebarOpen ? "sidebar_staff_active" : "sidebar_staff_inactive"
        }
      >
        {sidebar_staff_menu_name.map((menu, ind) => {
          return (
            <>
              <div
                className="close_open_staff_sidebar"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {menu.menu_name === "ภาพรวมระบบ" ? (
                  <img src={sidebarOpen ? button_close : button_open} />
                ) : null}
              </div>
              <div
                style={{
                  borderTop:
                    menu.menu_name === "FAQs" ? "1px solid #CECECE" : null,
                  paddingTop: menu.menu_name === "FAQs" ? "10px" : null,
                }}
              />

              <div
                className={`menulist_staff ${
                  ind === menuActive && "menulist_staff_active"
                }`}
                onClick={() => {
                  navigate(menu.link);
                  setMenuActive(ind);
                }}
              >
                <div className="menu_staff_image">
                  <img src={menu.image} />
                </div>
                {sidebarOpen ? (
                  <div className="menu_staff_name">
                    <p>{menu.menu_name}</p>
                  </div>
                ) : null}
              </div>
            </>
          );
        })}
      </div>
      <div className="staff_component_page">{children}</div>
    </div>
  );
}

export default Sidebar_staff;
