import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import useStyles from "./style";
import { colorTheater, logoTheater } from "../../../../data/theaterData";
import {
  RESET_DATA_BOOKTICKET,
  RESET_ALERT_OVER10,
} from "../../../../constants/BookTicket";
import ResultBookingTicket from "../ResultBookingTicket/ResultBookingTicket";

const ModalTicket = () => {
  const dispatch = useDispatch();
  const param = useParams(); // lấy dữ liệu param từ URL
  const history = useHistory();
  const [nameFilmFake, setNameFilmFake] = useState("Haylam");
  const [errorBookTicketMessage, setErrorBookTicketMessage] = useState(true);
  const [successBookingTicketMessage, setSuccessBookingTicketMessage] =
    useState(true);
  // useEffect(() => {

  // })
  const classes = useStyles({
    color: colorTheater[nameFilmFake.toUpperCase()],
  });
  const isBookticket =
    successBookingTicketMessage || errorBookTicketMessage ? true : false;

  const handleAlertOver10 = () => {
    dispatch({ type: RESET_ALERT_OVER10 });
  };

  const handleCombackHome = () => {
    dispatch({ type: RESET_DATA_BOOKTICKET });
    // dispatch({ type: LOADING_BACKTO_HOME });
    history.push("/");
  };
  return (
    <Dialog
      open={120 || isBookticket || "Khong"}
      classes={{ paper: classes.modal }}
      maxWidth="md"
    >
      {120 &&
        !isBookticket && ( // không thông báo hết giờ khi đã có kết quả đặt vé
          <div className={classes.padding}>
            <p>
              Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời
              hạn 5 phút.
              <span className={classes.txtClick}>Đặt vé lại</span>
            </p>
          </div>
        )}
      {"Khong" &&
        !120 && ( // ẩn thông báo quá 10 ghế khi time out
          <div className={classes.over10}>
            <div className={classes.notification}>
              <img
                width="100%"
                src="/img/bookticket/Post-notification.png"
                alt="Post-notification"
              />
            </div>
            <p className={classes.textOver}>Bạn không thể chọn quá 10 ghế</p>
            <Button
              variant="outlined"
              classes={{ root: classes.btnOver }}
              onClick={handleAlertOver10}
            >
              ok
            </Button>
          </div>
        )}

      <>
        <ResultBookingTicket />
        <div className={classes.spaceEvenly}>
          <Link to="/booking-ticket">
            <Button
              classes={{ root: classes.btnResult }}
              // onClick={handleReBooking}
            >
              {successBookingTicketMessage && "Mua thêm vé phim này"}
              {errorBookTicketMessage && "Thử mua lại"}
            </Button>
          </Link>
          <Button
            classes={{ root: classes.btnResult }}
            onClick={handleCombackHome}
          >
            Quay về trang chủ
          </Button>
        </div>
      </>
    </Dialog>
  );
};

export default ModalTicket;
