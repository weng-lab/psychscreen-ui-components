import{j as p}from"./jsx-runtime-CDt2p4po.js";import{r as h,R as ke}from"./index-GiUgBvb1.js";import{k as Pn,r as Dn,d as Cn,h as Xn,c as ut,l as Tt,n as at,o as An,p as Yn,q as In,b as Gt,g as zt,t as qn,v as kt,a as jn,u as Jt,s as it,i as Qt,m as xt,w as en,B as St}from"./Box-tXOfBd2H.js";import{u as Rn,a as On,b as Ze,d as Ln,e as $n,f as Mt,g as Vn,h as Bn,i as Ge,G as Nn,P as tn,T as Wn,j as Et,c as We,I as Ve,C as Hn}from"./Grow-T4q3YgyY.js";import{P as Ye,_ as De,c as Fn,u as Un,a as ze,T as Pt,G as Dt,A as Kn,b as Zn,d as Gn,e as zn}from"./useParentSize-ZnyO9Jw1.js";const Jn=Pn();function Qn(t){const{theme:e,name:n,props:i}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?i:Dn(e.components[n].defaultProps,i)}function ei({props:t,name:e,defaultTheme:n,themeId:i}){let r=Cn(n);return i&&(r=r[i]||r),Qn({theme:r,name:e,props:t})}const ti=qn(),ni=Jn("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root});function ii(t){return ei({props:t,name:"MuiStack",defaultTheme:ti})}function ri(t,e){const n=h.Children.toArray(t).filter(Boolean);return n.reduce((i,r,a)=>(i.push(r),a<n.length-1&&i.push(h.cloneElement(e,{key:`separator-${a}`})),i),[])}const ai=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],si=({ownerState:t,theme:e})=>{let n={display:"flex",flexDirection:"column",...Tt({theme:e},at({values:t.direction,breakpoints:e.breakpoints.values}),i=>({flexDirection:i}))};if(t.spacing){const i=An(e),r=Object.keys(e.breakpoints.values).reduce((c,u)=>((typeof t.spacing=="object"&&t.spacing[u]!=null||typeof t.direction=="object"&&t.direction[u]!=null)&&(c[u]=!0),c),{}),a=at({values:t.direction,base:r}),s=at({values:t.spacing,base:r});typeof a=="object"&&Object.keys(a).forEach((c,u,d)=>{if(!a[c]){const g=u>0?a[d[u-1]]:"column";a[c]=g}}),n=Yn(n,Tt({theme:e},s,(c,u)=>t.useFlexGap?{gap:kt(i,c)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${ai(u?a[u]:t.direction)}`]:kt(i,c)}}))}return n=In(e.breakpoints,n),n};function oi(t={}){const{createStyledComponent:e=ni,useThemeProps:n=ii,componentName:i="MuiStack"}=t,r=()=>Gt({root:["root"]},c=>zt(i,c),{}),a=e(si);return h.forwardRef(function(c,u){const d=n(c),m=Xn(d),{component:g="div",direction:X="column",spacing:Y=0,divider:v,children:U,className:q,useFlexGap:te=!1,...K}=m,O={direction:X,spacing:Y,useFlexGap:te},re=r();return p.jsx(a,{as:g,ownerState:O,ref:u,className:ut(re.root,q),...K,children:v?ri(U,v):U})})}function li(t){return zt("MuiTooltip",t)}const F=jn("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);function ci(t){return Math.round(t*1e5)/1e5}const ui=t=>{const{classes:e,disableInteractive:n,arrow:i,touch:r,placement:a}=t,s={popper:["popper",!n&&"popperInteractive",i&&"popperArrow"],tooltip:["tooltip",i&&"tooltipArrow",r&&"touch",`tooltipPlacement${Qt(a.split("-")[0])}`],arrow:["arrow"]};return Gt(s,li,e)},di=it(tn,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.popper,!n.disableInteractive&&e.popperInteractive,n.arrow&&e.popperArrow,!n.open&&e.popperClose]}})(xt(({theme:t})=>({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none",variants:[{props:({ownerState:e})=>!e.disableInteractive,style:{pointerEvents:"auto"}},{props:({open:e})=>!e,style:{pointerEvents:"none"}},{props:({ownerState:e})=>e.arrow,style:{[`&[data-popper-placement*="bottom"] .${F.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${F.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${F.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}},[`&[data-popper-placement*="left"] .${F.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}}}},{props:({ownerState:e})=>e.arrow&&!e.isRtl,style:{[`&[data-popper-placement*="right"] .${F.arrow}`]:{left:0,marginLeft:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!!e.isRtl,style:{[`&[data-popper-placement*="right"] .${F.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!e.isRtl,style:{[`&[data-popper-placement*="left"] .${F.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!!e.isRtl,style:{[`&[data-popper-placement*="left"] .${F.arrow}`]:{left:0,marginLeft:"-0.71em"}}}]}))),pi=it("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.tooltip,n.touch&&e.touch,n.arrow&&e.tooltipArrow,e[`tooltipPlacement${Qt(n.placement.split("-")[0])}`]]}})(xt(({theme:t})=>({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:en(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium,[`.${F.popper}[data-popper-placement*="left"] &`]:{transformOrigin:"right center"},[`.${F.popper}[data-popper-placement*="right"] &`]:{transformOrigin:"left center"},[`.${F.popper}[data-popper-placement*="top"] &`]:{transformOrigin:"center bottom",marginBottom:"14px"},[`.${F.popper}[data-popper-placement*="bottom"] &`]:{transformOrigin:"center top",marginTop:"14px"},variants:[{props:({ownerState:e})=>e.arrow,style:{position:"relative",margin:0}},{props:({ownerState:e})=>e.touch,style:{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${ci(16/14)}em`,fontWeight:t.typography.fontWeightRegular}},{props:({ownerState:e})=>!e.isRtl,style:{[`.${F.popper}[data-popper-placement*="left"] &`]:{marginRight:"14px"},[`.${F.popper}[data-popper-placement*="right"] &`]:{marginLeft:"14px"}}},{props:({ownerState:e})=>!e.isRtl&&e.touch,style:{[`.${F.popper}[data-popper-placement*="left"] &`]:{marginRight:"24px"},[`.${F.popper}[data-popper-placement*="right"] &`]:{marginLeft:"24px"}}},{props:({ownerState:e})=>!!e.isRtl,style:{[`.${F.popper}[data-popper-placement*="left"] &`]:{marginLeft:"14px"},[`.${F.popper}[data-popper-placement*="right"] &`]:{marginRight:"14px"}}},{props:({ownerState:e})=>!!e.isRtl&&e.touch,style:{[`.${F.popper}[data-popper-placement*="left"] &`]:{marginLeft:"24px"},[`.${F.popper}[data-popper-placement*="right"] &`]:{marginRight:"24px"}}},{props:({ownerState:e})=>e.touch,style:{[`.${F.popper}[data-popper-placement*="top"] &`]:{marginBottom:"24px"}}},{props:({ownerState:e})=>e.touch,style:{[`.${F.popper}[data-popper-placement*="bottom"] &`]:{marginTop:"24px"}}}]}))),hi=it("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(t,e)=>e.arrow})(xt(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:en(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let Je=!1;const Ct=new Wn;let He={x:0,y:0};function Qe(t,e){return(n,...i)=>{e&&e(n,...i),t(n,...i)}}const Be=h.forwardRef(function(e,n){const i=Jt({props:e,name:"MuiTooltip"}),{arrow:r=!1,children:a,classes:s,components:o={},componentsProps:c={},describeChild:u=!1,disableFocusListener:d=!1,disableHoverListener:m=!1,disableInteractive:g=!1,disableTouchListener:X=!1,enterDelay:Y=100,enterNextDelay:v=0,enterTouchDelay:U=700,followCursor:q=!1,id:te,leaveDelay:K=0,leaveTouchDelay:O=1500,onClose:re,onOpen:T,open:Se,placement:_="bottom",PopperComponent:$,PopperProps:I={},slotProps:A={},slots:V={},title:M,TransitionComponent:de,TransitionProps:ae,...ne}=i,J=h.isValidElement(a)?a:p.jsx("span",{children:a}),B=Rn(),se=On(),[H,Me]=h.useState(),[ce,pe]=h.useState(null),oe=h.useRef(!1),ge=g||q,he=Ze(),we=Ze(),fe=Ze(),le=Ze(),[Ce,Ee]=Ln({controlled:Se,default:!1,name:"Tooltip",state:"open"});let ie=Ce;const Ie=$n(te),Pe=h.useRef(),Xe=Mt(()=>{Pe.current!==void 0&&(document.body.style.WebkitUserSelect=Pe.current,Pe.current=void 0),le.clear()});h.useEffect(()=>Xe,[Xe]);const Oe=k=>{Ct.clear(),Je=!0,Ee(!0),T&&!ie&&T(k)},f=Mt(k=>{Ct.start(800+K,()=>{Je=!1}),Ee(!1),re&&ie&&re(k),he.start(B.transitions.duration.shortest,()=>{oe.current=!1})}),y=k=>{oe.current&&k.type!=="touchstart"||(H&&H.removeAttribute("title"),we.clear(),fe.clear(),Y||Je&&v?we.start(Je?v:Y,()=>{Oe(k)}):Oe(k))},b=k=>{we.clear(),fe.start(K,()=>{f(k)})},[,D]=h.useState(!1),j=k=>{Et(k.target)||(D(!1),b(k))},Z=k=>{H||Me(k.currentTarget),Et(k.target)&&(D(!0),y(k))},Q=k=>{oe.current=!0;const xe=J.props;xe.onTouchStart&&xe.onTouchStart(k)},me=k=>{Q(k),fe.clear(),he.clear(),Xe(),Pe.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",le.start(U,()=>{document.body.style.WebkitUserSelect=Pe.current,y(k)})},l=k=>{J.props.onTouchEnd&&J.props.onTouchEnd(k),Xe(),fe.start(O,()=>{f(k)})};h.useEffect(()=>{if(!ie)return;function k(xe){xe.key==="Escape"&&f(xe)}return document.addEventListener("keydown",k),()=>{document.removeEventListener("keydown",k)}},[f,ie]);const x=Vn(Bn(J),Me,n);!M&&M!==0&&(ie=!1);const S=h.useRef(),w=k=>{const xe=J.props;xe.onMouseMove&&xe.onMouseMove(k),He={x:k.clientX,y:k.clientY},S.current&&S.current.update()},E={},ee=typeof M=="string";u?(E.title=!ie&&ee&&!m?M:null,E["aria-describedby"]=ie?Ie:null):(E["aria-label"]=ee?M:null,E["aria-labelledby"]=ie&&!ee?Ie:null);const R={...E,...ne,...J.props,className:ut(ne.className,J.props.className),onTouchStart:Q,ref:x,...q?{onMouseMove:w}:{}},C={};X||(R.onTouchStart=me,R.onTouchEnd=l),m||(R.onMouseOver=Qe(y,R.onMouseOver),R.onMouseLeave=Qe(b,R.onMouseLeave),ge||(C.onMouseOver=y,C.onMouseLeave=b)),d||(R.onFocus=Qe(Z,R.onFocus),R.onBlur=Qe(j,R.onBlur),ge||(C.onFocus=Z,C.onBlur=j));const G={...i,isRtl:se,arrow:r,disableInteractive:ge,placement:_,PopperComponentProp:$,touch:oe.current},N=typeof A.popper=="function"?A.popper(G):A.popper,P=h.useMemo(()=>{var xe,_t;let k=[{name:"arrow",enabled:!!ce,options:{element:ce,padding:4}}];return(xe=I.popperOptions)!=null&&xe.modifiers&&(k=k.concat(I.popperOptions.modifiers)),(_t=N==null?void 0:N.popperOptions)!=null&&_t.modifiers&&(k=k.concat(N.popperOptions.modifiers)),{...I.popperOptions,...N==null?void 0:N.popperOptions,modifiers:k}},[ce,I.popperOptions,N==null?void 0:N.popperOptions]),ve=ui(G),ue=typeof A.transition=="function"?A.transition(G):A.transition,be={slots:{popper:o.Popper,transition:o.Transition??de,tooltip:o.Tooltip,arrow:o.Arrow,...V},slotProps:{arrow:A.arrow??c.arrow,popper:{...I,...N??c.popper},tooltip:A.tooltip??c.tooltip,transition:{...ae,...ue??c.transition}}},[_e,Ae]=Ge("popper",{elementType:di,externalForwardedProps:be,ownerState:G,className:ut(ve.popper,I==null?void 0:I.className)}),[_n,Tn]=Ge("transition",{elementType:Nn,externalForwardedProps:be,ownerState:G}),[kn,Sn]=Ge("tooltip",{elementType:pi,className:ve.tooltip,externalForwardedProps:be,ownerState:G}),[Mn,En]=Ge("arrow",{elementType:hi,className:ve.arrow,externalForwardedProps:be,ownerState:G,ref:pe});return p.jsxs(h.Fragment,{children:[h.cloneElement(J,R),p.jsx(_e,{as:$??tn,placement:_,anchorEl:q?{getBoundingClientRect:()=>({top:He.y,left:He.x,right:He.x,bottom:He.y,width:0,height:0})}:H,popperRef:S,open:H?ie:!1,id:Ie,transition:!0,...C,...Ae,popperOptions:P,children:({TransitionProps:k})=>p.jsx(_n,{timeout:B.transitions.duration.shorter,...k,...Tn,children:p.jsxs(kn,{...Sn,children:[M,r?p.jsx(Mn,{...En}):null]})})})]})}),dt=oi({createStyledComponent:it("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root}),useThemeProps:t=>Jt({props:t,name:"MuiStack"})});function fi(t,e){return new Ye({x:t.x+e.x,y:t.y+e.y})}function mi(t,e){return new Ye({x:t.x-e.x,y:t.y-e.y})}function yi(t){return!!t&&t instanceof Element}function gi(t){return!!t&&(t instanceof SVGElement||"ownerSVGElement"in t)}function vi(t){return!!t&&"createSVGPoint"in t}function bi(t){return!!t&&"getScreenCTM"in t}function xi(t){return!!t&&"changedTouches"in t}function wi(t){return!!t&&"clientX"in t}function _i(t){return!!t&&(t instanceof Event||"nativeEvent"in t&&t.nativeEvent instanceof Event)}function Fe(){return Fe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Fe.apply(this,arguments)}var st={x:0,y:0};function Ti(t){if(!t)return Fe({},st);if(xi(t))return t.changedTouches.length>0?{x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}:Fe({},st);if(wi(t))return{x:t.clientX,y:t.clientY};var e=t==null?void 0:t.target,n=e&&"getBoundingClientRect"in e?e.getBoundingClientRect():null;return n?{x:n.x+n.width/2,y:n.y+n.height/2}:Fe({},st)}function Xt(t,e){if(!t||!e)return null;var n=Ti(e),i=gi(t)?t.ownerSVGElement:t,r=bi(i)?i.getScreenCTM():null;if(vi(i)&&r){var a=i.createSVGPoint();return a.x=n.x,a.y=n.y,a=a.matrixTransform(r.inverse()),new Ye({x:a.x,y:a.y})}var s=t.getBoundingClientRect();return new Ye({x:n.x-s.left-t.clientLeft,y:n.y-s.top-t.clientTop})}function je(t,e){if(yi(t)&&e)return Xt(t,e);if(_i(t)){var n=t,i=n.target;if(i)return Xt(i,n)}return null}function ki(t,e,n){return Math.max(e,Math.min(t,n))}const L={toVector(t,e){return t===void 0&&(t=e),Array.isArray(t)?t:[t,t]},add(t,e){return[t[0]+e[0],t[1]+e[1]]},sub(t,e){return[t[0]-e[0],t[1]-e[1]]},addTo(t,e){t[0]+=e[0],t[1]+=e[1]},subTo(t,e){t[0]-=e[0],t[1]-=e[1]}};function At(t,e,n){return e===0||Math.abs(e)===1/0?Math.pow(t,n*5):t*e*n/(e+n*t)}function Yt(t,e,n,i=.15){return i===0?ki(t,e,n):t<e?-At(e-t,n-e,i)+e:t>n?+At(t-n,n-e,i)+n:t}function Si(t,[e,n],[i,r]){const[[a,s],[o,c]]=t;return[Yt(e,a,s,i),Yt(n,o,c,r)]}function Mi(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ei(t){var e=Mi(t,"string");return typeof e=="symbol"?e:String(e)}function z(t,e,n){return e=Ei(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function It(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?It(Object(n),!0).forEach(function(i){z(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):It(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}const nn={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function qt(t){return t?t[0].toUpperCase()+t.slice(1):""}const Pi=["enter","leave"];function Di(t=!1,e){return t&&!Pi.includes(e)}function Ci(t,e="",n=!1){const i=nn[t],r=i&&i[e]||e;return"on"+qt(t)+qt(r)+(Di(n,r)?"Capture":"")}const Xi=["gotpointercapture","lostpointercapture"];function Ai(t){let e=t.substring(2).toLowerCase();const n=!!~e.indexOf("passive");n&&(e=e.replace("passive",""));const i=Xi.includes(e)?"capturecapture":"capture",r=!!~e.indexOf(i);return r&&(e=e.replace("capture","")),{device:e,capture:r,passive:n}}function Yi(t,e=""){const n=nn[t],i=n&&n[e]||e;return t+i}function rt(t){return"touches"in t}function rn(t){return rt(t)?"touch":"pointerType"in t?t.pointerType:"mouse"}function Ii(t){return Array.from(t.touches).filter(e=>{var n,i;return e.target===t.currentTarget||((n=t.currentTarget)===null||n===void 0||(i=n.contains)===null||i===void 0?void 0:i.call(n,e.target))})}function qi(t){return t.type==="touchend"||t.type==="touchcancel"?t.changedTouches:t.targetTouches}function an(t){return rt(t)?qi(t)[0]:t}function pt(t,e){try{const n=e.clientX-t.clientX,i=e.clientY-t.clientY,r=(e.clientX+t.clientX)/2,a=(e.clientY+t.clientY)/2,s=Math.hypot(n,i);return{angle:-(Math.atan2(n,i)*180)/Math.PI,distance:s,origin:[r,a]}}catch{}return null}function ji(t){return Ii(t).map(e=>e.identifier)}function jt(t,e){const[n,i]=Array.from(t.touches).filter(r=>e.includes(r.identifier));return pt(n,i)}function ot(t){const e=an(t);return rt(t)?e.identifier:e.pointerId}function Ne(t){const e=an(t);return[e.clientX,e.clientY]}const Rt=40,Ot=800;function sn(t){let{deltaX:e,deltaY:n,deltaMode:i}=t;return i===1?(e*=Rt,n*=Rt):i===2&&(e*=Ot,n*=Ot),[e,n]}function Ri(t){var e,n;const{scrollX:i,scrollY:r,scrollLeft:a,scrollTop:s}=t.currentTarget;return[(e=i??a)!==null&&e!==void 0?e:0,(n=r??s)!==null&&n!==void 0?n:0]}function Oi(t){const e={};if("buttons"in t&&(e.buttons=t.buttons),"shiftKey"in t){const{shiftKey:n,altKey:i,metaKey:r,ctrlKey:a}=t;Object.assign(e,{shiftKey:n,altKey:i,metaKey:r,ctrlKey:a})}return e}function nt(t,...e){return typeof t=="function"?t(...e):t}function Li(){}function $i(...t){return t.length===0?Li:t.length===1?t[0]:function(){let e;for(const n of t)e=n.apply(this,arguments)||e;return e}}function Lt(t,e){return Object.assign({},e,t||{})}const Vi=32;class on{constructor(e,n,i){this.ctrl=e,this.args=n,this.key=i,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(e){this.ctrl.state[this.key]=e}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:e,shared:n,ingKey:i,args:r}=this;n[i]=e._active=e.active=e._blocked=e._force=!1,e._step=[!1,!1],e.intentional=!1,e._movement=[0,0],e._distance=[0,0],e._direction=[0,0],e._delta=[0,0],e._bounds=[[-1/0,1/0],[-1/0,1/0]],e.args=r,e.axis=void 0,e.memo=void 0,e.elapsedTime=e.timeDelta=0,e.direction=[0,0],e.distance=[0,0],e.overflow=[0,0],e._movementBound=[!1,!1],e.velocity=[0,0],e.movement=[0,0],e.delta=[0,0],e.timeStamp=0}start(e){const n=this.state,i=this.config;n._active||(this.reset(),this.computeInitial(),n._active=!0,n.target=e.target,n.currentTarget=e.currentTarget,n.lastOffset=i.from?nt(i.from,n):n.offset,n.offset=n.lastOffset,n.startTime=n.timeStamp=e.timeStamp)}computeValues(e){const n=this.state;n._values=e,n.values=this.config.transform(e)}computeInitial(){const e=this.state;e._initial=e._values,e.initial=e.values}compute(e){const{state:n,config:i,shared:r}=this;n.args=this.args;let a=0;if(e&&(n.event=e,i.preventDefault&&e.cancelable&&n.event.preventDefault(),n.type=e.type,r.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,r.locked=!!document.pointerLockElement,Object.assign(r,Oi(e)),r.down=r.pressed=r.buttons%2===1||r.touches>0,a=e.timeStamp-n.timeStamp,n.timeStamp=e.timeStamp,n.elapsedTime=n.timeStamp-n.startTime),n._active){const T=n._delta.map(Math.abs);L.addTo(n._distance,T)}this.axisIntent&&this.axisIntent(e);const[s,o]=n._movement,[c,u]=i.threshold,{_step:d,values:m}=n;if(i.hasCustomTransform?(d[0]===!1&&(d[0]=Math.abs(s)>=c&&m[0]),d[1]===!1&&(d[1]=Math.abs(o)>=u&&m[1])):(d[0]===!1&&(d[0]=Math.abs(s)>=c&&Math.sign(s)*c),d[1]===!1&&(d[1]=Math.abs(o)>=u&&Math.sign(o)*u)),n.intentional=d[0]!==!1||d[1]!==!1,!n.intentional)return;const g=[0,0];if(i.hasCustomTransform){const[T,Se]=m;g[0]=d[0]!==!1?T-d[0]:0,g[1]=d[1]!==!1?Se-d[1]:0}else g[0]=d[0]!==!1?s-d[0]:0,g[1]=d[1]!==!1?o-d[1]:0;this.restrictToAxis&&!n._blocked&&this.restrictToAxis(g);const X=n.offset,Y=n._active&&!n._blocked||n.active;Y&&(n.first=n._active&&!n.active,n.last=!n._active&&n.active,n.active=r[this.ingKey]=n._active,e&&(n.first&&("bounds"in i&&(n._bounds=nt(i.bounds,n)),this.setup&&this.setup()),n.movement=g,this.computeOffset()));const[v,U]=n.offset,[[q,te],[K,O]]=n._bounds;n.overflow=[v<q?-1:v>te?1:0,U<K?-1:U>O?1:0],n._movementBound[0]=n.overflow[0]?n._movementBound[0]===!1?n._movement[0]:n._movementBound[0]:!1,n._movementBound[1]=n.overflow[1]?n._movementBound[1]===!1?n._movement[1]:n._movementBound[1]:!1;const re=n._active?i.rubberband||[0,0]:[0,0];if(n.offset=Si(n._bounds,n.offset,re),n.delta=L.sub(n.offset,X),this.computeMovement(),Y&&(!n.last||a>Vi)){n.delta=L.sub(n.offset,X);const T=n.delta.map(Math.abs);L.addTo(n.distance,T),n.direction=n.delta.map(Math.sign),n._direction=n._delta.map(Math.sign),!n.first&&a>0&&(n.velocity=[T[0]/a,T[1]/a],n.timeDelta=a)}}emit(){const e=this.state,n=this.shared,i=this.config;if(e._active||this.clean(),(e._blocked||!e.intentional)&&!e._force&&!i.triggerAllEvents)return;const r=this.handler(W(W(W({},n),e),{},{[this.aliasKey]:e.values}));r!==void 0&&(e.memo=r)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function Bi([t,e],n){const i=Math.abs(t),r=Math.abs(e);if(i>r&&i>n)return"x";if(r>i&&r>n)return"y"}class Ue extends on{constructor(...e){super(...e),z(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=L.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=L.sub(this.state.offset,this.state.lastOffset)}axisIntent(e){const n=this.state,i=this.config;if(!n.axis&&e){const r=typeof i.axisThreshold=="object"?i.axisThreshold[rn(e)]:i.axisThreshold;n.axis=Bi(n._movement,r)}n._blocked=(i.lockDirection||!!i.axis)&&!n.axis||!!i.axis&&i.axis!==n.axis}restrictToAxis(e){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":e[1]=0;break;case"y":e[0]=0;break}}}const Ni=t=>t,$t=.15,ln={enabled(t=!0){return t},eventOptions(t,e,n){return W(W({},n.shared.eventOptions),t)},preventDefault(t=!1){return t},triggerAllEvents(t=!1){return t},rubberband(t=0){switch(t){case!0:return[$t,$t];case!1:return[0,0];default:return L.toVector(t)}},from(t){if(typeof t=="function")return t;if(t!=null)return L.toVector(t)},transform(t,e,n){const i=t||n.shared.transform;return this.hasCustomTransform=!!i,i||Ni},threshold(t){return L.toVector(t,0)}},Wi=0,Re=W(W({},ln),{},{axis(t,e,{axis:n}){if(this.lockDirection=n==="lock",!this.lockDirection)return n},axisThreshold(t=Wi){return t},bounds(t={}){if(typeof t=="function")return a=>Re.bounds(t(a));if("current"in t)return()=>t.current;if(typeof HTMLElement=="function"&&t instanceof HTMLElement)return t;const{left:e=-1/0,right:n=1/0,top:i=-1/0,bottom:r=1/0}=t;return[[e,n],[i,r]]}}),Vt={ArrowRight:(t,e=1)=>[t*e,0],ArrowLeft:(t,e=1)=>[-1*t*e,0],ArrowUp:(t,e=1)=>[0,-1*t*e],ArrowDown:(t,e=1)=>[0,t*e]};class Hi extends Ue{constructor(...e){super(...e),z(this,"ingKey","dragging")}reset(){super.reset();const e=this.state;e._pointerId=void 0,e._pointerActive=!1,e._keyboardActive=!1,e._preventScroll=!1,e._delayed=!1,e.swipe=[0,0],e.tap=!1,e.canceled=!1,e.cancel=this.cancel.bind(this)}setup(){const e=this.state;if(e._bounds instanceof HTMLElement){const n=e._bounds.getBoundingClientRect(),i=e.currentTarget.getBoundingClientRect(),r={left:n.left-i.left+e.offset[0],right:n.right-i.right+e.offset[0],top:n.top-i.top+e.offset[1],bottom:n.bottom-i.bottom+e.offset[1]};e._bounds=Re.bounds(r)}}cancel(){const e=this.state;e.canceled||(e.canceled=!0,e._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(e){const n=this.config,i=this.state;if(e.buttons!=null&&(Array.isArray(n.pointerButtons)?!n.pointerButtons.includes(e.buttons):n.pointerButtons!==-1&&n.pointerButtons!==e.buttons))return;const r=this.ctrl.setEventIds(e);n.pointerCapture&&e.target.setPointerCapture(e.pointerId),!(r&&r.size>1&&i._pointerActive)&&(this.start(e),this.setupPointer(e),i._pointerId=ot(e),i._pointerActive=!0,this.computeValues(Ne(e)),this.computeInitial(),n.preventScrollAxis&&rn(e)!=="mouse"?(i._active=!1,this.setupScrollPrevention(e)):n.delay>0?(this.setupDelayTrigger(e),n.triggerAllEvents&&(this.compute(e),this.emit())):this.startPointerDrag(e))}startPointerDrag(e){const n=this.state;n._active=!0,n._preventScroll=!0,n._delayed=!1,this.compute(e),this.emit()}pointerMove(e){const n=this.state,i=this.config;if(!n._pointerActive)return;const r=ot(e);if(n._pointerId!==void 0&&r!==n._pointerId)return;const a=Ne(e);if(document.pointerLockElement===e.target?n._delta=[e.movementX,e.movementY]:(n._delta=L.sub(a,n._values),this.computeValues(a)),L.addTo(n._movement,n._delta),this.compute(e),n._delayed&&n.intentional){this.timeoutStore.remove("dragDelay"),n.active=!1,this.startPointerDrag(e);return}if(i.preventScrollAxis&&!n._preventScroll)if(n.axis)if(n.axis===i.preventScrollAxis||i.preventScrollAxis==="xy"){n._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(e);return}else return;this.emit()}pointerUp(e){this.ctrl.setEventIds(e);try{this.config.pointerCapture&&e.target.hasPointerCapture(e.pointerId)&&e.target.releasePointerCapture(e.pointerId)}catch{}const n=this.state,i=this.config;if(!n._active||!n._pointerActive)return;const r=ot(e);if(n._pointerId!==void 0&&r!==n._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(e);const[a,s]=n._distance;if(n.tap=a<=i.tapsThreshold&&s<=i.tapsThreshold,n.tap&&i.filterTaps)n._force=!0;else{const[o,c]=n._delta,[u,d]=n._movement,[m,g]=i.swipe.velocity,[X,Y]=i.swipe.distance,v=i.swipe.duration;if(n.elapsedTime<v){const U=Math.abs(o/n.timeDelta),q=Math.abs(c/n.timeDelta);U>m&&Math.abs(u)>X&&(n.swipe[0]=Math.sign(o)),q>g&&Math.abs(d)>Y&&(n.swipe[1]=Math.sign(c))}}this.emit()}pointerClick(e){!this.state.tap&&e.detail>0&&(e.preventDefault(),e.stopPropagation())}setupPointer(e){const n=this.config,i=n.device;n.pointerLock&&e.currentTarget.requestPointerLock(),n.pointerCapture||(this.eventStore.add(this.sharedConfig.window,i,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,i,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,i,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(e){this.state._preventScroll&&e.cancelable&&e.preventDefault()}setupScrollPrevention(e){this.state._preventScroll=!1,Fi(e);const n=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",n),this.eventStore.add(this.sharedConfig.window,"touch","cancel",n),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,e)}setupDelayTrigger(e){this.state._delayed=!0,this.timeoutStore.add("dragDelay",()=>{this.state._step=[0,0],this.startPointerDrag(e)},this.config.delay)}keyDown(e){const n=Vt[e.key];if(n){const i=this.state,r=e.shiftKey?10:e.altKey?.1:1;this.start(e),i._delta=n(this.config.keyboardDisplacement,r),i._keyboardActive=!0,L.addTo(i._movement,i._delta),this.compute(e),this.emit()}}keyUp(e){e.key in Vt&&(this.state._keyboardActive=!1,this.setActive(),this.compute(e),this.emit())}bind(e){const n=this.config.device;e(n,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(e(n,"change",this.pointerMove.bind(this)),e(n,"end",this.pointerUp.bind(this)),e(n,"cancel",this.pointerUp.bind(this)),e("lostPointerCapture","",this.pointerUp.bind(this))),this.config.keys&&(e("key","down",this.keyDown.bind(this)),e("key","up",this.keyUp.bind(this))),this.config.filterTaps&&e("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}}function Fi(t){"persist"in t&&typeof t.persist=="function"&&t.persist()}const Ke=typeof window<"u"&&window.document&&window.document.createElement;function cn(){return Ke&&"ontouchstart"in window}function Ui(){return cn()||Ke&&window.navigator.maxTouchPoints>1}function Ki(){return Ke&&"onpointerdown"in window}function Zi(){return Ke&&"exitPointerLock"in window.document}function Gi(){try{return"constructor"in GestureEvent}catch{return!1}}const ye={isBrowser:Ke,gesture:Gi(),touch:cn(),touchscreen:Ui(),pointer:Ki(),pointerLock:Zi()},zi=250,Ji=180,Qi=.5,er=50,tr=250,nr=10,Bt={mouse:0,touch:0,pen:8},ir=W(W({},Re),{},{device(t,e,{pointer:{touch:n=!1,lock:i=!1,mouse:r=!1}={}}){return this.pointerLock=i&&ye.pointerLock,ye.touch&&n?"touch":this.pointerLock?"mouse":ye.pointer&&!r?"pointer":ye.touch?"touch":"mouse"},preventScrollAxis(t,e,{preventScroll:n}){if(this.preventScrollDelay=typeof n=="number"?n:n||n===void 0&&t?zi:void 0,!(!ye.touchscreen||n===!1))return t||(n!==void 0?"y":void 0)},pointerCapture(t,e,{pointer:{capture:n=!0,buttons:i=1,keys:r=!0}={}}){return this.pointerButtons=i,this.keys=r,!this.pointerLock&&this.device==="pointer"&&n},threshold(t,e,{filterTaps:n=!1,tapsThreshold:i=3,axis:r=void 0}){const a=L.toVector(t,n?i:r?1:0);return this.filterTaps=n,this.tapsThreshold=i,a},swipe({velocity:t=Qi,distance:e=er,duration:n=tr}={}){return{velocity:this.transform(L.toVector(t)),distance:this.transform(L.toVector(e)),duration:n}},delay(t=0){switch(t){case!0:return Ji;case!1:return 0;default:return t}},axisThreshold(t){return t?W(W({},Bt),t):Bt},keyboardDisplacement(t=nr){return t}});function un(t){const[e,n]=t.overflow,[i,r]=t._delta,[a,s]=t._direction;(e<0&&i>0&&a<0||e>0&&i<0&&a>0)&&(t._movement[0]=t._movementBound[0]),(n<0&&r>0&&s<0||n>0&&r<0&&s>0)&&(t._movement[1]=t._movementBound[1])}const rr=30,ar=100;class sr extends on{constructor(...e){super(...e),z(this,"ingKey","pinching"),z(this,"aliasKey","da")}init(){this.state.offset=[1,0],this.state.lastOffset=[1,0],this.state._pointerEvents=new Map}reset(){super.reset();const e=this.state;e._touchIds=[],e.canceled=!1,e.cancel=this.cancel.bind(this),e.turns=0}computeOffset(){const{type:e,movement:n,lastOffset:i}=this.state;e==="wheel"?this.state.offset=L.add(n,i):this.state.offset=[(1+n[0])*i[0],n[1]+i[1]]}computeMovement(){const{offset:e,lastOffset:n}=this.state;this.state.movement=[e[0]/n[0],e[1]-n[1]]}axisIntent(){const e=this.state,[n,i]=e._movement;if(!e.axis){const r=Math.abs(n)*rr-Math.abs(i);r<0?e.axis="angle":r>0&&(e.axis="scale")}}restrictToAxis(e){this.config.lockDirection&&(this.state.axis==="scale"?e[1]=0:this.state.axis==="angle"&&(e[0]=0))}cancel(){const e=this.state;e.canceled||setTimeout(()=>{e.canceled=!0,e._active=!1,this.compute(),this.emit()},0)}touchStart(e){this.ctrl.setEventIds(e);const n=this.state,i=this.ctrl.touchIds;if(n._active&&n._touchIds.every(a=>i.has(a))||i.size<2)return;this.start(e),n._touchIds=Array.from(i).slice(0,2);const r=jt(e,n._touchIds);r&&this.pinchStart(e,r)}pointerStart(e){if(e.buttons!=null&&e.buttons%2!==1)return;this.ctrl.setEventIds(e),e.target.setPointerCapture(e.pointerId);const n=this.state,i=n._pointerEvents,r=this.ctrl.pointerIds;if(n._active&&Array.from(i.keys()).every(s=>r.has(s))||(i.size<2&&i.set(e.pointerId,e),n._pointerEvents.size<2))return;this.start(e);const a=pt(...Array.from(i.values()));a&&this.pinchStart(e,a)}pinchStart(e,n){const i=this.state;i.origin=n.origin,this.computeValues([n.distance,n.angle]),this.computeInitial(),this.compute(e),this.emit()}touchMove(e){if(!this.state._active)return;const n=jt(e,this.state._touchIds);n&&this.pinchMove(e,n)}pointerMove(e){const n=this.state._pointerEvents;if(n.has(e.pointerId)&&n.set(e.pointerId,e),!this.state._active)return;const i=pt(...Array.from(n.values()));i&&this.pinchMove(e,i)}pinchMove(e,n){const i=this.state,r=i._values[1],a=n.angle-r;let s=0;Math.abs(a)>270&&(s+=Math.sign(a)),this.computeValues([n.distance,n.angle-360*s]),i.origin=n.origin,i.turns=s,i._movement=[i._values[0]/i._initial[0]-1,i._values[1]-i._initial[1]],this.compute(e),this.emit()}touchEnd(e){this.ctrl.setEventIds(e),this.state._active&&this.state._touchIds.some(n=>!this.ctrl.touchIds.has(n))&&(this.state._active=!1,this.compute(e),this.emit())}pointerEnd(e){const n=this.state;this.ctrl.setEventIds(e);try{e.target.releasePointerCapture(e.pointerId)}catch{}n._pointerEvents.has(e.pointerId)&&n._pointerEvents.delete(e.pointerId),n._active&&n._pointerEvents.size<2&&(n._active=!1,this.compute(e),this.emit())}gestureStart(e){e.cancelable&&e.preventDefault();const n=this.state;n._active||(this.start(e),this.computeValues([e.scale,e.rotation]),n.origin=[e.clientX,e.clientY],this.compute(e),this.emit())}gestureMove(e){if(e.cancelable&&e.preventDefault(),!this.state._active)return;const n=this.state;this.computeValues([e.scale,e.rotation]),n.origin=[e.clientX,e.clientY];const i=n._movement;n._movement=[e.scale-1,e.rotation],n._delta=L.sub(n._movement,i),this.compute(e),this.emit()}gestureEnd(e){this.state._active&&(this.state._active=!1,this.compute(e),this.emit())}wheel(e){const n=this.config.modifierKey;n&&(Array.isArray(n)?!n.find(i=>e[i]):!e[n])||(this.state._active?this.wheelChange(e):this.wheelStart(e),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this)))}wheelStart(e){this.start(e),this.wheelChange(e)}wheelChange(e){"uv"in e||e.cancelable&&e.preventDefault();const i=this.state;i._delta=[-sn(e)[1]/ar*i.offset[0],0],L.addTo(i._movement,i._delta),un(i),this.state.origin=[e.clientX,e.clientY],this.compute(e),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(e){const n=this.config.device;n&&(e(n,"start",this[n+"Start"].bind(this)),e(n,"change",this[n+"Move"].bind(this)),e(n,"end",this[n+"End"].bind(this)),e(n,"cancel",this[n+"End"].bind(this)),e("lostPointerCapture","",this[n+"End"].bind(this))),this.config.pinchOnWheel&&e("wheel","",this.wheel.bind(this),{passive:!1})}}const or=W(W({},ln),{},{device(t,e,{shared:n,pointer:{touch:i=!1}={}}){if(n.target&&!ye.touch&&ye.gesture)return"gesture";if(ye.touch&&i)return"touch";if(ye.touchscreen){if(ye.pointer)return"pointer";if(ye.touch)return"touch"}},bounds(t,e,{scaleBounds:n={},angleBounds:i={}}){const r=s=>{const o=Lt(nt(n,s),{min:-1/0,max:1/0});return[o.min,o.max]},a=s=>{const o=Lt(nt(i,s),{min:-1/0,max:1/0});return[o.min,o.max]};return typeof n!="function"&&typeof i!="function"?[r(),a()]:s=>[r(s),a(s)]},threshold(t,e,n){return this.lockDirection=n.axis==="lock",L.toVector(t,this.lockDirection?[.1,3]:0)},modifierKey(t){return t===void 0?"ctrlKey":t},pinchOnWheel(t=!0){return t}});class lr extends Ue{constructor(...e){super(...e),z(this,"ingKey","moving")}move(e){this.config.mouseOnly&&e.pointerType!=="mouse"||(this.state._active?this.moveChange(e):this.moveStart(e),this.timeoutStore.add("moveEnd",this.moveEnd.bind(this)))}moveStart(e){this.start(e),this.computeValues(Ne(e)),this.compute(e),this.computeInitial(),this.emit()}moveChange(e){if(!this.state._active)return;const n=Ne(e),i=this.state;i._delta=L.sub(n,i._values),L.addTo(i._movement,i._delta),this.computeValues(n),this.compute(e),this.emit()}moveEnd(e){this.state._active&&(this.state._active=!1,this.compute(e),this.emit())}bind(e){e("pointer","change",this.move.bind(this)),e("pointer","leave",this.moveEnd.bind(this))}}const cr=W(W({},Re),{},{mouseOnly:(t=!0)=>t});class ur extends Ue{constructor(...e){super(...e),z(this,"ingKey","scrolling")}scroll(e){this.state._active||this.start(e),this.scrollChange(e),this.timeoutStore.add("scrollEnd",this.scrollEnd.bind(this))}scrollChange(e){e.cancelable&&e.preventDefault();const n=this.state,i=Ri(e);n._delta=L.sub(i,n._values),L.addTo(n._movement,n._delta),this.computeValues(i),this.compute(e),this.emit()}scrollEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(e){e("scroll","",this.scroll.bind(this))}}const dr=Re;class pr extends Ue{constructor(...e){super(...e),z(this,"ingKey","wheeling")}wheel(e){this.state._active||this.start(e),this.wheelChange(e),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this))}wheelChange(e){const n=this.state;n._delta=sn(e),L.addTo(n._movement,n._delta),un(n),this.compute(e),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(e){e("wheel","",this.wheel.bind(this))}}const hr=Re;class fr extends Ue{constructor(...e){super(...e),z(this,"ingKey","hovering")}enter(e){this.config.mouseOnly&&e.pointerType!=="mouse"||(this.start(e),this.computeValues(Ne(e)),this.compute(e),this.emit())}leave(e){if(this.config.mouseOnly&&e.pointerType!=="mouse")return;const n=this.state;if(!n._active)return;n._active=!1;const i=Ne(e);n._movement=n._delta=L.sub(i,n._values),this.computeValues(i),this.compute(e),n.delta=n.movement,this.emit()}bind(e){e("pointer","enter",this.enter.bind(this)),e("pointer","leave",this.leave.bind(this))}}const mr=W(W({},Re),{},{mouseOnly:(t=!0)=>t}),wt=new Map,ht=new Map;function yr(t){wt.set(t.key,t.engine),ht.set(t.key,t.resolver)}const gr={key:"drag",engine:Hi,resolver:ir},vr={key:"hover",engine:fr,resolver:mr},br={key:"move",engine:lr,resolver:cr},xr={key:"pinch",engine:sr,resolver:or},wr={key:"scroll",engine:ur,resolver:dr},_r={key:"wheel",engine:pr,resolver:hr};function Tr(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function kr(t,e){if(t==null)return{};var n=Tr(t,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}const Sr={target(t){if(t)return()=>"current"in t?t.current:t},enabled(t=!0){return t},window(t=ye.isBrowser?window:void 0){return t},eventOptions({passive:t=!0,capture:e=!1}={}){return{passive:t,capture:e}},transform(t){return t}},Mr=["target","eventOptions","window","enabled","transform"];function tt(t={},e){const n={};for(const[i,r]of Object.entries(e))switch(typeof r){case"function":n[i]=r.call(n,t[i],i,t);break;case"object":n[i]=tt(t[i],r);break;case"boolean":r&&(n[i]=t[i]);break}return n}function Er(t,e,n={}){const i=t,{target:r,eventOptions:a,window:s,enabled:o,transform:c}=i,u=kr(i,Mr);if(n.shared=tt({target:r,eventOptions:a,window:s,enabled:o,transform:c},Sr),e){const d=ht.get(e);n[e]=tt(W({shared:n.shared},u),d)}else for(const d in u){const m=ht.get(d);m&&(n[d]=tt(W({shared:n.shared},u[d]),m))}return n}class dn{constructor(e,n){z(this,"_listeners",new Set),this._ctrl=e,this._gestureKey=n}add(e,n,i,r,a){const s=this._listeners,o=Yi(n,i),c=this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{},u=W(W({},c),a);e.addEventListener(o,r,u);const d=()=>{e.removeEventListener(o,r,u),s.delete(d)};return s.add(d),d}clean(){this._listeners.forEach(e=>e()),this._listeners.clear()}}class Pr{constructor(){z(this,"_timeouts",new Map)}add(e,n,i=140,...r){this.remove(e),this._timeouts.set(e,window.setTimeout(n,i,...r))}remove(e){const n=this._timeouts.get(e);n&&window.clearTimeout(n)}clean(){this._timeouts.forEach(e=>void window.clearTimeout(e)),this._timeouts.clear()}}class Dr{constructor(e){z(this,"gestures",new Set),z(this,"_targetEventStore",new dn(this)),z(this,"gestureEventStores",{}),z(this,"gestureTimeoutStores",{}),z(this,"handlers",{}),z(this,"config",{}),z(this,"pointerIds",new Set),z(this,"touchIds",new Set),z(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),Cr(this,e)}setEventIds(e){if(rt(e))return this.touchIds=new Set(ji(e)),this.touchIds;if("pointerId"in e)return e.type==="pointerup"||e.type==="pointercancel"?this.pointerIds.delete(e.pointerId):e.type==="pointerdown"&&this.pointerIds.add(e.pointerId),this.pointerIds}applyHandlers(e,n){this.handlers=e,this.nativeHandlers=n}applyConfig(e,n){this.config=Er(e,n,this.config)}clean(){this._targetEventStore.clean();for(const e of this.gestures)this.gestureEventStores[e].clean(),this.gestureTimeoutStores[e].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...e){const n=this.config.shared,i={};let r;if(!(n.target&&(r=n.target(),!r))){if(n.enabled){for(const s of this.gestures){const o=this.config[s],c=Nt(i,o.eventOptions,!!r);if(o.enabled){const u=wt.get(s);new u(this,e,s).bind(c)}}const a=Nt(i,n.eventOptions,!!r);for(const s in this.nativeHandlers)a(s,"",o=>this.nativeHandlers[s](W(W({},this.state.shared),{},{event:o,args:e})),void 0,!0)}for(const a in i)i[a]=$i(...i[a]);if(!r)return i;for(const a in i){const{device:s,capture:o,passive:c}=Ai(a);this._targetEventStore.add(r,s,"",i[a],{capture:o,passive:c})}}}}function Le(t,e){t.gestures.add(e),t.gestureEventStores[e]=new dn(t,e),t.gestureTimeoutStores[e]=new Pr}function Cr(t,e){e.drag&&Le(t,"drag"),e.wheel&&Le(t,"wheel"),e.scroll&&Le(t,"scroll"),e.move&&Le(t,"move"),e.pinch&&Le(t,"pinch"),e.hover&&Le(t,"hover")}const Nt=(t,e,n)=>(i,r,a,s={},o=!1)=>{var c,u;const d=(c=s.capture)!==null&&c!==void 0?c:e.capture,m=(u=s.passive)!==null&&u!==void 0?u:e.passive;let g=o?i:Ci(i,r,d);n&&m&&(g+="Passive"),t[g]=t[g]||[],t[g].push(a)},Xr=/^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;function Ar(t){const e={},n={},i=new Set;for(let r in t)Xr.test(r)?(i.add(RegExp.lastMatch),n[r]=t[r]):e[r]=t[r];return[n,e,i]}function $e(t,e,n,i,r,a){if(!t.has(n)||!wt.has(i))return;const s=n+"Start",o=n+"End",c=u=>{let d;return u.first&&s in e&&e[s](u),n in e&&(d=e[n](u)),u.last&&o in e&&e[o](u),d};r[i]=c,a[i]=a[i]||{}}function Yr(t,e){const[n,i,r]=Ar(t),a={};return $e(r,n,"onDrag","drag",a,e),$e(r,n,"onWheel","wheel",a,e),$e(r,n,"onScroll","scroll",a,e),$e(r,n,"onPinch","pinch",a,e),$e(r,n,"onMove","move",a,e),$e(r,n,"onHover","hover",a,e),{handlers:a,config:e,nativeHandlers:i}}function Ir(t,e={},n,i){const r=ke.useMemo(()=>new Dr(t),[]);if(r.applyHandlers(t,i),r.applyConfig(e,n),ke.useEffect(r.effect.bind(r)),ke.useEffect(()=>r.clean.bind(r),[]),e.target===void 0)return r.bind.bind(r)}function qr(t){return t.forEach(yr),function(n,i){const{handlers:r,nativeHandlers:a,config:s}=Yr(n,i||{});return Ir(r,s,void 0,a)}}function jr(t,e){return qr([gr,xr,wr,_r,br,vr])(t,e||{})}function Rr(){return{scaleX:1,scaleY:1,translateX:0,translateY:0,skewX:0,skewY:0}}function pn(t){var e=t.scaleX,n=e===void 0?1:e,i=t.scaleY,r=i===void 0?1:i,a=t.translateX,s=a===void 0?0:a,o=t.translateY,c=o===void 0?0:o,u=t.skewX,d=u===void 0?0:u,m=t.skewY,g=m===void 0?0:m;return{scaleX:n,scaleY:r,translateX:s,translateY:c,skewX:d,skewY:g}}function hn(t){var e=t.scaleX,n=t.scaleY,i=t.translateX,r=t.translateY,a=t.skewX,s=t.skewY,o=e*n-s*a;return{scaleX:n/o,scaleY:e/o,translateX:(n*i-a*r)/-o,translateY:(s*i-e*r)/o,skewX:a/-o,skewY:s/-o}}function fn(t,e){var n=e.x,i=e.y;return{x:t.scaleX*n+t.skewX*i+t.translateX,y:t.skewY*n+t.scaleY*i+t.translateY}}function lt(t,e){var n=e.x,i=e.y;return fn(hn(t),{x:n,y:i})}function Or(t,e){e===void 0&&(e=void 0);var n=e||t;return pn({scaleX:t,scaleY:n})}function ct(t,e){return pn({translateX:t,translateY:e})}function Wt(t,e){return{scaleX:t.scaleX*e.scaleX+t.skewX*e.skewY,scaleY:t.skewY*e.skewX+t.scaleY*e.scaleY,translateX:t.scaleX*e.translateX+t.skewX*e.translateY+t.translateX,translateY:t.skewY*e.translateX+t.scaleY*e.translateY+t.translateY,skewX:t.scaleX*e.skewX+t.skewX*e.scaleY,skewY:t.skewY*e.scaleX+t.scaleY*e.skewY}}function ft(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];switch(e.length){case 0:throw new Error("composeMatrices() requires arguments: was called with no args");case 1:return e[0];case 2:return Wt(e[0],e[1]);default:{var i=e[0],r=e[1],a=e.slice(2),s=Wt(i,r);return ft.apply(void 0,[s].concat(a))}}}function mt(){return mt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},mt.apply(this,arguments)}var Lr={scaleX:1,scaleY:1,translateX:0,translateY:0,skewX:0,skewY:0},$r=function(e){return-e.deltaY>0?{scaleX:1.1,scaleY:1.1}:{scaleX:.9,scaleY:.9}},Vr=function(e){var n=e.offset,i=n[0],r=e.lastOffset,a=r[0];return{scaleX:i-a<0?.9:1.1,scaleY:i-a<0?.9:1.1}};function mn(t){var e=t.scaleXMin,n=e===void 0?0:e,i=t.scaleXMax,r=i===void 0?1/0:i,a=t.scaleYMin,s=a===void 0?0:a,o=t.scaleYMax,c=o===void 0?1/0:o,u=t.initialTransformMatrix,d=u===void 0?Lr:u,m=t.wheelDelta,g=m===void 0?$r:m,X=t.pinchDelta,Y=X===void 0?Vr:X,v=t.width,U=t.height,q=t.constrain,te=t.children,K=h.useRef(null),O=h.useRef(d),re=h.useState(d),T=re[0],Se=re[1],_=h.useState(!1),$=_[0],I=_[1],A=h.useState(void 0),V=A[0],M=A[1],de=h.useState(void 0),ae=de[0],ne=de[1],J=h.useCallback(function(f,y){if(q)return q(f,y);var b=f.scaleX,D=f.scaleY,j=b>r||b<n,Z=D>c||D<s;return j||Z?y:f},[q,n,r,s,c]),B=h.useCallback(function(f){Se(function(y){var b=J(f,y);return O.current=b,b})},[J]),se=h.useCallback(function(f){var y=f.x,b=f.y;return fn(T,{x:y,y:b})},[T]),H=h.useCallback(function(f){var y=f.x,b=f.y;return lt(T,{x:y,y:b})},[T]),Me=h.useCallback(function(){B(d)},[d,B]),ce=h.useCallback(function(f){var y=f.scaleX,b=f.scaleY,D=f.point,j=b||y,Z=D||{x:v/2,y:U/2},Q=lt(O.current,Z),me=ft(O.current,ct(Q.x,Q.y),Or(y,j),ct(-Q.x,-Q.y));if(B(me),$){var l=O.current,x=l.translateX,S=l.translateY;ne(D),M({translateX:x,translateY:S})}},[U,v,$,B]),pe=h.useCallback(function(f){var y=f.translateX,b=f.translateY,D=ft(T,ct(y,b));B(D)},[B,T]),oe=h.useCallback(function(f){var y=f.translateX,b=f.translateY,D=mt({},T,{translateX:y,translateY:b});B(D)},[B,T]),ge=h.useCallback(function(f){var y=f.x,b=f.y,D=lt(T,{x:y,y:b});oe({translateX:D.x,translateY:D.y})},[oe,T]),he=h.useCallback(function(){return hn(T)},[T]),we=h.useCallback(function(){var f=he(),y=f.translateX,b=f.translateY,D=f.scaleX,j=f.scaleY,Z=f.skewX,Q=f.skewY;return"matrix("+D+", "+Q+", "+Z+", "+j+", "+y+", "+b+")"},[he]),fe=h.useCallback(function(f){var y=T.translateX,b=T.translateY;ne(je(f)||void 0),M({translateX:y,translateY:b}),I(!0)},[T]),le=h.useCallback(function(f,y){var b,D;if(!(!$||!ae||!V)){var j=je(f),Z=j?-(ae.x-j.x):-ae.x,Q=j?-(ae.y-j.y):-ae.y,me=V.translateX+Z;y!=null&&y.offsetX&&(me+=(b=y==null?void 0:y.offsetX)!=null?b:0);var l=V.translateY+Q;y!=null&&y.offsetY&&(l+=(D=y==null?void 0:y.offsetY)!=null?D:0),oe({translateX:me,translateY:l})}},[$,oe,ae,V]),Ce=h.useCallback(function(){ne(void 0),M(void 0),I(!1)},[]),Ee=h.useCallback(function(f){f.preventDefault();var y=je(f)||void 0,b=g(f),D=b.scaleX,j=b.scaleY;ce({scaleX:D,scaleY:j,point:y})},[ce,g]),ie=h.useCallback(function(f){var y=f.origin,b=y[0],D=y[1],j=f.memo,Z=j;if(K.current){var Q,me=(Q=Z)!=null?Q:K.current.getBoundingClientRect(),l=me.top,x=me.left;Z||(Z={top:l,left:x});var S=Y(f),w=S.scaleX,E=S.scaleY;ce({scaleX:w,scaleY:E,point:{x:b-x,y:D-l}})}return Z},[ce,Y]),Ie=h.useCallback(function(){var f=T.translateX,y=T.translateY,b=T.scaleX,D=T.scaleY,j=T.skewX,Z=T.skewY;return"matrix("+b+", "+Z+", "+j+", "+D+", "+f+", "+y+")"},[T]),Pe=h.useCallback(function(){var f={x:v/2,y:U/2},y=H(f);pe({translateX:y.x-f.x,translateY:y.y-f.y})},[U,v,H,pe]),Xe=h.useCallback(function(){B(Rr())},[B]);jr({onDragStart:function(y){var b=y.event;b instanceof KeyboardEvent||fe(b)},onDrag:function(y){var b=y.event,D=y.pinching,j=y.cancel;D?(j(),Ce()):b instanceof KeyboardEvent||le(b)},onDragEnd:Ce,onPinch:ie,onWheel:function(y){var b=y.event,D=y.active,j=y.pinching;j||!D||Ee(b)}},{target:K,eventOptions:{passive:!1},drag:{filterTaps:!0}});var Oe={initialTransformMatrix:d,transformMatrix:T,isDragging:$,center:Pe,clear:Xe,scale:ce,translate:pe,translateTo:ge,setTranslate:oe,setTransformMatrix:B,reset:Me,handleWheel:Ee,handlePinch:ie,dragEnd:Ce,dragMove:le,dragStart:fe,toString:Ie,invert:he,toStringInvert:we,applyToPoint:se,applyInverseToPoint:H,containerRef:K};return ke.createElement(ke.Fragment,null,te(Oe))}mn.propTypes={width:De.number.isRequired,height:De.number.isRequired,wheelDelta:De.func,scaleXMin:De.number,scaleXMax:De.number,scaleYMin:De.number,scaleYMax:De.number,constrain:De.func,children:De.func.isRequired};var yt=Math.PI,gt=2*yt,qe=1e-6,Br=gt-qe;function vt(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function yn(){return new vt}vt.prototype=yn.prototype={constructor:vt,moveTo:function(t,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,e){this._+="L"+(this._x1=+t)+","+(this._y1=+e)},quadraticCurveTo:function(t,e,n,i){this._+="Q"+ +t+","+ +e+","+(this._x1=+n)+","+(this._y1=+i)},bezierCurveTo:function(t,e,n,i,r,a){this._+="C"+ +t+","+ +e+","+ +n+","+ +i+","+(this._x1=+r)+","+(this._y1=+a)},arcTo:function(t,e,n,i,r){t=+t,e=+e,n=+n,i=+i,r=+r;var a=this._x1,s=this._y1,o=n-t,c=i-e,u=a-t,d=s-e,m=u*u+d*d;if(r<0)throw new Error("negative radius: "+r);if(this._x1===null)this._+="M"+(this._x1=t)+","+(this._y1=e);else if(m>qe)if(!(Math.abs(d*o-c*u)>qe)||!r)this._+="L"+(this._x1=t)+","+(this._y1=e);else{var g=n-a,X=i-s,Y=o*o+c*c,v=g*g+X*X,U=Math.sqrt(Y),q=Math.sqrt(m),te=r*Math.tan((yt-Math.acos((Y+m-v)/(2*U*q)))/2),K=te/q,O=te/U;Math.abs(K-1)>qe&&(this._+="L"+(t+K*u)+","+(e+K*d)),this._+="A"+r+","+r+",0,0,"+ +(d*g>u*X)+","+(this._x1=t+O*o)+","+(this._y1=e+O*c)}},arc:function(t,e,n,i,r,a){t=+t,e=+e,n=+n,a=!!a;var s=n*Math.cos(i),o=n*Math.sin(i),c=t+s,u=e+o,d=1^a,m=a?i-r:r-i;if(n<0)throw new Error("negative radius: "+n);this._x1===null?this._+="M"+c+","+u:(Math.abs(this._x1-c)>qe||Math.abs(this._y1-u)>qe)&&(this._+="L"+c+","+u),n&&(m<0&&(m=m%gt+gt),m>Br?this._+="A"+n+","+n+",0,1,"+d+","+(t-s)+","+(e-o)+"A"+n+","+n+",0,1,"+d+","+(this._x1=c)+","+(this._y1=u):m>qe&&(this._+="A"+n+","+n+",0,"+ +(m>=yt)+","+d+","+(this._x1=t+n*Math.cos(r))+","+(this._y1=e+n*Math.sin(r))))},rect:function(t,e,n,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)+"h"+ +n+"v"+ +i+"h"+-n+"Z"},toString:function(){return this._}};function et(t){return function(){return t}}function gn(t){this._context=t}gn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e);break}}};function Nr(t){return new gn(t)}function Wr(t){return t[0]}function Hr(t){return t[1]}function Fr(){var t=Wr,e=Hr,n=et(!0),i=null,r=Nr,a=null;function s(o){var c,u=o.length,d,m=!1,g;for(i==null&&(a=r(g=yn())),c=0;c<=u;++c)!(c<u&&n(d=o[c],c,o))===m&&((m=!m)?a.lineStart():a.lineEnd()),m&&a.point(+t(d,c,o),+e(d,c,o));if(g)return a=null,g+""||null}return s.x=function(o){return arguments.length?(t=typeof o=="function"?o:et(+o),s):t},s.y=function(o){return arguments.length?(e=typeof o=="function"?o:et(+o),s):e},s.defined=function(o){return arguments.length?(n=typeof o=="function"?o:et(!!o),s):n},s.curve=function(o){return arguments.length?(r=o,i!=null&&(a=r(i)),s):r},s.context=function(o){return arguments.length?(o==null?i=a=null:a=r(i=o),s):i},s}function Ht(t,e,n){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+e)/6,(t._y0+4*t._y1+n)/6)}function vn(t){this._context=t}vn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Ht(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Ht(this,t,e);break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e}};function Ur(t){return new vn(t)}function Ft(t,e){t(e)}function Kr(t){var e=t===void 0?{}:t,n=e.x,i=e.y,r=e.defined,a=e.curve,s=Fr();return n&&Ft(s.x,n),i&&Ft(s.y,i),r&&s.defined(r),a&&s.curve(a),s}var Zr=["children","data","x","y","fill","className","curve","innerRef","defined"];function bt(){return bt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},bt.apply(this,arguments)}function Gr(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function zr(t){var e=t.children,n=t.data,i=n===void 0?[]:n,r=t.x,a=t.y,s=t.fill,o=s===void 0?"transparent":s,c=t.className,u=t.curve,d=t.innerRef,m=t.defined,g=m===void 0?function(){return!0}:m,X=Gr(t,Zr),Y=Kr({x:r,y:a,defined:g,curve:u});return e?ke.createElement(ke.Fragment,null,e({path:Y})):ke.createElement("path",bt({ref:d,className:Fn("visx-linepath",c),d:Y(i)||"",fill:o,strokeLinecap:"round"},X))}function Jr(t){var e=h.useState(t),n=e[0],i=e[1],r=h.useRef(null),a=h.useCallback(function(s,o){r.current=o||null,i(s)},[i]);return h.useLayoutEffect(function(){r.current&&(r.current(n),r.current=null)},[n]),[n,a]}function Ut(t,e,n){return Math.min(Math.max(t,e),n)}function Qr(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=ea(t))||e){n&&(t=n);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ea(t,e){if(t){if(typeof t=="string")return Kt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kt(t,e)}}function Kt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function ta(t,e){for(var n=t,i=1/0,r=Qr(e),a;!(a=r()).done;){var s=a.value,o=Math.sqrt(Math.pow(s.x-t.x,2)+Math.pow(s.y-t.y,2));o<i&&(i=o,n={x:s.x,y:s.y})}return n}function Zt(t,e,n){var i,r,a,s;return n===void 0&&(n={}),e.length>0?ta(t,e):{x:Ut(t.x,(i=n.xMin)!=null?i:-1/0,(r=n.xMax)!=null?r:1/0),y:Ut(t.y,(a=n.yMin)!=null?a:-1/0,(s=n.yMax)!=null?s:1/0)}}function na(t,e,n){if(n===void 0&&(n=1),!t)return[];for(var i=[],r=t.getTotalLength(),a=0;a<=r;a+=n){var s=t.getPointAtLength(a),o=s.matrixTransform(e);i.push(o)}return i}function ia(t){var e=h.useMemo(function(){if(!t)return[];var n=t.getCTM()||new DOMMatrix;return na(t,n)},[t==null?void 0:t.getTotalLength()]);return e}function Te(){return Te=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Te.apply(this,arguments)}function ra(t){var e=t===void 0?{}:t,n=e.resetOnStart,i=n===void 0?!1:n,r=e.snapToPointer,a=r===void 0?!0:r,s=e.onDragEnd,o=e.onDragMove,c=e.onDragStart,u=e.x,d=e.y,m=e.dx,g=e.dy,X=e.isDragging,Y=e.restrict,v=Y===void 0?{}:Y,U=e.restrictToPath,q=h.useRef({x:u,y:d,dx:m,dy:g}),te=Jr({x:u,y:d,dx:m??0,dy:g??0,isDragging:!1}),K=te[0],O=te[1],re=h.useState(new Ye({x:0,y:0})),T=re[0],Se=re[1];h.useEffect(function(){(q.current.x!==u||q.current.y!==d||q.current.dx!==m||q.current.dy!==g)&&(q.current={x:u,y:d,dx:m,dy:g},O(function(V){return Te({},V,{x:u,y:d,dx:m??0,dy:g??0})}))}),h.useEffect(function(){X!==void 0&&K.isDragging!==X&&O(function(V){return Te({},V,{isDragging:X})})},[K.isDragging,X,O]);var _=ia(U),$=h.useCallback(function(V){V.persist(),O(function(M){var de=M.x,ae=de===void 0?0:de,ne=M.y,J=ne===void 0?0:ne,B=M.dx,se=M.dy,H=new Ye({x:(ae||0)+B,y:(J||0)+se}),Me=je(V)||new Ye({x:0,y:0}),ce=a?Me:H,pe=Zt(ce,_,v);return Se(mi(H,Me)),{isDragging:!0,dx:i?0:M.dx,dy:i?0:M.dy,x:i?pe.x:pe.x-M.dx,y:i?pe.y:pe.y-M.dy}},c&&function(M){c(Te({},M,{event:V}))})},[c,i,v,_,O,a]),I=h.useCallback(function(V){V.persist(),O(function(M){if(!M.isDragging)return M;var de=M.x,ae=de===void 0?0:de,ne=M.y,J=ne===void 0?0:ne,B=je(V)||new Ye({x:0,y:0}),se=a?B:fi(B,T),H=Zt(se,_,v);return Te({},M,{dx:H.x-ae,dy:H.y-J})},o&&function(M){M.isDragging&&o(Te({},M,{event:V}))})},[O,o,a,T,_,v]),A=h.useCallback(function(V){V.persist(),O(function(M){return Te({},M,{isDragging:!1})},s&&function(M){s(Te({},M,{event:V}))})},[s,O]);return Te({},K,{dragEnd:A,dragMove:I,dragStart:$})}const bn=({tooltipBody:t,tooltipData:e})=>p.jsx("div",{children:t?t(e):p.jsx("div",{children:e.metaData&&Object.entries(e.metaData).map(([n,i])=>p.jsxs("div",{children:[p.jsxs("strong",{children:[n.charAt(0).toUpperCase()+n.slice(1),": "]}),typeof i=="string"?i.length>45?`${i.replace(/_/g," ").slice(0,45)}...`:i.replace(/_/g," "):String(i)]},n))})});bn.__docgenInfo={description:"",methods:[],displayName:"ScatterTooltip",props:{tooltipBody:{required:!1,tsType:{name:"signature",type:"function",raw:"(point: Point<T>) => JSX.Element",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
        }`}]}},description:""}}};const aa=We(p.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),sa=We(p.jsx("path",{d:"M17 5h-2V3h2zm-2 16h2v-2.59L19.59 21 21 19.59 18.41 17H21v-2h-6zm4-12h2V7h-2zm0 4h2v-2h-2zm-8 8h2v-2h-2zM7 5h2V3H7zM3 17h2v-2H3zm2 4v-2H3c0 1.1.9 2 2 2M19 3v2h2c0-1.1-.9-2-2-2m-8 2h2V3h-2zM3 9h2V7H3zm4 12h2v-2H7zm-4-8h2v-2H3zm0-8h2V3c-1.1 0-2 .9-2 2"}),"HighlightAlt"),oa=We(p.jsx("path",{d:"M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5"}),"PanTool"),la=We(p.jsx("path",{d:"M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2m-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9"}),"SettingsBackupRestore"),ca=We([p.jsx("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"},"0"),p.jsx("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2z"},"1")],"ZoomIn"),ua=We(p.jsx("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14M7 9h5v1H7z"}),"ZoomOut"),xn=({selectable:t,resetable:e,handleSelectionModeChange:n,selectMode:i,zoomIn:r,zoomOut:a,zoomReset:s,position:o,highlight:c})=>(h.useEffect(()=>{const u=d=>{if(d.key==="Shift"&&t&&i==="select"){n("pan");const m=g=>{g.key==="Shift"&&t&&n("select")};return window.addEventListener("keyup",m),()=>{window.removeEventListener("keyup",m)}}};return window.addEventListener("keydown",u),()=>{window.removeEventListener("keydown",u)}},[n,i,t]),p.jsx(p.Fragment,{children:i!=="none"&&p.jsxs(dt,{direction:o==="bottom"?"row":"column",spacing:5,alignItems:"center",justifyContent:"center",children:[t&&p.jsx(Be,{title:"Drag to pan, or hold Shift and drag",children:p.jsx(Ve,{"aria-label":"pan",onClick:()=>n("pan"),sx:{color:i==="pan"?c||"primary.main":"default"},children:p.jsx(oa,{})})}),t&&p.jsx(Be,{title:"Drag to select",children:p.jsx(Ve,{"aria-label":"edit",onClick:()=>n("select"),sx:{color:i==="select"?c||"primary.main":"default"},children:p.jsx(aa,{})})}),p.jsx(Be,{title:"Zoom In",children:p.jsx(Ve,{"aria-label":"zoom-in",onClick:r,children:p.jsx(ca,{})})}),p.jsx(Be,{title:"Zoom Out",children:p.jsx(Ve,{"aria-label":"zoom-out",onClick:a,children:p.jsx(ua,{})})}),p.jsx(Be,{title:"Reset Zoom and Pan",children:p.jsx(Ve,{"aria-label":"resetZoom",onClick:s,disabled:!e,children:p.jsx(la,{})})})]})}));xn.__docgenInfo={description:"",methods:[],displayName:"ControlButtons",props:{selectable:{required:!0,tsType:{name:"boolean"},description:""},resetable:{required:!0,tsType:{name:"boolean"},description:""},handleSelectionModeChange:{required:!0,tsType:{name:"signature",type:"function",raw:'(mode: "select" | "pan" | "none") => void',signature:{arguments:[{type:{name:"union",raw:'"select" | "pan" | "none"',elements:[{name:"literal",value:'"select"'},{name:"literal",value:'"pan"'},{name:"literal",value:'"none"'}]},name:"mode"}],return:{name:"void"}}},description:""},selectMode:{required:!0,tsType:{name:"union",raw:'"select" | "pan" | "none"',elements:[{name:"literal",value:'"select"'},{name:"literal",value:'"pan"'},{name:"literal",value:'"none"'}]},description:""},zoomIn:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},zoomOut:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},zoomReset:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},position:{required:!1,tsType:{name:"union",raw:'"left" | "bottom" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"right"'}]},description:""},highlight:{required:!1,tsType:{name:"string"},description:""}}};const wn=({miniMap:t,width:e,height:n,pointData:i,xScale:r,yScale:a,zoom:s})=>p.jsxs("div",{style:{position:"absolute",bottom:t.position?t.position.bottom:10,right:t.position?t.position.right:10},children:[p.jsx("canvas",{width:(e-100)/4,height:(n-100)/4,ref:o=>{if(o){const c=o.getContext("2d"),u=.25,d=(e-100)*u,m=(n-100)*u;c&&(c.clearRect(0,0,o.width,o.height),c.fillStyle="white",c.fillRect(0,0,d,m),c.strokeStyle="grey",c.lineWidth=4,c.strokeRect(0,0,d,m),i.forEach(g=>{const X=r(g.x)*u,Y=a(g.y)*u;c.beginPath(),c.arc(X,Y,3*u,0,Math.PI*2),c.fillStyle=g.color,c.fill()}))}},style:{display:"block"}}),p.jsx("svg",{width:(e-100)/4,height:(n-100)/4,style:{position:"absolute",top:0,left:0},children:p.jsx("g",{transform:"scale(0.25)",children:p.jsx("rect",{width:e-100,height:n-100,fill:"#0d0f98",fillOpacity:.2,stroke:"#0d0f98",strokeWidth:4,rx:8,transform:s.toStringInvert(),style:{cursor:s.isDragging?"grabbing":"grab"},onMouseDown:s.dragStart,onMouseUp:s.dragEnd,onMouseMove:o=>{s.isDragging&&s.setTransformMatrix({scaleX:s.transformMatrix.scaleX,scaleY:s.transformMatrix.scaleY,translateX:s.transformMatrix.translateX-o.movementX/.25,translateY:s.transformMatrix.translateY-o.movementY/.25,skewX:s.transformMatrix.skewX,skewY:s.transformMatrix.skewY})},onMouseLeave:s.dragEnd,onTouchStart:s.dragStart,onTouchEnd:s.dragEnd,onTouchMove:o=>{if(s.isDragging&&o.touches.length===1){const c=o.touches[0];s.setTransformMatrix({scaleX:s.transformMatrix.scaleX,scaleY:s.transformMatrix.scaleY,translateX:s.transformMatrix.translateX-c.clientX/.25,translateY:s.transformMatrix.translateY-c.clientY/.25,skewX:s.transformMatrix.skewX,skewY:s.transformMatrix.skewY})}}})})})]});wn.__docgenInfo={description:"",methods:[],displayName:"MiniMap",props:{miniMap:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"initialTransformMatrix",value:{name:"TransformMatrix",required:!0}},{key:"transformMatrix",value:{name:"TransformMatrix",required:!0}},{key:"isDragging",value:{name:"boolean",required:!0}}]}}]},description:""}}};const da={scaleX:1,scaleY:1,translateX:0,translateY:0,skewX:0,skewY:0},pa=t=>{var b,D,j,Z,Q,me;const e=mn,n=zn,i={minimap:{open:((D=(b=t.initialState)==null?void 0:b.minimap)==null?void 0:D.open)??!1},controls:{selectionType:(Z=(j=t.initialState)==null?void 0:j.controls)!=null&&Z.selectionType?(me=(Q=t.initialState)==null?void 0:Q.controls)==null?void 0:me.selectionType:t.selectable?"select":"pan"}},{parentRef:r,width:a,height:s}=Un(),o=Math.min(s,a),c=h.useRef(null),[u,d]=ke.useState(null),[m,g]=ke.useState(!1),[X,Y]=h.useState([]),[v,U]=h.useState(i.controls.selectionType),[q,te]=h.useState(i.minimap.open),[K,O]=h.useState(0),[re,T]=h.useState(0),Se=t.selectable?t.selectable:!1,_={top:20,left:70},$=Math.min(o*.9,o*.9)-_.left,I=$,A=u?t.pointData.find(l=>l.x===u.x&&l.y===u.y):null,[V,M]=h.useState([]);h.useEffect(()=>{const l=c.current,x=E=>{E.preventDefault()},S=E=>{E.preventDefault()},w=E=>{E.preventDefault()};return l&&(l.addEventListener("wheel",x,{passive:!1}),l.addEventListener("touchstart",w,{passive:!1}),l.addEventListener("touchmove",S,{passive:!1})),()=>{l&&(l.removeEventListener("wheel",x),l.removeEventListener("touchstart",w),l.removeEventListener("touchmove",S))}},[c]);const de=l=>{U(l)},ae=()=>{te(!q)},ne=h.useMemo(()=>{const l=t.groupPointsAnchor;return l&&A?t.pointData.filter(x=>l in x?x[l]===A[l]:x.metaData&&A.metaData?x.metaData[l]===A.metaData[l]:!1):A?[A]:[]},[A,t.groupPointsAnchor,t.pointData]),J=(l,x,S)=>{const w=l.range().map(E=>l.invert((E-x)/S));return l.copy().domain(w)},B=(l,x,S)=>{const w=l.range().map(E=>l.invert((E-x)/S));return l.copy().domain(w)},se=h.useMemo(()=>!t.pointData||t.pointData.length===0?ze({domain:[0,1],range:[0,$]}):ze({domain:[Math.min(...t.pointData.map(l=>l.x))-1,Math.max(...t.pointData.map(l=>l.x))+1],range:[0,$],nice:!0}),[t.pointData,$]),H=h.useMemo(()=>!t.pointData||t.pointData.length===0?ze({domain:[0,1],range:[I,0]}):ze({domain:[Math.min(...t.pointData.map(l=>l.y))-1,Math.max(...t.pointData.map(l=>l.y))+1],range:[I,0],nice:!0}),[t.pointData,I]),Me=h.useCallback(l=>{if(v==="select"&&(l==null?void 0:l.x)!==void 0&&(l==null?void 0:l.y)!==void 0){const x=l.x-_.left,S=l.y-_.top;Y(w=>[...w,[{x,y:S}]])}},[v,_.left,_.top]),ce=h.useCallback(l=>{if(v==="select"&&(l==null?void 0:l.x)!==void 0&&(l==null?void 0:l.y)!==void 0){const x=l.x-_.left,S=l.y-_.top;Y(w=>{const E=[...w],ee={x:x+l.dx,y:S+l.dy},R=E.length-1;return E[R]=[...E[R]||[],ee],E})}},[v,_.left,_.top]),pe=(l,x)=>{let S=!1;for(let w=0,E=x.length-1;w<x.length;E=w++){const ee=x[w].x,R=x[w].y,C=x[E].x,G=x[E].y;R>l.y!=G>l.y&&l.x<(C-ee)*(l.y-R)/(G-R)+ee&&(S=!S)}return S},oe=h.useCallback(l=>{if(v==="select"){if(X.length===0)return;const x=X[X.length-1],S=J(se,l.transformMatrix.translateX,l.transformMatrix.scaleX),w=B(H,l.transformMatrix.translateY,l.transformMatrix.scaleY),E=t.pointData.filter(ee=>{const R={x:S(ee.x),y:w(ee.y)};return pe(R,x)});t.onSelectionChange&&t.onSelectionChange(E),Y([])}else Y([])},[v,X,se,H,t]),{x:ge=0,y:he=0,dx:we,dy:fe,isDragging:le,dragStart:Ce,dragEnd:Ee,dragMove:ie}=ra({onDragStart:Me,onDragMove:ce,resetOnStart:!0}),Ie=h.useCallback((l,x)=>{if(le||x.isDragging){g(!1),d(null);return}O(l.pageX),T(l.pageY);const S=je(l.currentTarget,l);if(!S)return;const w=S.x-_.left,E=S.y-_.top,ee=J(se,x.transformMatrix.translateX,x.transformMatrix.scaleX),R=B(H,x.transformMatrix.translateY,x.transformMatrix.scaleY),C=5,G=t.pointData.find(N=>{const P=ee(N.x),ve=R(N.y);return Math.abs(w-P)<C&&Math.abs(E-ve)<C});G?(d(G),g(!0)):(d(null),g(!1))},[le,t.pointData,_.left,_.top,se,H]),Pe=h.useCallback(()=>{g(!1),d(null)},[]),Xe=()=>{!t.onPointClicked||!A||A&&t.onPointClicked(A)},Oe=h.useCallback((l,x,S)=>{if(S){const w=S.getContext("2d");if(w){w.setTransform(2,0,0,2,0,0),w.clearRect(0,0,$,I);const E=new Set(ne.map(P=>`${P.x},${P.y}`)),ee=t.pointData.filter(P=>!E.has(`${P.x},${P.y}`)),R=t.pointData.filter(P=>E.has(`${P.x},${P.y}`)),C=[],G=(P,ve)=>{const ue=l(P.x),be=x(P.y),_e=l(P.x)>=0&&l(P.x)<=$&&x(P.y)>=0&&x(P.y)<=I,Ae=(P.r||3)+(ve?2:0);_e&&(C.push(P),w.beginPath(),P.shape==="circle"?w.arc(ue,be,Ae,0,Math.PI*2):P.shape==="triangle"&&(w.moveTo(ue,be-Ae),w.lineTo(ue-Ae,be+Ae),w.lineTo(ue+Ae,be+Ae),w.closePath()),w.fillStyle=P.color?P.color:"black",w.globalAlpha=P.opacity!==void 0?P.opacity:1,w.fill(),ve&&(w.lineWidth=1,w.strokeStyle="black",w.stroke()))};ee.forEach(P=>G(P,!1)),R.forEach(P=>G(P,!0)),((P,ve)=>P.length!==ve.length?!0:!P.every((ue,be)=>{const _e=ve[be];return ue.x===_e.x&&ue.y===_e.y&&ue.r===_e.r&&ue.shape===_e.shape&&ue.color===_e.color&&ue.opacity===_e.opacity}))(V,C)&&(t.onDisplayedPointsChange&&t.onDisplayedPointsChange(C),M(C))}}},[$,I,ne,t,V]),f=p.jsx(Pt,{textAnchor:"middle",verticalAnchor:"end",angle:-90,fontSize:15,y:I/2,x:0,dx:-50,children:t.leftAxisLabel}),y=p.jsx(Pt,{textAnchor:"middle",verticalAnchor:"start",fontSize:15,y:I,x:$/2,dy:50,children:t.bottomAxisLabel});return p.jsx("div",{ref:r,style:{width:"100%",height:"100%",position:"relative"},children:p.jsx(e,{width:$,height:I,scaleXMin:1/2,scaleXMax:10,scaleYMin:1/2,scaleYMax:10,initialTransformMatrix:da,children:l=>{const x=J(se,l.transformMatrix.translateX,l.transformMatrix.scaleX),S=B(H,l.transformMatrix.translateY,l.transformMatrix.scaleY),w=A&&x(A.x)>=0&&x(A.x)<=$&&S(A.y)>=0&&S(A.y)<=I,E=()=>{l.scale({scaleX:1.2,scaleY:1.2})},ee=()=>{l.scale({scaleX:.8,scaleY:.8})},R=()=>{l.reset()};return p.jsxs(p.Fragment,{children:[!t.disableZoom&&p.jsx(dt,{direction:"column",sx:{position:"absolute",left:t.controlsPosition==="left"?10:t.controlsPosition==="bottom"?"50%":null,right:t.controlsPosition==="right"?10:null,top:t.controlsPosition==="bottom"?null:"50%",bottom:t.controlsPosition==="bottom"?10:null,transform:t.controlsPosition==="bottom"?"translateX(-50%)":"translateY(-50%)",zIndex:10},children:p.jsx(xn,{selectable:Se,resetable:l.transformMatrix!==l.initialTransformMatrix,handleSelectionModeChange:de,selectMode:v,zoomIn:E,zoomOut:ee,zoomReset:R,position:t.controlsPosition,highlight:t.controlsHighlight})}),p.jsx(dt,{justifyContent:"center",alignItems:"center",direction:"row",sx:{position:"relative"},children:p.jsx(St,{sx:{width:o,height:o},children:t.loading?p.jsx(St,{display:"flex",width:"100%",height:"100%",sx:{justifyContent:"center",alignItems:"center"},children:p.jsx(Hn,{})}):p.jsxs("div",{style:{position:"relative"},children:[p.jsx("canvas",{ref:C=>{C&&Oe(x,S,C)},width:$*2,height:I*2,style:{userSelect:"none",position:"absolute",top:_.top,left:_.left,width:$,height:I,backgroundColor:"transparent"}}),p.jsxs("svg",{width:o,height:o,style:{position:"absolute",userSelect:"none"},onMouseMove:C=>Ie(C,l),onMouseLeave:Pe,children:[p.jsxs(Dt,{top:_.top,left:_.left,children:[v==="select"&&p.jsxs(p.Fragment,{children:[X.map((C,G)=>p.jsx(zr,{fill:"transparent",stroke:"black",strokeWidth:3,data:C,curve:Ur,x:N=>N.x,y:N=>N.y},`line-${G}`)),le&&p.jsxs("g",{children:[p.jsx("line",{x1:ge-_.left+we-6,y1:he-_.top+fe,x2:ge-_.left+we+6,y2:he-_.top+fe,stroke:"black",strokeWidth:1}),p.jsx("line",{x1:ge-_.left+we,y1:he-_.top+fe-6,x2:ge-_.left+we,y2:he-_.top+fe+6,stroke:"black",strokeWidth:1}),p.jsx("circle",{cx:ge-_.left,cy:he-_.top,r:4,fill:"transparent",stroke:"black",pointerEvents:"none"})]})]}),p.jsx("rect",{ref:c,fill:"transparent",width:$,height:I,style:{cursor:t.disableZoom?t.selectable?le?"none":"crosshair":le?"none":"default":A?"default":v==="select"?le?"none":"crosshair":l.isDragging?"grabbing":"grab"},onMouseDown:v==="none"?void 0:v==="select"?Ce:t.disableZoom?void 0:l.dragStart,onMouseUp:v==="none"?void 0:v==="select"?C=>{Ee(C),oe(l)}:t.disableZoom?void 0:l.dragEnd,onMouseMove:v==="none"?void 0:v==="select"?le?ie:void 0:t.disableZoom?void 0:l.dragMove,onMouseLeave:v==="none"?void 0:v==="select"?C=>{Ee(C),oe(l)}:t.disableZoom?void 0:l.dragEnd,onTouchStart:v==="none"?void 0:v==="select"?Ce:t.disableZoom?void 0:l.dragStart,onTouchEnd:v==="none"?void 0:v==="select"?C=>{Ee(C),oe(l)}:t.disableZoom?void 0:l.dragEnd,onTouchMove:v==="none"?void 0:v==="select"?le?ie:void 0:t.disableZoom?void 0:l.dragMove,onWheel:C=>{if(!t.disableZoom){const G=je(C)||{x:0,y:0},N=C.deltaY<0?1.1:.9;l.scale({scaleX:N,scaleY:N,point:G})}},onClick:Xe})]}),p.jsxs(Dt,{top:_.top,left:_.left,children:[p.jsx(Kn,{numTicks:4,scale:S,tickLabelProps:()=>({fill:"#1c1917",fontSize:10,textAnchor:"end",verticalAnchor:"middle",x:-10})}),p.jsx(Zn,{numTicks:4,top:I,scale:x,tickLabelProps:()=>({fill:"#1c1917",fontSize:11,textAnchor:"middle"})}),f,y]})]})]})})}),t.miniMap&&!t.disableZoom&&p.jsx(Be,{title:"Toggle Minimap",children:p.jsx(Ve,{sx:{position:"absolute",right:10,bottom:10,zIndex:10,width:"auto",height:"auto",color:q?t.controlsHighlight?t.controlsHighlight:"primary.main":"default"},size:"small",onClick:ae,children:p.jsx(sa,{})})}),q&&t.miniMap&&!t.disableZoom&&!t.loading&&p.jsx(wn,{miniMap:t.miniMap,width:o,height:o,pointData:t.pointData,xScale:se,yScale:H,zoom:l}),!t.disableTooltip&&m&&u&&w&&p.jsx(Gn,{children:p.jsx(n,{left:K+10,top:re,children:p.jsx(bn,{tooltipBody:t.tooltipBody,tooltipData:u})})})]})}})})};pa.__docgenInfo={description:"",methods:[],displayName:"ScatterPlot",props:{pointData:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
Note: allowed types depends on zoom and selection availibility`}]},required:!1}}]}},description:""}}};export{pa as S,Be as T,dt as a,Jn as s,ei as u};
