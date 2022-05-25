import { RatesDataFetcher } from "../../use-case/rate/actions/rates-data-fetcher";
import { rateStateMgr } from "../../use-case/rate/state-manager";
import { StateUpdater } from "../../use-case/_utils/pagination-data-manager";
import { FuncParams } from "ts-util-types";

const stateUpdater = new StateUpdater(
  new RatesDataFetcher(),
  rateStateMgr,
  "rates"
);

type FetchStrategyCreator = FuncParams<typeof stateUpdater["update"]>[0];

export function getNextData() {
  handleUpdate((fetchStrategyCreator) => fetchStrategyCreator.getNextData());
}

export function getPatchData() {
  handleUpdate((fetchStrategyCreator) => fetchStrategyCreator.getPatchData());
}

function handleUpdate(fetchStrategyCreator: FetchStrategyCreator) {
  return stateUpdater.update(fetchStrategyCreator);
}
