import React from "react";
import Banner from "../Banner/Banner";
import Faq from "../FAQ/Faq";
import Friends from "../Friends/Friends";
import Layout from "../Layout/Layout";
import Specialized from "../Specialized/Specialized";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Specialized></Specialized>
      <Faq></Faq>
      <Friends limit={5} />
    </Layout>
  );
};

export default Home;
