import{r as l,j as e}from"./jsx-runtime-CASrxSZM.js";import{q as x}from"./index-BsAApm54.js";import{t as p,d as f,v as y,w as j,_ as w,O as S,M as g,x as k,S as M,y as E,z as R}from"./components-DUsmJGLL.js";/**
 * @remix-run/react v2.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let c="positions";function O({getKey:t,...s}){let{isSpaMode:n}=p(),r=f(),u=y();j({getKey:t,storageKey:c});let d=l.useMemo(()=>{if(!t)return null;let o=t(r,u);return o!==r.key?o:null},[]);if(n)return null;let h=((o,m)=>{if(!window.history.state||!window.history.state.key){let i=Math.random().toString(32).slice(2);window.history.replaceState({key:i},"")}try{let a=JSON.parse(sessionStorage.getItem(o)||"{}")[m||window.history.state.key];typeof a=="number"&&window.scrollTo(0,a)}catch(i){console.error(i),sessionStorage.removeItem(o)}}).toString();return l.createElement("script",w({},s,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${h})(${JSON.stringify(c)}, ${JSON.stringify(d)})`}}))}const v="/assets/tailwind-2fu1hIz3.css";function _({children:t}){const s=x();return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),e.jsx("link",{rel:"stylesheet",href:v}),e.jsx(g,{}),e.jsx(k,{})]}),e.jsxs("body",{children:[t,e.jsx(O,{nonce:s}),e.jsx(M,{nonce:s})]})]})}function J(){return e.jsx(S,{})}function $(){var r;const t=E();let s="Unknown error",n=500;return R(t)?(s=((r=t==null?void 0:t.data)==null?void 0:r.message)??t.data,n=t.status):t instanceof Error&&(s=t.message),e.jsxs("div",{className:"route-error",children:[e.jsx("h1",{children:"Oops"}),e.jsx("h2",{children:n}),s&&e.jsx("fieldset",{children:e.jsx("pre",{children:s})})]})}export{$ as ErrorBoundary,_ as Layout,J as default};
