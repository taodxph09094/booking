import moment from "moment";
import React, { useState, useMemo } from "react";
import TimeMovie from "../../../components/Films/TimeMovie";
import formatDate from "../../../utils/dateOfWeek";
import {
  formatDateTimeToString,
  selectDesktopData,
  splitText,
} from "../../../utils/helper";
import useStyles from "./style";
const RightSection = ({ currentSelectedCinema }) => {
  console.log(currentSelectedCinema);
  const [indexSelected, setindexSelected] = useState(0);

  const classes = useStyles();
  const handleSelectDay = (i) => {
    setindexSelected(i);
  };
  return (
    <div>
      <div className={classes.listDay}>
        <div
          className={classes.dayItem}
          // key={day}
          style={{ color: "#fb4226" }}
          // onClick={() => handleSelectDay(i)}
        >
          <p>
            {moment(
              currentSelectedCinema.date.split("/").reverse().join("-")
            ).format("dddd")}
          </p>
          <p
            style={{
              fontSize: "18px",
              transition: "all .2s",
            }}
          >
            {}
            {splitText(formatDateTimeToString(currentSelectedCinema.date), 10)}
          </p>
        </div>
      </div>
      {/* {currentSelectedCinema?.map((arrayCumRapChieuFilterByDay, i) => ( */}
      <div
        style={{ display: "block" }}
        // key={i}
      >
        <TimeMovie
          cinema={currentSelectedCinema.cinema}
          idReleased={currentSelectedCinema._id}
          time={currentSelectedCinema.time}
          defaultExpanded={true}
        />
      </div>
      {/* ))} */}
    </div>
  );
};

export default RightSection;
