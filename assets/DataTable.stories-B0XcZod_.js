import{j as r}from"./assertThisInitialized-DaBLapIa.js";import{r as l,R as $e}from"./index-uubelm5h.js";import{j as Be,k as ze,s as Ve,u as Xe,l as Je,m as Ye,n as qe,o as Ke,p as h,d as I,e as A,q as Qe,r as Ze,t as er,M as F,F as W,v as E}from"./Graph-3zqRSWRH.js";import"./index-CfOt2XX2.js";function rr(e){return ze("MuiFormGroup",e)}Be("MuiFormGroup",["root","row","error"]);const sr=e=>{const{classes:s,row:t,error:n}=e;return Ke({root:["root",t&&"row",n&&"error"]},rr,s)},or=Ve("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:t}=e;return[s.root,t.row&&s.row]}})({display:"flex",flexDirection:"column",flexWrap:"wrap",variants:[{props:{row:!0},style:{flexDirection:"row"}}]}),tr=l.forwardRef(function(s,t){const n=Xe({props:s,name:"MuiFormGroup"}),{className:u,row:d=!1,...c}=n,m=Je(),g=Ye({props:n,muiFormControl:m,states:["error"]}),p={...n,row:d,error:g.error},L=sr(p);return r.jsx(or,{className:qe(L.root,u),ownerState:p,ref:t,...c})}),dr={title:"DataTable",component:h,tags:["autodocs"],argTypes:{},parameters:{controls:{expanded:!0},docs:{description:{component:"@todo These stories should really be cleaned up, especially dense and headerRender"}}}},ar=[{header:"Functional Column",value:e=>e.index,FunctionalRender:()=>{const[e,s]=l.useState(0);return r.jsxs(r.Fragment,{children:[r.jsx("strong",{children:"Index"}),": ",e,r.jsx("br",{}),r.jsx("button",{onClick:()=>s(e+1),children:"Increment Index"})]})}}],a=[{header:"Index",value:e=>e.index},{header:"Text",value:e=>e.text},{header:"Color",value:e=>e.color,render:e=>r.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:e.color},children:" "})},{header:"Description",value:e=>e.description}],nr=[{header:"Index",value:e=>e.index,tooltip:"This is the index column"},{header:"Text",value:e=>e.text},{header:"Color",value:e=>e.color,render:e=>r.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:e.color},children:" "})},{header:"Description",value:e=>e.description,tooltip:"This is the description column"}],o=[{index:0,text:"this_is_row_0",color:"#ff0000",description:"this_is_row_0"},{index:1,text:"this is row 1",color:"#dd0000",description:"this is row 1"},{index:2,text:"this is row 2",color:"#bb0000",description:"this is row 2"},{index:3,text:"this is row 3",color:"#990000",description:"this is row 3"},{index:4,text:"this is row 4",color:"#770000",description:"this is row 4"},{index:5,text:"this is row 5",color:"#550000",description:"this is row 5"},{index:6,text:"this is row 6",color:"#330000",description:"this is row 6"},{index:7,text:"this is row 7",color:"#110000",description:"this is row 7"}],b={args:{rows:o,columns:a,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,hideHeader:!1}},T={args:{rows:[],emptyText:"No Data to Display",columns:a,itemsPerPage:4,tableTitle:"Table Title",searchable:!0}},w={args:{rows:o,columns:a,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,hideHeader:!0}},C={args:{rows:o,columns:a,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,showMoreColumns:!0,noOfDefaultColumns:2}},x={args:{rows:o,columns:a,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,titleHoverInfo:"Here is some more information about this table. Here is some more information about this table.Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. "}},f={args:{rows:o,columns:ar,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,showMoreColumns:!0,noOfDefaultColumns:3}},P={args:{rows:o,columns:a,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,onRowClick:e=>window.alert(`You clicked on:
Index: ${e.index.toString()}
Text: ${e.text}
Color: ${e.color}
Description: ${e.description}`)}},S={args:{rows:o,columns:a,itemsPerPage:4,tableTitle:"Table Title",searchable:!0},render:e=>{const[s,t]=l.useState(),[n,u]=l.useState(),d=(c,m)=>{t(c),u(m)};return r.jsxs("div",{children:[r.jsx(h,{...e,onDisplayedRowsChange:d}),r.jsxs(I,{children:["Page: ",s]}),r.jsx(I,{children:"Rows: "}),n==null?void 0:n.map(c=>r.jsx(I,{children:JSON.stringify(c)}))]})}},R={args:{rows:o,columns:a,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,headerColor:{backgroundColor:"#1976d2",textColor:"#ffffff"}}},O={args:{rows:o,columns:a,itemsPerPage:8,tableTitle:"Table Title",searchable:!0,maxHeight:"300px"}},H={args:{rows:o,columns:a,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,dense:!0}},y={args:{rows:o,columns:a,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,highlighted:{index:6,text:"this is row 6",color:"#330000",description:"this is row 6"}}},M={args:{rows:o,columns:a,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,highlighted:[{index:7,text:"this is row 7",color:"#110000",description:"this is row 7"},{index:0,text:"this is row 0",color:"#ff0000",description:"this is row 0"},{index:5,text:"this is row 5",color:"#550000",description:"this is row 5"}]}},k={args:{rows:o,columns:nr,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,hideHeader:!1}},D={args:{rows:o,columns:a,itemsPerPage:4,tableTitle:"Table Title",showMoreColumns:!0,noOfDefaultColumns:3},render:e=>{const[s,t]=l.useState("");return r.jsxs(r.Fragment,{children:["Search: ",r.jsx("input",{onChange:n=>t(n.target.value)}),r.jsx(h,{search:s,...e})]})}},j={args:{rows:o,columns:a,itemsPerPage:4,tableTitle:"Table Title",showMoreColumns:!0,noOfDefaultColumns:3},render:e=>{const[s,t]=l.useState(0);return r.jsxs(r.Fragment,{children:[r.jsx(A,{onClick:()=>t(s-1),children:"<"}),r.jsx(A,{onClick:()=>t(s+1),children:">"}),r.jsx(h,{page:s,...e},s)]})}},N={args:{rows:o,columns:a.concat(a),itemsPerPage:10,tableTitle:"Lots of Columns",searchable:!0}},ir=e=>[{header:"Index",value:s=>s.index,tooltip:"This is the Index column. It shows the index of the row."},{header:"Text",value:s=>s.text},{header:"Color",value:s=>s.color,render:s=>r.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:s.color},children:" "})},{header:"Description",value:s=>s.description,unsortable:!0,tooltip:"This is the Description column. It describes the row.",HeaderRender:()=>{const[s,t]=l.useState(!0),[n,u]=l.useState(!1),[d,c]=l.useState(!1),[m,g]=l.useState(()=>(console.log("initialization performed"),null)),p=!!m,L=()=>{console.log("menu closed, state of checkboxes pushed to main state"),g(null)},_e=i=>{console.log("New Anchor Set"),g(i.currentTarget)},U=(i,Ge)=>{switch(Ge){case 0:t(i.target.checked),e(i.target.checked);break;case 1:u(i.target.checked);break;case 2:c(i.target.checked);break}};return r.jsxs(Qe,{children:[r.jsx(Ze,{direction:"row",alignItems:"flex-start",component:"button",onClick:_e,children:r.jsx(I,{variant:"body2",children:"Linked Genes"})}),r.jsx(er,{id:"basic-menu",anchorEl:m,open:p,onClose:L,MenuListProps:{"aria-labelledby":"basic-button"},children:r.jsxs(tr,{children:[r.jsx(F,{children:r.jsx(W,{control:r.jsx(E,{checked:s,onChange:i=>U(i,0)}),label:"Distance"})}),r.jsx(F,{children:r.jsx(W,{control:r.jsx(E,{checked:n,onChange:i=>U(i,1)}),label:"CTCF-ChIAPET"})}),r.jsx(F,{children:r.jsx(W,{control:r.jsx(E,{checked:d,onChange:i=>U(i,2)}),label:"RNAPII-ChIAPET"})})]})})]})}}],v={args:{rows:o,columns:[],itemsPerPage:5,tableTitle:"Header Render Test",searchable:!0},render:e=>{const[s,t]=$e.useState(null);return l.useEffect(()=>console.log(s)),r.jsx(h,{...e,columns:ir(t)})}};var _,G,$;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    hideHeader: false
  }
}`,...($=(G=b.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var B,z,V;T.parameters={...T.parameters,docs:{...(B=T.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    rows: [],
    emptyText: 'No Data to Display',
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true
  }
}`,...(V=(z=T.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var X,J,Y;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    hideHeader: true
  }
}`,...(Y=(J=w.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var q,K,Q;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    showMoreColumns: true,
    noOfDefaultColumns: 2
  }
}`,...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,ee,re;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    titleHoverInfo: 'Here is some more information about this table. Here is some more information about this table.' + 'Here is some more information about this table. Here is some more information about this table. ' + 'Here is some more information about this table. Here is some more information about this table. ' + 'Here is some more information about this table. Here is some more information about this table. ' + 'Here is some more information about this table. Here is some more information about this table. ' + 'Here is some more information about this table. Here is some more information about this table. '
  }
}`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var se,oe,te;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: FCCOLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    showMoreColumns: true,
    noOfDefaultColumns: 3
  }
}`,...(te=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ae,ne,ie;P.parameters={...P.parameters,docs:{...(ae=P.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    onRowClick: row => window.alert(\`You clicked on:\\nIndex: \${row.index.toString()}\\nText: \${row.text}\\nColor: \${row.color}\\nDescription: \${row.description}\`)
  }
}`,...(ie=(ne=P.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var le,ce,ue;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true
  },
  render: args => {
    const [page, setPage] = useState<number>();
    const [rows, setRows] = useState<Row[]>();
    const handleDisplayedRowsChange = (newPage: number, displayedRows: Row[]) => {
      setPage(newPage);
      setRows(displayedRows);
    };
    return <div>
        <DataTable {...args} onDisplayedRowsChange={handleDisplayedRowsChange} />
        <Typography>Page: {page}</Typography>
        <Typography>Rows: </Typography>
        {rows?.map(row => <Typography>{JSON.stringify(row)}</Typography>)}
      </div>;
  }
}`,...(ue=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var me,de,he;R.parameters={...R.parameters,docs:{...(me=R.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    headerColor: {
      backgroundColor: '#1976d2',
      textColor: '#ffffff'
    }
  }
}`,...(he=(de=R.parameters)==null?void 0:de.docs)==null?void 0:he.source}}};var ge,pe,be;O.parameters={...O.parameters,docs:{...(ge=O.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 8,
    tableTitle: 'Table Title',
    searchable: true,
    maxHeight: '300px'
  }
}`,...(be=(pe=O.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var Te,we,Ce;H.parameters={...H.parameters,docs:{...(Te=H.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    dense: true
  }
}`,...(Ce=(we=H.parameters)==null?void 0:we.docs)==null?void 0:Ce.source}}};var xe,fe,Pe;y.parameters={...y.parameters,docs:{...(xe=y.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
      description: 'this is row 6'
    }
  }
}`,...(Pe=(fe=y.parameters)==null?void 0:fe.docs)==null?void 0:Pe.source}}};var Se,Re,Oe;M.parameters={...M.parameters,docs:{...(Se=M.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    highlighted: [{
      index: 7,
      text: 'this is row 7',
      color: '#110000',
      description: 'this is row 7'
    }, {
      index: 0,
      text: 'this is row 0',
      color: '#ff0000',
      description: 'this is row 0'
    }, {
      index: 5,
      text: 'this is row 5',
      color: '#550000',
      description: 'this is row 5'
    }]
  }
}`,...(Oe=(Re=M.parameters)==null?void 0:Re.docs)==null?void 0:Oe.source}}};var He,ye,Me;k.parameters={...k.parameters,docs:{...(He=k.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS2,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    hideHeader: false
  }
}`,...(Me=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:Me.source}}};var ke,De,je;D.parameters={...D.parameters,docs:{...(ke=D.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: "Table Title",
    showMoreColumns: true,
    noOfDefaultColumns: 3
  },
  render: args => {
    const [value, setValue] = useState('');
    return <>
        Search: <input onChange={e => setValue(e.target.value)} />
        <DataTable search={value} {...args} />
      </>;
  }
}`,...(je=(De=D.parameters)==null?void 0:De.docs)==null?void 0:je.source}}};var Ne,ve,Ie;j.parameters={...j.parameters,docs:{...(Ne=j.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: "Table Title",
    showMoreColumns: true,
    noOfDefaultColumns: 3
  },
  render: args => {
    const [page, setPage] = useState(0);
    return <>
        <Button onClick={() => setPage(page - 1)}>{'<'}</Button>
        <Button onClick={() => setPage(page + 1)}>{'>'}</Button>
        <DataTable key={page} page={page} {...args} />
      </>;
  }
}`,...(Ie=(ve=j.parameters)==null?void 0:ve.docs)==null?void 0:Ie.source}}};var Le,Ue,Fe;N.parameters={...N.parameters,docs:{...(Le=N.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS.concat(COLUMNS),
    itemsPerPage: 10,
    tableTitle: "Lots of Columns",
    searchable: true
  }
}`,...(Fe=(Ue=N.parameters)==null?void 0:Ue.docs)==null?void 0:Fe.source}}};var We,Ee,Ae;v.parameters={...v.parameters,docs:{...(We=v.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: [],
    //this will be overwritten
    itemsPerPage: 5,
    tableTitle: "Header Render Test",
    searchable: true
  },
  render: args => {
    const [x, setX] = React.useState(null);
    useEffect(() => console.log(x));
    return <DataTable {...args} columns={headeRenderCOLUMNS(setX)} />;
  }
}`,...(Ae=(Ee=v.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};const hr=["Default","EmptyTable","NoHeader","AddMoreColumnsOnSelect","HoverInfo","FunctionalComponentColumn","OnRowClick","OnDisplayedRowsChange","HeaderColored","ConstrainSize","DensePadding","RowHighlight1","RowHighlight2","ColumnHeaderTooltip","ManagedSearchState","ManagedPageState","LotsOfCols","HeaderRender"];export{C as AddMoreColumnsOnSelect,k as ColumnHeaderTooltip,O as ConstrainSize,b as Default,H as DensePadding,T as EmptyTable,f as FunctionalComponentColumn,R as HeaderColored,v as HeaderRender,x as HoverInfo,N as LotsOfCols,j as ManagedPageState,D as ManagedSearchState,w as NoHeader,S as OnDisplayedRowsChange,P as OnRowClick,y as RowHighlight1,M as RowHighlight2,hr as __namedExportsOrder,dr as default};
