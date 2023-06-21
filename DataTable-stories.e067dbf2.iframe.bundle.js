"use strict";(self.webpackChunk_weng_lab_psychscreen_ui_components=self.webpackChunk_weng_lab_psychscreen_ui_components||[]).push([[216],{"./stories/DataTable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AddMoreColumnsOnSelect:()=>AddMoreColumnsOnSelect,Default:()=>Default,EmptyTable:()=>EmptyTable,FunctionalComponentColumn:()=>FunctionalComponentColumn,HeaderColored:()=>HeaderColored,HoverInfo:()=>HoverInfo,ManagedSearchState:()=>ManagedSearchState,NoHeader:()=>NoHeader,OnRowClick:()=>OnRowClick,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"DataTable",component:_src__WEBPACK_IMPORTED_MODULE_1__.wQ,tags:["autodocs"],argTypes:{},parameters:{controls:{expanded:!0}}},COLUMNS=[{header:"Index",value:row=>row.index},{header:"Text",value:row=>row.text},{header:"Color",value:row=>row.color,render:row=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{width:"100%",height:"100%",backgroundColor:row.color},children:" "})},{header:"Description",value:row=>row.description}],ROWS=[{index:0,text:"this is row 0",color:"#ff0000",description:"this is row 0"},{index:1,text:"this is row 1",color:"#dd0000",description:"this is row 1"},{index:2,text:"this is row 2",color:"#bb0000",description:"this is row 2"},{index:3,text:"this is row 3",color:"#990000",description:"this is row 3"},{index:4,text:"this is row 4",color:"#770000",description:"this is row 4"},{index:5,text:"this is row 5",color:"#550000",description:"this is row 5"},{index:6,text:"this is row 6",color:"#330000",description:"this is row 6"},{index:7,text:"this is row 7",color:"#110000",description:"this is row 7"}],Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.wQ,{...args});Template.displayName="Template";const Default=Template.bind({}),EmptyTable=Template.bind({}),NoHeader=Template.bind({}),AddMoreColumnsOnSelect=Template.bind({}),HoverInfo=Template.bind({}),FunctionalComponentColumn=Template.bind({}),OnRowClick=Template.bind({}),HeaderColored=Template.bind({});Default.args={rows:ROWS,columns:COLUMNS,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,hideHeader:!1},EmptyTable.args={rows:[],emptyText:"No Data to Display",columns:COLUMNS,itemsPerPage:4,tableTitle:"Table Title",searchable:!0},NoHeader.args={rows:ROWS,columns:COLUMNS,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,hideHeader:!0},AddMoreColumnsOnSelect.args={rows:ROWS,columns:COLUMNS,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,showMoreColumns:!0,noOfDefaultColumns:3},HoverInfo.args={rows:ROWS,columns:COLUMNS,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,titleHoverInfo:"Here is some more information about this table. Here is some more information about this table.Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. "},FunctionalComponentColumn.args={rows:ROWS,columns:COLUMNS,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,showMoreColumns:!0,noOfDefaultColumns:3},OnRowClick.args={rows:ROWS,columns:COLUMNS,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,onRowClick:(row,i)=>window.alert(`You clicked on:\nIndex: ${row.index.toString()}\nText: ${row.text}\nColor: ${row.color}\nDescription: ${row.description}`)},HeaderColored.args={rows:ROWS,columns:COLUMNS,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,headerColor:{backgroundColor:"#1976d2",textColor:"#ffffff"}};const ManagedSearchState=props=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["Search: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{onChange:e=>setValue(e.target.value)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.wQ,{rows:ROWS,columns:COLUMNS,itemsPerPage:4,tableTitle:"Table Title",showMoreColumns:!0,...props,noOfDefaultColumns:3,search:value})]})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <DataTable {...args} />",...Default.parameters?.docs?.source}}},EmptyTable.parameters={...EmptyTable.parameters,docs:{...EmptyTable.parameters?.docs,source:{originalSource:"args => <DataTable {...args} />",...EmptyTable.parameters?.docs?.source}}},NoHeader.parameters={...NoHeader.parameters,docs:{...NoHeader.parameters?.docs,source:{originalSource:"args => <DataTable {...args} />",...NoHeader.parameters?.docs?.source}}},AddMoreColumnsOnSelect.parameters={...AddMoreColumnsOnSelect.parameters,docs:{...AddMoreColumnsOnSelect.parameters?.docs,source:{originalSource:"args => <DataTable {...args} />",...AddMoreColumnsOnSelect.parameters?.docs?.source}}},HoverInfo.parameters={...HoverInfo.parameters,docs:{...HoverInfo.parameters?.docs,source:{originalSource:"args => <DataTable {...args} />",...HoverInfo.parameters?.docs?.source}}},FunctionalComponentColumn.parameters={...FunctionalComponentColumn.parameters,docs:{...FunctionalComponentColumn.parameters?.docs,source:{originalSource:"args => <DataTable {...args} />",...FunctionalComponentColumn.parameters?.docs?.source}}},OnRowClick.parameters={...OnRowClick.parameters,docs:{...OnRowClick.parameters?.docs,source:{originalSource:"args => <DataTable {...args} />",...OnRowClick.parameters?.docs?.source}}},HeaderColored.parameters={...HeaderColored.parameters,docs:{...HeaderColored.parameters?.docs,source:{originalSource:"args => <DataTable {...args} />",...HeaderColored.parameters?.docs?.source}}},ManagedSearchState.parameters={...ManagedSearchState.parameters,docs:{...ManagedSearchState.parameters?.docs,source:{originalSource:'(props?: Partial<DataTableProps<Row>>) => {\n  const [value, setValue] = useState("");\n  return <>\n      Search: <input onChange={e => setValue(e.target.value)} />\n      <DataTable rows={ROWS} columns={COLUMNS} itemsPerPage={4} tableTitle="Table Title" showMoreColumns={true} {...props} noOfDefaultColumns={3} search={value} />\n    </>;\n}',...ManagedSearchState.parameters?.docs?.source}}};const __namedExportsOrder=["Default","EmptyTable","NoHeader","AddMoreColumnsOnSelect","HoverInfo","FunctionalComponentColumn","OnRowClick","HeaderColored","ManagedSearchState"];try{ManagedSearchState.displayName="ManagedSearchState",ManagedSearchState.__docgenInfo={description:"",displayName:"ManagedSearchState",props:{columns:{defaultValue:null,description:"",name:"columns",required:!1,type:{name:"DataTableColumn<Row>[]"}},itemsPerPage:{defaultValue:null,description:"",name:"itemsPerPage",required:!1,type:{name:"number"}},hidePageMenu:{defaultValue:null,description:"",name:"hidePageMenu",required:!1,type:{name:"boolean"}},tableTitle:{defaultValue:null,description:"",name:"tableTitle",required:!1,type:{name:"string"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!1,type:{name:"boolean"}},searchable:{defaultValue:null,description:"",name:"searchable",required:!1,type:{name:"boolean"}},search:{defaultValue:null,description:"",name:"search",required:!1,type:{name:"string"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"Row[]"}},emptyText:{defaultValue:null,description:"",name:"emptyText",required:!1,type:{name:"string"}},onRowClick:{defaultValue:null,description:"",name:"onRowClick",required:!1,type:{name:"((row: Row, i: number) => void)"}},onRowMouseEnter:{defaultValue:null,description:"@param rowObject The object representing the row\n@param rowIndex The index of the row as it's currently displayed",name:"onRowMouseEnter",required:!1,type:{name:"((rowObject: {}, rowIndex: number) => void)"}},onRowMouseLeave:{defaultValue:null,description:"",name:"onRowMouseLeave",required:!1,type:{name:"(() => void)"}},onCellMouseEnter:{defaultValue:null,description:"@param cellValue The value of the cell\n@param cellRowIndex The index of the cell's row as it's currently displayed\n@param cellColIndex The index of the cell's column as it's currently displayed",name:"onCellMouseEnter",required:!1,type:{name:"((cellValue: Row, cellRowIndex: number, cellColIndex: number) => void)"}},onCellMouseLeave:{defaultValue:null,description:"",name:"onCellMouseLeave",required:!1,type:{name:"(() => void)"}},sortColumn:{defaultValue:null,description:"",name:"sortColumn",required:!1,type:{name:"number"}},sortDescending:{defaultValue:null,description:"",name:"sortDescending",required:!1,type:{name:"boolean"}},downloadFileName:{defaultValue:null,description:"",name:"downloadFileName",required:!1,type:{name:"string"}},noOfDefaultColumns:{defaultValue:null,description:"",name:"noOfDefaultColumns",required:!1,type:{name:"number"}},showMoreColumns:{defaultValue:null,description:"",name:"showMoreColumns",required:!1,type:{name:"boolean"}},defaultColumnsToShow:{defaultValue:null,description:"",name:"defaultColumnsToShow",required:!1,type:{name:"(string | Element)[]"}},page:{defaultValue:null,description:"",name:"page",required:!1,type:{name:"number"}},setPage:{defaultValue:null,description:"",name:"setPage",required:!1,type:{name:"((page: number) => void)"}},hideHeader:{defaultValue:null,description:"",name:"hideHeader",required:!1,type:{name:"boolean"}},rowLink:{defaultValue:null,description:"",name:"rowLink",required:!1,type:{name:"((row: Row, index: number) => string)"}},titleHoverInfo:{defaultValue:null,description:"",name:"titleHoverInfo",required:!1,type:{name:"string"}},headerColor:{defaultValue:null,description:"",name:"headerColor",required:!1,type:{name:'{ backgroundColor: RGB | RGBA | HEX; textColor: "inherit" | RGB | RGBA | HEX; }'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/DataTable.stories.tsx#ManagedSearchState"]={docgenInfo:ManagedSearchState.__docgenInfo,name:"ManagedSearchState",path:"stories/DataTable.stories.tsx#ManagedSearchState"})}catch(__react_docgen_typescript_loader_error){}}}]);