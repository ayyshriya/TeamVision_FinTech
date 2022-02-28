//https://eth-ropsten.alchemyapi.io/v2/j1B-qaa0WpgIHjfsMNHk-chkJqst4592

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks : {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/j1B-qaa0WpgIHjfsMNHk-chkJqst4592',
      accounts :[ '6ce018430cb6a49c2298e4675b422d5b84ad2c6dc6a6926bff3d1cb609e2b82d' ]
    }
  }
}