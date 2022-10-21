import React, { useState, useEffect } from "react";
import { Col, Row, Space } from "antd";
const DetailBookingBottom = () => {
  const weekday = [
    "Chủ nhật",
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
  ];
  const [currentDate, setCurrentDate] = useState("");
  const getCinema = JSON.parse(sessionStorage.getItem("dataNameCinema"));
  // console.log(getCinema.nameCinema + "ha");
  useEffect(() => {
    const d = new Date();
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    let day = weekday[d.getDay()];
    setCurrentDate(date + "/" + month + "/" + year + " " + "(" + day + ")");
  }, []);
  return (
    <>
      <div className="detailBookingBottom">
        <Row>
          <Col span={8}>
            <h6>Ngày: {currentDate}</h6>
          </Col>
          <Col span={8}>
            <h6>Rạp: hhhh</h6>
            {/* <p> {getCinema.nameCinema}</p> */}
          </Col>
          <Col span={8}>
            <h6>Phim:</h6>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DetailBookingBottom;
