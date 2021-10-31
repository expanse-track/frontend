import React, { useEffect, useState } from "react"; 
import AppNavBar from "../../layouts/navbar";
import Accounts from "./../../components/accounts"
import "./index.css"; 
import Footer from "./../../components/footer";

 

const Overview = () => {
  
  return (
    <AppNavBar>
        <Accounts/>
      <Footer />
    </AppNavBar>
  );
};

export default Overview;
