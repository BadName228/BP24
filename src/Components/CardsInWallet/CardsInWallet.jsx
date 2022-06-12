import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

// CSS
import "./style.module.css";

// Icons
import { MdArrowBack } from "react-icons/md";

function CardsInWallet({ options }) {
  console.log(options);
  return (
    <div>
      {/* <Routes>
        {options.map((info) => (
          <Route
            path={`/wallet/${info.id}`}
            key={info.id}
            element={
              <div>
                <p>{info.id}</p>
              </div>
            }
          />
        ))}
      </Routes> */}
      <p>qweqweqweqwe</p>
    </div>
  );
}

export default CardsInWallet;
