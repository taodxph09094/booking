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
  // ph???c v??? kh nh???p btn mua v??
  useEffect(() => {
    window.scrollTo(0, 0); // ng??n window.history.scrollRestoration = 'auto';
    setValueTab(() => 0);
    setCroll(() => onClickBtnMuave);
  }, [onClickBtnMuave]); // khi click muave th?? m???i m??? tap 0 > ?????i gi?? tr??? croll ????? scroll t???i TapMovieDetail

  useEffect(() => {
    if (onClickBtnMuave !== 0) {
      // kh??ng scroll khi m???i load topDesktopMovieDetail
      scroll("TapMovieDetail");
    }
  }, [croll]); // khi nh???n muave v?? ???? ho??n th??nh m??? tap 0 th?? scroll

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
      alert.success("????nh gi?? th??nh c??ng");
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
          {/* ???n ??i L???ch Chi???u n???u nh???n v??o chi ti???t phim b??n tab s???p chi???u, (!location.state.comingMovie ? true : "") > c?? ph??p n??y s??? return "" thay v?? undefined > tr??nh l???i material-ui */}
          {(setData.category === "Phim ??ang chi???u" ? true : "") && (
            <Tab
              disableRipple
              label="L???ch Chi???u"
              classes={{ selected: classes.selectedTap, root: classes.tapRoot }}
            />
          )}
          <Tab
            disableRipple
            label="Th??ng Tin"
            classes={{ selected: classes.selectedTap, root: classes.tapRoot }}
          />
          <Tab
            disableRipple
            label="????nh Gi??"
            classes={{ selected: classes.selectedTap, root: classes.tapRoot }}
          />
        </Tabs>
      </AppBar>
      <Fade
        timeout={400}
        in={valueTab === (setData.category === "Phim ??ang chi???u" ? 0 : "hide")}
      >
        <TabPanel
          value={valueTab}
          index={setData.category === "Phim ??ang chi???u" ? 0 : "hide"}
        >
          <ReleasedMovie data={releasedTimes} />
          {/* <ReleasedMovie /> */}
        </TabPanel>
      </Fade>
      <Fade
        timeout={400}
        in={valueTab === (setData.category === "Phim ??ang chi???u" ? 1 : 0)}
      >
        <TabPanel
          value={valueTab}
          index={setData.category === "Phim ??ang chi???u" ? 1 : 0}
          className={classes.noname}
        >
          <div className={`row text-white ${classes.detailMovie}`}>
            <div className="col-sm-6 col-xs-12">
              <div className="row mb-2">
                <p className={`float-left ${classes.contentTitle}`}>
                  Ng??y c??ng chi???u
                </p>
                <p className={`float-left ${classes.contentInfo}`}>
                  {setData.released}
                </p>
              </div>
              <div className="row mb-2">
                <p className={`float-left ${classes.contentTitle}`}>?????o di???n</p>
                <p className={`float-left ${classes.contentInfo}`}>
                  {" "}
                  {setData.director}{" "}
                </p>
              </div>
              <div className="row mb-2">
                <p className={`float-left ${classes.contentTitle}`}>
                  Di???n vi??n
                </p>
                <p className={`float-left ${classes.contentInfo}`}>
                  Kyle Chandler, Rebecca Hall, Eiza Gonz??lez, Millie Bobby Brown
                </p>
              </div>
              <div className="row mb-2">
                <p className={`float-left ${classes.contentTitle}`}>Th??? Lo???i</p>
                <p className={`float-left ${classes.contentInfo}`}>
                  {setData.type}
                </p>
              </div>
              <div className="row mb-2">
                <p className={`float-left ${classes.contentTitle}`}>
                  ?????nh d???ng
                </p>
                <p className={`float-left ${classes.contentInfo}`}>
                  2D/Digital
                </p>
              </div>
              <div className="row mb-2">
                <p className={`float-left ${classes.contentTitle}`}>
                  Qu???c Gia SX
                </p>
                <p className={`float-left ${classes.contentInfo}`}>
                  {setData.nation}
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="row mb-2">
                <p className={`float-left ${classes.contentTitle}`}>N???i dung</p>
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
        in={valueTab === (setData.category === "Phim ??ang chi???u" ? 2 : 1)}
      >
        <TabPanel
          value={valueTab}
          index={setData.category === "Phim ??ang chi???u" ? 2 : 1}
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
                placeholder="B???n ngh?? g?? v??? phim n??y?"
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
              XEM TH??M
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
              comment ? "" : "N??i cho m???i ng?????i bi???t b???n ngh?? g?? v??? phim n??y..."
            }
          />
        </DialogContent>
        <DialogActions className="justify-content-center flex-column px-4">
          {warningtext && (
            <DialogContentText className="text-danger">
              Phim ??em ?????n c???m x??c tuy???t v???i cho b???n ch???? Chia s??? th??m n???a ??i
              b???n ??i v?? nh??? g?? tr??n 60 k?? t??? nh??.
            </DialogContentText>
          )}
          <Button
            onClick={reviewSubmitHandler}
            variant="contained"
            className={classes.btnDang}
          >
            ????ng
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BonusDetail;
