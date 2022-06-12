import { Routes, Route } from "react-router-dom";
import "./App.css";

// components
import StartPage from "./Components/StartPage/StartPage.jsx";
import Wallet from "./Components/StartPage/Wallet.jsx";

//
const allcards = {
  cards: [
    {
      number: [9999, 9999, 9999, 8888],
      id: "YlbsysNs8z",
      currency: "UAH",
      date: "01/23",
      type: "gold",
      payout: "universal",
      cvv: 228,
      pin: 3456,
      paySystem: "mastercard",
      money: 4474.34,
      transactionStory: [{ date: "07.06.2022", time: "22:22", value: 12.45 }],
    },
    {
      number: [2554, 9999, 2334, 8888],
      id: "MQWnkqrDS1",
      currency: "UAH",
      date: "01/23",
      type: "default",
      payout: "payout",
      cvv: 111,
      pin: 1111,
      paySystem: "mastercard",
      money: 44.0,
      transactionStory: [{ date: "08.05.2022", time: "11:22", value: 67.45 }],
    },
    {
      number: [9999, 7899, 9999, 8888],
      id: "TPRwPO_-tN",
      currency: "UAH",
      date: "01/23",
      type: "gold",
      payout: "payout",
      cvv: 486,
      pin: 7878,
      paySystem: "mastercard",
      money: 97789.0,
      transactionStory: [{ date: "23.11.2021", time: "08:34", value: 111.67 }],
    },
  ],
  deposities: [],
  credits: [],
};
//
function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<StartPage />} />
        <Route path="/wallet" element={<Wallet cardsList={allcards} />} />
      </Routes>
    </div>
  );
}

export default App;
