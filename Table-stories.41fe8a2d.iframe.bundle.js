"use strict";(self.webpackChunk_weng_lab_psychscreen_ui_components=self.webpackChunk_weng_lab_psychscreen_ui_components||[]).push([[962],{"./stories/Table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Table:()=>Table,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.ts"),_emotion_react__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./src/App.css"),__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"CustomizedTable",component:_src__WEBPACK_IMPORTED_MODULE_1__.MQ,argTypes:{children:{control:{type:"text"}}},parameters:{controls:{expanded:!0}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.a,{theme:_src__WEBPACK_IMPORTED_MODULE_1__.bp,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.MQ,{...args})});Template.displayName="Template";const Table=Template.bind({}),tdata=Array.from(Array(1e3).keys()).map((a=>[{header:"Symbol 1",value:"ss "+a},{header:"Symbol 1",value:"ss "+a},{header:"Symbol 1",value:"ss "+a},{header:"Symbol 1",value:"ss "+a},{header:"Symbol 1",value:"ss "+a},{header:"Symbol 1",value:"ss "+a},{header:"Symbol 2",value:a},{header:"Symbol 3",value:a},{header:"Symbol 4",value:a},{header:"Score",value:"score "+a,render:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b",{children:"test"+a})}]));Table.args={rowsPerPage:[10,100],tabledata:tdata},Table.parameters={...Table.parameters,docs:{...Table.parameters?.docs,source:{originalSource:"args => <ThemeProvider theme={PSYCHSCREEN_DEFAULT_THEME}>\n    <CustomizedTable {...args} />\n  </ThemeProvider>",...Table.parameters?.docs?.source}}};const __namedExportsOrder=["Table"]}}]);