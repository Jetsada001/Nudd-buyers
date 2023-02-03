import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar_login_buyer from "../../../layout/navbar/buyer/navbar_login_buyer";

import logoNudd from "../../../public/logo/logo.png";

import "./login_buyer.css";

function Login_buyer() {
  const navigate = useNavigate();
  return (
    <Navbar_login_buyer>
      <div className="login_buyer_container">
        <div className="login_buyer_box">
          <div className="login_buyer_title">
            <div className="login_name_application">
              <img src={logoNudd} />
              <p>NUDD</p>
            </div>
            <div className="welcome_to_web_app">Welcome to NUDD</div>
          </div>
          <div className="login_input_id_pwd">
            <div className="login_buyer_username">
              <label>ชื่อผู้ใช้</label>
              <input type="text" />
            </div>
            <div className="login_buyer_pwd">
              <label>รหัสผ่าน</label>
              <input type="password" />
            </div>
            <div className="forget_password_container">
              <p className="forget_password_text">ลืมรหัสผ่าน</p>
            </div>
          </div>
          <div className="button_login_buyer_container">
            <button className="button_login_buyer">เข้าสู่ระบบ</button>
          </div>
          <div className="link_register_account_buyer">
            <p onClick={() => navigate("/register")}>ลงชื่อเข้าใช้</p>
          </div>
        </div>
      </div>
    </Navbar_login_buyer>
  );
}

export default Login_buyer;
