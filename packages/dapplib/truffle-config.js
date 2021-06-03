require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note six prosper harvest beach bubble giggle'; 
let testAccounts = [
"0xe2c2690842858f30b1c4c56c27b952dd83422be4345f4978b00c749f91d00a7b",
"0x13e9135688951df7ceb47b6116e492f1ebad25d584d0cc796ccd410db0259140",
"0xb8842a809d511fe8223e62b602d84e5936bdbef196c6f5a297a87c68aaef047d",
"0xb6dbe5747dee45daed732c78b43e72a325a22ae1f16644af28249c97e56ccf28",
"0x62008c47a63522eede2d679904ca910f3267ff489ae42617e4b1579664d3a48f",
"0xad4be3c1d25388ff828179a2c1a7cf05d2ccac339991ab67bde17fcfda50d814",
"0x86f7168f0b47783de04391dcf33b497a87ae8e816268680c02d56e892efe0e78",
"0x86ab268c309745d2ed692f3ebedde7e2d561e2a1a515b149eedf0d1eb39cdc49",
"0x17671c82db238c491172ce9eb5026ca1756193dd92e467cee130245ce374fac5",
"0x53d010507c779db83541f39463ec402859fd9f1aa006d5b20263dfd0800f95d7"
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
            version: '^0.8.0'
        }
    }
};

