import React from "react";

export interface DataTableColumn<T> {
  tooltip?: React.ReactNode
  header: string
  /**
   * Use to render React.ReactNode in column header. Used instead of ```header``` if specified
   * 
   * @example
   * ```tsx
   * HeaderRender: () => <Typography>Header Here</Typography>
   * } 
   * ```
   * 
   */
  HeaderRender?: () => React.ReactNode;
  value: (row: T) => string | number
  search?: (row: T) => boolean
  unsearchable?: boolean
  /**
   * Use to render React.ReactNode for a column. Can be string | number | whatever else react can render
   * 
   * @example
   * ```tsx
   * (row: T) => {
   *  //You can use hooks here
   *  return (
   *    <CustomComponent>{row.whatever}</Typography>
   *  ) 
   * }
   * 
   * ```
   */
  render?: (row: T) => React.ReactNode
  /**
   * @deprecated use render instead.
   * @todo remove this prop when new component library is up
   */
  FunctionalRender?: ((row: T) => React.JSX.Element);
  sort?: (a: T, b: T) => number
  unsortable?: boolean
}

type RGB = `rgb(${number}, ${number}, ${number})` | `rgb(${number},${number},${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})` | `rgba(${number},${number},${number},${number})`;
type HEX = `#${string}` | `# ${string}`;

export interface DataTableProps<T> {
  columns: DataTableColumn<T>[]
  rows: T[]

  /**
   * Sets the number of items on each page.
   * If one number specified, the rows per page selection is hidden.
   * Specify an array to provide user-selectable options
   * 
   * @default 
   * [5, 10, 25, 100]
   * 
   */
  itemsPerPage?: number | number[]
  hidePageMenu?: boolean
  /**
   * Allows passing all of the things React can render.
   * 
   * @example
   * ```
   * "Title Here"
   * ```
   * or
   * ```jsx
   * <Typography onClick={handleClick}>Title Here</Typography>
   * ```
   * 
   * If passing a string will be wrapped as such:
   * ```jsx 
   * <Typography
   *  variant="h5"
   *  noWrap
   *  component="div"
   *  sx={{
   *    display: { xs: 'none', sm: 'block' },
   *    fontWeight: 'normal',
   *    color: `${props.headerColor ? props.headerColor.textColor : 'inherit'}`,
   *  }}
   * >
   *  {props.tableTitle}
   * </Typography>
   * ```
   */
  tableTitle?: React.ReactNode
  selectable?: boolean
  searchable?: boolean
  search?: string
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
  headerColor?: { backgroundColor: RGB | RGBA | HEX, textColor: RGB | RGBA | HEX | 'inherit' };

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
  highlighted?: T | T[]

  /**
   * Callback triggered whenever the displayed rows are changed. Will trigger on first load of initial rows.
   */
  onDisplayedRowsChange?: (newPage: number, displayedRows: T[]) => void

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

  onCellMouseEnter?: (cellValue: string | number, cellRowIndex: number, cellColIndex: number) => void

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
