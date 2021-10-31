import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./index.scss";
import { editAccount } from "../../helpers/apiHelper";
import { useDispatch, useSelector } from "react-redux";
import { changeAccount } from "../../state/actions/account";

const EditAccountModal = ({ show = false, toggleModal }) => {
  const stateData = useSelector(state => state.intent.intents.editAccount)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    balance: 0,
    updatedOn: new Date(),
    show,
  });

  useEffect(() => {
    setFormData({ ...formData, ...stateData })
  }, [show])

  const setData = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };
  return (
    <>
      <Modal
        centered
        show={show}
        onHide={toggleModal}
        animation={true}
        className="editAccountModal"
      >
        <div className="header"> Edit account </div>
        <div className="content">
          Edit existing account

          {/* Name  */}
          <div className="inputWrapper">
            <div className="inputHeader">Name</div>
            <div className="inputContaner">
              <input className="input" onChange={(e) => { setData("name", e.target.value) }}
                value={(formData.name == 0 && stateData != undefined) ? stateData.name : formData.name} />
            </div>
          </div>



          {/* Type  */}
          <div className="inputWrapper">
            <div className="inputHeader">Type</div>
            <div className="inputContaner">

              <select name="cars" className="input" onChange={(e) => { setData("type", e.target.value) }} value={(formData.type == "" && stateData != undefined) ? stateData.type : formData.balance} >
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
              <input className="input" type="number"
                onChange={(e) => { setData("balance", Number(e.target.value)) }} value={(formData.balance == 0 && stateData != undefined) ? stateData.balance : formData.balance} />
            </div>
          </div>


          <div className="buttonBar">
            <div className="buttonWrapper">
              <Button className={"btnClose"} onClick={() => toggleModal()}>
                Close
              </Button>
            </div>

            <div className="buttonWrapper">
              <Button className={"btnAddAccount"} onClick={() => {
                editAccount(stateData._id, formData);
                // alert(stateData._id)
                dispatch({type:changeAccount , payload: formData})
                toggleModal();
              }

              } >
                Edit
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};


export default EditAccountModal;
