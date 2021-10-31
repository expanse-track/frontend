import React, { useEffect, useState } from "react"; 
import AppNavBar from "../../layouts/navbar";
import Income from "../../components/incomeTable"
import "./index.scss"; 
import Footer from "./../../components/footer";

 

const Overview = () => {
  
  return (
    <AppNavBar>
        <Income/>
      <Footer />
    </AppNavBar>
  );
};

export default Overview;
