import React from "react";
import * as styles from "./three-col-table.styles";

interface ThreeColTableProps {
  children: JSX.Element | JSX.Element[];
}

export const ThreeColTable = (props: ThreeColTableProps) => {
  return (
    <div className={styles.tableContainer()}>
      <table className={styles.table()}>{props.children}</table>
    </div>
  );
};

interface TableHeadContainerProps {
  children: JSX.Element | JSX.Element[];
}

const TableHeadContainer = ({ children }: TableHeadContainerProps) => {
  return <thead className={styles.head()}>{children}</thead>;
};

interface TableHeadRowProps {
  children: JSX.Element | JSX.Element[];
}

const TableHeadRow = ({ children }: TableHeadRowProps) => {
  return <tr className={styles.rowHead()}>{children}</tr>;
};

interface TableHeadColProps {
  colNo: 1 | 2 | 3;
  children: JSX.Element | JSX.Element[];
}

const getHeadColStyle = (colNo: 1 | 2 | 3) => {
  switch (colNo) {
    case 1:
      return styles.colHead1();
    case 2:
      return styles.colHead2();
    case 3:
      return styles.colHead3();
    default:
      break;
  }
};

const TableHeadCol = ({ children, colNo }: TableHeadColProps) => {
  return <th className={getHeadColStyle(colNo)}>{children}</th>;
};

interface TableBodyContainerProps {
  children: JSX.Element | JSX.Element[];
}

const TableBodyContainer = ({ children }: TableBodyContainerProps) => {
  return <tbody className={styles.body()}>{children}</tbody>;
};

interface TableBodyRowProps {
  children: JSX.Element | JSX.Element[];
  onClick?: () => any;
}

const TableBodyRow = ({ children, onClick }: TableBodyRowProps) => {
  return (
    <tr className={styles.row()} onClick={onClick}>
      {children}
    </tr>
  );
};

interface TableBodyColProps {
  colNo: 1 | 2 | 3;
  dataTitle: string;
  children: JSX.Element | JSX.Element[];
}

const getBodyColStyle = (colNo: 1 | 2 | 3) => {
  switch (colNo) {
    case 1:
      return styles.col1();
    case 2:
      return styles.col2();
    case 3:
      return styles.col3();
    default:
      break;
  }
};

const TableBodyCol = ({ children, colNo, dataTitle }: TableBodyColProps) => {
  return (
    <td className={getBodyColStyle(colNo)} data-title={dataTitle}>
      {children}
    </td>
  );
};

ThreeColTable.Head = TableHeadContainer;
ThreeColTable.HeadRow = TableHeadRow;
ThreeColTable.HeadCol = TableHeadCol;
ThreeColTable.Body = TableBodyContainer;
ThreeColTable.BodyRow = TableBodyRow;
ThreeColTable.BodyCol = TableBodyCol;

export default ThreeColTable;
