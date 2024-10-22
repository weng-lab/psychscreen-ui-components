import{j as r}from"./assertThisInitialized-DaBLapIa.js";import{r as l,R as Je}from"./index-uubelm5h.js";import{j as Ye,k as qe,s as Ke,u as Qe,l as Ze,m as er,n as rr,o as sr,p as c,d as m,q as ze,e as _,r as or,t as tr,M as W,F as E,v as A}from"./Graph-YQGnloR9.js";import"./index-CfOt2XX2.js";function ar(e){return qe("MuiFormGroup",e)}Ye("MuiFormGroup",["root","row","error"]);const nr=e=>{const{classes:s,row:a,error:n}=e;return sr({root:["root",a&&"row",n&&"error"]},ar,s)},ir=Ke("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:a}=e;return[s.root,a.row&&s.row]}})({display:"flex",flexDirection:"column",flexWrap:"wrap",variants:[{props:{row:!0},style:{flexDirection:"row"}}]}),lr=l.forwardRef(function(s,a){const n=Qe({props:s,name:"MuiFormGroup"}),{className:d,row:g=!1,...u}=n,h=Ze(),p=er({props:n,muiFormControl:h,states:["error"]}),b={...n,row:g,error:p.error},U=nr(b);return r.jsx(ir,{className:rr(U.root,d),ownerState:b,ref:a,...u})}),br={title:"DataTable",component:c,tags:["autodocs"],argTypes:{},parameters:{controls:{expanded:!0},docs:{description:{component:"@todo These stories should really be cleaned up, especially dense and headerRender"}}}},cr=[{header:"Functional Column",value:e=>e.index,FunctionalRender:()=>{const[e,s]=l.useState(0);return r.jsxs(r.Fragment,{children:[r.jsx("strong",{children:"Index"}),": ",e,r.jsx("br",{}),r.jsx("button",{onClick:()=>s(e+1),children:"Increment Index"})]})}}],t=[{header:"Index",value:e=>e.index},{header:"Text",value:e=>e.text},{header:"Color",value:e=>e.color,render:e=>r.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:e.color},children:" "})},{header:"Description",value:e=>e.description}],ur=[{header:"Index",value:e=>e.index,tooltip:"This is the index column"},{header:"Text",value:e=>e.text},{header:"Color",value:e=>e.color,render:e=>r.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:e.color},children:" "})},{header:"Description",value:e=>e.description,tooltip:"This is the description column"}],o=[{index:0,text:"this_is_row_0",color:"#ff0000",description:"this_is_row_0"},{index:1,text:"this is row 1",color:"#dd0000",description:"this is row 1"},{index:2,text:"this is row 2",color:"#bb0000",description:"this is row 2"},{index:3,text:"this is row 3",color:"#990000",description:"this is row 3"},{index:4,text:"this is row 4",color:"#770000",description:"this is row 4"},{index:5,text:"this is row 5",color:"#550000",description:"this is row 5"},{index:6,text:"this is row 6",color:"#330000",description:"this is row 6"},{index:7,text:"this is row 7",color:"#110000",description:"this is row 7"}],T={args:{rows:o,columns:t,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,hideHeader:!1}},w={args:{rows:[],emptyText:"No Data to Display",columns:t,itemsPerPage:4,tableTitle:"Table Title",searchable:!0}},x={args:{rows:o,columns:t,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,hideHeader:!0}},C={args:{rows:o,columns:t,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,showMoreColumns:!0,noOfDefaultColumns:2}},P={args:{rows:o,columns:t,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,titleHoverInfo:"Here is some more information about this table. Here is some more information about this table.Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. "}},f={args:{rows:o,columns:cr,tableTitle:"Table Title",searchable:!0,showMoreColumns:!0,noOfDefaultColumns:5}},S={args:{rows:o,columns:t,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,onRowClick:e=>window.alert(`You clicked on:
Index: ${e.index.toString()}
Text: ${e.text}
Color: ${e.color}
Description: ${e.description}`)}},R={args:{rows:o,columns:t,itemsPerPage:4,tableTitle:"Table Title",searchable:!0},render:e=>{const[s,a]=l.useState(),[n,d]=l.useState(),g=(u,h)=>{a(u),d(h)};return r.jsxs("div",{children:[r.jsx(c,{...e,onDisplayedRowsChange:g}),r.jsxs(m,{children:["Page: ",s]}),r.jsx(m,{children:"Rows: "}),n==null?void 0:n.map(u=>r.jsx(m,{children:JSON.stringify(u)}))]})}},O={args:{rows:o,columns:t,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,headerColor:{backgroundColor:"#1976d2",textColor:"#ffffff"}}},y={args:{rows:o,columns:t,tableTitle:"Table Title"},render:e=>r.jsxs(ze,{spacing:2,children:[r.jsx(m,{children:"Default"}),r.jsx(c,{...e}),r.jsx(m,{children:"itemsPerPage = 5"}),r.jsx(c,{...e,itemsPerPage:5}),r.jsx(m,{children:"itemsPerPage = [3,5,10]"}),r.jsx(c,{...e,itemsPerPage:[3,5,10]})]})},H={args:{rows:o,columns:t,itemsPerPage:8,tableTitle:"Table Title",searchable:!0,maxHeight:"300px"}},M={args:{rows:o,columns:t,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,dense:!0}},j={args:{rows:o,columns:t,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,highlighted:{index:6,text:"this is row 6",color:"#330000",description:"this is row 6"}}},D={args:{rows:o,columns:t,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,highlighted:[{index:7,text:"this is row 7",color:"#110000",description:"this is row 7"},{index:0,text:"this is row 0",color:"#ff0000",description:"this is row 0"},{index:5,text:"this is row 5",color:"#550000",description:"this is row 5"}]}},k={args:{rows:o,columns:ur,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,hideHeader:!1}},N={args:{rows:o,columns:t,itemsPerPage:4,tableTitle:"Table Title",showMoreColumns:!0,noOfDefaultColumns:3},render:e=>{const[s,a]=l.useState("");return r.jsxs(r.Fragment,{children:["Search: ",r.jsx("input",{onChange:n=>a(n.target.value)}),r.jsx(c,{search:s,...e})]})}},v={args:{rows:o,columns:t,itemsPerPage:4,tableTitle:"Table Title",showMoreColumns:!0,noOfDefaultColumns:3},render:e=>{const[s,a]=l.useState(0);return r.jsxs(r.Fragment,{children:[r.jsx(_,{onClick:()=>a(s-1),children:"<"}),r.jsx(_,{onClick:()=>a(s+1),children:">"}),r.jsx(c,{page:s,...e},s)]})}},I={args:{rows:o,columns:t.concat(t),itemsPerPage:10,tableTitle:"Lots of Columns",searchable:!0}},mr=e=>[{header:"Index",value:s=>s.index,tooltip:"This is the Index column. It shows the index of the row."},{header:"Text",value:s=>s.text},{header:"Color",value:s=>s.color,render:s=>r.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:s.color},children:" "})},{header:"Description",value:s=>s.description,unsortable:!0,tooltip:"This is the Description column. It describes the row.",HeaderRender:()=>{const[s,a]=l.useState(!0),[n,d]=l.useState(!1),[g,u]=l.useState(!1),[h,p]=l.useState(()=>(console.log("initialization performed"),null)),b=!!h,U=()=>{console.log("menu closed, state of checkboxes pushed to main state"),p(null)},Ve=i=>{console.log("New Anchor Set"),p(i.currentTarget)},F=(i,Xe)=>{switch(Xe){case 0:a(i.target.checked),e(i.target.checked);break;case 1:d(i.target.checked);break;case 2:u(i.target.checked);break}};return r.jsxs(or,{children:[r.jsx(ze,{direction:"row",alignItems:"flex-start",component:"button",onClick:Ve,children:r.jsx(m,{variant:"body2",children:"Linked Genes"})}),r.jsx(tr,{id:"basic-menu",anchorEl:h,open:b,onClose:U,MenuListProps:{"aria-labelledby":"basic-button"},children:r.jsxs(lr,{children:[r.jsx(W,{children:r.jsx(E,{control:r.jsx(A,{checked:s,onChange:i=>F(i,0)}),label:"Distance"})}),r.jsx(W,{children:r.jsx(E,{control:r.jsx(A,{checked:n,onChange:i=>F(i,1)}),label:"CTCF-ChIAPET"})}),r.jsx(W,{children:r.jsx(E,{control:r.jsx(A,{checked:g,onChange:i=>F(i,2)}),label:"RNAPII-ChIAPET"})})]})})]})}}],L={args:{rows:o,columns:[],itemsPerPage:5,tableTitle:"Header Render Test",searchable:!0},render:e=>{const[s,a]=Je.useState(null);return l.useEffect(()=>console.log(s)),r.jsx(c,{...e,columns:mr(a)})}};var G,$,B;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    hideHeader: false
  }
}`,...(B=($=T.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var z,V,X;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    rows: [],
    emptyText: 'No Data to Display',
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true
  }
}`,...(X=(V=w.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var J,Y,q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    hideHeader: true
  }
}`,...(q=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var K,Q,Z;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    showMoreColumns: true,
    noOfDefaultColumns: 2
  }
}`,...(Z=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,re,se;P.parameters={...P.parameters,docs:{...(ee=P.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    titleHoverInfo: 'Here is some more information about this table. Here is some more information about this table.' + 'Here is some more information about this table. Here is some more information about this table. ' + 'Here is some more information about this table. Here is some more information about this table. ' + 'Here is some more information about this table. Here is some more information about this table. ' + 'Here is some more information about this table. Here is some more information about this table. ' + 'Here is some more information about this table. Here is some more information about this table. '
  }
}`,...(se=(re=P.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,te,ae;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: FCCOLUMNS,
    tableTitle: 'Table Title',
    searchable: true,
    showMoreColumns: true,
    noOfDefaultColumns: 5
  }
}`,...(ae=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,ie,le;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    onRowClick: row => window.alert(\`You clicked on:\\nIndex: \${row.index.toString()}\\nText: \${row.text}\\nColor: \${row.color}\\nDescription: \${row.description}\`)
  }
}`,...(le=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,ue,me;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(me=(ue=R.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var de,he,ge;O.parameters={...O.parameters,docs:{...(de=O.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ge=(he=O.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var pe,be,Te;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    tableTitle: "Table Title"
  },
  render: args => <Stack spacing={2}>
      <Typography>Default</Typography>
      <DataTable {...args} />
      <Typography>itemsPerPage = 5</Typography>
      <DataTable {...args} itemsPerPage={5} />
      <Typography>itemsPerPage = [3,5,10]</Typography>
      <DataTable {...args} itemsPerPage={[3, 5, 10]} />
    </Stack>
}`,...(Te=(be=y.parameters)==null?void 0:be.docs)==null?void 0:Te.source}}};var we,xe,Ce;H.parameters={...H.parameters,docs:{...(we=H.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 8,
    tableTitle: 'Table Title',
    searchable: true,
    maxHeight: '300px'
  }
}`,...(Ce=(xe=H.parameters)==null?void 0:xe.docs)==null?void 0:Ce.source}}};var Pe,fe,Se;M.parameters={...M.parameters,docs:{...(Pe=M.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    dense: true
  }
}`,...(Se=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var Re,Oe,ye;j.parameters={...j.parameters,docs:{...(Re=j.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(ye=(Oe=j.parameters)==null?void 0:Oe.docs)==null?void 0:ye.source}}};var He,Me,je;D.parameters={...D.parameters,docs:{...(He=D.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(je=(Me=D.parameters)==null?void 0:Me.docs)==null?void 0:je.source}}};var De,ke,Ne;k.parameters={...k.parameters,docs:{...(De=k.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS2,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    hideHeader: false
  }
}`,...(Ne=(ke=k.parameters)==null?void 0:ke.docs)==null?void 0:Ne.source}}};var ve,Ie,Le;N.parameters={...N.parameters,docs:{...(ve=N.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Le=(Ie=N.parameters)==null?void 0:Ie.docs)==null?void 0:Le.source}}};var Ue,Fe,We;v.parameters={...v.parameters,docs:{...(Ue=v.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(We=(Fe=v.parameters)==null?void 0:Fe.docs)==null?void 0:We.source}}};var Ee,Ae,_e;I.parameters={...I.parameters,docs:{...(Ee=I.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS.concat(COLUMNS),
    itemsPerPage: 10,
    tableTitle: "Lots of Columns",
    searchable: true
  }
}`,...(_e=(Ae=I.parameters)==null?void 0:Ae.docs)==null?void 0:_e.source}}};var Ge,$e,Be;L.parameters={...L.parameters,docs:{...(Ge=L.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: [],
    //this will be overwritten
    itemsPerPage: 5,
    tableTitle: "Header Render Test",
    searchable: true
  },
  render: args => {
    const [x, setX] = React.useState<boolean | null>(null);
    useEffect(() => console.log(x));
    return <DataTable {...args} columns={headeRenderCOLUMNS(setX)} />;
  }
}`,...(Be=($e=L.parameters)==null?void 0:$e.docs)==null?void 0:Be.source}}};const Tr=["Default","EmptyTable","NoHeader","AddMoreColumnsOnSelect","HoverInfo","FunctionalComponentColumn","OnRowClick","OnDisplayedRowsChange","HeaderColored","ItemsPerPage","ConstrainSize","DensePadding","RowHighlight1","RowHighlight2","ColumnHeaderTooltip","ManagedSearchState","ManagedPageState","LotsOfCols","HeaderRender"];export{C as AddMoreColumnsOnSelect,k as ColumnHeaderTooltip,H as ConstrainSize,T as Default,M as DensePadding,w as EmptyTable,f as FunctionalComponentColumn,O as HeaderColored,L as HeaderRender,P as HoverInfo,y as ItemsPerPage,I as LotsOfCols,v as ManagedPageState,N as ManagedSearchState,x as NoHeader,R as OnDisplayedRowsChange,S as OnRowClick,j as RowHighlight1,D as RowHighlight2,Tr as __namedExportsOrder,br as default};
