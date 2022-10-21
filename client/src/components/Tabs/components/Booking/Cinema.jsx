import React, { useState } from "react";
import { PageHeader, Col, Row, Button, Radio } from "antd";
import { CheckOutlined } from "@ant-design/icons";
const Cinema = () => {
  const [city, setCity] = useState("hn");
  const [nameCinema, setNameCinema] = useState("");
  // console.log(nameCinema + "hi");
  const clickCinema = (e) => {
    const dataCinema = {
      nameCinema,
    };
    sessionStorage.setItem("dataNameCinema", JSON.stringify(dataCinema));
  };
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Rạp phim"
        subTitle="Chọn địa chỉ rạp phim gần bạn"
      />
      <div className="locationCinema">
        <Row>
          <Col span={6} className="locationCity">
            <>
              <Button
                className="btnCity"
                icon={<CheckOutlined className="iconCheckCity" />}
                size="middle"
                block
              >
                Hà Nội
              </Button>
              <Button
                className="btnCity"
                icon={<CheckOutlined className="iconCheckCity" />}
                size="middle"
                block
              >
                Hồ Chí Minh
              </Button>
              <Button
                className="btnCity"
                icon={<CheckOutlined className="iconCheckCity" />}
                size="middle"
                block
              >
                Đà Nẵng
              </Button>
            </>
          </Col>
          <Col span={12}>
            <div className="cinemaAdd">
              <Button
                className="btnAddress"
                icon={<CheckOutlined className="iconCheckCity" />}
                size="middle"
                onClick={(e) => {
                  clickCinema(e);
                  setNameCinema("BHD Cầu Giấy");
                }}
              >
                BHD Cầu Giấy
              </Button>
              <Button
                className="btnAddress"
                icon={<CheckOutlined className="iconCheckCity" />}
                size="middle"
                onClick={(e) => {
                  clickCinema(e);
                  setNameCinema(" Lotte IPH Xuân Thủy");
                }}
              >
                Lotte IPH Xuân Thủy
              </Button>
              <Button
                className="btnAddress"
                icon={<CheckOutlined className="iconCheckCity" />}
                size="middle"
                onClick={(e) => {
                  clickCinema(e);
                  setNameCinema(" CGV Vincom Long Biên");
                }}
              >
                CGV Vincom Long Biên
              </Button>
              <Button
                className="btnAddress"
                icon={<CheckOutlined className="iconCheckCity" />}
                size="middle"
                onClick={(e) => {
                  clickCinema(e);
                  setNameCinema("CGV Vincom Trần Duy Hưng");
                }}
              >
                CGV Vincom Trần Duy Hưng
              </Button>
              <Button
                className="btnAddress"
                icon={<CheckOutlined className="iconCheckCity" />}
                size="middle"
                onClick={(e) => {
                  clickCinema(e);
                  setNameCinema("Lotte Lanmark 72");
                }}
              >
                Lotte Lanmark 72
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Cinema;
