import React from "react";

// CSS
import "./PageForCards.css";

// icons
import { BsWallet2 } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function UserCards() {
  return (
    <div className="PageForCards">
      <div className="wallet">
        <NavLink to="wallet" id="wallet">
          <div className="walletSVG">
            <BsWallet2 />
          </div>
          <div>
            <p>Кошелек</p>
          </div>
          <FaAngleRight
            style={{ color: "rgb(164, 164, 164)", marginTop: "4px" }}
          />
        </NavLink>
      </div>
    </div>
  );
}

export default UserCards;
