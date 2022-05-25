import React from "react";
import map from "lodash/map";
import range from "lodash/range";
import {
  faArrowDown,
  faHistory,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import app, * as text from "../../../language/en/app";
import * as styles from "./buy-layout.styles";
import Table from "../../../core/table/three-col-table";
import Text from "../../../core/text";
import { useBuyLayout } from "./hook";
import TraderNameAndPair from "./trader-name-and-pair";
import TraderAmountForSaleAndRate from "./amount-for-sale-and-rate";
import ActionBtns from "./action-btns";
import TradeModal from "./trade-modal";
import { openModal } from "../../../use-case/buy-trade/actions/modal-action";

const trade = app.trade;

const BuyLayout = () => {
  const { tradersInfo } = useBuyLayout();

  return (
    <div className={styles.container()}>
      <div className={styles.header()}>
        <div className={styles.currencyTradeSelectionContainer()}>
          {/* TODO: On search input focus and blur. Toggle hidden and show headerBtnsContainer */}
          {/* <div className={styles.headerBtnsContainer()}>
            <button className={styles.headerBtn()}>{trade.wallet}</button>
            <button className={styles.headerBtn()}>{trade.buy}</button>
          </div> */}
          <div className={styles.searchContainer()}>
            <input
              className={styles.searchInput()}
              type="text"
              value={""}
              onChange={() => {}}
              onFocus={() => console.log("Input has focus")}
              onBlur={() => console.log("Input has blur")}
            />
            <button className={styles.searchBtn()}>
              <FontAwesomeIcon icon={faSearch} size="sm" className={""} />
            </button>
          </div>
        </div>
        {/* <div className={styles.currencyListContainer()}>
          <div className={styles.currencyList()}>
            {map(range(0, 30), (id) => (
              <button key={id} className={styles.currency()}>
                NGN
              </button>
            ))}
          </div>
          <button className={styles.dropDownBtn()}>
            <FontAwesomeIcon icon={faArrowDown} size="sm" className={""} />
          </button>
        </div> */}
      </div>

      <Table>
        <Table.Head>
          <Table.HeadRow>
            <Table.HeadCol colNo={1}>
              <Text as="p" text={"Name"} font={"font-bold"} />
            </Table.HeadCol>
            <Table.HeadCol colNo={2}>
              <div>
                <Text as="p" text={"Rate"} font={"font-semibold"} />
                <Text text={"Available"} />
              </div>
            </Table.HeadCol>
            <Table.HeadCol colNo={3}>
              <Text text={trade.action} />
            </Table.HeadCol>
          </Table.HeadRow>
        </Table.Head>
        <Table.Body>
          {map(tradersInfo, (traderInfo) => (
            <Table.BodyRow key={traderInfo.seller_id + traderInfo.pair}>
              <Table.BodyCol dataTitle={text.currency} colNo={1}>
                <TraderNameAndPair traderInfo={traderInfo} />
              </Table.BodyCol>
              <Table.BodyCol dataTitle={text.rate} colNo={2}>
                <TraderAmountForSaleAndRate traderInfo={traderInfo} />
              </Table.BodyCol>
              <Table.BodyCol dataTitle={text.action} colNo={3}>
                <ActionBtns traderInfo={traderInfo} />
              </Table.BodyCol>
            </Table.BodyRow>
          ))}
        </Table.Body>
      </Table>
      <TradeModal />
    </div>
  );
};

export default BuyLayout;
