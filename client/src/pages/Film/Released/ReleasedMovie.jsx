import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import useStyles from "./style";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {
  clearErrors,
  getReleasedTime,
  getReleasedTimeByFilm,
} from "../../../actions/releasedTimeAction";
import CardTest from "./cardTest";
import RightSection from "./RightSection";
const ReleasedMovie = (nameFilm) => {
  const params = useParams();
  const { releasedTimes, loading, error } = useSelector(
    (state) => state.releasedTimes
  );

  const dispatch = useDispatch();
  const alert = useAlert();
  const keyword = "Black Adam";
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getReleasedTimeByFilm(keyword));
  }, [dispatch, error, alert]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const brands = [];
  releasedTimes &&
    releasedTimes.forEach((item) => {
      brands.push({
        name: item.brand,
      });
    });

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        classes={{ root: classes.leftSection, indicator: classes.indicator }}
      >
        {releasedTimes?.map((theater) => (
          <Tab
            disableRipple
            key={theater._id}
            classes={{ wrapper: classes.wrapper, root: classes.tabRoot }}
            label={
              <>
                <img
                  className={classes.logo}
                  src="https://www.bhdstar.vn/wp-content/uploads/2019/06/BHDStar_Logo_Tron.png"
                  alt="logoTheater"
                />
                <span>{theater.cinema}</span>
              </>
            }
          />
        ))}
      </Tabs>
      <div className={classes.rightSection}>
        {releasedTimes?.length === 0 && (
          <p style={{ padding: 10 }}>
            Hiện tại chưa có lịch chiếu cho phim này
          </p>
        )}
        {releasedTimes?.map((theater, i) => (
          <div
            key={theater.id}
            style={{ display: value === i ? "block" : "none" }}
          >
            <RightSection currentSelectedCinema={theater} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReleasedMovie;