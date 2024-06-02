const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;

async function main() {
  const WonderNFT = await hre.ethers.getContractFactory("WonderNFT");
  const wonderNFT = WonderNFT.attach(CONTRACT_ADDRESS);

  const mintTx = await wonderNFT.safeMint(5);
  await mintTx.wait();

  console.log(
    `${await wonderNFT.balanceOf(
      ACCOUNT_ADDRESS
    )} WonderNFTs Minted to ${ACCOUNT_ADDRESS}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
