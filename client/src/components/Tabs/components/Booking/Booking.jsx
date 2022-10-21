import React from "react";
import { Col, Row } from "antd";
import Cinema from "./Cinema";
import Movies from "./Movies";
import DetailBookingBottom from "./detailBookingBottom";
import RenderTime from "./RenderTime";
const Booking = () => {
  return (
    <>
      <Row>
        <Col span={12} className="cinemaBorder">
          <Cinema />
        </Col>
        <Col span={12} className="movieBorder">
          <Movies />
        </Col>
      </Row>
      <DetailBookingBottom />
      <RenderTime />
    </>
  );
};

export default Booking;
