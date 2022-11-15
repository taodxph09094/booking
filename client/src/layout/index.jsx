import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import TabsCate from "../components/Tabs/TabsCate";
import HeaderUtil from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import FilmDetail from "../pages/Film/FilmDetail";
import BookingView from "../pages/Booking/BookingView";
import AuthLayout from "./AuthLayout/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import axios from "axios";
import store from "../store";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { loadUser } from "../actions/userAction";
import ProtectedRoute from "./AuthLayout/ProtectedRoute";
import Payment from "../pages/Payment/Payment";
import Orders from "../pages/Order/Orders";
import FooterLayout from "./components/FooterLayout";
import ForgotPass from "../pages/Auth/ForgotPass/ForgotPass";
import ResetPass from "../pages/Auth/ResetPass/ResetPass";
import ModalTrailer from "../components/ModalTrailer";
import News from "../pages/News/News";
import NewDetail from "../pages/News/NewDetail";
const { Header, Footer, Content } = Layout;
const LayoutMain = () => {
  const [stripeApiKey, setStripeApiKey] = useState("");
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());
  return (
    <>
      <HeaderUtil />
      <Layout>
        <Content className="mainContent">
          <Router>
            {stripeApiKey && (
              <Elements stripe={loadStripe(stripeApiKey)}>
                <ProtectedRoute
                  exact
                  path="/process/payment"
                  component={Payment}
                />
              </Elements>
            )}
            <ModalTrailer />
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/booking" component={TabsCate} /> */}
              <ProtectedRoute
                exact
                path="/booking-ticket/:id"
                component={BookingView}
              />
              <ProtectedRoute exact path="/orders" component={Orders} />
              <Route exact path="/film/:id" component={FilmDetail} />
              <Route exact path="/new/:id" component={NewDetail} />
              <Route exact path="/news" component={News} />
              <Route exact path="/password/forgot" component={ForgotPass} />
              <Route
                exact
                path="/password/reset/:token"
                component={ResetPass}
              />
              {/* <TabsCate /> */}
              <Route exact path={["/login", "/register"]}>
                <AuthLayout>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                </AuthLayout>
              </Route>
            </Switch>
          </Router>
        </Content>
      </Layout>
      <FooterLayout />
    </>
  );
};

export default LayoutMain;
