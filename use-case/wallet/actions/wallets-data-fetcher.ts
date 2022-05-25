import { getWalletData } from "../../../api/http";
import { HttpError } from "../../../utils/status";
import { authStateMgr } from "../../auth/state-manager";
import { DataServiceFetcher } from "../../_utils/data-with-pagination-fetch-manager";
import { WalletState } from "../state-manager";

type Result = [WalletState["wallets"], undefined] | [undefined, HttpError];

export class WalletDataFetcher
  implements DataServiceFetcher<WalletState, "wallets"> {
  async fetch(pageOffset: number, pageCount: number): Promise<Result> {
    return getWalletData({
      token: authStateMgr.getData("token"),
      pageOffset,
      pageCount,
    }).then(([data, err]) => [data?.wallet, err] as Result);
  }
}
