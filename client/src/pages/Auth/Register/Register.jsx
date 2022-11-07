import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import logoTix from "../logo/logoTix.png";
import { useAlert } from "react-alert";
import { clearErrors, register } from "../../../actions/userAction";
const Register = ({ history, location }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const { name, email, password, phone, address } = user;
  const [avatar, setAvatar] = useState(
    "https://png.pngtree.com/png-clipart/20190904/original/pngtree-hand-drawn-flat-wind-user-avatar-icon-png-image_4492039.jpg"
  );
  const [avatarPreview, setAvatarPreview] = useState(
    "https://png.pngtree.com/png-clipart/20190904/original/pngtree-hand-drawn-flat-wind-user-avatar-icon-png-image_4492039.jpg"
  );
  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("phone", phone);
    myForm.set("address", address);
    myForm.set("avatar", avatar);
    dispatch(register(myForm));
  };
  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };
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
  return (
    <div className="text-light" style={{ padding: "20px 32px 30px" }}>
      <div className="container">
        <img
          src={logoTix}
          alt="logoTix"
          style={{
            width: "200px",
            marginBottom: "10px",
            cursor: "pointer",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <p style={{ textAlign: "center", marginBottom: "10px" }}>
          Đăng Ký để được nhiều ưu đãi, mua vé và bảo mật thông tin!
        </p>
      </div>
      <form
        className="col-sm-12"
        encType="multipart/form-data"
        onSubmit={registerSubmit}
      >
        <div className="form-group">
          <label>Email&nbsp;</label>

          <input
            name="email"
            type="email"
            className="form-control"
            value={email}
            onChange={registerDataChange}
          />
        </div>
        <div className="form-group">
          <label>Mật khẩu&nbsp;</label>

          <input
            name="password"
            type="password"
            className="form-control"
            value={password}
            onChange={registerDataChange}
          />
        </div>
        <div className="form-group">
          <label>Họ và tên&nbsp;</label>

          <input
            name="name"
            type="text"
            className="form-control"
            value={name}
            onChange={registerDataChange}
          />
        </div>
        <div className="form-group">
          <label>Địa chỉ&nbsp;</label>

          <input
            name="address"
            type="text"
            className="form-control"
            value={address}
            onChange={registerDataChange}
          />
        </div>

        <div className="form-group">
          <label>Số điện thoại&nbsp;</label>

          <input
            name="phone"
            type="text"
            className="form-control"
            value={phone}
            onChange={registerDataChange}
          />
        </div>
        <div id="registerImage">
          <img src={avatarPreview} alt="Avatar Preview" className="imgChange" />
          <input
            wrapperClass="mb-4"
            type="file"
            name="avatar"
            accept="image/*"
            onChange={registerDataChange}
          />
        </div>
        <div className="text-center p-2">
          <button type="submit" className="btn btn-success">
            Đăng Ký
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
