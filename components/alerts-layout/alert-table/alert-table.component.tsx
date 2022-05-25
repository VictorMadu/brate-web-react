import map from "lodash/map";
import React from "react";
import { timestampToDateAndTime } from "../../../utils/timestamp-to-date";
import Table from "../../../core/table/three-col-table/three-col-table.component";
import Text from "../../../core/text";
import * as styles from "./alert-table.styles";
import { useAlertTable } from "./hook";

const AlertTable = () => {
  const {
    alerts,
    isAlertDataAvailableOrFetching,
    handleDeleteAlert,
  } = useAlertTable();

  if (!isAlertDataAvailableOrFetching)
    return <Text as="div" text="No data" margin="mx-auto" />;

  return (
    <Table>
      <Table.Head>
        <Table.HeadRow>
          <Table.HeadCol colNo={1}>
            <div>
              <Text as="p" text={"Currency Pair"} />
              <Text as="p" text={"Target Rate"} />
            </div>
          </Table.HeadCol>
          <Table.HeadCol colNo={2}>
            <div>
              <Text as="p" text={"Set"} />
              <Text as="p" text={"Triggered"} />
            </div>
          </Table.HeadCol>
          <Table.HeadCol colNo={3}>
            <Text text={"Action"} />
          </Table.HeadCol>
        </Table.HeadRow>
      </Table.Head>
      <Table.Body>
        {map(alerts, (alert) => (
          <Table.BodyRow key={alert.id}>
            <Table.BodyCol dataTitle="Currency Pair and Target" colNo={1}>
              <div>
                <Text as="p" text={alert.base + "/" + alert.quota} />
                <Text as="p" text={alert.target_rate} />
              </div>
            </Table.BodyCol>
            <Table.BodyCol dataTitle="Set and Triggered" colNo={2}>
              <div>
                <Text as="p" text={timestampToDateAndTime(alert.created_at)} />
                <Text
                  as="p"
                  text={
                    alert.triggered_at
                      ? timestampToDateAndTime(alert.triggered_at)
                      : "--"
                  }
                  font={alert.triggered_at == null ? "font-bold" : ""}
                />
              </div>
            </Table.BodyCol>
            <Table.BodyCol dataTitle="Action" colNo={3}>
              <button
                className={styles.delBtn()}
                onClick={() => handleDeleteAlert(alert.id)}
              >
                Delete
              </button>
            </Table.BodyCol>
          </Table.BodyRow>
        ))}
      </Table.Body>
    </Table>
  );
};

export default AlertTable;
