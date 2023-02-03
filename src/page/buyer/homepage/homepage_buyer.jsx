import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { data_mock_package } from "./data_mock_package";

// button focus
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./hompage_buyer.css";

function Homepage_buyer() {
  const navigate = useNavigate();

  const inputref = useRef(null);

  useEffect(() => {
    console.log("check handle click", handleClickFocusPackage);
  }, []);

  function handleClickFocusPackage() {
    inputref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <div className="homapage_buyer_container">
      <div className="homepage_buyer_container_login_register">
        <div className="homepage_buyer_login_register_container">
          <div className="homepage_button_register">
            <button
              className="register_buyer"
              onClick={() => navigate("/register")}
            >
              สมัครสมาชิก
            </button>
          </div>
          <div className="homepage_button_login">
            <button className="login_buyer" onClick={() => navigate("/login")}>
              เข้าสู่ระบบ
            </button>
          </div>
        </div>
        <div
          className="focus_package"
          onClick={() => handleClickFocusPackage()}
        >
          <div className="focus_description_more">ดูรายละเอียดเพิ่มเติม</div>
          <div className="button_focus">
            <ExpandMoreIcon />
          </div>
        </div>
      </div>
      <div className="homepage_package_buyer_recommend">
        <div className="package_recommend_title">Recommend Package</div>
        <div className="package_recommend_box_container" ref={inputref}>
          {/* box */}
          {data_mock_package.map((item) => {
            return (
              <div className="package_recoomend_box">
                <div className="package_price_name_per_month">
                  <div className="price_package">{item.price_per_year}</div>
                  <div className="package_name">{item.package_name}</div>
                  <div className="package_price_permonth">
                    {item.price_per_month}
                  </div>
                </div>
                <div className="package_description_container">
                  <div className="package_description">
                    <div className="package_description_title">
                      <h1>
                        <b>รายละเอียด</b>
                      </h1>
                    </div>
                    <div className="package_description_list">
                      <li>{item.description[1]}</li>
                      <li>{item.description[2]}</li>
                      <li>{item.description[3]}</li>
                      {/* <li>{"มีการซื้อแพ็จเกจ ไปทั้งหมด 1000"}</li> */}
                    </div>
                  </div>
                  <div className="package_button_container">
                    <button className="package_button_buy">ซื้อแพ็จเกจ</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Homepage_buyer;
