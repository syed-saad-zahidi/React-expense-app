import "./App.css";
import AddTransactions from "./Components/AddTransactions";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import IncomeExpense from "./Components/IncomeExpense";
import TransactionList from "./Components/TransactionList";
import {GlobalProvider} from './Context/GlobalState'
function App() {
  return (
    <div className="App">
      <GlobalProvider>
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransactions />
      </GlobalProvider>
    </div>
  );
}

export default App;
