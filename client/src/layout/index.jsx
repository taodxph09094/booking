import { Layout } from "antd";
import React from "react";
import Banner from "../components/Banner/Banner";
import TabsCate from "../components/Tabs/TabsCate";
import HeaderUtil from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Films from "../components/Films/Films";
const { Header, Footer, Content } = Layout;
const LayoutMain = () => {
  return (
    <>
      <HeaderUtil />
      <Layout>
        <Banner />
        <Content className="mainContent">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/booking" component={TabsCate} />
              <TabsCate />
            </Switch>
          </Router>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default LayoutMain;
