import React from "react";
import { Link, useHistory } from "react-router-dom";
import BtnPlay from "../../../components/Customs/Button/BtnPlay";
import Rating from "../../../components/Customs/Rating/Rating";
import useStyles from "./styles";
import { Rate, Space } from "antd";
import "./movie.scss";
const MovieCard = ({ movieDaily }) => {
  const classes = useStyles({ bg: movieDaily.images });
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
              onClick={() => history.push(`/film/${movieDaily._id}`)}
            />
            <div className="play__trailer">
              {/* class play lấy từ Carousel component*/}
              <BtnPlay
                cssRoot={"play"}
                width={48}
                height={48}
                urlYoutube={movieDaily.trailer}
              />
            </div>
          </div>
          {/* <Rating danhGia={movie.danhGia} /> */}
          <Rate
            className="ratingFilm"
            disabled
            defaultValue={movieDaily.ratings}
          />
        </div>
        <div className="film__content">
          <div className={`film__name ${thoiLuong ? "" : "not_hide"}`}>
            <div className="name">
              <p>
                <span className="c18">C18</span>
                {movieDaily.name}
              </p>
            </div>
            <p className="pt-2">
              {thoiLuong ? (
                <span className="text_info">
                  {thoiLuong} phút - Tix {movieDaily.ratings}
                </span>
              ) : (
                <span className="text_info">Tix {movieDaily.ratings}</span>
              )}
            </p>
          </div>
          <div className={`film__button`}>
            {/* nếu thoiLuong = undefined => phim hiện không có lịch chiếu */}
            {(thoiLuong || movieDaily) && (
              <Link
                style={{ background: "#fb4226" }}
                to={{
                  pathname: `/film/${movieDaily._id}`,
                  // state: { comingMovie },
                }}
              >
                {"MUA VÉ"}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
