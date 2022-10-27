import React from "react";
import "../../../assets/css/bookingTicket.css";
import Payment from "./Payment";
import Seats from "./Seats";
import SeatTest from "./SeatTest";
const BookingTicketMain = () => {
  return (
    <div className="BookTicked">
      <section className="BookingLeft">
        {/* <StepCheckout />
        <ListSeat /> */}
        {/* <Seats /> */}
        <SeatTest />
      </section>

      <section className="BookingRight">
        <Payment />
      </section>
    </div>
  );
};

export default BookingTicketMain;
