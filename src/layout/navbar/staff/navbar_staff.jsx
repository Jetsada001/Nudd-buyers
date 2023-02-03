import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

// logo image
import logoNudd from "../../../public/logo/logo.png";
import AccountIcon from "../../../public/icon/Account Icon..png";

import "./navbar_staff.css";

function Navbar_staff({ children }) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const dateString = moment()
    .tz("Asia/Bangkok")
    .add(543, "years")
    .format("DD / MM / YYYY");
  const timeString = moment().tz("Asia/Bangkok").format("HH:mm:ss");

  return (
    <>
      <div className="navbar_staff">
        <div className="navbar_staff_left">
          <div className="navbar_staff_left_img">
            <img src={logoNudd} />
          </div>
          <div className="navbar_staff_left_name_app">
            <p>NUDD</p>
            <p>Admin Panel</p>
          </div>
        </div>
        <div className="navbar_staff_right">
          <div className="navbar_staff_right_date_now">
            <p>{timeString}</p>
            <p>{dateString}</p>
          </div>
          <div className="navbar_staff_right_icon_logout">
            <img src={AccountIcon} />
          </div>
        </div>
      </div>
      <div className="component_page_staff">{children}</div>
    </>
  );
}

export default Navbar_staff;
