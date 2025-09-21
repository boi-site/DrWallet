// Your WalletConnect Cloud Project ID
const projectId = "0a42f387122d69d01d7d8bbf50bbb4c4";

// Define only Ethereum mainnet (EVM chain)
const chains = [
  {
    chainId: 1,
    name: "Ethereum",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://cloudflare-eth.com"
  }
];

// Initialize modal
const web3Modal = new window.Web3Modal.StandaloneWeb3Modal({
  projectId,
  themeMode: "light",
  chains
});

// DOM elements
const connectBtn = document.getElementById("connectBtn");
const addressEl = document.getElementById("address");

// Connect wallet
connectBtn.addEventListener("click", async () => {
  try {
    const provider = await web3Modal.connectWallet();
    const accounts = await provider.request({ method: "eth_accounts" });
    if (accounts.length > 0) {
      addressEl.textContent = `Connected: ${accounts[0]}`;
    }
  } catch (err) {
    console.error("Connection failed:", err);
  }
});
