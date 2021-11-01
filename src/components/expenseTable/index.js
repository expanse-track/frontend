import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { deleteAccount, fetchAllExpenses } from "../../helpers/apiHelper";
import "./index.scss";
import AddExpenseModalModalLauncher from "../addExpenseModal";
import EditAccountModal from "../editAccountModal"
import { useDispatch, useSelector } from "react-redux";
import { removeAccount, setAccounts } from "../../state/actions/account";
import { setIntent } from "../../state/actions/intent";
import { setExpenses } from "../../state/actions/expense";

const Accounts = () => {
  //load redux state and dispather
  const accounts = useSelector(state => state.expense.expenses).sort(function (a, b) {
    return new Date(a.updatedOn) - new Date(b.updatedOn);
  });

  const dispatch = useDispatch();

  //fetch account and set state
  const fetchAndSetAccounts = () => {
    fetchAllExpenses().then((res) => {
      console.log(res)
      dispatch({ type: setExpenses, payload: res })
    });
  };

  //fetch accounts on page load
  useEffect(() => {
    fetchAndSetAccounts();
  }, []);

  //show edit account related state
  const [editAccountModal, setEditAccountModal] = useState({
    id: "",
    show: false
  })

  // toggle the visibility of the edit modal\
  const toggleEditModal = () => {
    setEditAccountModal({ ...editAccountModal, show: !editAccountModal.show })
  }



  return (
    <> <div className="accountTable">
      <div className="accountTableHeader">
        <div className="accountTableHeaderText">
          Expense Records </div>
        <div className="accountTableHeaderButton">
          <AddExpenseModalModalLauncher rerenderTable={fetchAndSetAccounts} /></div>

      </div>
      <Table >
        <tbody>
          <th className="incomeTableHead">
            <td>Name</td>
          </th>
          <th className="incomeTableHead">
            <td>Amount</td>
          </th>
          <th className="incomeTableHead">
            <td>Date</td>
          </th>
          <th className="incomeTableHead">
            <td></td>
          </th>
          {accounts.map((account) => {

            return (
              <tr key={account._id}>
                <td>
                  <div className="accountTableItemHeader"> {account.name} </div>
                   
                </td>
                <td>
                  <div className="accountTableItemHeader">
                    $ {account.amount}
                  </div> 
                </td>



                <td>
                  <div className="accountTableItemHeader">
                    {new Date(account.date).toDateString()}
                  </div> 
                </td>



                <td className="dropDownContainerDiv">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Actions"
                    className="actionDropDown"
                  >



                    <Dropdown.Item onClick={() => {
                      dispatch({ type: setIntent, payload: { key: "editAccount", value: account } })
                      toggleEditModal()
                    }} >Edit</Dropdown.Item>
                    <Dropdown.Item onClick={() => {
                      deleteAccount(account._id).then(() => {
                        dispatch({ type: removeAccount, payload: account })
                      });
                    }} >Delete</Dropdown.Item>
                  </DropdownButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
      <EditAccountModal show={editAccountModal.show} toggleModal={toggleEditModal} />
    </>
  );
};

export default Accounts;
