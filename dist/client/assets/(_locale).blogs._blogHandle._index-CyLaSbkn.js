import{j as s}from"./jsx-runtime-CASrxSZM.js";import{P as t}from"./PaginatedResourceSection-D6mx_qoi.js";import{u as l,L as r}from"./components-DUsmJGLL.js";import{I as a}from"./Image-Cb8ns8_Z.js";import"./index-BsAApm54.js";const u=({data:e})=>[{title:`Hydrogen | ${(e==null?void 0:e.blog.title)??""} blog`}];function j(){const{blog:e}=l(),{articles:n}=e;return s.jsxs("div",{className:"blog",children:[s.jsx("h1",{children:e.title}),s.jsx("div",{className:"blog-grid",children:s.jsx(t,{connection:n,children:({node:i,index:o})=>s.jsx(m,{article:i,loading:o<2?"eager":"lazy"},i.id)})})]})}function m({article:e,loading:n}){const i=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(new Date(e.publishedAt));return s.jsx("div",{className:"blog-article",children:s.jsxs(r,{to:`/blogs/${e.blog.handle}/${e.handle}`,children:[e.image&&s.jsx("div",{className:"blog-article-image",children:s.jsx(a,{alt:e.image.altText||e.title,aspectRatio:"3/2",data:e.image,loading:n,sizes:"(min-width: 768px) 50vw, 100vw"})}),s.jsx("h3",{children:e.title}),s.jsx("small",{children:i})]})},e.id)}export{j as default,u as meta};
