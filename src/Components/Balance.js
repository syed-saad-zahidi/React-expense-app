import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import { GlobalContext } from "../Context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transactions) => transactions.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className="balance">
      <Typography variant="h5">
        YOUR BALANCE
        <br />
        <Typography variant="h6 ">${total}</Typography>
      </Typography>
    </div>
  );
}

export default Balance;
