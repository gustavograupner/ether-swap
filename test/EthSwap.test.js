require("chai").use(require("chai-as-promised")).should();

const EthSwap = artifacts.require("EthSwap");
const Token = artifacts.require("Token");

contract("Testing contracts", (accounts) => {
  before(async () => {
    this.token = await Token.new();
    this.ethSwap = await EthSwap.new();
  });

  describe("Token deployment", async () => {
    it("Token has a name", async () => {
      const name = await this.token.name();

      assert.equal(name, "My Token");
    });
  });

  describe("EthSwap deployment", async () => {
    it("EthSwap has a name", async () => {
      const name = await this.ethSwap.name();

      assert.equal(name, "Eth Swap - Instant Exchange");
    });

    it("EthSwap received tokens", async () => {
      const tokenTotalSupply = await this.token.totalSupply();
      await this.token.transfer(this.ethSwap.address, tokenTotalSupply);
      const ethSwapBalanceOf = await this.token.balanceOf(this.ethSwap.address);

      assert.equal(ethSwapBalanceOf.toString(), tokenTotalSupply.toString());
    });
  });
});
