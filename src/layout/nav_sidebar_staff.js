import React from "react";
import Navbar_staff from "./navbar/staff/navbar_staff";
import Sidebar_staff from "./sidebar/staff/sidebar_staff";

function Nav_sidebar_staff({ page = "/", option = undefined, children }) {
  return (
    <>
      <Navbar_staff>
        <Sidebar_staff>{children}</Sidebar_staff>
      </Navbar_staff>
    </>
  );
}

export default Nav_sidebar_staff;
