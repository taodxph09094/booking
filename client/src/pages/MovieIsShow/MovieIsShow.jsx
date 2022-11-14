import React, { useEffect } from "react";
import useStyles from "./style";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import Slider from "react-slick";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getFilm, getFilmByCate } from "../../actions/filmAction";
import MovieCard from "./MovieCard/MovieCard";

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
const MovieIsShow = () => {
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
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, films } = useSelector((state) => state.films);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    // dispatch(getFilm());
  }, [dispatch, error, alert]);
  console.log(films);
  return (
    <div className={classes.container}>
      <h2 style={{ textAlign: "center" }}>Phim sắp chiếu</h2>
      <Slider {...settings}>
        {/* {films.map((movie) => {
          return (
            <div className="px-1 align-top" key={movie._id}>
              <MovieCard movie={movie} />
            </div>
          );
        })} */}
      </Slider>
    </div>
  );
};

export default MovieIsShow;
