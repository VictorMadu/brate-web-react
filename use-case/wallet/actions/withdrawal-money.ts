import { findIndex } from "lodash";
import { handleFetchResult, withdrawFromWallet } from "../../../api/http";
import { authStateMgr } from "../../auth/state-manager";
import { FetchFacadeForReset } from "../../_utils/data-with-pagination-fetch-manager";
import { WalletInfo, walletStateMgr } from "../state-manager";
import { ModalDataGetter } from "./set-and-get-modal-data";
import { WalletDataFetcher } from "./wallets-data-fetcher";

// TODO: This class looks similar to Fund Money Handler
export class MoneyWithdrawalHandler {
  private dataGetter = new ModalDataGetter("withdrawalModal");
  private token!: string | undefined;
  private currencySymbol!: string;
  private amountToWithdraw!: number;
  private cb!: (isSuccess: boolean) => any;
  private walletInfos!: WalletInfo[];
  private fetcherFacade = new FetchFacadeForReset(
    new WalletDataFetcher(),
    walletStateMgr,
    "wallets"
  );

  withdraw(cb: (isSuccess: boolean) => any) {
    this.cb = cb;
    this.setUpServerReqData();
    this.performServerReqAndResHandling();
  }

  private setUpServerReqData() {
    this.token = authStateMgr.getData("token");
    this.currencySymbol = this.dataGetter.getPropValue("currencySym");
    this.amountToWithdraw = this.dataGetter.getPropValue("editableInputValue");
  }

  private performServerReqAndResHandling() {
    handleFetchResult(
      () => this.sendServerReq(),
      () => this.handleSuccess(),
      () => this.handleFailure()
    );
  }

  private sendServerReq() {
    return withdrawFromWallet({
      token: this.token,
      currency: this.currencySymbol,
      amount: this.amountToWithdraw,
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

  //   walletToUpdateInfo.amount = amountToWithdrawFrom - this.amountToWithdraw;
  //   newWalletInfos[index] = walletToUpdateInfo;

  //   walletStateMgr.setData("wallets", newWalletInfos);
  // }

  private handleFailure() {
    this.cb(false);
  }
}
