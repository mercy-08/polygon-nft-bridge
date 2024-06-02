const hre = require("hardhat");
require("dotenv").config();

const { CONTRACT_ADDRESS } = process.env;

async function main() {
  const WonderNFT = await hre.ethers.getContractFactory("WonderNFT");
  const wonderNFT = WonderNFT.attach(CONTRACT_ADDRESS);

  console.log(await wonderNFT.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
