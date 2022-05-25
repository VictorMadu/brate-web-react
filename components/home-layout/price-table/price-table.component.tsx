import React, { useEffect, useState } from "react";
import Table from "../../../core/table/three-col-table/three-col-table.component";
import Text from "../../../core/text";
import PriceContainer from "./price-container";
import map from "lodash/map";
import Pagination from "../../../core/pagination";
import * as styles from "./price-table.styles";
import StarBtn from "./star-btn";
import { useRates } from "./price-table.hook";
import { rateStateMgr } from "../../../use-case/rate/state-manager";
import { BaseStateManager } from "../../../use-case/_utils/state-manager/base-manager";
import { BatchDataFetchState } from "../../../use-case/_utils/pagination-data-manager";
import { RatesDataFetcher } from "../../../use-case/rate/actions/rates-data-fetcher";

// TODO: Break component and setRegisterRateChange on tablebody
export const PriceTable = () => {
  const [pairsInfo, createRowClickHandler, getPairText] = useRates();

  return (
    <>
      <div className={styles.paginationContainer()}>
        <Pagination
          stateMgr={rateStateMgr as BaseStateManager<BatchDataFetchState>}
          dataKey={"rates"}
          fetcher={new RatesDataFetcher()}
        />
      </div>

      <Table>
        <Table.Head>
          <Table.HeadRow>
            <Table.HeadCol colNo={1}>
              <Text text={"Currency Pair"} />
            </Table.HeadCol>
            <Table.HeadCol colNo={2}>
              <div>
                <Text as="span" text={"% Change"} />
                <Text as="span" text={"% Change"} />
              </div>
            </Table.HeadCol>
            <Table.HeadCol colNo={3}>
              <Text text={""} />
            </Table.HeadCol>
          </Table.HeadRow>
        </Table.Head>
        <Table.Body>
          {map(pairsInfo, (pairInfo, pairIndex) => (
            <Table.BodyRow
              key={pairInfo.pair}
              onClick={createRowClickHandler(pairIndex)}
            >
              <Table.BodyCol dataTitle="Currency Pair" colNo={1}>
                <Text text={getPairText(pairInfo.pair)} />
              </Table.BodyCol>
              <Table.BodyCol dataTitle="Price" colNo={2}>
                <PriceContainer
                  rate={+pairInfo.rate}
                  prev_rate={+pairInfo.prev_rate}
                />
              </Table.BodyCol>
              <Table.BodyCol dataTitle="" colNo={3}>
                <StarBtn pairIndex={pairIndex} />
              </Table.BodyCol>
            </Table.BodyRow>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default PriceTable;
