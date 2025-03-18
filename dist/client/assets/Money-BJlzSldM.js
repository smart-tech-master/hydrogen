import{r as l,j as y}from"./jsx-runtime-CASrxSZM.js";const F="2025-01",S={storeDomain:"test",storefrontToken:"abc123",storefrontApiVersion:F,countryIsoCode:"US",languageIsoCode:"EN",getStorefrontApiUrl(){return""},getPublicTokenHeaders(){return{}},getShopifyDomain(){return""}},v=l.createContext(S);function x(){const r=l.useContext(v);if(!r)throw new Error("'useShop()' must be a descendent of <ShopifyProvider/>");return r}function T(r){const{countryIsoCode:c,languageIsoCode:n}=x(),e=n.includes("_")?n.replace("_","-"):`${n}-${c}`;if(!e)throw new Error("useMoney(): Unable to get 'locale' from 'useShop()', which means that 'locale' was not passed to '<ShopifyProvider/>'. 'locale' is required for 'useMoney()' to work");const o=parseFloat(r.amount),{defaultFormatter:a,nameFormatter:m,narrowSymbolFormatter:i,withoutTrailingZerosFormatter:f,withoutCurrencyFormatter:u,withoutTrailingZerosOrCurrencyFormatter:p}=l.useMemo(()=>{const t={style:"currency",currency:r.currencyCode};return{defaultFormatter:s(e,t),nameFormatter:s(e,{...t,currencyDisplay:"name"}),narrowSymbolFormatter:s(e,{...t,currencyDisplay:"narrowSymbol"}),withoutTrailingZerosFormatter:s(e,{...t,minimumFractionDigits:0,maximumFractionDigits:0}),withoutCurrencyFormatter:s(e),withoutTrailingZerosOrCurrencyFormatter:s(e,{minimumFractionDigits:0,maximumFractionDigits:0})}},[r.currencyCode,e]),d=t=>t.type==="currency",g=l.useMemo(()=>({original:()=>r,currencyCode:()=>r.currencyCode,localizedString:()=>a().format(o),parts:()=>a().formatToParts(o),withoutTrailingZeros:()=>o%1===0?f().format(o):a().format(o),withoutTrailingZerosAndCurrency:()=>o%1===0?p().format(o):u().format(o),currencyName:()=>{var t;return((t=m().formatToParts(o).find(d))==null?void 0:t.value)??r.currencyCode},currencySymbol:()=>{var t;return((t=a().formatToParts(o).find(d))==null?void 0:t.value)??r.currencyCode},currencyNarrowSymbol:()=>{var t;return((t=i().formatToParts(o).find(d))==null?void 0:t.value)??""},amount:()=>a().formatToParts(o).filter(t=>["decimal","fraction","group","integer","literal"].includes(t.type)).map(t=>t.value).join("")}),[r,o,m,a,i,u,f,p]);return l.useMemo(()=>new Proxy(g,{get:(t,w)=>{var h;return(h=Reflect.get(t,w))==null?void 0:h.call(null)}}),[g])}const C=new Map;function s(r,c){const n=JSON.stringify([r,c]);return function(){let e=C.get(n);return e||(e=new Intl.NumberFormat(r,c),C.set(n,e)),e}}function D({data:r,as:c,withoutCurrency:n,withoutTrailingZeros:e,measurement:o,measurementSeparator:a="/",...m}){if(!P(r))throw new Error("<Money/> needs a valid 'data' prop that has 'amount' and 'currencyCode'");const i=T(r),f=c??"div";let u=i.localizedString;return(n||e)&&(n&&!e?u=i.amount:!n&&e?u=i.withoutTrailingZeros:u=i.withoutTrailingZerosAndCurrency),y.jsxs(f,{...m,children:[u,o&&o.referenceUnit&&y.jsxs(y.Fragment,{children:[a,o.referenceUnit]})]})}function P(r){return typeof r.amount=="string"&&!!r.amount&&typeof r.currencyCode=="string"&&!!r.currencyCode}export{D as M};
