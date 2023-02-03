import React, { useEffect, useState } from "react";

//css
import "./navbar_buyer.css";
// logo image
import logoNudd from "../../../public/logo/logo.png";
import AccountIcon from "../../../public/icon/Account Icon..png";

function Navbar_buyer({ children, background = "#fff", height = "100vh" }) {
  return (
    <>
      <div className="navbar_buyer_container">
        <div className="navbar_buyer_left">
          <img src={logoNudd} />
          <h1>NUDD</h1>
        </div>
        <div className="navbar_buyer_right">
          <h2>หน้าหลัก</h2>
          <h2>แพ็กเกจทั้งหมด</h2>
          <h2>จัดการแพ็กเกจ</h2>
          <img src={AccountIcon} />
        </div>
      </div>
      <div className="homepage_buyer" style={{ background, height }}>
        {children}
      </div>
    </>
  );
}

export default Navbar_buyer;
