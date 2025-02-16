require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); 

module.exports = {
    solidity: "0.8.28",
    networks: {
        sepolia: {
            url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
            accounts: [process.env.WALLET_PRIVATE_KEY]
        }
    },
    etherscan: {
        apiKey: {
            sepolia: process.env.ETHERSCAN_API_KEY
        }
    }
};
