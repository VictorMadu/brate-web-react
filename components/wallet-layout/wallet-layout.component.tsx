import React from "react";
import Layout from "../layout";
import map from "lodash/map";
import range from "lodash/range";
import Table from "../../core/table/three-col-table";
import Text from "../../core/text";
import app, * as text from "../../language/en/app";
import FundModal from "./fund-modal";
import WithdrawalModal from "./withdrawal-modal";
import * as styles from "./wallet-layout.styles";
import TableHeadText from "./table-head-text";
import CurrencyText from "./currency-text";
import AmountAvailable from "./amount-available";
import ActionBtns from "./action-btns";
import OptionsSection from "./options-section";
import WalletModal from "./wallet-modal";
import { useWalletLayout } from "./hook";

const tradeText = app.trade;

const WalletLayout = () => {
  const { neededWallets } = useWalletLayout();

  return (
    <div className={styles.container()}>
      <OptionsSection />
      <Table>
        <Table.Head>
          <Table.HeadRow>
            <Table.HeadCol colNo={1}>
              <TableHeadText text={tradeText.currency} />
            </Table.HeadCol>

            <Table.HeadCol colNo={2}>
              <TableHeadText text={tradeText.available} />
            </Table.HeadCol>

            <Table.HeadCol colNo={3}>
              <TableHeadText text={tradeText.action} />
            </Table.HeadCol>
          </Table.HeadRow>
        </Table.Head>
        <Table.Body>
          {map(neededWallets, (walletInfo) => (
            <Table.BodyRow key={walletInfo.currency}>
              <Table.BodyCol dataTitle={tradeText.currency} colNo={1}>
                <CurrencyText walletInfo={walletInfo} />
              </Table.BodyCol>

              <Table.BodyCol dataTitle={tradeText.available} colNo={2}>
                <AmountAvailable walletInfo={walletInfo} />
              </Table.BodyCol>

              <Table.BodyCol dataTitle={tradeText.action} colNo={3}>
                <ActionBtns walletInfo={walletInfo} />
              </Table.BodyCol>
            </Table.BodyRow>
          ))}
        </Table.Body>
      </Table>
      <WalletModal modal="withdrawalModal" />
      <WalletModal modal="fundModal" />
      {/* <FundModal /> */}
      {/* <WithdrawalModal /> */}
    </div>
  );
};

export default WalletLayout;
