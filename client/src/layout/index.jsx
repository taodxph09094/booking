import { Layout } from "antd";
import React from "react";
import HeaderUtil from "./components/Header";

const { Header, Footer, Content } = Layout;
const LayoutMain = () => {
  return (
    <>
      <HeaderUtil />
      <Layout>
        <Content>Conten ssss s s s st</Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default LayoutMain;
