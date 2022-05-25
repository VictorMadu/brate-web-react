import React from "react";
import map from "lodash/map";
import range from "lodash/range";
import * as text from "../../../language/en/app";
import ActionModal from "../action-modal";
import Table from "../../../core/table/three-col-table";
import Text from "../../../core/text";
import TradeModal from "../trade-modal";
import * as styles from "./sell-layout.styles";
import Pagination from "./pagination";
import { useSellLayout } from "./hook";
import PairNames from "./pair-names";
import Rate from "./rate";
import ActionBtns from "./action-btns";

// TODO: From the error returned from the server like user not having enough amount to sale, show it. We need error code (not http error code) from server to communicate to user
const SellLayout = () => {
  const { rates, handleAddBtnClick } = useSellLayout();
  return (
    <div className={styles.container()}>
      <div className={styles.settings()}>
        <div>
          <button className={styles.addBtn()} onClick={handleAddBtnClick}>
            {text.add}
          </button>
        </div>
        <Pagination />
      </div>
      <Table>
        <Table.Head>
          <Table.HeadRow>
            <Table.HeadCol colNo={1}>
              <div>
                <Text as="p" text={text.base} />
                <Text as="p" text={text.quota} />
              </div>
            </Table.HeadCol>
            <Table.HeadCol colNo={2}>
              <Text as="p" text={text.rate} />
            </Table.HeadCol>
            <Table.HeadCol colNo={3}>
              <Text text={text.action} />
            </Table.HeadCol>
          </Table.HeadRow>
        </Table.Head>
        <Table.Body>
          {/* TODO: Turn rates array to object for faster retrieval */}
          {map(rates, ({ pair, rate }) => (
            <Table.BodyRow key={pair}>
              <Table.BodyCol dataTitle={text.currency} colNo={1}>
                <PairNames pair={pair} />
              </Table.BodyCol>
              <Table.BodyCol dataTitle={text.rate} colNo={2}>
                <Rate rate={rate} />
              </Table.BodyCol>
              <Table.BodyCol dataTitle={text.action} colNo={3}>
                <ActionBtns pair={pair} />
              </Table.BodyCol>
            </Table.BodyRow>
          ))}
        </Table.Body>
      </Table>
      <TradeModal />
      {/* <ActionModal /> */}
    </div>
  );
};

export default SellLayout;
