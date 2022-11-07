import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./style";
import { Button, Modal } from "antd";
import SingleSeat from "../../../../components/Booking/components/SingleSeat";
import { useParams } from "react-router-dom";
import {
  clearErrors,
  getReleasedTimeDetails,
} from "../../../../actions/releasedTimeAction";
import { formatDateTimeToString, splitText } from "../../../../utils/helper";
import { Space } from "antd";
import ResultBookingTicket from "../ResultBookingTicket/ResultBookingTicket";

const Payment = (seat) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const params = useParams();
  const seats = seat.dataFromMain;

  const { releasedTime, loading, error } = useSelector(
    (state) => state.releasedTimeDetails
  );
  const subTotal = seat.dataFromMain.length * releasedTime.price;
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getReleasedTimeDetails(params.id));
  }, [dispatch, params.id, error, alert]);
  const classes = useStyles();

  const onChange = (e) => {};
  //// modal
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoadingBtn(true);
    setTimeout(() => {
      setLoadingBtn(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <aside className={classes.payMent}>
      <div>
        {/* tổng tiền */}
        <p className={`${classes.amount} ${classes.payMentItem}`}>{subTotal}</p>

        {/* thông tin phim và rạp */}
        <div className={classes.payMentItem}>
          <p className={classes.tenPhim}>{releasedTime.film}</p>
          <p>{releasedTime.cinema}</p>
          <p>{splitText(formatDateTimeToString(releasedTime.date), 10)}</p>
        </div>

        {/* ghế đã chọn */}
        <div className={`${classes.seatInfo} ${classes.payMentItem}`}>
          <span>
            <Space size={10}>
              {`Ghế `}
              {seats}
            </Space>
          </span>

          <p className={classes.amountLittle}>{releasedTime.price}</p>
        </div>

        {/* email */}
        <div className={classes.payMentItem}>
          <label className={classes.labelEmail}>E-Mail: {user?.email}</label>
        </div>

        {/* phone */}
        <div className={classes.payMentItem}>
          <label className={classes.labelPhone}>Phone: {user?.phone}</label>
        </div>

        {/* Mã giảm giá */}
        <div className={classes.payMentItem}>
          <label className={classes.label}>Mã giảm giá</label>
          <input
            type="text"
            value="Tạm thời không hỗ trợ..."
            readOnly
            className={classes.fillIn}
          />
          <button className={classes.btnDiscount} disabled>
            Áp dụng
          </button>
        </div>

        {/* hình thức thanh toán */}
        <div className={classes.selectedPayMentMethod}>
          <label className={classes.label}>Hình thức thanh toán</label>
          <p className={classes.toggleNotice}>
            Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.
          </p>
          <div className={classes.formPayment}>
            <div className={classes.formPaymentItem}>
              <input
                className={classes.input}
                type="radio"
                name="paymentMethod"
                value="Visa, Master, JCB"
                onChange={onChange}
              />
              <img
                className={classes.img}
                src="/img/bookticket/visa.png"
                alt="visa"
              />
              <label>Visa, Master, JCB</label>
            </div>
            <div className={classes.formPaymentItem}>
              <input
                className={classes.input}
                type="radio"
                name="paymentMethod"
                value="ATM nội địa"
                onChange={onChange}
              />
              <img
                className={classes.img}
                src="/img/bookticket/atm.png"
                alt="atm"
              />
              <label>Thẻ ATM nội địa</label>
            </div>
          </div>
        </div>

        {/* đặt vé */}
        <div className={classes.bottomSection}>
          <button className={classes.btnDatVe} onClick={showModal}>
            <p className={classes.txtDatVe}>Đặt Vé</p>
          </button>
        </div>
      </div>

      {/* notice */}
      <div className={classes.notice}>
        <img
          className={classes.imgNotice}
          src="/img/bookticket/exclamation.png"
          alt="notice"
        />
        <span>Vé đã mua không thể đổi hoặc hoàn tiền</span>
        <p>
          Mã vé sẽ được gửi qua tin nhắn{" "}
          <span className={classes.contactColor}>ZMS</span> (tin nhắn Zalo) và{" "}
          <span className={classes.contactColor}>Email</span> đã nhập.
        </p>
      </div>
      <Modal
        open={open}
        title="Thông tin thanh toán"
        // onOk={handleOk}
        // onCancel={handleCancel}
        // footer={[
        //   <Button key="back" onClick={handleCancel}>
        //     Trở lại
        //   </Button>,
        //   <Button
        //     key="submit"
        //     type="primary"
        //     loading={loadingBtn}
        //     onClick={handleOk}
        //   >
        //     Thanh toán
        //   </Button>,
        // ]}
      >
        <ResultBookingTicket seatNumber={seats} />
      </Modal>
    </aside>
  );
};

export default Payment;