import React, { useEffect } from "react";
import "./banner.css";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useHistory } from "react-router-dom";
import BtnPlay from "../Customs/Button/BtnPlay";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import SearchStickets from "./SearchTickets";
import { useAlert } from "react-alert";
import useStyles from "./styles";
import { clearErrors, getBanner } from "../../actions/bannerAction";
const Banner = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const alert = useAlert();
  const { loading, error, banners } = useSelector((state) => state.banners);
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const history = useHistory();
  const classes = useStyles();
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
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getBanner());
  }, [dispatch, error, alert]);
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
          {/* <TestShow />
          <Show /> */}
          {banners?.map((banner) => {
            return (
              <div key={banner._id} className="bannerStyle">
                <img
                  src={banner?.imageBanner}
                  alt="banner"
                  className="bannerImage"
                />
                <div className="backgroundLinear" />
                {isDesktop && (
                  <BtnPlay cssRoot={"play"} urlYoutube={banner.trailer} />
                )}
              </div>
            );
          })}
        </Slider>
        <SearchStickets />
      </div>
    </>
  );
};

export default Banner;
