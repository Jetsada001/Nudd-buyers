import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { permission_list } from "./permission/permission_list";

// layout Staff
import Nav_sidebar_staff from "../layout/nav_sidebar_staff";
// modal staff
import Modal_create_license from "../components/modal/modal_active_container";
// page not found
import Page_notfound from "../page/notfound/page_notfound";
import Nav_sidebar_buyer from "../layout/nav_sidebar_buyer";
import Navbar_buyer from "../layout/navbar/buyer/navbar_buyer";
import Navbar_staff from "../layout/navbar/staff/navbar_staff";

// context Modal
import Modal_context from "../context/modal/modal_context";

function Private_route() {
  const [role, setRole] = useState("staff");
  const [modal, setModal] = useState(false);

  // call apii
  // axios.get("url").then(
  //   if currentuser.role = "staff"
  //   setRole = "staff"

  //   else if currentuser.role === "admin"
  //   setRole = "Admin"

  // )

  return (
    <Modal_context.Provider value={[modal]}>
      <Router>
        <Routes>
          {permission_list[role].map((page, ind) => (
            <Route
              path={page.url}
              key={page.url}
              element={
                <>
                  {page.layout === "no-layout" ? (
                    <page.page />
                  ) : (
                    <>
                      {role === "buyer" ? (
                        <>
                          {page.url === "/" ? (
                            <Navbar_buyer background="#333333" height="832px">
                              <page.page />
                            </Navbar_buyer>
                          ) : (
                            <Nav_sidebar_buyer>
                              <page.page />
                            </Nav_sidebar_buyer>
                          )}
                        </>
                      ) : (
                        <>
                          {page.url === "/staff/login" ? (
                            <Navbar_staff>
                              <page.page />
                            </Navbar_staff>
                          ) : (
                            <>
                              {modal ? (
                                <Modal_create_license
                                  children_modal={
                                    <page.modal_name
                                      onClose={() => setModal(false)}
                                    />
                                  }
                                >
                                  <Nav_sidebar_staff>
                                    <page.page />
                                  </Nav_sidebar_staff>
                                </Modal_create_license>
                              ) : (
                                <Nav_sidebar_staff>
                                  <page.page onOpen={() => setModal(true)} />
                                </Nav_sidebar_staff>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              }
            />
          ))}
          <Route path="*" element={<Page_notfound />} />
        </Routes>
      </Router>
    </Modal_context.Provider>
  );
}

export default Private_route;
