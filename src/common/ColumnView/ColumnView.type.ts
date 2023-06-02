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
  itemKey?: string;
  render: ({ row, isActive }: Render) => ReactElement;
};


export type Insert = {
  level: number;
  data: ColumnViewDataItem[];
}