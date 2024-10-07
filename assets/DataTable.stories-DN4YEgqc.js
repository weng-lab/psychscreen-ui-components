import{j as r}from"./assertThisInitialized-DaBLapIa.js";import{r as l,R as We}from"./index-uubelm5h.js";import{j as Ee,k as Ae,s as _e,u as Ge,l as $e,m as Be,n as ze,o as Ve,p as D,e as W,q as Xe,r as Ye,d as qe,t as Je,M as U,F,v as y}from"./Graph-CrgPhcun.js";import"./index-CfOt2XX2.js";function Ke(e){return Ae("MuiFormGroup",e)}Ee("MuiFormGroup",["root","row","error"]);const Qe=e=>{const{classes:o,row:a,error:i}=e;return Ve({root:["root",a&&"row",i&&"error"]},Ke,o)},Ze=_e("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,a.row&&o.row]}})({display:"flex",flexDirection:"column",flexWrap:"wrap",variants:[{props:{row:!0},style:{flexDirection:"row"}}]}),er=l.forwardRef(function(o,a){const i=Ge({props:o,name:"MuiFormGroup"}),{className:c,row:N=!1,...I}=i,u=$e(),m=Be({props:i,muiFormControl:u,states:["error"]}),d={...i,row:N,error:m.error},v=Qe(d);return r.jsx(Ze,{className:ze(v.root,c),ownerState:d,ref:a,...I})}),lr={title:"DataTable",component:D,tags:["autodocs"],argTypes:{},parameters:{controls:{expanded:!0},docs:{description:{component:"@todo These stories should really be cleaned up, especially dense and headerRender"}}}},rr=[{header:"Functional Column",value:e=>e.index,FunctionalRender:()=>{const[e,o]=l.useState(0);return r.jsxs(r.Fragment,{children:[r.jsx("strong",{children:"Index"}),": ",e,r.jsx("br",{}),r.jsx("button",{onClick:()=>o(e+1),children:"Increment Index"})]})}}],t=[{header:"Index",value:e=>e.index},{header:"Text",value:e=>e.text},{header:"Color",value:e=>e.color,render:e=>r.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:e.color},children:" "})},{header:"Description",value:e=>e.description}],or=[{header:"Index",value:e=>e.index,tooltip:"This is the index column"},{header:"Text",value:e=>e.text},{header:"Color",value:e=>e.color,render:e=>r.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:e.color},children:" "})},{header:"Description",value:e=>e.description,tooltip:"This is the description column"}],s=[{index:0,text:"this_is_row_0",color:"#ff0000",description:"this_is_row_0"},{index:1,text:"this is row 1",color:"#dd0000",description:"this is row 1"},{index:2,text:"this is row 2",color:"#bb0000",description:"this is row 2"},{index:3,text:"this is row 3",color:"#990000",description:"this is row 3"},{index:4,text:"this is row 4",color:"#770000",description:"this is row 4"},{index:5,text:"this is row 5",color:"#550000",description:"this is row 5"},{index:6,text:"this is row 6",color:"#330000",description:"this is row 6"},{index:7,text:"this is row 7",color:"#110000",description:"this is row 7"}],h={args:{rows:s,columns:t,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,hideHeader:!1}},b={args:{rows:[],emptyText:"No Data to Display",columns:t,itemsPerPage:4,tableTitle:"Table Title",searchable:!0}},g={args:{rows:s,columns:t,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,hideHeader:!0}},p={args:{rows:s,columns:t,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,showMoreColumns:!0,noOfDefaultColumns:2}},T={args:{rows:s,columns:t,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,titleHoverInfo:"Here is some more information about this table. Here is some more information about this table.Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. Here is some more information about this table. "}},C={args:{rows:s,columns:rr,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,showMoreColumns:!0,noOfDefaultColumns:3}},x={args:{rows:s,columns:t,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,onRowClick:e=>window.alert(`You clicked on:
Index: ${e.index.toString()}
Text: ${e.text}
Color: ${e.color}
Description: ${e.description}`)}},w={args:{rows:s,columns:t,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,headerColor:{backgroundColor:"#1976d2",textColor:"#ffffff"}}},f={args:{rows:s,columns:t,itemsPerPage:8,tableTitle:"Table Title",searchable:!0,maxHeight:"300px"}},P={args:{rows:s,columns:t,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,dense:!0}},S={args:{rows:s,columns:t,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,highlighted:{index:6,text:"this is row 6",color:"#330000",description:"this is row 6"}}},O={args:{rows:s,columns:t,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,highlighted:[{index:7,text:"this is row 7",color:"#110000",description:"this is row 7"},{index:0,text:"this is row 0",color:"#ff0000",description:"this is row 0"},{index:5,text:"this is row 5",color:"#550000",description:"this is row 5"}]}},H={args:{rows:s,columns:or,itemsPerPage:4,tableTitle:"Table Title",searchable:!0,hideHeader:!1}},R={args:{rows:s,columns:t,itemsPerPage:4,tableTitle:"Table Title",showMoreColumns:!0,noOfDefaultColumns:3},render:e=>{const[o,a]=l.useState("");return r.jsxs(r.Fragment,{children:["Search: ",r.jsx("input",{onChange:i=>a(i.target.value)}),r.jsx(D,{search:o,...e})]})}},M={args:{rows:s,columns:t,itemsPerPage:4,tableTitle:"Table Title",showMoreColumns:!0,noOfDefaultColumns:3},render:e=>{const[o,a]=l.useState(0);return r.jsxs(r.Fragment,{children:[r.jsx(W,{onClick:()=>a(o-1),children:"<"}),r.jsx(W,{onClick:()=>a(o+1),children:">"}),r.jsx(D,{page:o,...e},o)]})}},k={args:{rows:s,columns:t.concat(t),itemsPerPage:10,tableTitle:"Lots of Columns",searchable:!0}},sr=e=>[{header:"Index",value:o=>o.index,tooltip:"This is the Index column. It shows the index of the row."},{header:"Text",value:o=>o.text},{header:"Color",value:o=>o.color,render:o=>r.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:o.color},children:" "})},{header:"Description",value:o=>o.description,unsortable:!0,tooltip:"This is the Description column. It describes the row.",HeaderRender:()=>{const[o,a]=l.useState(!0),[i,c]=l.useState(!1),[N,I]=l.useState(!1),[u,m]=l.useState(()=>(console.log("initialization performed"),null)),d=!!u,v=()=>{console.log("menu closed, state of checkboxes pushed to main state"),m(null)},Fe=n=>{console.log("New Anchor Set"),m(n.currentTarget)},L=(n,ye)=>{switch(ye){case 0:a(n.target.checked),e(n.target.checked);break;case 1:c(n.target.checked);break;case 2:I(n.target.checked);break}};return r.jsxs(Xe,{children:[r.jsx(Ye,{direction:"row",alignItems:"flex-start",component:"button",onClick:Fe,children:r.jsx(qe,{variant:"body2",children:"Linked Genes"})}),r.jsx(Je,{id:"basic-menu",anchorEl:u,open:d,onClose:v,MenuListProps:{"aria-labelledby":"basic-button"},children:r.jsxs(er,{children:[r.jsx(U,{children:r.jsx(F,{control:r.jsx(y,{checked:o,onChange:n=>L(n,0)}),label:"Distance"})}),r.jsx(U,{children:r.jsx(F,{control:r.jsx(y,{checked:i,onChange:n=>L(n,1)}),label:"CTCF-ChIAPET"})}),r.jsx(U,{children:r.jsx(F,{control:r.jsx(y,{checked:N,onChange:n=>L(n,2)}),label:"RNAPII-ChIAPET"})})]})})]})}}],j={args:{rows:s,columns:[],itemsPerPage:5,tableTitle:"Header Render Test",searchable:!0},render:e=>{const[o,a]=We.useState(null);return l.useEffect(()=>console.log(o)),r.jsx(D,{...e,columns:sr(a)})}};var E,A,_;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    hideHeader: false
  }
}`,...(_=(A=h.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var G,$,B;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    rows: [],
    emptyText: 'No Data to Display',
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true
  }
}`,...(B=($=b.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var z,V,X;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    hideHeader: true
  }
}`,...(X=(V=g.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,q,J;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    showMoreColumns: true,
    noOfDefaultColumns: 2
  }
}`,...(J=(q=p.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,Z;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    titleHoverInfo: 'Here is some more information about this table. Here is some more information about this table.' + 'Here is some more information about this table. Here is some more information about this table. ' + 'Here is some more information about this table. Here is some more information about this table. ' + 'Here is some more information about this table. Here is some more information about this table. ' + 'Here is some more information about this table. Here is some more information about this table. ' + 'Here is some more information about this table. Here is some more information about this table. '
  }
}`,...(Z=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,re,oe;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: FCCOLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    showMoreColumns: true,
    noOfDefaultColumns: 3
  }
}`,...(oe=(re=C.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,te,ae;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    onRowClick: row => window.alert(\`You clicked on:\\nIndex: \${row.index.toString()}\\nText: \${row.text}\\nColor: \${row.color}\\nDescription: \${row.description}\`)
  }
}`,...(ae=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,ie,le;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(le=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,ue,me;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 8,
    tableTitle: 'Table Title',
    searchable: true,
    maxHeight: '300px'
  }
}`,...(me=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var de,he,be;P.parameters={...P.parameters,docs:{...(de=P.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    dense: true
  }
}`,...(be=(he=P.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ge,pe,Te;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(Te=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:Te.source}}};var Ce,xe,we;O.parameters={...O.parameters,docs:{...(Ce=O.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(we=(xe=O.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};var fe,Pe,Se;H.parameters={...H.parameters,docs:{...(fe=H.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS2,
    itemsPerPage: 4,
    tableTitle: 'Table Title',
    searchable: true,
    hideHeader: false
  }
}`,...(Se=(Pe=H.parameters)==null?void 0:Pe.docs)==null?void 0:Se.source}}};var Oe,He,Re;R.parameters={...R.parameters,docs:{...(Oe=R.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Re=(He=R.parameters)==null?void 0:He.docs)==null?void 0:Re.source}}};var Me,ke,je;M.parameters={...M.parameters,docs:{...(Me=M.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(je=(ke=M.parameters)==null?void 0:ke.docs)==null?void 0:je.source}}};var De,Ne,Ie;k.parameters={...k.parameters,docs:{...(De=k.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    rows: ROWS,
    columns: COLUMNS.concat(COLUMNS),
    itemsPerPage: 10,
    tableTitle: "Lots of Columns",
    searchable: true
  }
}`,...(Ie=(Ne=k.parameters)==null?void 0:Ne.docs)==null?void 0:Ie.source}}};var ve,Le,Ue;j.parameters={...j.parameters,docs:{...(ve=j.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Ue=(Le=j.parameters)==null?void 0:Le.docs)==null?void 0:Ue.source}}};const cr=["Default","EmptyTable","NoHeader","AddMoreColumnsOnSelect","HoverInfo","FunctionalComponentColumn","OnRowClick","HeaderColored","ConstrainSize","DensePadding","RowHighlight1","RowHighlight2","ColumnHeaderTooltip","ManagedSearchState","ManagedPageState","LotsOfCols","HeaderRender"];export{p as AddMoreColumnsOnSelect,H as ColumnHeaderTooltip,f as ConstrainSize,h as Default,P as DensePadding,b as EmptyTable,C as FunctionalComponentColumn,w as HeaderColored,j as HeaderRender,T as HoverInfo,k as LotsOfCols,M as ManagedPageState,R as ManagedSearchState,g as NoHeader,x as OnRowClick,S as RowHighlight1,O as RowHighlight2,cr as __namedExportsOrder,lr as default};
