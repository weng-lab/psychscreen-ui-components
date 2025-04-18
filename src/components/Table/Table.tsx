import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import { TableProps as MUITableProps } from '@mui/material/Table';
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from '@mui/material/TablePagination';

const StyledTableCell = styled(TableCell)(() => ({
  border: "None",
  paddingLeft: "16px",
  textAlign: "center",
  font: "Helvetica Neue"
}));

const StyledTableRow = styled(TableRow)(() => ({
  root: {height: 10},
  "&:nth-of-type(odd)": {
    backgroundColor:"#F5F5F5"
  }
}));


export type CustomizedTableProps = MUITableProps & {
    tabledata: Array<{ header: string, value: any, render?: any }[]>,
    rowsPerPage?: number[],
    onRowMouseOver?: (row: any, i: number) => void;
    onRowMouseOut?: () => void;
    onRowClick?: (row: any, i: number) => void;
};

const CustomizedTable: React.FC<CustomizedTableProps> = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(props.rowsPerPage && props.rowsPerPage[0] || 10);
  const handleChangePage = (_: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  let rows = props.tabledata;

  return (
    <>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead >
            <TableRow>
              {props.tabledata[0].map((t,k)=>{
                  return <TableCell key={t.header+k}  style={{textAlign:"center", fontWeight: "bold" ,border:"None"}}>{t.header}</TableCell>
              })}           
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row,i) => {
                return(
              <StyledTableRow
                onMouseOver={() => props.onRowMouseOver && props.onRowMouseOver(row, i)}
                onClick={() => props.onRowClick && props.onRowClick(row, i)}
                onMouseOut={props.onRowMouseOut}
                key={i}
              >
                  {row.map((v,j)=>{
                      return <StyledTableCell key={i+j+v.value}> { v.render ? v.render : v.value}</StyledTableCell>
                    })
                  }            
              </StyledTableRow>
            )})}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination style={{textAlign:"center", fontWeight: "bold" }}
        rowsPerPageOptions={props.rowsPerPage || [10]}
        component="div"
        count={props.tabledata.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

export default CustomizedTable;