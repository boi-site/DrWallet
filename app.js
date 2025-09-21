// WalletConnect modal (EVM networks only)
const { WalletConnectModal } = window.WalletConnectModal;

const projectId = "0a42f387122d69d01d7d8bbf50bbb4c4"; // your project ID

// EVM networks (Ethereum, Polygon, BSC, etc.)
const chains = [
  "eip155:1",     // Ethereum Mainnet
  "eip155:137",   // Polygon
  "eip155:56",    // Binance Smart Chain
  "eip155:10",    // Optimism
  "eip155:42161"  // Arbitrum
];

// Create modal instance
const modal = new WalletConnectModal({
  projectId,
  chains,
  themeMode: "dark"
});

// Connect button
document.getElementById("connectBtn").addEventListener("click", async () => {
  try {
    const session = await modal.openModal();

    // Get first connected account address
    const address = session.namespaces.eip155.accounts[0].split(":")[2];

    // Show on page
    const display = document.createElement("p");
    display.textContent = "Connected address: " + address;
    document.body.appendChild(display);

    console.log("Connected session:", session);
  } catch (err) {
    console.error("Connection error:", err);
  }
});
