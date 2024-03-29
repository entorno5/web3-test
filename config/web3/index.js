import Web3 from "web3";
import { InjectedConnector } from "@web3-react/injected-connector";

const ETHEREUM_ID = 1;

export const connector = new InjectedConnector({
  supportedChainIds: [ETHEREUM_ID],
});

export const getLibrary = (provider) => {
  const library = new Web3(provider);
  return library;
};
