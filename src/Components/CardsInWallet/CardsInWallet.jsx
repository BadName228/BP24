import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

// CSS
import "./style.css";

// Icons
import { MdArrowBack } from "react-icons/md";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

function CardsInWallet({ options }) {
  console.log(options);
  return (
    <div>
      <Routes>
        {options.map((info) => (
          <Route
            path={`/wallet/${info.id}`}
            key={info.id}
            element={
              <div>
                <div
                  className={
                    info.type == "gold" ? "GoldCardImage" : "DefaultCardImage"
                  }
                >
                  <div className="backB">
                    <NavLink to="/">
                      <MdArrowBack className="backActiveButton" />
                    </NavLink>
                  </div>
                  <div className="FieldInfo">
                    <h3>
                      Карта
                      {info.type == "universal"
                        ? " универсальная"
                        : " для выплат"}
                      {info.type == "gold" ? " Голд" : ""}
                    </h3>
                    <div
                      className={
                        info.paySystem == "mastercard"
                          ? "PaymentSystemMaster"
                          : "PaymentSystemVisa"
                      }
                    />
                    <p style={{ fontWeight: 600 }}>
                      {info.number[0]} **** **** {info.number[3]}
                    </p>
                    <div className="dateAcvv">
                      <p style={{ fontWeight: 600 }}>{info.date}</p>
                      <p>CVV2</p>
                    </div>
                    <div style={{ fontWeight: 600 }}>
                      <p>Доступно</p>
                      <p style={{ float: "right", marginTop: "-20px" }}>
                        {info.money.toFixed(2)} {info.currency}
                      </p>
                    </div>
                  </div>
                </div>
                <div id="transactionField">
                  <div id="lastTransaction">
                    <p>Вторник, 14 июня 2022</p>
                    <p style={{ float: "right", marginTop: "-20px" }}>
                      {info.transactionStory.reverse()[0].balance.toFixed(2)}
                    </p>
                  </div>
                  {info.transactionStory.reverse().map((e) => (
                    <div className="defaultTransaction">
                      {e.type == "send" ? (
                        <FaAngleDoubleRight />
                      ) : (
                        <FaAngleDoubleLeft />
                      )}
                      <div className="TransactionInformation">
                        <p>{e.type == "send" ? "Покупка" : "Пополнение"}</p>
                        <p>e.description</p>
                        <p>{e.time}</p>
                      </div>
                      <p
                        className={e.type == "send" ? "sendMoney" : "getMoney"}
                      >
                        {e.type == "send" ? "-" : ""}
                        {e.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            }
          />
        ))}
      </Routes>
    </div>
  );
}

export default CardsInWallet;
