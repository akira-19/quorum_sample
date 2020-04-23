const Web3 = require("web3");
const provider = new Web3.providers.HttpProvider(
  "https://bajjimember.blockchain.azure.com:3200/Pfm6AxWS6ZYmr-ohhhEqmW2j"
);
const web3 = new Web3(provider);
const jsonInterface = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "setName",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
const tokenContract = new web3.eth.Contract(
  jsonInterface,
  "0x96CD4BbE8cD6ccF55a50845620D708F01C6Ff62e"
);
tokenContract.methods
  .name(1)
  .call()
  .then(console.log)
  .catch((error) => {
    console.log(error);
  });
