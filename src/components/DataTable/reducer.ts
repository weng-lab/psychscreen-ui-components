import { DataTableAction, DataTableState } from "./types"

export function reducer<T>(previousState: DataTableState<T>, action: DataTableAction<T>): DataTableState<T> {
  switch (action.type) {
    //This case has no dispatch event
    case "pageChanged":
      return {
        ...previousState,
        page: action.page,
      }
    case "searchChanged":
      return {
        ...previousState,
        page: 0,
        filter: action.value,
      }
    case "sortChanged":
      return {
        ...previousState,
        sort: {
          column: action.sortColumn,
          asc: action.sortColumn === previousState.sort.column ? !previousState.sort.asc : true,
        },
      }
    case "modalChanged":
      return {
        ...previousState,
        showAddColumnsModal: action.showAddColumnsModal,
      }
    case "columnsChanged":
      return {
        ...previousState,
        columns: action.columns,
      }
    //Bypassing this for now, not understood why it was implemented this way
    case "mousedOver":
      console.log("moused over")
      return {
        ...previousState,
        mousedOver: action.index,
      }
  }
}
