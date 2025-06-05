import{j as h}from"./jsx-runtime-CDt2p4po.js";import{r as b,R as De,g as en,c as Rn}from"./index-GiUgBvb1.js";import{k as In,r as Yn,d as jn,h as qn,c as pt,l as Pt,n as lt,o as Ln,p as On,q as Bn,b as tn,g as nn,t as $n,v as Mt,a as Vn,u as rn,s as at,i as on,m as _t,w as an,B as Et}from"./Box-tXOfBd2H.js";import{u as Un,a as Nn,b as Je,d as Fn,e as Hn,f as Dt,g as Wn,h as Gn,i as Qe,G as Kn,P as sn,T as Zn,j as At,c as Ve,I as qe,C as zn}from"./Grow-T4q3YgyY.js";import{P as Oe,_ as Ie,c as Jn,u as Qn,a as et,T as Ct,G as Xt,A as ei,b as ti,d as ni,e as ii}from"./useParentSize-ZnyO9Jw1.js";const ri=In();function oi(t){const{theme:e,name:n,props:i}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?i:Yn(e.components[n].defaultProps,i)}function ai({props:t,name:e,defaultTheme:n,themeId:i}){let r=jn(n);return i&&(r=r[i]||r),oi({theme:r,name:e,props:t})}const si=$n(),li=ri("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root});function ci(t){return ai({props:t,name:"MuiStack",defaultTheme:si})}function ui(t,e){const n=b.Children.toArray(t).filter(Boolean);return n.reduce((i,r,o)=>(i.push(r),o<n.length-1&&i.push(b.cloneElement(e,{key:`separator-${o}`})),i),[])}const di=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],fi=({ownerState:t,theme:e})=>{let n={display:"flex",flexDirection:"column",...Pt({theme:e},lt({values:t.direction,breakpoints:e.breakpoints.values}),i=>({flexDirection:i}))};if(t.spacing){const i=Ln(e),r=Object.keys(e.breakpoints.values).reduce((l,u)=>((typeof t.spacing=="object"&&t.spacing[u]!=null||typeof t.direction=="object"&&t.direction[u]!=null)&&(l[u]=!0),l),{}),o=lt({values:t.direction,base:r}),a=lt({values:t.spacing,base:r});typeof o=="object"&&Object.keys(o).forEach((l,u,d)=>{if(!o[l]){const S=u>0?o[d[u-1]]:"column";o[l]=S}}),n=On(n,Pt({theme:e},a,(l,u)=>t.useFlexGap?{gap:Mt(i,l)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${di(u?o[u]:t.direction)}`]:Mt(i,l)}}))}return n=Bn(e.breakpoints,n),n};function pi(t={}){const{createStyledComponent:e=li,useThemeProps:n=ci,componentName:i="MuiStack"}=t,r=()=>tn({root:["root"]},l=>nn(i,l),{}),o=e(fi);return b.forwardRef(function(l,u){const d=n(l),g=qn(d),{component:S="div",direction:R="column",spacing:Y=0,divider:j,children:M,className:N,useFlexGap:ee=!1,...K}=g,G={direction:R,spacing:Y,useFlexGap:ee},me=r();return h.jsx(o,{as:S,ownerState:G,ref:u,className:pt(me.root,N),...K,children:j?ui(M,j):M})})}function hi(t){return nn("MuiTooltip",t)}const ce=Vn("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);function mi(t){return Math.round(t*1e5)/1e5}const gi=t=>{const{classes:e,disableInteractive:n,arrow:i,touch:r,placement:o}=t,a={popper:["popper",!n&&"popperInteractive",i&&"popperArrow"],tooltip:["tooltip",i&&"tooltipArrow",r&&"touch",`tooltipPlacement${on(o.split("-")[0])}`],arrow:["arrow"]};return tn(a,hi,e)},yi=at(sn,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.popper,!n.disableInteractive&&e.popperInteractive,n.arrow&&e.popperArrow,!n.open&&e.popperClose]}})(_t(({theme:t})=>({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none",variants:[{props:({ownerState:e})=>!e.disableInteractive,style:{pointerEvents:"auto"}},{props:({open:e})=>!e,style:{pointerEvents:"none"}},{props:({ownerState:e})=>e.arrow,style:{[`&[data-popper-placement*="bottom"] .${ce.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${ce.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${ce.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}},[`&[data-popper-placement*="left"] .${ce.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}}}},{props:({ownerState:e})=>e.arrow&&!e.isRtl,style:{[`&[data-popper-placement*="right"] .${ce.arrow}`]:{left:0,marginLeft:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!!e.isRtl,style:{[`&[data-popper-placement*="right"] .${ce.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!e.isRtl,style:{[`&[data-popper-placement*="left"] .${ce.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!!e.isRtl,style:{[`&[data-popper-placement*="left"] .${ce.arrow}`]:{left:0,marginLeft:"-0.71em"}}}]}))),vi=at("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.tooltip,n.touch&&e.touch,n.arrow&&e.tooltipArrow,e[`tooltipPlacement${on(n.placement.split("-")[0])}`]]}})(_t(({theme:t})=>({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:an(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium,[`.${ce.popper}[data-popper-placement*="left"] &`]:{transformOrigin:"right center"},[`.${ce.popper}[data-popper-placement*="right"] &`]:{transformOrigin:"left center"},[`.${ce.popper}[data-popper-placement*="top"] &`]:{transformOrigin:"center bottom",marginBottom:"14px"},[`.${ce.popper}[data-popper-placement*="bottom"] &`]:{transformOrigin:"center top",marginTop:"14px"},variants:[{props:({ownerState:e})=>e.arrow,style:{position:"relative",margin:0}},{props:({ownerState:e})=>e.touch,style:{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${mi(16/14)}em`,fontWeight:t.typography.fontWeightRegular}},{props:({ownerState:e})=>!e.isRtl,style:{[`.${ce.popper}[data-popper-placement*="left"] &`]:{marginRight:"14px"},[`.${ce.popper}[data-popper-placement*="right"] &`]:{marginLeft:"14px"}}},{props:({ownerState:e})=>!e.isRtl&&e.touch,style:{[`.${ce.popper}[data-popper-placement*="left"] &`]:{marginRight:"24px"},[`.${ce.popper}[data-popper-placement*="right"] &`]:{marginLeft:"24px"}}},{props:({ownerState:e})=>!!e.isRtl,style:{[`.${ce.popper}[data-popper-placement*="left"] &`]:{marginLeft:"14px"},[`.${ce.popper}[data-popper-placement*="right"] &`]:{marginRight:"14px"}}},{props:({ownerState:e})=>!!e.isRtl&&e.touch,style:{[`.${ce.popper}[data-popper-placement*="left"] &`]:{marginLeft:"24px"},[`.${ce.popper}[data-popper-placement*="right"] &`]:{marginRight:"24px"}}},{props:({ownerState:e})=>e.touch,style:{[`.${ce.popper}[data-popper-placement*="top"] &`]:{marginBottom:"24px"}}},{props:({ownerState:e})=>e.touch,style:{[`.${ce.popper}[data-popper-placement*="bottom"] &`]:{marginTop:"24px"}}}]}))),bi=at("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(t,e)=>e.arrow})(_t(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:an(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let tt=!1;const Rt=new Zn;let Ge={x:0,y:0};function nt(t,e){return(n,...i)=>{e&&e(n,...i),t(n,...i)}}const Le=b.forwardRef(function(e,n){const i=rn({props:e,name:"MuiTooltip"}),{arrow:r=!1,children:o,classes:a,components:s={},componentsProps:l={},describeChild:u=!1,disableFocusListener:d=!1,disableHoverListener:g=!1,disableInteractive:S=!1,disableTouchListener:R=!1,enterDelay:Y=100,enterNextDelay:j=0,enterTouchDelay:M=700,followCursor:N=!1,id:ee,leaveDelay:K=0,leaveTouchDelay:G=1500,onClose:me,onOpen:D,open:y,placement:v="bottom",PopperComponent:f,PopperProps:x={},slotProps:w={},slots:m={},title:p,TransitionComponent:P,TransitionProps:V,...te}=i,B=b.isValidElement(o)?o:h.jsx("span",{children:o}),W=Un(),oe=Nn(),[$,J]=b.useState(),[Z,ae]=b.useState(null),le=b.useRef(!1),T=S||N,C=Je(),L=Je(),I=Je(),ne=Je(),[ue,ve]=Fn({controlled:y,default:!1,name:"Tooltip",state:"open"});let ge=ue;const ye=Hn(ee),fe=b.useRef(),we=Dt(()=>{fe.current!==void 0&&(document.body.style.WebkitUserSelect=fe.current,fe.current=void 0),ne.clear()});b.useEffect(()=>we,[we]);const Ne=q=>{Rt.clear(),tt=!0,ve(!0),D&&!ge&&D(q)},_=Dt(q=>{Rt.start(800+K,()=>{tt=!1}),ve(!1),me&&ge&&me(q),C.start(W.transitions.duration.shortest,()=>{le.current=!1})}),k=q=>{le.current&&q.type!=="touchstart"||($&&$.removeAttribute("title"),L.clear(),I.clear(),Y||tt&&j?L.start(tt?j:Y,()=>{Ne(q)}):Ne(q))},X=q=>{L.clear(),I.start(K,()=>{_(q)})},[,F]=b.useState(!1),ie=q=>{At(q.target)||(F(!1),X(q))},pe=q=>{$||J(q.currentTarget),At(q.target)&&(F(!0),k(q))},be=q=>{le.current=!0;const Ee=B.props;Ee.onTouchStart&&Ee.onTouchStart(q)},Se=q=>{be(q),I.clear(),C.clear(),we(),fe.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",ne.start(M,()=>{document.body.style.WebkitUserSelect=fe.current,k(q)})},Te=q=>{B.props.onTouchEnd&&B.props.onTouchEnd(q),we(),I.start(G,()=>{_(q)})};b.useEffect(()=>{if(!ge)return;function q(Ee){Ee.key==="Escape"&&_(Ee)}return document.addEventListener("keydown",q),()=>{document.removeEventListener("keydown",q)}},[_,ge]);const Xe=Wn(Gn(B),J,n);!p&&p!==0&&(ge=!1);const Me=b.useRef(),c=q=>{const Ee=B.props;Ee.onMouseMove&&Ee.onMouseMove(q),Ge={x:q.clientX,y:q.clientY},Me.current&&Me.current.update()},A={},H=typeof p=="string";u?(A.title=!ge&&H&&!g?p:null,A["aria-describedby"]=ge?ye:null):(A["aria-label"]=H?p:null,A["aria-labelledby"]=ge&&!H?ye:null);const E={...A,...te,...B.props,className:pt(te.className,B.props.className),onTouchStart:be,ref:Xe,...N?{onMouseMove:c}:{}},U={};R||(E.onTouchStart=Se,E.onTouchEnd=Te),g||(E.onMouseOver=nt(k,E.onMouseOver),E.onMouseLeave=nt(X,E.onMouseLeave),T||(U.onMouseOver=k,U.onMouseLeave=X)),d||(E.onFocus=nt(pe,E.onFocus),E.onBlur=nt(ie,E.onBlur),T||(U.onFocus=pe,U.onBlur=ie));const de={...i,isRtl:oe,arrow:r,disableInteractive:T,placement:v,PopperComponentProp:f,touch:le.current},Q=typeof w.popper=="function"?w.popper(de):w.popper,z=b.useMemo(()=>{var Ee,St;let q=[{name:"arrow",enabled:!!Z,options:{element:Z,padding:4}}];return(Ee=x.popperOptions)!=null&&Ee.modifiers&&(q=q.concat(x.popperOptions.modifiers)),(St=Q==null?void 0:Q.popperOptions)!=null&&St.modifiers&&(q=q.concat(Q.popperOptions.modifiers)),{...x.popperOptions,...Q==null?void 0:Q.popperOptions,modifiers:q}},[Z,x.popperOptions,Q==null?void 0:Q.popperOptions]),xe=gi(de),_e=typeof w.transition=="function"?w.transition(de):w.transition,O={slots:{popper:s.Popper,transition:s.Transition??P,tooltip:s.Tooltip,arrow:s.Arrow,...m},slotProps:{arrow:w.arrow??l.arrow,popper:{...x,...Q??l.popper},tooltip:w.tooltip??l.tooltip,transition:{...V,..._e??l.transition}}},[Re,ke]=Qe("popper",{elementType:yi,externalForwardedProps:O,ownerState:de,className:pt(xe.popper,x==null?void 0:x.className)}),[Ye,Ae]=Qe("transition",{elementType:Kn,externalForwardedProps:O,ownerState:de}),[je,An]=Qe("tooltip",{elementType:vi,className:xe.tooltip,externalForwardedProps:O,ownerState:de}),[Cn,Xn]=Qe("arrow",{elementType:bi,className:xe.arrow,externalForwardedProps:O,ownerState:de,ref:ae});return h.jsxs(b.Fragment,{children:[b.cloneElement(B,E),h.jsx(Re,{as:f??sn,placement:v,anchorEl:N?{getBoundingClientRect:()=>({top:Ge.y,left:Ge.x,right:Ge.x,bottom:Ge.y,width:0,height:0})}:$,popperRef:Me,open:$?ge:!1,id:ye,transition:!0,...U,...ke,popperOptions:z,children:({TransitionProps:q})=>h.jsx(Ye,{timeout:W.transitions.duration.shorter,...q,...Ae,children:h.jsxs(je,{...An,children:[p,r?h.jsx(Cn,{...Xn}):null]})})})]})}),ht=pi({createStyledComponent:at("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root}),useThemeProps:t=>rn({props:t,name:"MuiStack"})}),ln=Ve(h.jsx("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download");function xi(t,e){return new Oe({x:t.x+e.x,y:t.y+e.y})}function wi(t,e){return new Oe({x:t.x-e.x,y:t.y-e.y})}function Ti(t){return!!t&&t instanceof Element}function _i(t){return!!t&&(t instanceof SVGElement||"ownerSVGElement"in t)}function ki(t){return!!t&&"createSVGPoint"in t}function Si(t){return!!t&&"getScreenCTM"in t}function Pi(t){return!!t&&"changedTouches"in t}function Mi(t){return!!t&&"clientX"in t}function Ei(t){return!!t&&(t instanceof Event||"nativeEvent"in t&&t.nativeEvent instanceof Event)}function Ke(){return Ke=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ke.apply(this,arguments)}var ct={x:0,y:0};function Di(t){if(!t)return Ke({},ct);if(Pi(t))return t.changedTouches.length>0?{x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}:Ke({},ct);if(Mi(t))return{x:t.clientX,y:t.clientY};var e=t==null?void 0:t.target,n=e&&"getBoundingClientRect"in e?e.getBoundingClientRect():null;return n?{x:n.x+n.width/2,y:n.y+n.height/2}:Ke({},ct)}function It(t,e){if(!t||!e)return null;var n=Di(e),i=_i(t)?t.ownerSVGElement:t,r=Si(i)?i.getScreenCTM():null;if(ki(i)&&r){var o=i.createSVGPoint();return o.x=n.x,o.y=n.y,o=o.matrixTransform(r.inverse()),new Oe({x:o.x,y:o.y})}var a=t.getBoundingClientRect();return new Oe({x:n.x-a.left-t.clientLeft,y:n.y-a.top-t.clientTop})}function $e(t,e){if(Ti(t)&&e)return It(t,e);if(Ei(t)){var n=t,i=n.target;if(i)return It(i,n)}return null}function Ai(t,e,n){return Math.max(e,Math.min(t,n))}const re={toVector(t,e){return t===void 0&&(t=e),Array.isArray(t)?t:[t,t]},add(t,e){return[t[0]+e[0],t[1]+e[1]]},sub(t,e){return[t[0]-e[0],t[1]-e[1]]},addTo(t,e){t[0]+=e[0],t[1]+=e[1]},subTo(t,e){t[0]-=e[0],t[1]-=e[1]}};function Yt(t,e,n){return e===0||Math.abs(e)===1/0?Math.pow(t,n*5):t*e*n/(e+n*t)}function jt(t,e,n,i=.15){return i===0?Ai(t,e,n):t<e?-Yt(e-t,n-e,i)+e:t>n?+Yt(t-n,n-e,i)+n:t}function Ci(t,[e,n],[i,r]){const[[o,a],[s,l]]=t;return[jt(e,o,a,i),jt(n,s,l,r)]}function Xi(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ri(t){var e=Xi(t,"string");return typeof e=="symbol"?e:String(e)}function he(t,e,n){return e=Ri(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function qt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function se(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?qt(Object(n),!0).forEach(function(i){he(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qt(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}const cn={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function Lt(t){return t?t[0].toUpperCase()+t.slice(1):""}const Ii=["enter","leave"];function Yi(t=!1,e){return t&&!Ii.includes(e)}function ji(t,e="",n=!1){const i=cn[t],r=i&&i[e]||e;return"on"+Lt(t)+Lt(r)+(Yi(n,r)?"Capture":"")}const qi=["gotpointercapture","lostpointercapture"];function Li(t){let e=t.substring(2).toLowerCase();const n=!!~e.indexOf("passive");n&&(e=e.replace("passive",""));const i=qi.includes(e)?"capturecapture":"capture",r=!!~e.indexOf(i);return r&&(e=e.replace("capture","")),{device:e,capture:r,passive:n}}function Oi(t,e=""){const n=cn[t],i=n&&n[e]||e;return t+i}function st(t){return"touches"in t}function un(t){return st(t)?"touch":"pointerType"in t?t.pointerType:"mouse"}function Bi(t){return Array.from(t.touches).filter(e=>{var n,i;return e.target===t.currentTarget||((n=t.currentTarget)===null||n===void 0||(i=n.contains)===null||i===void 0?void 0:i.call(n,e.target))})}function $i(t){return t.type==="touchend"||t.type==="touchcancel"?t.changedTouches:t.targetTouches}function dn(t){return st(t)?$i(t)[0]:t}function mt(t,e){try{const n=e.clientX-t.clientX,i=e.clientY-t.clientY,r=(e.clientX+t.clientX)/2,o=(e.clientY+t.clientY)/2,a=Math.hypot(n,i);return{angle:-(Math.atan2(n,i)*180)/Math.PI,distance:a,origin:[r,o]}}catch{}return null}function Vi(t){return Bi(t).map(e=>e.identifier)}function Ot(t,e){const[n,i]=Array.from(t.touches).filter(r=>e.includes(r.identifier));return mt(n,i)}function ut(t){const e=dn(t);return st(t)?e.identifier:e.pointerId}function We(t){const e=dn(t);return[e.clientX,e.clientY]}const Bt=40,$t=800;function fn(t){let{deltaX:e,deltaY:n,deltaMode:i}=t;return i===1?(e*=Bt,n*=Bt):i===2&&(e*=$t,n*=$t),[e,n]}function Ui(t){var e,n;const{scrollX:i,scrollY:r,scrollLeft:o,scrollTop:a}=t.currentTarget;return[(e=i??o)!==null&&e!==void 0?e:0,(n=r??a)!==null&&n!==void 0?n:0]}function Ni(t){const e={};if("buttons"in t&&(e.buttons=t.buttons),"shiftKey"in t){const{shiftKey:n,altKey:i,metaKey:r,ctrlKey:o}=t;Object.assign(e,{shiftKey:n,altKey:i,metaKey:r,ctrlKey:o})}return e}function ot(t,...e){return typeof t=="function"?t(...e):t}function Fi(){}function Hi(...t){return t.length===0?Fi:t.length===1?t[0]:function(){let e;for(const n of t)e=n.apply(this,arguments)||e;return e}}function Vt(t,e){return Object.assign({},e,t||{})}const Wi=32;class pn{constructor(e,n,i){this.ctrl=e,this.args=n,this.key=i,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(e){this.ctrl.state[this.key]=e}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:e,shared:n,ingKey:i,args:r}=this;n[i]=e._active=e.active=e._blocked=e._force=!1,e._step=[!1,!1],e.intentional=!1,e._movement=[0,0],e._distance=[0,0],e._direction=[0,0],e._delta=[0,0],e._bounds=[[-1/0,1/0],[-1/0,1/0]],e.args=r,e.axis=void 0,e.memo=void 0,e.elapsedTime=e.timeDelta=0,e.direction=[0,0],e.distance=[0,0],e.overflow=[0,0],e._movementBound=[!1,!1],e.velocity=[0,0],e.movement=[0,0],e.delta=[0,0],e.timeStamp=0}start(e){const n=this.state,i=this.config;n._active||(this.reset(),this.computeInitial(),n._active=!0,n.target=e.target,n.currentTarget=e.currentTarget,n.lastOffset=i.from?ot(i.from,n):n.offset,n.offset=n.lastOffset,n.startTime=n.timeStamp=e.timeStamp)}computeValues(e){const n=this.state;n._values=e,n.values=this.config.transform(e)}computeInitial(){const e=this.state;e._initial=e._values,e.initial=e.values}compute(e){const{state:n,config:i,shared:r}=this;n.args=this.args;let o=0;if(e&&(n.event=e,i.preventDefault&&e.cancelable&&n.event.preventDefault(),n.type=e.type,r.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,r.locked=!!document.pointerLockElement,Object.assign(r,Ni(e)),r.down=r.pressed=r.buttons%2===1||r.touches>0,o=e.timeStamp-n.timeStamp,n.timeStamp=e.timeStamp,n.elapsedTime=n.timeStamp-n.startTime),n._active){const D=n._delta.map(Math.abs);re.addTo(n._distance,D)}this.axisIntent&&this.axisIntent(e);const[a,s]=n._movement,[l,u]=i.threshold,{_step:d,values:g}=n;if(i.hasCustomTransform?(d[0]===!1&&(d[0]=Math.abs(a)>=l&&g[0]),d[1]===!1&&(d[1]=Math.abs(s)>=u&&g[1])):(d[0]===!1&&(d[0]=Math.abs(a)>=l&&Math.sign(a)*l),d[1]===!1&&(d[1]=Math.abs(s)>=u&&Math.sign(s)*u)),n.intentional=d[0]!==!1||d[1]!==!1,!n.intentional)return;const S=[0,0];if(i.hasCustomTransform){const[D,y]=g;S[0]=d[0]!==!1?D-d[0]:0,S[1]=d[1]!==!1?y-d[1]:0}else S[0]=d[0]!==!1?a-d[0]:0,S[1]=d[1]!==!1?s-d[1]:0;this.restrictToAxis&&!n._blocked&&this.restrictToAxis(S);const R=n.offset,Y=n._active&&!n._blocked||n.active;Y&&(n.first=n._active&&!n.active,n.last=!n._active&&n.active,n.active=r[this.ingKey]=n._active,e&&(n.first&&("bounds"in i&&(n._bounds=ot(i.bounds,n)),this.setup&&this.setup()),n.movement=S,this.computeOffset()));const[j,M]=n.offset,[[N,ee],[K,G]]=n._bounds;n.overflow=[j<N?-1:j>ee?1:0,M<K?-1:M>G?1:0],n._movementBound[0]=n.overflow[0]?n._movementBound[0]===!1?n._movement[0]:n._movementBound[0]:!1,n._movementBound[1]=n.overflow[1]?n._movementBound[1]===!1?n._movement[1]:n._movementBound[1]:!1;const me=n._active?i.rubberband||[0,0]:[0,0];if(n.offset=Ci(n._bounds,n.offset,me),n.delta=re.sub(n.offset,R),this.computeMovement(),Y&&(!n.last||o>Wi)){n.delta=re.sub(n.offset,R);const D=n.delta.map(Math.abs);re.addTo(n.distance,D),n.direction=n.delta.map(Math.sign),n._direction=n._delta.map(Math.sign),!n.first&&o>0&&(n.velocity=[D[0]/o,D[1]/o],n.timeDelta=o)}}emit(){const e=this.state,n=this.shared,i=this.config;if(e._active||this.clean(),(e._blocked||!e.intentional)&&!e._force&&!i.triggerAllEvents)return;const r=this.handler(se(se(se({},n),e),{},{[this.aliasKey]:e.values}));r!==void 0&&(e.memo=r)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function Gi([t,e],n){const i=Math.abs(t),r=Math.abs(e);if(i>r&&i>n)return"x";if(r>i&&r>n)return"y"}class Ze extends pn{constructor(...e){super(...e),he(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=re.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=re.sub(this.state.offset,this.state.lastOffset)}axisIntent(e){const n=this.state,i=this.config;if(!n.axis&&e){const r=typeof i.axisThreshold=="object"?i.axisThreshold[un(e)]:i.axisThreshold;n.axis=Gi(n._movement,r)}n._blocked=(i.lockDirection||!!i.axis)&&!n.axis||!!i.axis&&i.axis!==n.axis}restrictToAxis(e){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":e[1]=0;break;case"y":e[0]=0;break}}}const Ki=t=>t,Ut=.15,hn={enabled(t=!0){return t},eventOptions(t,e,n){return se(se({},n.shared.eventOptions),t)},preventDefault(t=!1){return t},triggerAllEvents(t=!1){return t},rubberband(t=0){switch(t){case!0:return[Ut,Ut];case!1:return[0,0];default:return re.toVector(t)}},from(t){if(typeof t=="function")return t;if(t!=null)return re.toVector(t)},transform(t,e,n){const i=t||n.shared.transform;return this.hasCustomTransform=!!i,i||Ki},threshold(t){return re.toVector(t,0)}},Zi=0,Ue=se(se({},hn),{},{axis(t,e,{axis:n}){if(this.lockDirection=n==="lock",!this.lockDirection)return n},axisThreshold(t=Zi){return t},bounds(t={}){if(typeof t=="function")return o=>Ue.bounds(t(o));if("current"in t)return()=>t.current;if(typeof HTMLElement=="function"&&t instanceof HTMLElement)return t;const{left:e=-1/0,right:n=1/0,top:i=-1/0,bottom:r=1/0}=t;return[[e,n],[i,r]]}}),Nt={ArrowRight:(t,e=1)=>[t*e,0],ArrowLeft:(t,e=1)=>[-1*t*e,0],ArrowUp:(t,e=1)=>[0,-1*t*e],ArrowDown:(t,e=1)=>[0,t*e]};class zi extends Ze{constructor(...e){super(...e),he(this,"ingKey","dragging")}reset(){super.reset();const e=this.state;e._pointerId=void 0,e._pointerActive=!1,e._keyboardActive=!1,e._preventScroll=!1,e._delayed=!1,e.swipe=[0,0],e.tap=!1,e.canceled=!1,e.cancel=this.cancel.bind(this)}setup(){const e=this.state;if(e._bounds instanceof HTMLElement){const n=e._bounds.getBoundingClientRect(),i=e.currentTarget.getBoundingClientRect(),r={left:n.left-i.left+e.offset[0],right:n.right-i.right+e.offset[0],top:n.top-i.top+e.offset[1],bottom:n.bottom-i.bottom+e.offset[1]};e._bounds=Ue.bounds(r)}}cancel(){const e=this.state;e.canceled||(e.canceled=!0,e._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(e){const n=this.config,i=this.state;if(e.buttons!=null&&(Array.isArray(n.pointerButtons)?!n.pointerButtons.includes(e.buttons):n.pointerButtons!==-1&&n.pointerButtons!==e.buttons))return;const r=this.ctrl.setEventIds(e);n.pointerCapture&&e.target.setPointerCapture(e.pointerId),!(r&&r.size>1&&i._pointerActive)&&(this.start(e),this.setupPointer(e),i._pointerId=ut(e),i._pointerActive=!0,this.computeValues(We(e)),this.computeInitial(),n.preventScrollAxis&&un(e)!=="mouse"?(i._active=!1,this.setupScrollPrevention(e)):n.delay>0?(this.setupDelayTrigger(e),n.triggerAllEvents&&(this.compute(e),this.emit())):this.startPointerDrag(e))}startPointerDrag(e){const n=this.state;n._active=!0,n._preventScroll=!0,n._delayed=!1,this.compute(e),this.emit()}pointerMove(e){const n=this.state,i=this.config;if(!n._pointerActive)return;const r=ut(e);if(n._pointerId!==void 0&&r!==n._pointerId)return;const o=We(e);if(document.pointerLockElement===e.target?n._delta=[e.movementX,e.movementY]:(n._delta=re.sub(o,n._values),this.computeValues(o)),re.addTo(n._movement,n._delta),this.compute(e),n._delayed&&n.intentional){this.timeoutStore.remove("dragDelay"),n.active=!1,this.startPointerDrag(e);return}if(i.preventScrollAxis&&!n._preventScroll)if(n.axis)if(n.axis===i.preventScrollAxis||i.preventScrollAxis==="xy"){n._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(e);return}else return;this.emit()}pointerUp(e){this.ctrl.setEventIds(e);try{this.config.pointerCapture&&e.target.hasPointerCapture(e.pointerId)&&e.target.releasePointerCapture(e.pointerId)}catch{}const n=this.state,i=this.config;if(!n._active||!n._pointerActive)return;const r=ut(e);if(n._pointerId!==void 0&&r!==n._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(e);const[o,a]=n._distance;if(n.tap=o<=i.tapsThreshold&&a<=i.tapsThreshold,n.tap&&i.filterTaps)n._force=!0;else{const[s,l]=n._delta,[u,d]=n._movement,[g,S]=i.swipe.velocity,[R,Y]=i.swipe.distance,j=i.swipe.duration;if(n.elapsedTime<j){const M=Math.abs(s/n.timeDelta),N=Math.abs(l/n.timeDelta);M>g&&Math.abs(u)>R&&(n.swipe[0]=Math.sign(s)),N>S&&Math.abs(d)>Y&&(n.swipe[1]=Math.sign(l))}}this.emit()}pointerClick(e){!this.state.tap&&e.detail>0&&(e.preventDefault(),e.stopPropagation())}setupPointer(e){const n=this.config,i=n.device;n.pointerLock&&e.currentTarget.requestPointerLock(),n.pointerCapture||(this.eventStore.add(this.sharedConfig.window,i,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,i,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,i,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(e){this.state._preventScroll&&e.cancelable&&e.preventDefault()}setupScrollPrevention(e){this.state._preventScroll=!1,Ji(e);const n=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",n),this.eventStore.add(this.sharedConfig.window,"touch","cancel",n),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,e)}setupDelayTrigger(e){this.state._delayed=!0,this.timeoutStore.add("dragDelay",()=>{this.state._step=[0,0],this.startPointerDrag(e)},this.config.delay)}keyDown(e){const n=Nt[e.key];if(n){const i=this.state,r=e.shiftKey?10:e.altKey?.1:1;this.start(e),i._delta=n(this.config.keyboardDisplacement,r),i._keyboardActive=!0,re.addTo(i._movement,i._delta),this.compute(e),this.emit()}}keyUp(e){e.key in Nt&&(this.state._keyboardActive=!1,this.setActive(),this.compute(e),this.emit())}bind(e){const n=this.config.device;e(n,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(e(n,"change",this.pointerMove.bind(this)),e(n,"end",this.pointerUp.bind(this)),e(n,"cancel",this.pointerUp.bind(this)),e("lostPointerCapture","",this.pointerUp.bind(this))),this.config.keys&&(e("key","down",this.keyDown.bind(this)),e("key","up",this.keyUp.bind(this))),this.config.filterTaps&&e("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}}function Ji(t){"persist"in t&&typeof t.persist=="function"&&t.persist()}const ze=typeof window<"u"&&window.document&&window.document.createElement;function mn(){return ze&&"ontouchstart"in window}function Qi(){return mn()||ze&&window.navigator.maxTouchPoints>1}function er(){return ze&&"onpointerdown"in window}function tr(){return ze&&"exitPointerLock"in window.document}function nr(){try{return"constructor"in GestureEvent}catch{return!1}}const Pe={isBrowser:ze,gesture:nr(),touch:mn(),touchscreen:Qi(),pointer:er(),pointerLock:tr()},ir=250,rr=180,or=.5,ar=50,sr=250,lr=10,Ft={mouse:0,touch:0,pen:8},cr=se(se({},Ue),{},{device(t,e,{pointer:{touch:n=!1,lock:i=!1,mouse:r=!1}={}}){return this.pointerLock=i&&Pe.pointerLock,Pe.touch&&n?"touch":this.pointerLock?"mouse":Pe.pointer&&!r?"pointer":Pe.touch?"touch":"mouse"},preventScrollAxis(t,e,{preventScroll:n}){if(this.preventScrollDelay=typeof n=="number"?n:n||n===void 0&&t?ir:void 0,!(!Pe.touchscreen||n===!1))return t||(n!==void 0?"y":void 0)},pointerCapture(t,e,{pointer:{capture:n=!0,buttons:i=1,keys:r=!0}={}}){return this.pointerButtons=i,this.keys=r,!this.pointerLock&&this.device==="pointer"&&n},threshold(t,e,{filterTaps:n=!1,tapsThreshold:i=3,axis:r=void 0}){const o=re.toVector(t,n?i:r?1:0);return this.filterTaps=n,this.tapsThreshold=i,o},swipe({velocity:t=or,distance:e=ar,duration:n=sr}={}){return{velocity:this.transform(re.toVector(t)),distance:this.transform(re.toVector(e)),duration:n}},delay(t=0){switch(t){case!0:return rr;case!1:return 0;default:return t}},axisThreshold(t){return t?se(se({},Ft),t):Ft},keyboardDisplacement(t=lr){return t}});function gn(t){const[e,n]=t.overflow,[i,r]=t._delta,[o,a]=t._direction;(e<0&&i>0&&o<0||e>0&&i<0&&o>0)&&(t._movement[0]=t._movementBound[0]),(n<0&&r>0&&a<0||n>0&&r<0&&a>0)&&(t._movement[1]=t._movementBound[1])}const ur=30,dr=100;class fr extends pn{constructor(...e){super(...e),he(this,"ingKey","pinching"),he(this,"aliasKey","da")}init(){this.state.offset=[1,0],this.state.lastOffset=[1,0],this.state._pointerEvents=new Map}reset(){super.reset();const e=this.state;e._touchIds=[],e.canceled=!1,e.cancel=this.cancel.bind(this),e.turns=0}computeOffset(){const{type:e,movement:n,lastOffset:i}=this.state;e==="wheel"?this.state.offset=re.add(n,i):this.state.offset=[(1+n[0])*i[0],n[1]+i[1]]}computeMovement(){const{offset:e,lastOffset:n}=this.state;this.state.movement=[e[0]/n[0],e[1]-n[1]]}axisIntent(){const e=this.state,[n,i]=e._movement;if(!e.axis){const r=Math.abs(n)*ur-Math.abs(i);r<0?e.axis="angle":r>0&&(e.axis="scale")}}restrictToAxis(e){this.config.lockDirection&&(this.state.axis==="scale"?e[1]=0:this.state.axis==="angle"&&(e[0]=0))}cancel(){const e=this.state;e.canceled||setTimeout(()=>{e.canceled=!0,e._active=!1,this.compute(),this.emit()},0)}touchStart(e){this.ctrl.setEventIds(e);const n=this.state,i=this.ctrl.touchIds;if(n._active&&n._touchIds.every(o=>i.has(o))||i.size<2)return;this.start(e),n._touchIds=Array.from(i).slice(0,2);const r=Ot(e,n._touchIds);r&&this.pinchStart(e,r)}pointerStart(e){if(e.buttons!=null&&e.buttons%2!==1)return;this.ctrl.setEventIds(e),e.target.setPointerCapture(e.pointerId);const n=this.state,i=n._pointerEvents,r=this.ctrl.pointerIds;if(n._active&&Array.from(i.keys()).every(a=>r.has(a))||(i.size<2&&i.set(e.pointerId,e),n._pointerEvents.size<2))return;this.start(e);const o=mt(...Array.from(i.values()));o&&this.pinchStart(e,o)}pinchStart(e,n){const i=this.state;i.origin=n.origin,this.computeValues([n.distance,n.angle]),this.computeInitial(),this.compute(e),this.emit()}touchMove(e){if(!this.state._active)return;const n=Ot(e,this.state._touchIds);n&&this.pinchMove(e,n)}pointerMove(e){const n=this.state._pointerEvents;if(n.has(e.pointerId)&&n.set(e.pointerId,e),!this.state._active)return;const i=mt(...Array.from(n.values()));i&&this.pinchMove(e,i)}pinchMove(e,n){const i=this.state,r=i._values[1],o=n.angle-r;let a=0;Math.abs(o)>270&&(a+=Math.sign(o)),this.computeValues([n.distance,n.angle-360*a]),i.origin=n.origin,i.turns=a,i._movement=[i._values[0]/i._initial[0]-1,i._values[1]-i._initial[1]],this.compute(e),this.emit()}touchEnd(e){this.ctrl.setEventIds(e),this.state._active&&this.state._touchIds.some(n=>!this.ctrl.touchIds.has(n))&&(this.state._active=!1,this.compute(e),this.emit())}pointerEnd(e){const n=this.state;this.ctrl.setEventIds(e);try{e.target.releasePointerCapture(e.pointerId)}catch{}n._pointerEvents.has(e.pointerId)&&n._pointerEvents.delete(e.pointerId),n._active&&n._pointerEvents.size<2&&(n._active=!1,this.compute(e),this.emit())}gestureStart(e){e.cancelable&&e.preventDefault();const n=this.state;n._active||(this.start(e),this.computeValues([e.scale,e.rotation]),n.origin=[e.clientX,e.clientY],this.compute(e),this.emit())}gestureMove(e){if(e.cancelable&&e.preventDefault(),!this.state._active)return;const n=this.state;this.computeValues([e.scale,e.rotation]),n.origin=[e.clientX,e.clientY];const i=n._movement;n._movement=[e.scale-1,e.rotation],n._delta=re.sub(n._movement,i),this.compute(e),this.emit()}gestureEnd(e){this.state._active&&(this.state._active=!1,this.compute(e),this.emit())}wheel(e){const n=this.config.modifierKey;n&&(Array.isArray(n)?!n.find(i=>e[i]):!e[n])||(this.state._active?this.wheelChange(e):this.wheelStart(e),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this)))}wheelStart(e){this.start(e),this.wheelChange(e)}wheelChange(e){"uv"in e||e.cancelable&&e.preventDefault();const i=this.state;i._delta=[-fn(e)[1]/dr*i.offset[0],0],re.addTo(i._movement,i._delta),gn(i),this.state.origin=[e.clientX,e.clientY],this.compute(e),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(e){const n=this.config.device;n&&(e(n,"start",this[n+"Start"].bind(this)),e(n,"change",this[n+"Move"].bind(this)),e(n,"end",this[n+"End"].bind(this)),e(n,"cancel",this[n+"End"].bind(this)),e("lostPointerCapture","",this[n+"End"].bind(this))),this.config.pinchOnWheel&&e("wheel","",this.wheel.bind(this),{passive:!1})}}const pr=se(se({},hn),{},{device(t,e,{shared:n,pointer:{touch:i=!1}={}}){if(n.target&&!Pe.touch&&Pe.gesture)return"gesture";if(Pe.touch&&i)return"touch";if(Pe.touchscreen){if(Pe.pointer)return"pointer";if(Pe.touch)return"touch"}},bounds(t,e,{scaleBounds:n={},angleBounds:i={}}){const r=a=>{const s=Vt(ot(n,a),{min:-1/0,max:1/0});return[s.min,s.max]},o=a=>{const s=Vt(ot(i,a),{min:-1/0,max:1/0});return[s.min,s.max]};return typeof n!="function"&&typeof i!="function"?[r(),o()]:a=>[r(a),o(a)]},threshold(t,e,n){return this.lockDirection=n.axis==="lock",re.toVector(t,this.lockDirection?[.1,3]:0)},modifierKey(t){return t===void 0?"ctrlKey":t},pinchOnWheel(t=!0){return t}});class hr extends Ze{constructor(...e){super(...e),he(this,"ingKey","moving")}move(e){this.config.mouseOnly&&e.pointerType!=="mouse"||(this.state._active?this.moveChange(e):this.moveStart(e),this.timeoutStore.add("moveEnd",this.moveEnd.bind(this)))}moveStart(e){this.start(e),this.computeValues(We(e)),this.compute(e),this.computeInitial(),this.emit()}moveChange(e){if(!this.state._active)return;const n=We(e),i=this.state;i._delta=re.sub(n,i._values),re.addTo(i._movement,i._delta),this.computeValues(n),this.compute(e),this.emit()}moveEnd(e){this.state._active&&(this.state._active=!1,this.compute(e),this.emit())}bind(e){e("pointer","change",this.move.bind(this)),e("pointer","leave",this.moveEnd.bind(this))}}const mr=se(se({},Ue),{},{mouseOnly:(t=!0)=>t});class gr extends Ze{constructor(...e){super(...e),he(this,"ingKey","scrolling")}scroll(e){this.state._active||this.start(e),this.scrollChange(e),this.timeoutStore.add("scrollEnd",this.scrollEnd.bind(this))}scrollChange(e){e.cancelable&&e.preventDefault();const n=this.state,i=Ui(e);n._delta=re.sub(i,n._values),re.addTo(n._movement,n._delta),this.computeValues(i),this.compute(e),this.emit()}scrollEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(e){e("scroll","",this.scroll.bind(this))}}const yr=Ue;class vr extends Ze{constructor(...e){super(...e),he(this,"ingKey","wheeling")}wheel(e){this.state._active||this.start(e),this.wheelChange(e),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this))}wheelChange(e){const n=this.state;n._delta=fn(e),re.addTo(n._movement,n._delta),gn(n),this.compute(e),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(e){e("wheel","",this.wheel.bind(this))}}const br=Ue;class xr extends Ze{constructor(...e){super(...e),he(this,"ingKey","hovering")}enter(e){this.config.mouseOnly&&e.pointerType!=="mouse"||(this.start(e),this.computeValues(We(e)),this.compute(e),this.emit())}leave(e){if(this.config.mouseOnly&&e.pointerType!=="mouse")return;const n=this.state;if(!n._active)return;n._active=!1;const i=We(e);n._movement=n._delta=re.sub(i,n._values),this.computeValues(i),this.compute(e),n.delta=n.movement,this.emit()}bind(e){e("pointer","enter",this.enter.bind(this)),e("pointer","leave",this.leave.bind(this))}}const wr=se(se({},Ue),{},{mouseOnly:(t=!0)=>t}),kt=new Map,gt=new Map;function Tr(t){kt.set(t.key,t.engine),gt.set(t.key,t.resolver)}const _r={key:"drag",engine:zi,resolver:cr},kr={key:"hover",engine:xr,resolver:wr},Sr={key:"move",engine:hr,resolver:mr},Pr={key:"pinch",engine:fr,resolver:pr},Mr={key:"scroll",engine:gr,resolver:yr},Er={key:"wheel",engine:vr,resolver:br};function Dr(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Ar(t,e){if(t==null)return{};var n=Dr(t,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}const Cr={target(t){if(t)return()=>"current"in t?t.current:t},enabled(t=!0){return t},window(t=Pe.isBrowser?window:void 0){return t},eventOptions({passive:t=!0,capture:e=!1}={}){return{passive:t,capture:e}},transform(t){return t}},Xr=["target","eventOptions","window","enabled","transform"];function rt(t={},e){const n={};for(const[i,r]of Object.entries(e))switch(typeof r){case"function":n[i]=r.call(n,t[i],i,t);break;case"object":n[i]=rt(t[i],r);break;case"boolean":r&&(n[i]=t[i]);break}return n}function Rr(t,e,n={}){const i=t,{target:r,eventOptions:o,window:a,enabled:s,transform:l}=i,u=Ar(i,Xr);if(n.shared=rt({target:r,eventOptions:o,window:a,enabled:s,transform:l},Cr),e){const d=gt.get(e);n[e]=rt(se({shared:n.shared},u),d)}else for(const d in u){const g=gt.get(d);g&&(n[d]=rt(se({shared:n.shared},u[d]),g))}return n}class yn{constructor(e,n){he(this,"_listeners",new Set),this._ctrl=e,this._gestureKey=n}add(e,n,i,r,o){const a=this._listeners,s=Oi(n,i),l=this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{},u=se(se({},l),o);e.addEventListener(s,r,u);const d=()=>{e.removeEventListener(s,r,u),a.delete(d)};return a.add(d),d}clean(){this._listeners.forEach(e=>e()),this._listeners.clear()}}class Ir{constructor(){he(this,"_timeouts",new Map)}add(e,n,i=140,...r){this.remove(e),this._timeouts.set(e,window.setTimeout(n,i,...r))}remove(e){const n=this._timeouts.get(e);n&&window.clearTimeout(n)}clean(){this._timeouts.forEach(e=>void window.clearTimeout(e)),this._timeouts.clear()}}class Yr{constructor(e){he(this,"gestures",new Set),he(this,"_targetEventStore",new yn(this)),he(this,"gestureEventStores",{}),he(this,"gestureTimeoutStores",{}),he(this,"handlers",{}),he(this,"config",{}),he(this,"pointerIds",new Set),he(this,"touchIds",new Set),he(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),jr(this,e)}setEventIds(e){if(st(e))return this.touchIds=new Set(Vi(e)),this.touchIds;if("pointerId"in e)return e.type==="pointerup"||e.type==="pointercancel"?this.pointerIds.delete(e.pointerId):e.type==="pointerdown"&&this.pointerIds.add(e.pointerId),this.pointerIds}applyHandlers(e,n){this.handlers=e,this.nativeHandlers=n}applyConfig(e,n){this.config=Rr(e,n,this.config)}clean(){this._targetEventStore.clean();for(const e of this.gestures)this.gestureEventStores[e].clean(),this.gestureTimeoutStores[e].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...e){const n=this.config.shared,i={};let r;if(!(n.target&&(r=n.target(),!r))){if(n.enabled){for(const a of this.gestures){const s=this.config[a],l=Ht(i,s.eventOptions,!!r);if(s.enabled){const u=kt.get(a);new u(this,e,a).bind(l)}}const o=Ht(i,n.eventOptions,!!r);for(const a in this.nativeHandlers)o(a,"",s=>this.nativeHandlers[a](se(se({},this.state.shared),{},{event:s,args:e})),void 0,!0)}for(const o in i)i[o]=Hi(...i[o]);if(!r)return i;for(const o in i){const{device:a,capture:s,passive:l}=Li(o);this._targetEventStore.add(r,a,"",i[o],{capture:s,passive:l})}}}}function Fe(t,e){t.gestures.add(e),t.gestureEventStores[e]=new yn(t,e),t.gestureTimeoutStores[e]=new Ir}function jr(t,e){e.drag&&Fe(t,"drag"),e.wheel&&Fe(t,"wheel"),e.scroll&&Fe(t,"scroll"),e.move&&Fe(t,"move"),e.pinch&&Fe(t,"pinch"),e.hover&&Fe(t,"hover")}const Ht=(t,e,n)=>(i,r,o,a={},s=!1)=>{var l,u;const d=(l=a.capture)!==null&&l!==void 0?l:e.capture,g=(u=a.passive)!==null&&u!==void 0?u:e.passive;let S=s?i:ji(i,r,d);n&&g&&(S+="Passive"),t[S]=t[S]||[],t[S].push(o)},qr=/^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;function Lr(t){const e={},n={},i=new Set;for(let r in t)qr.test(r)?(i.add(RegExp.lastMatch),n[r]=t[r]):e[r]=t[r];return[n,e,i]}function He(t,e,n,i,r,o){if(!t.has(n)||!kt.has(i))return;const a=n+"Start",s=n+"End",l=u=>{let d;return u.first&&a in e&&e[a](u),n in e&&(d=e[n](u)),u.last&&s in e&&e[s](u),d};r[i]=l,o[i]=o[i]||{}}function Or(t,e){const[n,i,r]=Lr(t),o={};return He(r,n,"onDrag","drag",o,e),He(r,n,"onWheel","wheel",o,e),He(r,n,"onScroll","scroll",o,e),He(r,n,"onPinch","pinch",o,e),He(r,n,"onMove","move",o,e),He(r,n,"onHover","hover",o,e),{handlers:o,config:e,nativeHandlers:i}}function Br(t,e={},n,i){const r=De.useMemo(()=>new Yr(t),[]);if(r.applyHandlers(t,i),r.applyConfig(e,n),De.useEffect(r.effect.bind(r)),De.useEffect(()=>r.clean.bind(r),[]),e.target===void 0)return r.bind.bind(r)}function $r(t){return t.forEach(Tr),function(n,i){const{handlers:r,nativeHandlers:o,config:a}=Or(n,i||{});return Br(r,a,void 0,o)}}function Vr(t,e){return $r([_r,Pr,Mr,Er,Sr,kr])(t,e||{})}function Ur(){return{scaleX:1,scaleY:1,translateX:0,translateY:0,skewX:0,skewY:0}}function vn(t){var e=t.scaleX,n=e===void 0?1:e,i=t.scaleY,r=i===void 0?1:i,o=t.translateX,a=o===void 0?0:o,s=t.translateY,l=s===void 0?0:s,u=t.skewX,d=u===void 0?0:u,g=t.skewY,S=g===void 0?0:g;return{scaleX:n,scaleY:r,translateX:a,translateY:l,skewX:d,skewY:S}}function bn(t){var e=t.scaleX,n=t.scaleY,i=t.translateX,r=t.translateY,o=t.skewX,a=t.skewY,s=e*n-a*o;return{scaleX:n/s,scaleY:e/s,translateX:(n*i-o*r)/-s,translateY:(a*i-e*r)/s,skewX:o/-s,skewY:a/-s}}function xn(t,e){var n=e.x,i=e.y;return{x:t.scaleX*n+t.skewX*i+t.translateX,y:t.skewY*n+t.scaleY*i+t.translateY}}function dt(t,e){var n=e.x,i=e.y;return xn(bn(t),{x:n,y:i})}function Nr(t,e){e===void 0&&(e=void 0);var n=e||t;return vn({scaleX:t,scaleY:n})}function ft(t,e){return vn({translateX:t,translateY:e})}function Wt(t,e){return{scaleX:t.scaleX*e.scaleX+t.skewX*e.skewY,scaleY:t.skewY*e.skewX+t.scaleY*e.scaleY,translateX:t.scaleX*e.translateX+t.skewX*e.translateY+t.translateX,translateY:t.skewY*e.translateX+t.scaleY*e.translateY+t.translateY,skewX:t.scaleX*e.skewX+t.skewX*e.scaleY,skewY:t.skewY*e.scaleX+t.scaleY*e.skewY}}function yt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];switch(e.length){case 0:throw new Error("composeMatrices() requires arguments: was called with no args");case 1:return e[0];case 2:return Wt(e[0],e[1]);default:{var i=e[0],r=e[1],o=e.slice(2),a=Wt(i,r);return yt.apply(void 0,[a].concat(o))}}}function vt(){return vt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},vt.apply(this,arguments)}var Fr={scaleX:1,scaleY:1,translateX:0,translateY:0,skewX:0,skewY:0},Hr=function(e){return-e.deltaY>0?{scaleX:1.1,scaleY:1.1}:{scaleX:.9,scaleY:.9}},Wr=function(e){var n=e.offset,i=n[0],r=e.lastOffset,o=r[0];return{scaleX:i-o<0?.9:1.1,scaleY:i-o<0?.9:1.1}};function wn(t){var e=t.scaleXMin,n=e===void 0?0:e,i=t.scaleXMax,r=i===void 0?1/0:i,o=t.scaleYMin,a=o===void 0?0:o,s=t.scaleYMax,l=s===void 0?1/0:s,u=t.initialTransformMatrix,d=u===void 0?Fr:u,g=t.wheelDelta,S=g===void 0?Hr:g,R=t.pinchDelta,Y=R===void 0?Wr:R,j=t.width,M=t.height,N=t.constrain,ee=t.children,K=b.useRef(null),G=b.useRef(d),me=b.useState(d),D=me[0],y=me[1],v=b.useState(!1),f=v[0],x=v[1],w=b.useState(void 0),m=w[0],p=w[1],P=b.useState(void 0),V=P[0],te=P[1],B=b.useCallback(function(_,k){if(N)return N(_,k);var X=_.scaleX,F=_.scaleY,ie=X>r||X<n,pe=F>l||F<a;return ie||pe?k:_},[N,n,r,a,l]),W=b.useCallback(function(_){y(function(k){var X=B(_,k);return G.current=X,X})},[B]),oe=b.useCallback(function(_){var k=_.x,X=_.y;return xn(D,{x:k,y:X})},[D]),$=b.useCallback(function(_){var k=_.x,X=_.y;return dt(D,{x:k,y:X})},[D]),J=b.useCallback(function(){W(d)},[d,W]),Z=b.useCallback(function(_){var k=_.scaleX,X=_.scaleY,F=_.point,ie=X||k,pe=F||{x:j/2,y:M/2},be=dt(G.current,pe),Se=yt(G.current,ft(be.x,be.y),Nr(k,ie),ft(-be.x,-be.y));if(W(Se),f){var Te=G.current,Xe=Te.translateX,Me=Te.translateY;te(F),p({translateX:Xe,translateY:Me})}},[M,j,f,W]),ae=b.useCallback(function(_){var k=_.translateX,X=_.translateY,F=yt(D,ft(k,X));W(F)},[W,D]),le=b.useCallback(function(_){var k=_.translateX,X=_.translateY,F=vt({},D,{translateX:k,translateY:X});W(F)},[W,D]),T=b.useCallback(function(_){var k=_.x,X=_.y,F=dt(D,{x:k,y:X});le({translateX:F.x,translateY:F.y})},[le,D]),C=b.useCallback(function(){return bn(D)},[D]),L=b.useCallback(function(){var _=C(),k=_.translateX,X=_.translateY,F=_.scaleX,ie=_.scaleY,pe=_.skewX,be=_.skewY;return"matrix("+F+", "+be+", "+pe+", "+ie+", "+k+", "+X+")"},[C]),I=b.useCallback(function(_){var k=D.translateX,X=D.translateY;te($e(_)||void 0),p({translateX:k,translateY:X}),x(!0)},[D]),ne=b.useCallback(function(_,k){var X,F;if(!(!f||!V||!m)){var ie=$e(_),pe=ie?-(V.x-ie.x):-V.x,be=ie?-(V.y-ie.y):-V.y,Se=m.translateX+pe;k!=null&&k.offsetX&&(Se+=(X=k==null?void 0:k.offsetX)!=null?X:0);var Te=m.translateY+be;k!=null&&k.offsetY&&(Te+=(F=k==null?void 0:k.offsetY)!=null?F:0),le({translateX:Se,translateY:Te})}},[f,le,V,m]),ue=b.useCallback(function(){te(void 0),p(void 0),x(!1)},[]),ve=b.useCallback(function(_){_.preventDefault();var k=$e(_)||void 0,X=S(_),F=X.scaleX,ie=X.scaleY;Z({scaleX:F,scaleY:ie,point:k})},[Z,S]),ge=b.useCallback(function(_){var k=_.origin,X=k[0],F=k[1],ie=_.memo,pe=ie;if(K.current){var be,Se=(be=pe)!=null?be:K.current.getBoundingClientRect(),Te=Se.top,Xe=Se.left;pe||(pe={top:Te,left:Xe});var Me=Y(_),c=Me.scaleX,A=Me.scaleY;Z({scaleX:c,scaleY:A,point:{x:X-Xe,y:F-Te}})}return pe},[Z,Y]),ye=b.useCallback(function(){var _=D.translateX,k=D.translateY,X=D.scaleX,F=D.scaleY,ie=D.skewX,pe=D.skewY;return"matrix("+X+", "+pe+", "+ie+", "+F+", "+_+", "+k+")"},[D]),fe=b.useCallback(function(){var _={x:j/2,y:M/2},k=$(_);ae({translateX:k.x-_.x,translateY:k.y-_.y})},[M,j,$,ae]),we=b.useCallback(function(){W(Ur())},[W]);Vr({onDragStart:function(k){var X=k.event;X instanceof KeyboardEvent||I(X)},onDrag:function(k){var X=k.event,F=k.pinching,ie=k.cancel;F?(ie(),ue()):X instanceof KeyboardEvent||ne(X)},onDragEnd:ue,onPinch:ge,onWheel:function(k){var X=k.event,F=k.active,ie=k.pinching;ie||!F||ve(X)}},{target:K,eventOptions:{passive:!1},drag:{filterTaps:!0}});var Ne={initialTransformMatrix:d,transformMatrix:D,isDragging:f,center:fe,clear:we,scale:Z,translate:ae,translateTo:T,setTranslate:le,setTransformMatrix:W,reset:J,handleWheel:ve,handlePinch:ge,dragEnd:ue,dragMove:ne,dragStart:I,toString:ye,invert:C,toStringInvert:L,applyToPoint:oe,applyInverseToPoint:$,containerRef:K};return De.createElement(De.Fragment,null,ee(Ne))}wn.propTypes={width:Ie.number.isRequired,height:Ie.number.isRequired,wheelDelta:Ie.func,scaleXMin:Ie.number,scaleXMax:Ie.number,scaleYMin:Ie.number,scaleYMax:Ie.number,constrain:Ie.func,children:Ie.func.isRequired};var bt=Math.PI,xt=2*bt,Be=1e-6,Gr=xt-Be;function wt(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function Tn(){return new wt}wt.prototype=Tn.prototype={constructor:wt,moveTo:function(t,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,e){this._+="L"+(this._x1=+t)+","+(this._y1=+e)},quadraticCurveTo:function(t,e,n,i){this._+="Q"+ +t+","+ +e+","+(this._x1=+n)+","+(this._y1=+i)},bezierCurveTo:function(t,e,n,i,r,o){this._+="C"+ +t+","+ +e+","+ +n+","+ +i+","+(this._x1=+r)+","+(this._y1=+o)},arcTo:function(t,e,n,i,r){t=+t,e=+e,n=+n,i=+i,r=+r;var o=this._x1,a=this._y1,s=n-t,l=i-e,u=o-t,d=a-e,g=u*u+d*d;if(r<0)throw new Error("negative radius: "+r);if(this._x1===null)this._+="M"+(this._x1=t)+","+(this._y1=e);else if(g>Be)if(!(Math.abs(d*s-l*u)>Be)||!r)this._+="L"+(this._x1=t)+","+(this._y1=e);else{var S=n-o,R=i-a,Y=s*s+l*l,j=S*S+R*R,M=Math.sqrt(Y),N=Math.sqrt(g),ee=r*Math.tan((bt-Math.acos((Y+g-j)/(2*M*N)))/2),K=ee/N,G=ee/M;Math.abs(K-1)>Be&&(this._+="L"+(t+K*u)+","+(e+K*d)),this._+="A"+r+","+r+",0,0,"+ +(d*S>u*R)+","+(this._x1=t+G*s)+","+(this._y1=e+G*l)}},arc:function(t,e,n,i,r,o){t=+t,e=+e,n=+n,o=!!o;var a=n*Math.cos(i),s=n*Math.sin(i),l=t+a,u=e+s,d=1^o,g=o?i-r:r-i;if(n<0)throw new Error("negative radius: "+n);this._x1===null?this._+="M"+l+","+u:(Math.abs(this._x1-l)>Be||Math.abs(this._y1-u)>Be)&&(this._+="L"+l+","+u),n&&(g<0&&(g=g%xt+xt),g>Gr?this._+="A"+n+","+n+",0,1,"+d+","+(t-a)+","+(e-s)+"A"+n+","+n+",0,1,"+d+","+(this._x1=l)+","+(this._y1=u):g>Be&&(this._+="A"+n+","+n+",0,"+ +(g>=bt)+","+d+","+(this._x1=t+n*Math.cos(r))+","+(this._y1=e+n*Math.sin(r))))},rect:function(t,e,n,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)+"h"+ +n+"v"+ +i+"h"+-n+"Z"},toString:function(){return this._}};function it(t){return function(){return t}}function _n(t){this._context=t}_n.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e);break}}};function Kr(t){return new _n(t)}function Zr(t){return t[0]}function zr(t){return t[1]}function Jr(){var t=Zr,e=zr,n=it(!0),i=null,r=Kr,o=null;function a(s){var l,u=s.length,d,g=!1,S;for(i==null&&(o=r(S=Tn())),l=0;l<=u;++l)!(l<u&&n(d=s[l],l,s))===g&&((g=!g)?o.lineStart():o.lineEnd()),g&&o.point(+t(d,l,s),+e(d,l,s));if(S)return o=null,S+""||null}return a.x=function(s){return arguments.length?(t=typeof s=="function"?s:it(+s),a):t},a.y=function(s){return arguments.length?(e=typeof s=="function"?s:it(+s),a):e},a.defined=function(s){return arguments.length?(n=typeof s=="function"?s:it(!!s),a):n},a.curve=function(s){return arguments.length?(r=s,i!=null&&(o=r(i)),a):r},a.context=function(s){return arguments.length?(s==null?i=o=null:o=r(i=s),a):i},a}function Gt(t,e,n){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+e)/6,(t._y0+4*t._y1+n)/6)}function kn(t){this._context=t}kn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Gt(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Gt(this,t,e);break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e}};function Qr(t){return new kn(t)}function Kt(t,e){t(e)}function eo(t){var e=t===void 0?{}:t,n=e.x,i=e.y,r=e.defined,o=e.curve,a=Jr();return n&&Kt(a.x,n),i&&Kt(a.y,i),r&&a.defined(r),o&&a.curve(o),a}var to=["children","data","x","y","fill","className","curve","innerRef","defined"];function Tt(){return Tt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Tt.apply(this,arguments)}function no(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function io(t){var e=t.children,n=t.data,i=n===void 0?[]:n,r=t.x,o=t.y,a=t.fill,s=a===void 0?"transparent":a,l=t.className,u=t.curve,d=t.innerRef,g=t.defined,S=g===void 0?function(){return!0}:g,R=no(t,to),Y=eo({x:r,y:o,defined:S,curve:u});return e?De.createElement(De.Fragment,null,e({path:Y})):De.createElement("path",Tt({ref:d,className:Jn("visx-linepath",l),d:Y(i)||"",fill:s,strokeLinecap:"round"},R))}function ro(t){var e=b.useState(t),n=e[0],i=e[1],r=b.useRef(null),o=b.useCallback(function(a,s){r.current=s||null,i(a)},[i]);return b.useLayoutEffect(function(){r.current&&(r.current(n),r.current=null)},[n]),[n,o]}function Zt(t,e,n){return Math.min(Math.max(t,e),n)}function oo(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=ao(t))||e){n&&(t=n);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ao(t,e){if(t){if(typeof t=="string")return zt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zt(t,e)}}function zt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function so(t,e){for(var n=t,i=1/0,r=oo(e),o;!(o=r()).done;){var a=o.value,s=Math.sqrt(Math.pow(a.x-t.x,2)+Math.pow(a.y-t.y,2));s<i&&(i=s,n={x:a.x,y:a.y})}return n}function Jt(t,e,n){var i,r,o,a;return n===void 0&&(n={}),e.length>0?so(t,e):{x:Zt(t.x,(i=n.xMin)!=null?i:-1/0,(r=n.xMax)!=null?r:1/0),y:Zt(t.y,(o=n.yMin)!=null?o:-1/0,(a=n.yMax)!=null?a:1/0)}}function lo(t,e,n){if(n===void 0&&(n=1),!t)return[];for(var i=[],r=t.getTotalLength(),o=0;o<=r;o+=n){var a=t.getPointAtLength(o),s=a.matrixTransform(e);i.push(s)}return i}function co(t){var e=b.useMemo(function(){if(!t)return[];var n=t.getCTM()||new DOMMatrix;return lo(t,n)},[t==null?void 0:t.getTotalLength()]);return e}function Ce(){return Ce=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ce.apply(this,arguments)}function uo(t){var e=t===void 0?{}:t,n=e.resetOnStart,i=n===void 0?!1:n,r=e.snapToPointer,o=r===void 0?!0:r,a=e.onDragEnd,s=e.onDragMove,l=e.onDragStart,u=e.x,d=e.y,g=e.dx,S=e.dy,R=e.isDragging,Y=e.restrict,j=Y===void 0?{}:Y,M=e.restrictToPath,N=b.useRef({x:u,y:d,dx:g,dy:S}),ee=ro({x:u,y:d,dx:g??0,dy:S??0,isDragging:!1}),K=ee[0],G=ee[1],me=b.useState(new Oe({x:0,y:0})),D=me[0],y=me[1];b.useEffect(function(){(N.current.x!==u||N.current.y!==d||N.current.dx!==g||N.current.dy!==S)&&(N.current={x:u,y:d,dx:g,dy:S},G(function(m){return Ce({},m,{x:u,y:d,dx:g??0,dy:S??0})}))}),b.useEffect(function(){R!==void 0&&K.isDragging!==R&&G(function(m){return Ce({},m,{isDragging:R})})},[K.isDragging,R,G]);var v=co(M),f=b.useCallback(function(m){m.persist(),G(function(p){var P=p.x,V=P===void 0?0:P,te=p.y,B=te===void 0?0:te,W=p.dx,oe=p.dy,$=new Oe({x:(V||0)+W,y:(B||0)+oe}),J=$e(m)||new Oe({x:0,y:0}),Z=o?J:$,ae=Jt(Z,v,j);return y(wi($,J)),{isDragging:!0,dx:i?0:p.dx,dy:i?0:p.dy,x:i?ae.x:ae.x-p.dx,y:i?ae.y:ae.y-p.dy}},l&&function(p){l(Ce({},p,{event:m}))})},[l,i,j,v,G,o]),x=b.useCallback(function(m){m.persist(),G(function(p){if(!p.isDragging)return p;var P=p.x,V=P===void 0?0:P,te=p.y,B=te===void 0?0:te,W=$e(m)||new Oe({x:0,y:0}),oe=o?W:xi(W,D),$=Jt(oe,v,j);return Ce({},p,{dx:$.x-V,dy:$.y-B})},s&&function(p){p.isDragging&&s(Ce({},p,{event:m}))})},[G,s,o,D,v,j]),w=b.useCallback(function(m){m.persist(),G(function(p){return Ce({},p,{isDragging:!1})},a&&function(p){a(Ce({},p,{event:m}))})},[a,G]);return Ce({},K,{dragEnd:w,dragMove:x,dragStart:f})}const Sn=({tooltipBody:t,tooltipData:e})=>h.jsx("div",{children:t?t(e):h.jsx("div",{children:e.metaData&&Object.entries(e.metaData).map(([n,i])=>h.jsxs("div",{children:[h.jsxs("strong",{children:[n.charAt(0).toUpperCase()+n.slice(1),": "]}),typeof i=="string"?i.length>45?`${i.replace(/_/g," ").slice(0,45)}...`:i.replace(/_/g," "):String(i)]},n))})});Sn.__docgenInfo={description:"",methods:[],displayName:"ScatterTooltip",props:{tooltipBody:{required:!1,tsType:{name:"signature",type:"function",raw:"(point: Point<T>) => JSX.Element",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
    /**
     * X and Y coordinates of point on plot (required)
     */
    x: number;
    y: number;
    /**
     * Shape of the point
     * @default
     * "circle"
     * 
     */
    shape?: "circle" | "triangle";
    /**
     * Radius of the point
     * @default
     * 3
     * (5 if hovered)
     */
    r?: number;
    /**
     * Fill color of the point
     * @default
     * "black"
     */
    color?: string;
    /**
     * Transparency ofe the point
     * @default
     * 1 (opaque)
     */
    opacity?: number;
    /**
     * Any and all metadata the user wishes to include with the point.
     * this will be used to display the tooltip on the hover of the point
     * @example
     * metaData: {
          name: x.displayname,
          accession: x.experimentAccession
        }
     */
    metaData?: T;
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0},description:"X and Y coordinates of point on plot (required)"},{key:"y",value:{name:"number",required:!0}},{key:"shape",value:{name:"union",raw:'"circle" | "triangle"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"triangle"'}],required:!1},description:`Shape of the point
@default
"circle"`},{key:"r",value:{name:"number",required:!1},description:`Radius of the point
@default
3
(5 if hovered)`},{key:"color",value:{name:"string",required:!1},description:`Fill color of the point
@default
"black"`},{key:"opacity",value:{name:"number",required:!1},description:`Transparency ofe the point
@default
1 (opaque)`},{key:"metaData",value:{name:"T",required:!1},description:`Any and all metadata the user wishes to include with the point.
this will be used to display the tooltip on the hover of the point
@example
metaData: {
          name: x.displayname,
          accession: x.experimentAccession
        }`}]}},name:"point"}],return:{name:"JSX.Element"}}},description:""},tooltipData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    /**
     * X and Y coordinates of point on plot (required)
     */
    x: number;
    y: number;
    /**
     * Shape of the point
     * @default
     * "circle"
     * 
     */
    shape?: "circle" | "triangle";
    /**
     * Radius of the point
     * @default
     * 3
     * (5 if hovered)
     */
    r?: number;
    /**
     * Fill color of the point
     * @default
     * "black"
     */
    color?: string;
    /**
     * Transparency ofe the point
     * @default
     * 1 (opaque)
     */
    opacity?: number;
    /**
     * Any and all metadata the user wishes to include with the point.
     * this will be used to display the tooltip on the hover of the point
     * @example
     * metaData: {
          name: x.displayname,
          accession: x.experimentAccession
        }
     */
    metaData?: T;
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0},description:"X and Y coordinates of point on plot (required)"},{key:"y",value:{name:"number",required:!0}},{key:"shape",value:{name:"union",raw:'"circle" | "triangle"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"triangle"'}],required:!1},description:`Shape of the point
@default
"circle"`},{key:"r",value:{name:"number",required:!1},description:`Radius of the point
@default
3
(5 if hovered)`},{key:"color",value:{name:"string",required:!1},description:`Fill color of the point
@default
"black"`},{key:"opacity",value:{name:"number",required:!1},description:`Transparency ofe the point
@default
1 (opaque)`},{key:"metaData",value:{name:"T",required:!1},description:`Any and all metadata the user wishes to include with the point.
this will be used to display the tooltip on the hover of the point
@example
metaData: {
          name: x.displayname,
          accession: x.experimentAccession
        }`}]}},description:""}}};const fo=Ve(h.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),po=Ve(h.jsx("path",{d:"M17 5h-2V3h2zm-2 16h2v-2.59L19.59 21 21 19.59 18.41 17H21v-2h-6zm4-12h2V7h-2zm0 4h2v-2h-2zm-8 8h2v-2h-2zM7 5h2V3H7zM3 17h2v-2H3zm2 4v-2H3c0 1.1.9 2 2 2M19 3v2h2c0-1.1-.9-2-2-2m-8 2h2V3h-2zM3 9h2V7H3zm4 12h2v-2H7zm-4-8h2v-2H3zm0-8h2V3c-1.1 0-2 .9-2 2"}),"HighlightAlt"),ho=Ve(h.jsx("path",{d:"M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5"}),"PanTool"),mo=Ve(h.jsx("path",{d:"M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2m-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9"}),"SettingsBackupRestore"),go=Ve([h.jsx("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"},"0"),h.jsx("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2z"},"1")],"ZoomIn"),yo=Ve(h.jsx("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14M7 9h5v1H7z"}),"ZoomOut"),Pn=({selectable:t,resetable:e,handleSelectionModeChange:n,selectMode:i,zoomIn:r,zoomOut:o,zoomReset:a,position:s,highlight:l,downloadButton:u,downloadPlot:d})=>(b.useEffect(()=>{const g=S=>{if(S.key==="Shift"&&t&&i==="select"){n("pan");const R=Y=>{Y.key==="Shift"&&t&&n("select")};return window.addEventListener("keyup",R),()=>{window.removeEventListener("keyup",R)}}};return window.addEventListener("keydown",g),()=>{window.removeEventListener("keydown",g)}},[n,i,t]),h.jsx(h.Fragment,{children:i!=="none"&&h.jsxs(ht,{direction:s==="bottom"?"row":"column",spacing:5,alignItems:"center",justifyContent:"center",children:[t&&h.jsx(Le,{title:"Drag to pan, or hold Shift and drag",children:h.jsx(qe,{"aria-label":"pan",onClick:()=>n("pan"),sx:{color:i==="pan"?l||"primary.main":"default"},children:h.jsx(ho,{})})}),t&&h.jsx(Le,{title:"Drag to select",children:h.jsx(qe,{"aria-label":"edit",onClick:()=>n("select"),sx:{color:i==="select"?l||"primary.main":"default"},children:h.jsx(fo,{})})}),h.jsx(Le,{title:"Zoom In",children:h.jsx(qe,{"aria-label":"zoom-in",onClick:r,children:h.jsx(go,{})})}),h.jsx(Le,{title:"Zoom Out",children:h.jsx(qe,{"aria-label":"zoom-out",onClick:o,children:h.jsx(yo,{})})}),h.jsx(Le,{title:"Reset Zoom and Pan",children:h.jsx(qe,{"aria-label":"resetZoom",onClick:a,disabled:!e,children:h.jsx(mo,{})})}),u==="inline"&&h.jsx(Le,{title:"Download Plot as PNG",children:h.jsx(qe,{"aria-label":"download",onClick:()=>d(),children:h.jsx(ln,{})})})]})}));Pn.__docgenInfo={description:"",methods:[],displayName:"ControlButtons",props:{selectable:{required:!0,tsType:{name:"boolean"},description:""},resetable:{required:!0,tsType:{name:"boolean"},description:""},handleSelectionModeChange:{required:!0,tsType:{name:"signature",type:"function",raw:'(mode: "select" | "pan" | "none") => void',signature:{arguments:[{type:{name:"union",raw:'"select" | "pan" | "none"',elements:[{name:"literal",value:'"select"'},{name:"literal",value:'"pan"'},{name:"literal",value:'"none"'}]},name:"mode"}],return:{name:"void"}}},description:""},selectMode:{required:!0,tsType:{name:"union",raw:'"select" | "pan" | "none"',elements:[{name:"literal",value:'"select"'},{name:"literal",value:'"pan"'},{name:"literal",value:'"none"'}]},description:""},zoomIn:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},zoomOut:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},zoomReset:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},position:{required:!1,tsType:{name:"union",raw:'"left" | "bottom" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"right"'}]},description:""},highlight:{required:!1,tsType:{name:"string"},description:""},downloadButton:{required:!0,tsType:{name:"union",raw:'"none" | "inline" | "topRight" | "topLeft" | "bottomRight" | "bottomLeft"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"inline"'},{name:"literal",value:'"topRight"'},{name:"literal",value:'"topLeft"'},{name:"literal",value:'"bottomRight"'},{name:"literal",value:'"bottomLeft"'}]},description:""},downloadPlot:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Mn=({miniMap:t,width:e,height:n,pointData:i,xScale:r,yScale:o,zoom:a})=>h.jsxs("div",{style:{position:"absolute",bottom:t.position?t.position.bottom:10,right:t.position?t.position.right:10},children:[h.jsx("canvas",{width:(e-100)/4,height:(n-100)/4,ref:s=>{if(s){const l=s.getContext("2d"),u=.25,d=(e-100)*u,g=(n-100)*u;l&&(l.clearRect(0,0,s.width,s.height),l.fillStyle="white",l.fillRect(0,0,d,g),l.strokeStyle="grey",l.lineWidth=4,l.strokeRect(0,0,d,g),i.forEach(S=>{const R=r(S.x)*u,Y=o(S.y)*u;l.beginPath(),l.arc(R,Y,3*u,0,Math.PI*2),l.fillStyle=S.color,l.fill()}))}},style:{display:"block"}}),h.jsx("svg",{width:(e-100)/4,height:(n-100)/4,style:{position:"absolute",top:0,left:0},children:h.jsx("g",{transform:"scale(0.25)",children:h.jsx("rect",{width:e-100,height:n-100,fill:"#0d0f98",fillOpacity:.2,stroke:"#0d0f98",strokeWidth:4,rx:8,transform:a.toStringInvert(),style:{cursor:a.isDragging?"grabbing":"grab"},onMouseDown:a.dragStart,onMouseUp:a.dragEnd,onMouseMove:s=>{a.isDragging&&a.setTransformMatrix({scaleX:a.transformMatrix.scaleX,scaleY:a.transformMatrix.scaleY,translateX:a.transformMatrix.translateX-s.movementX/.25,translateY:a.transformMatrix.translateY-s.movementY/.25,skewX:a.transformMatrix.skewX,skewY:a.transformMatrix.skewY})},onMouseLeave:a.dragEnd,onTouchStart:a.dragStart,onTouchEnd:a.dragEnd,onTouchMove:s=>{if(a.isDragging&&s.touches.length===1){const l=s.touches[0];a.setTransformMatrix({scaleX:a.transformMatrix.scaleX,scaleY:a.transformMatrix.scaleY,translateX:a.transformMatrix.translateX-l.clientX/.25,translateY:a.transformMatrix.translateY-l.clientY/.25,skewX:a.transformMatrix.skewX,skewY:a.transformMatrix.skewY})}}})})})]});Mn.__docgenInfo={description:"",methods:[],displayName:"MiniMap",props:{miniMap:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    position?: { 
        right: number; 
        bottom: number 
    };
}`,signature:{properties:[{key:"position",value:{name:"signature",type:"object",raw:`{ 
    right: number; 
    bottom: number 
}`,signature:{properties:[{key:"right",value:{name:"number",required:!0}},{key:"bottom",value:{name:"number",required:!0}}]},required:!1}}]}},description:""},width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},pointData:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    /**
     * X and Y coordinates of point on plot (required)
     */
    x: number;
    y: number;
    /**
     * Shape of the point
     * @default
     * "circle"
     * 
     */
    shape?: "circle" | "triangle";
    /**
     * Radius of the point
     * @default
     * 3
     * (5 if hovered)
     */
    r?: number;
    /**
     * Fill color of the point
     * @default
     * "black"
     */
    color?: string;
    /**
     * Transparency ofe the point
     * @default
     * 1 (opaque)
     */
    opacity?: number;
    /**
     * Any and all metadata the user wishes to include with the point.
     * this will be used to display the tooltip on the hover of the point
     * @example
     * metaData: {
          name: x.displayname,
          accession: x.experimentAccession
        }
     */
    metaData?: T;
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0},description:"X and Y coordinates of point on plot (required)"},{key:"y",value:{name:"number",required:!0}},{key:"shape",value:{name:"union",raw:'"circle" | "triangle"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"triangle"'}],required:!1},description:`Shape of the point
@default
"circle"`},{key:"r",value:{name:"number",required:!1},description:`Radius of the point
@default
3
(5 if hovered)`},{key:"color",value:{name:"string",required:!1},description:`Fill color of the point
@default
"black"`},{key:"opacity",value:{name:"number",required:!1},description:`Transparency ofe the point
@default
1 (opaque)`},{key:"metaData",value:{name:"T",required:!1},description:`Any and all metadata the user wishes to include with the point.
this will be used to display the tooltip on the hover of the point
@example
metaData: {
          name: x.displayname,
          accession: x.experimentAccession
        }`}]}}],raw:"Point<T>[]"},description:""},xScale:{required:!0,tsType:{name:"ScaleLinear",elements:[{name:"number"},{name:"number"},{name:"never"}],raw:"ScaleLinear<number, number, never>"},description:""},yScale:{required:!0,tsType:{name:"ScaleLinear",elements:[{name:"number"},{name:"number"},{name:"never"}],raw:"ScaleLinear<number, number, never>"},description:""},zoom:{required:!0,tsType:{name:"intersection",raw:"ProvidedZoom<React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>> & ZoomState",elements:[{name:"ProvidedZoom",elements:[{name:"ReactReactElement",raw:"React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>",elements:[{name:"unknown"},{name:"union",raw:"string | React.JSXElementConstructor<unknown>",elements:[{name:"string"},{name:"ReactJSXElementConstructor",raw:"React.JSXElementConstructor<unknown>",elements:[{name:"unknown"}]}]}]}],raw:"ProvidedZoom<React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>>"},{name:"signature",type:"object",raw:`{
    initialTransformMatrix: TransformMatrix;
    transformMatrix: TransformMatrix;
    isDragging: boolean;
}`,signature:{properties:[{key:"initialTransformMatrix",value:{name:"TransformMatrix",required:!0}},{key:"transformMatrix",value:{name:"TransformMatrix",required:!0}},{key:"isDragging",value:{name:"boolean",required:!0}}]}}]},description:""}}};var En={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(Rn,function(){return function n(i,r,o){var a=window,s="application/octet-stream",l=o||s,u=i,d=!r&&!o&&u,g=document.createElement("a"),S=function(y){return String(y)},R=a.Blob||a.MozBlob||a.WebKitBlob||S,Y=r||"download",j,M;if(R=R.call?R.bind(a):Blob,String(this)==="true"&&(u=[u,l],l=u[0],u=u[1]),d&&d.length<2048&&(Y=d.split("/").pop().split("?")[0],g.href=d,g.href.indexOf(d)!==-1)){var N=new XMLHttpRequest;return N.open("GET",d,!0),N.responseType="blob",N.onload=function(y){n(y.target.response,Y,s)},setTimeout(function(){N.send()},0),N}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(u))if(u.length>1024*1024*1.999&&R!==S)u=me(u),l=u.type||s;else return navigator.msSaveBlob?navigator.msSaveBlob(me(u),Y):D(u);else if(/([\x80-\xff])/.test(u)){var ee=0,K=new Uint8Array(u.length),G=K.length;for(ee;ee<G;++ee)K[ee]=u.charCodeAt(ee);u=new R([K],{type:l})}j=u instanceof R?u:new R([u],{type:l});function me(y){var v=y.split(/[:;,]/),f=v[1],x=v[2]=="base64"?atob:decodeURIComponent,w=x(v.pop()),m=w.length,p=0,P=new Uint8Array(m);for(p;p<m;++p)P[p]=w.charCodeAt(p);return new R([P],{type:f})}function D(y,v){if("download"in g)return g.href=y,g.setAttribute("download",Y),g.className="download-js-link",g.innerHTML="downloading...",g.style.display="none",document.body.appendChild(g),setTimeout(function(){g.click(),document.body.removeChild(g),v===!0&&setTimeout(function(){a.URL.revokeObjectURL(g.href)},250)},66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(y)&&(y="data:"+y.replace(/^data:([\w\/\-\+]+)/,s)),window.open(y)||confirm(`Displaying New Document

Use Save As... to download, then click back to return to this page.`)&&(location.href=y),!0;var f=document.createElement("iframe");document.body.appendChild(f),!v&&/^data:/.test(y)&&(y="data:"+y.replace(/^data:([\w\/\-\+]+)/,s)),f.src=y,setTimeout(function(){document.body.removeChild(f)},333)}if(navigator.msSaveBlob)return navigator.msSaveBlob(j,Y);if(a.URL)D(a.URL.createObjectURL(j),!0);else{if(typeof j=="string"||j.constructor===S)try{return D("data:"+l+";base64,"+a.btoa(j))}catch{return D("data:"+l+","+encodeURIComponent(j))}M=new FileReader,M.onload=function(y){D(this.result)},M.readAsDataURL(j)}return!0}})})(En);var vo=En.exports;const bo=en(vo);var Dn={exports:{}};(function(t){(function(e){var n=K(),i=G(),r=me(),o=D(),a={imagePlaceholder:void 0,cacheBust:!1},s={toSvg:l,toPng:d,toJpeg:g,toBlob:S,toPixelData:u,impl:{fontFaces:r,images:o,util:n,inliner:i,options:{}}};t.exports=s;function l(y,v){return v=v||{},R(v),Promise.resolve(y).then(function(x){return j(x,v.filter,!0)}).then(M).then(N).then(f).then(function(x){return ee(x,v.width||n.width(y),v.height||n.height(y))});function f(x){return v.bgcolor&&(x.style.backgroundColor=v.bgcolor),v.width&&(x.style.width=v.width+"px"),v.height&&(x.style.height=v.height+"px"),v.style&&Object.keys(v.style).forEach(function(w){x.style[w]=v.style[w]}),x}}function u(y,v){return Y(y,v||{}).then(function(f){return f.getContext("2d").getImageData(0,0,n.width(y),n.height(y)).data})}function d(y,v){return Y(y,v||{}).then(function(f){return f.toDataURL()})}function g(y,v){return v=v||{},Y(y,v).then(function(f){return f.toDataURL("image/jpeg",v.quality||1)})}function S(y,v){return Y(y,v||{}).then(n.canvasToBlob)}function R(y){typeof y.imagePlaceholder>"u"?s.impl.options.imagePlaceholder=a.imagePlaceholder:s.impl.options.imagePlaceholder=y.imagePlaceholder,typeof y.cacheBust>"u"?s.impl.options.cacheBust=a.cacheBust:s.impl.options.cacheBust=y.cacheBust}function Y(y,v){return l(y,v).then(n.makeImage).then(n.delay(100)).then(function(x){var w=f(y);return w.getContext("2d").drawImage(x,0,0),w});function f(x){var w=document.createElement("canvas");if(w.width=v.width||n.width(x),w.height=v.height||n.height(x),v.bgcolor){var m=w.getContext("2d");m.fillStyle=v.bgcolor,m.fillRect(0,0,w.width,w.height)}return w}}function j(y,v,f){if(!f&&v&&!v(y))return Promise.resolve();return Promise.resolve(y).then(x).then(function(p){return w(y,p,v)}).then(function(p){return m(y,p)});function x(p){return p instanceof HTMLCanvasElement?n.makeImage(p.toDataURL()):p.cloneNode(!1)}function w(p,P,V){var te=p.childNodes;if(te.length===0)return Promise.resolve(P);return B(P,n.asArray(te),V).then(function(){return P});function B(W,oe,$){var J=Promise.resolve();return oe.forEach(function(Z){J=J.then(function(){return j(Z,$)}).then(function(ae){ae&&W.appendChild(ae)})}),J}}function m(p,P){if(!(P instanceof Element))return P;return Promise.resolve().then(V).then(te).then(B).then(W).then(function(){return P});function V(){oe(window.getComputedStyle(p),P.style);function oe($,J){$.cssText?J.cssText=$.cssText:Z($,J);function Z(ae,le){n.asArray(ae).forEach(function(T){le.setProperty(T,ae.getPropertyValue(T),ae.getPropertyPriority(T))})}}}function te(){[":before",":after"].forEach(function($){oe($)});function oe($){var J=window.getComputedStyle(p,$),Z=J.getPropertyValue("content");if(Z===""||Z==="none")return;var ae=n.uid();P.className=P.className+" "+ae;var le=document.createElement("style");le.appendChild(T(ae,$,J)),P.appendChild(le);function T(C,L,I){var ne="."+C+":"+L,ue=I.cssText?ve(I):ge(I);return document.createTextNode(ne+"{"+ue+"}");function ve(ye){var fe=ye.getPropertyValue("content");return ye.cssText+" content: "+fe+";"}function ge(ye){return n.asArray(ye).map(fe).join("; ")+";";function fe(we){return we+": "+ye.getPropertyValue(we)+(ye.getPropertyPriority(we)?" !important":"")}}}}}function B(){p instanceof HTMLTextAreaElement&&(P.innerHTML=p.value),p instanceof HTMLInputElement&&P.setAttribute("value",p.value)}function W(){P instanceof SVGElement&&(P.setAttribute("xmlns","http://www.w3.org/2000/svg"),P instanceof SVGRectElement&&["width","height"].forEach(function(oe){var $=P.getAttribute(oe);$&&P.style.setProperty(oe,$)}))}}}function M(y){return r.resolveAll().then(function(v){var f=document.createElement("style");return y.appendChild(f),f.appendChild(document.createTextNode(v)),y})}function N(y){return o.inlineAll(y).then(function(){return y})}function ee(y,v,f){return Promise.resolve(y).then(function(x){return x.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(x)}).then(n.escapeXhtml).then(function(x){return'<foreignObject x="0" y="0" width="100%" height="100%">'+x+"</foreignObject>"}).then(function(x){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+v+'" height="'+f+'">'+x+"</svg>"}).then(function(x){return"data:image/svg+xml;charset=utf-8,"+x})}function K(){return{escape:W,parseExtension:v,mimeType:f,dataAsUrl:B,isDataUrl:x,canvasToBlob:m,resolveUrl:p,getAndEncode:te,uid:P(),delay:oe,asArray:$,escapeXhtml:J,makeImage:V,width:Z,height:ae};function y(){var T="application/font-woff",C="image/jpeg";return{woff:T,woff2:T,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:C,jpeg:C,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function v(T){var C=/\.([^\.\/]*?)$/g.exec(T);return C?C[1]:""}function f(T){var C=v(T).toLowerCase();return y()[C]||""}function x(T){return T.search(/^(data:)/)!==-1}function w(T){return new Promise(function(C){for(var L=window.atob(T.toDataURL().split(",")[1]),I=L.length,ne=new Uint8Array(I),ue=0;ue<I;ue++)ne[ue]=L.charCodeAt(ue);C(new Blob([ne],{type:"image/png"}))})}function m(T){return T.toBlob?new Promise(function(C){T.toBlob(C)}):w(T)}function p(T,C){var L=document.implementation.createHTMLDocument(),I=L.createElement("base");L.head.appendChild(I);var ne=L.createElement("a");return L.body.appendChild(ne),I.href=C,ne.href=T,ne.href}function P(){var T=0;return function(){return"u"+C()+T++;function C(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function V(T){return new Promise(function(C,L){var I=new Image;I.onload=function(){C(I)},I.onerror=L,I.src=T})}function te(T){var C=3e4;return s.impl.options.cacheBust&&(T+=(/\?/.test(T)?"&":"?")+new Date().getTime()),new Promise(function(L){var I=new XMLHttpRequest;I.onreadystatechange=ve,I.ontimeout=ge,I.responseType="blob",I.timeout=C,I.open("GET",T,!0),I.send();var ne;if(s.impl.options.imagePlaceholder){var ue=s.impl.options.imagePlaceholder.split(/,/);ue&&ue[1]&&(ne=ue[1])}function ve(){if(I.readyState===4){if(I.status!==200){ne?L(ne):ye("cannot fetch resource: "+T+", status: "+I.status);return}var fe=new FileReader;fe.onloadend=function(){var we=fe.result.split(/,/)[1];L(we)},fe.readAsDataURL(I.response)}}function ge(){ne?L(ne):ye("timeout of "+C+"ms occured while fetching resource: "+T)}function ye(fe){console.error(fe),L("")}})}function B(T,C){return"data:"+C+";base64,"+T}function W(T){return T.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function oe(T){return function(C){return new Promise(function(L){setTimeout(function(){L(C)},T)})}}function $(T){for(var C=[],L=T.length,I=0;I<L;I++)C.push(T[I]);return C}function J(T){return T.replace(/#/g,"%23").replace(/\n/g,"%0A")}function Z(T){var C=le(T,"border-left-width"),L=le(T,"border-right-width");return T.scrollWidth+C+L}function ae(T){var C=le(T,"border-top-width"),L=le(T,"border-bottom-width");return T.scrollHeight+C+L}function le(T,C){var L=window.getComputedStyle(T).getPropertyValue(C);return parseFloat(L.replace("px",""))}}function G(){var y=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:w,shouldProcess:v,impl:{readUrls:f,inline:x}};function v(m){return m.search(y)!==-1}function f(m){for(var p=[],P;(P=y.exec(m))!==null;)p.push(P[1]);return p.filter(function(V){return!n.isDataUrl(V)})}function x(m,p,P,V){return Promise.resolve(p).then(function(B){return P?n.resolveUrl(B,P):B}).then(V||n.getAndEncode).then(function(B){return n.dataAsUrl(B,n.mimeType(p))}).then(function(B){return m.replace(te(p),"$1"+B+"$3")});function te(B){return new RegExp(`(url\\(['"]?)(`+n.escape(B)+`)(['"]?\\))`,"g")}}function w(m,p,P){if(V())return Promise.resolve(m);return Promise.resolve(m).then(f).then(function(te){var B=Promise.resolve(m);return te.forEach(function(W){B=B.then(function(oe){return x(oe,W,p,P)})}),B});function V(){return!v(m)}}}function me(){return{resolveAll:y,impl:{readAll:v}};function y(){return v().then(function(f){return Promise.all(f.map(function(x){return x.resolve()}))}).then(function(f){return f.join(`
`)})}function v(){return Promise.resolve(n.asArray(document.styleSheets)).then(x).then(f).then(function(m){return m.map(w)});function f(m){return m.filter(function(p){return p.type===CSSRule.FONT_FACE_RULE}).filter(function(p){return i.shouldProcess(p.style.getPropertyValue("src"))})}function x(m){var p=[];return m.forEach(function(P){try{n.asArray(P.cssRules||[]).forEach(p.push.bind(p))}catch(V){console.log("Error while reading CSS rules from "+P.href,V.toString())}}),p}function w(m){return{resolve:function(){var P=(m.parentStyleSheet||{}).href;return i.inlineAll(m.cssText,P)},src:function(){return m.style.getPropertyValue("src")}}}}}function D(){return{inlineAll:v,impl:{newImage:y}};function y(f){return{inline:x};function x(w){return n.isDataUrl(f.src)?Promise.resolve():Promise.resolve(f.src).then(w||n.getAndEncode).then(function(m){return n.dataAsUrl(m,n.mimeType(f.src))}).then(function(m){return new Promise(function(p,P){f.onload=p,f.onerror=P,f.src=m})})}}function v(f){if(!(f instanceof Element))return Promise.resolve(f);return x(f).then(function(){return f instanceof HTMLImageElement?y(f).inline():Promise.all(n.asArray(f.childNodes).map(function(w){return v(w)}))});function x(w){var m=w.style.getPropertyValue("background");return m?i.inlineAll(m).then(function(p){w.style.setProperty("background",p,w.style.getPropertyPriority("background"))}).then(function(){return w}):Promise.resolve(w)}}}})()})(Dn);var xo=Dn.exports;const wo=en(xo);function Qt(t,e="scatterPlot.png"){t&&wo.toPng(t).then(n=>{bo(n,e,"image/png")}).catch(n=>{console.error("Download failed:",n)})}const To={scaleX:1,scaleY:1,translateX:0,translateY:0,skewX:0,skewY:0},_o=t=>{var pe,be,Se,Te,Xe,Me;const e=wn,n=ii,i={minimap:{open:((be=(pe=t.initialState)==null?void 0:pe.minimap)==null?void 0:be.open)??!1},controls:{selectionType:(Te=(Se=t.initialState)==null?void 0:Se.controls)!=null&&Te.selectionType?(Me=(Xe=t.initialState)==null?void 0:Xe.controls)==null?void 0:Me.selectionType:t.selectable?"select":"pan"}},{parentRef:r,width:o,height:a}=Qn(),s=Math.min(a,o),l=b.useRef(null),u=De.useRef(null),[d,g]=De.useState(null),[S,R]=De.useState(!1),[Y,j]=b.useState([]),[M,N]=b.useState(i.controls.selectionType),[ee,K]=b.useState(i.minimap.open),[G,me]=b.useState(0),[D,y]=b.useState(0),v=t.selectable?t.selectable:!1,f={top:20,left:70},x=Math.min(s*.9,s*.9)-f.left,w=x,m=d?t.pointData.find(c=>c.x===d.x&&c.y===d.y):null,[p,P]=b.useState([]),V=t.downloadButton??"none";b.useEffect(()=>{t.registerDownload&&t.registerDownload((c="scatterPlot.png")=>{Qt(u.current,c)})},[t,t.registerDownload]),b.useEffect(()=>{const c=l.current,A=U=>{U.preventDefault()},H=U=>{U.preventDefault()},E=U=>{U.preventDefault()};return c&&(c.addEventListener("wheel",A,{passive:!1}),c.addEventListener("touchstart",E,{passive:!1}),c.addEventListener("touchmove",H,{passive:!1})),()=>{c&&(c.removeEventListener("wheel",A),c.removeEventListener("touchstart",E),c.removeEventListener("touchmove",H))}},[l]);const te=c=>{N(c)},B=()=>{K(!ee)},W=b.useMemo(()=>{const c=t.groupPointsAnchor;return c&&m?t.pointData.filter(A=>c in A?A[c]===m[c]:A.metaData&&m.metaData?A.metaData[c]===m.metaData[c]:!1):m?[m]:[]},[m,t.groupPointsAnchor,t.pointData]),oe=(c,A,H)=>{const E=c.range().map(U=>c.invert((U-A)/H));return c.copy().domain(E)},$=(c,A,H)=>{const E=c.range().map(U=>c.invert((U-A)/H));return c.copy().domain(E)},J=b.useMemo(()=>!t.pointData||t.pointData.length===0?et({domain:[0,1],range:[0,x]}):et({domain:[Math.min(...t.pointData.map(c=>c.x))-1,Math.max(...t.pointData.map(c=>c.x))+1],range:[0,x],nice:!0}),[t.pointData,x]),Z=b.useMemo(()=>!t.pointData||t.pointData.length===0?et({domain:[0,1],range:[w,0]}):et({domain:[Math.min(...t.pointData.map(c=>c.y))-1,Math.max(...t.pointData.map(c=>c.y))+1],range:[w,0],nice:!0}),[t.pointData,w]),ae=b.useCallback(c=>{if(M==="select"&&(c==null?void 0:c.x)!==void 0&&(c==null?void 0:c.y)!==void 0){const A=c.x-f.left,H=c.y-f.top;j(E=>[...E,[{x:A,y:H}]])}},[M,f.left,f.top]),le=b.useCallback(c=>{if(M==="select"&&(c==null?void 0:c.x)!==void 0&&(c==null?void 0:c.y)!==void 0){const A=c.x-f.left,H=c.y-f.top;j(E=>{const U=[...E],de={x:A+c.dx,y:H+c.dy},Q=U.length-1;return U[Q]=[...U[Q]||[],de],U})}},[M,f.left,f.top]),T=(c,A)=>{let H=!1;for(let E=0,U=A.length-1;E<A.length;U=E++){const de=A[E].x,Q=A[E].y,z=A[U].x,xe=A[U].y;Q>c.y!=xe>c.y&&c.x<(z-de)*(c.y-Q)/(xe-Q)+de&&(H=!H)}return H},C=b.useCallback(c=>{if(M==="select"){if(Y.length===0)return;const A=Y[Y.length-1],H=oe(J,c.transformMatrix.translateX,c.transformMatrix.scaleX),E=$(Z,c.transformMatrix.translateY,c.transformMatrix.scaleY),U=t.pointData.filter(de=>{const Q={x:H(de.x),y:E(de.y)};return T(Q,A)});t.onSelectionChange&&t.onSelectionChange(U),j([])}else j([])},[M,Y,J,Z,t]),{x:L=0,y:I=0,dx:ne,dy:ue,isDragging:ve,dragStart:ge,dragEnd:ye,dragMove:fe}=uo({onDragStart:ae,onDragMove:le,resetOnStart:!0}),we=b.useCallback((c,A)=>{if(ve||A.isDragging){R(!1),g(null);return}me(c.pageX),y(c.pageY);const H=$e(c.currentTarget,c);if(!H)return;const E=H.x-f.left,U=H.y-f.top,de=oe(J,A.transformMatrix.translateX,A.transformMatrix.scaleX),Q=$(Z,A.transformMatrix.translateY,A.transformMatrix.scaleY),z=5,xe=t.pointData.find(_e=>{const O=de(_e.x),Re=Q(_e.y);return Math.abs(E-O)<z&&Math.abs(U-Re)<z});xe?(g(xe),R(!0)):(g(null),R(!1))},[ve,t.pointData,f.left,f.top,J,Z]),Ne=b.useCallback(()=>{R(!1),g(null)},[]),_=()=>{!t.onPointClicked||!m||m&&t.onPointClicked(m)},k=b.useCallback((c,A,H)=>{if(H){const E=H.getContext("2d");if(E){E.setTransform(2,0,0,2,0,0),E.clearRect(0,0,x,w);const U=new Set(W.map(O=>`${O.x},${O.y}`)),de=t.pointData.filter(O=>!U.has(`${O.x},${O.y}`)),Q=t.pointData.filter(O=>U.has(`${O.x},${O.y}`)),z=[],xe=(O,Re)=>{const ke=c(O.x),Ye=A(O.y),Ae=c(O.x)>=0&&c(O.x)<=x&&A(O.y)>=0&&A(O.y)<=w,je=(O.r||3)+(Re?2:0);Ae&&(z.push(O),E.beginPath(),O.shape==="circle"?E.arc(ke,Ye,je,0,Math.PI*2):O.shape==="triangle"&&(E.moveTo(ke,Ye-je),E.lineTo(ke-je,Ye+je),E.lineTo(ke+je,Ye+je),E.closePath()),E.fillStyle=O.color?O.color:"black",E.globalAlpha=O.opacity!==void 0?O.opacity:1,E.fill(),Re&&(E.lineWidth=1,E.strokeStyle="black",E.stroke()))};de.forEach(O=>xe(O,!1)),Q.forEach(O=>xe(O,!0)),((O,Re)=>O.length!==Re.length?!0:!O.every((ke,Ye)=>{const Ae=Re[Ye];return ke.x===Ae.x&&ke.y===Ae.y&&ke.r===Ae.r&&ke.shape===Ae.shape&&ke.color===Ae.color&&ke.opacity===Ae.opacity}))(p,z)&&(t.onDisplayedPointsChange&&t.onDisplayedPointsChange(z),P(z))}}},[x,w,W,t,p]),X=()=>{Qt(u.current)},F=h.jsx(Ct,{textAnchor:"middle",verticalAnchor:"end",angle:-90,fontSize:15,y:w/2,x:0,dx:-50,children:t.leftAxisLabel}),ie=h.jsx(Ct,{textAnchor:"middle",verticalAnchor:"start",fontSize:15,y:w,x:x/2,dy:50,children:t.bottomAxisLabel});return h.jsx("div",{ref:r,style:{width:"100%",height:"100%",position:"relative"},children:h.jsx(e,{width:x,height:w,scaleXMin:1/2,scaleXMax:10,scaleYMin:1/2,scaleYMax:10,initialTransformMatrix:To,children:c=>{const A=oe(J,c.transformMatrix.translateX,c.transformMatrix.scaleX),H=$(Z,c.transformMatrix.translateY,c.transformMatrix.scaleY),E=m&&A(m.x)>=0&&A(m.x)<=x&&H(m.y)>=0&&H(m.y)<=w,U=()=>{c.scale({scaleX:1.2,scaleY:1.2})},de=()=>{c.scale({scaleX:.8,scaleY:.8})},Q=()=>{c.reset()};return h.jsxs(h.Fragment,{children:[!t.disableZoom&&h.jsx(ht,{direction:"column",sx:{position:"absolute",left:t.controlsPosition==="left"?10:t.controlsPosition==="bottom"?"50%":null,right:t.controlsPosition==="right"?10:null,top:t.controlsPosition==="bottom"?null:"50%",bottom:t.controlsPosition==="bottom"?10:null,transform:t.controlsPosition==="bottom"?"translateX(-50%)":"translateY(-50%)",zIndex:10},children:h.jsx(Pn,{selectable:v,resetable:c.transformMatrix!==c.initialTransformMatrix,handleSelectionModeChange:te,selectMode:M,zoomIn:U,zoomOut:de,zoomReset:Q,position:t.controlsPosition,highlight:t.controlsHighlight,downloadButton:V,downloadPlot:X})}),["topRight","topLeft","bottomRight","bottomLeft"].includes(V)&&h.jsx(Le,{title:"Download Plot as PNG",children:h.jsx(qe,{"aria-label":"download",onClick:()=>X(),sx:{position:"absolute",zIndex:10,...V==="topRight"&&{top:10,right:10},...V==="topLeft"&&{top:10,left:10},...V==="bottomRight"&&{bottom:10,right:10},...V==="bottomLeft"&&{bottom:10,left:10}},children:h.jsx(ln,{})})}),h.jsx(ht,{justifyContent:"center",alignItems:"center",direction:"row",sx:{position:"relative"},children:h.jsx(Et,{sx:{width:s,height:s},children:t.loading?h.jsx(Et,{display:"flex",width:"100%",height:"100%",sx:{justifyContent:"center",alignItems:"center"},children:h.jsx(zn,{})}):h.jsxs("div",{style:{position:"relative"},ref:u,children:[h.jsx("canvas",{ref:z=>{z&&k(A,H,z)},width:x*2,height:w*2,style:{userSelect:"none",position:"absolute",top:f.top,left:f.left,width:x,height:w,backgroundColor:"transparent"}}),h.jsxs("svg",{width:s,height:s,style:{position:"absolute",userSelect:"none"},onMouseMove:z=>we(z,c),onMouseLeave:Ne,children:[h.jsxs(Xt,{top:f.top,left:f.left,children:[M==="select"&&h.jsxs(h.Fragment,{children:[Y.map((z,xe)=>h.jsx(io,{fill:"transparent",stroke:"black",strokeWidth:3,data:z,curve:Qr,x:_e=>_e.x,y:_e=>_e.y},`line-${xe}`)),ve&&h.jsxs("g",{children:[h.jsx("line",{x1:L-f.left+ne-6,y1:I-f.top+ue,x2:L-f.left+ne+6,y2:I-f.top+ue,stroke:"black",strokeWidth:1}),h.jsx("line",{x1:L-f.left+ne,y1:I-f.top+ue-6,x2:L-f.left+ne,y2:I-f.top+ue+6,stroke:"black",strokeWidth:1}),h.jsx("circle",{cx:L-f.left,cy:I-f.top,r:4,fill:"transparent",stroke:"black",pointerEvents:"none"})]})]}),h.jsx("rect",{ref:l,fill:"transparent",width:x,height:w,style:{cursor:t.disableZoom?t.selectable?ve?"none":"crosshair":ve?"none":"default":m?"default":M==="select"?ve?"none":"crosshair":c.isDragging?"grabbing":"grab"},onMouseDown:M==="none"?void 0:M==="select"?ge:t.disableZoom?void 0:c.dragStart,onMouseUp:M==="none"?void 0:M==="select"?z=>{ye(z),C(c)}:t.disableZoom?void 0:c.dragEnd,onMouseMove:M==="none"?void 0:M==="select"?ve?fe:void 0:t.disableZoom?void 0:c.dragMove,onMouseLeave:M==="none"?void 0:M==="select"?z=>{ye(z),C(c)}:t.disableZoom?void 0:c.dragEnd,onTouchStart:M==="none"?void 0:M==="select"?ge:t.disableZoom?void 0:c.dragStart,onTouchEnd:M==="none"?void 0:M==="select"?z=>{ye(z),C(c)}:t.disableZoom?void 0:c.dragEnd,onTouchMove:M==="none"?void 0:M==="select"?ve?fe:void 0:t.disableZoom?void 0:c.dragMove,onWheel:z=>{if(!t.disableZoom){const xe=$e(z)||{x:0,y:0},_e=z.deltaY<0?1.1:.9;c.scale({scaleX:_e,scaleY:_e,point:xe})}},onClick:_})]}),h.jsxs(Xt,{top:f.top,left:f.left,children:[h.jsx(ei,{numTicks:4,scale:H,tickLabelProps:()=>({fill:"#1c1917",fontSize:10,textAnchor:"end",verticalAnchor:"middle",x:-10})}),h.jsx(ti,{numTicks:4,top:w,scale:A,tickLabelProps:()=>({fill:"#1c1917",fontSize:11,textAnchor:"middle"})}),F,ie]})]})]})})}),t.miniMap&&!t.disableZoom&&h.jsx(Le,{title:"Toggle Minimap",children:h.jsx(qe,{sx:{position:"absolute",right:10,bottom:10,zIndex:10,width:"auto",height:"auto",color:ee?t.controlsHighlight?t.controlsHighlight:"primary.main":"default"},size:"small",onClick:B,children:h.jsx(po,{})})}),ee&&t.miniMap&&!t.disableZoom&&!t.loading&&h.jsx(Mn,{miniMap:t.miniMap,width:s,height:s,pointData:t.pointData,xScale:J,yScale:Z,zoom:c}),!t.disableTooltip&&S&&d&&E&&h.jsx(ni,{children:h.jsx(n,{left:G+10,top:D,children:h.jsx(Sn,{tooltipBody:t.tooltipBody,tooltipData:d})})})]})}})})};_o.__docgenInfo={description:"",methods:[],displayName:"ScatterPlot",props:{pointData:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    /**
     * X and Y coordinates of point on plot (required)
     */
    x: number;
    y: number;
    /**
     * Shape of the point
     * @default
     * "circle"
     * 
     */
    shape?: "circle" | "triangle";
    /**
     * Radius of the point
     * @default
     * 3
     * (5 if hovered)
     */
    r?: number;
    /**
     * Fill color of the point
     * @default
     * "black"
     */
    color?: string;
    /**
     * Transparency ofe the point
     * @default
     * 1 (opaque)
     */
    opacity?: number;
    /**
     * Any and all metadata the user wishes to include with the point.
     * this will be used to display the tooltip on the hover of the point
     * @example
     * metaData: {
          name: x.displayname,
          accession: x.experimentAccession
        }
     */
    metaData?: T;
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0},description:"X and Y coordinates of point on plot (required)"},{key:"y",value:{name:"number",required:!0}},{key:"shape",value:{name:"union",raw:'"circle" | "triangle"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"triangle"'}],required:!1},description:`Shape of the point
@default
"circle"`},{key:"r",value:{name:"number",required:!1},description:`Radius of the point
@default
3
(5 if hovered)`},{key:"color",value:{name:"string",required:!1},description:`Fill color of the point
@default
"black"`},{key:"opacity",value:{name:"number",required:!1},description:`Transparency ofe the point
@default
1 (opaque)`},{key:"metaData",value:{name:"T",required:!1},description:`Any and all metadata the user wishes to include with the point.
this will be used to display the tooltip on the hover of the point
@example
metaData: {
          name: x.displayname,
          accession: x.experimentAccession
        }`}]}}],raw:"Point<T>[]"},description:`Array of points being displayed on the plot
if empty, nothing will be displayed`},loading:{required:!0,tsType:{name:"boolean"},description:`Boolean flag to indicate if any data is still loading,
if true, loading state is displayed (Circular Progress)`},selectable:{required:!1,tsType:{name:"S"},description:`If true, enables lasso selection of points, controllable with onSelectionChange
Shows new select icon in controls section (pencil)
@default
false`},disableZoom:{required:!1,tsType:{name:"Z"},description:`If true, zooming and panning capabilities of the scatterplot
Removes zooming control icons (Zoom in, zoom out, reset zoom)

Note: if Zoom is disabled and selecting is enabled, No icons will appear, 
the selection type of the plot will only ever be select

@default
false`},disableTooltip:{required:!1,tsType:{name:"boolean"},description:`If true, tooltip functionality is disabled.
point hovering will not render anything but will still increase the size of the point
@default
false`},controlsPosition:{required:!1,tsType:{name:"union",raw:'"left" | "bottom" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"right"'}]},description:`Determines the placement of any controls that are being shown at the time.
Positions are fixed and cannot be moved, they are 10 pixels from the specified side of the container
and situated in the center

@default
"left"`},controlsHighlight:{required:!1,tsType:{name:"string"},description:`Can specify a certain color to display what controls are being selected
(Pan/Select and Minimap open/closed)

@default
primary.main`},onDisplayedPointsChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(points: Point<T>[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    /**
     * X and Y coordinates of point on plot (required)
     */
    x: number;
    y: number;
    /**
     * Shape of the point
     * @default
     * "circle"
     * 
     */
    shape?: "circle" | "triangle";
    /**
     * Radius of the point
     * @default
     * 3
     * (5 if hovered)
     */
    r?: number;
    /**
     * Fill color of the point
     * @default
     * "black"
     */
    color?: string;
    /**
     * Transparency ofe the point
     * @default
     * 1 (opaque)
     */
    opacity?: number;
    /**
     * Any and all metadata the user wishes to include with the point.
     * this will be used to display the tooltip on the hover of the point
     * @example
     * metaData: {
          name: x.displayname,
          accession: x.experimentAccession
        }
     */
    metaData?: T;
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0},description:"X and Y coordinates of point on plot (required)"},{key:"y",value:{name:"number",required:!0}},{key:"shape",value:{name:"union",raw:'"circle" | "triangle"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"triangle"'}],required:!1},description:`Shape of the point
@default
"circle"`},{key:"r",value:{name:"number",required:!1},description:`Radius of the point
@default
3
(5 if hovered)`},{key:"color",value:{name:"string",required:!1},description:`Fill color of the point
@default
"black"`},{key:"opacity",value:{name:"number",required:!1},description:`Transparency ofe the point
@default
1 (opaque)`},{key:"metaData",value:{name:"T",required:!1},description:`Any and all metadata the user wishes to include with the point.
this will be used to display the tooltip on the hover of the point
@example
metaData: {
          name: x.displayname,
          accession: x.experimentAccession
        }`}]}}],raw:"Point<T>[]"},name:"points"}],return:{name:"void"}}},description:`Callback function triggered whenever the currently rendered points on the plot change
ex. when panning or zooming in

@returns
Array of points currently rendered on the plot 
including all of its info and metadata`},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedPoints: Point<T>[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    /**
     * X and Y coordinates of point on plot (required)
     */
    x: number;
    y: number;
    /**
     * Shape of the point
     * @default
     * "circle"
     * 
     */
    shape?: "circle" | "triangle";
    /**
     * Radius of the point
     * @default
     * 3
     * (5 if hovered)
     */
    r?: number;
    /**
     * Fill color of the point
     * @default
     * "black"
     */
    color?: string;
    /**
     * Transparency ofe the point
     * @default
     * 1 (opaque)
     */
    opacity?: number;
    /**
     * Any and all metadata the user wishes to include with the point.
     * this will be used to display the tooltip on the hover of the point
     * @example
     * metaData: {
          name: x.displayname,
          accession: x.experimentAccession
        }
     */
    metaData?: T;
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0},description:"X and Y coordinates of point on plot (required)"},{key:"y",value:{name:"number",required:!0}},{key:"shape",value:{name:"union",raw:'"circle" | "triangle"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"triangle"'}],required:!1},description:`Shape of the point
@default
"circle"`},{key:"r",value:{name:"number",required:!1},description:`Radius of the point
@default
3
(5 if hovered)`},{key:"color",value:{name:"string",required:!1},description:`Fill color of the point
@default
"black"`},{key:"opacity",value:{name:"number",required:!1},description:`Transparency ofe the point
@default
1 (opaque)`},{key:"metaData",value:{name:"T",required:!1},description:`Any and all metadata the user wishes to include with the point.
this will be used to display the tooltip on the hover of the point
@example
metaData: {
          name: x.displayname,
          accession: x.experimentAccession
        }`}]}}],raw:"Point<T>[]"},name:"selectedPoints"}],return:{name:"void"}}},description:`Callback function triggered when a lasso selection is made

@returns
Array of points inside the lasso
Empty array if no points inside lasso`},onPointClicked:{required:!1,tsType:{name:"signature",type:"function",raw:"(point: Point<T>) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
    /**
     * X and Y coordinates of point on plot (required)
     */
    x: number;
    y: number;
    /**
     * Shape of the point
     * @default
     * "circle"
     * 
     */
    shape?: "circle" | "triangle";
    /**
     * Radius of the point
     * @default
     * 3
     * (5 if hovered)
     */
    r?: number;
    /**
     * Fill color of the point
     * @default
     * "black"
     */
    color?: string;
    /**
     * Transparency ofe the point
     * @default
     * 1 (opaque)
     */
    opacity?: number;
    /**
     * Any and all metadata the user wishes to include with the point.
     * this will be used to display the tooltip on the hover of the point
     * @example
     * metaData: {
          name: x.displayname,
          accession: x.experimentAccession
        }
     */
    metaData?: T;
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0},description:"X and Y coordinates of point on plot (required)"},{key:"y",value:{name:"number",required:!0}},{key:"shape",value:{name:"union",raw:'"circle" | "triangle"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"triangle"'}],required:!1},description:`Shape of the point
@default
"circle"`},{key:"r",value:{name:"number",required:!1},description:`Radius of the point
@default
3
(5 if hovered)`},{key:"color",value:{name:"string",required:!1},description:`Fill color of the point
@default
"black"`},{key:"opacity",value:{name:"number",required:!1},description:`Transparency ofe the point
@default
1 (opaque)`},{key:"metaData",value:{name:"T",required:!1},description:`Any and all metadata the user wishes to include with the point.
this will be used to display the tooltip on the hover of the point
@example
metaData: {
          name: x.displayname,
          accession: x.experimentAccession
        }`}]}},name:"point"}],return:{name:"void"}}},description:`Callback fucntion triggered when a point is clicked

@returns
Singular point including all info and metadata`},groupPointsAnchor:{required:!1,tsType:{name:"union",raw:"keyof Point<T> | keyof T",elements:[{name:"signature",type:"object",raw:`{
    /**
     * X and Y coordinates of point on plot (required)
     */
    x: number;
    y: number;
    /**
     * Shape of the point
     * @default
     * "circle"
     * 
     */
    shape?: "circle" | "triangle";
    /**
     * Radius of the point
     * @default
     * 3
     * (5 if hovered)
     */
    r?: number;
    /**
     * Fill color of the point
     * @default
     * "black"
     */
    color?: string;
    /**
     * Transparency ofe the point
     * @default
     * 1 (opaque)
     */
    opacity?: number;
    /**
     * Any and all metadata the user wishes to include with the point.
     * this will be used to display the tooltip on the hover of the point
     * @example
     * metaData: {
          name: x.displayname,
          accession: x.experimentAccession
        }
     */
    metaData?: T;
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0},description:"X and Y coordinates of point on plot (required)"},{key:"y",value:{name:"number",required:!0}},{key:"shape",value:{name:"union",raw:'"circle" | "triangle"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"triangle"'}],required:!1},description:`Shape of the point
@default
"circle"`},{key:"r",value:{name:"number",required:!1},description:`Radius of the point
@default
3
(5 if hovered)`},{key:"color",value:{name:"string",required:!1},description:`Fill color of the point
@default
"black"`},{key:"opacity",value:{name:"number",required:!1},description:`Transparency ofe the point
@default
1 (opaque)`},{key:"metaData",value:{name:"T",required:!1},description:`Any and all metadata the user wishes to include with the point.
this will be used to display the tooltip on the hover of the point
@example
metaData: {
          name: x.displayname,
          accession: x.experimentAccession
        }`}]}},{name:"T"}]},description:`Optional key to specify if you want to group your points.
Must be a key of type Point, or an existing key already in meta data

If anchor is specified, all grouped points will increase in size on hover of any point in said group`},tooltipBody:{required:!1,tsType:{name:"signature",type:"function",raw:"(point: Point<T>) => JSX.Element",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
    /**
     * X and Y coordinates of point on plot (required)
     */
    x: number;
    y: number;
    /**
     * Shape of the point
     * @default
     * "circle"
     * 
     */
    shape?: "circle" | "triangle";
    /**
     * Radius of the point
     * @default
     * 3
     * (5 if hovered)
     */
    r?: number;
    /**
     * Fill color of the point
     * @default
     * "black"
     */
    color?: string;
    /**
     * Transparency ofe the point
     * @default
     * 1 (opaque)
     */
    opacity?: number;
    /**
     * Any and all metadata the user wishes to include with the point.
     * this will be used to display the tooltip on the hover of the point
     * @example
     * metaData: {
          name: x.displayname,
          accession: x.experimentAccession
        }
     */
    metaData?: T;
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0},description:"X and Y coordinates of point on plot (required)"},{key:"y",value:{name:"number",required:!0}},{key:"shape",value:{name:"union",raw:'"circle" | "triangle"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"triangle"'}],required:!1},description:`Shape of the point
@default
"circle"`},{key:"r",value:{name:"number",required:!1},description:`Radius of the point
@default
3
(5 if hovered)`},{key:"color",value:{name:"string",required:!1},description:`Fill color of the point
@default
"black"`},{key:"opacity",value:{name:"number",required:!1},description:`Transparency ofe the point
@default
1 (opaque)`},{key:"metaData",value:{name:"T",required:!1},description:`Any and all metadata the user wishes to include with the point.
this will be used to display the tooltip on the hover of the point
@example
metaData: {
          name: x.displayname,
          accession: x.experimentAccession
        }`}]}},name:"point"}],return:{name:"JSX.Element"}}},description:`Custom tooltip formatting
can give JSX elements

@example
tooltipBody={(point) => {
            return (
                <Box sx={{ textAlign: "center", p: 1 }}>
                    <DNALogo ppm={formattedPWM} height={100} />
                    {point.metaData?.tooltipValues && (
                    <>
                        <Typography variant="body2">
                        <strong>Accession:</strong>{" "}
                        {point.metaData.tooltipValues.accession}
                        </Typography>
                        <Typography variant="body2">
                        <strong>DBD:</strong>{" "}
                        {point.metaData.tooltipValues.dbd}
                        </Typography>
                        <Typography variant="body2">
                        <strong>Factor:</strong>{" "}
                        {point.metaData.tooltipValues.factor}
                        </Typography>
                    </>
                    )}
                </Box>
            );
        }}`},miniMap:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    position?: { 
        right: number; 
        bottom: number 
    };
}`,signature:{properties:[{key:"position",value:{name:"signature",type:"object",raw:`{ 
    right: number; 
    bottom: number 
}`,signature:{properties:[{key:"right",value:{name:"number",required:!0}},{key:"bottom",value:{name:"number",required:!0}}]},required:!1}}]}},description:""},leftAxisLabel:{required:!1,tsType:{name:"string"},description:""},bottomAxisLabel:{required:!1,tsType:{name:"string"},description:""},initialState:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    minimap?: {
        /**
         * Initial minimap state (open or closed)
         */
        open?: boolean;
    };
    controls?: {
        /**
         * Initial selection type
         * Note: allowed types depends on zoom and selection availibility
         */
        selectionType?: S extends true ? "pan" | "select" : Z extends true ? "select" | "none" : "pan";
    };
}`,signature:{properties:[{key:"minimap",value:{name:"signature",type:"object",raw:`{
    /**
     * Initial minimap state (open or closed)
     */
    open?: boolean;
}`,signature:{properties:[{key:"open",value:{name:"boolean",required:!1},description:"Initial minimap state (open or closed)"}]},required:!1}},{key:"controls",value:{name:"signature",type:"object",raw:`{
    /**
     * Initial selection type
     * Note: allowed types depends on zoom and selection availibility
     */
    selectionType?: S extends true ? "pan" | "select" : Z extends true ? "select" | "none" : "pan";
}`,signature:{properties:[{key:"selectionType",value:{name:"unknown",required:!1},description:`Initial selection type
Note: allowed types depends on zoom and selection availibility`}]},required:!1}}]}},description:""},registerDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"(downloadFn: (filename?: string) => void) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"(filename?: string) => void",signature:{arguments:[{type:{name:"string"},name:"filename"}],return:{name:"void"}}},name:"downloadFn"}],return:{name:"void"}}},description:`example usage in parent to externally download component

 const downloadFnRef = useRef<(filename?: string) => void>(() => {});

        const handleDownloadClick = () => {
            downloadFnRef.current?.('custom-name.png');
        };

        <ScatterPlot registerDownload={(fn) => (downloadFnRef.current = fn)} />
        <button onClick={handleDownloadClick}>Download</button>`},downloadButton:{required:!1,tsType:{name:"union",raw:'"none" | "inline" | "topRight" | "topLeft" | "bottomRight" | "bottomLeft"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"inline"'},{name:"literal",value:'"topRight"'},{name:"literal",value:'"topLeft"'},{name:"literal",value:'"bottomRight"'},{name:"literal",value:'"bottomLeft"'}]},description:`Download Button positioning to internally download component
Default none`}}};export{ln as D,_o as S,Le as T,ht as a,ri as s,ai as u};
