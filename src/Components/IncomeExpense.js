import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import { GlobalContext } from "../Context/GlobalState";
function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div className="inexp_cont">
      <div className="income_cont">
        <Typography variant="h5">INCOME</Typography>
        <Typography variant="h6">${income}</Typography>
      </div>
      <hr />
      <div className="expense_cont">
        <Typography variant="h5">EXPENSE</Typography>
        <Typography variant="h6">${expense}</Typography>
      </div>
    </div>
  );
}

export default IncomeExpense;
