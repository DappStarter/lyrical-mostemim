require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth remember unveil inner clock fog surface'; 
let testAccounts = [
"0xc53ebc59d3eaa60ced1d84405477de4798de6402011e4aa5491e51df9d446cb8",
"0x527f70a656567a35ef297188405e423f772963741dea5d504fc09d23d41d2601",
"0x1db2765eb18ef81ee57691a9e87de1b6ec2b4082ebbd8bfff1aa286e9de18258",
"0x86708c41d1f9f9985ac509952c2a16386808d444106982aa83708d05b3acaa5c",
"0xa66e8dd43641e1c6c6f6e96d5dcfc94031b43ad343f9ef4ff88ad0a4b7330009",
"0xcc398bda83742e953f325382d00896ca9dbc4d286f71ad6e3fcf8e12067135f7",
"0x90fdc6a4aa687887c394c6256b4b73713063c4df85e1f03c3bbc959f2b94a691",
"0x7b712f28da9797aea435b1bc8b704a800bd8ab63c831d66ebdd85a4adfc3c530",
"0xa30e0fddb8a925ffe3b04647439c8d2e1b9c8065aa3d77f5acb1dff8f5ec4497",
"0xcc2278b9a11f6da1e63f78dc144daca33e8451d107d6c489b7f075b3dd7951c7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
