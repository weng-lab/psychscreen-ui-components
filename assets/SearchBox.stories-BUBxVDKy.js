import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as o}from"./index-DRjF_FHU.js";import{S as v,G as s,a as c}from"./Graph-THqC1Nd4.js";import"./scatterplot-BO0SJn0e.js";import"./Autocomplete-CRwe6uJs.js";/* empty css            */import"./Grow-DB9jr4Ai.js";import"./index-DXragnAo.js";function d(){const{innerWidth:t,innerHeight:r}=window;return{width:t,height:r}}function f(){const[t,r]=o.useState(d());return o.useEffect(()=>{const a=()=>{r(d())};return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),t}const W=()=>{console.log("on search ")},h=[{name:"Disease/Trait",value:"disease",helperText:"e.g. schizophrenia, years of education"},{name:"Gene/b-cCRE",value:"gene",helperText:"e.g. APOE, PPIF1"},{name:"SNP/QTL",value:"SNP",helperText:"e.g. rs2836883, rs7690700"}],G={title:"SearchBox",component:v,tags:["autodocs"],argTypes:{children:{control:{type:"text"}}},parameters:{controls:{expanded:!0}}},i={args:{onSearchButtonClick:W}},n={args:{},render:t=>{const{width:r}=f();return e.jsxs(s,{container:!0,children:[e.jsxs(s,{size:6,children:[e.jsx("strong",{children:"Non-Reactive"}),e.jsx("br",{}),e.jsx(c,{selectOptions:h,label:"What can we help you find?",variant:"standard",...t})]}),e.jsxs(s,{size:6,children:[e.jsxs("strong",{children:["Reactive (at width <800px; current width is ",r/2,")"]}),e.jsx("br",{}),e.jsx(c,{selectOptions:h,label:"What can we help you find?",variant:"standard",reactiveThreshold:800,reactiveWidth:305,containerWidth:r/2,...t})]})]})}};var l,p,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    onSearchButtonClick: onSearch
  }
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,S,x,w,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const {
      width
    } = useViewportSize();
    return <Grid container>
        <Grid size={6}>
          <strong>Non-Reactive</strong><br />
          <SearchBoxWithSelect selectOptions={SELECT_OPTIONS} label="What can we help you find?" variant="standard" {...args} />
        </Grid>
        <Grid size={6}>
          <strong>Reactive (at width &lt;800px; current width is {width / 2})</strong><br />
          <SearchBoxWithSelect selectOptions={SELECT_OPTIONS} label="What can we help you find?" variant="standard" reactiveThreshold={800} reactiveWidth={305} containerWidth={width / 2} {...args} />
        </Grid>
      </Grid>;
  }
}`,...(x=(S=n.parameters)==null?void 0:S.docs)==null?void 0:x.source},description:{story:`This is not good practice, since SearchBoxWithSelect is a separate component
it needs it's own meta defined to properly type args (only one meta can be defined and exported per file).
Without overriding with render(), SearchBox would be rendered`,...(g=(w=n.parameters)==null?void 0:w.docs)==null?void 0:g.description}}};const P=["Default","WithSelect"];export{i as Default,n as WithSelect,P as __namedExportsOrder,G as default};
