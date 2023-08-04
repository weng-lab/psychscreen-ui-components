import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { DataTable, DataTableProps, DataTableColumn } from '../src';
import { Button, Tooltip, Typography } from '@mui/material';

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
    { index: 0, text: "this is row 0", color: "#ff0000", description: "this is row 0" },
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

//Use key with the value of the managed "page" value to force datatable to update
export const ManagedPageState = (props?: Partial<DataTableProps<Row>>) => {
  const [ page, setPage ] = useState(0);
  return (
    <>
      <Button onClick={() => setPage(page - 1)}>{"<"}</Button>
      <Button onClick={() => setPage(page + 1)}>{">"}</Button>
      <DataTable
          key={page}
          rows={ROWS}
          columns={COLUMNS}
          itemsPerPage={4}
          tableTitle="Table Title"
          showMoreColumns={true}
          noOfDefaultColumns={3}
          page={page}
      />
    </>
  );
}

function assayHoverInfo(assays: {dnase: boolean, h3k27ac: boolean, h3k4me3, ctcf: boolean,  atac: boolean}){
  const dnase = assays.dnase
  const h3k27ac = assays.h3k27ac
  const h3k4me3 = assays.h3k4me3
  const ctcf = assays.ctcf
  const atac = assays.atac

  if (dnase && h3k27ac && h3k4me3 && ctcf && atac) {
    return "All assays available"
  }

  else if (!dnase && !h3k27ac && !h3k4me3 && !ctcf && !atac) {
    return "No assays available"
  }

  else return `Available:\n${dnase ? "DNase\n" : ""}${h3k27ac ? "H3K27ac\n" : ""}${h3k4me3 ? "H3K4me3\n" : ""}${ctcf ? "CTCF\n" : ""}${atac ? "ATAC\n" : ""}`
}

const denseRows = [
  {
    "summaryName": "aorta tissue female adult (59 years)",
    "biosampleType": "tissue",
    "queryValue": "aorta_tissue_female_adult_59_years_ENCDO856ZOJ",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": false,
      "h3k27ac": false,
      "ctcf": false
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "pulmonary artery endothelial cell female",
    "biosampleType": "primary cell",
    "queryValue": "pulmonary_artery_endothelial_cell_female_ENCDO332AAA",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": false,
      "h3k27ac": false,
      "ctcf": false
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "fibroblast of pulmonary artery",
    "biosampleType": "primary cell",
    "queryValue": "fibroblast_of_pulmonary_artery_ENCDO245AAA",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": true,
      "h3k27ac": false,
      "ctcf": true
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "aorta tissue female adult (30 years)",
    "biosampleType": "tissue",
    "queryValue": "aorta_tissue_female_adult_30_years_ENCDO424HVB",
    "assays": {
      "dnase": false,
      "atac": false,
      "h3k4me3": true,
      "h3k27ac": true,
      "ctcf": false
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "kidney capillary endothelial cell female embryo (113 days)",
    "biosampleType": "primary cell",
    "queryValue": "kidney_capillary_endothelial_cell_female_embryo_113_days_ENCDO987XTQ",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": false,
      "h3k27ac": false,
      "ctcf": false
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "tibial artery tissue male adult (37 years)",
    "biosampleType": "tissue",
    "queryValue": "tibial_artery_tissue_male_adult_37_years_ENCDO845WKR",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": true,
      "h3k27ac": true,
      "ctcf": true
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "endothelial cell of umbilical vein newborn",
    "biosampleType": "primary cell",
    "queryValue": "endothelial_cell_of_umbilical_vein_male_newborn_ENCDO342AAA",
    "assays": {
      "dnase": false,
      "atac": false,
      "h3k4me3": true,
      "h3k27ac": false,
      "ctcf": true
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "dermis microvascular lymphatic vessel endothelial cell male",
    "biosampleType": "primary cell",
    "queryValue": "dermis_microvascular_lymphatic_vessel_endothelial_cell_male_ENCDO243AAA",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": false,
      "h3k27ac": false,
      "ctcf": false
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "dermis microvascular lymphatic vessel endothelial cell female",
    "biosampleType": "primary cell",
    "queryValue": "dermis_microvascular_lymphatic_vessel_endothelial_cell_female_ENCDO242AAA",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": false,
      "h3k27ac": false,
      "ctcf": false
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "coronary artery tissue female adult (51 years)",
    "biosampleType": "tissue",
    "queryValue": "coronary_artery_tissue_female_adult_51_years_ENCDO271OUW",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": false,
      "h3k27ac": true,
      "ctcf": true
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "lung microvascular endothelial cell female",
    "biosampleType": "primary cell",
    "queryValue": "lung_microvascular_endothelial_cell_female_ENCDO238AAA",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": false,
      "h3k27ac": false,
      "ctcf": false
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "dermis blood vessel endothelial cell male newborn",
    "biosampleType": "primary cell",
    "queryValue": "dermis_blood_vessel_endothelial_cell_male_newborn_ENCDO244AAA",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": false,
      "h3k27ac": false,
      "ctcf": false
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "aorta tissue female adult (41 years)",
    "biosampleType": "tissue",
    "queryValue": "aorta_tissue_female_adult_41_years_ENCDO575WHY",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": false,
      "h3k27ac": false,
      "ctcf": false
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "fibroblast of the aortic adventitia female",
    "biosampleType": "primary cell",
    "queryValue": "fibroblast_of_the_aortic_adventitia_female_ENCDO175AAA",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": true,
      "h3k27ac": false,
      "ctcf": true
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "tibial artery tissue female adult (53 years)",
    "biosampleType": "tissue",
    "queryValue": "tibial_artery_tissue_female_adult_53_years_ENCDO793LXB",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": false,
      "h3k27ac": false,
      "ctcf": false
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "thoracic aorta tissue male adult (37 years)",
    "biosampleType": "tissue",
    "queryValue": "thoracic_aorta_tissue_male_adult_37_years_ENCDO845WKR",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": true,
      "h3k27ac": true,
      "ctcf": true
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "brain microvascular endothelial cell",
    "biosampleType": "primary cell",
    "queryValue": "brain_microvascular_endothelial_cell_ENCDO227AAA",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": true,
      "h3k27ac": true,
      "ctcf": true
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "aorta tissue male adult (34 years)",
    "biosampleType": "tissue",
    "queryValue": "aorta_tissue_male_adult_34_years_ENCDO058AAA",
    "assays": {
      "dnase": false,
      "atac": false,
      "h3k4me3": true,
      "h3k27ac": true,
      "ctcf": false
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "ascending aorta tissue female adult (51 years)",
    "biosampleType": "tissue",
    "queryValue": "ascending_aorta_tissue_female_adult_51_years_ENCDO271OUW",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": true,
      "h3k27ac": true,
      "ctcf": true
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "dermis blood vessel endothelial cell female adult",
    "biosampleType": "primary cell",
    "queryValue": "dermis_blood_vessel_endothelial_cell_female_adult_ENCDO240AAA",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": false,
      "h3k27ac": false,
      "ctcf": false
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "endothelial cell of umbilical vein newborn",
    "biosampleType": "primary cell",
    "queryValue": "endothelial_cell_of_umbilical_vein_male_newborn_ENCDO551FXN",
    "assays": {
      "dnase": false,
      "atac": false,
      "h3k4me3": true,
      "h3k27ac": true,
      "ctcf": true
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "dermis blood vessel endothelial cell male newborn",
    "biosampleType": "primary cell",
    "queryValue": "dermis_blood_vessel_endothelial_cell_male_newborn_ENCDO241AAA",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": false,
      "h3k27ac": false,
      "ctcf": false
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "lung microvascular endothelial cell female",
    "biosampleType": "primary cell",
    "queryValue": "lung_microvascular_endothelial_cell_female_ENCDO237AAA",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": false,
      "h3k27ac": false,
      "ctcf": false
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "endothelial cell of umbilical vein newborn",
    "biosampleType": "primary cell",
    "queryValue": "endothelial_cell_of_umbilical_vein_newborn_ENCDO000AAS",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": false,
      "h3k27ac": false,
      "ctcf": true
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "posterior vena cava tissue female adult (47 years)",
    "biosampleType": "tissue",
    "queryValue": "posterior_vena_cava_tissue_female_adult_47_years_ENCDO528BHB",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": false,
      "h3k27ac": false,
      "ctcf": false
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "ascending aorta tissue female adult (53 years)",
    "biosampleType": "tissue",
    "queryValue": "ascending_aorta_tissue_female_adult_53_years_ENCDO793LXB",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": true,
      "h3k27ac": true,
      "ctcf": true
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "tibial artery tissue male adult (54 years)",
    "biosampleType": "tissue",
    "queryValue": "tibial_artery_tissue_male_adult_54_years_ENCDO451RUA",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": true,
      "h3k27ac": true,
      "ctcf": false
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "dermis blood vessel endothelial cell female adult",
    "biosampleType": "primary cell",
    "queryValue": "dermis_blood_vessel_endothelial_cell_female_adult_ENCDO239AAA",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": false,
      "h3k27ac": false,
      "ctcf": false
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "coronary artery tissue female adult (53 years)",
    "biosampleType": "tissue",
    "queryValue": "coronary_artery_tissue_female_adult_53_years_ENCDO793LXB",
    "assays": {
      "dnase": true,
      "atac": false,
      "h3k4me3": true,
      "h3k27ac": true,
      "ctcf": true
    },
    "biosampleTissue": "blood vessel"
  },
  {
    "summaryName": "thoracic aorta tissue male adult (54 years)",
    "biosampleType": "tissue",
    "queryValue": "thoracic_aorta_tissue_male_adult_54_years_ENCDO451RUA",
    "assays": {
      "dnase": false,
      "atac": false,
      "h3k4me3": true,
      "h3k27ac": true,
      "ctcf": false
    },
    "biosampleTissue": "blood vessel"
  }
]

const denseCols = [{
  header: "Biosample",
  value: row => row.summaryName,
  render: row =>
    <Tooltip title={"Biosample Type: " + row.biosampleType} arrow>
      <Typography variant="body2">
        {row.summaryName}
      </Typography>
    </Tooltip>,
}, {
  header: "Assays",
  value: row => Object.keys(row.assays).filter((key) => row.assays[key] === true).length,
  render: row => {
    const fifth = 2 * 3.1416 * 10 / 5
    return (
      <Tooltip title={assayHoverInfo(row.assays)} arrow>
        <svg height="50" width="50" viewBox="0 0 50 50">
          <circle r="20.125" cx="25" cy="25" fill="#EEEEEE"
            stroke="black"
            strokeWidth="0.25" />
          <circle r="10" cx="25" cy="25" fill="transparent"
            stroke={`${row.assays.dnase ? "#06DA93" : "transparent"}`}
            strokeWidth="20"
            strokeDasharray={`${fifth} ${fifth * 4}`} />
          <circle r="10" cx="25" cy="25" fill="transparent"
            stroke={`${row.assays.h3k27ac ? "#FFCD00" : "transparent"}`}
            strokeWidth="20"
            strokeDasharray={`${fifth * 0} ${fifth} ${fifth} ${fifth * 3}`} />
          <circle r="10" cx="25" cy="25" fill="transparent"
            stroke={`${row.assays.h3k4me3 ? "#FF0000" : "transparent"}`}
            strokeWidth="20"
            strokeDasharray={`${fifth * 0} ${fifth * 2} ${fifth} ${fifth * 2}`} />
          <circle r="10" cx="25" cy="25" fill="transparent"
            stroke={`${row.assays.ctcf ? "#00B0F0" : "transparent"}`}
            strokeWidth="20"
            strokeDasharray={`${fifth * 0} ${fifth * 3} ${fifth} ${fifth * 1}`} />
          <circle r="10" cx="25" cy="25" fill="transparent"
            stroke={`${row.assays.atac ? "#02C7B9" : "transparent"}`}
            strokeWidth="20"
            strokeDasharray={`${fifth * 0} ${fifth * 4} ${fifth}`} />
        </svg>
      </Tooltip>
    )
  }
  }];

  export const DenseTest2 = (props?: Partial<DataTableProps<Row>>) => {
    return (
        <DataTable
            rows={denseRows}
            columns={denseCols}
            itemsPerPage={5}
            tableTitle="Dense Test"
            dense
            searchable
        />
    );
  }