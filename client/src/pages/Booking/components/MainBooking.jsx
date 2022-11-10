import React, { useEffect, useState } from "react";
import "../../../assets/css/bookingMain.css";

import Payment from "./Payment/Payment";
import StepCheckOut from "./StepCheckOut";
import SingleSeat from "../../../components/Booking/components/SingleSeat";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../../actions/userAction";
const MainBooking = () => {
  const dispatch = useDispatch();
  const [selected, setSeated] = useState([]);
  return (
    <div className="BookingMainTicked">
      <section className="BookingMainLeft">
        <StepCheckOut />

        <SingleSeat setSelected={setSeated} />
      </section>
      <section className="BookingMainRight">
        <Payment dataFromMain={selected} />
      </section>
    </div>
  );
};

export default MainBooking;
