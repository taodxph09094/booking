import React, { useState, useRef, useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";

import useStyles from "./style";
import ShowMobile from "./components/ShowMobile/ShowMobile";
import ShowDesktop from "./components/ShowDesktop/ShowDesktop";
import { useAlert } from "react-alert";
import { clearErrors, getFilm, getFilmByCate } from "../../actions/filmAction";
import Theaters from "../Theaters/Theaters";
export function SampleNextArrow(props) {
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

export function SamplePrevArrow(props) {
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

const filterByDay = (movieList, tuNgay, denNgay) => {
  return movieList.filter((item) => {
    // ms tính từ ngày gốc(1970) tới ngày item
    const timeItem = new Date(item.ngayKhoiChieu).getTime();
    // ms tính từ ngày gốc tới ngày lựa chọn
    const timeTuNgay = new Date(tuNgay).getTime();
    const timeDenNgay = new Date(denNgay).getTime();
    if (timeTuNgay <= timeItem && timeItem <= timeDenNgay) {
      return true;
    }
    return false;
  });
};
const Home = () => {
  const theme = useTheme();
  const alert = useAlert();
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [value, setValue] = useState({ value: 0, fade: true, notDelay: 0 });
  const { loading, error, films } = useSelector((state) => state.films);
  const timeout = useRef(null);

  const classes = useStyles({
    fade: value.fade,
    value: value.value,
    notDelay: value.notDelay,
  });

  const [category, setCategory] = useState("");

  useEffect(() => {
    if (value.value == 0) {
      setCategory("Sắp ra mắt");
    } else {
      setCategory("Phim sắp chiếu");
    }
    return () => {
      clearTimeout(timeout.current);
    };
  }, []);

  const [arrayData, setarrayData] = useState({
    dailyMovieList: null,
    comingMovieList: null,
  });
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getFilm());
  }, [dispatch, error, alert, category]);
  useEffect(() => {
    // tạm thời chia đôi list danh sách phim ra, một nửa làm phim đang chiếu, một nửa làm phim sắp chiếu
    const halfIndex = films && Math.floor(films.length / 2);
    let dailyMovieList = films;
    let comingMovieList = films.slice(halfIndex, films.length - 1);
    setarrayData({ dailyMovieList, comingMovieList });
  }, [films]);

  const handleChange = (e, newValue) => {
    setValue((value) => ({ ...value, notDelay: newValue, fade: false }));
    timeout.current = setTimeout(() => {
      setValue((value) => ({ ...value, value: newValue, fade: true }));
    }, 100);
  };

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <Banner />
      <div style={{ paddingTop: "80px" }} id="lichchieu">
        <AppBar className={classes.appBar} position="static">
          <Tabs
            classes={{
              root: classes.tabBar,
              flexContainer: classes.flexContainer,
              indicator: classes.indicator,
            }}
            value={value.value}
            onChange={handleChange}
          >
            <Tab
              disableRipple
              className={`${classes.tabButton} ${classes.tabDangChieu}`}
              label="Đang chiếu"
            />
            <Tab
              disableRipple
              className={`${classes.tabButton} ${classes.tabSapChieu}`}
              label="Sắp chiếu"
            />
          </Tabs>
        </AppBar>
        <div className={classes.listMovie}>
          {isDesktop ? (
            <ShowDesktop arrayData={arrayData} value={value} />
          ) : (
            <ShowMobile arrayData={arrayData} value={value} />
          )}
        </div>
      </div>
      <Theaters />
    </>
  );
};

export default Home;
