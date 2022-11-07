import React, { useEffect, useState } from "react";
import "../../assets/css/filmDetail.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { Progress, Rate } from "antd";
import { useAlert } from "react-alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import { clearErrors, getFilmDetails } from "../../actions/filmAction";
import { CLEAR_ERRORS, NEW_REVIEW_RESET } from "../../constants/filmConstants";
import useStyles from "./style";
import BonusDetail from "./BonusDetail/BonusDetail";
import { getReleasedTimeByFilm } from "../../actions/releasedTimeAction";
const FilmDetail = ({ match }) => {
  const { film, loading, error } = useSelector((state) => state.filmDetails);
  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );
  const dispatch = useDispatch();
  const [onClickBtnMuave, setOnClickBtnMuave] = useState(0);
  const param = useParams();
  const [quantityComment, setQuantityComment] = useState(0);
  const [imageNotFound, setImageNotFound] = useState(false);
  const classes = useStyles({
    bannerImg:
      "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg",
  });
  let location = useLocation();
  const alert = useAlert();
  const keyword = film.name;
  const handleBtnMuaVe = () => {
    setOnClickBtnMuave(Date.now());
  };
  const onIncreaseQuantityComment = (value) => {
    setQuantityComment(value);
  };
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
    dispatch(getReleasedTimeByFilm(keyword));
  }, [dispatch, match.params.id, error, alert, reviewError, success, keyword]);
  return (
    <div className={classes.desktop}>
      <div className={classes.top}>
        <div className={classes.gradient}></div>
        <div className={classes.bannerBlur}>
          {imageNotFound && <div className={classes.withOutImage}></div>}
        </div>
        <div className={classes.topInfo}>
          <div className={classes.imgTrailer}>
            {/* <BtnPlay urlYoutube={data?.trailer} /> */}
            {/* xử lý khi url hình bị lỗi */}
            <img
              src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
              alt="poster"
              style={{ display: "none" }}
              onError={(e) => {
                e.target.onerror = null;
                setImageNotFound(true);
              }}
            />
            {imageNotFound && <div className={classes.withOutImage}></div>}
          </div>
          <div className={classes.shortInfo}>
            <p>{film.released}</p>
            <p className={classes.movieName}>
              <span className={classes.c18}>C18</span>
              {film.name}
            </p>
            <p>{`120 phút - ${film.ratings} Tix`} - 2D/Digital</p>
            <button className={classes.btnMuaVe} onClick={handleBtnMuaVe}>
              {film.category === "Phim đang chiếu"
                ? "Mua vé"
                : "Thông tin phim"}
            </button>
          </div>
          <div className={classes.rate}>
            <div className={classes.circular}>
              <span className={classes.danhGia}>{film.numOfReviews}</span>
              <CircularProgress
                variant="determinate"
                size="100%"
                value={100}
                className={classes.behined}
                color="secondary"
              />
              <CircularProgress
                variant="determinate"
                size="100%"
                value={film.numOfReviews * 10}
                className={classes.fabProgress}
                color="secondary"
              />
            </div>
            <div className={classes.rateStar}>
              <Rate defaultValue={film.ratings} />
            </div>
            <span>0 người đánh giá</span>
          </div>
        </div>
      </div>
      <BonusDetail />
      {/* <Tap data={data} onClickBtnMuave={onClickBtnMuave} onIncreaseQuantityComment={onIncreaseQuantityComment} isMobile={isMobile} /> */}
    </div>
  );
};

export default FilmDetail;
