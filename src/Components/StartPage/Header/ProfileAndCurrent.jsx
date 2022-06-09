import React, { useEffect, useState } from "react";

// CSS
import "./ProfileAndCurrent.style.css";

// icons
import { BsFillPersonFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";

function ProfileAndCurrent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div className="ProfileAndCurrent">
      <div className="profile">
        <BsFillPersonFill />
      </div>
      <div className="current">
        <FaDollarSign />
        <p>
          {data[0]?.buy.substr(0, 5)} / {data[0]?.sale.substr(0, 5)}
        </p>
      </div>
      <div className="help">
        <IoIosChatboxes />
      </div>
    </div>
  );
}

export default ProfileAndCurrent;
