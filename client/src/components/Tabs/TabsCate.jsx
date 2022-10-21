import React from "react";
import { Tabs } from "antd";
import Booking from "./components/Booking/Booking";
const TabsCate = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="tabCate">
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        centered={true}
        size="large"
        tabBarGutter={80}
      >
        <Tabs.TabPane tab="Đặt vé" key="1">
          <Booking />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Xem lịch chiếu" key="2">
          Content of Tab Pane 2
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default TabsCate;
