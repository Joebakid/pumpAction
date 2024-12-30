import React from "react";

function AboutApi() {
  return (
    <div className="container">
      <section className="aboutapi-el">
        <h2 className="aboutapi-title">About API</h2>
        <p className="aboutapi-text">Our platform is powered by the Pump Portal API, providing:</p>
        <ol>
          <li>
            Market Data: Free access to market insights for Pump.fun and
            Raydium.
          </li>
          <li>
            Automated Transactions: Execute trades programmatically with
            precision, incurring only a 0.5% transaction fee (excluding
            network-related charges)
          </li>
        </ol>
      </section>
    </div>
  );
}

export default AboutApi;
