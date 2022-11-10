import React, { Component } from "react";
import SeatPicker from "react-seat-picker";
import CountDown from "../../../pages/Booking/components/CountDown/CountDown";
// import "./styles.css";
import "./seats.css";
import SeatIcon from "@material-ui/icons/CallToActionRounded";

export default class App extends Component {
  addSeatCallback = ({ row, number, id }, addCb) => {
    this.props.setSelected((prevItems) => [...prevItems, number]);
    const newTooltip = `tooltip for id-${id} added by callback`;
    addCb(row, number, id, newTooltip);
  };

  removeSeatCallback = ({ row, number, id }, removeCb) => {
    this.props.setSelected((list) => list.filter((item) => item !== number));
    removeCb(row, number);
  };

  render() {
    const rows = [
      [
        { id: 1, number: "A1" },
        { id: 2, number: "A2" },
        { id: 3, number: "A3" },
        { id: 4, number: "A4" },
        null,
        { id: 5, number: "A5" },
        { id: 6, number: "A6" },
        { id: 7, number: "A7" },
        { id: 8, number: "A8" },
        { id: 9, number: "A9", isReserved: true },
        { id: 11, number: "A10" },
        { id: 12, number: "A11" },
        { id: 13, number: "A12" },
        null,
        { id: 11, number: "A13" },
        { id: 12, number: "A14" },
        { id: 13, number: "A15" },
      ],
      [
        { id: 14, number: "B1" },
        { id: 15, number: "B2" },
        { id: 16, number: "B3", isReserved: true },
        { id: 17, number: "B4" },
        null,
        { id: 19, number: "B5" },
        { id: 20, number: "B6" },
        { id: 21, number: "B7" },
        { id: 22, number: "B8" },
        { id: 23, number: "B9" },
        { id: 11, number: "B10" },
        { id: 12, number: "B11" },
        { id: 13, number: "B12" },

        null,
        { id: 11, number: "B13" },
        { id: 12, number: "B14", isReserved: true },
        { id: 13, number: "B15" },
      ],
      [
        { id: 28, number: "C1" },
        { id: 29, number: "C2" },
        { id: 30, number: "C3" },
        { id: 31, number: "C4" },
        null,
        { id: 32, number: "C5" },
        { id: 33, number: "C6" },
        { id: 34, number: "C7", isReserved: true },
        { id: 35, number: "C8" },
        { id: 36, number: "C9" },
        { id: 11, number: "C10" },
        { id: 12, number: "C11" },
        { id: 13, number: "C12", isReserved: true },
        null,
        { id: 11, number: "C13" },
        { id: 12, number: "C14" },
        { id: 13, number: "C15" },
      ],
      [
        { id: 40, number: "D1" },
        { id: 41, number: "D2" },
        { id: 42, number: "D3" },
        { id: 43, number: "D4" },
        null,
        { id: 44, number: "D5" },
        { id: 45, number: "D6" },
        { id: 56, number: "D7", isReserved: true },
        { id: 47, number: "D8" },
        { id: 48, number: "D9" },
        { id: 11, number: "D10" },
        { id: 12, number: "D11" },
        { id: 13, number: "D12", isReserved: true },
        null,
        { id: 11, number: "D13" },
        { id: 12, number: "D14" },
        { id: 13, number: "D15" },
      ],
      [
        { id: 52, number: "E1" },
        { id: 53, number: "E2" },
        { id: 54, number: "E3", isReserved: true },
        { id: 55, number: "E4" },
        null,
        { id: 44, number: "E5" },
        { id: 45, number: "ED6" },
        { id: 56, number: "E7", isReserved: true },
        { id: 47, number: "E8" },
        { id: 48, number: "E9" },
        { id: 11, number: "E10" },
        { id: 12, number: "E11" },
        { id: 13, number: "E12" },
        null,
        { id: 11, number: "E13" },
        { id: 12, number: "E14" },
        { id: 13, number: "E15" },
      ],
      [
        { id: 52, number: "F1" },
        { id: 53, number: "F2" },
        { id: 54, number: "F3", isReserved: true },
        { id: 55, number: "F4" },
        null,
        { id: 44, number: "F5" },
        { id: 45, number: "F6" },
        { id: 56, number: "F7", isReserved: true },
        { id: 47, number: "F8" },
        { id: 48, number: "F9" },
        { id: 11, number: "F10" },
        { id: 12, number: "F11" },
        { id: 13, number: "F12" },
        null,
        { id: 11, number: "F13" },
        { id: 12, number: "F14" },
        { id: 13, number: "F15" },
      ],
      [
        { id: 52, number: "G1" },
        { id: 53, number: "G2" },
        { id: 54, number: "G3", isReserved: true },
        { id: 55, number: "G4" },
        null,
        { id: 44, number: "G5" },
        { id: 45, number: "G6" },
        { id: 56, number: "G7", isReserved: true },
        { id: 47, number: "G8" },
        { id: 48, number: "G9" },
        { id: 11, number: "G10" },
        { id: 12, number: "G11" },
        { id: 13, number: "G12" },
        null,
        { id: 11, number: "G13" },
        { id: 12, number: "G14" },
        { id: 13, number: "G15" },
      ],
      [
        { id: 52, number: "H1" },
        { id: 53, number: "H2" },
        { id: 54, number: "H3", isReserved: true },
        { id: 55, number: "H4" },
        null,
        { id: 44, number: "H5" },
        { id: 45, number: "H6" },
        { id: 56, number: "H7", isReserved: true },
        { id: 47, number: "H8" },
        { id: 48, number: "H9" },
        { id: 11, number: "H10" },
        { id: 12, number: "H11" },
        { id: 13, number: "H12" },
        null,
        { id: 11, number: "H13" },
        { id: 12, number: "H14" },
        { id: 13, number: "H15" },
      ],
    ];
    return (
      // <div className="App">
      //   <div className="screen">screen</div>
      //   <SeatPicker
      //     addSeatCallback={this.addSeatCallback.bind(this)}
      //     removeSeatCallback={this.removeSeatCallback.bind(this)}
      //     rows={rows}
      //     alpha
      //     maxReservableSeats={6}
      //     visible
      //   />
      // </div>
      <main className="listSeat">
        {/* thông tin phim */}
        <div className="info_CountDown">
          <div className="infoTheater">
            {/* <img
              src={
                logoTheater[thongTinPhim?.tenCumRap.slice(0, 3).toUpperCase()]
              }
              alt="phim"
              style={{ width: 50, height: 50 }}
            /> */}
            <div className="text">
              {/* <TenCumRap tenCumRap={thongTinPhim?.tenCumRap} /> */}
              {/* <p className={classes.textTime}>{`${
                thongTinPhim && formatDate(thongTinPhim.ngayChieu).dayToday
              } - ${thongTinPhim?.gioChieu} - ${thongTinPhim?.tenRap}`}</p> */}
            </div>
          </div>
          <div className="countDown">
            <p className="timeTitle">Thời gian giữ ghế</p>
            <CountDown />
          </div>
        </div>

        <div className="overflowSeat">
          <div className="invariantWidth">
            {/* mô phỏng màn hình */}

            {/* danh sách ghế */}
          </div>
        </div>
        <img className="screen" src="/img/bookticket/screen.png" alt="screen" />
        <div className="seatSeat">
          <SeatPicker
            addSeatCallback={this.addSeatCallback.bind(this)}
            removeSeatCallback={this.removeSeatCallback.bind(this)}
            rows={rows}
            alpha
            maxReservableSeats={6}
            visible
          />
        </div>
        {/* thông tin các loại ghế */}
        <div className="noteSeat">
          <div className="typeSeats">
            <div>
              <SeatIcon style={{ color: "#99c5ff", fontSize: 27 }} />
              <p>Ghế có thể mua</p>
            </div>
            {/* <div>
              <SeatIcon style={{ color: "#f7b500", fontSize: 27 }} />
              <p>Ghế vip</p>
            </div> */}
            <div>
              <SeatIcon style={{ color: "#44c020", fontSize: 27 }} />
              <p>Ghế đang chọn</p>
            </div>
            <div>
              <div style={{ position: "relative" }}>
                <p className="posiX">x</p>
                <SeatIcon style={{ color: "gray", fontSize: 27 }} />
              </div>
              <p>Ghế đã được mua</p>
            </div>
          </div>
          <div className="positionView">
            <span>
              <span className="linecenter" />
              <span>Ghế trung tâm</span>
            </span>
            <span className="line">
              <span className="linebeautiful" />
              <span>Ghế Đẹp</span>
            </span>
          </div>
        </div>
      </main>
    );
  }
}
