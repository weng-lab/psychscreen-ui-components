import React from "react"

export type DataTableColumn<T> = {
  header: string
  headerRender?: () => string | JSX.Element
  value: (row: T) => string | number
  search?: (row: T) => boolean
  unsearchable?: boolean
  render?: (row: T) => string | JSX.Element
  functionalRender?: React.FC<any>
  sort?: (a: T, b: T) => number
}

type RGB = `rgb(${number}, ${number}, ${number})` | `rgb(${number},${number},${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})` | `rgba(${number},${number},${number},${number})`;
type HEX = `#${string}` | `# ${string}`;

export type DataTableProps<T> = {
  columns: DataTableColumn<T>[]
  itemsPerPage?: number
  hidePageMenu?: boolean
  tableTitle?: string
  selectable?: boolean
  searchable?: boolean
  search?: string
  rows: T[]
  emptyText?: string
  onRowClick?: (row: T, i: number) => void
  sortColumn?: number
  sortDescending?: boolean
  downloadFileName?: string
  noOfDefaultColumns?: number
  showMoreColumns?: boolean
  defaultColumnsToShow?: (string | JSX.Element)[]
  page?: number
  setPage?: (page: number) => void
  hideHeader?: boolean
  rowLink?: (row: T, index: number) => string
  titleHoverInfo?: string,
  // headerColor?: "primary" | "secondary" | string
  headerColor?: {backgroundColor: RGB | RGBA | HEX , textColor: RGB | RGBA | HEX | 'inherit'};
  //Or should this be an array of length two, where both header color and text color can be defined?
}

export type DataTableState<T> = {
  page: number
  filter?: string
  sort: SortState
  columns: DataTableColumn<T>[]
  showAddColumnsModal: boolean
  mousedOver?: number
}

export type SortState = {
  asc: boolean
  column: number
}

export type SearchChangedAction = {
  type: "searchChanged"
  value: string
}

export type PageChangedAction = {
  type: "pageChanged"
  page: number
}

export type SortChangedAction = {
  type: "sortChanged"
  sortColumn: number
}

export type ModalChangedAction = {
  type: "modalChanged"
  showAddColumnsModal: boolean
}

export type ColumnsChangedAction<T> = {
  type: "columnsChanged"
  columns: DataTableColumn<T>[]
}

export type MousedOverAction = {
  type: "mousedOver"
  index?: number
}

export type DataTableAction<T> =
  | SearchChangedAction
  | PageChangedAction
  | SortChangedAction
  | ModalChangedAction
  | ColumnsChangedAction<T>
  | MousedOverAction
