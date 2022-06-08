
const _env = 'prod';
const _domain = _env == 'prod' ? "https://webx.cool" : 'https://web3xmetaverse.com'
console.log('_domain', _domain)
const _domain_api = _domain + "/api/webx" + (_env == 'prod' ? '' : '-dev');
const _webx_api_url = _domain_api + '/v1/twitter/bsc' + (_env == 'prod' ? '' : 'test');

var _config = {
  env: _env,
  rpc_url: "https://data-seed-prebsc-1-s1.binance.org:8545",
  ex_data_api_url: "https://ipland.io/api",
  webx_down_url: 'https://webx.cool/api/webx/v1/twitter/bsctest/download',
  webx_api_url: _webx_api_url,
  gas_price: "20",
}
