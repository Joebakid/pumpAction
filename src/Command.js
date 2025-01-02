import React from "react";

function Command() {
  return (
    <div className="container">
      <header className="command-header-container">
        <div className="command-header">
          <h2>Commands</h2>

          <ul>
            <li>
              <strong>/wallet &lt;number&gt;</strong>: Creates the specified
              number of wallets for the user.
              <em>Example</em>: <code>/wallet 10</code> creates 10 wallets.
            </li>
            <li>
              <strong>/wallet </strong>: Creates one wallet
            </li>
            <li>
              <strong>/start</strong>: Starts the bot action.
            </li>
            <li>
              <strong>/buy</strong>: Initiates the buy action from Pump or
              Raydium.
            </li>
            <li>
              <strong>/balance &lt;number&gt;</strong>: Displays the wallet
              balance for the specified wallet number.
            </li>
            <li>
              <strong>/account</strong>: Displays a list of all wallets created
              by the user.
            </li>
            <li>
              <strong>/transfer</strong>: transfer from one wallet to another
            </li>
            <li>
              <strong>/transfer: Address1,Address2</strong>: transfer to
              multiple wallets
            </li>
            <li>
              <strong>/export</strong>: Export Private key
            </li>
            <li>
              <strong>/Menu</strong>: Go to menu
            </li>
            <li>
              <strong>/Delete</strong>: To delete Wallet.
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Command;
