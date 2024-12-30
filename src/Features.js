import React from "react";
import {
  MyIconOne,
  MyIconTwo,
  MyIconThree,
  MyIconFour,
  MyIconFive,
} from "./Svg";

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
      <hr />
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
            img={MyIconTwo}
            title="Telegram Bot Integration"
            text="Telegram Bot Integration
Execute trades conveniently via an intuitive Telegram interface."
            alt="icon"
          />
          <Card
            img={MyIconThree}
            title="Powered by Pump Portal API"
            text="Benefit from the speed and reliability of integrations with Pump.fun bonding curve and Raydium liquidity pools."
            alt="icon"
          />
          <Card
            img={MyIconFour}
            title="Low Fees"
            text="Trade with a competitive fee structure of just 0.5% per transaction, along with minimal Solana network charges."
            alt="icon"
          />
          <Card
            img={MyIconFive}
            title="Real-Time Market Insights"
            text="Stay ahead with live market data to make informed trading decisions."
            alt="icon"
          />
        </div>
      </section>
    </div>
  );
}

export default Features;
