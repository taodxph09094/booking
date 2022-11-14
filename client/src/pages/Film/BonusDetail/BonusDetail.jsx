import React, { useEffect, useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Fade from "@material-ui/core/Fade";
import AppBar from "@material-ui/core/AppBar";
import { Progress, Rate } from "antd";
import { useParams, useLocation, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { scroller } from "react-scroll";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyles from "./style";
import scroll from "../../../utils/scroll";
import moment from "moment";
import "moment/locale/vi";
import { useAlert } from "react-alert";
import {
  clearErrors,
  getFilmDetails,
  newReview,
} from "../../../actions/filmAction";
import { NEW_REVIEW_RESET } from "../../../constants/filmConstants";
import { CloseOutlined } from "@ant-design/icons";
import ReleasedMovie from "../Released/ReleasedMovie";
import { getReleasedTimeByFilm } from "../../../actions/releasedTimeAction";
import CloseIcon from "@material-ui/icons/Close";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
moment.locale("vi");
function TabPanel(props) {
  const { isMobile, children, value, index, ...other } = props;
  return (
    <div hidden={value !== index} {...other}>
      <Box p={isMobile && index === 0 ? 0 : 3}>{children}</Box>
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const BonusDetail = (data, onClickBtnMuave) => {
  const params = useParams();
  const dispatch = useDispatch();
  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );
  const { releasedTimes, loading, error } = useSelector(
    (state) => state.releasedTimes
  );
  const alert = useAlert();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const setData = data.data;
  const keyword = data.data.name;
  let location = useLocation();
  const history = useHistory();
  const [valueTab, setValueTab] = useState(0);
  const [croll, setCroll] = useState(0);
  const [openComment, setOpenComment] = useState(false);
  const [open, setOpen] = useState(false);
  const [warningtext, setwarningtext] = useState(false);
  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };
  // phục vụ kh nhấp btn mua vé
  useEffect(() => {
    window.scrollTo(0, 0); // ngăn window.history.scrollRestoration = 'auto';
    setValueTab(() => 0);
    setCroll(() => onClickBtnMuave);
  }, [onClickBtnMuave]); // khi click muave thì mới mở tap 0 > đổi giá trị croll để scroll tới TapMovieDetail

  useEffect(() => {
    if (onClickBtnMuave !== 0) {
      // không scroll khi mới load topDesktopMovieDetail
      scroll("TapMovieDetail");
    }
  }, [croll]); // khi nhấn muave và đã hoàn thành mở tap 0 thì scroll

  const handleChange = (event, newValue) => {
    setValueTab(newValue);
  };

  const classes = useStyles({ hideBtn: setData?.reviews?.hideBtn });
  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("filmId", params.id);

    dispatch(newReview(myForm));

    openComment(false);
  };
  useEffect(() => {
    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Đánh giá thành công");
      dispatch({ type: NEW_REVIEW_RESET });
    }
    dispatch(getReleasedTimeByFilm(keyword));
  }, [dispatch, params.id, alert, reviewError, success, keyword]);
  // console.log(releasedTimes);
  return (
    <div className={classes.root} id="TapMovieDetail">
      <AppBar
        position="static"
        color="default"
        classes={{ root: classes.appBarRoot }}
      >
        <Tabs
          value={valueTab}
          onChange={handleChange}
          centered
          classes={{ indicator: classes.indicator }}
        >
          {/* ẩn đi Lịch Chiếu nếu nhấn vào chi tiết phim bên tab sắp chiếu, (!location.state.comingMovie ? true : "") > cú pháp này sẽ return "" thay vì undefined > tránh lỗi material-ui */}
          {(setData.category === "Phim đang chiếu" ? true : "") && (
            <Tab
              disableRipple
              label="Lịch Chiếu"
              classes={{ selected: classes.selectedTap, root: classes.tapRoot }}
            />
          )}
          <Tab
            disableRipple
            label="Thông Tin"
            classes={{ selected: classes.selectedTap, root: classes.tapRoot }}
          />
          <Tab
            disableRipple
            label="Đánh Giá"
            classes={{ selected: classes.selectedTap, root: classes.tapRoot }}
          />
        </Tabs>
      </AppBar>
      <Fade
        timeout={400}
        in={valueTab === (setData.category === "Phim đang chiếu" ? 0 : "hide")}
      >
        <TabPanel
          value={valueTab}
          index={setData.category === "Phim đang chiếu" ? 0 : "hide"}
        >
          <ReleasedMovie data={releasedTimes} />
          {/* <ReleasedMovie /> */}
        </TabPanel>
      </Fade>
      <Fade
        timeout={400}
        in={valueTab === (setData.category === "Phim đang chiếu" ? 1 : 0)}
      >
        <TabPanel
          value={valueTab}
          index={setData.category === "Phim đang chiếu" ? 1 : 0}
          className={classes.noname}
        >
          <div className={`row text-white ${classes.detailMovie}`}>
            <div className="col-sm-6 col-xs-12">
              <div className="row mb-2">
                <p className={`float-left ${classes.contentTitle}`}>
                  Ngày công chiếu
                </p>
                <p className={`float-left ${classes.contentInfo}`}>
                  {setData.released}
                </p>
              </div>
              <div className="row mb-2">
                <p className={`float-left ${classes.contentTitle}`}>Đạo diễn</p>
                <p className={`float-left ${classes.contentInfo}`}>
                  {" "}
                  {setData.director}{" "}
                </p>
              </div>
              <div className="row mb-2">
                <p className={`float-left ${classes.contentTitle}`}>
                  Diễn viên
                </p>
                <p className={`float-left ${classes.contentInfo}`}>
                  Kyle Chandler, Rebecca Hall, Eiza González, Millie Bobby Brown
                </p>
              </div>
              <div className="row mb-2">
                <p className={`float-left ${classes.contentTitle}`}>Thể Loại</p>
                <p className={`float-left ${classes.contentInfo}`}>
                  {setData.type}
                </p>
              </div>
              <div className="row mb-2">
                <p className={`float-left ${classes.contentTitle}`}>
                  Định dạng
                </p>
                <p className={`float-left ${classes.contentInfo}`}>
                  2D/Digital
                </p>
              </div>
              <div className="row mb-2">
                <p className={`float-left ${classes.contentTitle}`}>
                  Quốc Gia SX
                </p>
                <p className={`float-left ${classes.contentInfo}`}>
                  {setData.nation}
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="row mb-2">
                <p className={`float-left ${classes.contentTitle}`}>Nội dung</p>
              </div>
              <div className="row mb-2">
                <p
                  dangerouslySetInnerHTML={{
                    __html: `${setData.description}`,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </TabPanel>
      </Fade>
      <Fade
        timeout={400}
        in={valueTab === (setData.category === "Phim đang chiếu" ? 2 : 1)}
      >
        <TabPanel
          value={valueTab}
          index={setData.category === "Phim đang chiếu" ? 2 : 1}
          className={classes.noname}
        >
          <div className={classes.danhGia}>
            <div className={classes.inputRoot} onClick={submitReviewToggle}>
              <span className={classes.avatarReviewer}>
                <img
                  src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
                  alt="avatar"
                  className={classes.avatarImg}
                />
              </span>
              <input
                className={classes.inputReviwer}
                type="text"
                placeholder="Bạn nghĩ gì về phim này?"
                readOnly="readonly"
              />

              <span className={classes.imgReviewerStar}>
                <Rate defaultValue={0} size="medium" readOnly />
              </span>
            </div>
          </div>
          {setData?.reviews?.map((item) => (
            <div
              key={`${item.createdAt}`}
              className={classes.itemDis}
              id={`idComment${item.createdAt}`}
            >
              <div className={classes.infoUser}>
                <div className={classes.left}>
                  <span className={classes.avatar}>
                    <img
                      src={`https://cdn-icons-png.flaticon.com/512/1946/1946429.png`}
                      alt="avatar"
                      className={classes.avatarImg}
                    />
                  </span>
                  <span className={classes.liveUser}>
                    <p className={classes.userName}>{item.name}</p>
                    <p className={classes.timePost}>
                      {moment(item.createdAt).fromNow()}
                    </p>
                  </span>
                </div>
                <div className={classes.right}>
                  <p className="text-success">{item.rating * 2}</p>
                  <Rate defaultValue={item.rating} size="medium" disabled />
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="py-3 mb-3 border-bottom">
                <p className="text-break">{item.comment}</p>
              </div>
            </div>
          ))}
          <div className={classes.moreMovie}>
            <Button
              variant="outlined"
              // onClick={() => setopenMore()}
              className={classes.moreMovieButton}
            >
              XEM THÊM
            </Button>
          </div>
        </TabPanel>
      </Fade>
      <Dialog
        open={open}
        onClose={submitReviewToggle}
        maxWidth="sm"
        fullWidth
        className={classes.dialog}
      >
        <MuiDialogTitle disableTypography className={classes.rootcloseButton}>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={submitReviewToggle}
          >
            <CloseIcon />
          </IconButton>
        </MuiDialogTitle>
        <Grid container direction="column" justify="center" alignItems="center">
          <span className={classes.pointPopup}>{rating * 2}</span>
          <Rating
            name="customStar"
            size="large"
            precision={0.5}
            className={classes.starPopup}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
            onChange={(e) => setRating(e.target.value)}
            value={rating}
          />
        </Grid>
        <DialogContent className={classes.dialogContent}>
          <TextField
            className={classes.textField}
            fullWidth
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            variant="outlined"
            label={
              comment ? "" : "Nói cho mọi người biết bạn nghĩ gì về phim này..."
            }
          />
        </DialogContent>
        <DialogActions className="justify-content-center flex-column px-4">
          {warningtext && (
            <DialogContentText className="text-danger">
              Phim đem đến cảm xúc tuyệt vời cho bạn chứ? Chia sẻ thêm nữa đi
              bạn ơi và nhớ gõ trên 60 kí tự nhé.
            </DialogContentText>
          )}
          <Button
            onClick={reviewSubmitHandler}
            variant="contained"
            className={classes.btnDang}
          >
            Đăng
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BonusDetail;
