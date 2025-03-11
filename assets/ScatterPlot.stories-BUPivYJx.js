import{j as o}from"./jsx-runtime-DiklIkkE.js";import{S as H}from"./scatterplot-BO0SJn0e.js";import"./index-DRjF_FHU.js";import"./Grow-DB9jr4Ai.js";import"./index-DXragnAo.js";const G={title:"ScatterPlot",component:H,tags:["autodocs"],argTypes:{},parameters:{controls:{expanded:!0}}},a=[{x:1,y:2,color:"red",shape:"circle"},{x:3,y:4,color:"blue",shape:"circle"},{x:5,y:6,color:"green",shape:"circle"}],W=[{x:1,y:2,color:"red",shape:"circle"},{x:3,y:4,color:"blue",shape:"circle"},{x:5,y:6,color:"green",shape:"circle"},{x:2,y:2,color:"red",shape:"circle"},{x:4,y:4,color:"blue",shape:"circle"},{x:6,y:6,color:"green",shape:"circle"}],_=[{x:1,y:2,color:"red",shape:"circle"},{x:3,y:4,color:"blue",shape:"triangle"},{x:5,y:6,color:"green",shape:"circle"}],t={defaultOpen:!0,position:{right:50,bottom:50}},i={args:{width:500,height:500,pointData:a,loading:!1,miniMap:t,leftAxisLable:"Y-Axis Label",bottomAxisLabel:"X-Axis Label",disableTooltip:!0}},s={args:{width:500,height:500,pointData:a,loading:!1,miniMap:t,leftAxisLable:"Y-Axis Label",bottomAxisLabel:"X-Axis Label",tooltipBody:e=>o.jsxs("div",{children:[o.jsx("strong",{children:"Point Details:"}),o.jsxs("p",{children:["X: ",e.x]}),o.jsxs("p",{children:["Y: ",e.y]}),o.jsxs("p",{children:["Color: ",e.color]})]})}},n={args:{width:500,height:500,pointData:a,loading:!1,leftAxisLable:"Y-Axis Label",bottomAxisLabel:"X-Axis Label",disableTooltip:!0}},l={args:{width:500,height:500,selectable:!0,onSelectionChange:e=>{window.alert(`You Seleted Points: ${JSON.stringify(e)}`)},pointData:a,loading:!1,miniMap:t,leftAxisLable:"Y-Axis Label",bottomAxisLabel:"X-Axis Label",disableTooltip:!0}},r={args:{width:500,height:500,groupPointsAnchor:"color",pointData:W,loading:!1,miniMap:t,leftAxisLable:"Y-Axis Label",bottomAxisLabel:"X-Axis Label",disableTooltip:!0}},c={args:{width:500,height:500,pointData:_,loading:!1,miniMap:t,leftAxisLable:"Y-Axis Label",bottomAxisLabel:"X-Axis Label",disableTooltip:!0}},p={args:{width:500,height:500,pointData:a,loading:!1,miniMap:t,leftAxisLable:"Y-Axis Label",bottomAxisLabel:"X-Axis Label",disableZoom:!0,disableTooltip:!0}},b={args:{width:500,height:500,pointData:a,loading:!1,miniMap:t,leftAxisLable:"Y-Axis Label",bottomAxisLabel:"X-Axis Label",disableZoom:!0,selectable:!0,onSelectionChange:e=>{window.alert(`You Seleted Points: ${JSON.stringify(e)}`)},disableTooltip:!0}},d={args:{controlsPosition:"bottom",width:500,height:500,pointData:a,loading:!1,miniMap:t,leftAxisLable:"Y-Axis Label",bottomAxisLabel:"X-Axis Label",selectable:!0,onSelectionChange:e=>{window.alert(`You Seleted Points: ${JSON.stringify(e)}`)},disableTooltip:!0}};var m,x,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    width: 500,
    height: 500,
    pointData: scatterData,
    loading: false,
    miniMap: miniMap,
    leftAxisLable: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label",
    disableTooltip: true
  }
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,u,A;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    width: 500,
    height: 500,
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
}`,...(A=(u=s.parameters)==null?void 0:u.docs)==null?void 0:A.source}}};var L,f,D;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    width: 500,
    height: 500,
    pointData: scatterData,
    loading: false,
    leftAxisLable: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label",
    disableTooltip: true
  }
}`,...(D=(f=n.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var S,w,P;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    width: 500,
    height: 500,
    selectable: true,
    onSelectionChange: selectedPoints => {
      window.alert(\`You Seleted Points: \${JSON.stringify(selectedPoints)}\`);
    },
    pointData: scatterData,
    loading: false,
    miniMap: miniMap,
    leftAxisLable: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label",
    disableTooltip: true
  }
}`,...(P=(w=l.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var Y,y,M;r.parameters={...r.parameters,docs:{...(Y=r.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    width: 500,
    height: 500,
    groupPointsAnchor: "color",
    pointData: moreScatterData,
    loading: false,
    miniMap: miniMap,
    leftAxisLable: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label",
    disableTooltip: true
  }
}`,...(M=(y=r.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var X,T,C;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    width: 500,
    height: 500,
    pointData: shapeData,
    loading: false,
    miniMap: miniMap,
    leftAxisLable: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label",
    disableTooltip: true
  }
}`,...(C=(T=c.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var O,Z,j;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    width: 500,
    height: 500,
    pointData: scatterData,
    loading: false,
    miniMap: miniMap,
    leftAxisLable: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label",
    disableZoom: true,
    disableTooltip: true
  }
}`,...(j=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:j.source}}};var J,N,$;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    width: 500,
    height: 500,
    pointData: scatterData,
    loading: false,
    miniMap: miniMap,
    leftAxisLable: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label",
    disableZoom: true,
    selectable: true,
    onSelectionChange: selectedPoints => {
      window.alert(\`You Seleted Points: \${JSON.stringify(selectedPoints)}\`);
    },
    disableTooltip: true
  }
}`,...($=(N=b.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var v,B,E;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    controlsPosition: "bottom",
    width: 500,
    height: 500,
    pointData: scatterData,
    loading: false,
    miniMap: miniMap,
    leftAxisLable: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label",
    selectable: true,
    onSelectionChange: selectedPoints => {
      window.alert(\`You Seleted Points: \${JSON.stringify(selectedPoints)}\`);
    },
    disableTooltip: true
  }
}`,...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};const I=["Default","CustomTooltip","WithoutMiniMap","SelectablePoints","HoverMultiplePoints","OtherShapes","ZoomDisabled","ZoomDisabledButSelectable","ControlsPositioning"];export{d as ControlsPositioning,s as CustomTooltip,i as Default,r as HoverMultiplePoints,c as OtherShapes,l as SelectablePoints,n as WithoutMiniMap,p as ZoomDisabled,b as ZoomDisabledButSelectable,I as __namedExportsOrder,G as default};
