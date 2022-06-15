import { Routes, Route } from "react-router-dom";
import "./App.css";

// components
import StartPage from "./Components/StartPage/StartPage.jsx";
import Wallet from "./Components/StartPage/Wallet.jsx";
import CardsInWallet from "./Components/CardsInWallet/CardsInWallet";

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
      paySystem: "visa",
      money: 4474.34,
      transactionStory: [
        {
          date: "07.06.2022",
          time: "22:22",
          value: 12.45,
          type: "send",
          balance: 4474.34,
          id: "b7214618-6818-4810-9e9a-39dd3b43e0a7",
        },
      ],
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
      transactionStory: [
        {
          date: "08.05.2022",
          time: "11:22",
          value: 67.45,
          type: "send",
          balance: 44.0,
          id: "0d9dd40e-6b96-44d1-8ee9-99c6cdba9ecb",
        },
      ],
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
      transactionStory: [
        {
          date: "23.11.2021",
          time: "08:34",
          value: 111.67,
          type: "send",
          balance: 97789.0,
          id: "1f65c019-5589-48f2-ac35-db595d22b4a7",
        },
      ],
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
        <Route exact path="/wallet" element={<Wallet cardsList={allcards} />} />
      </Routes>
      <CardsInWallet options={allcards.cards} />
    </div>
  );
}

export default App;
