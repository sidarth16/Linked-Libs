// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
// require("@nomicfoundation/hardhat-ethers");


module.exports = buildModule("ReverseMathModule", (m) => {

  // Deploy library first
  const mathLib = m.library("Math", []);
  return { mathLib };
});
