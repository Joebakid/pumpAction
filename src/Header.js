import React from "react";

function Header() {
  function Link({ src, name, alt }) {
    return (
      <div className="container-nft">
        <div className="img-container">
          <img alt={alt} src={src} />
        </div>
        <div>{name}</div>
      </div>
    );
  }
  return (
    <header>
      <div className="container">
        <div className="flex-header">
          <div className="first-section-title">
            <h1 className="text-one-intro">
              High Speed Sol <span className="text-color">Trading Bot</span>{" "}
            </h1>
            <h1 className="text-two-intro">For Raydium And Pump.com</h1>
          </div>
          <div className="header-text-container">
            {" "}
            <p className="header-text">
              Optimize your launch buys with seamless multi-wallet trading
              through our Telegram bot.
            </p>
          </div>

          <div className="header-btn">
            {" "}
            <a className="header-nav-link-a" target="_blank" href="https://t.me/pumpAction247Bot">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
