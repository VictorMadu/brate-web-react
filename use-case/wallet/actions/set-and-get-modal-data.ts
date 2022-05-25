import { Modal, walletStateMgr } from "../state-manager";

export class ModalDataSetter<M extends "withdrawalModal" | "fundModal"> {
  constructor(private modalType: M) {}

  setPropValue<K extends keyof Modal>(prop: K, value: Modal[K]) {
    const modalData = walletStateMgr.getData(this.modalType);
    const newModalData = { ...modalData, [prop]: value };
    walletStateMgr.setData(this.modalType, newModalData);
  }
}

export class ModalDataGetter<M extends "withdrawalModal" | "fundModal"> {
  constructor(private modalType: M) {}

  getPropValue<K extends keyof Modal>(prop: K): Modal[K] {
    const modalData = walletStateMgr.getData(this.modalType);
    return modalData[prop];
  }
}
