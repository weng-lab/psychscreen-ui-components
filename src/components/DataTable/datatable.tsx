import React, { useCallback, useReducer, Reducer, useMemo, Fragment } from "react"
import * as os from "os"
import { genericSort } from "../utilities"
import { DataTableProps, DataTableState, DataTableAction } from "./types"
import { reducer } from "./reducer"

//MUI imports
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableBody from "@mui/material/TableBody"
import TableFooter from "@mui/material/TableFooter"
import TablePagination from "@mui/material/TablePagination"
import DownloadIcon from "@mui/icons-material/Download"
import AddIcon from "@mui/icons-material/Add"
import InfoIcon from "@mui/icons-material/Info"
import SearchIcon from "@mui/icons-material/Search"
import InputBase from "@mui/material/InputBase"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import TableSortLabel from "@mui/material/TableSortLabel"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import Typography from "@mui/material/Typography"
import TableContainer from "@mui/material/TableContainer"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Toolbar from "@mui/material/Toolbar"
import Tooltip from "@mui/material/Tooltip"
import { styled, alpha } from "@mui/material/styles"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    //For accessibility
    contrastThreshold: 4.5,
  },
  typography: {
    fontFamily: "inherit",
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: "normal",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
         
      }
    }
  },
})

//Styling for Search component
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.75),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.95),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}))

//Styling for Search Icon
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

//Styling for Search Text Input
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}))

//Styling for "Add Columns" Modal
const boxStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

function DataTable<T>(props: DataTableProps<T>): React.ReactElement<DataTableProps<T>> {
  // Sets default rows to display at 5 if unspecified
  const itemsPerPage = props.itemsPerPage || 5
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(itemsPerPage)

  const handleChangePage = (_: any, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  function handleEmptyTable(noColumns: number) {
    let cells = []
    for (let i = 1; i < noColumns; i++) {
      cells.push(<TableCell key={i}></TableCell>)
    }
    return cells
  }

  const columnLimit = useMemo(() => props.noOfDefaultColumns || props.columns.length, [props.noOfDefaultColumns, props.columns])

  const [state, dispatch] = useReducer<Reducer<DataTableState<T>, DataTableAction<T>>>(reducer, {
    sort: {
      column: props.sortColumn || 0,
      asc: !!props.sortDescending,
    },
    filter: "",
    page: props.page || 0,
    columns:
      props.columns.length <= columnLimit
        ? props.columns
        : props.defaultColumnsToShow
        ? props.columns.filter((c) => props.defaultColumnsToShow?.includes(c.header))
        : props.columns.slice(0, columnLimit),
    showAddColumnsModal: false,
  })

  const search = useCallback(
    (row: T, value: string): boolean => {
      /* look for any matching searchable column */
      for (const i in state.columns) {
        /* get column; look for a user-defined search function first */
        const column = state.columns[i]
        if (column.unsearchable) continue
        if (column.search && column.search(row)) return true

        /* fall back to searching the column value */
        const rvalue = column.value(row).toString()
        if (rvalue.toLowerCase().includes(value.toLowerCase())) return true
      }
      /* no matching column for this row */
      return false
    },
    [state.columns]
  )

  const sort = useCallback(
    (rows: T[]): T[] => {
      /* look for a user-defined sort function for this column or fall back
          to generic string/number sorting */
      const sortf =
        state.columns[state.sort.column].sort ||
        ((a, b) => genericSort(state.columns[state.sort.column].value(a), state.columns[state.sort.column].value(b)))
      const sortedRows = rows.sort(sortf)
      if (!state.sort.asc) sortedRows.reverse()

      return sortedRows
    },
    [state.columns, state.sort]
  )

  const displayRows = useCallback(
    (sortedRows: T[], filterValue: string): T[] =>
      filterValue === "" ? [...sortedRows] : sortedRows.filter((row) => search(row, filterValue)),
    [search]
  )

  const displayedRows = useMemo(
    () => sort(displayRows(props.rows, state.filter || props.search || "")),
    [displayRows, sort, state.filter, props.rows, state.sort, props.search]
  )

  const download = useCallback(() => {
    const data =
      state.columns.map((col) => col.header).join("\t") +
      os.EOL +
      displayedRows.map((row: T) => state.columns.map((col) => col.value(row)).join("\t")).join(os.EOL) +
      os.EOL
    const a = document.createElement("a")
    document.body.appendChild(a)
    a.setAttribute("style", "display: none")
    const blob = new Blob([data], { type: "text/plain" })
    const url = window.URL.createObjectURL(blob)
    a.href = url
    a.download = props.downloadFileName || "table.tsv"
    a.click()
    window.URL.revokeObjectURL(url)
    a.remove()
  }, [state.columns, displayedRows])

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3}>
        <TableContainer
          // For alignment of the title. Padding scales in multiples of the theme's spacing scaling factor (8px default)
          sx={{ "& .MuiToolbar-root": { pl: 2 } }}
        >
          <Toolbar sx={{backgroundColor:`${props.headerColor ? props.headerColor : "transparent"}`}}>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }, fontWeight: "normal" }}
            >
              {props.tableTitle}
              {props.titleHoverInfo && (
                <Tooltip title={props.titleHoverInfo} color="primary" sx={{ ml: 1 }} placement="right-start">
                  <InfoIcon />
                </Tooltip>
              )}
            </Typography>
            {props.showMoreColumns && props.columns.length > (props.noOfDefaultColumns || 5) && (
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() =>
                  dispatch({
                    type: "modalChanged",
                    showAddColumnsModal: true,
                  })
                }
              >
                <AddIcon />
                Manage Columns
              </Button>
            )}
            {props.searchable && (
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  id="table-search"
                  placeholder="Filter Items"
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) =>
                    dispatch({
                      type: "searchChanged",
                      value: e.target.value,
                    })
                  }
                />
              </Search>
            )}
            <IconButton onClick={download}>
              <DownloadIcon />
            </IconButton>
          </Toolbar>
          <Table stickyHeader aria-label="sticky table">
            {!props.hideHeader && (
              <TableHead>
                <TableRow>
                  {state.columns.map((column, i) => (
                    <TableCell key={`${column.header}${i}`} onClick={() => dispatch({ type: "sortChanged", sortColumn: i })}>
                      <TableSortLabel active={i === state.sort.column} direction={state.sort.asc ? "asc" : "desc"}>
                        {column.headerRender ? column.headerRender() : column.header}
                        &nbsp;
                      </TableSortLabel>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
            )}
            <TableBody>
              {props.rows.length === 0 ? (
                <TableRow>
                  <TableCell>{props.emptyText || "No data available."}</TableCell>
                  {/* Render needed number of empty cells to fill row */}
                  {handleEmptyTable(props.columns.length)}
                </TableRow>
              ) : (
                displayedRows.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((row, i) => (
                  <TableRow
                    hover
                    key={"row" + i}
                    onClick={() => props.onRowClick && props.onRowClick(row, i + page * rowsPerPage)}
                    onMouseOver={() => {
                      dispatch({ type: "mousedOver", index: i })
                    }}
                    onMouseOut={() => dispatch({ type: "mousedOver", index: undefined })}
                  >
                    {state.columns.map((column, j) => {
                      return (
                        <TableCell key={column.header + "Row" + i + "Column" + j}>
                          {column.functionalRender ? (
                            <column.functionalRender {...row} />
                          ) : column.render ? (
                            column.render(row)
                          ) : (
                            column.value(row)
                          )}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                ))
              )}
            </TableBody>
            {!props.hidePageMenu && (
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={state.columns.length}>
                    {displayedRows.length !== props.rows.length &&
                      `Showing ${displayedRows.length} matching rows of ${props.rows.length} total.`}
                    <TablePagination
                      rowsPerPageOptions={[itemsPerPage, 10, 25, 100]}
                      component="div"
                      count={displayedRows.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                      showFirstButton
                      showLastButton
                    />
                  </TableCell>
                </TableRow>
              </TableFooter>
            )}
          </Table>
          {/* Add columns modal */}
          <Modal open={state.showAddColumnsModal} onClose={() => dispatch({ type: "modalChanged", showAddColumnsModal: false })}>
            <Box sx={boxStyle}>
              <Typography variant="h4">Add Columns</Typography>
              {(props.defaultColumnsToShow
                ? props.columns.filter((c) => !props.defaultColumnsToShow?.includes(c.header))
                : props.columns.slice(props.noOfDefaultColumns || 5, props.columns.length)
              ).map((col, i) => (
                <Fragment key={i}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.columns.find((c) => c.header === col.header) !== undefined}
                        onChange={(event) => {
                          if (event.target.checked && props.columns.find((c) => c.header === col.header))
                            dispatch({
                              type: "columnsChanged",
                              columns: [...state.columns, col],
                            })
                          else
                            dispatch({
                              type: "columnsChanged",
                              columns: state.columns.filter((u) => u.header !== col.header),
                            })
                        }}
                      />
                    }
                    label={col.header}
                  />
                  <br />
                </Fragment>
              ))}
              <Button onClick={() => dispatch({ type: "modalChanged", showAddColumnsModal: false })}>Cancel</Button>
            </Box>
          </Modal>
        </TableContainer>
      </Paper>
    </ThemeProvider>
  )
}
export default DataTable
