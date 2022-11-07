import React, { Fragment } from "react";
import {
  useStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "./components/style";
import AddressCinema from "./components/AddressCinema";
import FakeImgMovie from "./components/FakeImgMovie";
import { colorTheater } from "../../data/theaterData";
import { splitText } from "../../utils/helper";
import BtnTime from "./components/BtnTime";
const TimeMovie = (cinema, idReleased, time, address, defaultExpanded) => {
  const classes = useStyles({
    color: colorTheater[cinema.cinema.slice(0, 3).toUpperCase()],
  });

  return (
    <>
      <div className={classes.cumRapItem}>
        <Accordion
          key={cinema}
          square
          defaultExpanded={defaultExpanded ?? false}
        >
          <AccordionSummary>
            <FakeImgMovie nameTheater={cinema} imgStyle={classes.imgTheater} />
            <div className={classes.wrapInfo}>
              <p className={classes.text__first}>
                {/* <span>{cinema.cinema.splitT("-")[2]}</span> */}
                <span>{splitText(cinema.cinema, 2)} - </span>
                <span className={classes.text__second}>
                  {splitText(cinema.cinema)}
                </span>
              </p>
              <AddressCinema />
            </div>
            <div style={{ clear: "both" }}></div>
          </AccordionSummary>
          <AccordionDetails>
            <Fragment>
              <BtnTime time={cinema.time} idReleased={cinema.idReleased} />
            </Fragment>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default TimeMovie;
