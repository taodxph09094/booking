import React, { useEffect, useState } from "react";
import "../../assets/css/filmDetail.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { Progress, Rate } from "antd";
import { useAlert } from "react-alert";
import { clearErrors, getFilmDetails } from "../../actions/filmAction";
import { CLEAR_ERRORS, NEW_REVIEW_RESET } from "../../constants/filmConstants";
const FilmDetail = ({ match }) => {
  const dispatch = useDispatch();
  const [imageNotFound, setImageNotFound] = useState(false);
  let location = useLocation();

  const alert = useAlert();
  const { film, loading, error } = useSelector((state) => state.filmDetails);
  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );
  const { films } = useSelector((state) => state.films);

  const keyword = film.filmLine;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Đánh giá thành công");
      dispatch({ type: NEW_REVIEW_RESET });
    }
    dispatch(getFilmDetails(match.params.id));
    // dispatch(getFilmByName(keyword));
  }, [dispatch, match.params.id, error, alert, reviewError, success, keyword]);

  // const options = {
  //   size: "large",
  //   value: film.ratings,
  //   readOnly: true,
  //   precision: 0.5,
  // };

  return (
    <div className="FilmDetailMain">
      <div className="FilmDetailTop">
        <div className="FilmDetailGradient"></div>
        <div
          className="BannerBlur"
          style={
            {
              // backgroundImage: `url(${film.images[0].url})`,
            }
          }
        >
          {/* <div className="WithOutImage"></div> */}
          {imageNotFound && <div className="WithOutImage"></div>}
        </div>
        <div className="TopDetailInfo">
          <div className="ImgTrailer">
            {/* <BtnPlay urlYoutube={data?.trailer} /> */}
            {/* xử lý khi url hình bị lỗi */}
            {film.images &&
              film.images.map((item, i) => (
                <img
                  style={{ display: "none" }}
                  className="imageFilmDetail"
                  key={i}
                  src={item.url}
                  alt="poster"
                  onError={(e) => {
                    e.target.onerror = null;
                    setImageNotFound(true);
                  }}
                />
              ))}
            {imageNotFound && <div className="WithOutImage"></div>}

            {/* <img
              src="https://docs.zalopay.vn/images/logo-zalopay.svg"
              alt="poster"
              style={{ display: "none", width: "100%", borderRadius: 4 }}
              //  onError={(e) => { e.target.onerror = null; setImageNotFound(true) }}
            /> */}
          </div>
          <div className="ShortInfo">
            <p>
              {film.released}
              {/* {formatDate(data.ngayKhoiChieu?.slice(0, 10)).YyMmDd} */}
            </p>
            <p className="FilmName">
              {/* <span className={classes.c18}>C18</span> */}
              {/* {data.tenPhim} */} {film.name}
            </p>
            <p>
              {/* {`${thoiLuong ?? "120"} phút - ${danhGia} Tix`}  */} 120p -
              2D/Digital
            </p>
            <button
              className="btnMuaVe"
              // onClick={handleBtnMuaVe}
            >
              {/* Thông tin vé */}
              {film.category === "Phim đang chiếu"
                ? "Mua vé"
                : "Thông tin phim"}
            </button>
          </div>
          <div className="RateFilm">
            <div className="CircularFilm">
              <span className="RateStart"> </span>
              {/* <CircularProgress
                variant="determinate"
                size="100%"
                value={100}
                className={classes.behined}
                color="secondary"
              /> */}
              {/* <Progress type="circle" percent={100} className="behinedCir" /> */}
              {/* <CircularProgress
                variant="determinate"
                size="100%"
                value={danhGia * 10}
                className={classes.fabProgress}
                color="secondary"
              /> */}
              <Progress
                type="circle"
                percent={film.ratings}
                // format={(percent) => "10đ"}
                className="fabProgress"
              />
            </div>
            <div className="rateStar">
              <Rate allowHalf disabled defaultValue={film.ratings} />
              {/* <Rating value={(danhGia * 5) / 10} precision={0.5} readOnly /> */}
            </div>
            <span>{film.reviews.length}đánh giá</span>
          </div>
        </div>
      </div>
      {/* <Tap
        data={data}
        onClickBtnMuave={onClickBtnMuave}
        onIncreaseQuantityComment={onIncreaseQuantityComment}
        isMobile={isMobile}
      /> */}
    </div>
  );
};

export default FilmDetail;
