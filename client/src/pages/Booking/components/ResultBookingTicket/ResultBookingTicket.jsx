import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./style";
import { colorTheater } from "../../../../data/theaterData";
import { splitText } from "../../../../utils/helper";
import { Space } from "antd";
import Button from "@material-ui/core/Button";
import StepCheckOut from "../StepCheckOut";
import { useHistory } from "react-router-dom";
const ResultBookingTicket = (seat) => {
  const dispatch = useDispatch();
  const {
    releasedTime,
    releasedTime: { poster },
    loading,
    error,
  } = useSelector((state) => state.releasedTimeDetails);
  const history = useHistory();
  const { user } = useSelector((state) => state.user);
  const classes = useStyles({
    poster,
    color: colorTheater[splitText(releasedTime.cinema, 3).toUpperCase()],
  });
  const subtotal = seat.seatNumber.length * releasedTime.price;
  const totalPrice = seat.seatNumber.length * releasedTime.price;
  const nameFilm = releasedTime?.film;
  const nameCinema = releasedTime?.cinema;
  const address = "Hà Nội";
  const date = releasedTime?.date;
  const time = releasedTime?.time;
  const seats = seat.seatNumber;
  const price = releasedTime?.price;
  const promotion = releasedTime?.promotion;
  const quantity = seat.seatNumber.length;
  const ticket = releasedTime?._id;
  console.log(seats);
  const proceedToPayment = () => {
    const data = {
      subtotal,
      totalPrice,
      nameFilm,
      nameCinema,
      address,
      date,
      time,
      seats,
      price,
      promotion,
      quantity,
      ticket,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    history.push("/process/payment");
  };
  return (
    <>
      {/* <StepCheckOut activeStep={1} /> */}
      <div className={classes.resultBookticket}>
        <div className={classes.infoTicked}>
          <div className={classes.infoTicked__img}></div>
          <div className={classes.infoTicked__txt}>
            <p className={classes.tenPhim}>{releasedTime?.film}</p>
            <p className={classes.text__first}>
              <span>{releasedTime?.cinema.split("-")[0]}</span>
              <span className={classes.text__second}>
                -{releasedTime?.cinema.split("-")[1]}
              </span>
            </p>
            <p className={classes.diaChi}>
              Hà Nội
              {/* {releasedTime?.diaChi}  */}
            </p>
            <table className={classes.table}>
              <tbody>
                <tr>
                  <td valign="top">Suất chiếu:</td>
                  <td valign="top">{`${releasedTime?.time} ${releasedTime?.date}`}</td>
                </tr>
                <tr>
                  <td valign="top">Phòng:</td>
                  <td>{releasedTime?.cinema}</td>
                </tr>
                <tr>
                  <td valign="top">Số ghế:</td>
                  <td>{seat.seatNumber.length}</td>
                </tr>
                <tr>
                  <td valign="top">Ghế:</td>
                  <td>
                    {" "}
                    <Space size={8}>{seat.seatNumber}</Space>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div>
            <h3 className={classes.infoResult_label}>Thông tin đặt vé</h3>
            <table className={`${classes.table} table`}>
              <tbody>
                <tr>
                  <td valign="top">Họ tên:</td>
                  <td>{user?.name}</td>
                </tr>
                <tr>
                  <td valign="top">Điện thoại:</td>
                  <td valign="top">{user?.phone}</td>
                </tr>
                <tr>
                  <td valign="top">Email:</td>
                  <td>{user?.email}</td>
                </tr>
                <tr>
                  <td valign="top">Tổng tiền:</td>
                  <td valign="top">
                    <span>{seat.seatNumber.length * releasedTime.price}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={classes.spaceEvenly}>
        <Button
          classes={{ root: classes.btnResult }}
          onClick={proceedToPayment}
        >
          Thanh toán
        </Button>
      </div>
    </>
  );
};

export default ResultBookingTicket;
