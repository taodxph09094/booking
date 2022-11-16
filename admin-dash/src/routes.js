import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";
import Users from "./views/Users/Users";
import AddUser from "./views/Users/AddUser";
import UpdateUser from "./views/Users/UpdateUser";
import Movies from "./views/Movies/Movies";
import AddMovies from "./views/Movies/AddMovies";
import UpdateMovie from "./views/Movies/UpdateMovie";
import Banner from "./views/Banner/Banner";
import AddBanner from "./views/Banner/AddBanner";
import UpdateBanner from "./views/Banner/Updatebanner";
import Cinema from "./views/Cinema/Cinema";
import AddCinema from "./views/Cinema/AddCinema";
import UpdateCinema from "./views/Cinema/UpdateCinema";
import ReleasedTime from "./views/ReleasedTimes/ReleasedTime";
import AddReleasedTime from "./views/ReleasedTimes/AddReleasedTime";
import Orders from "./views/Orders/Orders";
import News from "./views/News/News";
import AddNew from "./views/News/AddNew";
import UpdateNew from "./views/News/UpdateNew";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Quản lý Phim",
    key: "Quản lý Phim",
    icon: <Icon fontSize="small">movie</Icon>,
    route: "/admin/movies",
    component: <Movies />,
  },
  {
    key: "Tạo phim mới",
    route: "/admin/addMovie",
    component: <AddMovies />,
  },
  {
    key: "Sửa phim",
    route: "/admin/updateMovie",
    component: <UpdateMovie />,
  },
  {
    type: "collapse",
    name: "Quản lý rạp phim",
    key: "Quản lý rạp phim",
    icon: <Icon fontSize="small">stadium</Icon>,
    route: "/admin/cinemas",
    component: <Cinema />,
  },
  {
    key: "Thêm rạp mới",
    route: "/admin/addCinema",
    component: <AddCinema />,
  },
  {
    key: "Sửa cinema",
    route: "/admin/updateCinema",
    component: <UpdateCinema />,
  },
  {
    type: "collapse",
    name: "Quản lý lịch chiếu",
    key: "Quản lý lịch chiếu",
    icon: <Icon fontSize="small">airplay</Icon>,
    route: "/admin/releasedTime",
    component: <ReleasedTime />,
  },
  {
    key: "Thêm lịch chiếu mới",
    route: "/admin/addReleasedTime",
    component: <AddReleasedTime />,
  },
  {
    type: "collapse",
    name: "Danh sách đặt vé",
    key: "Danh sách đặt vé",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/admin/orders",
    component: <Orders />,
  },
  {
    type: "collapse",
    name: "Danh sách bài viết",
    key: "Danh sách bài viết",
    icon: <Icon fontSize="small">list_alt</Icon>,
    route: "/admin/news",
    component: <News />,
  },
  {
    key: "Thêm bài viết mới",
    route: "/admin/addNew",
    component: <AddNew />,
  },
  {
    key: "Sửa bài viết mới",
    route: "/admin/updateNew",
    component: <UpdateNew />,
  },
  {
    type: "collapse",
    name: "Quản lý banner",
    key: "Quản lý banner",
    icon: <Icon fontSize="small">image</Icon>,
    route: "/admin/banner",
    component: <Banner />,
  },
  {
    key: "Tạo banner mới",
    route: "/admin/addBanner",
    component: <AddBanner />,
  },

  {
    key: "Sửa banner",
    route: "/admin/updateBanner",
    component: <UpdateBanner />,
  },

  // {
  //   type: "collapse",
  //   name: "Tables",
  //   key: "tables",
  //   icon: <Icon fontSize="small">table_view</Icon>,
  //   route: "/tables",
  //   component: <Tables />,
  // },
  // {
  //   type: "collapse",
  //   name: "Billing",
  //   key: "billing",
  //   icon: <Icon fontSize="small">receipt_long</Icon>,
  //   route: "/billing",
  //   component: <Billing />,
  // },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
  //   route: "/rtl",
  //   component: <RTL />,
  // },
  // {
  //   type: "collapse",
  //   name: "Notifications",
  //   key: "notifications",
  //   icon: <Icon fontSize="small">notifications</Icon>,
  //   route: "/notifications",
  //   component: <Notifications />,
  // },
  // {
  //   type: "collapse",
  //   name: "Profile",
  //   key: "profile",
  //   icon: <Icon fontSize="small">person</Icon>,
  //   route: "/profile",
  //   component: <Profile />,
  // },
  {
    type: "collapse",
    name: "Quản lý tài khoản",
    key: "Quản lý tài khoản",
    icon: <Icon fontSize="small">account_box</Icon>,
    route: "/admin/users",
    component: <Users />,
  },

  {
    key: "Tạo tài khoản",
    route: "/admin/addUser",
    component: <AddUser />,
  },
  {
    key: "Sửa tài khoản",
    route: "/admin/updateUser",
    component: <UpdateUser />,
  },
  // {
  //   type: "collapse",
  //   name: "Sign In",
  //   key: "sign-in",
  //   icon: <Icon fontSize="small">login</Icon>,
  //   route: "/login",
  //   component: <SignIn />,
  // },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/register",
    component: <SignUp />,
  },
];

export default routes;
