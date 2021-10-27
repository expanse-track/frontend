import React, { useEffect, useState } from "react";
import { fetchAlltodos } from "../../helpers/apiHelper";
import AppNavBar from "../../layouts/navbar";
import Accounts from "./../../components/accounts"
import "./index.css";
import { Container } from "react-bootstrap";
import Footer from "./../../components/footer";

const StatusCard = ({ type, amount = 0 }) => {
  return (
    <div
      className={type == "Active" ? "statusCardActive" : "statusCardCompleted"}
    >
      {type} Todos
      <div className="statusAmount"> {amount}</div>
    </div>
  );
};

const History = () => {
  const [todos, setTodos] = useState({
    active: [],
    completed: [],
  });

  useEffect(() => {
    fetchAlltodos().then((res) => {
      let active = [];
      let completed = [];

      res.forEach((todo) => {
        if (todo.active) {
          active.push(todo);
        } else {
          completed.push(todo);
        }
      });

      setTodos({
        active,
        completed,
      });
    });
  }, []);

  return (
    <AppNavBar>
        <Accounts/>
      <Footer />
    </AppNavBar>
  );
};

export default History;
