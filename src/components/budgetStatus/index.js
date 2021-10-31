import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { deleteAccount, fetchAllAccounts  , editAccount} from "../../helpers/apiHelper";
import "./index.scss";
import NewAccountModalLauncher from "../addAccountModal";
import EditAccountModal from "../editAccountModal"
import { useDispatch, useSelector } from "react-redux";
import { changeAccount, removeAccount, setAccounts } from "../../state/actions/account";
import { setIntent } from "../../state/actions/intent";

const Accounts = () => {
  //load redux state and dispather
  const accounts = useSelector(state => state.account.accounts).sort(function (a, b) {
    return new Date(a.updatedOn) - new Date(b.updatedOn);
  });

  const dispatch = useDispatch();

  //fetch account and set state
  const fetchAndSetAccounts = () => {
    fetchAllAccounts().then((res) => {
      dispatch({ type: setAccounts, payload: res })
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
          Accounts </div>
        <div className="accountTableHeaderButton">
          <NewAccountModalLauncher rerenderTable={fetchAndSetAccounts} /></div>

      </div>
      <Table >
        <tbody>
          {accounts.map((account) => {
            return (
              <tr key={account._id}>
                <td>
                  <div className="accountTableItemHeader"> {account.name} </div>
                  <div className="accountTableItemSubHeader">
                    {account.type}
                  </div>
                </td>
                <td>
                  <div className="accountTableItemHeader">
                    $ {account.balance}
                  </div>
                  <div className="accountTableItemSubHeader">balance</div>
                </td>

                <td>
                  <div className="accountTableItemHeader">
                    {account.transactions}
                  </div>
                  <div className="accountTableItemSubHeader">Transactions</div>
                </td>

                <td>
                  <div className="accountTableItemHeader">
                    {new Date(account.updatedOn).toDateString()}
                  </div>
                  <div className="accountTableItemSubHeader">Updated On</div>
                </td>

                <td>
                  {account.active ? (
                    <>
                      <div className="activeIndicater"></div>
                      <div className="activeIndicaterText">Active </div>
                    </>
                  ) : (
                    <>
                      <div className="inactiveIndicater"></div>
                      <div className="inactiveIndicaterText">Inctive </div>
                    </>
                  )}
                </td>

                <td className="dropDownContainerDiv">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Actions"
                    className="actionDropDown"
                  >

                    {account.active ? (<Dropdown.Item

                      onClick={() => {
                        dispatch({ type: changeAccount, payload: { ...account, active: false } })
                        editAccount(account._id, { active: false });
                      }}

                    >Deactivate</Dropdown.Item>) : (<Dropdown.Item

                      onClick={() => {
                        dispatch({ type: changeAccount, payload: { ...account, active: true } });
                        editAccount(account._id, { active: true });
                      }}
                    >Activate</Dropdown.Item>)}


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
