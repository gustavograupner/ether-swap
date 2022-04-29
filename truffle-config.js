module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
  },
  contracts_directory: "./src/blockchain/contracts/",
  contracts_build_directory: "./src/blockchain/abis/",
  compilers: {
    solc: {
      optmizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "petersburg",
    },
  },
};
