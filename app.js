const projectId = "0a42f387122d69d01d7d8bbf50bbb4c4"; // your real projectId

// Setup WalletConnect EVM provider
const provider = window.WalletConnectProviderEthereumProvider.default({
  projectId,
  chains: [1, 137, 56, 10, 42161], // Ethereum, Polygon, BSC, Optimism, Arbitrum
  showQrModal: true
});

document.getElementById("connectBtn").addEventListener("click", async () => {
  try {
    await provider.enable(); // triggers WalletConnect modal
    const ethersProvider = new ethers.BrowserProvider(provider);

    const signer = await ethersProvider.getSigner();
    const address = await signer.getAddress();

    document.getElementById("address").textContent = "Connected: " + address;
    console.log("Connected address:", address);
  } catch (err) {
    console.error("Connection error:", err);
  }
});
