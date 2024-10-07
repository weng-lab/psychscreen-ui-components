import { TableProps as MUITableProps } from '@mui/material/Table';
import * as React from "react";
export type CustomizedTableProps = MUITableProps & {
    tabledata: Array<{
        header: string;
        value: any;
        render?: any;
    }[]>;
    rowsPerPage?: number[];
    onRowMouseOver?: (row: any, i: number) => void;
    onRowMouseOut?: () => void;
    onRowClick?: (row: any, i: number) => void;
};
declare const CustomizedTable: React.FC<CustomizedTableProps>;
export default CustomizedTable;
