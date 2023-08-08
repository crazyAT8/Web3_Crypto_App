require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/iXCyOgpvWWHhkEzFCR-zIZwWTf_Nj2Rg',
      accounts: ['a1038374c347c9acedee8557b740c230eaf547929063c7e3af2f2c3a33cb897b']
    }
  }
};


// https://eth-sepolia.g.alchemy.com/v2/iXCyOgpvWWHhkEzFCR-zIZwWTf_Nj2Rg