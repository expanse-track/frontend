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
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Add new account </Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const NewAccountModalLauncher = ({ rerenderTable }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button className={"btnAddAccount"} onClick={() => setShow(!show)}>
        {" "}
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
