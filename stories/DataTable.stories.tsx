import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { DataTable, DataTableProps, DataTableColumn } from '../src';
import { Typography } from '@mui/material';

const meta: Meta<typeof DataTable> = {
  title: 'DataTable', 
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Row = {
  index: number;
  text: string;
  color: string;
  description: string;
};

const FCCOLUMNS: DataTableColumn<Row>[] = [{
  header: "Functional Column",
  value: row => row.index,
  functionalRender: () => {
    const [ index, setIndex ] = useState(0);
    return (
      <>
        <strong>Index</strong>: {index}<br />
        <button onClick={() => setIndex(index + 1)}>Increment Index</button>
      </>
    );
  }
}]

const COLUMNS: DataTableColumn<Row>[] = [{
    header: "Index",
    value: row => row.index
},{
    header: "Text",
    value: row => row.text
}, {
    header: "Color",
    value: row => row.color,
    render: (row: Row) => <div style={{ width: "100%", height: "100%", backgroundColor: row.color }}>&nbsp;</div>
},
{
  header: "Description",
  value: row => row.description
}];

const ROWS = [
    { index: 0, text: "this is row 0", color: "#ff0000", description: "this is row 0"},
    { index: 1, text: "this is row 1", color: "#dd0000", description: "this is row 1" },
    { index: 2, text: "this is row 2", color: "#bb0000", description: "this is row 2" },
    { index: 3, text: "this is row 3", color: "#990000", description: "this is row 3" },
    { index: 4, text: "this is row 4", color: "#770000", description: "this is row 4" },
    { index: 5, text: "this is row 5", color: "#550000", description: "this is row 5" },
    { index: 6, text: "this is row 6", color: "#330000", description: "this is row 6" },
    { index: 7, text: "this is row 7", color: "#110000", description: "this is row 7" }
];

const Template: Story<DataTableProps<any>> = args => (
  <DataTable 
   {...args}
  />
)

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})
export const EmptyTable = Template.bind({})
export const NoHeader = Template.bind({})
export const AddMoreColumnsOnSelect = Template.bind({})
export const HoverInfo = Template.bind({})
export const FunctionalComponentColumn = Template.bind({})
export const OnRowClick = Template.bind({})
export const HeaderColored = Template.bind({})
export const ConstrainSize = Template.bind({})
export const DensePadding = Template.bind({})
export const RowHighlight1 = Template.bind({})
export const RowHighlight2 = Template.bind({})
// Revisit this when there's a need/more time
// export const ManagedSearchState = Template.bind({})

Default.args = {
  rows: ROWS,
  columns: COLUMNS,
  itemsPerPage: 4,
  tableTitle: "Table Title",
  searchable: true,
  hideHeader: false
}

EmptyTable.args = {
  rows: [],
  emptyText: "No Data to Display",
  columns: COLUMNS,
  itemsPerPage: 4,
  tableTitle: "Table Title",
  searchable: true
}

NoHeader.args = {
  rows: ROWS,
  columns: COLUMNS,
  itemsPerPage: 4,
  tableTitle: "Table Title",
  searchable: true,
  hideHeader: true,
}

AddMoreColumnsOnSelect.args = {
  rows: ROWS,
  columns: COLUMNS,
  itemsPerPage: 4,
  tableTitle: "Table Title",
  searchable: true,
  showMoreColumns: true,        
  noOfDefaultColumns: 3
}

HoverInfo.args = {
  rows: ROWS,
  columns: COLUMNS,
  itemsPerPage: 4,
  tableTitle: "Table Title",
  searchable: true,
  titleHoverInfo: "Here is some more information about this table. Here is some more information about this table."
  + "Here is some more information about this table. Here is some more information about this table. "
  + "Here is some more information about this table. Here is some more information about this table. "
  + "Here is some more information about this table. Here is some more information about this table. "
  + "Here is some more information about this table. Here is some more information about this table. "
  + "Here is some more information about this table. Here is some more information about this table. "
}

FunctionalComponentColumn.args = {
  rows: ROWS,
  columns: COLUMNS,
  itemsPerPage: 4,
  tableTitle: "Table Title",
  searchable: true,
  showMoreColumns: true,      
  noOfDefaultColumns: 3,
}

OnRowClick.args = {
  rows: ROWS,
  columns: COLUMNS,
  itemsPerPage: 4,
  tableTitle: "Table Title",
  searchable: true,
  onRowClick: (row, i) => window.alert(`You clicked on:\nIndex: ${row.index.toString()}\nText: ${row.text}\nColor: ${row.color}\nDescription: ${row.description}`),
  // onRowMouseEnter: (row, i) => {console.log(row); console.log(i)},
  // onCellMouseEnter: (cellValue, rowIndex, colIndex) => {console.log(cellValue); console.log("cellRowIndex: " + rowIndex); console.log("colIndex: " + colIndex)}
  // onRowMouseLeave: () => console.log("moused out of row"),
  // onCellMouseLeave: () => console.log("moused out of cell")
}

HeaderColored.args = {
  rows: ROWS,
  columns: COLUMNS,
  itemsPerPage: 4,
  tableTitle: "Table Title",
  searchable: true,
  headerColor: {backgroundColor: '#1976d2', textColor: '#ffffff'}
}

ConstrainSize.args = {
  rows: ROWS,
  columns: COLUMNS,
  itemsPerPage: 4,
  tableTitle: "Table Title",
  searchable: true,
  maxHeight: '350px',
}

DensePadding.args = {
  rows: ROWS,
  columns: COLUMNS,
  itemsPerPage: 4,
  tableTitle: "Table Title",
  searchable: true,
  dense: true,
}

RowHighlight1.args = {
  rows: ROWS,
  columns: COLUMNS,
  itemsPerPage: 4,
  tableTitle: "Table Title",
  searchable: true,
  highlighted: { index: 6, text: "this is row 6", color: "#330000", description: "this is row 6" },
}

RowHighlight2.args = {
  rows: ROWS,
  columns: COLUMNS,
  itemsPerPage: 4,
  tableTitle: "Table Title",
  searchable: true,
  highlighted: [
    { index: 7, text: "this is row 7", color: "#110000", description: "this is row 7" },
    { index: 0, text: "this is row 0", color: "#ff0000", description: "this is row 0"}, 
    { index: 5, text: "this is row 5", color: "#550000", description: "this is row 5" }
  ],
}

export const ManagedSearchState = (props?: Partial<DataTableProps<Row>>) => {
  const [ value, setValue ] = useState("");
  return (
    <>
      Search: <input onChange={e => setValue(e.target.value)} />
      <DataTable
          rows={ROWS}
          columns={COLUMNS}
          itemsPerPage={4}
          tableTitle="Table Title"
          showMoreColumns={true}
          {...props}
          noOfDefaultColumns={3}
          search={value}
      />
    </>
  );
}
