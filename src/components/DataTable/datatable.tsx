import React, {
  useCallback,
  useReducer,
  Reducer,
  useMemo,
  Fragment,
  useState,
  useEffect,
  useRef,
} from 'react';
// import * as os from "os"
import { genericSort } from '../utilities';
import { DataTableProps, DataTableState, DataTableAction } from './types';
import { reducer } from './reducer';

//MUI imports
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TablePagination from '@mui/material/TablePagination';
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import { styled, alpha } from '@mui/material/styles';
import { Stack } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

//Styling for Search component
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.75),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.95),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

//Styling for Search Icon
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

//Styling for Search Text Input
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

//Styling for "Add Columns" Modal
const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DataTable = <T extends object>(
  props: DataTableProps<T>
) => {

  const [page, setPage] = useState(props.page || 0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(() => {
    if (Array.isArray(props.itemsPerPage)) { return props.itemsPerPage[0] }
    else if (typeof props.itemsPerPage == "number") { return props.itemsPerPage }
    else return 5
  })

  const handleChangePage = (page: number) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSpawnEmptyCells = (noColumns: number): React.JSX.Element[] => {
    const cells = [];
    for (let i = 1; i < noColumns; i++) {
      cells.push(<TableCell key={i}></TableCell>);
    }
    return cells;
  }

  function highlightCheck(row: T): boolean {
    let found = false;
    if (Array.isArray(props.highlighted)) {
      props.highlighted.forEach((highlight) => {
        if (JSON.stringify(row) === JSON.stringify(highlight)) {
          found = true;
        }
      });
      if (found) return true;
      else return false;
    } else if (JSON.stringify(row) === JSON.stringify(props.highlighted)) {
      return true;
    } else return false;
  }

  const columnLimit = useMemo(
    () => props.noOfDefaultColumns || props.columns.length,
    [props.noOfDefaultColumns, props.columns]
  );

  const [state, dispatch] = useReducer<
    Reducer<DataTableState<T>, DataTableAction<T>>
  >(reducer, {
    sort: {
      column: props.sortColumn || 0,
      asc: !!props.sortDescending,
    },
    filter: '',
    page: 0,
    columns:
      props.columns.length <= columnLimit
        ? props.columns
        : props.defaultColumnsToShow
        ? props.columns.filter((c) =>
            props.defaultColumnsToShow?.includes(c.header)
          )
        : props.columns.slice(0, columnLimit),
    showAddColumnsModal: false,
  });

  const search = useCallback(
    (row: T, value: string): boolean => {
      /* look for any matching searchable column */
      for (const i in state.columns) {
        /* get column; look for a user-defined search function first */
        const column = state.columns[i];
        if (column.unsearchable) continue;
        if (column.search && column.search(row)) return true;

        /* fall back to searching the column value */
        const rvalue = column.value(row).toString();
        if (rvalue.toLowerCase().includes(value.toLowerCase())) return true;
      }
      /* no matching column for this row */
      return false;
    },
    [state.columns]
  );

  const sort = useCallback(
    (rows: T[]): T[] => {
      /* look for a user-defined sort function for this column or fall back
          to generic string/number sorting */
      const sortf =
        state.columns[state.sort.column].sort ||
        ((a, b) =>
          genericSort(
            state.columns[state.sort.column].value(a),
            state.columns[state.sort.column].value(b)
          ));
      const sortedRows = rows.sort(sortf);
      if (!state.sort.asc) sortedRows.reverse();

      return sortedRows;
    },
    [state.columns, state.sort]
  );

  const displayRows = useCallback(
    (sortedRows: T[], filterValue: string): T[] =>
      filterValue === ''
        ? [...sortedRows]
        : sortedRows.filter((row) => search(row, filterValue)),
    [search]
  );

  const displayedRows = useMemo(
    () => sort(displayRows(props.rows, state.filter || props.search || '')),
    [displayRows, sort, state.filter, props.rows, props.search]
  );

  const rowsOnCurrentPage = useMemo(() => {
    const newRowsOnPage = displayedRows.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
    props.onDisplayedRowsChange?.(page, newRowsOnPage)
    return newRowsOnPage
  }, [displayedRows, page, rowsPerPage, props.onDisplayedRowsChange])

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - props.rows.length) : 0;

  const download = useCallback(() => {
    const data =
      state.columns.map((col) => col.header).join('\t') +
      '\n' +
      displayedRows
        .map((row: T) =>
          state.columns.map((col) => col.value(row)).join('\t')
        )
        .join('\n') +
      '\n';
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('style', 'display: none');
    const blob = new Blob([data], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = props.downloadFileName || 'table.tsv';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }, [state.columns, displayedRows, props.downloadFileName]);


  //Refs used in tracking overflow
  const containerRef = useRef<HTMLDivElement>(null);
  const arrowRightRef = useRef<HTMLButtonElement>(null);
  const arrowLeftRef = useRef<HTMLButtonElement>(null);

  //Shows/hides scroll indicators based on refs
  const monitorOverflow = (
    containerRef: React.RefObject<HTMLDivElement>,
    arrowRightRef: React.RefObject<HTMLButtonElement>,
    arrowLeftRef: React.RefObject<HTMLButtonElement>
  ) => {
    if (containerRef.current && arrowRightRef.current && arrowLeftRef.current) {
      const isOverflowing =
        containerRef.current.scrollWidth > containerRef.current.clientWidth;
      const isOverflowingLeft = containerRef.current.scrollLeft > 0;
      const isOverflowingRight =
        containerRef.current.scrollLeft + 1 <
        containerRef.current.scrollWidth - containerRef.current.clientWidth;
      arrowRightRef.current.style.visibility =
        isOverflowing && isOverflowingRight ? 'visible' : 'hidden';
      arrowLeftRef.current.style.visibility =
        isOverflowing && isOverflowingLeft ? 'visible' : 'hidden';
    }
  };

  //Attaches scroll and resize listeners to scrollable container
  useEffect(() => {
    if (containerRef.current !== null) {
      containerRef.current.addEventListener('scroll', () =>
        monitorOverflow(containerRef, arrowRightRef, arrowLeftRef)
      );

      new ResizeObserver(() => {
        monitorOverflow(containerRef, arrowRightRef, arrowLeftRef);
      }).observe(containerRef.current);
    }
  }, [containerRef, arrowLeftRef, arrowRightRef]);

  return (
    (<Paper
      elevation={3}
      sx={{ '& .MuiToolbar-root': { pl: 2 }, position: 'relative' }}
    >
      <Toolbar
        sx={{
          backgroundColor: `${
            props.headerColor
              ? props.headerColor.backgroundColor
              : 'transparent'
          }`,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
        }}
      >
        <Stack direction="row" alignItems={"center"} flexGrow={1}>
          {(typeof props.tableTitle === "string" ?
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                display: { xs: 'none', sm: 'block' },
                fontWeight: 'normal',
                color: `${props.headerColor ? props.headerColor.textColor : 'inherit'}`,
              }}
            >
              {props.tableTitle}
            </Typography>
            :
            props.tableTitle)
          }
          {props.titleHoverInfo && (
          <Tooltip
            title={props.titleHoverInfo}
            color="primary"
            sx={{ ml: 1 }}
            placement="right-start"
          >
            <InfoIcon />
          </Tooltip>
        )}
        </Stack>
        {props.showMoreColumns &&
          props.columns.length > (props.noOfDefaultColumns || 5) && (
            <Button
              variant="outlined"
              size="small"
              color="primary"
              sx={{ textTransform: 'none' }}
              onClick={() =>
                dispatch({
                  type: 'modalChanged',
                  showAddColumnsModal: true,
                })
              }
            >
              <AddIcon fontSize="small" />
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
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => {
                dispatch({
                  type: 'searchChanged',
                  value: e.target.value,
                });
                setPage(0);
              }}
            />
          </Search>
        )}
        <IconButton onClick={download}>
          <DownloadIcon
            htmlColor={`${props.headerColor?.textColor || 'inherit'}`}
          />
        </IconButton>
      </Toolbar>
      <TableContainer
        ref={containerRef}
        sx={{ maxHeight: props.maxHeight ? props.maxHeight : 'none' }}
      >
        <Table
          stickyHeader
          aria-label="sticky table"
          padding={props.dense ? 'checkbox' : 'normal'}
        >
          {!props.hideHeader && (
            <TableHead>
              <TableRow>
                {state.columns.map((column, i) => (
                  //remove padding from right unless last column
                  (<TableCell
                    sx={i !== state.columns.length - 1 ? { pr: 0 } : {}}
                    key={`${column.header}${i}`}
                    onClick={() => {
                      if (!column.unsortable) {
                        dispatch({ type: 'sortChanged', sortColumn: i });
                      } 
                      setPage(0);
                    }}
                  >
                    <TableSortLabel
                      active={i === state.sort.column}
                      direction={state.sort.asc ? 'asc' : 'desc'}
                      hideSortIcon
                    >
                      {column.HeaderRender ? (
                          <column.HeaderRender />
                      ) : (
                        column.header
                      )}
                      {column.tooltip ? (
                        <Tooltip
                          title={column.tooltip}
                          color="primary"
                          sx={{ ml: 0.5 }}
                          placement="right-start"
                        >
                          <InfoOutlinedIcon fontSize='small'/>
                        </Tooltip>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>)
                ))}
              </TableRow>
            </TableHead>
          )}
          <TableBody>
            {props.rows.length === 0 ? (
              <TableRow>
                <TableCell>{props.emptyText || 'No data available.'}</TableCell>
                {/* Render needed number of empty cells to fill row */}
                {handleSpawnEmptyCells(props.columns.length)}
              </TableRow>
            ) : (
              <>
                {rowsOnCurrentPage
                .map((row, i) => (
                  <TableRow
                    // Check that there's a row to select, it's the right one, and either none have been highlighted or it's the correct one
                    selected={props.highlighted ? highlightCheck(row) : false}
                    hover
                    key={'row' + i}
                    id={"row" + i}
                    onClick={() =>
                      props.onRowClick &&
                      props.onRowClick(row, i + page * rowsPerPage)
                    }
                    sx={{ cursor: props.onRowClick ? 'pointer' : 'auto' }}
                    onMouseEnter={() =>
                      props.onRowMouseEnter &&
                      props.onRowMouseEnter(row, i + page * rowsPerPage)
                    }
                    onMouseLeave={() =>
                      props.onRowMouseLeave && 
                      props.onRowMouseLeave(row, i + page * rowsPerPage)
                    }
                  >
                    {state.columns.map((column, j) => {
                      return (
                        <TableCell
                          //remove padding from right unless last column
                          sx={j !== state.columns.length - 1 ? { pr: 0 } : {}}
                          key={column.header + 'Row' + i + 'Column' + j}
                          onMouseEnter={() =>
                            props.onCellMouseEnter &&
                            props.onCellMouseEnter(column.value(row), i, j)
                          }
                          onMouseLeave={() =>
                            props.onCellMouseLeave && 
                            props.onCellMouseLeave(column.value(row), i, j)
                          }
                        >
                          {column.FunctionalRender ?
                            <column.FunctionalRender {...row} />
                            : column.render ?
                              <column.render {...row} />
                              :
                              column.value(row)
                          }
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow
                  style={{
                      height: (document.getElementById('row0')?.offsetHeight ?? (props.dense ? 33 : 53)) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </>
            )}
          </TableBody>
        </Table>
        <IconButton
          ref={arrowLeftRef}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            background: 'rgba(0,0,0,0.15)',
            visibility: 'hidden',
          }}
          onClick={() => {
            if (containerRef.current) containerRef.current.scrollLeft = 0;
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          ref={arrowRightRef}
          sx={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            background: 'rgba(0,0,0,0.15)',
            visibility: 'hidden',
          }}
          onClick={() => {
            if (containerRef.current)
              containerRef.current.scrollLeft =
                containerRef.current.scrollWidth -
                containerRef.current.clientWidth;
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </TableContainer>
      {!props.hidePageMenu && (
        <Stack direction="column" useFlexGap justifyContent="space-between">
          <Typography
            pl={props.dense ? '4px' : 2}
            sx={{ mt: 'auto', mb: 'auto' }}
          >
            {displayedRows.length !== props.rows.length &&
              `Showing ${displayedRows.length} matching rows of ${props.rows.length} total.`}
          </Typography>
          <TablePagination
            rowsPerPageOptions={props.itemsPerPage ? Array.isArray(props.itemsPerPage) ? props.itemsPerPage : [props.itemsPerPage] : [5, 10, 25, 100]}
            component="div"
            count={displayedRows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(_, page) => handleChangePage(page)}
            onRowsPerPageChange={handleChangeRowsPerPage}
            showFirstButton={props.dense ? false : true}
            showLastButton={props.dense ? false : true}
            labelRowsPerPage={props.dense ? 'Rows:' : undefined}
            sx={
              props.dense
                ? {
                  '& .MuiTablePagination-toolbar': { pl: '6px' },
                  '& .css-h0cf5v-MuiInputBase-root-MuiTablePagination-select':
                    { mr: '6px', ml: '0px' },
                  '& .MuiTablePagination-actions': { ml: '4px !important' },
                }
                : undefined
            }
          />
        </Stack>
      )}
      {/* Add columns modal */}
      <Modal
        open={state.showAddColumnsModal}
        onClose={() =>
          dispatch({ type: 'modalChanged', showAddColumnsModal: false })
        }
      >
        <Box sx={boxStyle}>
          <Typography variant="h4">Add Columns</Typography>
          {(props.defaultColumnsToShow
            ? props.columns.filter(
                (c) => !props.defaultColumnsToShow?.includes(c.header)
              )
            : //Why is this "or 5" here? Kinda makes no sense?
              props.columns.slice(
                props.noOfDefaultColumns || 5,
                props.columns.length
              )
          ).map((col, i) => (
            <Fragment key={i}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={
                      state.columns.find((c) => c.header === col.header) !==
                      undefined
                    }
                    onChange={(event) => {
                      if (
                        event.target.checked &&
                        props.columns.find((c) => c.header === col.header)
                      )
                        dispatch({
                          type: 'columnsChanged',
                          columns: [...state.columns, col],
                        });
                      else
                        dispatch({
                          type: 'columnsChanged',
                          columns: state.columns.filter(
                            (u) => u.header !== col.header
                          ),
                        });
                    }}
                  />
                }
                label={col.header}
              />
              <br />
            </Fragment>
          ))}
          <Button
            onClick={() =>
              dispatch({ type: 'modalChanged', showAddColumnsModal: false })
            }
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </Paper>)
  );
};
export default DataTable;
