import React, { useState } from "react";
import { Card, Row, Radio, Avatar, Col, Button } from "antd";
import Films from "../components/Films/Films";
import Feture from "../components/Films/Feture";

const Home = () => {
  const [size, setSize] = useState("large");
  const { Meta } = Card;
  return (
    <>
      {/* <Feture />
      <Films /> */}

      <div className="headerHome">
        <Row>
          <Col span={24}>
            <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
              <Radio.Button
                className="buttonHeaderHome"
                size="large"
                value="large"
              >
                <span className="textGrBtn">Phim đang chiếu</span>
              </Radio.Button>
              <Radio.Button value="small" size="large" ghost={true}>
                <span className="textGrBtn">Phim sắp chiếu</span>
              </Radio.Button>
            </Radio.Group>
          </Col>
        </Row>
      </div>

      <div className="listFilm">
        <Row>
          <Col span={6}>
            <Card
              className="cardFilm"
              style={{ width: 250 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={["125 phút | 20/10/2022"]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
              <a class="buttonView" href="/jane/">
                View Jane's Profile
              </a>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              className="cardFilm"
              style={{ width: 250 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={["125 phút | 20/10/2022"]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
              <a class="buttonView" href="/jane/">
                View Jane's Profile
              </a>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              className="cardFilm"
              style={{ width: 250 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={["125 phút | 20/10/2022"]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
              <a class="buttonView" href="/jane/">
                View Jane's Profile
              </a>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              className="cardFilm"
              style={{ width: 250 }}
              cover={
                <img
                  //   className="ImageMovie"
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={["125 phút | 20/10/2022"]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />

              <a class="buttonView" href="/jane/">
                View Jane's Profile
              </a>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
