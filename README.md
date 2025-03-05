# Bot Documentation

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`
Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page reloads when you make changes, and you may see lint errors in the console.

#### `npm test`
Launches the test runner in the interactive watch mode.

#### `npm run build`
Builds the app for production in the `build` folder. The build is minified, and the filenames include hashes.

#### `npm run eject`
Removes the single build dependency from your project and copies configuration files (Webpack, Babel, ESLint, etc.) for full control. **This action is irreversible.**

## Learn More

For more details, refer to the following:
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)

---

## Bot Commands

### Command List

The bot provides various commands to manage wallets and execute transactions:

- **`/wallet <number>`**: Creates the specified number of wallets.
  - *Example:* `/wallet 10` creates 10 wallets.
- **`/wallet`**: Creates a single wallet.
- **`/start`**: Starts the bot action.
- **`/buy`**: Initiates the buy action from Pump or Raydium.
- **`/balance <number>`**: Displays the wallet balance for the specified wallet number.
- **`/account`**: Displays a list of all wallets created by the user.
- **`/transfer`**: Transfers from one wallet to another.
- **`/transfer: Address1,Address2`**: Transfers to multiple wallets.
- **`/export`**: Exports the private key of a wallet.
- **`/menu`**: Opens the main menu.
- **`/delete`**: Deletes a wallet.

---

### Deployment

Refer to the [deployment guide](https://facebook.github.io/create-react-app/docs/deployment) for more information on hosting your React app.

### Troubleshooting

For troubleshooting `npm run build` failures, check out the [troubleshooting guide](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify).

