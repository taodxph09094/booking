import React, { useEffect, useState } from "react";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import Slider from "react-slick";
import MovieItem from "./MovieItem/MovieItem";
import useStyles from "./style";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import MovieDaily from "../../../MovieDaily/MovieDaily";
import MovieComing from "../MovieComing/MovieComing";

export function NextArrow(props) {
  const classes = useStyles();

  const { onClick } = props;
  return (
    <ArrowForwardIosRoundedIcon
      style={{ right: "-82px" }}
      onClick={onClick}
      className={classes.Arrow}
    />
  );
}

export function PrevArrow(props) {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <ArrowBackIosRoundedIcon
      style={{ left: "-82px" }}
      onClick={onClick}
      className={classes.Arrow}
    />
  );
}
const ShowDesktop = ({ arrayData, value }) => {
  const classes = useStyles();
  const [cate, setCate] = useState();
  const alert = useAlert();
  const dispatch = useDispatch();
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
  useEffect(() => {
    if (value.value === 0) {
      setCate("Phim đang chiếu");
    } else {
      setCate("Sắp ra mắt ");
    }
  });
  console.log(cate);
  return (
    <div className={classes.container}>
      <Slider {...settings}>
        {arrayData.isComing === true ? <MovieComing /> : <MovieDaily />}
        {value.value === 0
          ? arrayData.dailyMovieList?.map((movie) => {
              return (
                <div className="px-1 align-top" key={movie._id}>
                  <MovieItem movie={movie} />
                </div>
              );
            })
          : arrayData.comingMovieList?.map((movie) => {
              return (
                <div className="px-1 align-top" key={movie._id}>
                  <MovieItem movie={movie} comingMovie />
                </div>
              );
            })}
      </Slider>
    </div>
  );
};

export default ShowDesktop;
