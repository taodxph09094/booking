import { useHistory } from "react-router-dom";
import MainBooking from "./components/MainBooking";
import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const BookingView = () => {
  const param = useParams();
  const dispatch = useDispatch();

  return (
    <div>
      <MainBooking />
      {/* <ModalTicket /> */}
    </div>
  );
};

export default BookingView;
