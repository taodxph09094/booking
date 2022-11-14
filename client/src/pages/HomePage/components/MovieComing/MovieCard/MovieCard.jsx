import React from "react";
import { Link, useHistory } from "react-router-dom";
import BtnPlay from "../../../../../components/Customs/Button/BtnPlay";
import Rating from "../../../../../components/Customs/Rating/Rating";
import useStyles from "./styles";
import { Rate, Space } from "antd";
import "./movie.scss";
const MovieCard = ({ movieComing }) => {
  const classes = useStyles({ bg: movieComing.images });
  const history = useHistory();
  const thoiLuong = "120 phút";
  return (
    <>
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
                onClick={() => history.push(`/film/${movieComing._id}`)}
              />
              <div className="play__trailer">
                {/* class play lấy từ Carousel component*/}
                <BtnPlay
                  cssRoot={"play"}
                  width={48}
                  height={48}
                  urlYoutube={movieComing.trailer}
                />
              </div>
            </div>
            {/* <Rating danhGia={movie.danhGia} /> */}
            <Rate
              className="ratingFilm"
              disabled
              defaultValue={movieComing.ratings}
            />
          </div>
          <div className="film__content">
            <div className={`film__name ${thoiLuong ? "" : "not_hide"}`}>
              <div className="name">
                <p>
                  <span className="c18">C18</span>
                  {movieComing.name}
                </p>
              </div>
              <p className="pt-2">
                {thoiLuong ? (
                  <span className="text_info">
                    {thoiLuong} phút - Tix {movieComing.ratings}
                  </span>
                ) : (
                  <span className="text_info">Tix {movieComing.ratings}</span>
                )}
              </p>
            </div>
            <div className={`film__button`}>
              {/* nếu thoiLuong = undefined => phim hiện không có lịch chiếu */}
              {(thoiLuong || movieComing) && (
                <Link
                  style={{ background: "#60c5ef" }}
                  to={{
                    pathname: `/film/${movieComing._id}`,
                    // state: { movieComing },
                  }}
                >
                  {"THÔNG TIN PHIM"}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
