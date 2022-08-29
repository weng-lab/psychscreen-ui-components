import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import { TableProps as MUITableProps } from '@mui/material/Table';
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";


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


export type CustomizedTableProps = MUITableProps & {tabledata: Array<Object>}

const CustomizedTable:React.FC<CustomizedTableProps> = (props) => {
  return (
    <TableContainer>
      <Table aria-label="customized table" style={{width: "max-content"}}>
        <TableHead >
          <TableRow>
            {Object.keys(props.tabledata[0]).map(t=>{
                return <TableCell style={{textAlign:"center", fontWeight: "bold" ,border:"None"}}>{t}</TableCell>
            })}           
          </TableRow>
        </TableHead>
        <TableBody>
          {props.tabledata.map((row,i) => {
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
  );
}

export default CustomizedTable;