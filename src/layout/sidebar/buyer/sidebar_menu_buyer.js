import dashboard_buyer_icon from "../../../public/img_menu_staff/vector (2).png";
import license_buyer_icon from "../../../public/img_menu_staff/vector (5).png";
import class_icon from "../../../public/img_menu_staff/vector (6).png";
import member_buyer_icon from "../../../public/img_menu_staff/vector (7).png";
import announce_icon from "../../../public/img_menu_staff/vector (8).png";

export const sidebar_menu_buyer = [
  {
    icon: dashboard_buyer_icon,
    menu_name: "ภาพรวมระบบ",
    link: "/buyer/dashboard",
  },
  {
    icon: license_buyer_icon,
    menu_name: "ใบอนุญาต",
    link: "/buyer/license",
  },
  {
    icon: member_buyer_icon,
    menu_name: "สมาชิก",
    link: "/buyer/member",
  },
  {
    icon: class_icon,
    menu_name: "รุ่น",
    link: "/buyer/class",
  },
  {
    icon: announce_icon,
    menu_name: "ประกาศ",
    link: "/buyer/announce",
  },
];
