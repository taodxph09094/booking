import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import logoTix from "../logo/logoTix.png";
import {
  clearErrors,
  forgotPassword,
  login,
} from "../../../actions/userAction";
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
const ForgotPass = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const classes = useStyles();
  const theme = useTheme();
  const { error, message, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);
    dispatch(forgotPassword(myForm));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      alert.success(message);
    }
  }, [dispatch, error, alert, message]);

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
          onSubmit={forgotPasswordSubmit}
        >
          <div className="form-group position-relative">
            <label>Email&nbsp;</label>

            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Nhập email để tiếp tục"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
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
            Xác nhận
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPass;
