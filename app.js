const { createAppKit } = window.AppKit;

const projectId = "0a42f387122d69d01d7d8bbf50bbb4c4"; // your real projectId

// Create AppKit client
const modal = createAppKit({
  projectId,
  chains: [
    { id: 1, name: "Ethereum" },
    { id: 137, name: "Polygon" },
    { id: 56, name: "Binance Smart Chain" },
    { id: 10, name: "Optimism" },
    { id: 42161, name: "Arbitrum" }
  ],
  themeMode: "dark"
});

// Open modal when button is clicked
document.getElementById("connectBtn").addEventListener("click", async () => {
  try {
    const session = await modal.open();
    console.log("Connected session:", session);

    if (session.accounts && session.accounts.length > 0) {
      const address = session.accounts[0].address;
      const display = document.createElement("p");
      display.textContent = "Connected address: " + address;
      document.body.appendChild(display);
    }
  } catch (err) {
    console.error("Connection error:", err);
  }
});
