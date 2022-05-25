import { findIndex } from "lodash";
import { fundWallet, handleFetchResult } from "../../../api/http";
import { authStateMgr } from "../../auth/state-manager";
import { FetchFacadeForReset } from "../../_utils/data-with-pagination-fetch-manager";
import { WalletInfo, walletStateMgr } from "../state-manager";
import { ModalDataGetter } from "./set-and-get-modal-data";
import { WalletDataFetcher } from "./wallets-data-fetcher";

export class MoneyFundHandler {
  private dataGetter = new ModalDataGetter("fundModal");
  private token!: string | undefined;
  private currencySymbol!: string;
  private amountToFund!: number;
  private cb!: (isSuccess: boolean) => any;
  private walletInfos!: WalletInfo[];
  private fetcherFacade = new FetchFacadeForReset(
    new WalletDataFetcher(),
    walletStateMgr,
    "wallets"
  );

  fund(cb: (isSuccess: boolean) => any) {
    this.cb = cb;
    this.setUpServerReqData();
    this.performServerReqAndResHandling();
  }

  private setUpServerReqData() {
    this.token = authStateMgr.getData("token");
    this.currencySymbol = this.dataGetter.getPropValue("currencySym");
    this.amountToFund = this.dataGetter.getPropValue("editableInputValue");
  }

  private performServerReqAndResHandling() {
    handleFetchResult(
      () => this.sendServerReq(),
      () => this.handleSuccess(),
      () => this.handleFailure()
    );
  }

  private sendServerReq() {
    return fundWallet({
      token: this.token,
      currency: this.currencySymbol,
      amount: this.amountToFund,
    });
  }

  private handleSuccess() {
    this.cb(true);

    // TODO: Use ws to get new currency amount updates
    this.fetcherFacade.reset();
  }

  // TODO: Remove after commit
  // private findAndUpdateWalletInfo() {
  //   this.walletInfos = walletStateMgr.getData("wallets");
  //   const index = this.findWalletInfoIndex();

  //   if (this.indexExists(index)) {
  //     this.updateWalletInfoOf(index);
  //   } else {
  //     this.createWalletInfo();
  //   }
  // }

  // private findWalletInfoIndex() {
  //   return findIndex(
  //     this.walletInfos,
  //     (walletInfo) => walletInfo.currency === this.currencySymbol
  //   );
  // }

  // private indexExists(index: number) {
  //   return index > -1;
  // }

  // private updateWalletInfoOf(index: number) {
  //   const newWalletInfos = [...this.walletInfos];
  //   const { ...walletToUpdateInfo } = newWalletInfos[index];
  //   const amountToWithdrawFrom = walletToUpdateInfo.amount;

  //   walletToUpdateInfo.amount = amountToWithdrawFrom + this.amountToFund;
  //   newWalletInfos[index] = walletToUpdateInfo;

  //   this.setWalletsDataWith(newWalletInfos);
  // }

  // private setWalletsDataWith(newWalletInfos: WalletInfo[]) {
  //   walletStateMgr.setData("wallets", newWalletInfos);
  // }

  // private createWalletInfo() {
  //   const walletInfo: WalletInfo = {
  //     currency: this.currencySymbol,
  //     amount: this.amountToFund,
  //   };
  //   const newWalletInfos = this.getWalletInfosMergedWith(walletInfo);
  //   this.setWalletsDataWith(newWalletInfos);
  // }

  // private getWalletInfosMergedWith(newWalletInfo: WalletInfo) {
  //   const newWalletInfos = [...this.walletInfos];
  //   const newLastIndex = newWalletInfos.length;
  //   newWalletInfos[newLastIndex] = newWalletInfo;

  //   return newWalletInfos;
  // }

  private handleFailure() {
    this.cb(false);
  }
}
