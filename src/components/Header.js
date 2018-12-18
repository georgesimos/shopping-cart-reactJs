import React from "react";

// Just a header
export const Header = props => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <span className="header__title"> Demo Shop </span>
        <nav className="header__nav">
          <a href="#0" className="header__link">
            Home
          </a>
          <a href="#0" className="header__link">
            Store
          </a>
          <a href="#0" className="header__link">
            Blog
          </a>
        </nav>
        <a
          onClick={props.openCart}
          href="#0"
          className="header__link cart-trigger"
          style={{
            background: "url(/images/cart.svg) no-repeat center center "
          }}
        >
          {""}
        </a>
      </div>
    </div>
  </header>
);

export default Header;
