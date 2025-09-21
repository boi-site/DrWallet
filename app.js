// Use Web3Modal from the global window
const web3Modal = new window.Web3Modal({
  projectId: "0a42f387122d69d01d7d8bbf50bbb4c4", // your real project ID
  standaloneChains: [
    "eip155:1",     // Ethereum
    "eip155:137",   // Polygon
    "eip155:56",    // BSC
    "eip155:42161", // Arbitrum
    "eip155:10"     // Optimism
  ]
});

let sessionData = null;

// Connect
document.getElementById("connectBtn").addEventListener("click", async () => {
  try {
    sessionData = await web3Modal.openModal();

    if (sessionData?.namespaces?.eip155) {
      const accounts = sessionData.namespaces.eip155.accounts;
      if (accounts.length > 0) {
        const address = accounts[0].split(":")[2]; // get "0x..."
        document.getElementById("walletAddress").innerText = `Connected: ${address}`;
        document.getElementById("connectBtn").style.display = "none";
        document.getElementById("disconnectBtn").style.display = "inline-block";
      }
    }
  } catch (err) {
    console.error("Connection error:", err);
  }
});

// Disconnect
document.getElementById("disconnectBtn").addEventListener("click", () => {
  sessionData = null;
  document.getElementById("walletAddress").innerText = "";
  document.getElementById("connectBtn").style.display = "inline-block";
  document.getElementById("disconnectBtn").style.display = "none";
  console.log("Disconnected");
});
