import{j as r}from"./jsx-runtime-DiklIkkE.js";import{B as n}from"./Graph-THqC1Nd4.js";import"./scatterplot-BO0SJn0e.js";import"./Autocomplete-CRwe6uJs.js";/* empty css            */import"./index-DRjF_FHU.js";import"./Grow-DB9jr4Ai.js";import"./index-DXragnAo.js";const k={title:"Button",component:n,tags:["autodocs"],argTypes:{children:{control:{type:"text"}}},parameters:{controls:{expanded:!0}}},t={args:{btheme:"light",bvariant:"outlined"},render:e=>r.jsxs("div",{style:{backgroundColor:e.btheme==="dark"?"#1f1f1f":"#ffffff",padding:"30px"},children:[r.jsx(n,{...e,children:"I'm Enabled."})," ",r.jsx(n,{disabled:!0,...e,children:"I'm Disabled."})]})},a={args:{btheme:"dark",bvariant:"outlined"},render:e=>r.jsxs("div",{style:{backgroundColor:e.btheme==="dark"?"#1f1f1f":"#ffffff",padding:"30px"},children:[r.jsx(n,{...e,children:"I'm Enabled."})," ",r.jsx(n,{disabled:!0,...e,children:"I'm Disabled."})]})};var d,o,s;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    btheme: 'light',
    bvariant: 'outlined'
  },
  render: args => <div style={{
    backgroundColor: args.btheme === 'dark' ? '#1f1f1f' : '#ffffff',
    padding: '30px'
  }}>
    <Button {...args}>I'm Enabled.</Button>&nbsp;
    <Button disabled {...args}>
      I'm Disabled.
    </Button>
  </div>
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,f,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    btheme: 'dark',
    bvariant: 'outlined'
  },
  render: args => <div style={{
    backgroundColor: args.btheme === 'dark' ? '#1f1f1f' : '#ffffff',
    padding: '30px'
  }}>
    <Button {...args}>I'm Enabled.</Button>&nbsp;
    <Button disabled {...args}>
      I'm Disabled.
    </Button>
  </div>
}`,...(l=(f=a.parameters)==null?void 0:f.docs)==null?void 0:l.source}}};const B=["Light","Dark"];export{a as Dark,t as Light,B as __namedExportsOrder,k as default};
