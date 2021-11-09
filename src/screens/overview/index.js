import React, { useEffect, useState } from "react"; 
import AppNavBar from "../../layouts/navbar";
import Accounts from "./../../components/accounts"
import "./index.css"; 
import Footer from "./../../components/footer";
import BudgetStatusCard from "../../components/budgetStatusCard";
import { Col, Container, Row } from "react-bootstrap";

 

const Overview = () => {
  
  return (
    <AppNavBar>
       <Container>
        <Row>
          <Col>   <BudgetStatusCard /></Col>
          <Col>   <BudgetStatusCard /></Col>
          <Col>   <BudgetStatusCard /></Col>
        </Row>
      </Container>
        <Accounts/>
      <Footer />
    </AppNavBar>
  );
};

export default Overview;
