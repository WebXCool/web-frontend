
import { iplandErc20 } from "../../constants/contracts";
import BN from "bignumber.js";
import { config } from "../../config/env";

// import { ethers } from "ethers";
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

let web3Modal;

let provider;

const initialState = {
  web3: null,
  _web3: null,
  current_option: null,
  core_asset: "",
  gasPrice: "",
  isConnetWeb3Modal: false,
  cachePrices: {
    USDT: 1
  },
};
const getters = {
  web3: (state) => state.web3,
  current_option: (state) => state.current_option,
  core_asset: (state) => state.core_asset,
  gasPrice: (state) => state.gasPrice,
};
const actions = {
  setWeb3: ({ state }, web3) => {
    state.web3 = web3;
  },

  setCachePrices: ({ state }, params) => {
    state.cachePrices = params;
  },
  setGas: ({ state }, gasPrice) => {
    state.gasPrice = gasPrice;
  },
  getDaiContract: ({ state }, { abi, address }) => {
    if (state.web3)
      return new state.web3.eth.Contract(abi, address);
  },
  setCurrentOption: ({ state }, option) => {
    state.current_option = option;
  },
  callBalanceOf: async (
    { state, dispatch, rootGetters },
    { token_address, account_address, decimal }
  ) => {
    return new Promise(async (resolve, reject) => {
      const contract = await dispatch("getDaiContract", {
        abi: iplandErc20.abi,
        address: token_address,
      });
      await contract.methods
        .balanceOf(account_address)
        .call(
          { from: "0x0000000000000000000000000000000000000000" },
          (err, data) => {
            if (err) {
              _app.$g_alert(err.message);
              reject(err);
            } else {
              // console.log('callBalanceOf data',data);
              if (decimal) {
                const tokenbits = new BN(10).pow(decimal);
                data = new BN(data).div(tokenbits);
                data = data.toNumber();
              } else {
                data = state.web3.utils.fromWei(data);

              }
            }

            resolve(data);
          }
        );
    });
  },
  amountToDecimalasync: (
    { state, dispatch, rootGetters },
    { amount, tokenAddress }
  ) => {
    return new Promise(async (resolve, reject) => {
      const decimal = Number(
        await dispatch("callContract", {
          tokenAddress,
          method: "decimals",
        })
      );
      const tokenbits = new BN(10).pow(decimal);
      amount = new BN(amount).div(tokenbits);
      amount = amount.toString();
      resolve(amount);
    });
  },
  getTokenSymbol: async ({ state, dispatch, rootGetters }, tokenAddress) => {
    return new Promise(async (resolve, reject) => {
      const contract = await dispatch("getDaiContract", {
        abi: iplandErc20.abi,
        address: tokenAddress,
      });
      await contract.methods
        .symbol()
        .call(
          { from: "0x0000000000000000000000000000000000000000" },
          function (err, data) {
            if (err) {
              // _app.$g_alert(err.message);
              _app.$message.error(_app.$t("The token could not be found"));

              reject(err);
            }
            resolve(data);
          }
        );
    });
  },
  getOrderDetail: async ({ state, dispatch, rootGetters }, orderId) => {

    return new Promise((resolve, reject) => {
      state.marketContact.methods
        .getOrderInfo(orderId)
        .call({}, async (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
    });
  },


  callContract: async (
    { state, dispatch, rootGetters },
    { tokenAddress, method }
  ) => {
    return new Promise(async (resolve, reject) => {
      const contract = await dispatch("getDaiContract", {
        abi: iplandErc20.abi,
        address: tokenAddress,
      });

      await contract.methods[method]().call(
        { from: "0x0000000000000000000000000000000000000000" },
        function (err, data) {
          if (err) {
            _app.$g_alert(err.message);

            reject(err);
          }
          resolve(data);
        }
      );
    });
  },
  getIsApproved: (
    { state, dispatch, rootGetters },
    { tokenAddress, contractAddress }
  ) => {
    return new Promise(async (resolve, reject) => {
      const contract = await dispatch("getDaiContract", {
        abi: iplandErc20.abi,
        address: tokenAddress,
      });
      await contract.methods
        .allowance(rootGetters["account/getAccountName"], contractAddress)
        .call(
          { from: rootGetters["account/getAccountName"] },
          function (err, data) {
            if (err) {
              dispatch("global/setLoading", { status: false }, { root: true });
              _app.$g_alert(err.message);
              reject(err);
            }
            resolve(data);
          }
        );
    });
  },
  approve: (
    { state, dispatch, rootGetters },
    { tokenAddress, contractAddress }
  ) => {
    return new Promise(async (resolve, reject) => {
      const contract = await dispatch("getDaiContract", {
        abi: iplandErc20.abi,
        address: tokenAddress,
      });
      contract.methods
        .approve(contractAddress, ethers.constants.MaxUint256)
        .send(
          {
            from: rootGetters["account/getAccountName"],
            gasPrice: state.gasPrice,
          },
          function (err, data) {
            if (err) {
              dispatch("global/setLoading", { status: false }, { root: true });
              reject(err);
            }
            // resolve(data);
          }
        ).on('receipt', (receipt) => {
          // this.setLoading({status:false});
          console.log('approve receipt', receipt);
          resolve(receipt.transactionHash);
        }).on('error', (err) => {
          reject(err);
        })
    });
  },
  getApproveResult: (
    { state, dispatch, rootGetters },
    { tokenAddress, contractAddress }
  ) => {
    return new Promise(async (resolve, reject) => {
      const noApproved =
        (await dispatch("getIsApproved", {
          tokenAddress,
          contractAddress,
        })) == "0";
      console.log("noApproved", noApproved, tokenAddress, contractAddress);
      if (noApproved) {
        dispatch("approve", {
          tokenAddress,
          contractAddress,
        })
          .then((txHash) => {
            if (!txHash) {
              resolve(false);
              return;
            }
            resolve(true);
          })
          .catch((e) => {
            _app.$g_alert(e.message);
            resolve(false);
          });
      } else {
        resolve(true);
      }
    });
  },
  onConnect: async ({ state, dispatch }) => {
    state.web3 = null;
    state.isConnetWeb3Modal = true;
    console.log("Opening a dialog", web3Modal);
    try {
      provider = await web3Modal.connect();
    } catch (e) {
      console.log("Could not get a wallet connection", e);
      return;
    }

    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
      // this.fetchAccountData();
      dispatch("fetchAccountData");
    });

    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
      // this.fetchAccountData();
      dispatch("fetchAccountData");
    });

    // Subscribe to networkId change
    provider.on("networkChanged", (networkId) => {
      // this.fetchAccountData();
      dispatch("fetchAccountData");
    });

    dispatch("fetchAccountData");
  },
  fetchAccountData: async ({ state, dispatch }) => {
    let web3 = state.web3;
    if (!web3) {
      web3 = new Web3(state.isConnetWeb3Modal ? provider : new Web3.providers.HttpProvider(config.rpc_url));
      state.web3 = web3;
      window.web3 = web3;

      // this.setWeb3(web3);
    }
    // console.log('web3.eth',web3.eth);
    // Get connected chain id from Ethereum node
    const chainId = await web3.eth.getChainId();
    // Load chain information over an HTTP API
    const chainData = evmChains.getChain(chainId);
    //  console.log('chainData',chainData,'chainId',chainId);
    if (chainId != 97) {
      _app.$g_alert(_app.$t('You need to change Binance Smart Chain Testnet'));
    }
    state.core_asset = chainData.nativeCurrency.symbol;
    const accounts = await web3.eth.getAccounts();

    dispatch(
      "account/setAccount",
      { account_name: accounts[0] },
      { root: true }
    );

    let this_accounts = [];
    const rowResolvers = accounts.map(async (address) => {
      const balance = await web3.eth.getBalance(address);
      const ethBalance = web3.utils.fromWei(balance, "ether");
      console.log("ethBalance", ethBalance, balance);
      const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
      this_accounts.push({
        address,
        humanFriendlyBalance,
      });
    });

    await Promise.all(rowResolvers);
    dispatch("account/setAccountsData", this_accounts, { root: true });
  },
  initChain: ({ state, dispatch }) => {
    // console.log("Initializing example");
    // console.log("WalletConnectProvider is", WalletConnectProvider);
    // console.log("Fortmatic is", Fortmatic);
    // console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);
    let rpcUrl = config.rpc_url;
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          // Mikko's test key - don't copy as your mileage may vary
          infuraId: "4b814fe2be2d4da7b32016640ec991a6",
          rpc_url: rpcUrl,
          rpc: {
            56: rpcUrl,
          },
          rpcUrl,
        },
      },

      fortmatic: {
        package: Fortmatic,
        options: {
          // Mikko's TESTNET api key
          key: "pk_test_391E26A3B43A3350",
        },
      },
    };

    web3Modal = new Web3Modal({
      network: "binance",
      cacheProvider: false, // optional
      providerOptions, // required
      disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    });
    dispatch("fetchAccountData")
  },
};

const mutations = {};

export default {
  state: initialState,
  actions,
  mutations,
  getters,
  namespaced: true,
};
