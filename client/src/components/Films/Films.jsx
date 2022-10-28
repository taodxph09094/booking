import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import { clearErrors, getFilm } from "../../actions/filmAction";
import CardFilm from "./components/CardFilm";
import { Rate, Space } from "antd";
const Films = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, films } = useSelector((state) => state.films);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getFilm());
  }, [dispatch, error, alert]);
  console.log(films);
  return (
    <>
      <div className="filmLayout">
        {films && films.map((film) => <CardFilm key={film._id} film={film} />)}
        <Space size={10}>
          {/* <div
            style={{
              marginRight: "10px",
              marginLeft: "10px",
              padding: "7px",
              cursor: "pointer",
            }}
          >
            <div className="film">
              <div className="film__img">
                <div className="film__poster poster1">
                  <div
                    className="film__overlay"
                    onClick={() =>
                    }
                  />
                  <div className="play__trailer">
                    <PlayCircleOutlined className="btnPlay" />
                  </div>
                </div>
                <BlockRating danhGia={movie.danhGia} />
              </div>
              <Rate disabled defaultValue={5} />
              <div className="film__content">
                <div className="film__name">
                  <div className="name">
                    <p>Tên phim</p>
                  </div>
                  <p className="pt-2">Thời gian</p>
                </div>
                <div className={`film__button`}>
                  <Link style={{ background: "#fb4226" }} to="/booking-ticket">
                    MUA VÉ
                  </Link>
                </div>
              </div>
            </div>
          </div> */}

          {/* //// */}

          {/* <div
            style={{
              padding: "7px",
              cursor: "pointer",
            }}
          >
            <div className="film">
              <div className="film__img">
                <div className="film__poster poster2">
                  <div
                    className="film__overlay"

                  />
                  <div className="play__trailer">
                    <PlayCircleOutlined className="btnPlay" />
                  </div>
                </div>
              </div>
              <Rate disabled defaultValue={5} />
              <div className="film__content">
                <div className="film__name">
                  <div className="name">
                    <p>Tên phim</p>
                  </div>
                  <p className="pt-2">Thời gian</p>
                </div>
                <div className={`film__button`}>
                  <Link style={{ background: "#fb4226" }} to="/booking-ticket">
                    MUA VÉ
                  </Link>
                </div>
              </div>
            </div>
          </div>


          <div
            style={{
              padding: "7px",
              cursor: "pointer",
            }}
          >
            <div className="film">
              <div className="film__img">
                <div className="film__poster poster3">
                  <div
                    className="film__overlay"
                  />
                  <div className="play__trailer">
                    <PlayCircleOutlined className="btnPlay" />
                  </div>
                </div>
              </div>
              <Rate disabled defaultValue={5} />
              <div className="film__content">
                <div className="film__name">
                  <div className="name">
                    <p>Tên phim</p>
                  </div>
                  <p className="pt-2">Thời gian</p>
                </div>
                <div className={`film__button`}>
                  <Link style={{ background: "#fb4226" }} to="">
                    MUA VÉ
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "7px",
              cursor: "pointer",
            }}
          >
            <div className="film">
              <div className="film__img">
                <div className="film__poster poster3">
                  <div
                    className="film__overlay"
                  />
                  <div className="play__trailer">
                    <PlayCircleOutlined className="btnPlay" />
                  </div>
                </div>
              </div>
              <Rate disabled defaultValue={5} />
              <div className="film__content">
                <div className="film__name">
                  <div className="name">
                    <p>Tên phim</p>
                  </div>
                  <p className="pt-2">Thời gian</p>
                </div>
                <div className={`film__button`}>
                  <Link style={{ background: "#fb4226" }} to="/booking-ticket">
                    MUA VÉ
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
        </Space>
      </div>
    </>
  );
};

export default Films;
