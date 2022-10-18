import { Layout } from "antd";
import React from "react";
import Banner from "../components/Banner/Banner";
import HeaderUtil from "./components/Header";

const { Header, Footer, Content } = Layout;
const LayoutMain = () => {
  return (
    <>
      <HeaderUtil />
      <Layout>
        <Banner />
        <Content>Conten ssss s s s st</Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default LayoutMain;
