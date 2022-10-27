import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import { GiAbbotMeeple } from "react-icons/gi";
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    layout: "/admin",
  },
  {
    path: "/cinemas",
    name: "Danh sách rạp phim",
    icon: "nc-icon nc-notes",
    layout: "/admin",
  },
  {
    path: "/films",
    name: "Danh sách phim",
    icon: "nc-icon nc-notes",
    layout: "/admin",
  },
  {
    path: "/releasedTime",
    name: "Thời gian chiếu",
    icon: "nc-icon nc-notes",
    layout: "/admin",
  },
  {
    path: "/banner",
    name: "Quản lý banner",
    icon: "nc-icon nc-album-2",
    layout: "/admin",
  },
  {
    path: "/ticket-orders",
    name: "Quản lý đặt vé",
    icon: "nc-icon nc-cart-simple",
    layout: "/admin",
  },
  {
    path: "/newFeed-List",
    name: "Quản lý bài viết",
    icon: "nc-icon nc-bullet-list-67",
    layout: "/admin",
  },
  {
    path: "/coupons",
    name: "Quản lý Vourcher",
    icon: "nc-icon nc-money-coins",
    layout: "/admin",
  },
  {
    path: "/feedbacks",
    name: "Danh sách góp ý",
    icon: "nc-icon nc-email-83",
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Quản lý tài khoản",
    icon: "nc-icon nc-single-02",
    layout: "/admin",
  },
];

export default dashboardRoutes;
