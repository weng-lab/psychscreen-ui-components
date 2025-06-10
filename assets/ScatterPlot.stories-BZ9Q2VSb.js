import{j as a}from"./jsx-runtime-CDt2p4po.js";import{S as x}from"./scatterplot-CcFg2cKb.js";import"./index-GiUgBvb1.js";import"./Box-tXOfBd2H.js";import"./Grow-T4q3YgyY.js";import"./index-CROobee-.js";import"./useParentSize-1UGC14_K.js";const ie={title:"ScatterPlot",component:x,tags:["autodocs"],argTypes:{},parameters:{controls:{expanded:!0}},decorators:[e=>a.jsx("div",{style:{width:850,height:500},children:a.jsx(e,{})})]},n=[{x:1,y:2,color:"red",shape:"circle"},{x:3,y:4,color:"blue",shape:"circle"},{x:5,y:6,color:"green",shape:"circle"}],I=[{x:1,y:2,color:"red",shape:"circle"},{x:3,y:4,color:"blue",shape:"circle"},{x:5,y:6,color:"green",shape:"circle"},{x:2,y:2,color:"red",shape:"circle"},{x:4,y:4,color:"blue",shape:"circle"},{x:6,y:6,color:"green",shape:"circle"}],K=[{x:1,y:2,color:"red",shape:"circle"},{x:3,y:4,color:"blue",shape:"triangle"},{x:5,y:6,color:"green",shape:"circle"}],t={position:{right:50,bottom:50}},i={args:{pointData:n,loading:!1,miniMap:t,leftAxisLabel:"Y-Axis Label",bottomAxisLabel:"X-Axis Label",disableTooltip:!0,initialState:{minimap:{open:!0},controls:{selectionType:"pan"}}},render:()=>a.jsx(x,{pointData:n,loading:!1,leftAxisLabel:"",bottomAxisLabel:"",miniMap:t,disableTooltip:!0,initialState:{minimap:{open:!0},controls:{selectionType:"pan"}}})},o={args:{pointData:n,loading:!1,miniMap:t,leftAxisLabel:"Y-Axis Label",bottomAxisLabel:"X-Axis Label",tooltipBody:e=>a.jsxs("div",{children:[a.jsx("strong",{children:"Point Details:"}),a.jsxs("p",{children:["X: ",e.x]}),a.jsxs("p",{children:["Y: ",e.y]}),a.jsxs("p",{children:["Color: ",e.color]})]}),initialState:{minimap:{open:!0},controls:{selectionType:"pan"}}}},s={args:{pointData:n,loading:!1,leftAxisLabel:"Y-Axis Label",bottomAxisLabel:"X-Axis Label",disableTooltip:!0}},l={args:{selectable:!0,onSelectionChange:e=>{window.alert(`You Seleted Points: ${JSON.stringify(e)}`)},pointData:n,loading:!1,miniMap:t,leftAxisLabel:"Y-Axis Label",bottomAxisLabel:"X-Axis Label",disableTooltip:!0,initialState:{minimap:{open:!0},controls:{selectionType:"pan"}}}},r={args:{onPointClicked:e=>{window.alert(`You Seleted Point: ${JSON.stringify(e)}`)},pointData:n,loading:!1,miniMap:t,leftAxisLabel:"Y-Axis Label",bottomAxisLabel:"X-Axis Label",disableTooltip:!0,initialState:{minimap:{open:!0},controls:{selectionType:"pan"}}}},p={args:{groupPointsAnchor:"color",pointData:I,loading:!1,miniMap:t,leftAxisLabel:"Y-Axis Label",bottomAxisLabel:"X-Axis Label",disableTooltip:!0,initialState:{minimap:{open:!0},controls:{selectionType:"pan"}}}},c={args:{pointData:K,loading:!1,miniMap:t,leftAxisLabel:"Y-Axis Label",bottomAxisLabel:"X-Axis Label",disableTooltip:!0,initialState:{minimap:{open:!0},controls:{selectionType:"pan"}}}},b={args:{pointData:n,loading:!1,miniMap:t,leftAxisLabel:"Y-Axis Label",bottomAxisLabel:"X-Axis Label",disableZoom:!0,disableTooltip:!0,initialState:{minimap:{open:!0},controls:{selectionType:"none"}}},render:()=>a.jsx(x,{pointData:n,loading:!1,leftAxisLabel:"",bottomAxisLabel:"",miniMap:t,disableTooltip:!0,disableZoom:!0,initialState:{minimap:{open:!0},controls:{selectionType:"none"}}})},m={args:{pointData:n,loading:!1,miniMap:t,leftAxisLabel:"Y-Axis Label",bottomAxisLabel:"X-Axis Label",disableZoom:!0,selectable:!0,onSelectionChange:e=>{window.alert(`You Seleted Points: ${JSON.stringify(e)}`)},disableTooltip:!0,initialState:{minimap:{open:!0},controls:{selectionType:"select"}}}},d={args:{controlsPosition:"bottom",pointData:n,loading:!1,miniMap:t,leftAxisLabel:"Y-Axis Label",bottomAxisLabel:"X-Axis Label",selectable:!0,onSelectionChange:e=>{window.alert(`You Seleted Points: ${JSON.stringify(e)}`)},disableTooltip:!0,initialState:{minimap:{open:!0},controls:{selectionType:"pan"}}}},u={args:{controlsHighlight:"red",pointData:n,loading:!1,miniMap:t,leftAxisLabel:"Y-Axis Label",bottomAxisLabel:"X-Axis Label",selectable:!0,onSelectionChange:e=>{window.alert(`You Seleted Points: ${JSON.stringify(e)}`)},disableTooltip:!0,initialState:{minimap:{open:!0},controls:{selectionType:"pan"}}}};var g,A,L;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    pointData: scatterData,
    loading: false,
    miniMap: miniMap,
    leftAxisLabel: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label",
    disableTooltip: true,
    initialState: {
      minimap: {
        open: true
      },
      controls: {
        selectionType: "pan"
      }
    }
  },
  render: () => {
    return <ScatterPlot pointData={scatterData} loading={false} leftAxisLabel="" bottomAxisLabel="" miniMap={miniMap} disableTooltip initialState={{
      minimap: {
        open: true
      },
      controls: {
        selectionType: "pan"
      }
    }} />;
  }
}`,...(L=(A=i.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var S,f,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    pointData: scatterData,
    loading: false,
    miniMap: miniMap,
    leftAxisLabel: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label",
    tooltipBody: point => <div>
                <strong>Point Details:</strong>
                <p>X: {point.x}</p>
                <p>Y: {point.y}</p>
                <p>Color: {point.color}</p>
            </div>,
    initialState: {
      minimap: {
        open: true
      },
      controls: {
        selectionType: "pan"
      }
    }
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var T,D,h;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    pointData: scatterData,
    loading: false,
    leftAxisLabel: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label",
    disableTooltip: true
  }
}`,...(h=(D=s.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var P,Y,M;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    selectable: true,
    onSelectionChange: selectedPoints => {
      window.alert(\`You Seleted Points: \${JSON.stringify(selectedPoints)}\`);
    },
    pointData: scatterData,
    loading: false,
    miniMap: miniMap,
    leftAxisLabel: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label",
    disableTooltip: true,
    initialState: {
      minimap: {
        open: true
      },
      controls: {
        selectionType: "pan"
      }
    }
  }
}`,...(M=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:M.source}}};var X,w,C;r.parameters={...r.parameters,docs:{...(X=r.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    onPointClicked: point => {
      window.alert(\`You Seleted Point: \${JSON.stringify(point)}\`);
    },
    pointData: scatterData,
    loading: false,
    miniMap: miniMap,
    leftAxisLabel: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label",
    disableTooltip: true,
    initialState: {
      minimap: {
        open: true
      },
      controls: {
        selectionType: "pan"
      }
    }
  }
}`,...(C=(w=r.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var O,j,J;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    groupPointsAnchor: "color",
    pointData: moreScatterData,
    loading: false,
    miniMap: miniMap,
    leftAxisLabel: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label",
    disableTooltip: true,
    initialState: {
      minimap: {
        open: true
      },
      controls: {
        selectionType: "pan"
      }
    }
  }
}`,...(J=(j=p.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};var N,Z,$;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    pointData: shapeData,
    loading: false,
    miniMap: miniMap,
    leftAxisLabel: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label",
    disableTooltip: true,
    initialState: {
      minimap: {
        open: true
      },
      controls: {
        selectionType: "pan"
      }
    }
  }
}`,...($=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var v,H,k;b.parameters={...b.parameters,docs:{...(v=b.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    pointData: scatterData,
    loading: false,
    miniMap: miniMap,
    leftAxisLabel: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label",
    disableZoom: true,
    disableTooltip: true,
    initialState: {
      minimap: {
        open: true
      },
      controls: {
        selectionType: "none"
      }
    }
  },
  render: () => {
    return <ScatterPlot pointData={scatterData} loading={false} leftAxisLabel="" bottomAxisLabel="" miniMap={miniMap} disableTooltip disableZoom initialState={{
      minimap: {
        open: true
      },
      controls: {
        selectionType: "none"
      }
    }} />;
  }
}`,...(k=(H=b.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var B,E,W;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    pointData: scatterData,
    loading: false,
    miniMap: miniMap,
    leftAxisLabel: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label",
    disableZoom: true,
    selectable: true,
    onSelectionChange: selectedPoints => {
      window.alert(\`You Seleted Points: \${JSON.stringify(selectedPoints)}\`);
    },
    disableTooltip: true,
    initialState: {
      minimap: {
        open: true
      },
      controls: {
        selectionType: "select"
      }
    }
  }
}`,...(W=(E=m.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var _,R,q;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    controlsPosition: "bottom",
    pointData: scatterData,
    loading: false,
    miniMap: miniMap,
    leftAxisLabel: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label",
    selectable: true,
    onSelectionChange: selectedPoints => {
      window.alert(\`You Seleted Points: \${JSON.stringify(selectedPoints)}\`);
    },
    disableTooltip: true,
    initialState: {
      minimap: {
        open: true
      },
      controls: {
        selectionType: "pan"
      }
    }
  }
}`,...(q=(R=d.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var z,F,G;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    controlsHighlight: "red",
    pointData: scatterData,
    loading: false,
    miniMap: miniMap,
    leftAxisLabel: "Y-Axis Label",
    bottomAxisLabel: "X-Axis Label",
    selectable: true,
    onSelectionChange: selectedPoints => {
      window.alert(\`You Seleted Points: \${JSON.stringify(selectedPoints)}\`);
    },
    disableTooltip: true,
    initialState: {
      minimap: {
        open: true
      },
      controls: {
        selectionType: "pan"
      }
    }
  }
}`,...(G=(F=u.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const oe=["Default","CustomTooltip","WithoutMiniMap","SelectablePoints","ClickablePoints","HoverMultiplePoints","OtherShapes","ZoomDisabled","ZoomDisabledButSelectable","ControlsPositioning","ControlsHighlight"];export{r as ClickablePoints,u as ControlsHighlight,d as ControlsPositioning,o as CustomTooltip,i as Default,p as HoverMultiplePoints,c as OtherShapes,l as SelectablePoints,s as WithoutMiniMap,b as ZoomDisabled,m as ZoomDisabledButSelectable,oe as __namedExportsOrder,ie as default};
