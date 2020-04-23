var Web3 = require("web3");
module.exports = {
  networks: {
    azure: {
      provider: new Web3.providers.HttpProvider(
        "https://bajjimember.blockchain.azure.com:3200/Pfm6AxWS6ZYmr-ohhhEqmW2j"
      ),
      network_id: "*",
      gas: 5000000,
      gasPrice: 0,
    },
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*",
      gas: 5000000,
    },
  },
};
