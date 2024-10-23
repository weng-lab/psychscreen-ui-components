import{j as r}from"./assertThisInitialized-DaBLapIa.js";import{r as l,R as Ze}from"./index-uubelm5h.js";import{j as er,k as rr,s as tr,u as or,l as sr,m as ar,n as nr,o as ir,p as lr,q as u,d as i,r as U,e as $,I as cr,t as ur,v as dr,M as A,F as _,w as B}from"./Graph-ayG64wjf.js";import"./index-CfOt2XX2.js";function mr(e){return rr("MuiFormGroup",e)}er("MuiFormGroup",["root","row","error"]);const hr=e=>{const{classes:t,row:o,error:a}=e;return ir({root:["root",o&&"row",a&&"error"]},mr,t)},gr=tr("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.row&&t.row]}})({display:"flex",flexDirection:"column",flexWrap:"wrap",variants:[{props:{row:!0},style:{flexDirection:"row"}}]}),pr=l.forwardRef(function(t,o){const a=or({props:t,name:"MuiFormGroup"}),{className:d,row:g=!1,...m}=a,h=sr(),p=ar({props:a,muiFormControl:h,states:["error"]}),b={...a,row:g,error:p.error},W=hr(b);return r.jsx(gr,{className:nr(W.root,d),ownerState:b,ref:o,...m})}),br=lr(r.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),Rr={title:"DataTable",component:u,tags:["autodocs"],argTypes:{},parameters:{controls:{expanded:!0}}},G=e=>{const[t,o]=l.useState(0);return r.jsxs(i,{onClick:()=>{var a;o(t+1),(a=e==null?void 0:e.info)!=null&&a.index&&console.log(e.info.index)},children:["Click to increase count: ",t]})},Tr=[{header:"Functional Column",value:e=>e.index,render:e=>{const[t,o]=l.useState(0);return r.jsxs(r.Fragment,{children:[r.jsxs("strong",{children:["Row ",e.index]}),": ",t,r.jsx("br",{}),r.jsx("button",{onClick:()=>o(t+1),children:"Increment Count"})]})}},{header:"Functional Column",value:e=>e.index,render:e=>{const[t,o]=l.useState(0);return r.jsxs(r.Fragment,{children:[r.jsxs("strong",{children:["Row ",e.index]}),": ",t,r.jsx("br",{}),r.jsx("button",{onClick:()=>o(t+1),children:"Increment Count"})]})}},{header:"Functional Column",value:e=>e.index,render:e=>r.jsx(G,{info:e})},{header:"Functional Column",value:e=>e.index,render:e=>r.jsx(G,{info:e})}],n=[{header:"Index",value:e=>e.index},{header:"Text",value:e=>e.text},{header:"Color",value:e=>e.color,render:e=>r.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:e.color},children:" "})},{header:"Description",value:e=>e.description}],xr=[{header:"Index",value:e=>e.index,HeaderRender:()=>r.jsx(i,{children:"Index"}),tooltip:"This is the index column"},{header:"Text",value:e=>e.text},{header:"Color",value:e=>e.color,render:e=>r.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:e.color},children:" "})},{header:"Description",value:e=>e.description,tooltip:"This is the description column"}],s=[{index:0,text:"this_is_row_0",color:"#ff0000",description:"this_is_row_0"},{index:1,text:"this is row 1",color:"#dd0000",description:"this is row 1"},{index:2,text:"this is row 2",color:"#bb0000",description:"this is row 2"},{index:3,text:"this is row 3",color:"#990000",description:"this is row 3"},{index:4,text:"this is row 4",color:"#770000",description:"this is row 4"},{index:5,text:"this is row 5",color:"#550000",description:"this is row 5"},{index:6,text:"this is row 6",color:"#330000",description:"this is row 6"},{index:7,text:"this is row 7",color:"#110000",description:"this is row 7"}],T={args:{rows:s,columns:n,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,hideHeader:!1}},x={args:{rows:[],emptyText:"No Data to Display",columns:n,itemsPerPage:4,tableTitle:"Table Title",searchable:!0}},C={args:{rows:s,columns:n,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,hideHeader:!0}},w={args:{rows:s,columns:n,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,showMoreColumns:!0,noOfDefaultColumns:2}},P={args:{rows:s,columns:n,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,titleHoverInfo:"Here is some more information about this table. Here is some more information about this table.Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. "}},S={args:{rows:s,columns:Tr,tableTitle:"Table Title",searchable:!0,showMoreColumns:!0,itemsPerPage:5}},f={args:{rows:s,columns:n,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,onRowClick:e=>window.alert(`You clicked on:
Index: ${e.index.toString()}
Text: ${e.text}
Color: ${e.color}
Description: ${e.description}`)}},y={args:{rows:s,columns:n,itemsPerPage:4,tableTitle:"Table Title",searchable:!0},render:e=>{const[t,o]=l.useState(),[a,d]=l.useState(),g=(m,h)=>{o(m),d(h)};return r.jsxs("div",{children:[r.jsx(u,{...e,onDisplayedRowsChange:g}),r.jsxs(i,{children:["Page: ",t]}),r.jsx(i,{children:"Rows: "}),a==null?void 0:a.map(m=>r.jsx(i,{children:JSON.stringify(m)}))]})}},R={args:{rows:s,columns:n,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,headerColor:{backgroundColor:"#1976d2",textColor:"#ffffff"}}},j={args:{rows:s,columns:n,tableTitle:"Table Title"},render:e=>r.jsxs(U,{spacing:2,children:[r.jsx(i,{children:"Default"}),r.jsx(u,{...e}),r.jsx(i,{children:"itemsPerPage = 5"}),r.jsx(u,{...e,itemsPerPage:5}),r.jsx(i,{children:"itemsPerPage = [3,5,10]"}),r.jsx(u,{...e,itemsPerPage:[3,5,10]})]})},k={args:{rows:s,columns:n,itemsPerPage:8,tableTitle:"Table Title",searchable:!0,maxHeight:"300px"}},O={args:{rows:s,columns:n,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,dense:!0}},H={args:{rows:s,columns:n,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,highlighted:{index:6,text:"this is row 6",color:"#330000",description:"this is row 6"}}},D={args:{rows:s,columns:n,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,highlighted:[{index:7,text:"this is row 7",color:"#110000",description:"this is row 7"},{index:0,text:"this is row 0",color:"#ff0000",description:"this is row 0"},{index:5,text:"this is row 5",color:"#550000",description:"this is row 5"}]}},M={args:{rows:s,columns:xr,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,hideHeader:!1}},I={args:{rows:s,columns:n,itemsPerPage:4,tableTitle:"Table Title",showMoreColumns:!0,noOfDefaultColumns:3},render:e=>{const[t,o]=l.useState("");return r.jsxs(r.Fragment,{children:["Search: ",r.jsx("input",{onChange:a=>o(a.target.value)}),r.jsx(u,{search:t,...e})]})}},v={args:{rows:s,columns:n,itemsPerPage:4,tableTitle:"Table Title",showMoreColumns:!0,noOfDefaultColumns:3},render:e=>{const[t,o]=l.useState(0);return r.jsxs(r.Fragment,{children:[r.jsx($,{onClick:()=>o(t-1),children:"<"}),r.jsx($,{onClick:()=>o(t+1),children:">"}),r.jsx(u,{page:t,...e},t)]})}},N={args:{rows:s,columns:n.concat(n),itemsPerPage:10,tableTitle:"Lots of Columns",searchable:!0}},Cr=e=>{const[t,o]=l.useState(!0),[a,d]=l.useState(!1),[g,m]=l.useState(!1),[h,p]=l.useState(()=>(console.log("initialization performed"),null)),b=!!h,W=()=>{console.log("menu closed, state of checkboxes pushed to main state"),p(null)},Ke=c=>{console.log("New Anchor Set"),p(c.currentTarget)},E=(c,Qe)=>{switch(Qe){case 0:o(c.target.checked),e.setX(c.target.checked);break;case 1:d(c.target.checked);break;case 2:m(c.target.checked);break}};return r.jsxs(ur,{children:[r.jsx(U,{direction:"row",alignItems:"flex-start",component:"button",onClick:Ke,children:r.jsx(i,{variant:"body2",children:"Linked Genes"})}),r.jsx(dr,{id:"basic-menu",anchorEl:h,open:b,onClose:W,MenuListProps:{"aria-labelledby":"basic-button"},children:r.jsxs(pr,{children:[r.jsx(A,{children:r.jsx(_,{control:r.jsx(B,{checked:t,onChange:c=>E(c,0)}),label:"Distance"})}),r.jsx(A,{children:r.jsx(_,{control:r.jsx(B,{checked:a,onChange:c=>E(c,1)}),label:"CTCF-ChIAPET"})}),r.jsx(A,{children:r.jsx(_,{control:r.jsx(B,{checked:g,onChange:c=>E(c,2)}),label:"RNAPII-ChIAPET"})})]})})]})},wr=e=>[{header:"Index",value:t=>t.index,tooltip:"This is the Index column. It shows the index of the row."},{header:"Text",value:t=>t.text},{header:"Color",value:t=>t.color,render:t=>r.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:t.color},children:" "})},{header:"Description",value:t=>t.description,unsortable:!0,tooltip:"This is the Description column. It describes the row.",HeaderRender:()=>r.jsx(Cr,{setX:e})}],F={args:{rows:s,itemsPerPage:5,tableTitle:"Header Render Test",searchable:!0},render:e=>{const[t,o]=Ze.useState(null);l.useEffect(()=>console.log(t));const a=l.useCallback(d=>wr(d),[]);return console.log("rendering"),r.jsx(u,{...e,columns:a(o)})}},L={args:{rows:s,columns:n,searchable:!0},render:e=>r.jsxs(U,{spacing:2,children:[r.jsx(i,{children:"Normal String Title"}),r.jsx(u,{...e,tableTitle:"Test Title"}),r.jsx(i,{children:"Custom Typography Title"}),r.jsx(u,{...e,tableTitle:r.jsx(i,{variant:"body2",color:"secondary",children:"Small title"})}),r.jsx(i,{children:"Component title with onClick"}),r.jsx(u,{...e,tableTitle:r.jsxs(U,{direction:"row",alignItems:"center",children:[r.jsx(i,{children:"Click the button -->"}),r.jsx(cr,{onClick:()=>window.alert("Clicked!"),children:r.jsx(br,{})})]})}),r.jsx(i,{children:"Function Component title using hooks"}),r.jsx(u,{...e,tableTitle:r.jsx(G,{})})]})};var z,X,V;T.parameters={...T.parameters,docs:{...(z=T.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    hideHeader: false
  }
}`,...(V=(X=T.parameters)==null?void 0:X.docs)==null?void 0:V.source}}};var J,Y,q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    rows: [],
    emptyText: 'No Data to Display',
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true
  }
}`,...(q=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var K,Q,Z;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    hideHeader: true
  }
}`,...(Z=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,re,te;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    showMoreColumns: true,
    noOfDefaultColumns: 2
  }
}`,...(te=(re=w.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,se,ae;P.parameters={...P.parameters,docs:{...(oe=P.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    titleHoverInfo: 'Here is some more information about this table. Here is some more information about this table.' + 'Here is some more information about this table. Here is some more information about this table. ' + 'Here is some more information about this table. Here is some more information about this table. ' + 'Here is some more information about this table. Here is some more information about this table. ' + 'Here is some more information about this table. Here is some more information about this table. ' + 'Here is some more information about this table. Here is some more information about this table. '
  }
}`,...(ae=(se=P.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ne,ie,le;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: FunctionalRenderCols,
    tableTitle: 'Table Title',
    searchable: true,
    showMoreColumns: true,
    itemsPerPage: 5
  }
}`,...(le=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,ue,de;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    onRowClick: row => window.alert(\`You clicked on:\\nIndex: \${row.index.toString()}\\nText: \${row.text}\\nColor: \${row.color}\\nDescription: \${row.description}\`)
  }
}`,...(de=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,he,ge;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ge=(he=y.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var pe,be,Te;R.parameters={...R.parameters,docs:{...(pe=R.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(Te=(be=R.parameters)==null?void 0:be.docs)==null?void 0:Te.source}}};var xe,Ce,we;j.parameters={...j.parameters,docs:{...(xe=j.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(we=(Ce=j.parameters)==null?void 0:Ce.docs)==null?void 0:we.source}}};var Pe,Se,fe;k.parameters={...k.parameters,docs:{...(Pe=k.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 8,
    tableTitle: 'Table Title',
    searchable: true,
    maxHeight: '300px'
  }
}`,...(fe=(Se=k.parameters)==null?void 0:Se.docs)==null?void 0:fe.source}}};var ye,Re,je;O.parameters={...O.parameters,docs:{...(ye=O.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    dense: true
  }
}`,...(je=(Re=O.parameters)==null?void 0:Re.docs)==null?void 0:je.source}}};var ke,Oe,He;H.parameters={...H.parameters,docs:{...(ke=H.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(He=(Oe=H.parameters)==null?void 0:Oe.docs)==null?void 0:He.source}}};var De,Me,Ie;D.parameters={...D.parameters,docs:{...(De=D.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ie=(Me=D.parameters)==null?void 0:Me.docs)==null?void 0:Ie.source}}};var ve,Ne,Fe;M.parameters={...M.parameters,docs:{...(ve=M.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS2,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    hideHeader: false
  }
}`,...(Fe=(Ne=M.parameters)==null?void 0:Ne.docs)==null?void 0:Fe.source}}};var Le,Ue,We;I.parameters={...I.parameters,docs:{...(Le=I.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(We=(Ue=I.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var Ee,Ae,_e;v.parameters={...v.parameters,docs:{...(Ee=v.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(_e=(Ae=v.parameters)==null?void 0:Ae.docs)==null?void 0:_e.source}}};var Be,Ge,$e;N.parameters={...N.parameters,docs:{...(Be=N.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS.concat(COLUMNS),
    itemsPerPage: 10,
    tableTitle: "Lots of Columns",
    searchable: true
  }
}`,...($e=(Ge=N.parameters)==null?void 0:Ge.docs)==null?void 0:$e.source}}};var ze,Xe,Ve;F.parameters={...F.parameters,docs:{...(ze=F.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    itemsPerPage: 5,
    tableTitle: "Header Render Test",
    searchable: true
  },
  render: args => {
    const [x, setX] = React.useState<boolean | null>(null);
    useEffect(() => console.log(x));
    const colFunc = useCallback((setter: React.Dispatch<React.SetStateAction<boolean | null>>) => {
      return headeRenderCOLUMNS(setter);
    }, []);
    console.log("rendering");
    return <DataTable {...args} columns={colFunc(setX)} />;
  }
}`,...(Ve=(Xe=F.parameters)==null?void 0:Xe.docs)==null?void 0:Ve.source}}};var Je,Ye,qe;L.parameters={...L.parameters,docs:{...(Je=L.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    searchable: true
  },
  render: args => {
    return <Stack spacing={2}>
        <Typography>Normal String Title</Typography>
        <DataTable {...args} tableTitle={"Test Title"} />
        <Typography>Custom Typography Title</Typography>
        <DataTable {...args} tableTitle={<Typography variant='body2' color='secondary'>Small title</Typography>} />
        <Typography>Component title with onClick</Typography>
        <DataTable {...args} tableTitle={<Stack direction={"row"} alignItems={"center"}><Typography>{"Click the button -->"}</Typography><IconButton onClick={() => window.alert("Clicked!")}><Close /></IconButton></Stack>} />
        <Typography>Function Component title using hooks</Typography>
        <DataTable {...args} tableTitle={<CountComponent />} />
      </Stack>;
  }
}`,...(qe=(Ye=L.parameters)==null?void 0:Ye.docs)==null?void 0:qe.source}}};const jr=["Default","EmptyTable","NoHeader","AddMoreColumnsOnSelect","HoverInfo","FunctionalRender","OnRowClick","OnDisplayedRowsChange","HeaderColored","ItemsPerPage","ConstrainSize","DensePadding","RowHighlight1","RowHighlight2","ColumnHeaderTooltip","ManagedSearchState","ManagedPageState","LotsOfCols","HeaderRender","TitleRender"];export{w as AddMoreColumnsOnSelect,M as ColumnHeaderTooltip,k as ConstrainSize,T as Default,O as DensePadding,x as EmptyTable,S as FunctionalRender,R as HeaderColored,F as HeaderRender,P as HoverInfo,j as ItemsPerPage,N as LotsOfCols,v as ManagedPageState,I as ManagedSearchState,C as NoHeader,y as OnDisplayedRowsChange,f as OnRowClick,H as RowHighlight1,D as RowHighlight2,L as TitleRender,jr as __namedExportsOrder,Rr as default};
