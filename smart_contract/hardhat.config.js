require("@nomicfoundation/hardhat-toolbox");

const INFURA_API_KEY = "55a3b8d6a8954f7a9748405f1bbbc90e";
const SEPOLIA_PRIVATE_KEY = "a1038374c347c9acedee8557b740c230eaf547929063c7e3af2f2c3a33cb897b"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};
