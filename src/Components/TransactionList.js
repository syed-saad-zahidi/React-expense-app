import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { Transactions } from "./Transactions";
import { Typography } from "@material-ui/core";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  
  return (
    <div className="transaction_list">
      <Typography variant="h5">
        <br />
        History
        <hr />
        <Typography>
          <ul className="list">
            {transactions.map((transaction) => (
              <Transactions key={transaction.id} transaction={transaction} />
            ))}
          </ul>
        </Typography>
      </Typography>
    </div>
  );
}

export default TransactionList;
