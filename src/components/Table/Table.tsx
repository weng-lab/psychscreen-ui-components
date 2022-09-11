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


export type CustomizedTableProps = MUITableProps & { tabledata: Array<Object>, rowsPerPage?: number[] }

const CustomizedTable:React.FC<CustomizedTableProps> = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(props.rowsPerPage && props.rowsPerPage[0] || 10);
  const handleChangePage = (_, newPage: number) => {
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
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              {Object.keys(props.tabledata[0]).map(t=>{
                  return <TableCell style={{textAlign:"center", fontWeight: "bold" ,border:"None"}}>{t}</TableCell>
              })}           
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row,i) => {
                return(
              <StyledTableRow key={i}>
                  {Object.values(row).map(v=>{
                      return <StyledTableCell> {v}</StyledTableCell>
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