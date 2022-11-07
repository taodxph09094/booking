import React, { Fragment, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";
import { useAlert } from "react-alert";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import EventIcon from "@material-ui/icons/Event";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { createOrder, clearErrors } from "../../actions/orderAction";
import StepCheckOut from "../Booking/components/StepCheckOut";
import "./payment.css";
import { CREATE_ORDER_SUCCESS } from "../../constants/orderConstants";
const Payment = ({ history }) => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const dispatch = useDispatch();
  const alert = useAlert();
  const stripe = useStripe();
  const elements = useElements();
  const payBtn = useRef(null);
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.newOrder);
  const seatList = [];
  orderInfo.seats &&
    orderInfo.seats.forEach((item) => {
      seatList.push({
        id: 1,
        number: item,
      });
    });
  console.log(seatList);
  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };
  //   const itemsOrder = [];
  //   orderInfo &&
  //     orderInfo.forEach((item) => {
  //       // setPrice(item.price);
  //       itemsOrder.push({
  //         ticket: item.ticket,
  //         nameFilm: item.nameFilm,
  //         nameCinema: item.nameCinema,
  //         stock: item.Stock,
  //         price: item.price,
  //         seats: item.seats,
  //         price: item.price,
  //         promotion: item.promotion,
  //         date: item.date,
  //         time: item.time,
  //         address: item.address,
  //         quantity: item.quantity,
  //       });
  //     });
  //   //   console.log(itemsOrder);
  const order = {
    // orderItems: [
    //   {

    //   },
    // ],
    ticket: orderInfo.ticket,
    nameFilm: orderInfo.nameFilm,
    nameCinema: orderInfo.nameCinema,
    price: orderInfo.price,
    seats: seatList,
    promotion: orderInfo.promotion,
    date: orderInfo.date,
    time: orderInfo.time,
    address: orderInfo.address,
    quantity: orderInfo.quantity,
    itemsPrice: orderInfo.subtotal,
    totalPrice: orderInfo.totalPrice,
    // ticket: "6363db6e5312a23ca843da0d",
    // nameFilm: "Black Adam",
    // nameCinema: "BHD Star Discovery Cầu Giấy",
    // price: 86000,
    // seats: seatList,
    // promotion: 0,
    // date: "20/11/2022",
    // time: "10:00",
    // address: " Hà nội",
    // quantity: orderInfo.quantity,
    // itemsPrice: 100000,
    // totalPrice: 100000,
  };
  console.log(order);

  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/v1/payment/process",
        paymentData,
        config
      );

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
          },
        },
      });

      if (result.error) {
        payBtn.current.disabled = false;

        alert.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };
          dispatch({ type: CREATE_ORDER_SUCCESS });
          dispatch(createOrder(order));

          history.push("/");
        } else {
          alert.error("There's some issue while processing payment ");
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
      alert.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      <StepCheckOut activeStep={1} />
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <Typography>Visa, Master Card</Typography>
          <div>
            <CreditCardIcon />
            <CardNumberElement className="paymentInput" />
          </div>
          <div>
            <EventIcon />
            <CardExpiryElement className="paymentInput" />
          </div>
          <div>
            <VpnKeyIcon />
            <CardCvcElement className="paymentInput" />
          </div>

          <input
            type="submit"
            value={`Thanh toán - $${orderInfo && orderInfo.totalPrice}`}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Payment;
