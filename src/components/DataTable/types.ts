import React from "react"

export type DataTableColumn<T> = {
  header: string
  HeaderRender?: React.FC<any>
  value: (row: T) => string | number
  search?: (row: T) => boolean
  unsearchable?: boolean
  render?: (row: T) => string | JSX.Element
  FunctionalRender?: React.FC<any>
  sort?: (a: T, b: T) => number
  unsortable?: boolean
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
  sortColumn?: number
  sortDescending?: boolean
  downloadFileName?: string
  noOfDefaultColumns?: number
  showMoreColumns?: boolean
  defaultColumnsToShow?: (string | JSX.Element)[]
  page?: number
  hideHeader?: boolean
  titleHoverInfo?: string,
  headerColor?: {backgroundColor: RGB | RGBA | HEX , textColor: RGB | RGBA | HEX | 'inherit'};
  
  /**
   * Note: This currently does not account for the size of the title or pagination element,
   * sets max-height of the table header and body.
   */
  maxHeight?: number | string
  
  /**
   * Reduced the amount of padding on table cells to make the table more compact.
   */
  dense?: boolean

  /**
   * Highlights the row(s) matching the provided object(s). Use this in conjunction with 
   * onRowClick() and a state variable containing the current row(s) to highlight.
   * Importantly, currently this only supports highlighting rows with the same order
   * of key/value pairs. Matching but out-of-order row objects will not be highlighted.
   */
  highlighted?: {} | {}[]

  setPage?: (page: number) => void
  rowLink?: (row: T, index: number) => string
  onRowClick?: (row: T, i: number) => void

  /**
   * @param rowObject The object representing the row
   * @param rowIndex The index of the row as it's currently displayed
   */
  onRowMouseEnter?: (rowObject: T, rowIndex: number) => void
  onRowMouseLeave?: () => void

  /**
   * @param cellValue The value of the cell
   * @param cellRowIndex The index of the cell's row as it's currently displayed
   * @param cellColIndex The index of the cell's column as it's currently displayed
   */

  onCellMouseEnter?: (cellValue: T, cellRowIndex: number, cellColIndex: number) => void
  onCellMouseLeave?: () => void

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
