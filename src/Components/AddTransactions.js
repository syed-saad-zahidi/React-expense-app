import React, { useState, useContext } from "react";
import { Typography } from "@material-ui/core";
import { GlobalContext } from "../Context/GlobalState";

function AddTransactions() {
  const [text, setText] = useState();
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };
  return (
    <div>
      <div>
        <Typography variant="h5">Add New Transactions</Typography>

        <hr />

        <form id="form" onSubmit={onSubmit}>
          <div className="form-control">
            <Typography variant="h6">
              <label htmlFor="text">Text</label>
            </Typography>

            <input
              type="text"
              height="100"
              id="text"
              value={text}
              placeholder="Enter text..."
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="form-control">
            <Typography variant="h6">
              <label htmlFor="amount">
                Amount <br />
                <Typography variant="subtitle2">
                  (negative - expense, positive - income)
                </Typography>
              </label>
            </Typography>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..."
            />
          </div>
          <button class="btn">Add transaction</button>
        </form>
      </div>
    </div>
  );
}

export default AddTransactions;
