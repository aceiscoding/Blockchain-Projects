require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/W2kVWhHl-Ofek-fCMvTLDx8CIoudWCXi',
      accounts:  [
        'f61446c9e7eeb3376d35749aa5f5494de5e10da9181c4dfa8698c05a914900cf',
      ],
    },
  },
};
