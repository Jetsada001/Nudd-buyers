import React from "react";
import Navbar_buyer from "./navbar/buyer/navbar_buyer";
import Sidebar_buyer from "./sidebar/buyer/sidebar_buyer";

function Nav_sidebar_buyer({ children }) {
  return (
    <>
      <Navbar_buyer>
        <Sidebar_buyer>{children}</Sidebar_buyer>
      </Navbar_buyer>
    </>
  );
}

export default Nav_sidebar_buyer;
