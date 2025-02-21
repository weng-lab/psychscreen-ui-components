import{j as a}from"./jsx-runtime-DiklIkkE.js";import{S as X}from"./scatterplot-BlqOBqv8.js";import"./index-DRjF_FHU.js";import"./index-DXragnAo.js";const E={title:"ScatterPlot",component:X,tags:["autodocs"],argTypes:{},parameters:{controls:{expanded:!0}}},c=[{x:1,y:2,color:"red",shape:"circle"},{x:3,y:4,color:"blue",shape:"circle"},{x:5,y:6,color:"green",shape:"circle"}],j=[{x:1,y:2,color:"red",shape:"circle"},{x:3,y:4,color:"blue",shape:"circle"},{x:5,y:6,color:"green",shape:"circle"},{x:2,y:2,color:"red",shape:"circle"},{x:4,y:4,color:"blue",shape:"circle"},{x:6,y:6,color:"green",shape:"circle"}],C=[{x:1,y:2,color:"red",shape:"circle"},{x:3,y:4,color:"blue",shape:"triangle"},{x:5,y:6,color:"green",shape:"circle"}],t={show:!0,defaultOpen:!0,position:{right:50,bottom:50}},o={args:{width:400,height:400,pointData:c,loading:!1,miniMap:t,leftAxisLable:"Y-Axis Label",bottomAxisLabel:"X-Axis Label"}},s={args:{width:400,height:400,pointData:c,loading:!1,miniMap:t,leftAxisLable:"Y-Axis Label",bottomAxisLabel:"X-Axis Label",tooltipBody:e=>a.jsxs("div",{children:[a.jsx("strong",{children:"Point Details:"}),a.jsxs("p",{children:["X: ",e.x]}),a.jsxs("p",{children:["Y: ",e.y]}),a.jsxs("p",{children:["Color: ",e.color]})]})}},i={args:{width:400,height:400,pointData:c,loading:!1,miniMap:{show:!1},leftAxisLable:"Y-Axis Label",bottomAxisLabel:"X-Axis Label"}},n={args:{width:400,height:400,selectable:!0,onSelectionChange:e=>{window.alert(`You Seleted Points: ${JSON.stringify(e)}`)},pointData:c,loading:!1,miniMap:t,leftAxisLable:"Y-Axis Label",bottomAxisLabel:"X-Axis Label"}},r={args:{width:400,height:400,groupPointsAnchor:"color",pointData:j,loading:!1,miniMap:t,leftAxisLable:"Y-Axis Label",bottomAxisLabel:"X-Axis Label"}},l={args:{width:400,height:400,pointData:C,loading:!1,miniMap:t,leftAxisLable:"Y-Axis Label",bottomAxisLabel:"X-Axis Label"}};var p,x,b;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    width: 400,
    height: 400,
    pointData: scatterData,
    loading: false,
    miniMap: miniMap,
    leftAxisLable: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label"
  }
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var d,h,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    width: 400,
    height: 400,
    pointData: scatterData,
    loading: false,
    miniMap: miniMap,
    leftAxisLable: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label",
    tooltipBody: point => <div>
                <strong>Point Details:</strong>
                <p>X: {point.x}</p>
                <p>Y: {point.y}</p>
                <p>Color: {point.color}</p>
            </div>
  }
}`,...(m=(h=s.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var g,A,L;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    width: 400,
    height: 400,
    pointData: scatterData,
    loading: false,
    miniMap: {
      show: false
    },
    leftAxisLable: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label"
  }
}`,...(L=(A=i.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var u,f,D;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    width: 400,
    height: 400,
    selectable: true,
    onSelectionChange: selectedPoints => {
      window.alert(\`You Seleted Points: \${JSON.stringify(selectedPoints)}\`);
    },
    pointData: scatterData,
    loading: false,
    miniMap: miniMap,
    leftAxisLable: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label"
  }
}`,...(D=(f=n.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var S,w,y;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    width: 400,
    height: 400,
    groupPointsAnchor: "color",
    pointData: moreScatterData,
    loading: false,
    miniMap: miniMap,
    leftAxisLable: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label"
  }
}`,...(y=(w=r.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var M,Y,P;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    width: 400,
    height: 400,
    pointData: shapeData,
    loading: false,
    miniMap: miniMap,
    leftAxisLable: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label"
  }
}`,...(P=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:P.source}}};const H=["Default","CustomTooltip","WithoutMiniMap","SelectablePoints","HoverMultiplePoints","OtherShapes"];export{s as CustomTooltip,o as Default,r as HoverMultiplePoints,l as OtherShapes,n as SelectablePoints,i as WithoutMiniMap,H as __namedExportsOrder,E as default};
