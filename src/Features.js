import React from "react";
import MyIconOne from "./Svg";
import MyIconTwo from "./Svg";

function Features() {
  function Card({ img: Img, title, text }) {
    return (
      <div className="features-card">
        <div className="features-icon">{Img && <Img />}</div>{" "}
        {/* Render SVG here */}
        <span className="card-feature-title">{title}</span>
        <p className="card-feature-text">{text}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <section className="features">
        <div className="features-intro">
          <h2>Features</h2>
          <h1>Meet our Solutions</h1>
          <p>
            Ignite Your Trades with Precision and Speed, Experience the Power of
            Pump Action.
          </p>
        </div>

        <div className="feature-list">
          <Card
            img={MyIconOne}
            title="Multi-Wallet Trading"
            text="Effortlessly manage and trade with over 25 Solana wallets for unparalleled efficiency during launches"
            alt="icon"
          />
          <Card
            img={MyIconOne}
            title="Multi-Wallet Trading"
            text="Effortlessly manage and trade with over 25 Solana wallets for unparalleled efficiency during launches"
            alt="icon"
          />
          <Card
            img={MyIconOne}
            title="Multi-Wallet Trading"
            text="Effortlessly manage and trade with over 25 Solana wallets for unparalleled efficiency during launches"
            alt="icon"
          />
          <Card
            img={MyIconOne}
            title="Multi-Wallet Trading"
            text="Effortlessly manage and trade with over 25 Solana wallets for unparalleled efficiency during launches"
            alt="icon"
          />
        </div>
      </section>
    </div>
  );
}

export default Features;
