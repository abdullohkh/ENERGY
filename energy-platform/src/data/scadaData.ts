export function getSCADAData() {
  return {
    totalPower: (12 + Math.random() * 2).toFixed(2),
    gridLoad: Math.floor(70 + Math.random() * 20),
    renewable: Math.floor(25 + Math.random() * 20),
    aiAlerts: Math.floor(Math.random() * 5),

    substationsOnline: Math.floor(245 + Math.random() * 5),
    maintenance: Math.floor(Math.random() * 10),
    criticalFaults: Math.floor(Math.random() * 3),

    scadaStatus: "Connected",
    aiStatus: "Active",
    blockchainStatus: "Healthy",
  };
}