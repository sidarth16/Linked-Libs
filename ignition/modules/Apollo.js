const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Apollo", (m) => {
  const apollo = m.contract("Rocket", args=["Saturn V"], options={libraries:{}});

  // m.call(apollo, "launch", []);

  return { apollo };
});