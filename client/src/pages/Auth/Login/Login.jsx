import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import logoTix from "../logo/logoTix.png";
import { clearErrors, login } from "../../../actions/userAction";
import { useAlert } from "react-alert";
const useStyles = makeStyles((theme) => ({
  eye: {
    position: "absolute",
    top: 32,
    right: 9,
    cursor: "pointer",
    color: "#000",
  },
  logoTix: {
    width: "209px",
    marginBottom: "13px",
    cursor: "pointer",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  text: {
    textAlign: "center",
    marginBottom: "30px",
  },
}));
const Login = ({ history, location }) => {
  const alert = useAlert();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [typePassword, settypePassword] = useState("password");
  console.log(loginEmail);
  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push(redirect);
    }
  }, [dispatch, error, alert, history, isAuthenticated, redirect]);

  const handleDangKy = () => {
    history.push("/register", location.state);
  };
  const handleForgot = () => {
    history.push("/password/forgot", location.state);
  };
  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };
  return (
    <div className="text-light" style={{ padding: "60px 32px 30px" }}>
      <div className="container">
        <img src={logoTix} alt="logoTix" className={classes.logoTix} />
        <p className={classes.text}>
          Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
        </p>
      </div>
      <div>
        <form
          className="col-sm-10 mx-auto"
          encType="multipart/form-data"
          onSubmit={loginSubmit}
        >
          <div className="form-group position-relative">
            <label>Tài khoản&nbsp;</label>

            <input
              type="text"
              value={loginEmail}
              className="form-control"
              name="taiKhoan"
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>

          <div className="form-group position-relative">
            <label>Mật khẩu&nbsp;</label>
            <input
              type={typePassword}
              value={loginPassword}
              className="form-control"
              name="matKhau"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <p
            className="text-success"
            style={{ cursor: "pointer" }}
            onClick={handleDangKy}
          >
            * Đăng ký
          </p>
          <p
            className="text-success"
            style={{ cursor: "pointer" }}
            onClick={handleForgot}
          >
            * Quên mật khẩu ?
          </p>
          <button
            style={{
              backgroundColor: "#3E63b6",
              borderColor: "#3E63b6",
              cursor: "pointer",
            }}
            // disable={errorLogin?.toString()}
            type="submit"
            className="btn btn-success mt-3 container"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
