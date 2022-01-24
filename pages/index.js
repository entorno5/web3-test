import { useCallback, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useWeb3React } from "@web3-react/core";
import { connector } from "../config/web3";
import { Fragment } from "react/cjs/react.production.min";

export default function Home() {
  const { activate, active, deactivate, account, error, chainId } =
    useWeb3React();

  const connect = useCallback(() => {
    activate(connector);
    localStorage.setItem("previouslyConnected", true);
  }, [activate]);

  useEffect(() => {
    if (localStorage.getItem("previouslyConnected") === true) connect();
  }, [connect]);

  const disconnect = () => {
    deactivate();
    localStorage.removeItem("previouslyConnected");
  };

  if (error) {
    return <p>ERROR! 🐱‍👤</p>;
  }

  return (
    <div className={styles.container}>
      <h1>Web3 Test</h1>
      {!active ? (
        <Fragment>
          <button onClick={connect}>Conectar Wallet</button>
        </Fragment>
      ) : (
        <Fragment>
          <button onClick={disconnect}>Desconectar Wallet</button>
          <p>
            You are connected to {chainId} network
            <br />
            Your account is: {account}
          </p>
        </Fragment>
      )}
    </div>
  );
}
