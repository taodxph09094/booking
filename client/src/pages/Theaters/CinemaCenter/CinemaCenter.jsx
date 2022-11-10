import React, { memo, useEffect } from "react";
import useStyles from "./style";
import Films from "../Films/Film";
import { underLine, customScrollbar } from "../../../utils/bonusStyle";
import FakeImgTheater from "../../../utils/fakeImgTheater";
import TenCumRap from "../../../components/TenCumRap";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {
  clearErrors,
  getReleasedTime,
} from "../../../actions/releasedTimeAction";
const CinemaCenter = ({ cinema, color }) => {
  // const { cinema, color } = props;
  // console.log(cinema);
  const [valueCumRap, setValueCumRap] = React.useState(0);
  const classes = useStyles({ underLine, customScrollbar, color });
  const handleChangeCumRap = (e) => {
    setValueCumRap(Number(e.currentTarget.getAttribute("index")));
  };
  return (
    <div className={classes.flexCumRap}>
      <div className={classes.lstCumRap}>
        {cinema.map((cumRap, index) => (
          <div
            className={classes.cumRap}
            index={index}
            onClick={(e) => handleChangeCumRap(e)}
            key={cumRap._id}
            style={{ opacity: valueCumRap === index ? "1" : ".5" }}
          >
            <FakeImgTheater
              nameTheater={cumRap.cinema}
              imgStyle={classes.cumRap__img}
            />
            <div className={classes.cumRap__info}>
              <TenCumRap tenCumRap={cumRap.cinema} />
            </div>
          </div>
        ))}
      </div>
      {/* {lstCumRap.map((cumRap, index) => (
        <LstPhim
          lstPhim={cumRap.danhSachPhim}
          key={cumRap.maCumRap}
          hidden={valueCumRap !== index}
        />
      ))} */}
    </div>
  );
};

export default CinemaCenter;
