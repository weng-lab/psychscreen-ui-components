import{j as e}from"./jsx-runtime-CDt2p4po.js";import{B as t}from"./Graph-D7T6PYII.js";import"./scatterplot-CcFg2cKb.js";import"./Autocomplete-CL-ytkHN.js";import"./violinPlot-CGqZlRo3.js";/* empty css            */import"./index-GiUgBvb1.js";import"./Grow-T4q3YgyY.js";import"./Box-tXOfBd2H.js";import"./index-CROobee-.js";import"./Typography-Bu_rT7YP.js";import"./useParentSize-1UGC14_K.js";const I={title:"Button",component:t,tags:["autodocs"],argTypes:{children:{control:{type:"text"}}},parameters:{controls:{expanded:!0}}},n={args:{btheme:"light",bvariant:"outlined"},render:r=>e.jsxs("div",{style:{backgroundColor:r.btheme==="dark"?"#1f1f1f":"#ffffff",padding:"30px"},children:[e.jsx(t,{...r,children:"I'm Enabled."})," ",e.jsx(t,{disabled:!0,...r,children:"I'm Disabled."})]})},a={args:{btheme:"dark",bvariant:"outlined"},render:r=>e.jsxs("div",{style:{backgroundColor:r.btheme==="dark"?"#1f1f1f":"#ffffff",padding:"30px"},children:[e.jsx(t,{...r,children:"I'm Enabled."})," ",e.jsx(t,{disabled:!0,...r,children:"I'm Disabled."})]})};var o,d,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(d=n.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var i,m,f;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(f=(m=a.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const y=["Light","Dark"];export{a as Dark,n as Light,y as __namedExportsOrder,I as default};
