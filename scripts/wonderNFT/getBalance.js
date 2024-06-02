const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;

async function main() {
  const WonderNFT = await hre.ethers.getContractFactory("WonderNFT");
  const wonderNFT = await WonderNFT.attach(CONTRACT_ADDRESS);

  const balance = await wonderNFT.balanceOf(ACCOUNT_ADDRESS);
  console.log("Balance: ", balance.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
