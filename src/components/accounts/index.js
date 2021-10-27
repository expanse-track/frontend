import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { fetchAllAccounts } from "../../helpers/apiHelper";
import Button from 'react-bootstrap/Button'
import "./index.scss";
import NewAccountModalLauncher from "../addAccountModal";
 
const Accounts = () => {
  const [state, setstate] = useState([]);

  const fetchAndSetAccounts = () => {
    fetchAllAccounts().then((res) => {
      setstate(res);
    });
  };

  useEffect(() => {
    fetchAndSetAccounts();
  }, []);

  return (
    <div className="accountTable">
      <div className="accountTableHeader">
      <div className="accountTableHeaderText">
        Accounts </div>
        <div className="accountTableHeaderButton"> 
        <NewAccountModalLauncher/></div>

      </div>
      <Table >
        <tbody>
          {state.map((account) => {
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
                    <Dropdown.Item>edit</Dropdown.Item>
                    <Dropdown.Item>delete</Dropdown.Item>
                  </DropdownButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Accounts;
