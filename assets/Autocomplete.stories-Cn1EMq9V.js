import{j as t}from"./jsx-runtime-DiklIkkE.js";import{G,T as L,S as R,B as b}from"./Autocomplete-Q3mDnly6.js";import"./index-DRjF_FHU.js";import"./Grow-DQG7xyK7.js";import"./index-Bx0Ph3cE.js";const q={title:"Autocomplete",component:G,tags:["autodocs"]},o={args:{assembly:"GRCh38",onSearchSubmit:e=>console.log("Going to",e),queries:["Gene","SNP","iCRE","cCRE","Coordinate"],ccreLimit:3,geneLimit:3,icreLimit:3,snpLimit:3,style:{},sx:{width:300},slots:{},slotProps:{}}},s={args:{assembly:"GRCh38",onSearchSubmit:e=>console.log("Going to",e.title),queries:["Gene","SNP","iCRE","cCRE","Coordinate"],ccreLimit:3,geneLimit:3,icreLimit:3,snpLimit:3,style:{},sx:{width:300},slots:{input:t.jsx(L,{label:"Search",variant:"standard",color:"secondary"})}}},i={args:{assembly:"GRCh38",onSearchSubmit:e=>console.log("Going to",e.title),queries:["Gene","SNP","iCRE","cCRE","Coordinate"],ccreLimit:3,geneLimit:3,icreLimit:3,snpLimit:3,style:{},sx:{width:400},slots:{},slotProps:{button:{variant:"contained",startIcon:t.jsx(R,{}),color:"secondary",children:"Search",sx:{paddingInline:3}}}}},r={args:{assembly:"GRCh38",onSearchSubmit:e=>console.log("Going to",e.title),queries:["Gene","SNP","iCRE","cCRE","Coordinate"],ccreLimit:3,geneLimit:3,icreLimit:3,snpLimit:3,style:{},sx:{width:400},slots:{button:t.jsx(b,{variant:"contained",color:"secondary",startIcon:t.jsx(R,{}),sx:{paddingInline:3},children:"Search"}),input:t.jsx(L,{label:"Search",variant:"standard",color:"secondary"})},slotProps:{}}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    assembly: 'GRCh38',
    onSearchSubmit: (r: Result) => console.log('Going to', r),
    queries: ["Gene", "SNP", "iCRE", "cCRE", "Coordinate"],
    ccreLimit: 3,
    geneLimit: 3,
    icreLimit: 3,
    snpLimit: 3,
    style: {},
    sx: {
      width: 300
    },
    slots: {},
    slotProps: {}
  }
}`,...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,m,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    assembly: 'GRCh38',
    onSearchSubmit: (r: Result) => console.log('Going to', r.title),
    queries: ["Gene", "SNP", "iCRE", "cCRE", "Coordinate"],
    ccreLimit: 3,
    geneLimit: 3,
    icreLimit: 3,
    snpLimit: 3,
    style: {},
    sx: {
      width: 300
    },
    slots: {
      input: <TextField label="Search" variant="standard" color="secondary" />
    }
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,p,S;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    assembly: 'GRCh38',
    onSearchSubmit: (r: Result) => console.log('Going to', r.title),
    queries: ["Gene", "SNP", "iCRE", "cCRE", "Coordinate"],
    ccreLimit: 3,
    geneLimit: 3,
    icreLimit: 3,
    snpLimit: 3,
    style: {},
    sx: {
      width: 400
    },
    slots: {},
    slotProps: {
      button: {
        variant: 'contained',
        startIcon: <SearchIcon />,
        color: 'secondary',
        children: "Search",
        sx: {
          paddingInline: 3
        }
      }
    }
  }
}`,...(S=(p=i.parameters)==null?void 0:p.docs)==null?void 0:S.source}}};var g,h,C;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    assembly: 'GRCh38',
    onSearchSubmit: (r: Result) => console.log('Going to', r.title),
    queries: ["Gene", "SNP", "iCRE", "cCRE", "Coordinate"],
    ccreLimit: 3,
    geneLimit: 3,
    icreLimit: 3,
    snpLimit: 3,
    style: {},
    sx: {
      width: 400
    },
    slots: {
      button: <Button variant="contained" color="secondary" startIcon={<SearchIcon />} sx={{
        paddingInline: 3
      }}>Search</Button>,
      input: <TextField label="Search" variant="standard" color="secondary" />
    },
    slotProps: {}
  }
}`,...(C=(h=r.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const v=["Default","InputSlot","ButtonSlotProps","ButtonAndInputSlot"];export{r as ButtonAndInputSlot,i as ButtonSlotProps,o as Default,s as InputSlot,v as __namedExportsOrder,q as default};
