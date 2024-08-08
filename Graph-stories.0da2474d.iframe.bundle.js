"use strict";(self.webpackChunk_weng_lab_psychscreen_ui_components=self.webpackChunk_weng_lab_psychscreen_ui_components||[]).push([[465],{"./stories/Graph.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DifferentColor:()=>DifferentColor,DifferentLabel:()=>DifferentLabel,DifferentOrder:()=>DifferentOrder,FiftyPercent:()=>FiftyPercent,NoLegendToggle:()=>NoLegendToggle,PilotDataWithCentered:()=>PilotDataWithCentered,PilotDataWithoutCentered:()=>PilotDataWithoutCentered,SampleGraph:()=>SampleGraph,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Graph_stories});__webpack_require__("./node_modules/react/index.js");var src=__webpack_require__("./src/index.ts");const data2_namespaceObject=JSON.parse('{"p":{"edge":[{"from":"node_1","to":"node_2","effectSize":0.1134,"category":"hello","id":1},{"from":"node_3","to":"node_2","effectSize":0.5,"category":"hi","id":2}],"node":[{"id":"node_1","category":"R"},{"id":"node_2","category":"B"},{"id":"node_3","category":"P"}]}}'),data3_namespaceObject=JSON.parse('{"p":{"edge":[{"from":"EH38E3291096","to":"EH38E1939823","effectSize":0.1134,"category":"lower-expression","id":1},{"from":"EH38E1939823","to":"EH38E1939823","effectSize":0.1933,"category":"lower-expression","id":2},{"from":"EH38E3291121","to":"EH38E1939823","effectSize":0.0545,"category":"lower-expression","id":3},{"from":"EH38E3291122","to":"EH38E1939823","effectSize":0.0665,"category":"lower-expression","id":4},{"from":"EH38E3291358","to":"EH38E1939823","effectSize":0.0674,"category":"lower-expression","id":5},{"from":"EH38E3291271","to":"EH38E3291279","effectSize":0.0381,"category":"lower-expression","id":6},{"from":"EH38E3291279","to":"EH38E3291279","effectSize":0.1667,"category":"lower-expression","id":7},{"from":"EH38E3291358","to":"EH38E3291279","effectSize":0.0478,"category":"lower-expression","id":8},{"from":"EH38E3291174","to":"EH38E3291410","effectSize":0.0504,"category":"lower-expression","id":9},{"from":"EH38E4193273","to":"EH38E3291410","effectSize":0.0507,"category":"lower-expression","id":10},{"from":"EH38E3291358","to":"EH38E3291410","effectSize":0.0895,"category":"lower-expression","id":11},{"from":"EH38E3291392","to":"EH38E3291410","effectSize":0.0352,"category":"lower-expression","id":12},{"from":"EH38E3291410","to":"EH38E3291410","effectSize":0.2538,"category":"lower-expression","id":13},{"from":"EH38E3291174","to":"EH38E4193228","effectSize":0.0211,"category":"lower-expression","id":14},{"from":"EH38E3291218","to":"EH38E4193228","effectSize":0.0477,"category":"lower-expression","id":15},{"from":"EH38E3291222","to":"EH38E4193228","effectSize":0.0627,"category":"lower-expression","id":16},{"from":"EH38E3291226","to":"EH38E4193228","effectSize":0.0448,"category":"lower-expression","id":17},{"from":"EH38E4193211","to":"EH38E4193228","effectSize":0.0454,"category":"lower-expression","id":18},{"from":"EH38E3291232","to":"EH38E4193228","effectSize":0.0311,"category":"lower-expression","id":19},{"from":"EH38E3291249","to":"EH38E4193228","effectSize":0.0593,"category":"higher-expression","id":20},{"from":"EH38E3291263","to":"EH38E4193228","effectSize":0.1136,"category":"lower-expression","id":21},{"from":"EH38E3291271","to":"EH38E4193228","effectSize":0.4097,"category":"lower-expression","id":22},{"from":"EH38E3291279","to":"EH38E4193228","effectSize":0.1077,"category":"lower-expression","id":23},{"from":"EH38E4193243","to":"EH38E4193228","effectSize":0.026,"category":"higher-expression","id":24},{"from":"EH38E3291318","to":"EH38E4193228","effectSize":0.0297,"category":"higher-expression","id":25},{"from":"EH38E4193273","to":"EH38E4193228","effectSize":0.0405,"category":"lower-expression","id":26},{"from":"EH38E3291358","to":"EH38E4193228","effectSize":0.0918,"category":"lower-expression","id":27},{"from":"EH38E3291779","to":"EH38E4193228","effectSize":0.0263,"category":"higher-expression","id":28},{"from":"EH38E4193467","to":"EH38E4193228","effectSize":0.0374,"category":"higher-expression","id":29},{"from":"EH38E1960374","to":"EH38E1960374","effectSize":0.1853,"category":"lower-expression","id":30},{"from":"EH38E3312736","to":"EH38E1960374","effectSize":0.0698,"category":"lower-expression","id":31},{"from":"EH38E1960377","to":"EH38E1960374","effectSize":0.1479,"category":"lower-expression","id":32},{"from":"EH38E4201343","to":"EH38E1960374","effectSize":0.1042,"category":"lower-expression","id":33},{"from":"EH38E1960374","to":"EH38E3312774","effectSize":0.143,"category":"higher-expression","id":34},{"from":"EH38E3312736","to":"EH38E3312774","effectSize":0.0864,"category":"higher-expression","id":35},{"from":"EH38E1960377","to":"EH38E3312774","effectSize":0.1641,"category":"higher-expression","id":36},{"from":"EH38E4201343","to":"EH38E3312774","effectSize":0.0652,"category":"higher-expression","id":37},{"from":"EH38E3312746","to":"EH38E3312774","effectSize":0.0835,"category":"lower-expression","id":38},{"from":"EH38E3312765","to":"EH38E3312774","effectSize":0.0386,"category":"lower-expression","id":39},{"from":"EH38E3312774","to":"EH38E3312774","effectSize":0.3507,"category":"lower-expression","id":40},{"from":"EH38E3312787","to":"EH38E3312774","effectSize":0.0959,"category":"lower-expression","id":41},{"from":"EH38E1940335","to":"EH38E3291664","effectSize":0.0701,"category":"lower-expression","id":42},{"from":"EH38E3291664","to":"EH38E3291664","effectSize":0.3563,"category":"lower-expression","id":43},{"from":"EH38E3291668","to":"EH38E3291664","effectSize":0.1181,"category":"lower-expression","id":44},{"from":"EH38E3291318","to":"EH38E3291358","effectSize":0.0369,"category":"lower-expression","id":45},{"from":"EH38E3291346","to":"EH38E3291358","effectSize":0.108,"category":"lower-expression","id":46},{"from":"EH38E4193273","to":"EH38E3291358","effectSize":0.2005,"category":"lower-expression","id":47},{"from":"EH38E3291358","to":"EH38E3291358","effectSize":0.441,"category":"lower-expression","id":48},{"from":"EH38E3291364","to":"EH38E3291358","effectSize":0.0862,"category":"lower-expression","id":49},{"from":"EH38E3291374","to":"EH38E3291358","effectSize":0.0278,"category":"higher-expression","id":50},{"from":"EH38E3291664","to":"EH38E3291358","effectSize":0.0291,"category":"higher-expression","id":51},{"from":"EH38E1939855","to":"EH38E3291249","effectSize":0.0684,"category":"higher-expression","id":52},{"from":"EH38E4193211","to":"EH38E3291249","effectSize":0.0354,"category":"lower-expression","id":53},{"from":"EH38E3291232","to":"EH38E3291249","effectSize":0.0767,"category":"lower-expression","id":54},{"from":"EH38E3291244","to":"EH38E3291249","effectSize":0.0883,"category":"lower-expression","id":55},{"from":"EH38E3291249","to":"EH38E3291249","effectSize":0.1514,"category":"lower-expression","id":56},{"from":"EH38E3291358","to":"EH38E3291249","effectSize":0.0378,"category":"lower-expression","id":57},{"from":"EH38E3291664","to":"EH38E3291249","effectSize":0.0276,"category":"higher-expression","id":58}],"node":[{"id":"EH38E1939823","category":"PLS"},{"id":"EH38E1939855","category":"CA-CTCF"},{"id":"EH38E1940335","category":"dELS"},{"id":"EH38E1960374","category":"PLS"},{"id":"EH38E1960377","category":"pELS"},{"id":"EH38E3291096","category":"PLS"},{"id":"EH38E3291121","category":"PLS"},{"id":"EH38E3291122","category":"PLS"},{"id":"EH38E3291174","category":"PLS"},{"id":"EH38E3291218","category":"PLS"},{"id":"EH38E3291222","category":"dELS"},{"id":"EH38E3291226","category":"dELS"},{"id":"EH38E3291232","category":"pELS"},{"id":"EH38E3291244","category":"pELS"},{"id":"EH38E3291249","category":"PLS"},{"id":"EH38E3291263","category":"pELS"},{"id":"EH38E3291271","category":"PLS"},{"id":"EH38E3291279","category":"PLS"},{"id":"EH38E3291318","category":"CA-CTCF"},{"id":"EH38E3291346","category":"PLS"},{"id":"EH38E3291358","category":"PLS"},{"id":"EH38E3291364","category":"PLS"},{"id":"EH38E3291374","category":"CA-TF"},{"id":"EH38E3291392","category":"PLS"},{"id":"EH38E3291410","category":"PLS"},{"id":"EH38E3291664","category":"PLS"},{"id":"EH38E3291668","category":"pELS"},{"id":"EH38E3291779","category":"CA-CTCF"},{"id":"EH38E3312736","category":"pELS"},{"id":"EH38E3312746","category":"dELS"},{"id":"EH38E3312765","category":"CA-TF"},{"id":"EH38E3312774","category":"PLS"},{"id":"EH38E3312787","category":"CA-TF"},{"id":"EH38E4193211","category":"pELS"},{"id":"EH38E4193228","category":"PLS"},{"id":"EH38E4193243","category":"CA-H3K4me3"},{"id":"EH38E4193273","category":"pELS"},{"id":"EH38E4193467","category":"CA-CTCF"},{"id":"EH38E4201343","category":"pELS"}]}}'),data_namespaceObject=JSON.parse('{"p":{"edge":[{"from":"EH38E3291096","to":"EH38E1939823","effectSize":0.1134,"category":"lower-expression","id":1},{"from":"EH38E1939823","to":"EH38E1939823","effectSize":0.1933,"category":"lower-expression","id":2},{"from":"EH38E3291121","to":"EH38E1939823","effectSize":0.0545,"category":"lower-expression","id":3},{"from":"EH38E3291122","to":"EH38E1939823","effectSize":0.0665,"category":"lower-expression","id":4},{"from":"EH38E3291358","to":"EH38E1939823","effectSize":0.0674,"category":"lower-expression","id":5},{"from":"EH38E3291271","to":"EH38E3291279","effectSize":0.0381,"category":"lower-expression","id":6},{"from":"EH38E3291279","to":"EH38E3291279","effectSize":0.1667,"category":"lower-expression","id":7},{"from":"EH38E3291358","to":"EH38E3291279","effectSize":0.0478,"category":"lower-expression","id":8},{"from":"EH38E3291174","to":"EH38E3291410","effectSize":0.0504,"category":"lower-expression","id":9},{"from":"EH38E4193273","to":"EH38E3291410","effectSize":0.0507,"category":"lower-expression","id":10},{"from":"EH38E3291358","to":"EH38E3291410","effectSize":0.0895,"category":"lower-expression","id":11},{"from":"EH38E3291392","to":"EH38E3291410","effectSize":0.0352,"category":"lower-expression","id":12},{"from":"EH38E3291410","to":"EH38E3291410","effectSize":0.2538,"category":"lower-expression","id":13},{"from":"EH38E3291174","to":"EH38E4193228","effectSize":0.0211,"category":"lower-expression","id":14},{"from":"EH38E3291218","to":"EH38E4193228","effectSize":0.0477,"category":"lower-expression","id":15},{"from":"EH38E3291222","to":"EH38E4193228","effectSize":0.0627,"category":"lower-expression","id":16},{"from":"EH38E3291226","to":"EH38E4193228","effectSize":0.0448,"category":"lower-expression","id":17},{"from":"EH38E4193211","to":"EH38E4193228","effectSize":0.0454,"category":"lower-expression","id":18},{"from":"EH38E3291232","to":"EH38E4193228","effectSize":0.0311,"category":"lower-expression","id":19},{"from":"EH38E3291249","to":"EH38E4193228","effectSize":0.0593,"category":"higher-expression","id":20},{"from":"EH38E3291263","to":"EH38E4193228","effectSize":0.1136,"category":"lower-expression","id":21},{"from":"EH38E3291271","to":"EH38E4193228","effectSize":0.4097,"category":"lower-expression","id":22},{"from":"EH38E3291279","to":"EH38E4193228","effectSize":0.1077,"category":"lower-expression","id":23},{"from":"EH38E4193243","to":"EH38E4193228","effectSize":0.026,"category":"higher-expression","id":24},{"from":"EH38E3291318","to":"EH38E4193228","effectSize":0.0297,"category":"higher-expression","id":25},{"from":"EH38E4193273","to":"EH38E4193228","effectSize":0.0405,"category":"lower-expression","id":26},{"from":"EH38E3291358","to":"EH38E4193228","effectSize":0.0918,"category":"lower-expression","id":27},{"from":"EH38E3291779","to":"EH38E4193228","effectSize":0.0263,"category":"higher-expression","id":28},{"from":"EH38E4193467","to":"EH38E4193228","effectSize":0.0374,"category":"higher-expression","id":29},{"from":"EH38E1960374","to":"EH38E1960374","effectSize":0.1853,"category":"lower-expression","id":30},{"from":"EH38E3312736","to":"EH38E1960374","effectSize":0.0698,"category":"lower-expression","id":31},{"from":"EH38E1960377","to":"EH38E1960374","effectSize":0.1479,"category":"lower-expression","id":32},{"from":"EH38E4201343","to":"EH38E1960374","effectSize":0.1042,"category":"lower-expression","id":33},{"from":"EH38E1960374","to":"EH38E3312774","effectSize":0.143,"category":"higher-expression","id":34},{"from":"EH38E3312736","to":"EH38E3312774","effectSize":0.0864,"category":"higher-expression","id":35},{"from":"EH38E1960377","to":"EH38E3312774","effectSize":0.1641,"category":"higher-expression","id":36},{"from":"EH38E4201343","to":"EH38E3312774","effectSize":0.0652,"category":"higher-expression","id":37},{"from":"EH38E3312746","to":"EH38E3312774","effectSize":0.0835,"category":"lower-expression","id":38},{"from":"EH38E3312765","to":"EH38E3312774","effectSize":0.0386,"category":"lower-expression","id":39},{"from":"EH38E3312774","to":"EH38E3312774","effectSize":0.3507,"category":"lower-expression","id":40},{"from":"EH38E3312787","to":"EH38E3312774","effectSize":0.0959,"category":"lower-expression","id":41},{"from":"EH38E1940335","to":"EH38E3291664","effectSize":0.0701,"category":"lower-expression","id":42},{"from":"EH38E3291664","to":"EH38E3291664","effectSize":0.3563,"category":"lower-expression","id":43},{"from":"EH38E3291668","to":"EH38E3291664","effectSize":0.1181,"category":"lower-expression","id":44},{"from":"EH38E3291318","to":"EH38E3291358","effectSize":0.0369,"category":"lower-expression","id":45},{"from":"EH38E3291346","to":"EH38E3291358","effectSize":0.108,"category":"lower-expression","id":46},{"from":"EH38E4193273","to":"EH38E3291358","effectSize":0.2005,"category":"lower-expression","id":47},{"from":"EH38E3291358","to":"EH38E3291358","effectSize":0.441,"category":"lower-expression","id":48},{"from":"EH38E3291364","to":"EH38E3291358","effectSize":0.0862,"category":"lower-expression","id":49},{"from":"EH38E3291374","to":"EH38E3291358","effectSize":0.0278,"category":"higher-expression","id":50},{"from":"EH38E3291664","to":"EH38E3291358","effectSize":0.0291,"category":"higher-expression","id":51},{"from":"EH38E1939855","to":"EH38E3291249","effectSize":0.0684,"category":"higher-expression","id":52},{"from":"EH38E4193211","to":"EH38E3291249","effectSize":0.0354,"category":"lower-expression","id":53},{"from":"EH38E3291232","to":"EH38E3291249","effectSize":0.0767,"category":"lower-expression","id":54},{"from":"EH38E3291244","to":"EH38E3291249","effectSize":0.0883,"category":"lower-expression","id":55},{"from":"EH38E3291249","to":"EH38E3291249","effectSize":0.1514,"category":"lower-expression","id":56},{"from":"EH38E3291358","to":"EH38E3291249","effectSize":0.0378,"category":"lower-expression","id":57},{"from":"EH38E3291664","to":"EH38E3291249","effectSize":0.0276,"category":"higher-expression","id":58}],"node":[{"id":"EH38E1939823","category":"PLS"},{"id":"EH38E1939855","category":"CA-CTCF"},{"id":"EH38E1940335","category":"dELS"},{"id":"EH38E1960374","category":"PLS"},{"id":"EH38E1960377","category":"pELS"},{"id":"EH38E3291096","category":"PLS"},{"id":"EH38E3291121","category":"PLS"},{"id":"EH38E3291122","category":"PLS"},{"id":"EH38E3291174","category":"PLS"},{"id":"EH38E3291218","category":"PLS"},{"id":"EH38E3291222","category":"dELS"},{"id":"EH38E3291226","category":"dELS"},{"id":"EH38E3291232","category":"pELS"},{"id":"EH38E3291244","category":"pELS"},{"id":"EH38E3291249","category":"PLS"},{"id":"EH38E3291263","category":"pELS"},{"id":"EH38E3291271","category":"PLS"},{"id":"EH38E3291279","category":"PLS"},{"id":"EH38E3291318","category":"CA-CTCF"},{"id":"EH38E3291346","category":"PLS"},{"id":"EH38E3291358","category":"PLS"},{"id":"EH38E3291364","category":"PLS"},{"id":"EH38E3291374","category":"CA-TF"},{"id":"EH38E3291392","category":"PLS"},{"id":"EH38E3291410","category":"PLS"},{"id":"EH38E3291664","category":"PLS"},{"id":"EH38E3291668","category":"pELS"},{"id":"EH38E3291779","category":"CA-CTCF"},{"id":"EH38E3312736","category":"pELS"},{"id":"EH38E3312746","category":"dELS"},{"id":"EH38E3312765","category":"CA-TF"},{"id":"EH38E3312774","category":"PLS"},{"id":"EH38E3312787","category":"CA-TF"},{"id":"EH38E4193211","category":"pELS"},{"id":"EH38E4193228","category":"PLS"},{"id":"EH38E4193243","category":"CA-H3K4me3"},{"id":"EH38E4193273","category":"pELS"},{"id":"EH38E4193467","category":"CA-CTCF"},{"id":"EH38E4201343","category":"pELS"}],"centered":{"id":"EH38E4193211"}}}');__webpack_require__("./src/App.css");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function setColor(node){if(void 0!==node.category)switch(node.category){case"PLS":return"#FF0000";case"dELS":return"#FFCD00";case"pELS":return"#FFA700";case"CA-CTCF":return"#00B0F0";case"CA-H3K4me3":return"#ffaaaa";case"CA-TF":return"#be28e5";case"Low-DNase":return"#e1e1e1";case"lower-expression":return"rgb(0,0,0)";case"higher-expression":return"rgb(0,0,225)";default:return"grey"}return"grey"}function setColor3(node){if(!node||void 0===node.category)return"grey";switch(node.category){case"R":return"red";case"P":return"purple";case"B":return"blue";case"hello":return"pink";case"hi":return"green";default:return"grey"}}function convertToSimple(node){if(node.category)switch(node.category){case"PLS":return"Promoter";case"dELS":return"Distal Enhancer";case"pELS":return"Proximal Enhancer";case"CA-CTCF":return"Chromatin Accessible + CTCF";case"CA-H3K4me3":return"Chromatin Accessible + H3K4me3";case"CA-TF":return"Chromatin Accessible + Transcription Factor";case"Low-DNase":return"Low DNase";case"CA-only":return"Chromatin Accessible";case"lower-expression":return"Lower-Expression";case"higher-expression":return"Higher-Expression";default:return node.category}return"Edge"}const Graph_stories={title:"Graph",component:src.TS},Template=args=>(0,jsx_runtime.jsx)(src.TS,{...args});Template.displayName="Template";const SampleGraph=Template.bind({});SampleGraph.args={data:data2_namespaceObject.p,title:"Sample Graph With No Centered cCRE",id:"Sample",scale:n=>10*n,getColor:setColor3,legendToggle:function convertToSimple2(node){if(void 0!==node.category)switch(node.category){case"R":return"red nodes";case"B":return"blue nodes";case"P":return"purple nodes";default:return node.category}return"Edge"},order:["P","R","B"],onNodeClick:n=>console.log("Accession: "+n.accession)};const PilotDataWithCentered=Template.bind({});PilotDataWithCentered.args={data:data_namespaceObject.p,title:"cCRE Impact With Pilot Data With Centered cCRE",id:"PilotWithCentered",getColor:setColor,legendToggle:convertToSimple,legendNodeLabel:"cCRE Type",order:["PLS","pELS","dELS","CA-H3K4me3","CA-CTCF","CA-TF","CA","TF","Low DNase"],fontFamily:"Times New Roman",directional:!0};const FiftyPercent=Template.bind({});FiftyPercent.args={data:data_namespaceObject.p,title:"50% Width and Height",id:"50Percent",width:"50%",height:"50%",getColor:setColor,legendToggle:convertToSimple,legendNodeLabel:"cCRE Type",directional:!0};const PilotDataWithoutCentered=Template.bind({});PilotDataWithoutCentered.args={data:data3_namespaceObject.p,title:"cCRE Impact With Pilot Data Without Centered cCRE",id:"PilotNoCentered",getColor:setColor,legendToggle:convertToSimple,legendNodeLabel:"cCRE Type",directional:!0};const DifferentLabel=Template.bind({});DifferentLabel.args={data:data3_namespaceObject.p,title:"Different Label",id:"diffLabel",getLabel:node=>node.category,getColor:setColor,legendToggle:convertToSimple,legendNodeLabel:"Different Node Label",legendEdgeLabel:"Different Edge Label",directional:!0};const DifferentColor=Template.bind({});DifferentColor.args={data:data3_namespaceObject.p,title:"Different Color",id:"diffColor",getColor:function setColor2(node){if(void 0!==node.category)switch(node.category){case"PLS":return"red";case"dELS":return"orange";case"pELS":return"yellow";case"CA-CTCF":return"green";case"CA-H3K4me3":return"blue";case"CA-TF":case"higher-expression":return"purple";case"Low-DNase":return"pink";case"lower-expression":return"black";default:return"grey"}return"grey"},legendToggle:convertToSimple};const NoLegendToggle=Template.bind({});NoLegendToggle.args={data:data2_namespaceObject.p,title:"No Legend Toggle",id:"noLegendToggle",scale:n=>10*n,getColor:setColor3};const DifferentOrder=Template.bind({});DifferentOrder.args={data:data_namespaceObject.p,title:"Different Order",id:"diffOrder",getColor:setColor,legendToggle:convertToSimple,legendNodeLabel:"cCRE Type",order:["Low DNase","PLS","dELS","TF","pELS","CA-CTCF","CA","CA-H3K4me3","CA-TF"],directional:!0},SampleGraph.parameters={...SampleGraph.parameters,docs:{...SampleGraph.parameters?.docs,source:{originalSource:"args => <Graph {...args} />",...SampleGraph.parameters?.docs?.source}}},PilotDataWithCentered.parameters={...PilotDataWithCentered.parameters,docs:{...PilotDataWithCentered.parameters?.docs,source:{originalSource:"args => <Graph {...args} />",...PilotDataWithCentered.parameters?.docs?.source}}},FiftyPercent.parameters={...FiftyPercent.parameters,docs:{...FiftyPercent.parameters?.docs,source:{originalSource:"args => <Graph {...args} />",...FiftyPercent.parameters?.docs?.source}}},PilotDataWithoutCentered.parameters={...PilotDataWithoutCentered.parameters,docs:{...PilotDataWithoutCentered.parameters?.docs,source:{originalSource:"args => <Graph {...args} />",...PilotDataWithoutCentered.parameters?.docs?.source}}},DifferentLabel.parameters={...DifferentLabel.parameters,docs:{...DifferentLabel.parameters?.docs,source:{originalSource:"args => <Graph {...args} />",...DifferentLabel.parameters?.docs?.source}}},DifferentColor.parameters={...DifferentColor.parameters,docs:{...DifferentColor.parameters?.docs,source:{originalSource:"args => <Graph {...args} />",...DifferentColor.parameters?.docs?.source}}},NoLegendToggle.parameters={...NoLegendToggle.parameters,docs:{...NoLegendToggle.parameters?.docs,source:{originalSource:"args => <Graph {...args} />",...NoLegendToggle.parameters?.docs?.source}}},DifferentOrder.parameters={...DifferentOrder.parameters,docs:{...DifferentOrder.parameters?.docs,source:{originalSource:"args => <Graph {...args} />",...DifferentOrder.parameters?.docs?.source}}};const __namedExportsOrder=["SampleGraph","PilotDataWithCentered","FiftyPercent","PilotDataWithoutCentered","DifferentLabel","DifferentColor","NoLegendToggle","DifferentOrder"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/App.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]),___CSS_LOADER_EXPORT___.push([module.id,"/**\n * App.css: global fonts and styles for PsychSCREEN.\n*/\n\n.app-bar-menu-item {\n    cursor: 'pointer';\n}\n","",{version:3,sources:["webpack://./src/App.css"],names:[],mappings:"AAAA;;CAEC;;AAID;IACI,iBAAiB;AACrB",sourcesContent:["/**\n * App.css: global fonts and styles for PsychSCREEN.\n*/\n\n@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n.app-bar-menu-item {\n    cursor: 'pointer';\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/App.css":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/App.css"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_App_css__WEBPACK_IMPORTED_MODULE_6__.A,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_App_css__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_App_css__WEBPACK_IMPORTED_MODULE_6__.A.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_App_css__WEBPACK_IMPORTED_MODULE_6__.A.locals}}]);