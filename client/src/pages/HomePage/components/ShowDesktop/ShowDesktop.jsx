import React, { useEffect, useState } from "react";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import Slider from "react-slick";
import MovieItem from "./MovieItem/MovieItem";
import useStyles from "./style";

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

  return (
    <div className={classes.container}>
      <Slider {...settings}>
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
