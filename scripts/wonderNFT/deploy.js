const hre = require("hardhat");

async function main() {
  const wonderNFT = await hre.ethers.deployContract("WonderNFT");

  console.log("Wonder NFT address:", await wonderNFT.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
