const { WalletConnectModal } = window.WalletConnectModal;

const projectId = "0a42f387122d69d01d7d8bbf50bbb4c4"; // your actual project ID

// Supported EVM chains
const chains = [
  "eip155:1",     // Ethereum
  "eip155:137",   // Polygon
  "eip155:56",    // Binance Smart Chain
  "eip155:10",    // Optimism
  "eip155:42161"  // Arbitrum
];

const modal = new WalletConnectModal({
  projectId,
  chains,
  themeMode: "dark"
});

let sessionData = null;

// Connect button
document.getElementById("connectBtn").addEventListener("click", async () => {
  try {
    sessionData = await modal.openModal();

    if (sessionData?.namespaces?.eip155) {
      const accounts = sessionData.namespaces.eip155.accounts;
      if (accounts.length > 0) {
        const address = accounts[0].split(":")[2]; // format: eip155:1:0x...
        document.getElementById("walletAddress").innerText = `Connected: ${address}`;
        document.getElementById("connectBtn").style.display = "none";
        document.getElementById("disconnectBtn").style.display = "inline-block";
      }
    }
  } catch (err) {
    console.error("Connection error:", err);
  }
});

// Disconnect button
document.getElementById("disconnectBtn").addEventListener("click", () => {
  sessionData = null;
  document.getElementById("walletAddress").innerText = "";
  document.getElementById("connectBtn").style.display = "inline-block";
  document.getElementById("disconnectBtn").style.display = "none";
  console.log("Disconnected");
});
