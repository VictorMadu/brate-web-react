import React from "react";
import Pagination from "../../../../core/pagination";
import { WalletDataFetcher } from "../../../../use-case/wallet/actions/wallets-data-fetcher";
import { walletStateMgr } from "../../../../use-case/wallet/state-manager";

const WalletPagination = () => {
  return (
    <Pagination
      stateMgr={walletStateMgr}
      dataKey={"wallets"}
      fetcher={new WalletDataFetcher()}
    />
  );
};

export default WalletPagination;
