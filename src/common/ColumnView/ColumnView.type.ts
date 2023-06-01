import { ReactElement } from "react";

export type ClickEvent = {
  level: number;
  id: number;
  row: any;
};

export type ColumnViewDataItem = {
  id: number;
  path: { id: number; label: string }[];
  [key: string]: any;
}

export type Render = { 
  row: any; 
  isActive: boolean; 
};

export type ColumnViewData = { [key: number]: ColumnViewDataItem[] };

export type ColumnViewProps = {
  onClick: ({ level, id, row }: ClickEvent) => void;
  data: ColumnViewData;
  render: ({ row, isActive }: Render) => ReactElement;
};
