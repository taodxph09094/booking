import React, { useEffect } from "react";
import "./banner.css";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from "./Search";
import { useHistory } from "react-router-dom";
import bannerData from "../../fakeData/banner";
import BtnPlay from "../Customs/Button/BtnPlay";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { LOADING_BACKTO_HOME_COMPLETED } from "../../constants/Lazy";
import SearchStickets from "./SearchTickets";
const Banner = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const history = useHistory();
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
  useEffect(() => {
    dispatch({ type: LOADING_BACKTO_HOME_COMPLETED });
  }, []);
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
                {isDesktop && (
                  <BtnPlay cssRoot={"play"} urlYoutube={banner.trailer} />
                )}
              </div>
            );
          })}
        </Slider>
        {/* <Search /> */}
        <SearchStickets />
      </div>
    </>
  );
};

export default Banner;
