import React from "react";

// components
import ProfileAndCurrent from "./Header/ProfileAndCurrent";
import UserCards from "./UserCards/UserCards";
import Footer from "./Footer/Footer";
import Servisces from "./Services/Servisces";

function StartPage() {
  return (
    <div>
      <ProfileAndCurrent />
      <UserCards />
      <Servisces />
      <Footer />
    </div>
  );
}

export default StartPage;
