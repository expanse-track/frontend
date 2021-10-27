import React, {  useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./index.scss";

const NewAccountModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
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

const NewAccountModalLauncher = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button className={"btnAddAccount" } onClick={() => setShow(!show)}> Add account</Button>

      <NewAccountModal show={show} handleClose={() => setShow(false)} />
    </>
  );
};

export default NewAccountModalLauncher;
