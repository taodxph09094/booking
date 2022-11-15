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
const ReleasedMovie = ({ data }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  console.log(data.length);
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        classes={{ root: classes.leftSection, indicator: classes.indicator }}
      >
        {data?.map((theater) => (
          <Tab
            disableRipple
            key={theater._id}
            classes={{ wrapper: classes.wrapper, root: classes.tabRoot }}
            label={
              <>
                <img
                  className={classes.logo}
                  src={theater.logoCinema}
                  alt="logoTheater"
                />
                <span>{theater.cinema}</span>
              </>
            }
          />
        ))}
      </Tabs>
      <div className={classes.rightSection}>
        {data?.length === 0 && (
          <p style={{ padding: 10 }}>
            Hiện tại chưa có lịch chiếu cho phim này
          </p>
        )}
        {data?.map((theater, i) => (
          <div
            key={theater._id}
            style={{ display: value === i ? "block" : "none" }}
          >
            <RightSection currentSelectedCinema={theater} />
          </div>
        ))}
        {/* {data?.map((theater, i) => (
          <div
            key={theater.id}
            style={{ display: value === i ? "block" : "none" }}
          >
            <RightSection currentSelectedCinema={theater} />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default ReleasedMovie;
