import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar_login_buyer from "../../../layout/navbar/buyer/navbar_login_buyer";

//logo
import logoNudd from "../../../public/logo/logo.png";

import "./register_buyer.css";

function Register_buyer() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar_login_buyer />
      <div className="register_buyer_container">
        <div className="register_buyer_box">
          <div className="register_buyer_title_text">
            <div className="register_logo_name_app">
              <img src={logoNudd} />
              <h1>NUDD</h1>
            </div>
            <div className="register_welcome_title_text">
              <h2>Welcome to NUDD</h2>
            </div>
          </div>
          <div className="register_buyer_input_value_text_box">
            <div className="register_buyer_input_value_text">
              <label>อีเมล</label>
              <input type="text" />
            </div>
            <div className="register_buyer_input_value_text">
              <label>เบอร์มือถือ</label>
              <input type="text" />
            </div>
            <div className="register_buyer_input_value_text">
              <label>ชื่อผู้ใช้</label>
              <input type="text" />
            </div>
            <div className="register_buyer_input_value_text">
              <label>รหัสผ่าน</label>
              <input type="password" />
            </div>
            <div className="register_buyer_input_value_text">
              <label>ยืนยันรหัสผ่าน</label>
              <input type="password" />
            </div>
            <div className="register_buyer_input_value_text">
              <label>ชื่อในระบบ</label>
              <input type="text" />
            </div>
            <div className="register_buyer_checkbox">
              <input type="checkbox" />
              <p>ยินยอม</p>
            </div>
          </div>
          <div className="register_buyer_button">
            <button className="button_register_buyer">ลงชื่อเข้าใช้</button>
          </div>
          <div className="register_buyer_link_page_login">
            <p onClick={() => navigate("/login")}>เข้าสู่ระบบ</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register_buyer;
