import React from "react";
import { useSubscribeWithTransform } from "../../../hooks";
import { walletStateMgr } from "../../../use-case/wallet/state-manager";
import Modal from "../modal";
import Dropdown from "./dropdown";
import Footer from "./footer";
import Header from "./header";
import InputSection from "./input-container";
import { ModalType } from "./interface";

interface WalletModalProps {
  modal: ModalType;
}

const WalletModal = ({ modal }: WalletModalProps) => {
  const show = useSubscribeWithTransform(
    walletStateMgr,
    modal,
    (modal) => modal.show
  );

  if (!show) return <></>;

  return (
    <Modal>
      <Header modal={modal} />
      <div className="bg-neu-50 py-8 px-[5%] md:px-6">
        <Dropdown modal={modal} />
        <InputSection modal={modal} />
      </div>
      <Footer modal={modal} />
    </Modal>
  );
};

export default WalletModal;
