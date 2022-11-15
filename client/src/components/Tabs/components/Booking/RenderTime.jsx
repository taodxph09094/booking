import React from "react";
import { PageHeader, Card, Row, Image } from "antd";
const RenderTime = () => {
  const { Meta } = Card;
  return (
    <>
      <div className="titleHeader">
        <PageHeader
          className="site-page-header"
          title="Giờ chiếu"
          subTitle="Thời gian chiếu phim có thể chênh lệch 15 phút do chiếu quảng cáo, giới thiệu phim ra rạp"
        />
      </div>
      <div className="renderTime">
        <PageHeader className="site-page-header" title="Tên phim" />
        <div className="titleHeader">
          <Row>
            <div className="cardScreen">
              <Card
                style={{ width: 150 }}
                title="Rạp 1"
                actions={["171/171 ghế"]}
              >
                <span className="spanTime">11:40 </span>
              </Card>
            </div>
            <div className="cardScreen">
              <Card
                style={{ width: 150 }}
                title="Rạp 2"
                actions={["171/171 ghế"]}
              >
                <span className="spanTime">11:40 </span>
              </Card>
            </div>
          </Row>
        </div>
      </div>
    </>
  );
};

export default RenderTime;
