import React, { useEffect,   useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { deleteAccount, fetchAllAccounts } from "../../helpers/apiHelper";
import "./index.scss";
import NewAccountModalLauncher from "../addAccountModal";
import EditAccountModal from "../editAccountModal"
import { useDispatch, useSelector } from "react-redux";
import { removeAccount, setAccounts } from "../../state/actions/account"; 

const Accounts = () => {
const accounts = useSelector(state => state.account)
  const dispatch = useDispatch();
  const [state, setstate] = useState([]);

  //edit account relatedState 
  const [account, setAccount] = useState({
    name: "",
    id: "",
    type: "",
    balance: "",
    show:false
  });

  const closeEditModal = () =>{
    setAccount({...account , show: false})
  }


  const fetchAndSetAccounts = () => {
    fetchAllAccounts().then((res) => {
      setstate(res);
      dispatch({ type: setAccounts, payload: res })
    });
  };

  useEffect(() => {
    fetchAndSetAccounts();
  }, []);

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
          {accounts.accounts.map((account) => {
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

                    {account.active ? (<Dropdown.Item>Deactivate</Dropdown.Item>) : (<Dropdown.Item>Activate</Dropdown.Item>)}
                    <Dropdown.Item onClick={() => {
                      setAccount({ ...account , show:true})

                    }} >Edit</Dropdown.Item>
                    <Dropdown.Item onClick={() => {
                      deleteAccount(account._id).then(() => {
                        dispatch({ type: removeAccount, payload:account })
                        // fetchAndSetAccounts();
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
      <EditAccountModal show={account.show} handleClose={closeEditModal} modalData={account} />
    </>
  );
};

export default Accounts;
