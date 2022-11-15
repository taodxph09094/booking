import React, { useState } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "../components/style.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userAction";
import { useAlert } from "react-alert";
const HeaderUtil = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logout());
    alert.success("Đăng xuất thành công");
  };
  return (
    <>
      <div className="headerView">
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top py-3"
          id="mainNav"
        >
          <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="/">
              Logo Cinema
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">hihi</span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto my-2 my-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/news">
                    Tin tức
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="/booking">
                    Đặt vé
                  </a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="/profile">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/orders">
                    Lịch sử đặt vé
                  </a>
                </li>
                {user && (
                  <li className="nav-item">
                    <a className="nav-link" onClick={handleLogout}>
                      Đăng xuất
                    </a>
                  </li>
                )}
                {user ? (
                  <p></p>
                ) : (
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      Đăng nhập
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HeaderUtil;
