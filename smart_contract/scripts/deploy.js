const main = async () => {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = hre.ethers.parseEther("0.001");

  const Transactions = await hre.ethers.deployContract("Transactions", [unlockTime], {
    value: lockedAmount,
  });

  await transactions.waitForDeployment();

  console.log(
    `Transactions with ${ethers.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${transactions.target}`
  );
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();



// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
