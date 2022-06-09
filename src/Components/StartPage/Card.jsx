import React from "react";
import "./wallet.css";

function Card({ options }) {
  return (
    <div className="mapCards">
      <img
        src={
          options.paySystem == "mastercard"
            ? "./paymentSystem/mastercard.svg"
            : "./paymentSystem/visa.svg"
        }
        className="visaORmaster"
      />
      <img
        src={options.type == "gold" ? "./GoldCard.jpg" : "./DefaultCard.jpg"}
        className="imgCard"
      />
      <div>
        {options.number[3]} Карта{" "}
        {options.payout == "universal" ? "универсальная" : "для выплат"}{" "}
        {options.type == "gold" ? "Голд" : ""}
        <p>
          {options.money.toFixed(2)} {options.currency}
        </p>
      </div>
    </div>
  );
}
export default Card;
