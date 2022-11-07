import React, { useEffect, useRef, useState } from "react";
import Films from "../components/Films/Films";
import Slider from "react-slick";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import Feture from "../components/Films/Feture";
import "../assets/css/home.css";
import "../components/Banner/banner.css";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Banner from "../components/Banner/Banner";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <RightOutlined
      style={{ right: "15px" }}
      onClick={onClick}
      className="BtnArrow"
    />
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <LeftOutlined
      style={{ left: "15px" }}
      onClick={onClick}
      className="BtnArrow"
    />
  );
}
const settings = {
  className: "center",
  centerPadding: "60px",
  slidesToShow: 1,
  speed: 500,
  rows: 2,
  slidesPerRow: 4,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
const Home = () => {
  const [value, setValue] = useState({ value: 0, fade: true, notDelay: 0 });

  const timeout = useRef(null);
  useEffect(() => {
    return () => {
      clearTimeout(timeout.current);
    };
  }, []);
  const handleChange = (e, newValue) => {
    setValue((value) => ({ ...value, notDelay: newValue, fade: false }));
    timeout.current = setTimeout(() => {
      setValue((value) => ({ ...value, value: newValue, fade: true }));
    }, 100);
  };
  return (
    <>
      <Banner />
      <div style={{ paddingTop: "80px" }} id="lichchieu">
        <AppBar className="appBar" position="static">
          <Tabs
            classes="appBar indicator flexContainer"
            value={value.value}
            onChange={handleChange}
          >
            <Tab
              disableRipple
              className="tabButton tabDangChieu"
              label="Phim đang chiếu"
            />
            <Tab
              disableRipple
              className="tabButton tabSapChieu"
              label="Phim sắp chiếu"
            />
          </Tabs>
        </AppBar>
        <div className="listMovie">
          <div className="listFilm">
            <div className="px-1 align-top">
              <Slider {...settings}>
                <Films />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
