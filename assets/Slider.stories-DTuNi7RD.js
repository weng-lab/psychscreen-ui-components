import{j as e}from"./jsx-runtime-CDt2p4po.js";import{R as l}from"./index-GiUgBvb1.js";import{R as g}from"./Graph-Dr3YgECm.js";import"./scatterplot-DOCenyG3.js";import{B as k}from"./Autocomplete-CL-ytkHN.js";import"./violinPlot-CrIJkFj9.js";/* empty css            */import{T as u}from"./Typography-Bu_rT7YP.js";import"./Grow-T4q3YgyY.js";import"./Box-tXOfBd2H.js";import"./index-CROobee-.js";import"./useParentSize-ZnyO9Jw1.js";const G={title:"RangeSlider",component:g,tags:["autodocs"],parameters:{controls:{expanded:!0}}},i={args:{title:"DNase Z-score",width:250,defaultStart:1.64,defaultEnd:10,min:-10,max:10,minDistance:1,step:.01}},d={args:{title:"Width Test",width:"100%",defaultStart:1.64,defaultEnd:10,min:-10,max:10,minDistance:1,step:.01}},m={args:{title:"Let's extract the value",width:250,min:0,max:10,defaultStart:3,defaultEnd:7,minDistance:1,step:.5},render:o=>{const[a,r]=l.useState(0),[s,n]=l.useState(0);return e.jsxs(e.Fragment,{children:[e.jsx(g,{...o,onSliderChange:t=>{r(t[0]),n(t[1])}}),e.jsxs(u,{children:["Value 0 = ",a]}),e.jsxs(u,{children:["Value 1 = ",s]})]})}},c={args:{title:"Let's extract the value",width:250,min:0,max:10,defaultStart:3,defaultEnd:7,minDistance:1,step:.5},render:o=>{const[a,r]=l.useState(0),[s,n]=l.useState(0);return e.jsxs(e.Fragment,{children:[e.jsx(g,{...o,onSliderChangeCommitted:t=>{r(t[0]),n(t[1])}}),e.jsxs(u,{children:["Value 0 = ",a]}),e.jsxs(u,{children:["Value 1 = ",s]})]})}},p={args:{title:"You can reset this value externally",width:250,min:-10,max:10,minDistance:1,step:.5},render:o=>{const[a,r]=l.useState(-10),[s,n]=l.useState(10);return e.jsxs(e.Fragment,{children:[e.jsx(g,{...o,value:[a,s],onSliderChangeCommitted:t=>{r(t[0]),n(t[1])}}),e.jsxs(u,{children:["Value 0 = ",a]}),e.jsxs(u,{children:["Value 1 = ",s]}),e.jsx(k,{onClick:()=>{r(-10),n(10)},children:"Set back to defaults"})]})}};var h,S,v;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'DNase Z-score',
    width: 250,
    defaultStart: 1.64,
    defaultEnd: 10,
    min: -10,
    max: 10,
    minDistance: 1,
    step: 0.01
  }
}`,...(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var x,V,y;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Width Test',
    width: '100%',
    defaultStart: 1.64,
    defaultEnd: 10,
    min: -10,
    max: 10,
    minDistance: 1,
    step: 0.01
  }
}`,...(y=(V=d.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};var f,T,C;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: "Let's extract the value",
    width: 250,
    min: 0,
    max: 10,
    defaultStart: 3,
    defaultEnd: 7,
    minDistance: 1,
    step: 0.5
  },
  render: args => {
    const [value0, setValue0] = React.useState<number>(0);
    const [value1, setValue1] = React.useState<number>(0);
    return <>
        <RangeSlider {...args} onSliderChange={value => {
        setValue0(value[0]);
        setValue1(value[1]);
      }} />
        <Typography>
          Value 0 = {value0}
        </Typography>
        <Typography>
          Value 1 = {value1}
        </Typography>
      </>;
  }
}`,...(C=(T=m.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var j,R,D;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: "Let's extract the value",
    width: 250,
    min: 0,
    max: 10,
    defaultStart: 3,
    defaultEnd: 7,
    minDistance: 1,
    step: 0.5
  },
  render: args => {
    const [value0, setValue0] = React.useState<number>(0);
    const [value1, setValue1] = React.useState<number>(0);
    return <>
        <RangeSlider {...args} onSliderChangeCommitted={value => {
        setValue0(value[0]);
        setValue1(value[1]);
      }} />
        <Typography>
          Value 0 = {value0}
        </Typography>
        <Typography>
          Value 1 = {value1}
        </Typography>
      </>;
  }
}`,...(D=(R=c.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var w,E,b;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: "You can reset this value externally",
    width: 250,
    min: -10,
    max: 10,
    minDistance: 1,
    step: 0.5
  },
  render: args => {
    const [value0, setValue0] = React.useState<number>(-10);
    const [value1, setValue1] = React.useState<number>(10);
    return <>
        <RangeSlider {...args} value={[value0, value1]} onSliderChangeCommitted={value => {
        setValue0(value[0]);
        setValue1(value[1]);
      }} />
        <Typography>
          Value 0 = {value0}
        </Typography>
        <Typography>
          Value 1 = {value1}
        </Typography>
        <Button onClick={() => {
        setValue0(-10);
        setValue1(10);
      }}>Set back to defaults</Button>
      </>;
  }
}`,...(b=(E=p.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};const H=["Default","WidthTest","onSliderChange","onSliderCommit","managedValue"];export{i as Default,d as WidthTest,H as __namedExportsOrder,G as default,p as managedValue,m as onSliderChange,c as onSliderCommit};
