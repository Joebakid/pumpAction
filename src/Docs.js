import React, { useState } from "react";
// import "./Tabs.css";

function Tabs() {
  const [activeTab, setActiveTab] = useState("Getting Started");

  const tabsContent = {
    "Getting Started": (
      <ul>
        <li>
          <strong>A Solana Wallet</strong> (e.g., Phantom, Solflare).
        </li>
        <li>
          <strong>An Active Telegram Account</strong>.
        </li>
        <li>
          <strong>Sufficient SOL</strong> for network fees and trades.
        </li>
      </ul>
    ),
    "API Overview": (
      <>
        {" "}
        <h2>We utilize the Pump Portal API:</h2>
        <ul>
          <li>
            <strong>Data API (Free)</strong> : Access market data for Pump.fun
            bonding curves and Raydium LPs.
          </li>
          <li>
            <strong>Transaction API</strong> : Automate trades with a 0.5% fee.
          </li>{" "}
        </ul>
      </>
    ),
    Setup: (
      <>
        {" "}
        <ul>
          <li>
            <strong>Create Wallet</strong> : Create/Generate multiple wallet
            securely using our interface.
          </li>
          <li>
            <strong>Connect to Telegram</strong> : Initiate trades during launch
            events directly via Telegram.
          </li>{" "}
          <li>
            <strong>Execute Trades</strong> : Initiate trades during launch
            events directly via Telegram.
          </li>{" "}
        </ul>
      </>
    ),
    "Fee Details": (
      <ul>
        <li>
          <strong>Trading Fee</strong> : 0.5% per transaction (calculated before
          slippage).
        </li>
        <li>
          <strong> Network Fees</strong> : Standard Solana transaction costs.
          events directly via Telegram.
        </li>{" "}
        <li>
          <strong>Pump.fun Fees</strong> : Additional fees may apply based on
          bonding curve policies.
        </li>{" "}
      </ul>
    ),
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        <h1 className="title">Your Guide To Seamless Trading</h1>
        <p className="subtitle">
          Simplify your trading process with this easy-to-follow guide.
        </p>
      </div>

      <div className="tabs-nav">
        {Object.keys(tabsContent).map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">{tabsContent[activeTab]}</div>
    </div>
  );
}

export default Tabs;
