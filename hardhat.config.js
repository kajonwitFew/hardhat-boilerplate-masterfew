require("@nomiclabs/hardhat-waffle");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const ALCHEMY_API_KEY = "4z3RiqgN5xpyMETVlS7dsR43GEkUAXAv";

const GOERLI_PRIVATE_KEY = "62ea4f21bdfa52ee9710a7ed02f1d7377aa428aa48df6da0d289fb3bda5ff631";


module.exports = {
  solidity: "0.7.3",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${GOERLI_PRIVATE_KEY}`]
    }
  }
};
