import React, { useState } from "react";
import "./Header.scss";

const Header = ()=> {
    return (
      <header className="header">
        <div className="header__wrapper">
          <h1>Expense Track</h1>
        </div>
      </header>
    );
}
export default Header;