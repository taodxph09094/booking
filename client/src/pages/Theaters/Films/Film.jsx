import React, { memo, useEffect } from "react";
import useStyles from "./style";
import { customScrollbar, underLine } from "../../../utils/bonusStyle";
import Released from "./Released/Released";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {
  clearErrors,
  getReleasedTimeByCinema,
} from "../../../actions/releasedTimeAction";
const Film = (props) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  // const nameCinema = props;
  console.log(props);

  const { loading, error, releasedTimes } = useSelector(
    (state) => state.releasedTimes
  );

  const classes = useStyles({ customScrollbar, underLine });
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getReleasedTimeByCinema());
  }, [dispatch, error, alert]);

  return (
    <div className={classes.lstPhim} hidden={props.hidden}>
      {/* div root danh sách phim */}
    </div>
  );
};

export default Film;
