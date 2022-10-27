import React, { useEffect, useRef, useState } from "react";
import Films from "../components/Films/Films";
import Feture from "../components/Films/Feture";
import "../assets/css/home.css";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
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
              <Films />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
