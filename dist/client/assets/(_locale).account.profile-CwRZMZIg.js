import{j as e}from"./jsx-runtime-CASrxSZM.js";import{a as l,b as i,c as n,F as m}from"./components-DUsmJGLL.js";const c=()=>[{title:"Profile"}];function u(){const a=l(),{state:s}=i(),t=n(),r=(t==null?void 0:t.customer)??(a==null?void 0:a.customer);return e.jsxs("div",{className:"account-profile",children:[e.jsx("h2",{children:"My profile"}),e.jsx("br",{}),e.jsxs(m,{method:"PUT",children:[e.jsx("legend",{children:"Personal information"}),e.jsxs("fieldset",{children:[e.jsx("label",{htmlFor:"firstName",children:"First name"}),e.jsx("input",{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",placeholder:"First name","aria-label":"First name",defaultValue:r.firstName??"",minLength:2}),e.jsx("label",{htmlFor:"lastName",children:"Last name"}),e.jsx("input",{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",placeholder:"Last name","aria-label":"Last name",defaultValue:r.lastName??"",minLength:2})]}),t!=null&&t.error?e.jsx("p",{children:e.jsx("mark",{children:e.jsx("small",{children:t.error})})}):e.jsx("br",{}),e.jsx("button",{type:"submit",disabled:s!=="idle",children:s!=="idle"?"Updating":"Update"})]})]})}export{u as default,c as meta};
