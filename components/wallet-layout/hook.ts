import keys from "lodash/keys";
import { useEffect, useMemo } from "react";
import { useSubscribe, useSubscribeWithTransform } from "../../hooks";
import { CurrencyDataFetcher } from "../../use-case/currency/data-fetcher";
import { currencyStateMgr } from "../../use-case/currency/state-manager";
import { WalletDataFetcher } from "../../use-case/wallet/actions/wallets-data-fetcher";
import { walletStateMgr } from "../../use-case/wallet/state-manager";
import { FetchFacadeForReset } from "../../use-case/_utils/data-with-pagination-fetch-manager";

const fetcherFacade = new FetchFacadeForReset(
  new WalletDataFetcher(),
  walletStateMgr,
  "wallets"
);

export function useWalletLayout() {
  // TODO: Say you need the wallets data. If it  is not available the action will fetch it. We really need to read clean aritecture for a cleaner state and actions structure
  const wallets = useSubscribe(walletStateMgr, "wallets");
  const pageCount = useSubscribe(walletStateMgr, "pageCount");
  const neededWallets = useMemo(() => {
    return wallets.slice(0, pageCount);
  }, [wallets, pageCount]);

  const currencyLists = useSubscribe(currencyStateMgr, "list");

  useEffect(() => {
    if (keys(currencyLists).length > 0) return;
    new CurrencyDataFetcher().fetchCurrencyList();
  }, [currencyLists]);

  useEffect(() => {
    fetcherFacade.reset();
  }, []);

  return { neededWallets };
}
