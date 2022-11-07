import React, { useRef, useEffect, useState } from "react";
import useStyles from "./style";
import { useSelector, useDispatch } from "react-redux";
import { colorTheater, logoTheater } from "../../../../data/theaterData";
import CountDown from "../CountDown/CountDown";
import {
  CreditCardOutlined,
  CheckCircleFilled,
  MinusSquareFilled,
} from "@ant-design/icons";
import {
  CHANGE_LISTSEAT,
  SET_ALERT_OVER10,
} from "../../../../constants/BookTicket";
import TenCumRap from "../../../../components/TenCumRap";
import SeatPicker from "react-seat-picker";
import SingleSeat from "../../../../components/Booking/components/SingleSeat";

const ListSeat = () => {
  const dispatch = useDispatch();
  const domToSeatElement = useRef(null);
  const [widthSeat, setWidthSeat] = useState(0);
  const [nameFilmFake, setNameFilmFake] = useState("Haylam");
  const classes = useStyles({
    color: colorTheater[nameFilmFake.toUpperCase()],
    modalLeftImg: nameFilmFake?.hinhAnh,
    widthLabel: widthSeat / 2,
  });

  const handleResize = () => {
    setWidthSeat(domToSeatElement?.current?.offsetWidth);
  };
  useEffect(() => {
    handleResize();
  }, []);
  useEffect(() => {
    // khởi tạo event lắng nghe "resize"
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleSelectedSeat = (seatSelected) => {
    if (seatSelected.daDat) {
      // click vào ghế đã có người chọn
      return;
    }
    // đổi lại giá trị selected của ghế đã chọn
    let newListSeat = (seat) => {
      if (seatSelected.maGhe === seat.maGhe) {
        return { ...seat, selected: !seat.selected };
      }
      return seat;
    };
    // cập nhật lại danh sách hiển thị ghế đã chọn
    const newListSeatSelected = newListSeat?.reduce(
      (newListSeatSelected, seat) => {
        if (seat.selected) {
          return [...newListSeatSelected, seat.label];
        }
        return newListSeatSelected;
      },
      []
    );
    // thông báo nếu chọn quá 10 ghế
    if (newListSeatSelected.length === 11) {
      dispatch({
        type: SET_ALERT_OVER10,
      });
      return;
    }
    // cập nhật lại danhSachVe dùng để booking
    const danhSachVe = newListSeat?.reduce((danhSachVe, seat) => {
      if (seat.selected) {
        return [...danhSachVe, { maGhe: seat.maGhe, giaVe: seat.giaVe }];
      }
      return danhSachVe;
    }, []);
    // cập nhật biến kiểm tra đã có ghế nào được chọn chưa
    const isSelectedSeat = newListSeatSelected.length > 0 ? true : false;
    // tính lại tổng tiền
    const amount = newListSeat?.reduce((amount, seat) => {
      if (seat.selected) {
        return (amount += seat.giaVe);
      }
      return amount;
    }, 0);
    dispatch({
      type: CHANGE_LISTSEAT,
      payload: {
        listSeat: newListSeat,
        isSelectedSeat,
        listSeatSelected: newListSeatSelected,
        danhSachVe,
        amount,
      },
    });
  };
  const color = (seat) => {
    let color;
    if (seat.loaiGhe === "Thuong") {
      color = "#3e515d";
    }
    if (seat.loaiGhe === "Vip") {
      color = "#f7b500";
    }
    if (seat.selected) {
      color = "#44c020";
    }
    if (seat.daDat) {
      color = "#99c5ff";
    }
    return color;
  };

  return (
    <main className={classes.listSeat}>
      {/* thông tin phim */}
      <div className={classes.info_CountDown}>
        <div className={classes.infoTheater}>
          <img
            src={logoTheater[nameFilmFake.toUpperCase()]}
            alt="phim"
            style={{ width: 50, height: 50 }}
          />
          <div className={classes.text}>
            {/* <TenCumRap tenCumRap={thongTinPhim?.tenCumRap} /> */}
            <p className={classes.textTime}>20/10/2022</p>
          </div>
        </div>
        <div className={classes.countDown}>
          <p className={classes.timeTitle}>Thời gian giữ ghế</p>
          <CountDown />
        </div>
      </div>

      <div className={classes.overflowSeat}>
        <div className={classes.invariantWidth}>
          {/* mô phỏng màn hình */}
          <img
            className={classes.screen}
            src="/img/bookticket/screen.png"
            alt="screen"
          />
          {/* danh sách ghế */}
          <div className={classes.seatSelect}></div>
        </div>
      </div>
      {/* thông tin các loại ghế */}
      <div className={classes.noteSeat}>
        <div className={classes.typeSeats}>
          <div>
            <MinusSquareFilled style={{ color: "#3e515d", fontSize: 27 }} />
            <p>Ghế thường</p>
          </div>
          <div>
            <MinusSquareFilled style={{ color: "#f7b500", fontSize: 27 }} />
            <p>Ghế vip</p>
          </div>
          <div>
            <MinusSquareFilled style={{ color: "#44c020", fontSize: 27 }} />
            <p>Ghế đang chọn</p>
          </div>
          <div>
            <div style={{ position: "relative" }}>
              <p className={classes.posiX}>x</p>
              <MinusSquareFilled style={{ color: "#99c5ff", fontSize: 27 }} />
            </div>
            <p>Ghế đã được mua</p>
          </div>
        </div>
        <div className={classes.positionView}>
          <span>
            <span className={classes.linecenter} />
            <span>Ghế trung tâm</span>
          </span>
          <span className={classes.line}>
            <span className={classes.linebeautiful} />
            <span>Ghế Đẹp</span>
          </span>
        </div>
      </div>

      {/* modalleft */}
      <div className={classes.modalleft}>
        <div className={classes.opacity}></div>
      </div>
    </main>
  );
};

export default ListSeat;
