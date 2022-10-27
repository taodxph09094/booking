import React from "react";
import "./banner.css";
import { useHistory } from "react-router-dom";
const RenderBanner = (banner) => {
  const history = useHistory();
  return (
    <div key={banner.maPhim} className="bannerStyle">
      <img src={banner?.hinhAnh} alt="banner" className="bannerImage" />
      <div
        className="backgroundLinear"
        onClick={() => history.push(`/phim/${banner.maPhim}`)}
      />
      {/* {isDesktop && <BtnPlay cssRoot={"play"} urlYoutube={banner.trailer} />} */}
    </div>
  );
};

export default RenderBanner;
