import React, { useEffect, useState } from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@material-ui/core/styles";
import CinemaCenter from "./CinemaCenter/CinemaCenter";
import Film from "./Films/Film";
import MobileList from "./CinemaCenter/CinemaCenter";
import useStyles from "./style";
import { underLine } from "../../utils/bonusStyle";
import { colorTheater } from "../../data/theaterData";
import Seperate from "../../components/Customs/Seperate";
import { useAlert } from "react-alert";
import { clearErrors, getReleasedTime } from "../../actions/releasedTimeAction";
import { getCinema } from "../../actions/cinemaAction";

const Theaters = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobileTheater = useMediaQuery(theme.breakpoints.down("sm"));
  const { loading, error, releasedTimes } = useSelector(
    (state) => state.releasedTimes
  );
  const { cinemas } = useSelector((state) => state.cinemas);
  const [valueHeThongRap, setValueHeThongRap] = React.useState(0);
  const classes = useStyles({ isMobileTheater, underLine });
  const [nameCinema, setName] = useState("");
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getCinema());
    dispatch(getReleasedTime());
  }, [dispatch, error, alert]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div id="cumrap">
      <Seperate />
      <div className={classes.theater}>
        <Tabs
          variant={isMobileTheater ? "scrollable" : "standard"}
          scrollButtons="on"
          orientation={isMobileTheater ? "horizontal" : "vertical"}
          value={valueHeThongRap}
          classes={{ indicator: classes.tabs__indicator, root: classes.taps }}
        >
          {releasedTimes.map((theater, index) => (
            <Tab
              onClick={() => setValueHeThongRap(index)}
              disableRipple
              classes={{
                root: classes.tap,
                textColorInherit: classes.textColorInherit,
              }}
              key={theater._id}
              label={theater.cinema}
            />
          ))}
        </Tabs>
        {/* {releasedTimes.map((theater, index2) => (
          <div
            hidden={valueHeThongRap !== index2}
            key={theater.maHeThongRap}
            className={classes.cumRap}
          >
            <Film
            lstPhim={cumRap.film}
            key={cumRap._id}
            hidden={valueHeThongRap !== index2}
          />
          </div>
        ))} */}
        {/* {releasedTimes.map((cumRap, index) => (
          <Film
            lstPhim={cumRap.film}
            key={cumRap._id}
            hidden={valueHeThongRap !== index}
          />
        ))} */}

        {/* <div className={classes.lstPhim}>
          {releasedTimes.map((movie, index) => (
            <div className={classes.phim} key={movie._id}>
              <div className={classes.phim__info}>

                <div className={classes.phim__text}>
                  <p className={classes.phim__text_name}>{movie.film}</p>
                </div>
              </div>
              <div>
              </div>
            </div>

        </div>  */}
      </div>
    </div>
  );
};

export default Theaters;
