import React from "react";
import { Link, useHistory } from "react-router-dom";
import BtnPlay from "../../../../../components/Customs/Button/BtnPlay";
// import BlockRating from '../../../../../components/BlockRating';
import Rating from "../../../../../components/Customs/Rating/Rating";
import useStyles from "./styles";
import { Rate, Space } from "antd";
import "./movie.scss";
const MovieItem = ({ movie, comingMovie }) => {
  const classes = useStyles({ bg: movie.images, comingMovie });
  const history = useHistory();
  const thoiLuong = "120 phút";
  return (
    <div
      style={{
        padding: "7px",
        cursor: "pointer",
      }}
    >
      <div className="film">
        <div className="film__img">
          <div className={`film__poster ${classes.addbg}`}>
            <div
              className="film__overlay"
              onClick={() =>
                history.push(`/film/${movie._id}`, { comingMovie })
              }
            />
            <div className="play__trailer">
              {/* class play lấy từ Carousel component*/}
              <BtnPlay
                cssRoot={"play"}
                width={48}
                height={48}
                urlYoutube={movie.trailer}
              />
            </div>
          </div>
          {/* <Rating danhGia={movie.danhGia} /> */}
          <Rate className="ratingFilm" disabled defaultValue={movie.ratings} />
        </div>
        <div className="film__content">
          <div className={`film__name ${thoiLuong ? "" : "not_hide"}`}>
            <div className="name">
              <p>
                <span className="c18">C18</span>
                {movie.name}
              </p>
            </div>
            <p className="pt-2">
              {thoiLuong ? (
                <span className="text_info">
                  {thoiLuong} phút - Tix {movie.ratings}
                </span>
              ) : (
                <span className="text_info">Tix {movie.ratings}</span>
              )}
            </p>
          </div>
          <div className={`film__button`}>
            {/* nếu thoiLuong = undefined => phim hiện không có lịch chiếu */}
            {(thoiLuong || movie) && (
              <Link
                style={{ background: comingMovie ? "#60c5ef" : "#fb4226" }}
                to={{
                  pathname: `/film/${movie._id}`,
                  state: { comingMovie },
                }}
              >
                {comingMovie ? "THÔNG TIN PHIM" : "MUA VÉ"}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
