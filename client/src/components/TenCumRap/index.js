import React from "react";

import useStyles from "./style";
import { colorTheater } from "../../data/theaterData";

export default function TenCumRap(tenCumRap, { testSize }) {
  console.log(tenCumRap.cinema);
  const classes = useStyles({
    color: colorTheater[tenCumRap?.cinema?.slice(0, 3).toUpperCase()],
    testSize,
  });

  return (
    <p className={classes.text__first}>
      <span>{tenCumRap?.cinema?.split("-")[0]}</span>
      <span className={classes.text__second}>
        -{tenCumRap?.cinema?.split("-")[1]}
      </span>
    </p>
  );
}
