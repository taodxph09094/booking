import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Rate, Space } from "antd";
const CardFilm = ({ film }) => {
  return (
    <div
      style={{
        marginRight: "10px",
        marginLeft: "10px",
        padding: "7px",
        cursor: "pointer",
      }}
    >
      <div className="film">
        <div className="film__img">
          <div
            className="film__poster poster1"
            style={{
              backgroundImage: `url(${film.images[0].url})`,
            }}
          >
            <div className="film__overlay" />
            <div className="play__trailer">
              <PlayCircleOutlined className="btnPlay" />
            </div>
          </div>
        </div>
        <Rate disabled defaultValue={5} />
        <div className="film__content">
          {/* <Link to={`/film/${film._id}`}> */}
          <div className="film__name">
            <div className="name">
              <p>{film.name}</p>
            </div>
            <p className="pt-2">Thời gian</p>
          </div>
          <div className={`film__button`}>
            <Link style={{ background: "#fb4226" }} to={`/film/${film._id}`}>
              MUA VÉ
            </Link>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default CardFilm;
