import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./index.scss";

const NewAccountModal = ({ show, handleClose, handleRerendering }) => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const setData = ({ key, value }) => {
    setFormData({ ...formData, [key]: value });
  };
  return (
    <>
      <Modal
        centered
        show={show}
        onHide={handleClose}
        animation={true}
        className="addNewAccountModal"
      >
        <div className="header"> Add account </div>
        <div className="content">
          Add new account
          <div className="inputWrapper">
            <div className="inputHeader">Name</div>
            <div className="inputContaner">
              <input />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

const NewAccountModalLauncher = ({ rerenderTable }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button className={"btnAddAccount"} onClick={() => setShow(!show)}>
        Add account
      </Button>
      <NewAccountModal
        show={show}
        handleClose={() => {
          setShow(false);
        }}
        handleRerendering={() => {
          rerenderTable();
        }}
      />
    </>
  );
};

export default NewAccountModalLauncher;
