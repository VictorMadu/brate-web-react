import { defaultModalData, Modal, walletStateMgr } from "../state-manager";

export function openModal<M extends "withdrawalModal" | "fundModal">(
  modalType: M,
  currencySym: string
) {
  const modalData: Modal = walletStateMgr.getData(modalType);
  const newModalData = { ...modalData, show: true, currencySym };
  walletStateMgr.setData(modalType, newModalData);
}

export function closeModal<M extends "withdrawalModal" | "fundModal">(
  modalType: M
) {
  walletStateMgr.setData(modalType, { ...defaultModalData });
}
