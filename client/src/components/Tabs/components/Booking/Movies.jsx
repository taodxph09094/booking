import React, { useState } from "react";
import { PageHeader, Row, Avatar, Rate, Space, Button } from "antd";
import { UserOutlined, DiffOutlined } from "@ant-design/icons";

const Movies = () => {
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Phim"
        subTitle="Chọn rạp phim để hiển thị phim"
      />
      <Row>
        <div className="movieInfo">
          <Space size={20}>
            <Avatar
              shape="square"
              style={{
                verticalAlign: "middle",
              }}
              size={64}
              icon={<UserOutlined />}
            />
            <div className="nameMovie">Black Adam</div>
          </Space>
          <div className="rateMovie">
            (<Rate disabled defaultValue={5} />)
          </div>
          <div className="btnMovie">
            <Space size={10}>
              <Button
                className="btnOrder"
                type="primary"
                shape="round"
                size="middle"
              >
                Đặt vé
              </Button>
              <Button
                className="btnDetail"
                type="primary"
                shape="round"
                size="middle"
              >
                Chi tiết
              </Button>
            </Space>
          </div>
        </div>
        <div className="movieInfo">
          <Space size={20}>
            <Avatar
              shape="square"
              style={{
                verticalAlign: "middle",
              }}
              size={64}
              icon={<UserOutlined />}
            />
            <div className="nameMovie">Cô gái từ quá khứ</div>
          </Space>
          <div className="rateMovie">
            (<Rate disabled defaultValue={3} />)
          </div>
          <div className="btnMovie">
            <Space size={10}>
              <Button
                className="btnOrder"
                type="primary"
                shape="round"
                size="middle"
              >
                Đặt vé
              </Button>
              <Button
                className="btnDetail"
                type="primary"
                shape="round"
                size="middle"
              >
                Chi tiết
              </Button>
            </Space>
          </div>
        </div>
      </Row>
    </>
  );
};

export default Movies;
