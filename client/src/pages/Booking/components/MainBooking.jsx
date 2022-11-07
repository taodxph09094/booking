import React, { useEffect } from "react";
import "../../../assets/css/bookingMain.css";
import ListSeat from "./Seats/ListSeat";
import Payment from "./Payment/Payment";
import StepCheckOut from "./StepCheckOut";
import SingleSeat from "../../../components/Booking/components/SingleSeat";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../../actions/userAction";
// import SingleSeat from "./Seats/SingleSeat";
const MainBooking = () => {
  const dispatch = useDispatch();

  const [selected, setSelected] = React.useState([]);

  // user &&
  //   user.forEach((item) => {
  //     user.push({
  //       name: item.name,
  //       email: item.email,
  //       phone: item.phone,
  //     });
  //   });

  return (
    <div className="BookingMainTicked">
      <section className="BookingMainLeft">
        <StepCheckOut />
        {/* <ListSeat /> */}
        <SingleSeat setSelected={setSelected} />
        {/* <SingleSeat /> */}
      </section>
      <section className="BookingMainRight">
        <Payment dataFromMain={selected} />
      </section>
    </div>
  );
};

export default MainBooking;
