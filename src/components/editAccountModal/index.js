import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./index.scss";
import { createNewAccount } from "../../helpers/apiHelper";

const EditAccountModal = ({ show = false, handleClose, handleRerendering   , modalData }) => {
 
  const [formData, setFormData] = useState({
    id:"",
    name:"" ,
    type:""  ,
    balance:0 ,
    show ,
    ...modalData 
  });

 

  const setData = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };
  return (
    <>
      <Modal
        centered
        show={show}
        onHide={handleClose}
        animation={true}
        className="editAccountModal"
      >
        <div className="header"> Add account </div>
        <div className="content">
          Add new account to the list

          {/* Name  */}
          <div className="inputWrapper">
            <div className="inputHeader">Name</div>
            <div className="inputContaner">
              <input className="input" onChange={(e) => { setData("name", e.target.value) }} value={formData.name} />
            </div>
          </div>



          {/* Type  */}
          <div className="inputWrapper">
            <div className="inputHeader">Type</div>
            <div className="inputContaner">

              <select name="cars" className="input" onChange={(e) => { setData("type", e.target.value) }} value={formData.type}>
                <option value="Debit card">Debit card</option>
                <option value="Credit card">Credit card</option>
                <option value="Bank account">Bank account</option>
                <option value="E-wallet">E-wallet</option>
                <option value="Cash">Cash</option>
              </select>

            </div>
          </div>



          {/* Balance  */}
          <div className="inputWrapper">
            <div className="inputHeader">Balance</div>
            <div className="inputContaner">
              <input className="input" type="number" onChange={(e) => { setData("balance", Number(e.target.value)) }} value={formData.balance} />
            </div>
          </div>


          <div className="buttonBar">
            <div className="buttonWrapper">
              <Button className={"btnClose"} onClick={()=>handleClose()}>
                Close
              </Button>
            </div>

            <div className="buttonWrapper">
              <Button className={"btnAddAccount"} onClick={() => {
                createNewAccount({ ...formData }); 
                handleClose();
              }

              } >
                Add account
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
 

export default EditAccountModal;
