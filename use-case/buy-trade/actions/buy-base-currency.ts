import { handleFetchResult, tradeBlackCurrency } from "../../../api/http";
import { authStateMgr } from "../../auth/state-manager";
import { buyTradeStateMgr } from "../state-manager";

export function buyBaseCurrencyUsingQuota(cb: (isSuccess: boolean) => any) {
  const token = authStateMgr.getData("token");
  const { pair, inputValue, sellerId } = buyTradeStateMgr.getData("buyModal");

  const [base, quota] = pair!.split(" ");

  handleFetchResult(
    () =>
      tradeBlackCurrency({
        token,
        base,
        quota,
        amount: +inputValue,
        sellerId,
      }),
    () => {
      cb(true);
    },
    () => cb(false)
  );
}
