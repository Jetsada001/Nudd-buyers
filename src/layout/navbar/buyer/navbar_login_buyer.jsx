import React, { useEffect, useState } from "react";
import moment from "moment-timezone";

import logoNudd from "../../../public/logo/logo.png";
import AccountIcon from "../../../public/icon/Account Icon..png";

import "./navbar_buyer.css";

function Navbar_login_buyer({ children }) {
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
      <div className="navbar_buyer_container">
        <div className="navbar_buyer_left">
          <img src={logoNudd} />
          <p>NUDD</p>
        </div>
        <div className="navbar_buyer_right">
          <div className="navbar_buyer_right_date_now">
            <div className="navbar_buyer_time">
              <p>{timeString}</p>
            </div>
            <div className="navbar_buyer_date">
              <p>{dateString}</p>
            </div>
          </div>
          <div className="navbar_buyer_right_icon_logout">
            <img src={AccountIcon} />
          </div>
        </div>
      </div>
      <div className="component_page_buyer">{children}</div>
    </>
  );
}

export default Navbar_login_buyer;
