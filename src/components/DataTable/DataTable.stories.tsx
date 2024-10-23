import React, { useEffect, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DataTable, DataTableColumn, DataTableProps } from '../..';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import { Close } from '@mui/icons-material';

const meta = {
  title: 'DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
  },
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof DataTable>;

type Row = {
  index: number;
  text: string;
  color: string;
  description: string;
};

export default meta;
type Story = StoryObj<DataTableProps<Row>>;

const CountComponent = (props: {info?: Row}) => {
  const [count, setCount] = useState(0)
  return <Typography onClick={() => {setCount(count + 1); if (props?.info?.index) console.log(props.info.index)}}>Click to increase count: {count}</Typography>
}

const FunctionalRenderCols: DataTableColumn<Row>[] = [
  {
    header: 'Functional Column',
    value: (row) => row.index,
    FunctionalRender: (row) => {
      const [count, setCount] = useState(0);
      
      return (
        <>
          <strong>Row {row.index}</strong>: {count}
          <br />
          <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </>
      );
    }
  },
  {
    header: 'Functional Column',
    value: (row) => row.index,
    render: (row) => {
      const [count, setCount] = useState(0);
      
      return (
        <>
          <strong>Row {row.index}</strong>: {count}
          <br />
          <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </>
      );
    }
  },
  {
    header: 'Functional Column',
    value: (row) => row.index,
    FunctionalRender: (row) => <CountComponent info={row} />
  },
  {
    header: 'Functional Column',
    value: (row) => row.index,
    render: (row) => <CountComponent info={row} />
  },
];

const COLUMNS: DataTableColumn<Row>[] = [
  {
    header: 'Index',
    value: (row) => row.index,
  },
  {
    header: 'Text',
    value: (row) => row.text,
  },
  {
    header: 'Color',
    value: (row) => row.color,
    render: (row: Row) => (
      <div
        style={{ width: '100%', height: '100%', backgroundColor: row.color }}
      >
        &nbsp;
      </div>
    ),
  },
  {
    header: 'Description',
    value: (row) => row.description,
  },
];

const COLUMNS2: DataTableColumn<Row>[] = [
  {
    header: 'Index',
    value: (row) => row.index,
    tooltip: 'This is the index column',
  },
  {
    header: 'Text',
    value: (row) => row.text,
  },
  {
    header: 'Color',
    value: (row) => row.color,
    render: (row: Row) => (
      <div
        style={{ width: '100%', height: '100%', backgroundColor: row.color }}
      >
        &nbsp;
      </div>
    ),
  },
  {
    header: 'Description',
    value: (row) => row.description,
    tooltip: 'This is the description column',
  },
];

const ROWS: {index: number, text: string, color: string, description: string}[] = [
  {
    index: 0,
    text: 'this_is_row_0',
    color: '#ff0000',
    description: 'this_is_row_0',
  },
  {
    index: 1,
    text: 'this is row 1',
    color: '#dd0000',
    description: 'this is row 1',
  },
  {
    index: 2,
    text: 'this is row 2',
    color: '#bb0000',
    description: 'this is row 2',
  },
  {
    index: 3,
    text: 'this is row 3',
    color: '#990000',
    description: 'this is row 3',
  },
  {
    index: 4,
    text: 'this is row 4',
    color: '#770000',
    description: 'this is row 4',
  },
  {
    index: 5,
    text: 'this is row 5',
    color: '#550000',
    description: 'this is row 5',
  },
  {
    index: 6,
    text: 'this is row 6',
    color: '#330000',
    description: 'this is row 6',
  },
  {
    index: 7,
    text: 'this is row 7',
    color: '#110000',
    description: 'this is row 7',
  },
];

export const Default: Story = {
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    hideHeader: false,
  }
}

export const EmptyTable: Story = {
  args: {
    rows: [],
    emptyText: 'No Data to Display',
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
  }
}

export const NoHeader: Story = {
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    hideHeader: true,
  }
}

export const AddMoreColumnsOnSelect: Story = {
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    showMoreColumns: true,
    noOfDefaultColumns: 2,
  }
}

export const HoverInfo: Story = {
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    titleHoverInfo:
      'Here is some more information about this table. Here is some more information about this table.' +
      'Here is some more information about this table. Here is some more information about this table. ' +
      'Here is some more information about this table. Here is some more information about this table. ' +
      'Here is some more information about this table. Here is some more information about this table. ' +
      'Here is some more information about this table. Here is some more information about this table. ' +
      'Here is some more information about this table. Here is some more information about this table. ',
  }
}

export const FunctionalRender: Story = {
  args: {
    rows: ROWS,
    columns: FunctionalRenderCols,
    tableTitle: 'Table Title',
    searchable: true,
    showMoreColumns: true,
    itemsPerPage: 5,
  }
}

export const OnRowClick: Story = {
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    onRowClick: (row) =>
      window.alert(
        `You clicked on:\nIndex: ${row.index.toString()}\nText: ${
          row.text
        }\nColor: ${row.color}\nDescription: ${row.description}`
      ),
  }
}

export const OnDisplayedRowsChange: Story = {
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
  },
  render: (args) => {
    const [page, setPage] = useState<number>()
    const [rows, setRows] = useState<Row[]>()

    const handleDisplayedRowsChange = (newPage: number, displayedRows: Row[]) => {
      setPage(newPage)
      setRows(displayedRows)
    }

    return (
      <div>
        <DataTable
          {...args}
          onDisplayedRowsChange={handleDisplayedRowsChange}
        />
        <Typography>Page: {page}</Typography>
        <Typography>Rows: </Typography>
        {rows?.map(row =>
          <Typography>{JSON.stringify(row)}</Typography>
        )}
      </div>
    )
  }
}

export const HeaderColored: Story = {
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    headerColor: { backgroundColor: '#1976d2', textColor: '#ffffff' },
  }
}

export const ItemsPerPage: Story = {
  args: {
    rows: ROWS,
    columns: COLUMNS,
    tableTitle: "Table Title"
  },
  render: (args) => 
    <Stack spacing={2}>
      <Typography>Default</Typography>
      <DataTable {...args} />
      <Typography>itemsPerPage = 5</Typography>
      <DataTable {...args} itemsPerPage={5} />
      <Typography>itemsPerPage = [3,5,10]</Typography>
      <DataTable {...args} itemsPerPage={[3,5,10]}/>
    </Stack>
}

export const ConstrainSize: Story = {
  args: {
  rows: ROWS,
  columns: COLUMNS,
  itemsPerPage: 8,
  tableTitle: 'Table Title',
  searchable: true,
  maxHeight: '300px',
}
}

export const DensePadding: Story = {
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    dense: true,
  }
}

export const RowHighlight1: Story = {
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    highlighted: {
      index: 6,
      text: 'this is row 6',
      color: '#330000',
      description: 'this is row 6',
    },
  }
}

export const RowHighlight2: Story = {
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    highlighted: [
      {
        index: 7,
        text: 'this is row 7',
        color: '#110000',
        description: 'this is row 7',
      },
      {
        index: 0,
        text: 'this is row 0',
        color: '#ff0000',
        description: 'this is row 0',
      },
      {
        index: 5,
        text: 'this is row 5',
        color: '#550000',
        description: 'this is row 5',
      },
    ],
  }
}

export const ColumnHeaderTooltip: Story = {
  args: {
    rows: ROWS,
    columns: COLUMNS2,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    hideHeader: false,
  }
}

export const ManagedSearchState: Story = {
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: "Table Title",
    showMoreColumns: true,
    noOfDefaultColumns: 3
  },
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <>
        Search: <input onChange={(e) => setValue(e.target.value)} />
        <DataTable
          search={value}
          {...args}
        />
      </>
    )
  }
}

export const ManagedPageState: Story = {
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: "Table Title",
    showMoreColumns: true,
    noOfDefaultColumns: 3
  },
  render: (args) => {
    const [page, setPage] = useState(0);
    return (
      <>
        <Button onClick={() => setPage(page - 1)}>{'<'}</Button>
        <Button onClick={() => setPage(page + 1)}>{'>'}</Button>
        <DataTable
          key={page}
          page={page}
          {...args}
        />
      </>
    )
  }
}

export const LotsOfCols: Story = { 
 args: {
  rows: ROWS,
  columns: COLUMNS.concat(COLUMNS),
  itemsPerPage: 10,
  tableTitle: "Lots of Columns",
  searchable: true,
 }
}

const headeRenderCOLUMNS = (setX: React.Dispatch<React.SetStateAction<boolean | null>>) => {
  return [
    {
      header: 'Index',
      value: (row: {index: number, text: string, color: string, description: string}) => row.index,
      tooltip: 'This is the Index column. It shows the index of the row.',
    },
    {
      header: 'Text',
      value: (row: {index: number, text: string, color: string, description: string}) => row.text,
    },
    {
      header: 'Color',
      value: (row: {index: number, text: string, color: string, description: string}) => row.color,
      render: (row: Row) => (
        <div
          style={{ width: '100%', height: '100%', backgroundColor: row.color }}
        >
          &nbsp;
        </div>
      ),
    },
    {
      header: 'Description',
      value: (row: {index: number, text: string, color: string, description: string}) => row.description,
      unsortable: true,
      tooltip: 'This is the Description column. It describes the row.',
      HeaderRender: () => {
        const [distanceChecked, setDistanceChecked] = useState(true);
        const [CTCF_ChIAPETChecked, setCTCF_ChIAPETChecked] = useState(false);
        const [RNAPII_ChIAPETChecked, setRNAPII_ChIAPETChecked] =
          useState(false);
        const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(() => {
          console.log('initialization performed');
          return null;
        });

        const open = Boolean(anchorEl);

        const handleClose = () => {
          console.log('menu closed, state of checkboxes pushed to main state');
          setAnchorEl(null);
        };

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
          console.log('New Anchor Set');
          setAnchorEl(event.currentTarget);
        };

        const handleCheckboxChange = (
          event: React.ChangeEvent<HTMLInputElement>,
          value: 0 | 1 | 2
        ) => {
          switch (value) {
            case 0:
              setDistanceChecked(event.target.checked);
              setX(event.target.checked);
              break;
            case 1:
              setCTCF_ChIAPETChecked(event.target.checked);
              break;
            case 2:
              setRNAPII_ChIAPETChecked(event.target.checked);
              break;
          }
        };

        return (
          <Box>
            <Stack
              direction="row"
              alignItems="flex-start"
              component="button"
              onClick={handleClick}
            >
              <Typography variant="body2">Linked Genes</Typography>
            </Stack>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <FormGroup>
                <MenuItem>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={distanceChecked}
                        onChange={(event) => handleCheckboxChange(event, 0)}
                      />
                    }
                    label={`Distance`}
                  />
                </MenuItem>
                <MenuItem>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={CTCF_ChIAPETChecked}
                        onChange={(event) => handleCheckboxChange(event, 1)}
                      />
                    }
                    label={`CTCF-ChIAPET`}
                  />
                </MenuItem>
                <MenuItem>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={RNAPII_ChIAPETChecked}
                        onChange={(event) => handleCheckboxChange(event, 2)}
                      />
                    }
                    label={`RNAPII-ChIAPET`}
                  />
                </MenuItem>
              </FormGroup>
            </Menu>
          </Box>
        );
      },
    },
  ];
};

export const HeaderRender: Story = {
  args: {
    rows: ROWS,
    itemsPerPage: 5,
    tableTitle: "Header Render Test",
    searchable: true
  },
  render: (args) => {
    const [x, setX] = React.useState<boolean | null>(null);
    useEffect(() => console.log(x));
    return (
      <DataTable
        {...args}
        columns={headeRenderCOLUMNS(setX)}
      />
    )
  }
}

export const TitleRender: Story = {
  args: {
    rows: ROWS,
    columns: COLUMNS,
    searchable: true
  },
  render: (args) => {
    return (
      <Stack spacing={2}>
        <Typography>Normal String Title</Typography>
        <DataTable
          {...args}
          tableTitle={"Test Title"}
        />
        <Typography>Custom Typography Title</Typography>
        <DataTable
          {...args}
          tableTitle={<Typography variant='body2' color='secondary'>Small title</Typography>}
        />
        <Typography>Component title with onClick</Typography>
        <DataTable
          {...args}
          tableTitle={<Stack direction={"row"} alignItems={"center"}><Typography>{"Click the button -->"}</Typography><IconButton onClick={() => window.alert("Clicked!")}><Close /></IconButton></Stack> }
        />
        <Typography>Function Component title using hooks</Typography>
        <DataTable
          {...args}
          tableTitle={<CountComponent />}
        />
      </Stack>
      
    )
  }
}