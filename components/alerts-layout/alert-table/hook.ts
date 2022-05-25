import { useRouter } from "next/router";
import { useMemo } from "react";
import { uuid } from "../../../api/interfaces";
import { useSubscribe, useSubscribeWithTransform } from "../../../hooks";
import { alertStateMgr } from "../../../use-case/alerts/state-manager";
import { authStateMgr } from "../../../use-case/auth/state-manager";
import { DataFetching } from "../../../utils/status";
import { deleteAlertData } from "../../../use-case/alerts/actions/delete-alert-data";

export function useAlertTable() {
  const token = useSubscribe(authStateMgr, "token");
  const pageCount = useSubscribe(alertStateMgr, "pageCount");
  const alerts = useSubscribe(alertStateMgr, "alerts");
  const isFetching = useSubscribeWithTransform(
    alertStateMgr,
    "dataFetching",
    isFetchingTransform
  );

  const isAlertDataAvailableOrFetching = alerts.length || isFetching;

  // TODO: Use memorization
  const neededAlerts = useMemo(() => {
    return alerts.slice(0, pageCount);
  }, [alerts, pageCount]);

  function handleDeleteAlert(id: uuid) {
    deleteAlertData({ token, id }, () => {});
  }

  return {
    alerts: neededAlerts,
    isAlertDataAvailableOrFetching,
    handleDeleteAlert,
  };
}

function isFetchingTransform(dataFetching: DataFetching | undefined) {
  return dataFetching === DataFetching.FETCHING;
}
