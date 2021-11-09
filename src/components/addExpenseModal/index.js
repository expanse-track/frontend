import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./index.scss";
import { 
  createNewExpense,
  fetchAllAccounts,
} from "../../helpers/apiHelper";
import { useDispatch, useSelector } from "react-redux";
import {  setAccounts } from "../../state/actions/account"; 
import { addExpense } from "../../state/actions/expense";

const AddExpenseModalModal = ({ show, handleClose }) => {
  //define dispatcher
  const dispatch = useDispatch();

  //set local state
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    amount: 0,
    account: "",
  });

  //set state on change 
  const setData = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  //get account list
  const accounts = useSelector((state) => state.account.accounts);

  //fetch accounts again if the list is empty
  if (accounts.length == 0) {
    fetchAllAccounts().then((res) => {
      dispatch({ type: setAccounts, payload: res });
    });
  }

  return (
    <>
      <Modal
        centered
        show={show}
        onHide={handleClose}
        animation={true}
        className="addNewAccountModal"
      >
        <div className="header"> Add Expense </div>
        <div className="content">
          Add new account to the list
          {/* Name  */}
          <div className="inputWrapper">
            <div className="inputHeader">Name</div>
            <div className="inputContaner">
              <input
                className="input"
                onChange={(e) => {
                  setData("name", e.target.value);
                }}
                value={formData.name}
              />
            </div>
          </div>
          {/* Category  */}
          <div className="inputWrapper">
            <div className="inputHeader">Category</div>
            <div className="inputContaner">
              <select
                name="cars"
                className="input"
                onChange={(e) => {
                  setData("category", e.target.value);
                }}
                value={formData.category}
              >
                <option value="Debit card">Clothing</option>
                <option value="Credit card">Food</option>
                <option value="Bank account">Transport</option>
                <option value="E-wallet">Electronics</option>
                <option value="Cash">Home appliances</option>
              </select>
            </div>
          </div>
          {/* Account  */}
          <div className="inputWrapper">
            <div className="inputHeader">Account</div>
            <div className="inputContaner">
              <select
                className="input"
                onChange={(e) => {
                  setData("account", e.target.value);
                }}
                value={formData.account}
              >
                {accounts.map((account) => {
                  return <option value={account.name}>{account.name}</option>;
                })}
              </select>
            </div>
          </div>
          {/* Amount  */}
          <div className="inputWrapper">
            <div className="inputHeader">Amount</div>
            <div className="inputContaner">
              <input
                className="input"
                type="number"
                onChange={(e) => {
                  setData("amount", Number(e.target.value));
                }}
                value={formData.amount}
              />
            </div>
          </div>
          <div className="buttonBar">
            <div className="buttonWrapper">
              <Button className={"btnClose"} onClick={handleClose}>
                Close
              </Button>
            </div>

            <div className="buttonWrapper">
              <Button
                className={"btnAddAccount"}
                onClick={() => {
                  createNewExpense({ ...formData }).then((res) => {
                    console.log(res);
                    dispatch({ type: addExpense, payload: res });
                  });
                  // setFormData({});
                  handleClose();
                }}
              >
                Add account
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

const AddExpenseModalModalLauncher = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button className={"btnAddAccount"} onClick={() => setShow(!show)}>
        Add expense
      </Button>
      <AddExpenseModalModal
        show={show}
        handleClose={() => {
          setShow(false);
        }}
      />
    </>
  );
};

export default AddExpenseModalModalLauncher;
