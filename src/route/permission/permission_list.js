// page Buyer
import Announce_buyer from "../../page/buyer/announce/announce_buyer";
import Class_buyer from "../../page/buyer/class/class_buyer";
import Dashboard_buyer from "../../page/buyer/dashboard/dashboard_buyer";
import License_buyer from "../../page/buyer/license/license_buyer";
import Member_buyer from "../../page/buyer/member/member_buyer";
import Homepage_buyer from "../../page/buyer/homepage/homepage_buyer";
import Login_buyer from "../../page/buyer/login/login_buyer";
import Register_buyer from "../../page/buyer/register/register_buyer";
import Modal_create_license from "../../components/modal/modal_active_container";

const all_pages = {
  homepage: {
    url: "/",
    page: Homepage_buyer,
  },
  login_buyer: {
    url: "/login",
    page: Login_buyer,
    layout: "no-layout",
  },
  resgister: {
    url: "/register",
    page: Register_buyer,
    layout: "no-layout",
  },

  dashboard_buyer: {
    url: "/buyer/dashboard",
    page: Dashboard_buyer,
  },
  license_buyer: {
    url: "/buyer/license",
    page: License_buyer,
  },
  memeber_buyer: {
    url: "/buyer/member",
    page: Member_buyer,
  },
  class_buyer: {
    url: "/buyer/class",
    page: Class_buyer,
  },
  announce_buyer: {
    url: "/buyer/announce",
    page: Announce_buyer,
  },
};

export const permission_list = {
  buyer: [
    all_pages.homepage,
    all_pages.login_buyer,
    all_pages.resgister,
    all_pages.dashboard_buyer,
    all_pages.license_buyer,
    all_pages.class_buyer,
    all_pages.memeber_buyer,
    all_pages.announce_buyer,
  ],
};

export const LayoutType = undefined | "no-layout";
