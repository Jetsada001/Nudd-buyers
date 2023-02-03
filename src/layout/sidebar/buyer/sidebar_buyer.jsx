import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//css
import "./sidebar_buyer.css";

//image icon menu
import button_close from "../../../public/img_menu_staff/Button (1).png";
import button_open from "../../../public/img_menu_staff/Button (2).png";

//menu name && link && icon
import { sidebar_menu_buyer } from "./sidebar_menu_buyer";

function Sidebar_buyer({ children }) {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuBuyerActive, setMenuBuyerActive] = useState(0);

  return (
    <div className="buyer_container_page">
      <div
        className={
          sidebarOpen ? "sidebar_buyer_active" : "sidebar_buyer_inactive"
        }
      >
        {sidebar_menu_buyer.map((menu, ind) => {
          return (
            <>
              <div
                className="close_open_buyer_sidebar"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {menu.menu_name === "ภาพรวมระบบ" ? (
                  <img src={sidebarOpen ? button_close : button_open} />
                ) : null}
              </div>
              <div
                className={`menulist_buyer ${
                  ind === menuBuyerActive && "menulist_buyer_active"
                }`}
                onClick={() => {
                  navigate(menu.link);
                  setMenuBuyerActive(ind);
                }}
              >
                <div className="menu_buyer_image">
                  <img src={menu.icon} />
                </div>
                {sidebarOpen ? (
                  <div className="menu_buyer_name">
                    <p>{menu.menu_name}</p>
                  </div>
                ) : null}
              </div>
            </>
          );
        })}
      </div>
      <div className="buyer_page_component">{children}</div>
    </div>
  );
}

export default Sidebar_buyer;
