import React from "react";
import "./banner.css";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from "./Search";
import bannerData from "../../fakeData/banner";
import RenderBanner from "./RenderBanner";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 5000, //speed per sence
    autoplay: false,
    speed: 500,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slickdotsbanner",
  };
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
  return (
    <>
      <div id="carousel" className="bannerFilm">
        <Slider {...settings}>
          {bannerData?.map((banner) => {
            // <RenderBanner key={banner.id} banner={banner} />;
            return (
              <div key={banner.maPhim} className="bannerStyle">
                <img
                  src={banner?.hinhAnh}
                  alt="banner"
                  className="bannerImage"
                />
                <div
                  className="backgroundLinear"
                  // onClick={() => history.push(`/phim/${banner.maPhim}`)}
                />
              </div>
            );
          })}
        </Slider>
        <Search />
      </div>
    </>
  );
};

export default Banner;
