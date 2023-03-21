import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Home = () => {

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;