import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// components
import Card from "./Card";

// CSS
import "./wallet.css";

// Icons
import { MdArrowBack } from "react-icons/md";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

function Wallet({ cardsList }) {
  const [openCards, setOpenCards] = useState(true);
  const [openDeposites, setOpenDeposites] = useState(false);
  const [openCredits, setOpenCredits] = useState(false);
  //
  return (
    <div className="walletPage">
      <div className="header">
        <NavLink to="/" className="back">
          <MdArrowBack className="backActive" />
        </NavLink>
        <p>Кошелек</p>
      </div>
      <div className="content">
        <button onClick={() => setOpenCards(!openCards)} id="cards">
          <p
            style={
              openCards ? { color: "white" } : { color: "rgb(198,198,198)" }
            }
          >{`Карты (${cardsList.cards.length})`}</p>
          <p>
            {openCards ? (
              <FaAngleUp style={{ margineLeft: "20px" }} />
            ) : (
              <FaAngleDown style={{ margineLeft: "20px" }} />
            )}
          </p>
          <p style={{ color: "rgb(153,190,95)", marginTop: "0px" }}>Добавить</p>
        </button>
        <div className={openCards ? "open" : "closed"}>
          {cardsList.cards.map((info) => (
            <NavLink to={`${window.location.pathname}/${info.id}`}>
              <Card key={info.id} options={info} />
            </NavLink>
          ))}
        </div>
        <button onClick={() => setOpenDeposites(!openDeposites)} id="cards">
          <p
            style={
              openDeposites ? { color: "white" } : { color: "rgb(198,198,198)" }
            }
          >{`Депозиты (${cardsList.deposities.length})`}</p>
          <p>
            {openDeposites ? (
              <FaAngleUp style={{ margineLeft: "20px" }} />
            ) : (
              <FaAngleDown style={{ margineLeft: "20px" }} />
            )}
          </p>
          <p style={{ color: "rgb(153,190,95)", marginTop: "0px" }}>Оформить</p>
        </button>
        <button onClick={() => setOpenCredits(!openCredits)} id="cards">
          <p
            style={
              openCredits ? { color: "white" } : { color: "rgb(198,198,198)" }
            }
          >{`Кредиты (${cardsList.credits.length})`}</p>
          <p>
            {openCredits ? (
              <FaAngleUp style={{ margineLeft: "20px" }} />
            ) : (
              <FaAngleDown style={{ margineLeft: "20px" }} />
            )}
          </p>
        </button>
      </div>
    </div>
  );
}
export default Wallet;
