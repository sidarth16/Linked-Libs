// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
// require("@nomicfoundation/hardhat-ethers");


const LibraryModule = buildModule("LibraryModule", (m) => {
  // const safeMath = m.contractAt("Math", "0x8645151ee43dEE80301C2045A210e19c37f16a09");
  const safeMath = m.contractAt("Math", "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9");


  return { safeMath };
});

async function getAdd(m, linkedLib) {
  // Mock function to simulate an asynchronous API call
  const add = m.staticCall(linkedLib, "fooAdd", [5,2]);
  return add;
}

module.exports = buildModule("LinkedLibModule", (m) => {

  // const safeMath = m.contractAt("Math", "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512");
  const { safeMath } = m.useModule(LibraryModule);
  const linkedLib = m.contract(
    "LinkedLib", [], 
    {
      libraries:{
        Math: safeMath,
      },
    },
  );

  // const add = await getAdd(m, linkedLib);
  // console.log("fooAdd(5,2)", add);
  
  return { linkedLib };


});