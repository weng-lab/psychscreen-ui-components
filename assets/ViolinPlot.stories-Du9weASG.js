import{j as p}from"./jsx-runtime-CDt2p4po.js";import{V as _}from"./violinPlot-Cw1J1USo.js";import{B as R}from"./Box-tXOfBd2H.js";import{T as q}from"./Typography-Bu_rT7YP.js";import"./index-GiUgBvb1.js";import"./useParentSize-ZnyO9Jw1.js";import"./index-CROobee-.js";const a=[{label:"adipose",data:[4.68,5.72,4.81,10.12,5.07,18.83].map(i=>({value:i})),violinColor:"blue"},{label:"adrenal gland",data:[19.86,23.6,5.04,4.09,23.08,8.15,15.44].map(i=>({value:i})),violinColor:"red"},{label:"blood",data:[5.12,7.42,18.52,23.46,15.41,47.5,32.01,22.78,12.06,27.06,44.23,39.24,29.05,32.5,68.4,28.81,37.65,32.54,9.04,30.29,31.45,43.16,15.51,27.6,37.81,12.44,39.48,35.06,35.31,39.83,20.37,28.68,18.33,27.99,28.04,53.1,37.66,48.59,35.95,38.29,34.55,28.91,49.37].map(i=>({value:i})),violinColor:"orange"},{label:"testis",data:[13.88,9.57].map(i=>({value:i})),violinColor:"green"}],Q={title:"ViolinPlot",component:_,tags:["autodocs"],argTypes:{},parameters:{controls:{expanded:!0}},decorators:[i=>p.jsx("div",{style:{width:850,height:500},children:p.jsx(i,{})})]},n={args:{distributions:a,loading:!1,axisLabel:"Axis Label",labelOrientation:"rightDiagonal"}},o={args:{distributions:a,loading:!1,axisLabel:"Axis Label",labelOrientation:"rightDiagonal",violinProps:{bandwidth:"scott"}}},t={args:{distributions:a,loading:!1,axisLabel:"Axis Label",labelOrientation:"rightDiagonal",crossProps:{outliers:"none"}}},s={args:{distributions:a,loading:!1,axisLabel:"Axis Label",labelOrientation:"rightDiagonal",violinProps:{bandwidth:"scott",showAllPoints:!0,jitter:20}}},e={args:{distributions:a,loading:!1,axisLabel:"Axis Label",labelOrientation:"rightDiagonal",violinProps:{pointDisplayThreshold:7}}},r={args:{distributions:a,loading:!1,axisLabel:"Axis Label",labelOrientation:"rightDiagonal",disableViolinPlot:!0}},l={args:{distributions:a,loading:!1,axisLabel:"Axis Label",labelOrientation:"rightDiagonal",disableCrossPlot:!0}},d={args:{distributions:a,loading:!1,axisLabel:"Axis Label",labelOrientation:"rightDiagonal",violinProps:{showAllPoints:!0,jitter:20},onViolinClicked:i=>{window.alert(`Clicked distribution: ${JSON.stringify(i)}`)},onPointClicked:i=>{window.alert(`Clicked point: ${JSON.stringify(i)}`)}}},g={args:{distributions:a,loading:!1,axisLabel:"Axis Label",labelOrientation:"rightDiagonal",violinProps:{showAllPoints:!0,jitter:20},pointTooltipBody:i=>p.jsx(R,{sx:{textAlign:"center",p:1},children:p.jsxs(q,{children:["Custom Tooltip: ",i.value]})})}};var c,b,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    distributions: testData,
    loading: false,
    axisLabel: "Axis Label",
    labelOrientation: "rightDiagonal"
  }
}`,...(u=(b=n.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var m,x,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    distributions: testData,
    loading: false,
    axisLabel: "Axis Label",
    labelOrientation: "rightDiagonal",
    violinProps: {
      bandwidth: "scott"
    }
  }
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var L,D,P;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    distributions: testData,
    loading: false,
    axisLabel: "Axis Label",
    labelOrientation: "rightDiagonal",
    crossProps: {
      outliers: "none"
    }
  }
}`,...(P=(D=t.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var f,O,A;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    distributions: testData,
    loading: false,
    axisLabel: "Axis Label",
    labelOrientation: "rightDiagonal",
    violinProps: {
      bandwidth: "scott",
      showAllPoints: true,
      jitter: 20
    }
  }
}`,...(A=(O=s.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var w,y,C;e.parameters={...e.parameters,docs:{...(w=e.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    distributions: testData,
    loading: false,
    axisLabel: "Axis Label",
    labelOrientation: "rightDiagonal",
    violinProps: {
      pointDisplayThreshold: 7
    }
  }
}`,...(C=(y=e.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var v,S,T;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    distributions: testData,
    loading: false,
    axisLabel: "Axis Label",
    labelOrientation: "rightDiagonal",
    disableViolinPlot: true
  }
}`,...(T=(S=r.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var j,V,k;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    distributions: testData,
    loading: false,
    axisLabel: "Axis Label",
    labelOrientation: "rightDiagonal",
    disableCrossPlot: true
  }
}`,...(k=(V=l.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var B,J,N;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    distributions: testData,
    loading: false,
    axisLabel: "Axis Label",
    labelOrientation: "rightDiagonal",
    violinProps: {
      showAllPoints: true,
      jitter: 20
    },
    onViolinClicked: distribution => {
      window.alert(\`Clicked distribution: \${JSON.stringify(distribution)}\`);
    },
    onPointClicked: point => {
      window.alert(\`Clicked point: \${JSON.stringify(point)}\`);
    }
  }
}`,...(N=(J=d.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};var $,E,W;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    distributions: testData,
    loading: false,
    axisLabel: "Axis Label",
    labelOrientation: "rightDiagonal",
    violinProps: {
      showAllPoints: true,
      jitter: 20
    },
    pointTooltipBody: point => {
      return <Box sx={{
        textAlign: "center",
        p: 1
      }}>
                  <Typography>Custom Tooltip: {point.value}</Typography>
                </Box>;
    }
  }
}`,...(W=(E=g.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};const U=["Default","Bandwidth","NoOutliers","ShowPointsWithJitter","PointDisplayThreshold","CrossOnly","ViolinOnly","ViolinAndPointClick","CustomPointTooltip"];export{o as Bandwidth,r as CrossOnly,g as CustomPointTooltip,n as Default,t as NoOutliers,e as PointDisplayThreshold,s as ShowPointsWithJitter,d as ViolinAndPointClick,l as ViolinOnly,U as __namedExportsOrder,Q as default};
