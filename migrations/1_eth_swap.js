const EthSwap = artifacts.require("EthSwap");
const Token = artifacts.require("Token");

module.exports = async function (deployer) {
  await deployer.deploy(Token);
  await deployer.deploy(EthSwap);

  const token = await Token.deployed();
  const ethSwap = await EthSwap.deployed();

  // Transfer total supply to Eth Swap account
  const tokenTotalSupply = await token.totalSupply();

  await token.transfer(ethSwap.address, tokenTotalSupply);
};
