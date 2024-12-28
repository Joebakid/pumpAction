import React from "react";
// import "./TermsOfUse.css";

function TermsOfUse() {
  return (
    <div className="terms-container">
      <h1 className="terms-header">Terms of Service</h1>

      <section className="terms-content">
        <h2>1. Description of Service</h2>
        <p>
          The Service is a Solana-based trading bot designed to facilitate
          high-speed trading across Raydium and Pump.fun platforms. It supports
          over 25 wallets for simultaneous execution of trades at token launches
          to maintain high trading volume. The Service integrates with the Pump
          Portal API (https://pumpportal.fun/) to enhance performance and
          functionality.
        </p>

        <h2>2. Eligibility</h2>
        <ul>
          <li>Be at least 18 years old.</li>
          <li>Have the legal capacity to enter into these Terms.</li>
          <li>Comply with all applicable laws, regulations, and guidelines.</li>
          <li>
            Have access to a Solana wallet and sufficient funds for trading.
          </li>
        </ul>

        <h2>3. User Responsibilities</h2>
        <p>As a user of the Service, you agree to:</p>
        <ul>
          <li>Use the Service solely for lawful purposes.</li>
          <li>
            Refrain from using the Service to engage in any fraudulent or
            illegal activities, including market manipulation or wash trading.
          </li>
          <li>Provide accurate and up-to-date information as required.</li>
          <li>Maintain the security of your wallets and private keys.</li>
        </ul>

        <h2>4. Disclaimer of Liability</h2>
        <p>
          The Service is provided "as is" and "as available." We make no
          guarantees regarding the performance, reliability, or accuracy of the
          Service. Trading cryptocurrencies involves significant risk. By using
          the Service, you acknowledge and accept the risks associated with
          cryptocurrency trading, including market volatility and the potential
          loss of funds.
        </p>

        <h2>5. Integration with Third-Party APIs</h2>
        <p>
          The Service uses the Pump Portal API (https://pumpportal.fun/) to
          enhance functionality. By using the Service, you agree to comply with
          the terms and conditions of the Pump Portal API and acknowledge that:
        </p>
        <ul>
          <li>
            We do not control or take responsibility for the availability,
            accuracy, or functionality of third-party APIs.
          </li>
          <li>
            Any issues arising from third-party APIs must be addressed with the
            respective providers.
          </li>
        </ul>

        <h2>6. Prohibited Activities</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Reverse-engineer, decompile, or modify the Service.</li>
          <li>
            Use the Service to conduct unauthorized transactions or activities.
          </li>
          <li>Exploit the Service to disrupt markets or harm other users.</li>
        </ul>

        <h2>7. Fees and Payments</h2>
        <p>
          Certain features of the Service may require payment of fees. All fees
          are non-refundable unless otherwise stated. You are responsible for
          any transaction fees, including those imposed by the Solana network or
          trading platforms.
        </p>

        <h2>8. Privacy</h2>
        <p>
          We value your privacy and are committed to protecting your personal
          information. By using the Service, you agree to our [Privacy Policy],
          which outlines how your data is collected, used, and protected.
        </p>

        <h2>9. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to the
          Service at our discretion, without prior notice, for violations of
          these Terms or other reasons, including but not limited to:
        </p>
        <ul>
          <li>Misuse of the Service.</li>
          <li>Engaging in prohibited activities.</li>
          <li>Non-compliance with applicable laws or regulations.</li>
        </ul>

        <h2>10. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law:
          <br />
          - We are not liable for any indirect, incidental, or consequential
          damages arising from your use of the Service.
          <br />- Our total liability to you, for any reason, shall not exceed
          the amount you paid for using the Service in the three months
          preceding the claim.
        </p>

        <h2>11. Amendments</h2>
        <p>
          We reserve the right to update or modify these Terms at any time. Any
          changes will be effective immediately upon posting. Your continued use
          of the Service constitutes acceptance of the updated Terms.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of [Your Jurisdiction]. Any disputes shall be resolved exclusively in
          the courts of [Your Jurisdiction].
        </p>

        <h2>13. Contact Information</h2>
        <p>
          For questions or concerns regarding these Terms, please contact us at:
          <br />{" "}
          <a href="contact" target="_blank">
            Telegram
          </a>
        </p>
      </section>
    </div>
  );
}

export default TermsOfUse;
