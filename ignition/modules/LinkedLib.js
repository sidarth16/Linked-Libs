// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
// require("@nomicfoundation/hardhat-ethers");


module.exports = buildModule("LinkedLibModule", (m) => {

  // //Deploy library first
  const mathLib = m.contract("Math", []);
  // return { mathLib };

  const linkedLib = m.contract(
    "LinkedLib", [], 
    {
      libraries:{
        Math: mathLib,
      },
    },
  );
  return { linkedLib };


});

// module.exports = async () => {
//   // #------------ethers--------------------------------
//   const LinkedLib = await ethers.getContractFactory("LinkedLib", {
//     libraries: {
//       Math: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
//     },
//   });
//   const linkedLib = await LinkedLib.deploy();
//   await linkedLib.deployed();
// }





// const contractFactory = await this.env.ethers.getContractFactory("Example", {
//   libraries: {
//     Math: "0x8Eca88aA517E54e2AA591C11BE39C6Bced532D74",
//   },
// });