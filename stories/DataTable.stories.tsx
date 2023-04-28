import React, { useState } from 'react';
import { DataTable, DataTableProps, DataTableColumn } from '../src';

export default {
  title: 'DataTable',
};

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

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = (props?: Partial<DataTableProps<Row>>) => {
  return (
      <DataTable
          rows={ROWS}
          columns={COLUMNS}
          itemsPerPage={4}
          tableTitle="Table Title"
          searchable
          {...props}
      />
  );
}

export const EmptyTable = (props?: Partial<DataTableProps<Row>>) => {
  return (
      <DataTable
          rows={[]}
          emptyText="No Data to Display"
          columns={COLUMNS}
          itemsPerPage={4}
          tableTitle="Table Title"
          searchable
          {...props}
      />
  );
}

export const NoHeader = (props?: Partial<DataTableProps<Row>>) => {
  return (
      <DataTable
          rows={ROWS}
          columns={COLUMNS}
          itemsPerPage={4}
          tableTitle="Table Title"
          searchable
          hideHeader
          {...props}
      />
  );
}

export const AddMoreColumnsOnSelect = (props?: Partial<DataTableProps<Row>>) => {
  return (
      <DataTable
          rows={ROWS}
          columns={COLUMNS}
          itemsPerPage={4}
          tableTitle="Table Title"
          searchable
          showMoreColumns={true}          
          {...props}
          noOfDefaultColumns={3}
      />
  );
}

export const HoverInfo = (props?: Partial<DataTableProps<Row>>) => {
  return (
      <DataTable
          rows={ROWS}
          columns={COLUMNS}
          itemsPerPage={4}
          tableTitle="Table Title"
          searchable
          {...props}
          titleHoverInfo="
          Here is some more information about this table. Here is some more information about this table. 
          Here is some more information about this table. Here is some more information about this table. 
          Here is some more information about this table. Here is some more information about this table. 
          Here is some more information about this table. Here is some more information about this table. 
          Here is some more information about this table. Here is some more information about this table. 
          Here is some more information about this table. Here is some more information about this table. 
          Here is some more information about this table. Here is some more information about this table. 
          Here is some more information about this table. Here is some more information about this table. 
          Here is some more information about this table. Here is some more information about this table. "
      />
  );
}

export const FunctionalComponentColumn = (props?: Partial<DataTableProps<Row>>) => {
  return (
      <DataTable
          rows={ROWS}
          columns={FCCOLUMNS}
          itemsPerPage={4}
          tableTitle="Table Title"
          searchable
          showMoreColumns={true}          
          {...props}
          noOfDefaultColumns={3}
      />
  );
}

/*
This functionality has been removed as of version 4.0 when pagination was 
changed from the PageMenu component to MUI pagination

export const ManagedPageState = (props?: Partial<DataTableProps<Row>>) => {
  const [page, setPage] = useState(0);
  return (
    <>
      <span>Page: {page}</span>
      <PageMenu selected={page} onPageSelect={setPage} length={2} />
      <DataTable
          rows={ROWS}
          columns={COLUMNS}
          itemsPerPage={4}
          tableTitle="title"
          searchable
          showMoreColumns={true}          
          {...props}
          noOfDefaultColumns={3}
          page={page}
          setPage={setPage}
      />
    </>
  );
}
*/

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

export const OnRowClick = (props?: Partial<DataTableProps<Row>>) => {
  return (
      <DataTable
          rows={ROWS}
          columns={COLUMNS}
          itemsPerPage={4}
          tableTitle="Table Title"
          searchable
          {...props}
          onRowClick={(row) => + window.alert(`You clicked on:\nIndex: ${row.index.toString()}\nText: ${row.text}\nColor: ${row.color}\nDescription: ${row.description}`)}
      />
  );
}

export const HeaderColored = (props?: Partial<DataTableProps<Row>>) => {
  return (
      <DataTable
          rows={ROWS}
          columns={COLUMNS}
          itemsPerPage={4}
          tableTitle="Table Title"
          searchable
          headerColor='rgb(100,100,100)'
          {...props}
      />
  );
}
