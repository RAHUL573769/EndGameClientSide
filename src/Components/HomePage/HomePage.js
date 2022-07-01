import React from "react";
import MainTodo from "../MainTodo/MainTodo";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <MainTodo></MainTodo>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
