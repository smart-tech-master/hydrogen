import{j as t}from"./jsx-runtime-CASrxSZM.js";import{u as c,O as r,N as s,F as u}from"./components-DUsmJGLL.js";function x(){return!0}function j(){const{customer:o}=c(),e=o?o.firstName?`Welcome, ${o.firstName}`:"Welcome to your account.":"Account Details";return t.jsxs("div",{className:"account",children:[t.jsx("h1",{children:e}),t.jsx("br",{}),t.jsx(a,{}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(r,{context:{customer:o}})]})}function a(){function o({isActive:e,isPending:n}){return{fontWeight:e?"bold":void 0,color:n?"grey":"black"}}return t.jsxs("nav",{role:"navigation",children:[t.jsx(s,{to:"/account/orders",style:o,children:"Orders  "})," | ",t.jsx(s,{to:"/account/profile",style:o,children:"  Profile  "})," | ",t.jsx(s,{to:"/account/addresses",style:o,children:"  Addresses  "})," | ",t.jsx(i,{})]})}function i(){return t.jsxs(u,{className:"account-logout",method:"POST",action:"/account/logout",children:[" ",t.jsx("button",{type:"submit",children:"Sign out"})]})}export{j as default,x as shouldRevalidate};
