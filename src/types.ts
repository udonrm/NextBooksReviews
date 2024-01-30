export type ColumnConfig = {
  key: string;
  label: string;
};

export type IndexProps = {
  endPointUrl: string;
  object: string;
  columns: ColumnConfig[];
};
