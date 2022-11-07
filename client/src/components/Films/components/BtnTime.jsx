import React from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./style";

const BtnTime = (timeStart) => {
  const classes = useStyles();
  const history = useHistory();
  const calculateTimeout = (time) => {
    const fakeThoiLuong = 120;
    const timeInObj = new Date(time);
    const timeOutObj = new Date(
      timeInObj.getTime() + fakeThoiLuong * 60 * 1000
    );
    return timeOutObj.toLocaleTimeString([], { hour12: false });
    console.log(timeOutObj.toLocaleTimeString([], { hour12: false }));
  };
  var today = new Date();
  today.setHours(today.getHours() + 2);

  return (
    <button
      className={classes.button}
      onClick={() => history.push(`/booking-ticket/${timeStart.idReleased}`)}
    >
      <span className={classes.inTime}>{timeStart.time}</span>
      <span className={classes.outTime}>{` ~ 2 giờ`}</span>
    </button>
  );
};

export default BtnTime;
