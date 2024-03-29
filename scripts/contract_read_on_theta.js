const Web3 = require('web3')
const web3 = new Web3('https://eth-rpc-api-testnet.thetatoken.org/rpc')

const ReplayTokenABI = require('../build/contracts/ReplayToken.json').abi;

const address = '0xFC5b4c76995B640730a149d22bD7074901082dB9'
const contract = new web3.eth.Contract(ReplayTokenABI, address)

contract.methods.totalSupply().call((err, result) => {
    console.log("totalSupply:", result, "RPT")
})

contract.methods.name().call((err, result) => {
    console.log("name:", result)
})

contract.methods.symbol().call((err, result) => {
    console.log("symbol:", result)
})

contract.methods.balanceOf('0x63B2dcaCf06e25cB7843d2b15146e8b7f2adabE3').call((err, result) => {
    console.log("balance of the bridge 0x63B2dcaCf06e25cB7843d2b15146e8b7f2adabE3:", result, "RPT")
})