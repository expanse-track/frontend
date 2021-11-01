import React, { useEffect, useState } from "react"; 
import AppNavBar from "../../layouts/navbar";
import Expense from "../../components/expenseTable"
import "./index.scss"; 
import Footer from "../../components/footer";

 

const Overview = () => {
  
  return (
    <AppNavBar>
        <Expense/>
      <Footer />
    </AppNavBar>
  );
};

export default Overview;
