import { useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { CurrencyDataFetcher } from "../../use-case/currency/data-fetcher";
import {
  StatePopulator,
  StateUpdaterError,
  StateUpdaterErrorCode,
} from "../../use-case/currency-detail/actions/state-populator";
import { showSection } from "./feature-section/constant";

const dataFetcher = new CurrencyDataFetcher();
const statePopulator = new StatePopulator();

export function useCurrencyDetail() {
  const [section, setSection] = useState<showSection>(
    showSection.CONVERT_SECTION
  );

  useStatePopulator();
  return { section, handleSectionChange: setSection };
}

function useStatePopulator() {
  const router = useRouter();

  useEffect(() => {
    try {
      statePopulator.subscribeToDepsChanges().populate();
    } catch (error) {
      if (error instanceof StateUpdaterError) {
        switch (error.code) {
          case StateUpdaterErrorCode.NO_PAIR_INFO:
            goToHomePage(router);
            break;

          case StateUpdaterErrorCode.NO_BASE_NAME:
          case StateUpdaterErrorCode.NO_QUOTA_NAME:
            fetchCurrencyList();
            break;

          default:
            break;
        }
      }
    }
    return () => {
      statePopulator.closeandCleanUpAllSubscribtion();
    };
  }, [router]);
}

function goToHomePage(router: NextRouter) {
  router.push("/");
}

function fetchCurrencyList() {
  dataFetcher.fetchCurrencyList();
}
